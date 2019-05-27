if ('fetch' in window) {
  console.log("initloadApp")
  loadApp();
} else {
  console.log("Add fetch and promise polyfill")
  require('es6-promise/auto');
  import(/* webpackChunkName: "fetch" */ 'whatwg-fetch');
  loadApp();
}
function loadApp() {
  const fillBabelPolyfill = () => new Promise((resolve) => {
    if (
      'startsWith' in String.prototype &&
      'endsWith' in String.prototype &&
      'includes' in Array.prototype &&
      'assign' in Object &&
      'keys' in Object
    ) return resolve();
    import('core-js/es/string')
    import('core-js/es/array/includes')
    import('core-js/es/object')
    // import(/* webpackChunkName: "babel-poly" */ 'babel-polyfill').then(() => {
    //   console.log("loaded babel-polyfill")
    //   resolve();
    // })
  });

  return Promise.all([
    fillBabelPolyfill(),
  ]).finally(() => {
    console.log('finally loaded app')
    import('./app');
  })
}
