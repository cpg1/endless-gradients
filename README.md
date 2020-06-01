<p align="center">
  <img src="./src/assets/images/logo.png" width="150">
  <h1 align="center">Colorful</h1>
  <p align="center">Infinity color palette's, save it or use one of your colors</p>
  <p align="center">
    <img src="https://img.shields.io/badge/bot-colors-success" alt="PWA installable" />
    <img src="https://img.shields.io/badge/type-project-orange" alt="Repo Type" />
    <img src="https://img.shields.io/badge/language-javascript-yellow" alt="Repo Main Language" />
    <img src="https://img.shields.io/badge/platform-web-orange" alt="Project Platform" />
  </p>
  <p align="center">
    <a href="https://www.linkedin.com/in/laks-castro-9ab09a18b/" target="_blank">
      <img src="https://img.shields.io/twitter/url?label=Connect%20%40LaksCastro&logo=linkedin&url=https%3A%2F%2Fwww.twitter.com%2Flakscastro%2F" alt="Follow" />
    </a>
  </p>
</p>

<p align="center">
  <img width="450" src="./src/assets/print/print-1.png">
  <img width="450" src="./src/assets/print/print-2.png">
  <img width="450" src="./src/assets/print/print-3.png">
</p>

<p>
  <img src="./src/assets/pt-br.png" alt="Portuguese" height="16">
  <a href="https://github.com/LaksCastro/endless-gradients/blob/master/README-ptbr.md">Ler em português</a>
</p>

## How to use
Is very simple, open [Colorful Website](https://lakscastro.github.io/colorful/) and browse between infinite color palettes, liked any? Just click on heart button that she will be saved in browser storage,  and for see your saved palettes click on hamburger menu and click in "My Palette's" button, all of these will appear there :) Dark and light theme supported, to toggle click on button in bottom left.

## Project's Goal
Learn to work with Vanilla Js: Routes, DOM manipulation, all together with Webpack 4 and Babel for the app divided into modules and compatible with most browsers

## Clone the repository for your machine
### Requirements
- Node installed
- Npm or Yarn installed

### Installing
1. Clone the repository using the Github client of your choice, or download the repository
Using the Github client via the command line:
```
git clone https://github.com/LaksCastro/colorful.git
```

2. Install the dependencies:
```
npm install || yarn install
```

3. Create your .env.dev file and put the route we are working on as `PATH_BASE = /`, because the Webpack Dev Server uses the local server with this address http://localhost:3000/
```
# .env.dev

BASE_PATH=/
```

Do the same for .env.prod if you are going to use this project in production, but now put the name of the route relative to your server, in the case of this repository: `BASE_PATH=/colorful`

4. Start Webpack Dev Server:
```
npm run start || yarn start
```

5. Generate Build
```
npm run build || yarn build
```

## Built with
* [Webpack 4](https://webpack.js.org/) - Module Bundler.
* [Babel](https://babeljs.io/) - JavaScript transpiler.
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript) - Language

## Authors
* [Laks Castro](https://github.com/LaksCastro) - /lakscastro

## Contributors
* [Gustavo](https://github.com/freazesss) - /freazesss

## License
This project is licensed under the MIT license - see the [LICENSE.md](LICENSE.md) archive for more details.
