define(function(require) {
	var $ = require("jquery");
	var Model = function() {
		this.callParent();
		this.itemName = "";
		this.itemAmount = 0;
		this.receiveAmount = 0;
		this.total = 0;
		 this.overtop = 0;
	};
	//parseInt(target.value);
	Model.prototype.button1Click = function(event) {
		var ipt1 = parseInt($(this.getElementByXid("input1")).val());
		var ipt2 = parseInt($(this.getElementByXid("input2")).val());
		var ipt3 = parseInt($(this.getElementByXid("input3")).val());
		var ipt4 = parseInt($(this.getElementByXid("input4")).val());
		// alert(ipt1);
		if (!isNaN(ipt1) && !isNaN(ipt2) && !isNaN(ipt3) && !isNaN(ipt4))
				this.total = ipt1 * ipt2 * ipt3 + ipt4;
				this.overtop = (this.receiveAmount + this.total) - this.itemAmount
				if (this.overtop > 0) {
					var url = require.toUrl('../inboundsh/receiveTip.w');
					this.comp('windowDialog1').forceRefreshOnOpen = true;
					this.comp('windowDialog1').open({
						src : url,
					});
				}else{
					this.comp('windowReceiversg').windowEnsure(this.total)
				}
			
	};

	Model.prototype.modelLoad = function(event) {
		$("#hotkey").focus().select();
		this.itemAmount=this.getParent().itemAmount;
		this.receiveAmount=this.getParent().receiveAmount;
	};

	Model.prototype.windowReceiver1Receive = function(event) {

	};

	Model.prototype.windowDialog1Receive = function(event) {
		var order = event.data;
		if (typeof (order) != "undefined") {
			this.comp('windowReceiversg').windowEnsure(order);
		}

	};

	Model.prototype.button2Click = function(event) {
		this.comp('windowReceiversg').windowEnsure();
	};

	Model.prototype.input4Keydown = function(event) {
		if (event.keyCode == "13") {
			var ipt1 = parseInt($(this.getElementByXid("input1")).val());
			var ipt2 = parseInt($(this.getElementByXid("input2")).val());
			var ipt3 = parseInt($(this.getElementByXid("input3")).val());
			var ipt4 = parseInt($(this.getElementByXid("input4")).val());
			// alert(ipt1);
			if (!isNaN(ipt1) && !isNaN(ipt2) && !isNaN(ipt3) && !isNaN(ipt4)) {
				this.total = ipt1 * ipt2 * ipt3 + ipt4;
				this.overtop = (this.receiveAmount + this.total) - this.itemAmount
				if (this.overtop > 0) {
					var url = require.toUrl('../inboundsh/receiveTip.w');
					this.comp('windowDialog1').forceRefreshOnOpen = true;
					this.comp('windowDialog1').open({
						src : url,
					});
				}
				$(this.getElementByXid("span21")).text(this.total);
			}
		}
	};

	Model.prototype.input2Keydown = function(event) {
		if (event.keyCode == 13) {
			$(this.getElementByXid("input3")).focus()
		}
	};
	Model.prototype.input1Keydown = function(event) {
		if (event.keyCode == 13) {
			$(this.getElementByXid("input2")).focus()
		}
	};

	Model.prototype.input3Keydown = function(event) {
		if (event.keyCode == 13) {
			$(this.getElementByXid("input4")).focus()
		}
	};

	Model.prototype.modelParamsReceive = function(event) {
	};

	return Model;
});
