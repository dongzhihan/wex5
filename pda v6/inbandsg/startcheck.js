define(function(require){
	var $ = require("jquery");
	var Model = function(){
	 this.text = justep.Bind.observable("车牌###########已经分配给***，是否确认2人同上1车商品？");
		this.callParent();
		
/*this.text.set("批次#######已经分配给拣货员工***，请重新扫描新的批次进入");*/
	};
	   
	Model.prototype.button8Click = function(event){
  var url = require.toUrl('$UI/truk/inbandsg/usermessage.w');
	        this.comp('windowDialog1').open({src:url});
	         $("#ipt").focus().select();
	       
	};

	Model.prototype.modelActive = function(event){
 this.comename.set("车牌###########已经分配给***，是否确认2人同上1车商品？");
	};

	Model.prototype.modelLoad = function(event){

	};

 

	Model.prototype.button6Click = function(event){
                   justep.Shell.showPage("usermessage");
	};

 

	return Model;
});
