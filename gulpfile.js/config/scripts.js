var config = require('./')

module.exports = {
  src: config.sourceAssets + "/javascripts/**",
  dest: config.publicAssets + "/javascripts",
  rename: { suffix: ['.min'] }
}
