#React Redux Boilerplate

This repository contains boilerplate code to quickly get started with a React application with Redux for state management.

I created this primarily for my personal use, as such the setup reflects my personal preferences. If you like them, feel free to use it.

The example application is the counter example from Redux site.


##Common Tasks

###Fetch dependencies

```sh
npm install
```

###Run tests

```sh
npm test
```

###Re-run tests on change
```sh
npm run test:watch
```

###Run dev server

Starts dev server at port 8136 with live reload.

```sh
npm start
```

###Build for distribution

Bundles the files into ./build folder for distribution

```sh
npm run webpack:build
```

##Dependencies

I made these choices based on my preference.

###Development

This application uses Babel and Webpack for support of ES2015, JSX and ES2015 module system.

###Testing

I prefer Mocha over Facebook's Jest. By using jsdom we can do headless testing similar to Jest. Sinon and expect are also included that can be helpful for mocking and asserting in unit tests.

See ./tests for example tests.
