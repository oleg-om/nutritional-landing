import Link from 'next/link';

export default function Header({ simple = false }) {
    return (
        <header className="header">
            <div className="container header-container">
                <Link href="/" className="logo" aria-label="На главную">
                    <span>Дарья</span>
                    <strong>Омельченко</strong>
                </Link>
                <nav className="nav" aria-label="Основная навигация">
                    {simple ? (
                        <>
                            <Link href="/">На главную</Link>
                            <Link href="/guides">Все гайды</Link>
                        </>
                    ) : (
                        <>
                            <Link href="/#about">Метод</Link>
                            <Link href="/#services">Программы</Link>
                            <Link href="/guides" className="nav-guide">Гайды</Link>
                            <Link href="/#contacts">Контакты</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}
