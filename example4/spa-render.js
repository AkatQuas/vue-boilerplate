const SpaPrerenderer = require('spa-prerenderer');
const path = require('path');

async function main() {
  const spaPrerenderer = new SpaPrerenderer({
    staticDir: path.resolve(__dirname, 'dist'),
    // modify these routes path as you wish
    routes: ['/', '/about', '/join', '/post', '/async-callback'],
    outputDir: path.resolve(__dirname, 'dist'),
    waitForElement: '#app',
    useHttps: true,
    supressOutput: true,
    reportPageErrors: true,
  });

  await spaPrerenderer.init();
}

main();
