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

const highlights = [
  {
    title: 'Inżynieria kompozytów',
    text: 'Projektujemy i wdrażamy systemy zbrojenia o wysokiej trwałości i niskiej masie.'
  },
  {
    title: 'Technologie DFOS',
    text: 'Monitoring konstrukcji w czasie rzeczywistym i precyzyjna diagnostyka stanu obiektów.'
  },
  {
    title: 'Kompletna oferta',
    text: 'Od produktów i materiałów po usługi betonu towarowego i prefabrykację.'
  }
];

export default function HomePage() {
  const [openMenu, setOpenMenu] = useState('Produkty');

  return (
    <main className="page">
      <header className="siteHeader">
        <a className="logo" href="#top" aria-label="Reinbar - strona główna">
          REINBAR
        </a>

        <nav className="topNav" aria-label="Nawigacja główna">
          {menuItems.map((item) => (
            <div
              className="dropdown"
              key={item.title}
              onMouseEnter={() => setOpenMenu(item.title)}
              onFocus={() => setOpenMenu(item.title)}
            >
              <button
                className={`navButton ${openMenu === item.title ? 'isOpen' : ''}`}
                onClick={() => setOpenMenu((prev) => (prev === item.title ? '' : item.title))}
                aria-expanded={openMenu === item.title}
              >
                {item.title}
                <span className="chevron">▾</span>
              </button>

              <div className={`dropdownPanel ${openMenu === item.title ? 'show' : ''}`}>
                {item.links.map((link) => (
                  <a href="#oferta" key={link}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="heroBg" aria-hidden>
          <div className="blob blobOrange" />
          <div className="blob blobCyan" />
          <div className="overlay" />
        </div>

        <div className="heroInner">
          <div className="heroContent">
            <div className="badge">Deep Tech w Budownictwie</div>

            <h1>
              Rewolucja w <br />
              <span>Zbrojeniu Betonu</span>
            </h1>

            <p>
              Łączymy zaawansowaną inżynierię materiałową z przemysłem. Tworzymy inteligentne
              kompozyty, technologię pultruzji i ciągłe czujniki pomiarowe (DFOS) dla
              budownictwa przyszłości.
            </p>

            <div className="heroActions">
              <a className="btn btnPrimary" href="#oferta">
                Poznaj technologie →
              </a>
              <a className="btn btnGhost" href="#kontakt">
                Skontaktuj się z ekspertem
              </a>
            </div>
          </div>

          <div className="heroVisual" aria-hidden>
            <div className="ring ringOne" />
            <div className="ring ringTwo" />
            <div className="ring ringThree" />
            <div className="floatingCard">
              <p className="label">Smart Structures</p>
              <p className="status">DFOS Sensor Active</p>
              <div className="progress">
                <span />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="offer" id="oferta">
        <h2>{openMenu || 'Produkty'}</h2>
        <div className="cardGrid">
          {menuItems
            .find((item) => item.title === (openMenu || 'Produkty'))
            .links.map((link) => (
              <article className="card" key={link}>
                <h3>{link}</h3>
                <p>Dedykowana podstrona z parametrami, zastosowaniami i CTA do doradcy technicznego.</p>
              </article>
            ))}
        </div>
      </section>

      <section className="highlights" id="projekty">
        {highlights.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <footer id="kontakt" className="footer">
        <p>Reinbar — Nowa generacja rozwiązań dla budownictwa i infrastruktury.</p>
      </footer>
    </main>
  );
}
