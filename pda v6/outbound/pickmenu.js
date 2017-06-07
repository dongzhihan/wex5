define(function (require) {
	var $ = require("jquery");
	var Model = function () {
		this.callParent();
		this.type = justep.Bind.observable(true);

	};

	Model.prototype.button1Click = function (event) {
		var hotkey = $("#hotkeypick").val().toUpperCase();

		if (hotkey == "4" || hotkey == "7" || hotkey == "5" || hotkey == "3" || this.type.get() && (hotkey == "1" || hotkey == "2")) {
			if (hotkey == "1")
				hotkey = "D"
			else if (hotkey == "2")
				hotkey = "M"
			else if (hotkey == "3")
				hotkey = "F"
			else if (hotkey == "4")
				hotkey = "P"
			else if (hotkey == "7")
				hotkey = "E"
			else if (hotkey == "5")
				hotkey = "I"
			this.comp('windowReceiversg').windowEnsure(hotkey);
		} else if (this.type.get() && hotkey == "6") {
			var url = require.toUrl('$UI/truk/light/lightmenu.w');
			this.comp('windowDialogsg').open({
				src: url
			});
		}
	};


	Model.prototype.modelLoad = function (event) {
		$("#hotkeypick").focus().select();
	};

	Model.prototype.windowReceiver1Receive = function (event) {
		if (event.params.picktypemain != "s")
			this.type.set(false)

	};

	Model.prototype.windowDialog1Receive = function (event) {
		var order = event.data;
		if (typeof (order) != "undefined") {
			this.comp('windowReceiversg').windowEnsure(order);
		}



	};

	Model.prototype.button2Click = function (event) {
		this.comp('windowReceiversg').windowEnsure();
	};

	Model.prototype.input5Keydown = function (event) {
		if (event.keyCode == "13") {
			if ($("#hotkeypick").val() != "") {
				this.button1Click(event)
			}
		}
	};

	Model.prototype.modelParamsReceive = function (event) {

	};

	return Model;
});