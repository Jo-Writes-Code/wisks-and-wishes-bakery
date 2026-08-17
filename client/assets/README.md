# Assets

This folder is the static site's **asset index**. `manifest.json` maps each image used by the page to its deployed storage URL.

For this hosted project, image and video files stay in `/home/ubuntu/webdev-static-assets/` and are uploaded before use. This keeps the deployment lightweight while the static HTML, CSS, and JavaScript use durable `/manus-storage/...` paths.

When exporting the project for a conventional local host, place copied media under `assets/images/` and `assets/videos/`, update `manifest.json`, and swap the matching URLs in `index.html` and `css/style.css`.
