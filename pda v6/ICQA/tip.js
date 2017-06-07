define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.button1Click = function(event){
		this.comp('windowReceiver1').windowEnsure(1);
	};
	
	Model.prototype.button2Click = function(event){
		this.comp('windowReceiver1').windowEnsure();
	};
	
	return Model;
});