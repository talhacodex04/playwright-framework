# playwright-framework

End-to-end test automation framework built with Playwright and TypeScript, with CI on GitHub Actions.
## Features

- [x] Playwright + TypeScript project setup
- [x] CI on every push and pull request (GitHub Actions)
- [ ] Fixtures and page objects
- [ ] API testing and network mocking
- [ ] Authentication with reusable storage state
- [ ] Sharded runs with a merged report
- [ ] Visual and accessibility checks
- [ ] AI-assisted test generation and maintenance

## Tech stack

- Playwright Test (`@playwright/test`)
- TypeScript
- Node.js (version pinned in `.nvmrc`)
- GitHub Actions

## Prerequisites

- Git
- Node.js, installed with [nvm](https://github.com/nvm-sh/nvm)

## Setup

```bash
nvm install
nvm use
npm ci
npx playwright install
```

## Run tests

```bash
npx playwright test                    # all tests, all browsers
npx playwright test --ui               # interactive UI mode
npx playwright test --project=chromium # one browser only
npx playwright show-report             # open the last HTML report
```

## Project structure

- `tests/` test specs
- `playwright.config.ts` Playwright configuration
- `.github/workflows/playwright.yml` CI workflow

## License

MIT