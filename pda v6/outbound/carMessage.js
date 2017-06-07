define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var pickLang;
		var api = require("$UI/truk/js/api");
	
	var Model = function() {

		this.callParent();
		this.carMessage = justep.Bind.observable("");
		this.carMessageBottom = justep.Bind.observable("");
	};

	Model.prototype.windowReceiver1Receive = function(event) {

	};

	Model.prototype.button1Click = function(event) {
		var self = this
		justep.Shell.showPage("outbandscancarid").done(function() {
			self.close()
		});
	};

	Model.prototype.button2Click = function(event) {
		var self = this
		var fun = function(data) {
			pickLang.pickOriginalCar = null;
			justep.Shell.showPage("outbandscancarid").done(function() {
			 
			});
		}

		var pickingCarts = api.pickingCarts.replace(/{pickingUnitLoadId}/, pickLang.pickOriginalCarId)
		pickingCarts = pickingCarts.replace(/{orderId}/, pickLang.BatchId)
		var opt = {
			type : "post",
			url : pickingCarts,
			success : fun
		}

		api.mushinyAjax(opt);
	};

	Model.prototype.modelLoad = function(event) {
		pickLang = window.pickMessage;
		this.carMessage.set("该批次有原车" + pickLang.pickOriginalCar + "")
		this.carMessageBottom.set("是否启用原车继续拣货？")
	};

	Model.prototype.modelInactive = function(event){
		pickLang = window.pickMessage;
	this.carMessage.set("该批次有原车" + pickLang.pickOriginalCar + "")
		this.carMessageBottom.set("是否启用原车继续拣货？")
	};

	return Model;
});