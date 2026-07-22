// Le quattro categorie del catalogo, con il loro mondo colore e la voce di Claudio.
export const categorie = [
  {
    slug: 'bollicine',
    tipo: 'Bollicine',
    nome: 'Le Bollicine',
    articolo: 'Le',
    parola: 'Bollicine',
    capitolo: '01',
    descrizione:
      'Dal Franciacorta di De Maldè allo Champagne di Bival, passando per il Trento DOC e i prosecchi di San Martino.',
    nota: "l'aperitivo è il primo biglietto da visita del locale",
    meta: 'Franciacorta DOCG · Trento DOC · Champagne AOC · DOC Treviso · Limoux AOC',
    // campo colore del capitolo
    sfondo: 'linear-gradient(160deg,#d9c084,#e3d3a2 55%,#cbb373)',
    testo: '#3d2f10',
    accento: '#8a6a2a',
  },
  {
    slug: 'bianchi',
    tipo: 'Bianco',
    nome: 'I Bianchi',
    articolo: 'I',
    parola: 'Bianchi',
    capitolo: '02',
    descrizione:
      'Il Lugana per il pesce di lago, la Ribolla del Collio, i profumi trentini di Pravis, giù fino a Greco di Tufo e Fiano di Avellino.',
    nota: 'il bianco giusto vende il secondo calice da solo',
    meta: 'Lugana DOC · Collio · IGT Trentino · DOCG Irpinia',
    sfondo: 'linear-gradient(160deg,#eee4c2,#e9ddb4 55%,#ddcd9c)',
    testo: '#4a3c14',
    accento: '#7a6520',
  },
  {
    slug: 'rossi',
    tipo: 'Rosso',
    nome: 'I Rossi',
    articolo: 'I',
    parola: 'Rossi',
    capitolo: '03',
    descrizione:
      "Gli Amaroni di Manara, il Nebbiolo del Roero, il Super Tuscan di Podere Virginiolo e il Primitivo salentino di Vetrere.",
    nota: 'quando la serata si fa seria',
    meta: 'Amarone DOCG · Valpolicella Ripasso · Nebbiolo d’Alba · IGT Toscana · IGP Salento',
    sfondo: 'linear-gradient(160deg,#450f20,#3f0f1d 60%,#2c0a15)',
    testo: '#e7c9c2',
    accento: '#c5a45c',
  },
  {
    slug: 'birre',
    tipo: 'Birra',
    nome: 'Le Birre',
    articolo: 'Le',
    parola: 'Birre',
    capitolo: '04',
    descrizione:
      'Dal carattere unico, protagoniste di ogni occasione: spine, formati e marchi cambiano con le stagioni.',
    nota: 'le spine giuste si scelgono a voce, non a catalogo',
    meta: 'Alla spina · In bottiglia · Selezioni stagionali',
    sfondo: 'linear-gradient(160deg,#8a4517,#7a3c12 60%,#5e2c0b)',
    testo: '#f0d3ae',
    accento: '#c5a45c',
  },
];

export const perSlug = Object.fromEntries(categorie.map((c) => [c.slug, c]));
export const perTipo = Object.fromEntries(categorie.map((c) => [c.tipo, c]));

export const contatti = {
  telefono: '342 807 7784',
  telefonoHref: 'tel:+393428077784',
  whatsapp: 'https://wa.me/393428077784',
  email: 'cappellettibeverage@gmail.com',
  indirizzo: 'Via San Tomaso 31/C — Riva del Garda (TN)',
};

export const cantine = [
  'De Maldè', 'Manara', 'Pravis', 'Humar', 'Costa Catterina', 'Tenuta Ponte',
  'Bival', 'San Martino', 'Casello Bondoni', 'Vetrere', 'Colli Zugna',
  'Podere Virginiolo', 'Pisoni', 'Centorame',
];
