# Wisks and Wishes — Static Site

This website is organized as a simple static project:

| Path | Purpose |
| --- | --- |
| `client/index.html` | Page structure and content |
| `client/css/style.css` | All visual styles, responsive layout, and animations |
| `client/js/main.js` | Header scroll state, hero parallax, and smooth navigation |
| `client/assets/` | Asset manifest plus image and video folders for exports |

Run `pnpm dev` for local development or `pnpm build` for a production build. No React components, JSX, or framework state management are used by the site.

For this hosted environment, media is referenced through durable `/manus-storage/...` URLs listed in `client/assets/manifest.json`. When exporting elsewhere, copy the media into `client/assets/images/` or `client/assets/videos/`, then replace the matching URLs in the static files.
