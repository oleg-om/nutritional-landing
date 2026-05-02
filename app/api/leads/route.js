import { NextResponse } from 'next/server';

function cleanValue(value) {
    return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value) {
    return value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;');
}

export async function POST(request) {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_LEAD_CHAT_ID;

    if (!botToken || !chatId) {
        return NextResponse.json(
            { error: 'Telegram уведомления не настроены: добавьте TELEGRAM_BOT_TOKEN и TELEGRAM_LEAD_CHAT_ID в .env.local' },
            { status: 500 },
        );
    }

    const body = await request.json().catch(() => ({}));
    const name = cleanValue(body.name);
    const age = cleanValue(body.age);
    const email = cleanValue(body.email);
    const telegram = cleanValue(body.telegram);
    const program = cleanValue(body.program) || 'Не указана';

    if (!name || !age) {
        return NextResponse.json({ error: 'Имя и возраст обязательны' }, { status: 400 });
    }

    if (!email && !telegram) {
        return NextResponse.json({ error: 'Укажите email или Telegram' }, { status: 400 });
    }

    const message = [
        '<b>Новая заявка с сайта</b>',
        '',
        `<b>Программа:</b> ${escapeHtml(program)}`,
        `<b>Имя:</b> ${escapeHtml(name)}`,
        `<b>Возраст:</b> ${escapeHtml(age)}`,
        `<b>Email:</b> ${email ? escapeHtml(email) : 'не указан'}`,
        `<b>Telegram:</b> ${telegram ? escapeHtml(telegram) : 'не указан'}`,
    ].join('\n');

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML',
            disable_web_page_preview: true,
        }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok || !data.ok) {
        return NextResponse.json(
            { error: data.description || 'Telegram не принял уведомление' },
            { status: 502 },
        );
    }

    return NextResponse.json({ ok: true });
}
