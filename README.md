### Mobile Application Using Ionic, AngularJS, ES6 and Webpack

A simple Ionic boilerplate using AngularJS, Webpack and ES6

### Thanks
Julien Renaux Alias : [Shprink](https://github.com/shprink) for the big contribution.
And his incredible work with [ios-android-wordpress-ionic-webpack-ES6](https://github.com/shprink/ios-android-wordpress-ionic-webpack-ES6)

### Install

```
npm install

# Cordova
cp config.dist.xml config.xml
npm run installCordova
```

### Run

```
# Web
npm run devserver

# Android
npm run runAndroid

# iOS
npm run runIosEmulator
npm run runIosDevice
```

### Translation

Just added [ng-translate](https://github.com/angular-translate/angular-translate) to the boilerplate !
Here how it works :

```
Create a folder translation in the module where you want to use ng-translate
then create a file named en.json (for english) and put your translation
Webpack will automatically merge every en.json files into one.
then you can use it like that : {{ 'ui.home.title' | translate }} into your HTML
```
You can find an example into the home module.
Look into the webpack.config to see how to add new language.
