This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using the typescript template.

# Application Description

Build a simple weather app based on the OpenWeatherMap API (www.openweathermap.org/api).

## Current Weather Page

This page consists of the temperate for the user’s current location, determined by the browser, and the appropriate OpenWeatherMap icon representing the forecast weather conditions

## Five day Forecast

The page consists of the high and low temperatures for the next five days, based on the user’s current location. For each day, include the appropriate OpenWeatherMap icon representing the forecast weather conditions.

## Architecture decisions

- proxy
  Because this is a 4 hour code challenge i decided to skip a middle/back end. I chose to proxy requests from my app to the open weather app through the proxy setting in package.json. If other end points are added a middlewear/back end client will be neccessary.

* context and location data
  The user's location data is stored in context as a global store and used by both pages.
* Measurement Units
  I chose to use the Fahrenheit conversion option from the open weather API. See their documentation[https://openweathermap.org/current#geo]

* The OpenWeatherMap API states that geolcation is an appropriate way to gain information, however regardless of what lat/long combination given it defaults to lat: 35.016 and long: 139.

* According to the docs /forecast/daily has an optional param of cnt with a range from 1-16 however when using lat/long this also does not work properly.

# Getting Started

In the root directory run `yarn install` to gather all dependencies before you are able to run any of the available scripts below.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
