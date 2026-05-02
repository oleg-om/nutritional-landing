'use client';

import { useEffect, useState } from 'react';

const initialForm = {
    name: '',
    age: '',
    email: '',
    telegram: '',
};

export default function LeadForm({ programs }) {
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState('');

    const isOpen = Boolean(selectedProgram);

    useEffect(() => {
        if (!isOpen) return;

        function handleEscape(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        }

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen]);

    function openModal(program) {
        setSelectedProgram(program);
        setForm(initialForm);
        setStatus('idle');
        setError('');
    }

    function closeModal() {
        if (status === 'submitting') return;
        setSelectedProgram(null);
    }

    function updateField(event) {
        const { name, value } = event.target;
        setForm((current) => ({
            ...current,
            [name]: value,
        }));
    }

    function validateForm() {
        if (!form.name.trim()) {
            return 'Введите имя';
        }

        if (!form.age.trim()) {
            return 'Введите возраст';
        }

        if (!form.email.trim() && !form.telegram.trim()) {
            return 'Укажите email или Telegram';
        }

        return '';
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        setStatus('submitting');
        setError('');

        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                    program: selectedProgram?.title,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Не удалось отправить заявку');
            }

            setStatus('success');
            setForm(initialForm);
        } catch (err) {
            setStatus('idle');
            setError(err instanceof Error ? err.message : 'Не удалось отправить заявку');
        }
    }

    return (
        <>
            <div className="services-grid">
                {programs.map((program) => (
                    <article className={`service-card${program.featured ? ' featured' : ''}`} key={program.title}>
                        {program.badge && <div className="service-badge">{program.badge}</div>}
                        <div className="service-topline">{program.topline}</div>
                        <h3>{program.title}</h3>
                        <p>{program.description}</p>
                        <ul>
                            {program.features.map((feature) => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </ul>
                        <div className="price">{program.price}</div>
                        <button
                            type="button"
                            className={`btn ${program.featured ? 'btn-primary' : 'btn-outline'}`}
                            onClick={() => openModal(program)}
                        >
                            {program.buttonLabel}
                        </button>
                    </article>
                ))}
            </div>

            {isOpen && (
                <div className="modal lead-modal" role="dialog" aria-modal="true" aria-labelledby="lead-form-title" onMouseDown={(event) => {
                    if (event.target === event.currentTarget) {
                        closeModal();
                    }
                }}>
                    <div className="modal-content lead-modal-content">
                        <button type="button" className="close-btn" onClick={closeModal} aria-label="Закрыть форму">
                            <span aria-hidden="true"></span>
                        </button>

                        {status === 'success' ? (
                            <div className="lead-success">
                                <h2 id="lead-form-title">Заявка отправлена</h2>
                                <p>Спасибо! Я получила вашу заявку и скоро свяжусь с вами.</p>
                                <button type="button" className="btn btn-primary w-100" onClick={closeModal}>Закрыть</button>
                            </div>
                        ) : (
                            <>
                                <h2 id="lead-form-title">Запись на программу</h2>
                                <p className="lead-program-name">{selectedProgram?.title}</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="lead-name">Имя *</label>
                                        <input id="lead-name" name="name" value={form.name} onChange={updateField} required placeholder="Ваше имя" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lead-age">Возраст *</label>
                                        <input id="lead-age" name="age" value={form.age} onChange={updateField} required inputMode="numeric" placeholder="Например, 32" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lead-email">Email</label>
                                        <input id="lead-email" name="email" type="email" value={form.email} onChange={updateField} placeholder="example@mail.ru" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lead-telegram">Telegram</label>
                                        <input id="lead-telegram" name="telegram" value={form.telegram} onChange={updateField} placeholder="@username" />
                                    </div>
                                    <p className="form-hint">Заполните email или Telegram, чтобы я могла с вами связаться.</p>
                                    {error && <p className="payment-error">{error}</p>}
                                    <button type="submit" className="btn btn-primary w-100" disabled={status === 'submitting'}>
                                        {status === 'submitting' ? 'Отправляю...' : 'Отправить заявку'}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
