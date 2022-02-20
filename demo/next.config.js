const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('path')

module.exports = {
  distDir: 'build',
  swcMinify: true,
  webpack5: true,
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://example.com/myaccount/',
  },
  webpack(config, { isServer }) {
    config.plugins.push(new ESLintPlugin())
    config.module.rules.push({
      test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: ['preset-default', { name: 'removeViewBox', enabled: false }]
              }
            }
          },
          'file-loader'
        ],
    })
    return config
  },
  basePath: '/react-wavify',
  assetPrefix: '/react-wavify/',
  trailingSlash: true
}
