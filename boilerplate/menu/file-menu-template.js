'use strict';

const app           = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;

const fileMenuTemplate = {
	label: app.getName(),
	submenu: [
		{
			label: 'Kiosk Mode',
			accelerator: 'Alt+CmdOrCtrl+K',
			click: () => {
				BrowserWindow.getFocusedWindow().setFullScreen(true);
				BrowserWindow.getFocusedWindow().setMenuBarVisibility(false);
			}
		},
		{ type: 'separator' },
		{ role: 'resetzoom' },
		{ role: 'zoomin' },
		{ role: 'zoomout' },
		{ type: 'separator' },
		{ role: 'quit' }
	]
};

module.exports = fileMenuTemplate;
