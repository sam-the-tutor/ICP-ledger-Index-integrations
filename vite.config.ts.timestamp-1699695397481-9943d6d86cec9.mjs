// vite.config.ts
import react from "file:///home/samthetutor/ICP/Templates/React-Motoko-II-Template/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///home/samthetutor/ICP/Templates/React-Motoko-II-Template/node_modules/vite/dist/node/index.js";
import environment from "file:///home/samthetutor/ICP/Templates/React-Motoko-II-Template/node_modules/vite-plugin-environment/dist/index.js";
import dotenv from "file:///home/samthetutor/ICP/Templates/React-Motoko-II-Template/node_modules/dotenv/lib/main.js";
import { join } from "path";
import { existsSync, readFileSync } from "fs";
var __vite_injected_original_dirname = "/home/samthetutor/ICP/Templates/React-Motoko-II-Template";
dotenv.config();
var localNetwork = "local";
var network = process.env["DFX_NETWORK"] || localNetwork;
var internetIdentityUrl = network === "local" ? `http://localhost:4943?canisterId=${process.env.CANISTER_ID_INTERNET_IDENTITY}}` : "https://identity.ic0.app/#authorize";
var canisterIdPath;
if (network === localNetwork) {
  canisterIdPath = join(__vite_injected_original_dirname, ".dfx/local/canister_ids.json");
} else {
  canisterIdPath = join(__vite_injected_original_dirname, "canister_ids.json");
}
if (!existsSync(canisterIdPath)) {
  throw new Error(
    "Unable to find canisters. Running `dfx deploy` should fix this problem."
  );
}
var canisterIds = JSON.parse(readFileSync(canisterIdPath, "utf8"));
var vite_config_default = defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis"
      }
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:4943",
        changeOrigin: true
      }
    }
  },
  plugins: [
    react(),
    environment("all", { prefix: "CANISTER_" }),
    environment("all", { prefix: "DFX_" }),
    environment({ BACKEND_CANISTER_ID: "" })
  ],
  test: {
    environment: "jsdom",
    setupFiles: "setupTests.js",
    cache: { dir: "../node_modules/.vitest" }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9zYW10aGV0dXRvci9JQ1AvVGVtcGxhdGVzL1JlYWN0LU1vdG9rby1JSS1UZW1wbGF0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvc2FtdGhldHV0b3IvSUNQL1RlbXBsYXRlcy9SZWFjdC1Nb3Rva28tSUktVGVtcGxhdGUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvc2FtdGhldHV0b3IvSUNQL1RlbXBsYXRlcy9SZWFjdC1Nb3Rva28tSUktVGVtcGxhdGUvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAndml0ZS1wbHVnaW4tZW52aXJvbm1lbnQnO1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZXhpc3RzU3luYywgcmVhZEZpbGVTeW5jIH0gZnJvbSAnZnMnO1xuXG5kb3RlbnYuY29uZmlnKCk7XG5cbmNvbnN0IGxvY2FsTmV0d29yayA9ICdsb2NhbCc7XG5jb25zdCBuZXR3b3JrID0gcHJvY2Vzcy5lbnZbJ0RGWF9ORVRXT1JLJ10gfHwgbG9jYWxOZXR3b3JrO1xuXG5jb25zdCBpbnRlcm5ldElkZW50aXR5VXJsID1cbiAgbmV0d29yayA9PT0gJ2xvY2FsJ1xuICAgID8gYGh0dHA6Ly9sb2NhbGhvc3Q6NDk0Mz9jYW5pc3RlcklkPSR7cHJvY2Vzcy5lbnYuQ0FOSVNURVJfSURfSU5URVJORVRfSURFTlRJVFl9fWBcbiAgICA6ICdodHRwczovL2lkZW50aXR5LmljMC5hcHAvI2F1dGhvcml6ZSc7XG5cbmxldCBjYW5pc3RlcklkUGF0aDogc3RyaW5nO1xuaWYgKG5ldHdvcmsgPT09IGxvY2FsTmV0d29yaykge1xuICAvLyBMb2NhbCByZXBsaWNhIGNhbmlzdGVyIElEc1xuICBjYW5pc3RlcklkUGF0aCA9IGpvaW4oX19kaXJuYW1lLCAnLmRmeC9sb2NhbC9jYW5pc3Rlcl9pZHMuanNvbicpO1xufSBlbHNlIHtcbiAgLy8gQ3VzdG9tIGNhbmlzdGVyIElEc1xuICBjYW5pc3RlcklkUGF0aCA9IGpvaW4oX19kaXJuYW1lLCAnY2FuaXN0ZXJfaWRzLmpzb24nKTtcbn1cblxuaWYgKCFleGlzdHNTeW5jKGNhbmlzdGVySWRQYXRoKSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ1VuYWJsZSB0byBmaW5kIGNhbmlzdGVycy4gUnVubmluZyBgZGZ4IGRlcGxveWAgc2hvdWxkIGZpeCB0aGlzIHByb2JsZW0uJyxcbiAgKTtcbn1cbmNvbnN0IGNhbmlzdGVySWRzID0gSlNPTi5wYXJzZShyZWFkRmlsZVN5bmMoY2FuaXN0ZXJJZFBhdGgsICd1dGY4JykpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByb290OiAnc3JjJyxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICcuLi9kaXN0JyxcbiAgICBlbXB0eU91dERpcjogdHJ1ZSxcbiAgfSxcblxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBlc2J1aWxkT3B0aW9uczoge1xuICAgICAgZGVmaW5lOiB7XG4gICAgICAgIGdsb2JhbDogJ2dsb2JhbFRoaXMnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwcm94eToge1xuICAgICAgJy9hcGknOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly8xMjcuMC4wLjE6NDk0MycsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgZW52aXJvbm1lbnQoJ2FsbCcsIHsgcHJlZml4OiAnQ0FOSVNURVJfJyB9KSxcbiAgICBlbnZpcm9ubWVudCgnYWxsJywgeyBwcmVmaXg6ICdERlhfJyB9KSxcbiAgICBlbnZpcm9ubWVudCh7IEJBQ0tFTkRfQ0FOSVNURVJfSUQ6ICcnIH0pLFxuICBdLFxuICB0ZXN0OiB7XG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgc2V0dXBGaWxlczogJ3NldHVwVGVzdHMuanMnLFxuICAgIGNhY2hlOiB7IGRpcjogJy4uL25vZGVfbW9kdWxlcy8udml0ZXN0JyB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sWUFBWTtBQUNuQixTQUFTLFlBQVk7QUFDckIsU0FBUyxZQUFZLG9CQUFvQjtBQU56QyxJQUFNLG1DQUFtQztBQVF6QyxPQUFPLE9BQU87QUFFZCxJQUFNLGVBQWU7QUFDckIsSUFBTSxVQUFVLFFBQVEsSUFBSSxhQUFhLEtBQUs7QUFFOUMsSUFBTSxzQkFDSixZQUFZLFVBQ1Isb0NBQW9DLFFBQVEsSUFBSSxtQ0FDaEQ7QUFFTixJQUFJO0FBQ0osSUFBSSxZQUFZLGNBQWM7QUFFNUIsbUJBQWlCLEtBQUssa0NBQVcsOEJBQThCO0FBQ2pFLE9BQU87QUFFTCxtQkFBaUIsS0FBSyxrQ0FBVyxtQkFBbUI7QUFDdEQ7QUFFQSxJQUFJLENBQUMsV0FBVyxjQUFjLEdBQUc7QUFDL0IsUUFBTSxJQUFJO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFDRjtBQUNBLElBQU0sY0FBYyxLQUFLLE1BQU0sYUFBYSxnQkFBZ0IsTUFBTSxDQUFDO0FBRW5FLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFFQSxjQUFjO0FBQUEsSUFDWixnQkFBZ0I7QUFBQSxNQUNkLFFBQVE7QUFBQSxRQUNOLFFBQVE7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxNQUNoQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixZQUFZLE9BQU8sRUFBRSxRQUFRLFlBQVksQ0FBQztBQUFBLElBQzFDLFlBQVksT0FBTyxFQUFFLFFBQVEsT0FBTyxDQUFDO0FBQUEsSUFDckMsWUFBWSxFQUFFLHFCQUFxQixHQUFHLENBQUM7QUFBQSxFQUN6QztBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osYUFBYTtBQUFBLElBQ2IsWUFBWTtBQUFBLElBQ1osT0FBTyxFQUFFLEtBQUssMEJBQTBCO0FBQUEsRUFDMUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
