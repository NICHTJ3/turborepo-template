# Turborepo starter

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

#### Apps

- `api`: an Express app
  - This provides an example of consuming a shared lib in an environment where
    module transpilation doesn't occur (leading changes to lag behind if
    you're depending on another project building itself)
- `docs`: a [Next.js](https://nextjs.org) app
- `web`: another [Next.js](https://nextjs.org) app
  - The two above provide examples of consuming libraries in environments
    where transpile modules can occur

#### Utility Packages

These packages provide consistency throughout the rest of the packages. e.g
jest, eslint, and tsconfig setups

- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `eslint-config-server`: `eslint` configurations for our api
- `scripts`: scripts used throughout the monorepo (currently jest configs)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

#### Shared librabries

This was pretty much the whole reason I started this template. I wanted to
figure out a way to create a fast and enjoyable local development experience
that didn't make bundling to release an app without publishing shared libs
difficult.

- `ui`: a stub React component library shared by both `web` and `docs` applications
  - When yarn dev is run this package is watched and recompiled on the fly,
    next-transpile-modules picks up changes live.
- `logger`: a shared library used by the api to log information to the console
  - When yarn dev is run this package is watched by both it's own dev command
    and the api's dev command through typescript project references. This
    allows us to have the fastest and most consistant development experience
    without preventing us from publishing this package in the future

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
yarn run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching (Beta)](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching (Beta) you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
