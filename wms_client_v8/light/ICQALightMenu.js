define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
		this.hotKey="";
		this.lightOpt=0;
	};

	Model.prototype.modelActive = function(event){
		$(this.getElementByXid("hotKey")).focus();
	};

	Model.prototype.modelLoad = function(event){
		$(this.getElementByXid("hotKey")).focus();
	};

	Model.prototype.windowReceiver1Receive = function(event){
	
	};

	Model.prototype.button2Click = function(event){
		this.comp('windowReceiver1').windowEnsure();
	};

	Model.prototype.button1Click = function(event){
		this.execute();
	};
	Model.prototype.execute=function(event){
		this.hotKey=$(this.getElementByXid("hotKey")).val();
		this.getParent().andonTittle.set('确定需要报告的暗灯');
		$(this.getParent().getElementByXid('mainCon')).hide();
		$(this.getParent().getElementByXid('andonTit')).show();
		if(this.hotKey=="3"){
			var url="$UI/wms_client_v8/light/lightmenu.w";
			this.comp('windowDialog1').open({
                src: url
            });
		}else if(this.hotKey=="1"||this.hotKey=='2'||this.hotKey=='4'){
			if(this.hotKey=="1"){
				this.hotKey='P';
			}else if(this.hotKey=="2"){
				this.hotKey='I';
			}else{
				this.hotKey='E';
			}
			this.comp('windowReceiver1').windowEnsure(this.hotKey);
		};
	};
	Model.prototype.windowDialog1Receive = function(event){
			var data=event.data;
		if(typeof(data)!= "undefined"){
			 this.comp('windowReceiver1').windowEnsure(data);
		}
	};

	Model.prototype.modelParamsReceive = function(event){
		this.lightOpt=event.params.lightOpt;
		this.comp('hotKey').clear();
		if(this.lightOpt==1){
			$("#e").html("4-停止盘点");
		}else if(this.lightOpt==2){
			$("#e").html("4—停止处理掉落商品");
		}
	};

	Model.prototype.hotKeyKeydown = function(event){
		if(event.keyCode=='13'){
			this.execute();
		}
	};

	return Model;
});