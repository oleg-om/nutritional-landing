import '../css/style.css';

export const metadata = {
    title: 'Дарья Омельченко | Нутрициолог',
    description: 'Нутрициология без диет и хаоса: консультации, сопровождение и практичные гайды.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body>{children}</body>
        </html>
    );
}
