import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// TODO: Remover lovable-tagger se não precisar mais dele
// import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "./",
  server: {
    // TODO: Configurar host e porta conforme necessário
    // host: ":57e2fdb8483d.ngrok-free.app  :",
    port: 8080,
  },
  plugins: [
    react(),
    // TODO: Descomente se precisar do componentTagger
    // mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
