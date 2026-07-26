# Jack's manga corridor — how to run your site

Your portfolio is a 3D corridor drawn like a manga chapter. Visitors walk down it (scroll, drag, or swipe), and every panel on the walls is one of your works. Clicking a panel opens it as a "chapter" with a big image and your notes.

## See it now

Double-click `index.html` — it opens in your browser. No installs, no setup.

## Add a new piece of work

1. Save a photo or scan of your work (jpg or png) into the `art` folder, e.g. `art/dragon-study.jpg`. Photos around 1200px wide look sharp and load fast.
2. Open `works.js` in any text editor.
3. Copy one of the blocks in the `WORKS` list and fill it in:

```js
{
  title: "Dragon study",
  medium: "Ink & wash",
  date: "2026",
  image: "art/dragon-study.jpg",
  description: "What it is, how you made it, what you learned."
},
```

The first item in the list is the first panel in the corridor. New work = new chapter, and the corridor grows automatically. Works with `image: null` show a built-in manga placeholder drawing until you replace them.

## Make it yours

Everything personal lives at the top of `works.js` in `SITE`: your name, the katakana version, tagline, about text, email and Instagram. The colours are at the top of `index.html` under `:root` — `--red` is the accent if you ever want a different signature colour.

## Put it online (free)

The easiest way: go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag the whole `Jack Website` folder onto the page. You get a live link in seconds, and you can connect a proper domain like `jackgriffin.art` later. GitHub Pages works too if you prefer git.

## Good to know

The site automatically shows a normal grid view on phones and for visitors who prefer reduced motion — the GRID button in the corner switches views any time. Keyboard works too: arrow keys walk, Escape closes overlays, left/right flip between chapters.
