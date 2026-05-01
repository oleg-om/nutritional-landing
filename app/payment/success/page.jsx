import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
    title: 'Оплата принята | Дарья Омельченко',
};

export default function PaymentSuccessPage() {
    return (
        <>
            <Header simple />
            <main>
                <section className="section">
                    <div className="container">
                        <div className="success-message payment-result">
                            <h1>Спасибо за покупку!</h1>
                            <p>Если платеж прошел успешно, ссылка на гайд будет отправлена после обработки заказа. Для автоматической выдачи файла понадобится серверная обработка webhook от YooKassa.</p>
                            <Link href="/guides" className="btn btn-primary">Вернуться к гайдам</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer compact />
        </>
    );
}
