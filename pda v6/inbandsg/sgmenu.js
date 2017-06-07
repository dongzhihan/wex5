define(function(require){
	var $ = require("jquery");
	var Model = function(){
		this.callParent();
	};
	
	Model.prototype.button1Click = function(event){
	var hotkey=$("#hotkey").val();
	
	 if(hotkey=="1" || hotkey=="2" || hotkey=="3" || hotkey=="4" ||  hotkey=="6")
	   { if(hotkey=="1")
	        hotkey="S";
	        else if(hotkey=="2")
	        hotkey="Q";
	        else if(hotkey=="3")
	        hotkey="D";
	        else if(hotkey=="4")
	        hotkey="I";
	        else if(hotkey=="6")
	        hotkey="E";
	   this.comp('windowReceiversg').windowEnsure(hotkey);
	   }
 
   else if(hotkey=="5")
   {
            var url = require.toUrl('$UI/truk/light/lightmenu.w');
            this.comp('windowDialogsg').open({
                src: url
            });
   }
	};
 

	Model.prototype.modelLoad = function(event){
$("#hotkey").focus().select();
	};

	Model.prototype.windowReceiver1Receive = function(event){
             
	};

	Model.prototype.windowDialog1Receive = function(event){
	   var order = event.data;
	   if (typeof(order) != "undefined") { 
   this.comp('windowReceiversg').windowEnsure(order);
}  
	

  
	};

	Model.prototype.button2Click = function(event){
 this.comp('windowReceiversg').windowEnsure();
	};

	Model.prototype.input5Keydown = function(event){
                  	if (event.keyCode == "13") {
		  if($("#hotkey").val()!="")
		  {
		  this.button1Click(event)
		  }
		  }
	};

	return Model;
});
