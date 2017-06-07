define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var api = require("$UI/wms_client_v8/js/api");
	
	var Model = function(){
		this.callParent();
		this.comename = justep.Bind.observable("欢迎"+sessionStorage["working"]+"进入拣货系统");
		this.station="";
	};

	Model.prototype.input1Keydown = function(e){
		if (e.keyCode == "13") {
			this.station=$(this.getElementByXid("input1")).val();
			var fun=function(me){
				return function(data){

					var value={
						station:data.rebatchStationName,
						stationId:data.id
					};
					justep.Shell.showPage("startrebatch", value);
				};
			};
			api.mushinyAjax({
				type:"GEt",
				url:api.checkRebatchStation+"?name="+this.station,
				success:fun(this),
				error:function(data){
				}
			});	
        }
	};



	Model.prototype.modelLoad = function(event){
		 $(this.getElementByXid("input1")).focus();
	};

	Model.prototype.modelActive = function(event){
		 $(this.getElementByXid("input1")).focus();
	};


	Model.prototype.panel1Click = function(event){
		$(this.getElementByXid("input1")).focus().select();
	};
	return Model;
});