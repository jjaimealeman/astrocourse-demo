/// <reference types="unlighthouse" />
import { defineConfig } from "unlighthouse";

export default defineConfig({
  // examplebtn-basic
  site: "astrocourse-demo.netlify.app",
  //   scanner: {
  //     exclude: ['/private-zone/*']
  //   },
  // run lighthouse for each URL 3 times
  samples: 3,
  // use desktop to scan
  device: "desktop",
  debug: true,
  scanner: {
    sitemap: ["/sitemap-0.xml", "/sitemap-index.xml"],
  },
});
