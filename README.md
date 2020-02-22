# Version1

## Workshop: Enterprise Angular applications with ngrx and nx

Building enterprise Angular applications is not easy and when you need to share code between multiple Angular mobile or web applications it is even harder. If you are about to kick off or are in the middle of a large application in Angular this workshop will prepare you to tackle implementing the best project structure and patterns using nx workspaces and ngrx state management patterns.

In this workshop we walk through a thorough introduction into using [NGRX](https://ngrx.io/), an [RxJS](https://rxjs-dev.firebaseapp.com/) powered state management library for Angular applications, inspired by Redux. We will use nx or Nrwl Extensions an open source toolkit for enterprise Angular applications. NX is designed to help you create and build enterprise-grade Angular applications with proven project structure and patterns.

You will learn to use [Nx](https://nx.dev) to create a monorepo creating one or many Angular applications with a robust code sharing system using nx workspaces and shared libraries.

We will build an [Nx](https://nx.dev) application implementing ngrx actions, reducers, effects, entity adapters, router-store, onPush change detection and a single immutable data structure called the store.

We will look at common patterns for structuring your applications state by feature and how to deal with splitting up related data into multiple reducers.

Then will we will look at how to create selectors to combine multiple slices of state from the store.

By the end of this workshop you will have built a working [Nx](https://nx.dev) and [NGRX](https://ngrx.io/) application you can extend into an enterprise application.

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@version1/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
