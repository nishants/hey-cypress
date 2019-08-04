const cypress = require('cypress');

const getRuntimeParams = () => ({
  ignoreTestFiles: Boolean(process.env.cucumber) ? "*.js" : "none"
});

const runTests = (config) => Boolean(process.env.ci) ? cypress.run(config) : cypress.open(config);

runTests({
  headed: Boolean(process.env.ci),
  config: {
    ...getRuntimeParams(),
    // baseUrl: 'http://localhost:8080',
    chromeWebSecurity: false,
    video: false,
  }
});