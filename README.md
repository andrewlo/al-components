
# AL Components

Sandbox app to practice creating some commonly used UI components.

Live deployment here:
https://al-components.herokuapp.com/

## npm scripts

> To see all available scripts:
```bash
$ npm run
```

### Dev
```bash
$ npm run dev
```

This runs a development mode server with live reload etc.

Open `http://localhost:8080` in your browser.

### Production

```bash
$ npm install
$ npm start
```
or
```bash
$ npm run build
$ npm start
```
This runs a production-ready express server that serves up a bundled and
minified version of the client.

Note: AoT is enabled by default. To disable AoT, use `npm run build:jit`.

Open `http://localhost:8080` in your browser.

### Tests

#### Single Run (with linting and coverage)
```bash
$ npm test
# or
$ npm t
```

#### Watch Files
```bash
$ npm run test:watch
```

#### Coverage
```bash
$ npm run cover
```
