# j5h.mono

## Commands

- `cp .env.example .env` get started
- `pnpm run db:generate` generate Prisma DB
- `pnpm run db:push` push Prisma DB
- `pnpm run dev` run development environments
- `pnpm run build` build deployable assets
- `pnpm run lint` lint code
- `pnpm run e2e:test` run tests against preview build
- `pnpm run clean` delete .turbo and node_module caches

## What's inside?

This [TURBOREPO](https://turbo.build/) includes the following:

### Apps

- `nextjs`: [create-t3-app](https://create.t3.gg/) web app (NextJS, TypeScript, tRPC, Prisma, NextAuth.js)
- `native`: [react-native](https://reactnative.dev/) mobile app

### Packages

- `api`: shared tRPC api
- `auth`: shared auth api
- `db`: shared db
- `ui`: reusable components (Mantine, Emotion, Storybook)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### To Do

- SEO: NextSEO integration
- Translations: i18l-next integration
- Forms: React Hook Form integration
- Subscriptions: Paddle integration
- Error Logging: Sentry integration
- Data Collection: Plausible integration
