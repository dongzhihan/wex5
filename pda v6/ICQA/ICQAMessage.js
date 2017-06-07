define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
		this.userName=justep.Bind.observable('');
		this.mission=justep.Bind.observable('');
		this.type=justep.Bind.observable('');
		this.number=justep.Bind.observable('');
		this.right=justep.Bind.observable('');
		this.time=justep.Bind.observable('');
		this.efficiency=justep.Bind.observable('');
		this.poorLocation=justep.Bind.observable('');
		this.next=justep.Bind.observable('');
	};

	Model.prototype.modelLoad = function(event){
	};
	
	Model.prototype.initial=function(event){
		
	};

	Model.prototype.modelActive = function(event){
		this.initial();
	};

	Model.prototype.button1Click = function(event){
		this.comp('windowReceiver1').windowEnsure();
	};

	Model.prototype.modelParamsReceive = function(event){
		var info=event.params;
		this.userName.set(sessionStorage['working']);
		this.mission.set(this.getParent().welTittle.get());
		this.type.set(this.getParent().welTittle.get().substr(0,this.getParent().welTittle.get().indexOf('-')));
		this.number.set(info[0].amount);
		this.right.set(info[0].totalQty);
		this.time.set(info[0].times+'小时');
		this.efficiency.set(info[0].rate+'个/小时');
		this.poorLocation.set(info[0].ngQty+'个');
	};

	return Model;
});