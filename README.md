# Front-end boilerplate

## When start a new project.

* Set all setting in `config/app.js`.

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

Resources are imported with webpack so then can be used in every folder.

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

## Configuration

### Config folder

#### app.js 
* appName (can also be added in the build script in package.json with env.name=vettvangur
* port (can be set with env.port but defaults to 8809

#### postcss.config.js
This is a config file for css browser compatability.



### Webpack folder

#### index.js
This is the root webpack file.

#### optimization.js
js and css optimization.

#### paths.js

configure paths here like if you want to do `import from 'components/button';`

public path is always `/content/appName/` appName is set in app.js in config folder. this public path is for /Umbraco.Site/content/appName/ this is only for build files

`devServerContent`: is always the public folder in `Umbraco.Frontend`
`build`: is always `Umbraco.Frontend/build` or that is the current directory yarn build is run from.

some stuff in there is currently useless like root, assets and will be removed.

#### plugins.js

This file is for plugin configuration like CleanWebpackPlugin MiniCssExtractPlugin and other things you might want it has one array of plugins for production and another for development and one that is for used in both and then they are concated into one based on env.


#### rules.js

File for setting rules. this is setting how webpack should handle files like js, jsx, ts, tsx, svg, jpg, png, fonts etc...
