'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  let extraAssets = new Funnel('semantic/dist/themes', {
    srcDir: '/',
    include: ['**/*'],
    destDir: '/assets/themes'
  });

  app.import({
    development: 'vendor/semantic.js',
    production:  'vendor/semantic.min.js'
  });

  app.import({
    development: 'vendor/semantic.css',
    production:  'vendor/semantic.min.css'
  });

  return app.toTree(extraAssets);
};
