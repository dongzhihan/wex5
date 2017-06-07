define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var api = require("$UI/wms_client_v8/js/api");

	var Model = function() {
		this.callParent();
		this.title = justep.Bind.observable('请扫描原始容器');
		this.proType = justep.Bind.observable();//商品类型
		this.proId = justep.Bind.observable();//商品编码
		this.original = justep.Bind.observable();//原容器名称
		this.proDes = justep.Bind.observable();//商品名称
		this.yearlab = justep.Bind.observable();
		this.monthlab = justep.Bind.observable();
		this.daylab = justep.Bind.observable();
		this.expiryDatelab = justep.Bind.observable();
		this.productionDate = justep.Bind.observable();//生产日
		this.expirationDate = justep.Bind.observable();//到期日
		this.expiryDateOut = justep.Bind.observable();//有效期
		this.opation = 0;//模式
		this.step = 1;//步骤
		this.dateOption = 1;//日期模式
		this.date = ''; //日期
		this.year = '';//年
		this.month = '';//月 
		this.day = '';//日
		this.expiryDate = '';//输入的有效期
		this.flag = 1;//日期步骤
		this.lotDate = "";//最后到期日
		this.lotId = "";
		this.lotUnit = "";//有效期类别
		this.amount = 0;//商品数量
		this.sourceId = "";//原容器ID
		this.itemDataId = "";//商品ID
		//日期正则
		this.regular = /((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/
	};
	
	//接收模式和输出化
	Model.prototype.modelParamsReceive = function(event) {
		this.opation = event.params.opation;
		this.initial();
	};
	//退出工具
	Model.prototype.button3Click = function(event) {
		justep.Shell.showPage('vaildMain');
	};
	//初始化
	Model.prototype.initial = function(event) {
		this.title.set('请扫描原始容器');
		$(this.getElementByXid('proDesCon')).hide();
		$(this.getElementByXid('dateCon')).hide();
		$(this.getElementByXid('opationCon')).hide();
		$(this.getElementByXid('productionDate')).hide();
		$(this.getElementByXid("expiryDateOut")).hide();
		$(this.getElementByXid('dateInCon')).hide();
		$(this.getElementByXid('okCon')).hide();
		$(this.getElementByXid('numInCon')).hide();
		$(this.getElementByXid('originalCon')).hide();
		$(this.getElementByXid('sourceCon')).hide();
		$(this.getElementByXid("input1")).focus();
		$(this.getElementByXid('dateCon')).css("background",
				"linear-gradient(#F18D59,#E26B1A)");
		this.date = '';
		$(this.getElementByXid('successCon')).hide();
		this.comp("yearIn").clear();
		this.comp("monthIn").clear();
		this.comp("dayIn").clear();
		this.comp("expiryDateIn").clear();
		$(this.getElementByXid('errorCon')).hide();
		this.step = 1;
		this.dateOption = 1;
		this.date = '';
		this.lotDate = "";
		this.itemDataId = "";
		this.lotId = "";
		this.lotUnit = "";
		this.lotType = "";
		
	};
	
	Model.prototype.input1Keydown = function(event) {
		if (event.keyCode == "13") {
			$(this.getElementByXid("errorCon")).hide();
			$(this.getElementByXid("successCon")).hide();
			var name = $(this.getElementByXid('input1')).val().trim();
			//扫描原容器
			if (this.step == 1) {
				var scanSourceSuccess = function(me) {
					return function(data) {
						me.title.set('请扫描商品条码');
						me.step = 2;
						me.sourceId = data.id;
						me.original.set(data.name);
						if (me.opation == 1) {
							$(me.getElementByXid("originalCon")).show();
						} else if (me.opation == 2) {
							$(me.getElementByXid('sourceCon')).show();
						}
					};
				};
				api.mushinyAjax({
					url : api.scanLotSource,
					data : {
						sourceName : name
					},
					success : scanSourceSuccess(this),
					error : this.error(this)
				});
				//扫描商品
			} else if (this.step == 2) {
				var getGoodsDetail = function(me) {
					return function(data) {
						me.title.set('请确认是否修改有效期模式');
						me.proId.set(data.itemData.itemNo);
						me.proDes.set(data.itemData.name);
						me.proType.set(data.itemData.itemUnit.name);
						me.itemDataId = data.itemData.id;
						me.lotId = data.lot.id;
						me.lotUnit = data.itemData.lotUnit;
						me.lotType = data.itemData.lotType;
						if(data.lot.useNotAfter!=""){
							me.expirationDate.set(data.lot.useNotAfter);
						}else{
							me.expirationDate.set('无');
						}
						$(me.getElementByXid("proDesCon")).show();
						$(me.getElementByXid("dateCon")).show();
						$(me.getElementByXid("opationCon")).show();
					};
				};
				api.mushinyAjax({
					url : api.scaningLotSku,
					data : {
						sourceId : this.sourceId,
						sku : name
					},
					success : getGoodsDetail(this),
					error : this.error(this)
				});

				getGoodsDetail(this);
			}
			this.comp("input1").clear();
		}
	};
	
	//确认修改有效期
	Model.prototype.button4Click = function(event) {
		this.step = 3;
		$(this.getElementByXid("dateCon")).hide();
		$(this.getElementByXid("opationCon")).hide();
		$(this.getElementByXid("dateInCon")).show();
		console.log(this.lotType.toLowerCase())
		if (this.lotType.toLowerCase() == "MANUFACTURE".toLowerCase()) {
			console.log(1)
			this.dateOption = 1;
			this.yearlab.set('生产年：');
			this.monthlab.set('生产月：');
			this.daylab.set('生产日：');
			if (this.lotUnit == "year") {
				this.expiryDatelab.set('有效期（年）：');
			} else if (this.lotUnit == "month") {
				this.expiryDatelab.set('有效期（月）：');
			} else if (this.lotUnit == "day") {
				this.expiryDatelab.set('有效期（日）：');
			}
			$(this.getElementByXid('expiryDateCon')).show();
			$(this.getElementByXid('dateInCon')).show();
			$(this.getElementByXid('yearIn')).focus();
		} else if (this.lotType.toLowerCase() == "EXPIRATION".toLowerCase()) {
			this.dateOption = 2;
			this.yearlab.set('到期年：');
			this.monthlab.set('到期月：');
			this.daylab.set('到期日：');
			$(this.getElementByXid('expiryDateCon')).hide();
			$(this.getElementByXid('dateInCon')).show();
			$(this.getElementByXid('yearIn')).focus();
		}

	};
	//取消修改有效期
	Model.prototype.button5Click = function(event){
		this.title.set('请扫描商品条码');
		$(this.getElementByXid("proDesCon")).hide();
		$(this.getElementByXid("dateCon")).hide();
		$(this.getElementByXid("opationCon")).hide();
	};
	
	//输入年份
	Model.prototype.yearInKeydown = function(event) {
		if (event.keyCode == "13") {
			this.flag = 1;
			this.dateInitial();

		}
	};
	
	//输入月份
	Model.prototype.monthInKeydown = function(event) {
		if (event.keyCode == "13") {
			this.flag = 2;
			this.dateInitial();
		}
	};
	//输入日期
	Model.prototype.dayInKeydown = function(event) {
		if (event.keyCode == "13") {
			this.flag = 3;
			if (this.dateOption == 1) {
				$(this.getElementByXid("expiryDateIn")).focus();
			} else if (this.dateOption == 2) {
				this.dateInitial();
			}

		}
	};
	//输入有效期
	Model.prototype.expiryDateInKeydown = function(event) {
		if (event.keyCode == '13') {
			this.flag = 4;
			this.dateInitial();
			this.dateShow();
		}
	};
	//确定有效日期
	Model.prototype.button6Click = function(event) {
		this.entering();
		$(this.getElementByXid('okCon')).hide();
	};
	//取消有效日期
	Model.prototype.button7Click = function(event) {
		$(this.getElementByXid('okCon')).hide();
		$(this.getElementByXid('dateCon')).hide();
		$(this.getElementByXid('dateInCon')).show();
		$(this.getElementByXid('yearIn')).focus();
		this.comp('yearIn').clear();
		this.comp('monthIn').clear();
		this.comp('dayIn').clear();
		this.comp("expiryDateIn").clear();
	};
	//进行修改
	Model.prototype.entering = function(event) {
		var success = function(me) {
			return function(data) {
				html = "已成功修改<span class='yw'>" + me.amount + "件</span>商品有效期";
				me.initial();
				//选择原容器固定时
				if (me.opation == 1) {
					me.title.set('请扫描商品');
					$(me.getElementByXid('originalCon')).show();
					me.step = 2;
				}
				
				$(me.getElementByXid('successMsg')).html(html);
				$(me.getElementByXid('successCon')).show();
			};
		};
		api.mushinyAjax({
			url : api.entering,
			type : "POST",
			data : JSON.stringify({
				itemDataId : this.itemDataId,
				lotId : this.lotId,
				sourceId : this.sourceId,
				useNotAfter : this.lotDate
			}),
			success : success(this),
			error : this.error(this)
		});

	};
	//显示修改后的有效期
	Model.prototype.dateShow = function(event) {
		if (this.dateOption == 1) {
			if (!isNaN((parseInt(this.year))) && !isNaN((parseInt(this.month)))
					&& !isNaN((parseInt(this.day)))
					&& !isNaN((parseInt(this.expiryDate)))) {
				this.expiryDate = $(this.getElementByXid('expiryDateIn')).val();
				this.date = this.year + "/" + this.month + "/" + this.day;
				this.productionDate.set(this.date);
				var date = new Date(this.date);
				if (this.regular.test(this.date)) {
					if (this.lotUnit == "year") {
						date.setFullYear(date.getFullYear()
								+ parseInt(this.expiryDate));
					} else if (this.lotUnit == "month") {
						date.setMonth(date.getMonth()
								+ parseInt(this.expiryDate));
					} else if (this.lotUnit == "day") {
						date.setDate(date.getDate()
								+ parseInt(this.expiryDate));
					}
					this.expirationDate.set(date.getFullYear() + '/'
							+ (date.getMonth() + 1) + '/' + date.getDate());
					this.lotDate = date.getFullYear()
							+ '-'
							+ (Array(2).join(0) + (parseInt((date.getMonth() + 1))))
									.slice(-2)
							+ '-'
							+ (Array(2).join(0) + (parseInt(date.getDate())))
									.slice(-2);
					this.expiryDateOut.set(this.expiryDate);
					$(this.getElementByXid('dateCon')).css("background",
							"linear-gradient(#6284cb,#3061b9)");
					$(this.getElementByXid('dateCon')).show();
					$(this.getElementByXid('dateInCon')).hide();
					$(this.getElementByXid('okCon')).show();
					$(this.getElementByXid('productionDate')).show();
					$(this.getElementByXid("expiryDateOut")).show();
				} else {
					this.comp('yearIn').clear();
					this.comp('monthIn').clear();
					this.comp('dayIn').clear();
					this.comp("expiryDateIn").clear();
					$(this.getElementByXid('yearIn')).focus();
					$(this.getElementByXid('errorMsg')).html("输入的日期无效，请重新核实!");
					$(this.getElementByXid('errorCon')).show();
				}
			}
		} else if (this.dateOption == 2) {
			if (!isNaN((parseInt(this.year))) && !isNaN((parseInt(this.month)))
					&& !isNaN((parseInt(this.day)))) {
				this.date = this.year + "/" + this.month + "/" + this.day;
				this.lotDate = this.year + '-'
						+ (Array(2).join(0) + (parseInt(this.month))).slice(-2)
						+ '-'
						+ (Array(2).join(0) + (parseInt(this.day))).slice(-2);
				var lot = new Date(this.date);
				var now = new Date();
				if (this.regular.test(this.date)) {
					if (lot < now) {
						this.comp('yearIn').clear();
						this.comp('monthIn').clear();
						this.comp('dayIn').clear();
						$(this.getElementByXid('errorMsg')).html(
								"到期日期小于当前日期，请重新核实!");
						$(this.getElementByXid('errorCon')).show();

					} else {
						$(this.getElementByXid("dateCon")).show();
						$(this.getElementByXid('dateCon')).css("background",
								"linear-gradient(#6284cb,#3061b9)");
						this.expirationDate.set(this.date);
						$(this.getElementByXid('okCon')).show();
						$(this.getElementByXid('dateInCon')).hide();
						$(this.getElementByXid('productionDate')).hide();
					}
				} else {
					this.comp('yearIn').clear();
					this.comp('monthIn').clear();
					this.comp('dayIn').clear();
					$(this.getElementByXid('yearIn')).focus();
					$(this.getElementByXid('errorMsg')).html("输入的日期无效，请重新核实!");
					$(this.getElementByXid('errorCon')).show();
				}
			}
		}
	};
	//输入的年月日判断
	Model.prototype.dateInitial = function(event) {
		var now = new Date();
		this.year = $(this.getElementByXid('yearIn')).val();
		this.month = $(this.getElementByXid('monthIn')).val();
		this.day = $(this.getElementByXid('dayIn')).val();
		this.expiryDate = $(this.getElementByXid('expiryDateIn')).val();
		$(this.getElementByXid('errorCon')).hide();
		var html = "";
		var ff = 0;//是否有输入
		if (this.flag == 1 && !isNaN(parseInt(this.year))) {
			ff = 1;
			if (this.dateOption == 1) {
				if (this.year > now.getFullYear()) {
					html = "生产月大于当前年，请重新核实!";
					$(this.getElementByXid('yearIn')).focus();
					this.comp('yearIn').clear();
				} else {
					this.flag = 2;
					$(this.getElementByXid('monthIn')).focus();
					this.dateShow();

				}
			} else {
				$(this.getElementByXid('monthIn')).focus();
				this.dateShow();
			}
		} else if (this.flag == 2 && !isNaN(parseInt(this.year))
				&& !isNaN(parseInt(this.month))) {
			ff = 1;
			if (this.dateOption == 1) {
				if (this.month > (now.getMonth() + 1)) {
					html = "生产月大于当前月，请重新核实!";
					$(this.getElementByXid('monthIn')).focus();
					this.comp('monthIn').clear();

				} else {
					this.flag = 3;
					$(this.getElementByXid('dayIn')).focus();
					this.dateShow();
				}
			} else {
				$(this.getElementByXid('dayIn')).focus();
				this.dateShow();
			}
		}

		else if (this.flag == 3 && !isNaN(parseInt(this.year))
				&& !isNaN(parseInt(this.month)) && !isNaN(parseInt(this.day))) {
			ff = 1;
			if (this.dateOption == 1) {
				if (this.day > now.getDate()) {
					html = "生产月日于当前日，请重新核实!";
					$(this.getElementByXid('dayIn')).focus();
					this.comp('dayIn').clear();
				} else {
					$(this.getElementByXid('expiryDateIn')).focus();
					this.title.set("请输入有效期");
					this.dateShow();
				}
			} else {
				this.dateShow();
			}
		} else {
			if (isNaN(parseInt(this.year)) && ff === 0) {
				html = "请输入生产年!";
				$(this.getElementByXid('yearIn')).focus();
			} else if (isNaN(parseInt(this.month)) && ff === 0) {
				html = "请输入生产月!";
				$(this.getElementByXid('monthIn')).focus();
			} else if ((isNaN(parseInt(this.day))) && ff === 0) {
				html = "请输入生产日!";
				$(this.getElementByXid('dayIn')).focus();
			} else if ((isNaN(parseInt(this.expiryDate)))
					&& this.dateOption === 1 && ff === 0) {
				html = "请输入有效期!";
				$(this.getElementByXid('expiryDateIn')).focus();
			}
		}
		if (html !== "") {
			$(this.getElementByXid('errorMsg')).html(html);
			$(this.getElementByXid('errorCon')).show();
		}
	};
	//错误提示
	Model.prototype.error = function(me) {
		return function(data) {
			var html = "";
			var message = eval("(" + data.responseText + ")");
			if (message != "") {
				html = message.message;
			} else {
				html = "服务器错误!";
			}
			console.log(html);
			console.log($(me.getElementByXid("errorMsg")).html(html))
			$(me.getElementByXid("errorCon")).show();
		};
	};
	
	//锁定输入框
	Model.prototype.panel1Click = function(event) {
		if (this.step == 1 || this.step == 2) {
			$(this.getElementByXid("input1")).focus();
		} else if (this.step == 4) {
			$(this.getElementByXid("numIn")).focus();
		}
	};

	return Model;
});