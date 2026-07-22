# Claudio Cappelletti — sito

Nuovo sito per Claudio Cappelletti, agente di commercio nel beverage
(vini e birre per ristoranti, bar e birrerie del Garda Trentino).
Rifacimento del vecchio sito WordPress in un sito statico moderno.

## Struttura del repository

- **`sito/`** — il sito vero e proprio, in [Astro](https://astro.build). È la parte che va online.
- **`mockups/`** — le tre proposte di design iniziali (La Carta, Dietro il banco, Verticale) usate per scegliere la direzione grafica.
- **`migrazione/`** — dati e immagini recuperati dal vecchio sito: catalogo prodotti (`prodotti.json`), foto e loghi.

## Sviluppo

```bash
cd sito
npm install
npm run dev      # anteprima locale su http://localhost:4321
npm run build    # genera il sito statico in sito/dist/
```

## Design

- Palette: crema caldo, vino profondo, accenti rame e rosa antico.
- Font: Fraunces (titoli) + Archivo (testo).
- Home a capitoli, ognuno con un ingresso "di materia":
  bollicine che salgono, luce sui bianchi, onda di vino sui rossi, bagliore ambra sulle birre.

## Da fare prima della pubblicazione

- Revisione dei testi (attualmente bozze) con Claudio.
- Foto definitive (soprattutto un ritratto per la pagina "Chi sono").
- Scelta hosting, DNS e redirect 301 dai vecchi URL.
- Attivazione di un form contatti reale.
