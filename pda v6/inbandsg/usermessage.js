define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.description = justep.Bind.observable("");
		this.qty = justep.Bind.observable("");
		this.speed = justep.Bind.observable("");
		 this.car = justep.Bind.observable("");
		this.callParent();
	};

	Model.prototype.content1Click = function(event){

	};

	Model.prototype.modelParamsReceive = function(event){
            this.description.set(event.params.description)
            this.qty.set(sessionStorage["containerAmount"])
            this.car.set(sessionStorage["containerName"])
	};

	Model.prototype.modelActive = function(event){
           
	};

	Model.prototype.button10Click = function(event){
justep.Shell.showPage("ground");
	};

	return Model;
});