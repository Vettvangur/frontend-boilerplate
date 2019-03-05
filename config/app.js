const { ENV } = require('./env');

module.exports = {
  port: process.env.port || 8809,
  appName: process.env.name || 'frontend-boilerplate',
  isProduction: ENV === 'production',
  isDebug: ENV === 'development',
  isClient: typeof window !== 'undefined',
  isTypescript: false,
  apiEndpoint: '',
}
