// we need it for resolving custom stage apigw url when lambda will be deployed
// your url will be like blah-blah-blah.com/prod and we should redirect all nextjs requests from '/' to '/prod'
// if someone know how i can avoid this ugly hack, please create PR with it
module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/prod' : '',
  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === 'production' ? '/prod' : '',
  },
}
