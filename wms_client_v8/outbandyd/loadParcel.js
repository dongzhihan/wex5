define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var api = require("$UI/wms_client_v8/js/api");
	
	var Model = function(){
		this.callParent();
		this.tittle=justep.Bind.observable('请扫描目的地');
		this.step="";
		this.sortCode="";
		this.container="";
		this.dockDoor="";
	};

	Model.prototype.modelActive = function(event){

	};

	Model.prototype.modelLoad = function(event){
		this.step=1;
		$(this.getElementByXid('input1')).focus();
	};

	Model.prototype.input1Keydown = function(event){
		if(event.keyCode=="13"){
			$(this.getElementByXid('errorCon')).hide();
			this.container=$(this.getElementByXid('input2')).val().trim();
			this.tittle.set('请扫描发货门');
			this.step=2;
			$(this.getElementByXid('input3')).focus();
			this.comps("input1").clear();
		}
	};

	Model.prototype.input2Keydown = function(event){
		if(event.keyCode=="13"){
			var success=function(me){
				return function(data){
					$(me.getElementByXid('errorCon')).hide();
					me.dockDoor=$(this.getElementByXid('input3')).val().trim();
					me.tittle.set('请扫描笼车');
					me.step=1;
					$(me.getElemetByXid('input1')).focus();	
				};
			};
			api.mushinyAjax({
				url:api.scandockandstorage,
				data:{
					storageid:this.container,
					dockdoorNo:this.dockDoor
				},
				success:success(this),
			});
			this.comps("input2").clear();
		}
	};

	Model.prototype.button2Click = function(event){
		var me=this;
		justep.Shell.showPage("login5").done(function(){
			me.close();
		});
	};

	Model.prototype.panel1Click = function(event){
		if(this.step==1){
			$(this.getElementByXid('input1')).focus();
		}else if(this.step==2){
			$(this.getElementByXid('input2')).focus();
		}
	};

	return Model;
});