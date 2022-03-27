/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * Place to enable plugins to be integerated to be used in cypress framework
 * 
 */
 const cucumber = require("cypress-cucumber-preprocessor").default;
 const browserify = require('@cypress/browserify-preprocessor');
 const resolve = require('resolve');
 let appId
 module.exports = (on, config) => {
   //The plugin is used to transpile cucumber step definitions to javascript.
   const options = {
     ...browserify.defaultOptions,
     typescript: resolve.sync('typescript', { baseDir: config.projectRoot })
   };
   on('file:preprocessor', cucumber(options));
   on('task', { //tasks used to store variables state between tests.
     setAppId: (val) => {
       return (appId = val)
     },
     getAppId: () => {
       return appId
     },
   })
 }