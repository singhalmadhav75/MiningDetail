/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"app/madhav92392/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
