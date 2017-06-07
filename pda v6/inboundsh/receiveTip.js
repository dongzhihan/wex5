define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
		this.itemName = justep.Bind.observable("");
		this.itemAmount=justep.Bind.observable("");
		this.receiveAmount=justep.Bind.observable("");
		this.total=justep.Bind.observable("");
		this.overtop=0;
	};

	Model.prototype.button1Click = function(event){
		this.comp('windowReceiver1').windowEnsure(this.total.get());
	};

	Model.prototype.button2Click = function(event){
		this.comp('windowReceiver1').windowEnsure();
	};

	Model.prototype.modelParamsReceive = function(event){

	};

	Model.prototype.modelLoad = function(event){	
		this.itemName.set(this.getParent().getParent().fTitle.get());
		this.itemAmount.set(this.getParent().itemAmount);
		this.receiveAmount.set(this.getParent().receiveAmount);
		this.total.set(this.getParent().total);
		var html="<span class='weight'>"+this.getParent().overtop+"件</span>，请再次确认数量"
		$("#overtop").html(html)
		
	};

	return Model;
});