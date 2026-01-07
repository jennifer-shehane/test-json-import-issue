const cypress = require('cypress');

cypress
  .run({
    spec: ['cypress/e2e/test.cy.ts'],
    headless: true,
    browser: 'electron',
    env: {
      CYPRESS_NETWORK_THROTTLE: '4g-50mbps',
      CYPRESS_TEST_ENV: 'production',
    },
  })
  .then(results => console.log(results))
  .catch(err => console.error(err));

