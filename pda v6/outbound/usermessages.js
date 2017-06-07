define(function (require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	//var pick = require("$UI/truk/js/pickLang");
	var api = require("$UI/truk/js/api");
	var pick  ;
	var Model = function () {
		 pick = window.pickMessage;
		this.callParent();
		this.name = justep.Bind.observable("");
		this.carName = justep.Bind.observable("");
		this.BatchNo = justep.Bind.observable("");
		this.PickType = justep.Bind.observable("");
		this.storageLoction = justep.Bind.observable("");
		this.qty = justep.Bind.observable("");
	};

	Model.prototype.content1Click = function (event) {

	};

	Model.prototype.bottom1Click = function (event) {
		this.comp('windowReceiveruser').windowEnsure();
	};

	Model.prototype.button10Click = function (event) {
		/////////////////////////////////////////开始拣货请求
		var self = this;
		var rest = function (data) {


			pick.picks = data

			justep.Shell.showPage("pickmain").done(function () {
				self.close()
			});
		}
		var error = function (me) {
			return function (data) {

				var json = eval("(" + data.responseText + ")")

				$(me.getElementByXid("div4")).show().css("color", "#FFFFFF").css("background", "red").html("<span>" + json.message + "</span>");



			}
		}
		///////////////////
		////////////////////////////////////
		var pickStart = api.pickStart.replace(/{orderId}/, pick.BatchId)
		var opt = {
			type: "post",
			url: pickStart,
			success: rest,
			error: error(this)
		}
		api.mushinyAjax(opt);

	};

	Model.prototype.modelLoad = function (event) {
		this.name.set(sessionStorage["working"]);
		this.carName.set(pick.pickCar)
		this.BatchNo.set(pick.BatchNo)
		this.PickType.set(pick.pickType)
		this.storageLoction.set(pick.firstLocationName)
		this.qty.set(pick.qty);
	};

	return Model;
});