export default {
  // examplebtn-basic
  site: "astrocourse-demo.netlify.app",
  scanner: {
    sitemap: ["/sitemap-0.xml", "/sitemap-index.xml"],
    samples: 3,
    // use desktop to scan
    device: "desktop",
  },
  //   scanner: {
  //     exclude: ['/private-zone/*']
  //   },
  // run lighthouse for each URL 3 times
  debug: true,
};
