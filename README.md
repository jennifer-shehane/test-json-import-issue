# Test Project for JSON Import Issue

This test project reproduces the issue where `cypress.run()` fails with `TypeError: a.map is not a function` when spec files contain top-level JSON imports.

## Setup

1. Install dependencies:
```bash
npm install
```

Or if using yarn:
```bash
yarn install
```

## Reproducing the Issue

Run the test using the programmatic API:
```bash
node run-cypress.js
```

**Expected behavior**: Should fail with `TypeError: a.map is not a function` during initialization.

**Note**: CLI execution should work:
```bash
npx cypress run
```

## Project Structure

```
test-json-import-issue/
├── cypress.config.ts          # Cypress configuration
├── cypress/
│   ├── e2e/
│   │   └── test.cy.ts        # Test file with JSON import
│   └── fixtures/
│       └── environment.json   # JSON fixture file
├── run-cypress.js            # Programmatic execution script
├── package.json
├── tsconfig.json
└── README.md
```

## Issue Details

- **Cypress versions affected**: 13.15.x, 13.16.1, 13.17.0, 14.x, 15.x
- **Node.js**: 20.x LTS (also reproducible on 22.x)
- **TypeScript**: 5.9.3 with `resolveJsonModule: true`, `module: "commonjs"`
- **Error location**: `buildBaseFullConfig` during initialization
- **Trigger**: Top-level JSON import in spec file (`import testData from '../../fixtures/environment.json'`)

