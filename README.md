# Vanilla boilerplate

# Structure

* Umbraco.Extensions
* Umbraco.Frondend
* Umbraco.Site

# Install

First install ``node_modules`` with ``yarn install``

Then to run dev mode for front end

Run ``yarn start`` or ``yarn dev`` 

### Build commands:
``yarn build``

to build the project run ``yarn build``



# Styles folder

Resources are imported with webpack so then can be used in every folder.

## resources

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

# Configuration

## Config folder

### app.js 
* appName (can also be added in the build script in package.json with env.name=vettvangur
* port (can be set with env.port but defaults to 8809

### postcss.config.js
This is a config file for css browser compatability.



## webpack folder

### devServer.js
Don't touch this file.

### index.js
Don't touch this file unless to add entries.


### optimization.js
js and css optimization.

### paths.js

configure paths here like if you want to do `import from 'components/button';`

public path is always `/content/appName/` appName is set in app.js in config folder. this public path is for /Umbraco.Site/content/appName/ this is only for build files

`devServerContent`: is always the public folder in `Umbraco.Frontend`
`build`: is always `Umbraco.Frontend/build` or that is the current directory yarn build is run from.


some stuff in there is currently useless like root, assets and will be removed.

### plugins.js

This file is for plugin configuration like CleanWebpackPlugin MiniCssExtractPlugin and other things you might want it has one array of plugins for production and another for development and one that is for used in both and then they are concated into one based on env.

### resolve.js

Don't touch this file.

### rules.js

File for setting rules. this is setting how webpack should handle files like js, jsx, ts, tsx, svg, jpg, png, fonts etc...
