
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')

// vue.config.js
module.exports = {
    configureWebpack: {
      plugins: [

        new HtmlWebpackExternalsPlugin({
            externals: [
              {
                module: 'jquery',
                entry: {
                    path: 'https://maps.googleapis.com/maps/api/js',
                    type: 'js'
                }
              },
              {
              module: 'materialize-css',
                entry:{
                  path: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css',
                  type: 'css'
                }
              }
            ],
          }),
    ]
  }
}

