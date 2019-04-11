module.exports = {
  port: 9000,
  isClient: typeof window !== 'undefined',
  apiEndpoint: '',

  // Absolute path is a setting for webpack to rename paths in sass like font faces for production.
  // Absolute path from root, Common path is /build/. Another use is cdn path.
  absolutePublicPath: '/build/',

  // Relative to the frontend root. Common path is ../Umbraco.Site/build.
  buildFolder: 'build',
}
