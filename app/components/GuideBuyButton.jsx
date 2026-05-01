'use client';

import { useState } from 'react';

export default function GuideBuyButton({ productId }) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    async function handleBuy() {
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('/api/payments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId,
                }),
            });

            const data = await response.json();

            if (!response.ok || !data.confirmationUrl) {
                throw new Error(data.error || 'Не удалось создать платеж');
            }

            window.location.href = data.confirmationUrl;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Не удалось перейти к оплате');
            setIsLoading(false);
        }
    }

    return (
        <div className="purchase-actions">
            <button type="button" id="buy-btn" className="btn btn-primary" onClick={handleBuy} disabled={isLoading}>
                {isLoading ? 'Переходим к оплате...' : 'Купить сейчас'}
            </button>
            {error && <p className="payment-error">{error}</p>}
        </div>
    );
}
