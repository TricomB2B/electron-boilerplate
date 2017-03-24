'use strict';

const app = require('electron').app;

const fileMenuTemplate = {
	label: 'File',
	submenu: [
		{ role: 'togglefullscreen' },
		{ type: 'separator' },
		{ role: 'resetzoom' },
		{ role: 'zoomin' },
		{ role: 'zoomout' },
		{ type: 'separator' },
		{ role: 'quit' }
	]
};

module.exports = fileMenuTemplate;
