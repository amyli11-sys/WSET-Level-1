# WSET Level 1

A revision app for the WSET Level 1 Award in Wines: scrollable revision cards, flashcards, and a quiz by section. No build step, no dependencies.

## Run it

Open `index.html` in a browser, or host it free with GitHub Pages:
Settings > Pages > Deploy from a branch > `main` / root.

## Add your own questions

Open the **Import** tab and paste questions in this format:

    Section: Growing Grapes
    1. Which part of a black grape gives red wine its colour?
    a) Pulp
    b) Skins
    c) Stalks
    d) Leaves
    Answer: b
    Explanation: Colour comes from the skins.

An answer key line such as `Key: 1b 2a 3c` also works. Imported questions are stored only in your own browser (localStorage), not in this repo. Tick "Hide the built-in starter questions" to use only your own.

## Files

- `index.html` page
- `style.css` styles
- `app.js` app logic and the sample questions
- `manifest.webmanifest` and `icons/` for the icon and add-to-home-screen

The built-in questions are original samples, not taken from WSET or any third-party material.
