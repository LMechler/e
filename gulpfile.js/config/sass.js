var config = require('./')

module.exports = {
  autoprefixer: { browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'] },
  rename: { suffix: ['.min'] },
  watch: config.sourceAssets + "/stylesheets/**/*.{sass,scss}",
//  src: config.sourceAssets + "/stylesheets/**/*.{sass,scss}", // gulp-ruby-sass doesn't support globs yet, only single files or directories. Just like Sass.
  dest: config.publicAssets + '/stylesheets'
}