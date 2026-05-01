import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { guides } from '../data/guides';

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
                            {guides.map((guide) => (
                                <article className="service-card guide-card" key={guide.slug}>
                                    <div className="image-placeholder">{guide.coverTitle}</div>
                                    <div className="service-topline">{guide.badge}</div>
                                    <h3>{guide.title}</h3>
                                    <p>{guide.description}</p>
                                    <div className="price">{guide.price}</div>
                                    <Link href={`/guides/${guide.slug}`} className={guide.available ? 'btn btn-primary' : 'btn btn-outline'}>
                                        {guide.available ? 'Подробнее' : 'Открыть страницу'}
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer compact />
        </>
    );
}
