define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var api = require("$UI/truk/js/api");
	
	var Model = function(){
		this.callParent();
		this.slotInfo=[];
	};

	Model.prototype.modelLoad = function(event){
		this.slotInfo=[];
		var fun=function(me){
			return function(data){
				for(var i=0;i<data.length;i++){
					if(data[i].numPosition==data[i].numPositionScanned){
						me.slotInfo.push(data[i]);
					}
				}
				var data=me.comp("slotInfo");
				var test=[{"rebatchSlotName":"Slot1","id":"2312312"}]
				var options = {
		            defaultValues :  me.slotInfo
				}; 
				data.clear();
				data.newData(options);
				$(me.getElementByXid("list3")).show();
			}
		}
		api.mushinyAjax({
			url:api.getFullSlot,
			success:fun(this),
		})
	};

	Model.prototype.button1Click = function(event){
		var requestId=event.bindingContext.$object.val('id');
		var fun=function(me){
			return function(data){
				$(me.getParent().getElementByXid("success")).css("text-align", "center");
				$(me.getParent().getElementByXid("success")).html("换车成功!");
				$(me.getParent().getElementByXid("div2")).show();
				$(me.getParent().getElementByXid("div1")).hide();
				
				me.comp('windowReceiver1').windowEnsure();
			}
		}
		api.mushinyAjax({
			url:api.confirmRebatch.replace(/{requestId}/,requestId),
			type : "POST",	
			success:fun(this),
		})
	};

	Model.prototype.button2Click = function(event){
		
		this.comp('windowReceiver1').windowEnsure();
	};

	return Model;
});