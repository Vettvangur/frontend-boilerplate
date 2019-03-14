const { ENV } = require('./env');

module.exports = {
  port: process.env.port || 9000,
  appName: process.env.name || 'frontend-boilerplate',
  isProduction: ENV === 'production',
  isDebug: ENV === 'development',
  isClient: typeof window !== 'undefined',
  isTypescript: false,
  apiEndpoint: '',

  // Relative to the frontend root. Common path is ../Umbraco.Site/build.
  buildFolder: 'build',
}
