define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var api = require("$UI/wms_client_v8/js/api");

	var Model = function() {
		this.callParent();
		this.title = justep.Bind.observable();
		this.original = justep.Bind.observable();//原容器
		this.destinationName = justep.Bind.observable();//目的容器
		this.proType = justep.Bind.observable();//商品类型
		this.proId = justep.Bind.observable();//商品ID
		this.proDes = justep.Bind.observable();//商品名称
		this.type = 1;//是单一还是批量
		this.step = 1;//步骤
		this.opation = '';//模式
		this.count = 1;//是否是第一次
		this.totalAmount = 0;//原容器总数
		this.itemDataAmount = 0;//商品总数
		this.sourceId = "";//原容器id
		this.itemDataId = "";//商品id
		this.destinationId = "";//目的容器id
		this.amount = 0;//输入的数量
	};
	//初始化
	Model.prototype.initial = function(event) {
		this.title.set('请扫描原始容器');
		$(this.getElementByXid('input1')).focus();
		$(this.getElementByXid('successCon')).hide();
		$(this.getElementByXid("proCon")).hide();
		$(this.getElementByXid("amountTextCon")).hide();
		$(this.getElementByXid("sourceIn")).hide();
		$(this.getElementByXid("destination")).hide();
		$(this.getElementByXid("sourceOn")).hide();
		this.itemDataAmount = 0;
		this.sourceId = "";
		this.count = 1;
		this.itemDataId = "";
		this.destinationId = "";
		this.amount = 0;
		this.step=1;
	};
	
	Model.prototype.input1Keydown = function(event) {
		if (event.keyCode == "13") {
			var name = $(this.getElementByXid("input1")).val().trim();
			$(this.getElementByXid("successCon")).hide();
			$(this.getElementByXid("errorCon")).hide();
			if (name !== "") {
				//扫描原容器
				if (this.step == 1) {
					var getSource = function(me) {
						return function(data) {
							me.totalAmount = data.itemDataAmount;
							me.sourceId = data.id;
							me.original.set(data.name);
							me.title.set("请扫描商品条码");
							if (me.opation == 2 || me.opation == 4) {
								$(me.getElementByXid("sourceIn")).show();
							} else if (me.opation == 1 || me.opation == 3) {
								$(me.getElementByXid("sourceOn")).show();
							}
							me.step = 2;
						};
					};
					api.mushinyAjax({
						url : api.scanningSource,
						data : {
							sourceName : name
						},
						success : getSource(this),
						error : this.error(this)
					});
					//扫描商品
				} else if (this.step == 2) {
					var getGoods = function(me) {
						return function(data) {
							me.proType.set(data.itemData.itemUnit.name);
							me.proId.set(data.itemData.itemNo);
							me.proDes.set(data.itemData.name);
							me.itemDataAmount=data.amount;
							me.itemDataId=data.itemData.id;
							$(me.getElementByXid("proCon")).show();
							if (me.type == 2) {
								me.title.set("请输入数量");
								$(me.getElementByXid("amountTextCon")).show();
								$(me.getElementByXid("input2")).focus();
								me.step = 3;
								
							} else {
								me.amount = 1;
								if(me.count==1){
									me.title.set("请扫描目的容器条码");
									me.step = 4;
								}else{
									me.moving();
								}
							}
						};
					};
					api.mushinyAjax({
						url : api.scanningSku,
						data : {
							sourceId : this.sourceId,
							sku : name
						},
						success : getGoods(this),
						error : this.error(this)
					});
					//扫描目的容器
				} else if (this.step == 4) {
					var getDestination = function(me) {
						return function(data) {
							me.destinationId = data.id;
							me.destinationName.set(data.name);
							if(me.opation==2 || me.opation==3){
								$(me.getElementByXid("destination")).show();
							}
							me.moving();
						};
					};
					api.mushinyAjax({
						url : api.scanningDestination,
						data : {
							sourceId : this.sourceId,
							itemDataId : this.itemDataId,
							destinationName : name
						},
						success : getDestination(this),
						error : this.error(this)
					});
				}
				this.comp("input1").clear();
			}
		}
	};
	//输入数量
	Model.prototype.input2Keydown = function(event) {
		if (event.keyCode == "13") {
			$(this.getElementByXid("errorCon")).hide();
			this.amount = parseInt($(this.getElementByXid("input2")).val()
					.trim());
			if (this.amount != 0 && this.step == 3) {
				if (this.amount <= this.itemDataAmount) {
					if (this.count == 1) {
						this.title.set("请扫描目的容器");
						if(this.opation==2 || this.opation==3){
							$(this.getElementByXid("destination")).show();
						}
						this.step = 4;
						$(this.getElementByXid("amountTextCon")).hide();
						$(this.getElementByXid("input1")).focus();
					} else {
						this.moving();
					}
				}else{
					$(this.getElementByXid("errorMessage")).html("输入的数量大于商品总数量!商品还剩"+this.itemDataAmount+"件!");
					$(this.getElementByXid("errorCon")).show();
				}
			}
			this.comp("input2").clear();
		}
	};
	//进行移活
	Model.prototype.moving = function() {
		var moveSuccess = function(me) {
			var html = "已成功移<span class='yw'>" + me.amount
			+ "件</span>商品至</br><span class='yw'>"+ me.destinationName.get() + "</span>";
			if((me.totalAmount-me.amount)==0 || me.opation==4){
				me.initial();
			}else{
				if(me.opation==1){
					me.title.set("请扫描商品条码");
					me.step=2;
				}else if(me.opation==2){
					me.title.set("请扫描原始容器");
					me.step=1;
					me.count=2;
				}else if(me.opation==3){
					me.title.set("请扫描商品条码");
					me.step=2;
					me.count=2;
				}
				$(me.getElementByXid("proCon")).hide();
				$(me.getElementByXid("amountTextCon")).hide();
				$(me.getElementByXid("input1")).focus();
			}
			$(me.getElementByXid("successMsg")).html(html);
			$(me.getElementByXid("successCon")).show();
		};
		api.mushinyAjax({
			url : api.moving,
			type : "POST",
			dataType:"TEXT",
			data : JSON.stringify({
				amount : this.amount,
				destinationId : this.destinationId,
				itemDataId : this.itemDataId,
				sourceId : this.sourceId
			}),
			success : moveSuccess(this),
			error : this.error(this)
		});
	};
	//单一移货
	Model.prototype.button1Click = function(event) {
		this.type = 1;
		$(this.getElementByXid("button1")).css("background",
				"linear-gradient(#6083cb,#2e61ba)");
		$(this.getElementByXid("button2")).css("background", "gray");
		this.initial();
	};
	//批量移货
	Model.prototype.button2Click = function(event) {
		this.type = 2;
		$(this.getElementByXid("button2")).css("background",
				"linear-gradient(#6083cb,#2e61ba)");
		$(this.getElementByXid("button1")).css("background", "gray");
		this.initial();
	};
	//接收模式初始化
	Model.prototype.modelParamsReceive = function(event) {
		this.opation = event.params.opation;
		$(this.getElementByXid("button1")).css("background",
				"linear-gradient(#6083cb,#2e61ba)");
		$(this.getElementByXid("button2")).css("background", "gray");
		$(this.getElementByXid("button3")).css("background",
				"linear-gradient(#6083cb,#2e61ba)");
		this.initial();
	};
	//退出
	Model.prototype.button3Click = function(event) {
		justep.Shell.closePage();
	};
	//错误提示
	Model.prototype.error = function(me) {
		return function(data){
			var html = "";
			var message = eval("(" + data.responseText + ")");
			if (message != "") {
				html = message.message;
			}else {
				html = "服务器错误!";
			}
			console.log(html);
			console.log($(me.getElementByXid("errorMsg")).html(html))
			$(me.getElementByXid("errorCon")).show();
		};
	};
	//锁定输入框
	Model.prototype.panel1Click = function(event){
		if(this.step==3){
			$(this.getElementByXid("input2")).focus();
		}else{
			$(this.getElementByXid("input1")).focus();
		}
	};

	return Model;
});