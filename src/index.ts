if ('fetch' in window) {
  console.log("initloadApp")
  loadApp();
} else {
  console.log("Add fetch and promise polyfill")
  require('es6-promise').polyfill();
  import('whatwg-fetch');
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


    import('babel-polyfill').then(() => {
      console.log("loaded babel-polyfill")
      resolve();
    })
  });

  return Promise.all([
    fillBabelPolyfill(),
  ]).finally(() => {
    console.log('finally loaded app')
    import('./app');
  })
}
