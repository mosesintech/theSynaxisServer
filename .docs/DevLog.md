<h1 align="center">The Synaxis Server Dev Log</h1>

A simple log of all the work done on the Synaxis Server repo by date.

## January 2022

### January 24, 2022 - Monday

A little past midnight I was inspired to start this project from scratch again when I tried to continue my work from the previous repo and found that I didn't exactly know what I was last working on.
I'm hoping that this attempt will be my last to get this off the ground.
And I'm hoping that this development log will help me with consistency.

Today, I started the project.
A simple `npm init` and `git init` followed by installing my favorite packages: express and dotenv (because duh) and nodemon and commitizen for development.
I am a huge fan of commitizen.
Simple but powerful explanatory commit messages go a long way towards understanding a project.

After this, I added a few markdown files like this log.
Tomorrow, the real work begins.
I'm hoping to build this server using Test Driven Development.
And although I'm still new to it, I'd like to use Typescript as well in order to ensure that there aren't any silly bugs.

npm packages added:
    - express
    - dotenv
    - nodemon
    - commitizen
    - cz-conventional-changelog

files added:
    - index.js
    - package.json
    - package-lock.json
    - .gitignore
    - README.md
    - .docs/
        - DevLog.md
        - Tech.md

### January 30, 2022 - Sunday

Today I worked on putting together a simple Node/Express server and all everything needed to get started with Typescript.
I got the chance to look into rimraf, a package that programmatically deletes files for you.
I like it.
I'm using it to delete the dist folder and allow me to build a new distribution of the server when I need to.
The package concurrently is also a cool one.
It lets me run two different commands simultaneously.
This way, I can run `tsc --watch` with `nodemon dist/index.js` so I can get immediate updates on the server I'm working on.

Additionally, I added a .nvmrc file for future development.

Next I added eslint and prettier and configured them to work with Typescript.
I'm pretty proud of this one, because linters can be finicky and this didn't take me too long to do.

Lastly, I added jest and configured it for Typescript work as well.
Definitely a good skeleton to begin working with.
The idea is to build this server with Test Driven Development.
This plus Typescript should save me from all kinds of messy bugs, as well as help me to write beautiful code.

npm packages added:
    - typescript
    - @types/node
    - @types/express
    - @types/cors
    - @typescript-eslint/eslint-plugin
    - @typescript-eslint/parser
    - @types/jest
    - concurrently
    - body-parser-graphql
    - cross-env
    - cors
    - eslint
    - prettier
    - jest
    - ts-jest
    - supertest

files added:
    - .nvmrc
    - index.js => index.ts
    - /server/index.ts
    - tsconfig.json
    - .eslintrc.json
    - .prettierrc.json
    - .prettierignore
    - .eslintignore
    - .editorcongig
    - __tests__/index.spec.ts
    - jest.config.js

### January 31, 2022 - Monday

Today I added husky & lint-staged to make sure all my code is formatted correctly and that I'm passing testing thresholds before pushing.

Winston is another cool package I only just ran across.
It's a logging package that handles all the tough parts of building your own logging library.

I also added a few details so I could deploy the server on Heroku for staging.
I think I'm going to want to use Digital Ocean for production.
But Heroku is perfect for staging, it being free and all.

npm packages added:
    - husky
    - lint-staged
    - winston
    - @types/winston

files added:
    - .husky/pre-commit
    - Procfile

## February

### February 1, 2022 - Tuesday

This one was difficult.
Today's objective was to begin working with Knex and Postgres.
Because of my lack of familiarity with Typescript, I spent a good amount of time trying to make Knex work.
Most of what I found online didn't exactly solve my issues, but I am proud of what I was able to do in the end.
I'll probably publish the knexfile on it's own in a blog to help others who are going through this issue, and maybe even draw out an even better solution from more senior devs.

npm packages added:
    - knex
    - pg

files added:
    - .husky/pre-commit
