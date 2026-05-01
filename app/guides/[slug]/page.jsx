import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GuideBuyButton from '../../components/GuideBuyButton';
import { getGuideBySlug, guides } from '../../data/guides';

export function generateStaticParams() {
    return guides.map((guide) => ({
        slug: guide.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const guide = getGuideBySlug(slug);

    if (!guide) {
        return {
            title: 'Гайд не найден | Дарья Омельченко',
        };
    }

    return {
        title: `${guide.title} | Дарья Омельченко`,
        description: guide.description,
    };
}

export default async function GuideDetailPage({ params }) {
    const { slug } = await params;
    const guide = getGuideBySlug(slug);

    if (!guide) {
        notFound();
    }

    return (
        <>
            <Header simple />
            <main>
                <section className="guide-page section">
                    <div className="container">
                        <div className="guide-layout">
                            <div className="guide-info">
                                <div className="eyebrow">{guide.badge}</div>
                                <h1>{guide.fullTitle}</h1>
                                <p className="guide-description">{guide.detailDescription}</p>
                                <ul>
                                    {guide.features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                                <div className="guide-price">{guide.price}</div>
                                {guide.available ? (
                                    <GuideBuyButton productId={guide.productId} />
                                ) : (
                                    <div className="purchase-actions">
                                        <button type="button" className="btn btn-outline is-disabled" disabled>
                                            Скоро в продаже
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div className="guide-image">
                                <div className="image-placeholder guide-cover">{guide.coverTitle}</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer compact />
        </>
    );
}
