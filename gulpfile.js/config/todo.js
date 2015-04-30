var config = require('./')

module.exports = {
  srcJs: config.sourceAssets + "/javascripts/**/*.js",
  destJs: config.sourceAssets + "/javascripts",
  srcSass: config.sourceAssets + "/stylesheets/**/*.{sass,scss}",
  destSass: config.sourceAssets + "/stylesheets",  
}