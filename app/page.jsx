import Image from 'next/image';
import Link from 'next/link';
import dariaPortrait from '../assets/image-1.png';
import dariaHero from '../assets/image-2.png';
import Header from './components/Header';
import Footer from './components/Footer';

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                <section className="hero">
                    <div className="container hero-container">
                        <div className="hero-content">
                            <div className="eyebrow">Нутрициология без диет и хаоса</div>
                            <h1>Питание для энергии и легкости</h1>
                            <p className="hero-text">Я помогу бережно перестроить рацион, разобраться с дефицитами и прийти к форме без запретов, марафонов и чувства вины.</p>
                            <div className="hero-actions">
                                <Link href="/#services" className="btn btn-primary">Выбрать программу</Link>
                                <Link href="/guides" className="btn btn-glass">Смотреть гайды</Link>
                            </div>
                            <div className="hero-metrics" aria-label="Преимущества подхода">
                                <div>
                                    <strong>4 недели</strong>
                                    <span>до понятной системы питания</span>
                                </div>
                                <div>
                                    <strong>24/7</strong>
                                    <span>поддержка в сопровождении</span>
                                </div>
                                <div>
                                    <strong>0</strong>
                                    <span>жестких запретов</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero-visual">
                            <div className="orb orb-one"></div>
                            <div className="orb orb-two"></div>
                            <div className="hero-photo-card">
                                <Image
                                    src={dariaHero}
                                    alt="Дарья Омельченко, нутрициолог"
                                    className="hero-photo"
                                    priority
                                    sizes="(max-width: 980px) 80vw, 420px"
                                />
                                <div className="hero-photo-caption">
                                    <strong>Дарья Омельченко</strong>
                                    <span>нутрициолог, персональный подход к питанию</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="trust-strip">
                    <div className="container trust-grid">
                        <span>Доказательный подход</span>
                        <span>Персональный рацион</span>
                        <span>Вкусная еда без запретов</span>
                        <span>Поддержка между встречами</span>
                    </div>
                </section>

                <section id="about" className="about section">
                    <div className="container about-layout">
                        <div className="about-heading">
                            <div className="eyebrow">Подход</div>
                            <h2 className="section-title align-left">Не очередная диета, а система, которую реально сохранить</h2>
                        </div>
                        <div className="about-media">
                            <div className="about-portrait-card">
                                <Image
                                    src={dariaPortrait}
                                    alt="Портрет Дарьи Омельченко"
                                    className="about-portrait"
                                    sizes="(max-width: 980px) 100vw, 430px"
                                />
                            </div>
                        </div>
                        <div className="about-content">
                            <p>Привет! Меня зовут Дарья Омельченко, я нутрициолог. Я работаю с питанием, образом жизни и привычками так, чтобы изменения вписывались в ваш обычный график, семью, работу и любимые продукты.</p>
                            <p>Вместо универсальных меню вы получаете понятную структуру: что есть, как собирать тарелку, где могут быть дефициты и какие шаги дадут результат именно вам.</p>
                            <ul className="features">
                                <li><span>01</span> Диагностика рациона, самочувствия и целей</li>
                                <li><span>02</span> Разбор анализов и возможных дефицитов</li>
                                <li><span>03</span> План питания без запретов и с понятными заменами</li>
                                <li><span>04</span> Поддержка, корректировки и спокойный темп</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="method section bg-soft">
                    <div className="container">
                        <div className="section-heading">
                            <div className="eyebrow">Как проходит работа</div>
                            <h2 className="section-title">От хаоса в питании к ясной системе</h2>
                        </div>
                        <div className="method-grid">
                            <article className="method-card">
                                <span>1</span>
                                <h3>Аудит</h3>
                                <p>Смотрим рацион, режим, симптомы, цели и текущие ограничения.</p>
                            </article>
                            <article className="method-card">
                                <span>2</span>
                                <h3>Стратегия</h3>
                                <p>Собираем реалистичный план питания, добавок и бытовых привычек.</p>
                            </article>
                            <article className="method-card">
                                <span>3</span>
                                <h3>Сопровождение</h3>
                                <p>Корректируем шаги по факту жизни, а не по идеальной картинке.</p>
                            </article>
                        </div>
                    </div>
                </section>

                <section id="services" className="services section">
                    <div className="container">
                        <div className="section-heading">
                            <div className="eyebrow">Программы</div>
                            <h2 className="section-title">Выберите формат под вашу цель</h2>
                        </div>
                        <div className="services-grid">
                            <article className="service-card">
                                <div className="service-topline">Старт</div>
                                <h3>Разовая консультация</h3>
                                <p>Подойдет, если нужен профессиональный взгляд на рацион, анализы и первые понятные шаги.</p>
                                <ul>
                                    <li>Анализ дневника питания</li>
                                    <li>Рекомендации по тарелке и режиму</li>
                                    <li>План действий на 2 недели</li>
                                </ul>
                                <div className="price">5 000 ₽</div>
                                <a className="btn btn-outline" href="https://t.me/dariandme">Записаться</a>
                            </article>
                            <article className="service-card featured">
                                <div className="service-badge">популярно</div>
                                <div className="service-topline">Глубокая работа</div>
                                <h3>Месячное сопровождение</h3>
                                <p>Для тех, кто хочет не просто рекомендации, а устойчивую систему и поддержку в процессе.</p>
                                <ul>
                                    <li>Персональная стратегия питания</li>
                                    <li>Еженедельные созвоны</li>
                                    <li>Поддержка и корректировки в мессенджере</li>
                                </ul>
                                <div className="price">15 000 ₽</div>
                                <a className="btn btn-primary" href="https://t.me/dariandme">Начать сопровождение</a>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="guide-promo section">
                    <div className="container guide-promo-card">
                        <div>
                            <div className="eyebrow">Материалы</div>
                            <h2>Гайды, которые помогают начать уже сегодня</h2>
                            <p>Короткие практичные материалы про здоровую тарелку, сахар, завтраки и продуктовую корзину. Можно использовать самостоятельно или как дополнение к консультации.</p>
                        </div>
                        <Link href="/guides" className="btn btn-primary">Смотреть гайды</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
