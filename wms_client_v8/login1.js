		define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var api = require("$UI/wms_client_v8/js/api");
	var Message = require("$UI/system/components/justep/common/common");
	var Model = function() {
		this.callParent();

	};

	//输入用户名
	Model.prototype.input1Keypress = function(event) {
		if (event.keyCode == "13") {
			if ($.trim(event.target.value) != "") {
				sessionStorage["workingName"] = $(this.getElementByXid("IDInput")).val();
				justep.Shell.showPage("login2");

			} else {
				this.comp("messageDialog1").show();
			}
		}

	};
	
	//退出
	Model.prototype.button1Click = function(event) {
		navigator.app.exitApp();
	};

	Model.prototype.modelLoad = function(event) {
		$(this.getElementByXid("IDInput")).focus().select();
	};

	Model.prototype.modelActive = function(event) {
		$(this.getElementByXid("IDInput")).focus().select();
	};
	
	return Model;
});
