<p align="center">
  <img src="./assets/bunest-icon.svg" width="500" alt="Nest Logo" />
</p>

  <p align="center">An <a href="https://bun.sh/">Bun</a> integration for <a href="https://nestjs.com/">Nest</a>, made with Bun, for Bun runtime</p>

## Description

The starter template for <a href="https://bun.sh/">Nest</a> with Bun runtime. This template utilizes the perks of Bun runtime & API to provide a seamless & performant development experience without taking away the familiarity of Nest & Node.js.

> ⚠️ **Warning**:
>
> - This template is still in development and may not be suitable for production use. Please report any issues you encounter.
> - **Do NOT** use [Nest CLI](https://www.npmjs.com/package/@nestjs/cli) with this template. A Nest-like, dedicated CLI tool for this template is currently in development.

## Project setup

```bash
$ bun install
```

## ~~Compile &~~ run the project

Bun can run TypeScript code directly, so there is no need to transpile the project before running it. At the same time, however, Bun **will NOT** perform any type-checking during development. Hence, [`tsc-watch`](https://www.npmjs.com/package/tsc-watch) & `tsc` is added to start scripts by default. Feel free to remove it if you want.

```bash
# development
$ bun run start

# watch mode
$ bun run start:dev

# production mode
$ bun run start:prod
```

## Build the project

This template leverages a custom build script, located in [`scripts/build.ts`](./scripts/build.ts), using [Bun Build API](https://bun.sh/docs/bundler) to build the project. Feel free to modify the script to suit your needs.

```bash
$ bun run build # ⚠️ Be careful not to confuse this command with `bun build`.
```

The build output will be located in the `dist` folder, containing JS files. Unlike the default Nest template, the JS code inside the `dist` folder includes bundled dependencies, thanks to Bun. The result is that the server starts almost twice as fast as the default Nest template & the `bun run start:dev` script. You can run the built output directly with Bun using the following command:

```bash
$ bun run dist/main.js
```

However, using the [`bun run start:prod`](./package.json) command is recommended, due to the `NODE_ENV` environment variable will be set to `production`.

## Run tests

Bun is also a test runner and provides a Jest-like API for running tests. Hence, `jest` is not included in this template. You can run tests using the following commands:

```bash
# unit tests
$ bun run test

# e2e tests
$ bun run test:e2e

# test coverage
$ bun run test:cov
```

## Frameworks/Libraries guides

### 1. [TypeORM](https://typeorm.io/)

TypeORM can be used seamlessly with this template, just like any other Nest projects. However, by default, TypeORM CLI uses Node runtime, which requires you to install `ts-node` to execute TypeScript files. Therefore, using TypeORM CLI with Bun runtime is recommended, which can be achieved by passing the `--bun` flag like this:

```bash
# With bunx
$ bunx --bun typeorm <typeorm-command>

# Or with `bun run`, only if you have TypeORM installed as a dependency
$ bun run --bun typeorm <typeorm-command>
```

If you wish to transpile TypeORM's migrations to JS in order to use them in production, you can modify the build script (`scripts/build.ts`) to include the migration files:

1. Retrieve all the names of migration files, in this case, from the `src/database/migrations` folder, using [Bun Glob API](https://bun.sh/docs/api/glob).

```typescript
const migrationFileNames = Array.from(
  new Glob('./src/database/migrations/*.ts').scanSync(),
).map((name) => name.replaceAll(/\\/g, '/'));
```

2. In the `Bun.build` function, add the migration files to the `entrypoints` array, and you are good to go:

```typescript
const result = await build({
  entrypoints: ['./src/main.ts', ...migrationFileNames],
  // ...
```

> ⚠️ **Warning**: While the entrypoint of the application is `main.ts` placed at `src/` folder, if the migrations are **NOT** placed in the `src/` folder, the build output `main.js` file will be **placed at `dist/src/`, not `dist/`**. You can test it out by yourself.

## Support

- Support Nest [here](https://docs.nestjs.com/support).
- Contribute to Bun [here](https://bun.sh/docs/project/contributing).

## Stay in touch

- Nest:

  - Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
  - Website - [https://nestjs.com](https://nestjs.com/)
  - Twitter - [@nestframework](https://twitter.com/nestframework)

- Bun:

  - Author - [oven-sh](https://github.com/oven-sh)
  - Website - [https://bun.sh](https://bun.sh/)
  - Twitter - [@bunjavascript](https://x.com/bunjavascript)

- Me, the author of this template:
  - GitHub - [@dung204](https://github.com/dung204)
  - Twiter - [@mantrilogix](https://x.com/mantrilogix)

## License

- Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
- Bun is [MIT licensed](https://github.com/oven-sh/bun/blob/main/LICENSE.md)
- This template is also [MIT licensed](./LICENSE).
