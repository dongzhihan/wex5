define(function(require){
	var $ = require("jquery");
	var Model = function(){
		this.callParent();
		 this.comename = justep.Bind.observable("欢迎"+sessionStorage["working"]+"进入上架系统");
	};
	   
 
	Model.prototype.button8Click = function(event){
 
	             var me=this;
			justep.Shell.showPage("scancar_id").done( function(){me.close()});;
	     
	       
	};

	Model.prototype.modelActive = function(event){
 this.comename.set("欢迎"+sessionStorage["working"]+"进入上架系统");
	};

	Model.prototype.modelLoad = function(event){
    
	};

	return Model;
});
