define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.scanbanchiptKeydown = function(event){
if (event.keyCode == "13") {
	
	//alert($("#ipt").val());
	 var url = require.toUrl('$UI/mushiny/outband/outbandopeaction.w');
	        this.comp('windowDialog1').open({src:url});
	        //justep.Shell.showPage("outbandstart");
	}
	};

	return Model;
});