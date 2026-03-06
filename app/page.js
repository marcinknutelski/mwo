'use client';

import { useState } from 'react';

const menuItems = [
  {
    title: 'Produkty',
    links: [
      'Pręty kompozytowe',
      'Siatki kompozytowe',
      'Włókna do betonu',
      'Czujniki DFOS',
      'Materiały do produkcji kompozytów',
      'Maszyny i urządzenia'
    ]
  },
  {
    title: 'Usługi',
    links: ['Beton towarowy', 'Prefabrykaty betonowe']
  },
  {
    title: 'Projekty',
    links: ['Realizacje infrastrukturalne', 'Współpraca B2B', 'Studia przypadków']
  },
  {
    title: 'Strefa wiedzy',
    links: ['Blog techniczny', 'Webinary', 'Materiały do pobrania']
  }
];

const cards = [
  {
    title: 'Kompozyty nowej generacji',
    text: 'Lżejsze i trwalsze zamienniki stali dla projektów infrastrukturalnych i przemysłowych.'
  },
  {
    title: 'Integracja DFOS',
    text: 'Ciągły monitoring konstrukcji i szybsze decyzje serwisowe oparte na danych.'
  },
  {
    title: 'Kompleksowa realizacja',
    text: 'Od materiałów i maszyn po usługi betonowe i prefabrykację na zamówienie.'
  }
];

export default function HomePage() {
  const [activeMenu, setActiveMenu] = useState('Produkty');

  return (
    <main>
      <header className="hero" id="top">
        <nav className="topNav">
          <a className="logo" href="#top" aria-label="Reinbar - strona główna">
            REINBAR
          </a>
          <ul>
            {menuItems.map((item) => (
              <li key={item.title}>
                <button
                  className={activeMenu === item.title ? 'active' : ''}
                  onClick={() => setActiveMenu(item.title)}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <section className="heroContent">
          <p className="eyebrow">Rebranding 2026</p>
          <h1>Nowoczesna platforma Reinbar dla inżynierii kompozytowej i betonowej</h1>
          <p>
            Projektujemy nową jakość komunikacji marki: szybka nawigacja, rozbudowana oferta,
            sekcja projektowa i ekspercka strefa wiedzy.
          </p>
          <a href="#oferta" className="cta">
            Poznaj ofertę
          </a>
        </section>
      </header>

      <section className="menuShowcase" id="oferta">
        <h2>{activeMenu}</h2>
        <div className="pillGrid">
          {menuItems
            .find((item) => item.title === activeMenu)
            .links.map((link) => (
              <article key={link} className="pillCard">
                <h3>{link}</h3>
                <p>
                  Dedykowana podstrona produktu/usługi z opisem technicznym, parametrami i CTA do
                  kontaktu.
                </p>
              </article>
            ))}
        </div>
      </section>

      <section className="valueSection">
        <h2>Dlaczego nowa strona Reinbar?</h2>
        <div className="valueGrid">
          {cards.map((card) => (
            <article key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
