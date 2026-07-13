# Barber Crew by Yury — Website

A lightweight, **frontend-only** website for Barber Crew by Yury — a barber shop in Bellmore, NY.
No build step, no frameworks, no API keys. Just HTML, CSS, and a little vanilla JavaScript, so it can be hosted for free on GitHub Pages.

## What's on the site
- Hero landing with the renovated shop interior
- About Yury & the shop
- Services + honest pricing (men's cuts, fades, beards, kids, hot towel, etc.)
- Kids cuts section with a real before/after
- Gallery (10 photos — see below)
- Real Google reviews (4.9★, 59 reviews)
- Visit Us: address, hours, storefront photo, the original barber-shop sign, and a Google Map (embedded, **no API key needed**)

## Branding
Built around the modern **gold Barber Crew by Yury** logo (gold, charcoal, black, gray, white).
The original red-and-blue "Barber Shop" sign lives in the **Visit Us** section as heritage/storefront reference — so customers recognize the shop when they pull up — not as the main logo. Traditional barber red + blue only show up in the sign photos and one thin barber-pole stripe.

## Project structure
```
.
├── index.html            # the whole site (one page)
├── css/styles.css        # all styles + color variables
├── js/main.js            # mobile menu, hours highlight, gallery fallbacks
└── images/
    ├── logo-modern.png       # gold BC logo — main site identity
    ├── og-sign.png           # original red/blue shop sign (heritage)
    ├── inside-shop.png       # hero background
    ├── yury.png              # about section
    ├── kid-before-after.png  # kids section
    ├── exterior.png          # storefront in Visit Us
    └── gallery/              # <-- put 10 gallery photos here (see its README)
```

## Adding the gallery photos
Open `images/gallery/` and follow the `README.md` in there. Short version: drop in 10 photos named
`gallery-01.jpg` … `gallery-10.jpg`. Until they're added, the site shows clean placeholder tiles.

## Run it locally
Just open `index.html` in a browser. That's it. (Or run `python3 -m http.server` in this folder and visit `http://localhost:8000`.)

## Deploy free on GitHub Pages
1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, pick **Deploy from a branch**.
4. Choose the branch (e.g. `main`) and folder **`/ (root)`**, then **Save**.
5. Wait a minute — your site goes live at `https://<your-username>.github.io/<repo-name>/`.

No other setup. Everything runs in the browser.

## Editing common stuff
- **Prices / services:** in `index.html`, look for the `SERVICES` section.
- **Hours:** the `Hours` table in the `VISIT US` section (today's day auto-highlights).
- **Phone / address:** search `index.html` for `516` or `Merrick`.
- **Reviews:** the `REVIEWS` section — swap in whichever Google reviews you like.
