define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	  var stowMessage = require("$UI/truk/js/STOW");
	  	var api = require("$UI/truk/js/api");
	var Model = function(){
 
		this.callParent();
		this.outQty= justep.Bind.observable("");
		this.amount=justep.Bind.observable("");
		this.amounntMax=justep.Bind.observable("");
		this.stowQty=justep.Bind.observable("");
		this.lastBinName=justep.Bind.observable("");
		this.PickArea=justep.Bind.observable("");
		this.damge=justep.Bind.observable("");
	};

	Model.prototype.content1Click = function(event){

	};

	Model.prototype.bottom1Click = function(event){
                this.comp('windowReceiveruser').windowEnsure();
	};

	Model.prototype.modelLoad = function(event){
	var outQty;
                	      var fun= function(data)
	         { 
	         	              outQty=data;
	         	 
	              }
	     
		var opt = {
					data : {toContainer:sessionStorage["containerName"]},
					type : "get",
					url : api.andonInbounds,
					success : fun
				}
		 
				api.mushinyAjaxProblem(opt);
				this.outQty.set(outQty);
				this.amount.set(this.getParent().carNumber.get())
				this.stowQty.set(this.getParent().hsNumber.get())
				this.amounntMax.set(sessionStorage["containerAmount"])
				this.lastBinName.set(stowMessage.binName)
				this.damge.set(stowMessage.damageqty)
				this.PickArea.set(sessionStorage["receivingDestination"])
	};

	Model.prototype.button10Click = function(event){
		   this.comp('windowReceiveruser').windowEnsure();
	};

	Model.prototype.windowDialog1Receive = function(event){
                     $(this.getElementByXid("panel1")).click()
	};

	return Model;
});