# Recipe-App
reactnative,navigation 5,redux,hooks



[![made with expo](https://img.shields.io/badge/MADE%20WITH%20EXPO-000.svg?style=for-the-badge&logo=expo&labelColor=4630eb&logoWidth=20)](https://github.com/expo/expo) [![supports iOS and Android](https://img.shields.io/badge/Platforms-Native-4630EB.svg?style=for-the-badge&logo=EXPO&labelColor=000&logoColor=fff)](https://github.com/expo/expo) 


<p align="center">
  <img src="assets/screenshots/screenshots.png?raw=true" />
</p>

## Table of Contents

- [Install & Build](#install--build)
- [Stats](#stats)
- [Linting](#linting)
- [Expo Web](#expo-web)
- [Demo & Release Notes](#release-notes)

## Install & Build

Install: `yarn install`

Expo CLI: `npm install -g expo-cli` (if not already installed)

Run Project Locally: `expo start`

## Stats

- Expo SDK 38
- iOS, Android
- React Navigation v5
- PropTypes

## Linting

- run: `yarn lint` for a list of linting warnings/error in cli
- prettier and airbnb config
- make sure you have [prettier package](https://atom.io/packages/prettier-atom) installed on your atom/vscode editor
- then make sure to enable these options (packages → prettier):
  - eslint integration
  - stylelint integration
  - automatic format on save (toggle format on save)
- be aware of the `.prettierignore` file


## Release Notes

### version 0.0.1 (current)

- upgraded to [Expo SDK 38](https://blog.expo.io/expo-sdk-37-is-now-available-dd5770f066a6)
- started with [React Navigation v5](https://reactnavigation.org/)
- iOS and Android
- Tab Navigation (stacks created)
  - Home
    - Grid Category view
    - Catogories SubView
  - Meals
    - All Meals List View
  - Favorites
  - Filters
