'use strict';

const BrowserWindow = require('electron').BrowserWindow;

const devMenuTemplate = {
	label: 'Development',
	submenu: [{
			label: 'Reload',
			accelerator: 'CmdOrCtrl+R',
			click: () => {
				BrowserWindow.getFocusedWindow().webContents.reloadIgnoringCache();
			}
		}, {
			label: 'Toggle DevTools',
			accelerator: 'Alt+CmdOrCtrl+I',
			click: () => {
				BrowserWindow.getFocusedWindow().toggleDevTools();
			}
		}]
};

module.exports = devMenuTemplate;
