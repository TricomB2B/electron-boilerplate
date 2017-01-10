'use strict';

/**
 * Boilerplate for Electron Desktop App.
 * TricomB2B customized version forked from
 * https://github.com/sindresorhus/electron-boilerplate
 *
 * Adds menu items for launching a Kiosk mode (eg fullscreen),
 * as well as development items like Reload and DevTools toggler.
 *
 * @author Todd Miller <todd.miller@tricomb2b.com>
 */

const electron = require('electron');
const path     = require('path');
const url      = require('url');

const app  = electron.app;
const Menu = electron.Menu;

// menu definitions
const devMenuTemplate  = require('./menu/dev-menu-template');
const fileMenuTemplate = require('./menu/file-menu-template');

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// prevent window being garbage collected
let mainWindow;

/**
 * Do some stuff when the application window is closed
 */
function onClosed() {
	// unregister events
	electron.globalShortcut.unregister('Escape');
	// dereference the window
	// for multiple windows store them in an array
	mainWindow = null;
}

/**
 * Set up the application window and launch
 */
function createMainWindow() {
	let menus = [fileMenuTemplate, devMenuTemplate];
	Menu.setApplicationMenu(Menu.buildFromTemplate(menus));

	const win = new electron.BrowserWindow({
		width: 1000,
		height: 600
	});

	win.loadURL(url.format({
		pathname: path.join(__dirname, 'app', 'index.html'),
		protocol: 'file:',
		slashes: true
	}));

	win.on('closed', onClosed);

	return win;
}

/**
 * Get out of fullscreen mode
 */
function disableFullScreen () {
	if (mainWindow.isFullScreen()) {
		mainWindow.setFullScreen(false);
		mainWindow.setMenuBarVisibility(true);
	}
}

/**
 * Actions to take when all the application windows are closed
 */
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

/**
 * MacOS only action to take when the application is activated
 */
app.on('activate', () => {
	if (!mainWindow) {
		electron.globalShortcut.register('Escape', disableFullScreen);
		mainWindow = createMainWindow();
	}
});

/**
 * Actions to take when the application is bootstrapped and ready to launch
 */
app.on('ready', () => {
	electron.globalShortcut.register('Escape', disableFullScreen);
	mainWindow = createMainWindow();
});
