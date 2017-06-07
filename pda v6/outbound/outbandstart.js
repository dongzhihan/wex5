define(function(require){
	var $ = require("jquery");
	var Model = function(){
		this.callParent();
	};
	    this.comename = justep.Bind.observable("");
this.comename.set("欢迎"+localStorage["name"]+"进入拣货系统");
	Model.prototype.button8Click = function(event){
  var url = require.toUrl('$UI/mushiny/usermessage.w');
	        this.comp('windowDialog1').open({src:url});
	         $("#ipt").focus().select();
	       
	};

	Model.prototype.modelActive = function(event){
 this.comename.set("欢迎"+localStorage["name"]+"进入拣货系统");
	};

	Model.prototype.modelLoad = function(event){

	};

	return Model;
});
