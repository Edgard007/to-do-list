# Scaffold

_Scaffold, created with  React + TypeScript + Vite_

<p align="center">
  <a href="https://reactjs.org" target="_blank">
    <img src="public/react.svg" width="65" alt="React logo" />
  </a>
   <a href="https://reactjs.org" target="_blank">
    <img src="public/typescript.svg" width="65" alt="Typescript logo" />
  </a>
  <a href="https://vitejs.dev" target="_blank">
    <img src="public/vite.svg" width="65" alt="Vite logo" />
  </a>
</p>

## Description

[React](https://github.com/facebook/react) framework TypeScript starter repository.

## Configuration

Below, we outline the configuration of your project:

### Path Aliases

Aliases for simplifying folder paths in your project have been configured. You can find them in the `tsconfig.json` file.

```js
baseUrl: '.',
paths: {
   "@src/*": ["src/*"],
   "@assets/*": ["src/common/assets/*"],
   "@common/*": ["src/common/*"],
   "@components/*": ["src/components/*"],
   "@config/*": ["src/config/*"],
   "@helpers/*": ["src/helpers/*"],
   "@hooks/*": ["src/hooks/*"],
   "@pages/*": ["src/pages/*"],
   "@utils/*": ["src/utils/*"],
   "@actions/*": ["src/utils/actions/*"],
   "@contexts/*": ["src/utils/contexts/*"],
   "@interfaces/*": ["src/utils/interfaces/*"],
   "@providers/*": ["src/utils/providers/*"],
   "@reducers/*": ["src/utils/reducers/*"],
   "@types/*": ["src/utils/types/*"]
},
```

### Language

Internationalization (i18n) is set up for the following languages:

- Spanish.
- English.


### Styles

#### Themes

Project supports two themes:

- Dark mode.
- Light mode.

#### Global Variables

In the `styles` directory, you'll find files defining global variables for:

- Colors.
- Fonts.
- Animations.
- Sizes, z-index, etc.

### Layout

Project includes a layout with:

- Navbar.
- Main.

### Reducer

A Reducer has been configured using `useContext` and `useReducer` to store language and theme settings. Additionally, the following features have been implemented:

- Device information retrieval (theme, language).
- Data persistence in local storage.

## Running the app

```
# Install dependencies
$ pnpm i

# Start app
$ pnpm start
```

## Dependencies

```js
dependencies: {
   "react",
   "react-dom",
   "i18next",
   "react-i18next",
   "i18next-http-backend",
   "styled-components",
}
```

## Authors

_Project from its beginnings, carried out by:_

- **Francisco Palacios** - _Full Stack Developer_ - [Edgard007](https://github.com/Edgard007)