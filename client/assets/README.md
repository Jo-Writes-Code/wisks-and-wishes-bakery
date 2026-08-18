# Assets

This folder is the static site's **asset index**. `manifest.json` maps each image used by the page to its Vercel-deployable URL.

The bakery images used by the live page are stored in `client/public/assets/`. Vite copies this folder into the final build, where each file is served from `/assets/...`.

When replacing an image, update the matching file in `client/public/assets/` and keep the related URL in `manifest.json`, `index.html`, and `css/style.css` in sync.
