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

npm packages added:
    - typescript
    - @types/node
    - @types/express
    - concurrently
    - body-parser-graphql
    - cross-env

files added:
    - .nvmrc
    - index.js => index.ts
    - /server/index.ts
    - tsconfig.json
