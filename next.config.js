module.exports = {
  assetPrefix: process.env.BASE_URL || '/prod',

  publicRuntimeConfig: {
    basePath: process.env.BASE_URL || '/prod',
  },
  serverRuntimeConfig: {
    basePath: process.env.BASE_URL || '/prod',
  },
}
