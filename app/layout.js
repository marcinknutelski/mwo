import './globals.css';

export const metadata = {
  title: 'Reinbar | Kompozyty dla nowoczesnego budownictwa',
  description:
    'Rebranding Reinbar: pręty i siatki kompozytowe, włókna do betonu, DFOS, materiały do produkcji kompozytów, maszyny oraz usługi betonowe.',
  keywords: [
    'Reinbar',
    'pręty kompozytowe',
    'siatki kompozytowe',
    'włókna do betonu',
    'DFOS',
    'prefabrykaty betonowe',
    'beton towarowy'
  ],
  openGraph: {
    title: 'Reinbar | Nowoczesne rozwiązania kompozytowe',
    description:
      'Nowa, interaktywna strona Reinbar z rozbudowaną ofertą produktów, usług i strefą wiedzy.',
    locale: 'pl_PL',
    type: 'website',
    url: 'https://www.reinbar.pl'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
