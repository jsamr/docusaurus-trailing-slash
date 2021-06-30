const path = require('path');
const fs = require('fs');

async function checkSitemap({ outDir }) {
  if (!fs.existsSync(path.join(outDir, 'sitemap.xml'))) {
    throw new Error("sitemap.xml is expected to be found in build directory.")
  }
}

module.exports = function () {
  return {
    plugin: 'docusaurus-plugin',
    async postBuild(props) {
      await checkSitemap(props);
    }
  };
};
