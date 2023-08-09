import { defineConfig, sharpImageService } from "astro/config";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

const site = process.env.ASTRO_SITE ?? "https://jamesconroyfinn.com";

// https://astro.build/config
export default defineConfig({
  site: site,
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "dark-plus",
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeHeadingIds, rehypeKatex],
  },
  integrations: [
    tailwind(),
    mdx(),
    react(),
    sitemap({
      filter: (page) => {
        return new URL(page).pathname !== "/manifest.json";
      },
    }),
  ],
  trailingSlash: "never",
});
