const cypress = require('cypress');

const getRuntimeParams = () => ({
  ignoreTestFiles: Boolean(process.env.cucumber) ? "*.js" : "none"
});

const headed = !Boolean(process.env.ci) && !Boolean(process.env.headless);

const runTests = (config) => headed ? cypress.open(config) : cypress.run(config);

runTests({
  config: {
    ...getRuntimeParams(),
    // baseUrl: 'http://localhost:8080',
    chromeWebSecurity: false,
    video: false,
  }
});