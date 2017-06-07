define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
	this.user = justep.Bind.observable("用");
		this.callParent();
		
	};

	Model.prototype.content1Click = function(event){
 var url = require.toUrl('$UI/mushiny/inbandsg/scancar_id.w');
	        this.comp('windowDialog1').open({src:url});
	};

	Model.prototype.bottom1Click = function(event){
                this.comp('windowReceiveruser').windowEnsure();
	};

	return Model;
});