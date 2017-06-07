define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var api = require("$UI/wms_client_v8/js/api");

	var Model = function() {
		this.callParent();
		this.prvContainer = justep.Bind.observable();
		this.headTittle = justep.Bind.observable();
		this.tittle = justep.Bind.observable();
		this.step = 1;
		this.slotNum = ''
		this.slot = justep.Bind.observable('');
		this.positionId = "";
		this.container = '';
		this.date = justep.Bind.observable('');
		this.containerName = justep.Bind.observable('');
		this.currentProfit = justep.Bind.observable('');
		this.fontColor = justep.Bind.observable('');
		this.fontSize = justep.Bind.observable('');
		this.exsdColors=justep.Bind.observable('');
		this.exsdColor="";
		this.exsdFontColor=justep.Bind.observable('');
		this.stationId = '';
		this.station = '';
		this.time='';
	};

	//进入初始化
	Model.prototype.modelParamsReceive = function(event) {
		this.station = event.params.station;
		this.stationId = event.params.stationId;
		var html = "站台-" + this.station;
		this.headTittle.set(html);
		$(this.getElementByXid('tittle')).html(html);
		$(this.getElementByXid('input1')).focus().select();
		this.tittle.set("扫描容器号码");
		$(this.getElementByXid("div1")).hide();
		$(this.getElementByXid("div2")).hide();
		$(this.getElementByXid("slotCon")).hide();
		this.prvContainer.set('无');
		this.step = 1;
	};
	

	Model.prototype.input1Keydown = function(event) {
		var html = '';
		//扫描小车
		if (this.step == 1) {
			if (event.keyCode == "13") {
				this.container = $(this.getElementByXid('input1')).val();
				$(this.getElementByXid("div1")).hide();
				$(this.getElementByXid("div2")).hide();
				var fun = function(me) {
					return function(data) {	
						me.exsdFontColor="white";
						$(me.getElementByXid("div1")).hide();
						$(me.getElementByXid("div2")).hide();
						me.positionId = data.id;
						me.containerName.set(me.container);
						me.date.set(data.deliveryTimes[0].substring(0,19).replace(/T/," "));
						me.time=(new Date(me.date.get())-new Date())/3600000;
			            if(me.time>12){
			              me.exsdColor = "#0066CD";
			            }else if((me.time<12&&me.time>6)||me.time==12){
			              me.exsdFontColor="black";
			              me.exsdColor="#66CEFF";
			            }else if((me.time<6&&me.time>3)||me.time==6){
			            	me.exsdFontColor="black";
			            	me.exsdColor="#FFFF01";
			            }else if((me.time<3&&me.time>1)||me.time==3){
			            	me.exsdColor="#FF9901";
			            }else if((me.time<1&&me.time>0)||me.time==1){
			            	me.exsdColor="#FF7C81";
			            }else if(me.time<0||me.time==0){
			            	me.exsdColor="#FF0000";
			            }
						me.exsdColors.set(me.exsdColor);
						me.fontSize.set((data.rebatchSlotName.length<9)?'2.5rem':'1.5rem');
						me.slot.set(data.rebatchSlotName);
						me.currentProfit.set('#3E70CA');
						if (me.currentProfit.get() == "white") {
							me.fontColor.set("black");
						}
						me.tittle.set("扫描solt号码");
						$(me.getElementByXid('slotCon')).show();
						me.step = 2;
					};
				};
				api.mushinyAjax({
					url : api.checkRebatchTote + "?containerName=" + this.container,
					success : fun(this),
					error : this.error(this)
				});
				this.comp('input1').clear();
			}
			//扫描slot号码
		} else if (this.step == 2) {
			if (event.keyCode == "13") {
				this.slotNum = $(this.getElementByXid('input1')).val();
				$(this.getElementByXid("div1")).hide();
				$(this.getElementByXid("div2")).hide();
				var fun = function(me) {
					return function(data) {
						api.mushinyAjax({
							url : api.getFullSlot,
							success : function(data) {
								var flag = 0;
								$(me.getElementByXid("slotCon")).hide();
								$(me.getElementByXid("div1")).hide();
								for (var i = 0; i < data.length; i++) {
									if (data[i].rebatchSlotName.toLowerCase()== me.slotNum.toLowerCase()) {
										if (data[i].numPosition == data[i].numPositionScanned) {
											flag = 1;
										}
									}
								}
								if (flag == 1) {
									html = "已成功放置容器：<br/><span style='font-weight:weight;text-decoration:underline'>" + me.containerName.get()
											+ "</span>至<span style='font-weight:weight;text-decoration:underline'>" + me.slot.get() + "</span>中"
											+ "<br/><br/><span style='font-weight:weight;text-decoration:underline'>" + me.slot.get()
											+ "</span>中所有容器已扫描完毕<br/>请在车上放置完成标识，并在<span style='font-weight:weight;text-decoration:underline'>" + me.slot.get() + "</span>中放置空车";
									$(me.getElementByXid("success")).css("text-align", "left");
								} else {
									html = "已成功放置容器：<br/><span style='font-weight:weight;text-decoration:underline'>" + me.containerName.get()
											+ "</span>至<span style='font-weight:weight;text-decoration:underline'>" + me.slot.get() + "</span>中";
									$(me.getElementByXid("success")).css("text-align", "center");
								};
								$(me.getElementByXid("success")).html(html);
								me.prvContainer.set(me.containerName.get());
								$(me.getElementByXid("div2")).show();
								me.tittle.set("扫描容器号码");
								me.step = 1;
							}
						});
					};
				};
				if (this.slotNum.toLowerCase() == this.slot.get().toLowerCase()) {
					var checkRebatchSlot = api.checkRebatchSlot.replace(/{positionId}/, this.positionId);
					api.mushinyAjax({
						type : "POST",
						url : checkRebatchSlot,
						data : JSON.stringify({
							id : this.positionId,
							rebatchSlotName : this.slot.get(),
							rebatchStationId : this.stationId
						}),
						success : fun(this),
						error : this.error(this),
					});
				} else {
					html = "Slot号码扫描错误<br/>" + this.slotNum;
					$(this.getElementByXid("div1")).show();
					$(this.getElementByXid("errorMsg")).html(html);
				}
				this.comp('input1').clear();
			}
		}
	};

	Model.prototype.content2Active = function(event) {
		$(this.getElementByXid("input1")).focus().select();
	};

	Model.prototype.button2Click = function(event) {
		var me = this;
		justep.Shell.showPage('login5').done(function() {
			me.close();
		});
	};

	Model.prototype.error = function(me) {
		return function(data) {
			var html = "";
			var message = eval("(" + data.responseText + ")");
			if (message != "") {
				html = message.message;
			}else {
				html = "服务器错误!";
			}
			$(me.getElementByXid("errorMsg")).html(html);
			$(me.getElementByXid("div1")).show();
		};
	};

	Model.prototype.panel1Click = function(event) {
		$(this.getElementByXid('input1')).focus().select();
	};

	Model.prototype.button3Click = function(event) {
		var url = require.toUrl('../Rebatch/changeContainer.w');
		$('#errorCon').hide();
		this.comp('windowDialog1').forceRefreshOnOpen = true;
		this.comp('windowDialog1').open({
			src : url,
		});
	};

	Model.prototype.windowDialog1Receive = function(event){
		$(this.getElementByXid('input1')).focus();
	};

	return Model;
});