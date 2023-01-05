# frontend-monolith-spike

## The plan

A frontend monolith simulating two frontend codebases. 
Each codebase will have a shared config for tooling.
Each codebase will utilise a shared UI library for components.
Each codebase will share a tsconfig.
E2E tests will exist for both codebases using cypress.
Utilise turborepo for cacheing and monolith tooling.
Utilise yarn workspaces for dependency hoisting.
Setup CI/CD (preview branches, test, deploy) using GitHub pipelines and Vercel.

- apps
  - webApp1 (an existing NextJS TS codebase - with file based routing)
  - webApp2 (an existing Vite TS codebase - with react-router)
  - widgets (exported product feature components that are used in both web apps)
- packages
  - api (shared axios api interface)
  - config (shared ts, eslint, test configs)
  - integrations (third party integrations such as payment gateways, bug tracking, martech, data tracking)
  - utils (shared helpers)
  - ui (shared UI for use in both web apps w/ Storybook, swappable themes, react-aria, RHF UI)
  - e2e-cypress (E2E that can be ran alongside feature work that break tests)
