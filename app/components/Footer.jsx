export default function Footer({ compact = false }) {
    return (
        <footer id="contacts" className="footer">
            <div className="container footer-grid">
                <div>
                    <div className="logo footer-logo">
                        <span>Дарья</span>
                        <strong>Омельченко</strong>
                    </div>
                    <p>{compact ? 'Материалы по питанию, которые легко встроить в обычную жизнь.' : 'Нутрициология, которая возвращает опору, энергию и удовольствие от еды.'}</p>
                </div>
                {!compact && (
                    <div>
                        <h3>Связаться</h3>
                        <p>Telegram: @dariandme</p>
                        <div className="socials">
                            <a href="https://t.me/dariandme">Telegram</a>
                        </div>
                    </div>
                )}
                <p className="copyright">&copy; 2026 Дарья Омельченко. Все права защищены. ИНН: 910213749765</p>
            </div>
        </footer>
    );
}
