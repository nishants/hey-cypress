const cypress = require('cypress');

const staticConfig = () => ({
  watchForFileChanges: false,
  integrationFolder: './features'
});

const runtimeConfig = () => ({
  ignoreTestFiles: process.env.cucumber ? '*.js' : 'none'
});

const headed = !process.env.ci && !process.env.headless;

const runTests = config =>
  headed ? cypress.open(config) : cypress.run(config);

runTests({
  config: {
    ...staticConfig(),
    ...runtimeConfig(),
    chromeWebSecurity: false,
    video: false
  }
});
