define(function(require) {
	var $ = require("jquery");
	var pick = require("$UI/truk/js/pickLang");
	var api = require("$UI/truk/js/api");
	var Model = function() {
		this.callParent();
	};
	this.comename = justep.Bind.observable("");
	this.comename.set("欢迎" + sessionStorage["working"] + "进入拣货系统");
	Model.prototype.button8Click = function(event) {
	};

	Model.prototype.modelLoad = function(event) {
		$(this.getElementByXid("div2")).hide()
		window.pickMessage = {

			// surplus:0,//单商品剩余数量
			pickCar : "", // 拣货车
			pickCarId : "", // unitload拣货车id
			BatchNo : "", // 批次号
			BatchId : "",
			// PickType:"",//拣货类型
			// storageLoction:"", //当前货位
			qty : 0,
			firstLocationName : "", // 第一个货位
			LocationId : "", // 货位ID
			itemId : "",
			lostQty : 0,
			pickQty : 0,
			// pickType:"",
			// text:"",

			pickT : "",
			// pickSur:0, //单商品拣货数量
			picks : [], // 当前拣货信息 //////////////////////>基本信息都可获取
			positionId : "",
			pickCarCount : 0,
			pickOriginalCar : null,
			pickOriginalCarId : null
		}
	};
	Model.prototype.button6Click = function(event) {
		this.comp("contents1").to("content3");
		$(this.getElementByXid("div4")).hide()

	};
	Model.prototype.input1Keydown = function(e) {
		// ///////////////////////////////////////锁定批次
		/*
		 * var self = this;
		 * justep.Shell.showPage("outbandscancarid").done(function() {
		 * self.close() }); return;
		 */
		// /////////////////////////////////
		var self = this;
		if (e.keyCode == "13") {
			var error = function(me) {
				return function(data) {
					var json = eval("(" + data.responseText + ")");
					$(me.getElementByXid("div4")).show().css("color", "#FFFFFF").css("background", "red").html("<span>" + json.message + "</span>");
					self.comp("input1").clear();
				};
			};

			var rest = function(data) {
				window.pickMessage.BatchNo = data.pickingOrderNumber;
				window.pickMessage.BatchId = data.id;
				window.pickMessage.pickOriginalCar = data.containerName;
				window.pickMessage.pickOriginalCarId = data.pickingUnitLoadId;
				var fun = function(data) {

					window.pickMessage.pickType = data.processPathName;
					window.pickMessage.firstLocationName = data.startLocationName;
					window.pickMessage.qty = data.amountTotal;
					window.pickMessage.lostQty = data.amountRemain;
					self.comp("input1").clear();
					setTimeout(function() {
						if (window.pickMessage.pickOriginalCar) {
							justep.Shell.showPage("outbandCarMessage")
						} else {
							justep.Shell.showPage("outbandscancarid")
						}
					}, 0);

				};
				// //////////////////
				var batchCheck = api.batchCheck.replace(/{orderId}/, window.pickMessage.BatchId);
				var opt = {
					type : "get",
					url : batchCheck,
					success : fun,
					error : error(self)
				};
				api.mushinyAjax(opt);

			};
			// /////////////////
			var data = {
				number : $(this.getElementByXid("input1")).val()
			}
			var opt = {
				data : data,
				type : "get",
				url : api.batch,
				success : rest,
				error : error(self)
			}
			api.mushinyAjax(opt);

		}
	};

	function success(me) {
		$(me.getElementByXid("titleBar1")).hide();
		$(me.getElementByXid("message")).show();
		var html = '<span class="spstyle3">已成功拣货完成批次：</span></br><span class="spstyle2">' + window.pickMessage.BatchNo + '</span></br><span class="spstyle3">请选择拣货模式继续拣货</span>';
		$(me.getElementByXid("message")).html(html);
		$(me.getElementByXid("message")).css("text-align", "center");
		$(me.getElementByXid("message")).css("background", "linear-gradient(#6FAB46,#71B048 )");
	}

	function hwsb1(me) {
		var html = '<span>拣货权限内没有相应工作，请联系组长或经理更改权限</span>';
		$(me.getElementByXid("div2")).html(html);
		// $(".waring1").html(html)
		$(me.getElementByXid("div2")).show();
		$(me.getElementByXid("div2")).css("background", "#FF0000");
		$(me.getElementByXid("div2")).css("text-align", "left");
		$(me.getElementByXid("div2")).css("color", "#FFFFFF");
	}

	function successbc(me) {
		$(me.getElementByXid("titleBar1")).hide();
		$(me.getElementByXid("message")).show();
		var html = '<span class="spstyle3">已成功报残</span><span class="spstyle2">1件</span><span class="spstyle3">商品</span></br><span class="spstyle3">已成功拣货完成批次：</span><span class="spstyle2">213456</span></br><span class="spstyle3">请选择拣货模式继续拣货</span>';
		$(me.getElementByXid("message")).html(html);
		$(me.getElementByXid("message")).css("text-align", "center");
		$(me.getElementByXid("message")).css("background", "linear-gradient(#6FAB46,#71B048 )");
	}

	function successds(me) {
		$(me.getElementByXid("titleBar1")).hide();
		$(me.getElementByXid("message")).show();
		var html = '<span class="spstyle3">已成功登记</span><span class="spstyle2">1件</span><span class="spstyle3">丢失商品</span></br><span class="spstyle3"> 已成功拣货完成批次：</span><span class="spstyle2">213456</span></br><span class="spstyle3">请选择拣货模式继续拣货</span>';
		$(me.getElementByXid("message")).html(html);
		$(me.getElementByXid("message")).css("text-align", "center");
		$(me.getElementByXid("message")).css("background", "linear-gradient(#6FAB46,#71B048 )");
	}
	Model.prototype.quitClick = function(event) {
		justep.Shell.showPage("login5")
	};
	Model.prototype.content3Active = function(event) {
		$(this.getElementByXid("input1").focus())
		$(this.getElementByXid("titleBar1")).show();
		$(this.getElementByXid("message")).hide();
	};
	Model.prototype.modelParamsReceive = function(event) {
		if (typeof (event) != "undefined") {
			if (event.params.type == 'normal') {
				this.comp("contents1").to("content2");
				success(this)

			}
		}

	};
	Model.prototype.content3Click = function(event) {
		$(this.getElementByXid("input1").focus())
	};
	Model.prototype.assignedClick = function(event) {
		var self = this;
		var rest = function(data) {
			window.pickMessage.BatchNo = data.pickingOrderNumber
			window.pickMessage.BatchId = data.id;
			window.pickMessage.pickOriginalCar = data.containerName
			window.pickMessage.pickT = "autoBatch"
			window.pickMessage.pickOriginalCarId = data.pickingUnitLoadId;
			var fun = function(data) {
				window.pickMessage.pickType = data.processPathName
				window.pickMessage.firstLocationName = data.startLocationName
				window.pickMessage.qty = data.amountTotal
				window.pickMessage.lostQty = data.amountRemain
				setTimeout(function() {
					if (window.pickMessage.pickOriginalCar) {
						justep.Shell.showPage("outbandCarMessage")
					} else {
						justep.Shell.showPage("outbandscancarid")
					}
				}, 0);
			}
			// //////////////////
			var batchCheck = api.batchCheck.replace(/{orderId}/, window.pickMessage.BatchId)
			var opt = {
				type : "get",
				url : batchCheck,
				success : fun
			}
			api.mushinyAjax(opt);
		}
		var assign = api.assign
		// /////////////////
		var error = function(data) {
			var json = eval("(" + data.responseText + ")")
			$(this.getElementByXid("div2")).show();
			$(this.getElementByXid("div2")).css("color", "#FFFFFF").css("background", "red").html("<span>" + json.message + "</span>");
		}.bind(this)
		var opt = {
			type : "get",
			url : api.assign,
			success : rest,
			error : error
		}
		api.mushinyAjax(opt);
	};
	Model.prototype.modelActive = function(event) {
		this.comp("contents1").to("content2");
		$(this.getElementByXid("div2")).hide();
		$(this.getElementByXid("input1").focus())
		window.pickMessage = {

			// surplus:0,//单商品剩余数量
			pickCar : "", // 拣货车
			pickCarId : "", // unitload拣货车id
			BatchNo : "", // 批次号
			BatchId : "",
			// PickType:"",//拣货类型
			// storageLoction:"", //当前货位
			qty : 0,
			firstLocationName : "", // 第一个货位
			LocationId : "", // 货位ID
			itemId : "",
			lostQty : 0,
			pickQty : 0,
			// pickType:"",
			// text:"",
			pickT : "",
			// pickSur:0, //单商品拣货数量
			picks : [], // 当前拣货信息 //////////////////////>基本信息都可获取
			positionId : "",
			pickCarCount : 0,
			pickOriginalCar : null,
			pickOriginalCarId : null
		}
	};
	return Model;
});