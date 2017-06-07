define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.button1Click = function(event){
			$(this.getElementByXid("button1")).css("background", "linear-gradient(#9989ce,#3061b9)");
		$(this.getElementByXid("button2")).css("background", "gray");
		this.comp("contents1").to("content2")
	};

	Model.prototype.button2Click = function(event){
			$(this.getElementByXid("button2")).css("background", "linear-gradient(#9989ce,#3061b9)");
		$(this.getElementByXid("button1")).css("background", "gray");
		this.comp("contents1").to("content3")
	};

	return Model;
});