var config = require('./')

module.exports = {
  src: config.sourceAssets + "/javascripts/**/*.js",
  dest: config.publicAssets + "/javascripts",
  rename: { suffix: ['.min'] }
}
