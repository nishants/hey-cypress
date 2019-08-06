const cypress = require('cypress');

const staticConfig = () => ({
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
    // baseUrl: 'http://localhost:8080',
    chromeWebSecurity: false,
    video: false
  }
});
