import { randomUUID } from 'crypto';
import { NextResponse } from 'next/server';

const PRODUCTS = {
    'healthy-plate-guide': {
        title: 'Гайд "Здоровая тарелка"',
        amount: '990.00',
    },
};

export async function POST(request) {
    const shopId = process.env.YOOKASSA_SHOP_ID;
    const secretKey = process.env.YOOKASSA_SECRET_KEY;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin;

    if (!shopId || !secretKey) {
        return NextResponse.json(
            { error: 'YooKassa не настроена: добавьте YOOKASSA_SHOP_ID и YOOKASSA_SECRET_KEY в .env.local' },
            { status: 500 },
        );
    }

    const body = await request.json().catch(() => ({}));
    const product = PRODUCTS[body.productId];

    if (!product) {
        return NextResponse.json({ error: 'Товар не найден' }, { status: 400 });
    }

    const authToken = Buffer.from(`${shopId}:${secretKey}`).toString('base64');
    const response = await fetch('https://api.yookassa.ru/v3/payments', {
        method: 'POST',
        headers: {
            Authorization: `Basic ${authToken}`,
            'Content-Type': 'application/json',
            'Idempotence-Key': randomUUID(),
        },
        body: JSON.stringify({
            amount: {
                value: product.amount,
                currency: 'RUB',
            },
            capture: true,
            confirmation: {
                type: 'redirect',
                return_url: `${siteUrl}/payment/success`,
            },
            description: product.title,
            metadata: {
                productId: body.productId,
            },
        }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        return NextResponse.json(
            { error: data.description || data.message || 'YooKassa отклонила создание платежа' },
            { status: response.status },
        );
    }

    return NextResponse.json({
        paymentId: data.id,
        confirmationUrl: data.confirmation?.confirmation_url,
    });
}
