/*global QUnit*/

sap.ui.define([
	"app/madhav92392/controller/miningView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("miningView Controller");

	QUnit.test("I should test the miningView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
