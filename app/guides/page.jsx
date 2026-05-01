import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Гайды | Дарья Омельченко',
    description: 'Практичные PDF-гайды по питанию и здоровым привычкам.',
};

export default function GuidesPage() {
    return (
        <>
            <Header simple />
            <main>
                <section className="page-hero">
                    <div className="container">
                        <div className="page-hero-inner">
                            <div className="eyebrow">Библиотека</div>
                            <h1>Гайды для спокойного старта</h1>
                            <p>Практичные материалы, которые помогают собрать рацион, разобраться с привычками и начать менять питание без перегруза.</p>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className="guide-list-grid">
                            <article className="service-card guide-card">
                                <div className="image-placeholder">Здоровая тарелка</div>
                                <div className="service-topline">PDF-гайд</div>
                                <h3>Гайд "Здоровая тарелка"</h3>
                                <p>Как составить рацион на каждый день без подсчета калорий.</p>
                                <div className="price">990 ₽</div>
                                <Link href="/guide" className="btn btn-primary">Подробнее</Link>
                            </article>

                            <article className="service-card guide-card">
                                <div className="image-placeholder">Жизнь без сахара</div>
                                <div className="service-topline">Скоро</div>
                                <h3>Гайд "Жизнь без сахара"</h3>
                                <p>Пошаговая инструкция, как избавиться от сахарной зависимости за 21 день.</p>
                                <div className="price">1 490 ₽</div>
                                <a href="#" className="btn btn-outline is-disabled" aria-disabled="true">Скоро в продаже</a>
                            </article>

                            <article className="service-card guide-card">
                                <div className="image-placeholder">50 завтраков</div>
                                <div className="service-topline">Скоро</div>
                                <h3>Сборник рецептов</h3>
                                <p>50 быстрых, вкусных и сбалансированных завтраков на каждый день.</p>
                                <div className="price">1 200 ₽</div>
                                <a href="#" className="btn btn-outline is-disabled" aria-disabled="true">Скоро в продаже</a>
                            </article>
                        </div>
                    </div>
                </section>
            </main>
            <Footer compact />
        </>
    );
}
