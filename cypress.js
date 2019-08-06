const cypress = require('cypress');

const staticConfig = () => ({
  integrationFolder: './features'
});

const runtimeConfig = () => ({
  ignoreTestFiles: Boolean(process.env.cucumber) ? "*.js" : "none",
});

const headed = !Boolean(process.env.ci) && !Boolean(process.env.headless);

const runTests = (config) => headed ? cypress.open(config) : cypress.run(config);

runTests({
  config: {
    ...staticConfig(),
    ...runtimeConfig(),
    // baseUrl: 'http://localhost:8080',
    chromeWebSecurity: false,
    video: false,
  }
});