'use strict';

const devMenuTemplate = {
	label: 'Development',
	submenu: [
		{ role: 'reload'},
		{ type: 'separator' },
		{ role: 'toggledevtools'}
	]
};

module.exports = devMenuTemplate;
