module.exports = function (config) {

  config.addPassthroughCopy("src/assets");
  config.addPassthroughCopy("src/sitemap.xml");
  config.addPassthroughCopy("src/robots.txt");
  config.addPassthroughCopy("src/favicon.svg");
  return {
    dir: {
      input: "src",
      output: "dist/zalagaonica",
    }
  };

};