require('dotenv').config()
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
} = require('next/constants')
const Dotenv = require('dotenv-webpack')

const getBuildConfig = (...args) => {
  const path = require('path')
  const withPlugins = require('next-compose-plugins')
  const withSCSS = require('@zeit/next-sass')
  const postcssPresetEnv = require('postcss-preset-env')
  const postcssPresetEnvOptions = {
    features: {
      'custom-media-queries': true,
      'custom-selectors': true,
    },
  }

  const cssOptions = {
    postcssLoaderOptions: {
      plugins: [postcssPresetEnv(postcssPresetEnvOptions)],
    },
    sassLoaderOptions: {
      includePaths: [path.join(process.cwd(), 'src', 'common', 'css')],
    },
  }

  const nextConfig = {
    webpack(config) {
      config.plugins = config.plugins || []

      config.plugins = [
        ...config.plugins,

        // Read the .env file
        new Dotenv({
          path: path.join(__dirname, '.env'),
          systemvars: true
        })
      ]

      config.module.rules.push({
        test: /\.svg$/,
        include: /src\/components\/icon\/icons/,
        use: [
          'svg-sprite-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeAttrs: { attrs: '(fill)' } },
                { removeTitle: true },
                { cleanupIDs: true },
                { removeStyleElement: true },
              ],
            },
          },
        ],
      })
      config.node = {
        fs: 'empty'
      }
      return config
    },
    publicRuntimeConfig: {
      NODE_ENV: process.env.NODE_ENV,
      WEB_API_DOMAIN: process.env.WEB_API_DOMAIN,
      PROXY_URL: process.env.PROXY_URL,
      FETCH_LIMIT: process.env.FETCH_LIMIT,
    }
  }
  return withPlugins([[withSCSS, cssOptions]], nextConfig)(...args)
}

module.exports = (phase, ...rest) => {
  const shouldAddBuildConfig = [
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_SERVER,
    PHASE_PRODUCTION_BUILD,
  ].includes(phase);
  const config = shouldAddBuildConfig ? getBuildConfig(phase, ...rest) : {};
  console.log('nextjs', phase, config)
  return config;
}
