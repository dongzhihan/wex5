define(function(require){
	var $ = require("jquery");
	var Model = function(){
		this.callParent();
	};
	
	Model.prototype.button1Click = function(event){
	var hotkey=$(this.getElementByXid("R5text")).val();
 
 if(hotkey=="1" || hotkey=="2" || hotkey=="3" || hotkey=="4")
   this.comp('windowReceiverR5').windowEnsure("R10"+hotkey);
	};

	Model.prototype.button2Click = function(event){
this.comp('windowReceiverR5').windowEnsure();
	};

	Model.prototype.modelActive = function(event){
        $(this.getElementByXid("R5text")).focus();
	};

 

	Model.prototype.modelLoad = function(event){
(this.getElementByXid("R5text")).focus();
	};

 

	Model.prototype.R5textKeydown = function(event){
               	if (event.keyCode == "13") {
		  if($(this.getElementByXid("R5text")).val()!="")
		  {
		  this.button1Click(event)
		  }
		  }
	};

 

	return Model;
});
