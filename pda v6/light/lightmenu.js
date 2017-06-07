define(function(require){
	var $ = require("jquery");
	var Model = function(){
		this.callParent();
	};
	
	Model.prototype.button1Click = function(event){
	var hotkey=$("#hotkeylight").val();
 
 if(hotkey=="2" || hotkey=="3" || hotkey=="4" || hotkey=="5"|| hotkey=="6"|| hotkey=="7"|| hotkey=="8" || hotkey=="9")
   this.comp('windowReceiverlight').windowEnsure("R"+hotkey);
   else if(hotkey=="1")
      {
         var url = require.toUrl('$UI/truk/light/noscanmenu.w');
            this.comp('windowDialoglight').open({
                src: url
            });
      }
      else if(hotkey=="10")
      {
         var url = require.toUrl('$UI/truk/light/scanmenu.w');
            this.comp('windowDialoglight').open({
                src: url
            });
      }
	};

	Model.prototype.windowDialog1Receive = function(event){
                 var or = event.data;
                if (typeof(or) != "undefined") { 
   this.comp('windowReceiverlight').windowEnsure(or);
}  
	
	};

	Model.prototype.button2Click = function(event){
   this.comp('windowReceiverlight').windowEnsure();
	};

	Model.prototype.windowReceiverlightReceive = function(event){
		
	};

	 
	Model.prototype.modelActive = function(event){
 $("#hotkeylight").focus();
	};

	 
	Model.prototype.modelLoad = function(event){
 $("#hotkeylight").focus();
	};

	 
	Model.prototype.input5Keydown = function(event){
               	if (event.keyCode == "13") {
		  if($("#hotkeylight").val()!="")
		  {
		  this.button1Click(event)
		  }
		  }
	};

	 
	return Model;
});
