<h1 align="center">fivem-ts-boilerplate</h1>

<p align="center">
  <i>:fire: A Typescript Boilerplate for FiveM :video_game:</i>
  <br>
  <br>
  <a href="https://github.com/d0p3t/fivem-ts-boilerplate/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat" alt="License: MIT">
  </a>
  <a href="https://github.com/d0p3t/fivem-ts-boilerplate/commits/master">
    <img src="https://img.shields.io/github/last-commit/d0p3t/fivem-ts-boilerplate.svg?style=flat" alt="Last commit">
  </a>
  <a href="https://discord.d0p3t.nl">
    <img src="https://img.shields.io/discord/330910293934997504?label=Discord" alt="Discord">
  </a>
</p>

This is a basic boilerplate for creating a FiveM resource using Typescript. It includes webpack config files and a directory structure to get you started. We recommend to use [fivem-js](https://github.com/d0p3t/fivem-js) alongside this boilerplate for faster development of client scripts.

## Usage
1. Clone repository into your `resources/[local]` folder.
2. `npm i` or `yarn` to install the dependencies.
3. Start development.

### Development
Use `npm run watch` or `yarn watch` to watch files during development.

### Production
Build your production ready code with `npm run build` or `yarn build`.

This will build the client and server script with the `--mode production` flag.

### Automatic Builds (Optional)
The `fxmanifest.lua` is not setup to automatically build upon first FXServer start. If you'd like to setup automatic builds you must add the following to your `fxmanifest.lua`.

```lua
dependency 'yarn'
dependency 'webpack'

webpack_config 'webpack.config.js'
```

## License
This product is MIT licensed. Please make sure you give credit and include this license in your product.