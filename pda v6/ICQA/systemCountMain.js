define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var api = require("$UI/truk/js/api");

	var Model = function() {
		this.callParent();
		this.welcome = justep.Bind.observable('欢迎' + sessionStorage["working"] + '进入盘点系统');
		this.tittle = justep.Bind.observable('');
		this.opationOne = justep.Bind.observable('');
		this.opationTwo = justep.Bind.observable('');
		this.opationThree = justep.Bind.observable('');
		this.opationFour=justep.Bind.observable('');
		this.welTittle = '';
		this.pepole = 3;
		this.opation = '';
		this.round = '';
		this.stocktakingId = '';
		this.stocktakingData = '';
		this.state = '';
		this.orderBy = '';
	};

	Model.prototype.content2Active = function(event) {
		this.tittle.set('请选择系统盘点类型');
		this.welTittle = '';
	};

	Model.prototype.getDetails = function() {
		var fun = function(me) {
			return function(data) {
				me.comp("contents1").to("content3");
				me.tittle.set('请选择系统盘点任务');
				if (data.length != 0) {
					$(me.getElementByXid('list1')).show();
					$(me.getElementByXid('orderErrorCon')).hide();
					me.stocktakingData = data
					var data = me.comp('ordersData');
					var opt = {
						defaultValues : me.stocktakingData
					};
					
					data.clear();
					data.newData(opt);
				} else {
					$(me.getElementByXid('list1')).hide();
					$(me.getElementByXid('orderErrorMsg')).html('请先创建创建任务!');
					$(me.getElementByXid('orderErrorCon')).show();
				}
			}
		};
		var ajax = {
			type : "get",
			url : api.getStocktakingOrders,
			data : {
				state : this.state,
				times:this.round
			},
			success : fun(this),
		};
		api.mushinyAjaxICQA(ajax);
	}
	Model.prototype.button1Click = function(event) {
		this.welTittle = this.opationOne.get() + "-";
		this.round = 1;
		this.state = 'RAW';
		this.getDetails()
	};

	Model.prototype.content3Active = function(event) {

	};

	Model.prototype.btnClick = function(event) {

	};

	Model.prototype.content4Active = function(event) {
		this.tittle.set('请选择系统盘点模式');
	};

	Model.prototype.button5Click = function(event) {
		this.opation = 1;
		this.mode='system';
		if (this.round == 1) {
			var systemSuccess = function(me) {
				return function(data) {
					if (data) {
						me.toJump();
					} else {
						api.mushinyAjaxICQA({
							type : "get",
							url : api.checkPeoples,
							data : {
								stocktakingId : me.stocktakingId,
								times : me.round,
							},
							success : function(data){
								if (parseInt(data) < 3) {
									me.toJump()
								} else {
									$(me.getElementByXid('errorMsg')).html('此任务目前已经有3人正在盘点，无法直接分配盘点任务，请重新选择模式!');
									$(me.getElementByXid('errorCon')).show();
								}
							}
						})
					}
				}
			}
			api.mushinyAjaxICQA({
				type : "get",
				url : api.checkSystemUser,
				data : {
					stocktakingId : this.stocktakingId,
					times : this.round,
					userId : sessionStorage["userId"]
				},
				success : systemSuccess(this)
			})

			
		} else {
			this.checkAuthority();
		}
	};

	Model.prototype.button6Click = function(event) {
		this.opation = 2;
		this.mode='nearby';
		this.checkAuthority();
	};
	Model.prototype.toJump = function(event) {
		var value = {
			welTittle : this.welTittle,
			opation : this.opation,
			stocktakingId : this.stocktakingId,
			round : this.round,
			state : 'system',
			mode:this.mode,
			
		};
		justep.Shell.showPage("roundTwo", value);
	};
	Model.prototype.checkAuthority = function(event) {
		var fun = function(me) {
			return function(data) {

				me.toJump();
				
			}
		};
		if (this.round!=1) {
			api.mushinyAjaxICQA({
				type : "get",
				url : api.checkUsers,
				data : {
					userId : sessionStorage['userId'],
					stocktakingId : this.stocktakingId,
					times : this.round,
					
				},
				success : fun(this),
				errot:this.error(this)
			});
		} else {
			this.toJump();
		}
	}
	Model.prototype.modelParamsReceive = function(event) {

	};

	Model.prototype.button2Click = function(event) {
		this.welTittle = this.opationTwo.get() + "-";
		this.round = 2;
		this.state = 'NG';
		this.getDetails();

	};

	Model.prototype.button3Click = function(event) {
		this.welTittle = this.opationThree.get() + "-";
		this.round = 3;
		this.state = 'NG';
		this.getDetails();
	};
	
	Model.prototype.button4Click = function(event){
		this.welTittle = this.opationThree.get() + "-";
		this.round = 4;
		this.state = 'NG';
		this.getDetails();
	};
	Model.prototype.modelUnLoad = function(event) {

	};

	Model.prototype.modelLoad = function(event) {
		this.opationOne.set("系统1轮盘点");
		this.opationTwo.set("系统2轮盘点");
		this.opationThree.set("系统3轮盘点");
		this.opationFour.set("系统4轮盘点");
	};

	Model.prototype.stocktakingNameClick = function(event) {
		$(this.getElementByXid('errorCon')).hide();
		var row = event.bindingContext.$object;
		this.stocktakingId = row.val("id");
		this.tittle.set('请选择系统盘点模式');
		if (typeof event.delegateTarget.textContent == "string") {
			this.welTittle += event.delegateTarget.textContent.replace(/[ \r\n]/g, "");
		} else {
			this.welTittle += event.delegateTarget.innerText.replace(/[ \r\n]/g, "");
		}
		this.welTittle = this.welTittle;
		if(this.round==1){
			$(this.getElementByXid('button6')).show();
		}else{
			$(this.getElementByXid('button6')).hide();
		}
		this.comp("contents1").to("content4");

	};

	Model.prototype.li1Click = function(event) {

	};

	Model.prototype.content4Inactive = function(event) {
		this.comp("contents1").to("content2");
	};

	Model.prototype.modelActive = function(event) {
		this.comp("contents1").to("content2");
	};

	Model.prototype.quitClick = function(event){
		justep.Shell.showPage('login3')
	};
	
	Model.prototype.error = function(me) {
		return function(data) {

			var html = "";
			if (typeof (data.responseJSON.key) != "undefined") {
				if(data.responseJSON.key=='EX_INFORMATION_OBJECT_ERROR'){
					html=me.itemNo+"商品扫描错误,请重新扫描!"
				}else if(data.responseJSON.key=='EX_OBJECT_NOT_FOUND'){
					html = "数据没找到!";

				}if(data.responseJSON.key=='EX_USER_ENPTY_ERROR'){
					html = "此任务没有分配给你!";
				}else{
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