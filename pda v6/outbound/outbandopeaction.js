define(function(require){
	var $ = require("jquery");
	var Model = function(){
	 this.text = justep.Bind.observable("批次#######已经分配给拣货员工***，请重新扫描新的批次进入");
		this.callParent();
		
/*this.text.set("批次#######已经分配给拣货员工***，请重新扫描新的批次进入");*/
	};
	   
	Model.prototype.button8Click = function(event){
  var url = require.toUrl('$UI/mushiny/usermessage.w');
	        this.comp('windowDialog1').open({src:url});
	         $("#ipt").focus().select();
	       
	};

	Model.prototype.modelActive = function(event){
 this.comename.set("批次#######已经分配给拣货员工***，请重新扫描新的批次进入");
	};

	Model.prototype.modelLoad = function(event){

	};

 

	return Model;
});
