define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
		this.userName=justep.Bind.observable('');
		this.mission=justep.Bind.observable('');
		this.total=justep.Bind.observable('');
		this.number=justep.Bind.observable('');
		this.time=justep.Bind.observable('');
		this.efficiency=justep.Bind.observable('');
		this.next=justep.Bind.observable('');
	};

	Model.prototype.modelLoad = function(event){
		this.initial();
	};
	
	Model.prototype.initial=function(event){
		this.userName.set('孙萌萌');
		this.mission.set('掉落商品处理');
		this.number.set('2000');
		this.total.set('15');
		this.time.set('1小时');
		this.efficiency.set('200个/小时');
		this.next.set('1-2-A056-019B01');
	};

	Model.prototype.modelActive = function(event){
		this.initial();
	};

	Model.prototype.button1Click = function(event){
		this.comp('windowReceiver1').windowEnsure();
	};

	return Model;
});