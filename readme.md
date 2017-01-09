# electron-boilerplate

<a href="http://forthebadge.com"><img src="http://forthebadge.com/images/badges/built-with-resentment.svg" height="35px" /></a>
<a href="http://forthebadge.com"><img src="http://forthebadge.com/images/badges/no-ragrets.svg" height="35px" /></a>

> Boilerplate to kickstart creating an app with [Electron](https://github.com/atom/electron)

Forked from [electron-boilerplate](https://github.com/sindresorhus/electron-boilerplate) and updated to add some TricomB2B flavored UX and a slight improvement to the ease of dropping in an AngularJS app.

## Getting started

Install the boilerplate and dependencies:

```sh
$ git clone git@github.com:TricomB2B/electron-boilerplate.git project-name
$ cd project-name && rm -rf .git
$ cd boilerplate && yarn
```

That will get you a working app.

## Scripts

```sh
$ npm start
```

Will launch the application for development and debugging.

```sh
$ npm run build
```

Will build all the distributable packages, packaging it up for MacOS, Linux, and Windows, using [electron-packager](https://github.com/electron-userland/electron-packager).

## App Installation

Just drop in the built AngularJS app into `./boilerplate/app`. Two key changes from an AngularJS web app environment to the Electron environment are required:

* Remove the `<base href="/">` tag from `index.html` as it is not required.
* Turn HTML5 mode off in the AngularJS app. Generally this can be done by:
	* In `index.html` change `<script src="dist/js/app.min.js"></script>` line to `<script src="dist/js/app.js"></script>`.
	* In `dist/js/app.js`, update the root configuration to remove HTML5 mode: `$locationProvider.html5Mode(false);`.

This will get the app correctly running in the Electron environment.

## Menus

We have added two menus, File and Dev, and removed the default menu items. These are defined in

* `menu/file-menu-template.js`
* `menu/dev-menu-template.js`

These can be edited as needed to provide additional functionality.

#### File menu

* `Kiosk Mode` - (alt+cmd+K) makes the app Full Screen. Full Screen can then be turned off by pressing `esc` or just quitting the app via the shortcut.
* `Quit` - (cmd+Q) Quits the app, obviously.

#### Dev menu

* `Reload` - (cmd+R) Reloads the app.
* `Toggle DevTools` - (alt+cmd+I) Toggle's Chrome's DevTools. Great for debugging.

## License

MIT @ [TricomB2B](http://tricomb2b.com)
