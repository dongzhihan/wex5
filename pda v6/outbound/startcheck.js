define(function(require){
	var $ = require("jquery");
	var Model = function(){
		this.callParent();
	};
	  
	Model.prototype.button8Click = function(event){
  var url = require.toUrl('../outbound/scancar_id.w');
	        this.comp('windowDialog1').open({src:url});
	         $("#ipt").focus().select();
	       
	};
function failhw1() {

    var html = '<span>批次</span><span>1234567</span><span>已经分配给拣货员工李四，请重新扫描新的批次进入</span>';
    $("#messagpp").html(html);
    // $(".waring1").html(html)
  $("#messagpp").css("text-align", "left");
    $("#messagpp").css("background-color", "red");
    
}

function failhw2() {

    var html = '<span>拣货权限【</span><span>pp</span><span>】内不能拣该批次商品，请联系组长或经理更改权限</span>';
    $("#messagpp").html(html);
    // $(".waring1").html(html)
      $("#messagpp").css("text-align", "left");
    $("#messagpp").css("background-color", "red");
    
}
	Model.prototype.modelActive = function(event){
   
	};

	Model.prototype.modelLoad = function(event){
	 $("#messagpp").show();
 
	};

	Model.prototype.button6Click = function(event){
			
  var url = require.toUrl('../login3.w');
	     //   this.comp('windowDialog1').open({src:url});
	      justep.Shell.showPage("login3");
	};

	return Model;
});
