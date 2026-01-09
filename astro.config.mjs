// @ts-check
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  integrations: [
    starlight({
      title: "Reflect Documentation",
      logo: {
        alt: "Reflect",
        src: "./public/reflect.svg",
      },
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/2702rebels/realm/tree/main/apps/reflect" }],
      sidebar: [
        {
          label: "Overview",
          slug: "overview",
        },
        {
          label: "Getting Started",
          autogenerate: { directory: "getting-started" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Contribute to Reflect",
          slug: "contribute",
        },
      ],
      customCss: ["./src/styles/global.css"],
    }),
  ],
  env: {
    schema: {
      RELEASE_VERSION: envField.string({ context: "client", access: "public" }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
