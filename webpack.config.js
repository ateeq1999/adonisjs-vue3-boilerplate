const { join } = require('path')
const Encore = require('@symfony/webpack-encore')

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev')
}

Encore.setOutputPath('./public/assets')

Encore.setPublicPath('/assets')

Encore.addEntry('app', './resources/js/app.js')

// Encore.copyFiles({
//   from: './resources/images',
//   to: 'images/[path][name].[hash:8].[ext]',
// })

// Encore.splitEntryChunks()

Encore.disableSingleRuntimeChunk()

Encore.cleanupOutputBeforeBuild()

Encore.enableSourceMaps(!Encore.isProduction())

Encore.enableVersioning(Encore.isProduction())

Encore.configureDevServerOptions((options) => {
  /**
   * Normalize "options.static" property to an array
   */
  if (!options.static) {
    options.static = []
  } else if (!Array.isArray(options.static)) {
    options.static = [options.static]
  }

  /**
   * Enable live reload and add views directory
   */
  options.liveReload = true
  options.static.push({
    directory: join(__dirname, './resources/views'),
    watch: true,
  })
})

// Encore.enableSassLoader()
// Encore.enableLessLoader()
// Encore.enableStylusLoader()
// Encore.enablePostCssLoader()
// Encore.configureCssLoader(() => {})

Encore.enableVueLoader(() => {}, {
  version: 3,
  runtimeCompilerBuild: false,
  useJsx: false
})

// Encore.enableVueLoader((options) => {
//   options.transformAssetUrls = {
//     video: ['src', 'poster'],
//     source: 'src',
//     img: 'src',
//     image: ['xlink:href', 'href'],
//     use: ['xlink:href', 'href']
//   }
// })


const config = Encore.getWebpackConfig()
config.infrastructureLogging = {
  level: 'warn',
}
config.stats = 'errors-warnings'
module.exports = config
