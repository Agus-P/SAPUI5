/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"CrearProyectoUI5/MyFirstProject/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});