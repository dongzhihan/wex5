define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var api = require("$UI/wms_client_v8/js/api");

	var Model = function() {
		this.callParent();
		this.welcome = justep.Bind.observable('欢迎' + sessionStorage["working"]
				+ '进入盘点系统');
		this.tittle = justep.Bind.observable('');
		this.opationOne = justep.Bind.observable(''); // 1轮盘点
		this.opationTwo = justep.Bind.observable(''); // 2轮盘点
		this.opationThree = justep.Bind.observable(''); // 3轮盘点
		this.opationFour = justep.Bind.observable(''); // 4轮盘点
		this.welTittle = '';
		this.round = ''; // 盘点轮数
		this.stocktakingId = ''; // 任务ID
		this.stocktakingData = ''; // 任务列表
		this.state = ''; // 状态
	};

	Model.prototype.content2Active = function(event) {
		this.tittle.set('请选择日常盘点类型');
		this.welTittle = '';
	};

	// 获取任务列表
	Model.prototype.getDetails = function() {
		var fun = function(me) {
			return function(data) {
				me.comp("contents1").to("content3");
				me.tittle.set('请选择日常盘点任务');
				if (data.length != 0) {
					$(me.getElementByXid('list1')).show();
					$(me.getElementByXid('orderErrorCon')).hide();
					me.stocktakingData = data;
					var ordersData = me.comp('ordersData');
					var opt = {
						defaultValues : me.stocktakingData
					};
					ordersData.clear();
					ordersData.newData(opt);
				} else {
					$(me.getElementByXid('list1')).hide();
					$(me.getElementByXid('orderErrorMsg')).html('请先创建创建任务!');
					$(me.getElementByXid('orderErrorCon')).show();
				}
			};
		};
		var ajax = {
			type : "get",
			url : api.getStocktakingOrders,
			data : {
				state : this.state,
				times : this.round
			},
			success : fun(this),
		};
		api.mushinyAjax(ajax);
	};

	// 1轮盘点
	Model.prototype.button1Click = function(event) {
		this.welTittle = this.opationOne.get() + "-";
		this.round = 1;
		this.state = 'RAW';
		this.getDetails();
	};

	Model.prototype.content3Active = function(event) {

	};

	Model.prototype.btnClick = function(event) {

	};

	Model.prototype.content4Active = function(event) {
		this.tittle.set('请扫描工作站条码');
	};

	// 跳转
	Model.prototype.toJump = function(event) {

	};

	// 检查用户是否有权限进行盘点
	Model.prototype.checkAuthority = function(event) {
		var stationName = $(this.getElementByXid("input1")).val();
		var fun = function(me) {
			return function(data) {
				api.mushinyAjax({
					url : api.checkStation,
					data : {
						name : stationName
					},
					success : function(data) {
							var value = {
								welTittle : me.welTittle,
							stocktakingId : me.stocktakingId,
							round : me.round,
							state : 'daily',
							station : data.name,
						};
						if (me.round == 1) {
							justep.Shell.showPage("roundOne", value);
						} else {
							justep.Shell.showPage("roundTwo", value);
						}
					}
				});
			};
		};
		api.mushinyAjax({
			type : "get",
			url : api.checkUsers,
			data : {
				userId : sessionStorage['userId'],
				stocktakingId : this.stocktakingId,
				times : this.round,
			},
			success : fun(this),
			error : this.error(this)
		});
	};

	// 2轮盘点
	Model.prototype.button2Click = function(event) {
		this.welTittle = this.opationTwo.get() + "-";
		this.round = 2;
		this.state = 'NG';
		this.getDetails();

	};

	// 3轮盘点
	Model.prototype.button3Click = function(event) {
		this.welTittle = this.opationThree.get() + "-";
		this.round = 3;
		this.state = 'NG';
		this.getDetails();

	};

	// 4轮盘点
	Model.prototype.button4Click = function(event) {
		this.welTittle = this.opationThree.get() + "-";
		this.round = 4;
		this.state = 'NG';
		this.getDetails();
	};
	Model.prototype.modelUnLoad = function(event) {

	};

	Model.prototype.modelLoad = function(event) {
		this.opationOne.set("日常1轮盘点");
		this.opationTwo.set("日常2轮盘点");
		this.opationThree.set("日常3轮盘点");
		this.opationFour.set("日常4轮盘点");
	};

	Model.prototype.stocktakingNameClick = function(event) {
		$(this.getElementByXid('errorCon')).hide();
		var row = event.bindingContext.$object;
		this.stocktakingId = row.val("id");
		this.tittle.set('请选择日常盘点模式');
		if (typeof event.delegateTarget.textContent == "string") {
			this.welTittle += event.delegateTarget.textContent.replace(
					/[ \r\n]/g, "");
		} else {
			this.welTittle += event.delegateTarget.innerText.replace(
					/[ \r\n]/g, "");
		}
		this.comp("contents1").to("content4");

	};

	Model.prototype.content4Inactive = function(event) {
		this.comp("contents1").to("content2");
	};

	Model.prototype.modelActive = function(event) {
		this.comp("contents1").to("content2");
	};

	Model.prototype.input1Keydown = function(event) {
		this.checkAuthority();
	};

	Model.prototype.quitClick = function(event) {
		var me = this;
		justep.Shell.showPage('login3').done(function() {
			me.close();
		});
	};

	Model.prototype.error = function(me) {
		return function(data) {
			var html = "";
			if (typeof (data.responseJSON.key) != "undefined") {
				if (data.responseJSON.key == 'EX_INFORMATION_OBJECT_ERROR') {
					html = me.itemNo + "商品扫描错误,请重新扫描!";
				} else if (data.responseJSON.key == 'EX_OBJECT_NOT_FOUND') {
					html = "数据没找到!";
				}
				if (data.responseJSON.key == 'EX_USER_ENPTY_ERROR') {
					html = "此任务没有分配给你!";
				} else {
					html = "服务器错误!";
				}
				$(me.getElementByXid('mainCon')).show();
				$(me.getElementByXid('errorMsg')).html(html);
				$(me.getElementByXid('errorCon')).show();
			}
		};
	};

	return Model;
});