import Header from '../components/Header';
import Footer from '../components/Footer';
import GuideBuyButton from '../components/GuideBuyButton';

export const metadata = {
    title: 'Купить гайд | Дарья Омельченко',
    description: 'Гайд "Здоровая тарелка": как составить рацион на каждый день.',
};

export default function GuidePage() {
    return (
        <>
            <Header simple />
            <main>
                <section className="guide-page section">
                    <div className="container">
                        <div className="guide-layout">
                            <div className="guide-info">
                                <div className="eyebrow">PDF-гайд</div>
                                <h1>Гайд "Здоровая тарелка: как составить рацион на каждый день"</h1>
                                <p className="guide-description">Этот гайд — ваша шпаргалка по сбалансированному питанию. Внутри вы найдете:</p>
                                <ul>
                                    <li>Принцип конструктора здоровой тарелки</li>
                                    <li>Списки продуктов по категориям (белки, жиры, углеводы, клетчатка)</li>
                                    <li>15 примеров сбалансированных приемов пищи</li>
                                    <li>Советы по выбору продуктов в супермаркете</li>
                                </ul>
                                <div className="guide-price">990 ₽</div>
                                <GuideBuyButton />
                            </div>
                            <div className="guide-image">
                                <div className="image-placeholder guide-cover">Здоровая тарелка</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer compact />
        </>
    );
}
