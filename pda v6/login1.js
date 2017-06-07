define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var api = require("$UI/truk/js/api");
	var Message = require("$UI/system/components/justep/common/common");
	var Model = function() {
		this.callParent();

	};

	Model.prototype.input1Keypress = function(event) {

		if (event.keyCode == "13") {
			if ($.trim(event.target.value) != "") {
				// {
				/*       	var url=  require.toUrl("./login2.w");
				       	W
				 this.comp('windowDialog1').open({
				     src: url
				 });*/

				sessionStorage["workingName"] = $(this.getElementByXid("IDInput")).val();
				justep.Shell.showPage("login2");

			} else {
				this.comp("messageDialog1").show();
			}
		}

	};

	Model.prototype.button1Click = function(event) {

	};

	Model.prototype.modelLoad = function(event) {
		$(this.getElementByXid("IDInput")).focus().select();
         
		//api.mushinyajaxfind( api.StockUnitController,"get",{CONTSINER_ID:"cc1"},function (data){});

	};

	Model.prototype.modelActive = function(event) {
		$(this.getElementByXid("IDInput")).focus().select();
		
  
		
	};

	Model.prototype.windowDialog2Receive = function(event) {

	};

	Model.prototype.windowDialog1Receive = function(event) {
		var state = event.data
		this.comp('windowReceiver1').windowEnsure(state);
	};

	return Model;
});
