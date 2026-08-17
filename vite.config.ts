import { defineConfig, type Plugin } from "vite";
import path from "node:path";

function manusStorageProxy(): Plugin {
  return {
    name: "manus-storage-proxy",
    configureServer(server) {
      server.middlewares.use("/manus-storage", async (req, res) => {
        const key = req.url?.replace(/^\//, "");
        const apiUrl = (process.env.BUILT_IN_FORGE_API_URL || "").replace(/\/+$/, "");
        const apiKey = process.env.BUILT_IN_FORGE_API_KEY;

        if (!key || !apiUrl || !apiKey) {
          res.writeHead(404);
          res.end();
          return;
        }

        try {
          const endpoint = new URL("v1/storage/presign/get", `${apiUrl}/`);
          endpoint.searchParams.set("path", key);
          const response = await fetch(endpoint, { headers: { Authorization: `Bearer ${apiKey}` } });
          const data = (await response.json()) as { url?: string };
          if (!response.ok || !data.url) throw new Error("Asset unavailable");
          res.writeHead(307, { Location: data.url, "Cache-Control": "no-store" });
          res.end();
        } catch {
          res.writeHead(502);
          res.end("Asset unavailable");
        }
      });
    },
  };
}

export default defineConfig({
  root: path.resolve(import.meta.dirname, "client"),
  plugins: [manusStorageProxy()],
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    host: true,
    port: 3000,
    strictPort: false,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
  },
});
