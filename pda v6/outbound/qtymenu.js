define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var pickLang = window.pickMessage;
	var Model = function(){
		this.callParent();
		 this.pickQty= justep.Bind.observable("");
		 this.surplus= justep.Bind.observable("");
	};

	Model.prototype.button8Click = function(event){
 this.comp('windowReceiver1').windowEnsure("M");
	};

	Model.prototype.button1Click = function(event){
 this.comp('windowReceiver1').windowEnsure("D");
	};

	Model.prototype.button2Click = function(event){
this.comp('windowReceiver1').windowEnsure("F");
	};

	Model.prototype.button3Click = function(event){
this.comp('windowReceiver1').windowEnsure();
	};

	Model.prototype.modelLoad = function(event){
		pickLang = window.pickMessage;
               this.pickQty.set(pickLang.pickSur)
                  this.surplus.set(pickLang.surplus)
	};

	return Model;
});