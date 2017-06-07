define(function(require){
	var $ = require("jquery");
	var Model = function(){
		this.callParent();
	};
	Model.prototype.button1Click = function(event){
	var hotkey=$(this.getElementByXid("hotkeyR1")).val();
 if(hotkey=="1" || hotkey=="2" || hotkey=="3" || hotkey=="4")
 
   this.comp('windowReceiverR1').windowEnsure("R1"+hotkey);
     
	};

	Model.prototype.button2Click = function(event){
  this.comp('windowReceiverR1').windowEnsure();
	};

 
	Model.prototype.modelActive = function(event){
 $(this.getElementByXid("hotkeyR1")).focus();
	};

	Model.prototype.modelLoad = function(event){
 $(this.getElementByXid("hotkeyR1")).focus();
	};

	Model.prototype.hotkeyR1Keydown = function(event){
               	if (event.keyCode == "13") {
		  if($(this.getElementByXid("hotkeyR1")).val()!="")
		  {
		  this.button1Click(event)
		  }
		  }
	};

	return Model;
});
