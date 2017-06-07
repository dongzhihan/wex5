define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	 var api=require("$UI/truk/js/api");
	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelParamsReceive = function(event){
                    
	};

 

	Model.prototype.modelLoad = function(event){
	           var   data=this.comp("data1")
	           
            var options = {
                 defaultValues :  api.warehousesid
         };
         data.clear();
         data.newData(options);
	};

 

	Model.prototype.li2Click = function(event){
             var row = event.bindingContext.$object;
            var id=row.row.id.value.latestValue; 
             sessionStorage["warehousesName"]=row.row.name
             this.comp('windowReceiver1').windowEnsure(id);
	};

 

	return Model;
});