sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], (BaseController, JSONModel) => {
  "use strict";

  return BaseController.extend("app.madhav92392.controller.App", {
      onInit() {
        var oModel = new JSONModel();
        oModel.loadData("/model/mockData/miningData.json");
        this.getView().setModel(oModel, "miningModel");
      }
  });
});