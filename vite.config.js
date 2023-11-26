import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import Unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      proxy: {
        "/api": {
          target: env.VITE_API_BASE_URL,
          changeOrigin: true,
        },
      },
    },
    envPrefix: "VITE_",
    plugins: [
      react(),
      svgr(),
      Unfonts({
        custom: {
          display: "swap",
          preload: true,
          injectTo: "head-prepend",
          families: [
            {
              name: "Rozovii Chulok",
              local: "Rozovii-Chulok",
              src: "./src/assets/fonts/Rozovii-Chulok.woff",
            },
            {
              name: "Santa Catarina",
              local: "Santa-Catarina",
              src: "./src/assets/fonts/Santa-Catarina.woff",
            },
            {
              name: "Spectral",
              local: "Spectral",
              src: "./src/assets/fonts/Spectral*",
              transform(font) {
                if (font.basename === "Spectral-ExtraLight") font.weight = 200;
                if (font.basename === "Spectral-Bold") font.weight = 700;
                return font;
              },
            },
            {
              name: "YanoneKaffeesatz",
              local: "YanoneKaffeesatz",
              src: "./src/assets/fonts/YanoneKaffeesatz*",
              transform(font) {
                if (font.basename === "YanoneKaffeesatz-ExtraLight")
                  font.weight = 200;
                if (font.basename === "YanoneKaffeesatz-Light")
                  font.weight = 300;
                if (font.basename === "YanoneKaffeesatz-Regular")
                  font.weight = 400;
                if (font.basename === "YanoneKaffeesatz-Medium")
                  font.weight = 500;
                if (font.basename === "YanoneKaffeesatz-SemiBold")
                  font.weight = 600;
                if (font.basename === "YanoneKaffeesatz-Bold")
                  font.weight = 700;
                return font;
              },
            },
          ],
        },
      }),
    ],
  };
});
