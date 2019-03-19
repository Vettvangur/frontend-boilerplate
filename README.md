# Front-end boilerplate

## When start a new project.

* Set all setting in `config/app.js`.
* Remove car example in `src/components` and can interface in `src/interfaces`
* add paths for imports in `webpack/paths.js`. for example: `import x from 'components/x`

## Install dependencies

```bash
npm i
```

## Scripts
```bash
## Build bundles for development.
npm start

## or
npm run dev
```
```bash
## Build production build.
npm run build
```
```bash
## Remove node_modules and install them agin.
npm run clean

## Remove node_modules, package-lock.json and clean npm cash.
npm run clean:cache
```

## Styles folder

Resources are imported with webpack so then can be used in every file.

### resources

We've got functions, helpers and mixins in folders in the `styles/resources` folder there we've got a nice heap of things.

examples: rem, color

```
h1 {
  font-size: rem(48); // sets the font size as the calculated rem from px.
  color: color($colorScheme, primary); // sets the color as primary from the $colorScheme inside `styles/resources/colors.js`
}
```

```
h1 {
  font-size: rem(48); // sets the font size as the calculated rem from px.
  color: color($colorScheme, primary, .5); // sets the color as primary from the $colorScheme inside `styles/resources/colors.js` with opacity .5
}
```
