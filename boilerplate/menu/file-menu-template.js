'use strict';

const app           = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;

const fileMenuTemplate = {
	label: 'File',
	submenu: [{
			label: 'Kiosk Mode',
			accelerator: 'Alt+CmdOrCtrl+K',
			click: () => {
				BrowserWindow.getFocusedWindow().setFullScreen(true);
				BrowserWindow.getFocusedWindow().setMenuBarVisibility(false);
			}
		}, {
	    label: 'Quit',
	    accelerator: 'CmdOrCtrl+Q',
	    click: () => {
	      app.quit();
	    }
  	}]
};

module.exports = fileMenuTemplate;
