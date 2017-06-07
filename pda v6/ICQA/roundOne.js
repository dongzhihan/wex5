define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var api = require("$UI/truk/js/api");
	var hotKey = require("$UI/truk/js/hotKey");
	var Model = function() {
		this.callParent();
		this.welTittle = justep.Bind.observable(''); // 头部信息
		this.location = justep.Bind.observable(''); // 需要盘点的货位
		this.tittle = justep.Bind.observable(''); // 标签
		this.nextLocation = justep.Bind.observable(); // 下一个需要盘点的货位
		this.andonTittle = justep.Bind.observable('');
		this.step = 0; // 步骤
		this.count = 1; // 盘点数量错误次数
		this.num = ''; // 用户盘点数量
		this.problemType = ''; // 安灯类型
		this.light = ''; // 安灯提交成功提示信息
		this.type = 1;
		this.status = 1; // 标识是否已扫描完货位触发安灯
		this.locationNo = 0; // 扫描的货位
		this.nearLocationNo = 0; // 临近货位
		this.problemId = ''; // 安灯类型ID
		this.amount = 0; // 数据库中货位的商品总数量
		this.stocktakingId = ''; // 盘点任务ID
		this.state = ""; // 货位状态OK或NG
		this.stocktakingOrderId = ""; //
		this.currentProfit = justep.Bind.observable('white'); // 货位颜色
		this.orderIndex = ''; // 货位索引
		this.storageLocationId = ''; // 货位ID
		this.storageLocationUserId = ''; //
		this.opation = ''; // 分配模式1:系统分配 2:附近货位
		this.isSave = ''; // 是否需要保存用户标识
		this.mode = ''; // 标识是系统分配还是附近货位
		this.iptStatus = 1; // 锁定文本框标识
		this.round = 0; // 盘点轮数
	};

	// 初始化显示
	Model.prototype.modelParamsReceive = function(event) {
		this.stocktakingId = event.params.stocktakingId;
		this.welTittle.set('');
		this.welTittle.set(event.params.welTittle);
		this.opation = event.params.opation;
		this.mode = event.params.mode;
		this.round = event.params.round;
		var fun = function(me) {
			return function(data) {
				me.isSave = true;

				me.storageLocationUserId = data.id;
				if (me.opation == 1) {
					me.initial();
				} else {
					// 检查用户是否是以临近货位模式开始盘点
					api.mushinyAjaxICQA({
						type : "get",
						url : api.checkNearByUser,
						data : {
							userId : sessionStorage['userId'],
							stocktakingId : me.stocktakingId,
							times : me.round,
						},
						success : function(data) {
							;
							me.storageLocationUserId = data.id;
							me.initial();
						},
						error : me.error(me)
					});

				}
			};
		};
		// 检查用户是否已开始盘点货位
		api.mushinyAjaxICQA({
			type : "get",
			url : api.checkUsers,
			data : {
				userId : sessionStorage['userId'],
				stocktakingId : this.stocktakingId,
				times : this.round,
			},
			success : fun(this),
			error : this.error(this),
		});

	};

	// 数据初始化
	Model.prototype.initial = function(event) {
		var fun = function(me) {
			return function(data) {
				;
				me.tittle.set('扫描货位');
				var ds = 0
				if (data.length!= 0) {
					me.location.set(data[0].locationName);
					if (data.length == 2) {
						me.nextLocation.set(data[1].locationName);
					} else {
						me.nextLocation.set('无');
					}
					if (typeof (data[0].color) == "undefined") {
						me.currentProfit.set("white");
					} else {
						me.currentProfit.set(data[0].color);
					}
					me.orderIndex = data[0].bayIndex;
					me.amount = data[0].amount;
					me.stocktakingOrderId = data[0].id;
					me.storageLocationId = data[0].storageLocationId;
					$(me.getElementByXid('input1')).show();
					$(me.getElementByXid('locationACon')).show();
					$(me.getElementByXid('locationBCon')).hide();
					$(me.getElementByXid('inputNumCon')).hide();
					$(me.getElementByXid('lightCon')).hide();
					$(me.getElementByXid('errorCon')).hide();
					$(me.getElementByXid('mainCon')).show();
					$(me.getElementByXid('buttonCon')).hide();
					me.step = 2;
					$(me.getElementByXid('input1')).focus();
					me.comp('inputNum').clear();
					me.count = 1;
					me.num = '';
					me.problemType = '';
					me.type = 1;
					me.status = 1;
					me.iptStatus = 1;
				} else {
					// 当已最后一个货位盘点后将用户删除
					api.mushinyAjaxICQA({
						type : "put",
						url : api.userAction,
						data : JSON.stringify({
							id : me.storageLocationUserId,
							state : 'CLOSE'
						}),
						success : function(data) {
							$(me.getElementByXid('successMsg')).html('已盘点到盘点路径的最后一个货位!<br/>是否继续重新盘点!');
							$(me.getElementByXid('successCon')).show();
							me.nextLocation.set('无');
							$(me.getElementByXid('locationACon')).hide();
							$(me.getElementByXid('locationBCon')).hide();
							$(me.getElementByXid('inputNumCon')).hide();
							$(me.getElementByXid('buttonCon')).show();
						}
					});
				}
			};
		};
		var ajax = {
			type : 'get',
			url : api.getStocktakingLocation + "?mode=" + this.mode,
			data : {
				stocktakingId : this.stocktakingId,
				times : this.round,
				userId : sessionStorage['userId']
			},
			success : fun(this),
		};
		api.mushinyAjaxICQA(ajax);
	};

	// 货架扫描
	Model.prototype.input1Keydown = function(event) {
		if (event.keyCode == '13') {
			$(this.getElementByXid('errorCon')).hide();
			$(this.getElementByXid('successCon')).hide();
			$(this.getElementByXid('lightCon')).hide();
			this.locationNo = $(this.getElementByXid('input1')).val().trim();
			if (this.problemType !== "") { // 安灯事件
				this.anDon();
				var fun = function(me) {
					return function(data) {

						if (data.length != 0) {
							;
							me.search();
						} else {
							var html = "货位扫描错误:<br/><span class='num'>" + me.locationNo + "</span>";
							$(me.getElementByXid('errorMsg')).html(html);
							$(me.getElementByXid('errorCon')).show();
						}
					};
				};

				if (this.type == 1) {
					var ajax = {
						type : "get",
						url : api.storageLocations,
						data : "search=name==" + this.locationNo + ";warehouse.id==" + sessionStorage['warehouses'],
						success : fun(this),
					};
					api.mushinyAjax(ajax); // 检查货位是否存在
				}
			} else {
				if (this.locationNo != "") {
					if (this.step == 1) {
						this.checkLocataion();
					} else if (this.step == 2) {
						if (this.locationNo == this.location.get()) {
							if (!this.isSave) {
								this.saveUser();
							}
							this.stepTwo();
						} else {
							var html = "货位扫描错误:<br/><span class='num'>" + this.locationNo + "</span>";
							$(this.getElementByXid('errorMsg')).html(html);
							$(this.getElementByXid('errorCon')).show();
						}
					}
				} else {
					$(this.getElementByXid('errorMsg')).html('请扫描货位!');
					$(this.getElementByXid('errorCon')).show();
				}
			}

		} else if (event.keyCode == '65') {
			var url = require.toUrl('$UI/truk/light/ICQALightMenu.w');
			this.comp('windowDialog1').open({
				src : url,
				params : {
					lightOpt : 1,
				}
			});
		}
	};

	// 输入盘点数量初始化
	Model.prototype.stepTwo = function(event) {
		this.step = 3;
		$(this.getElementByXid('locationACon')).hide();
		$(this.getElementByXid('locationBCon')).show();
		$(this.getElementByXid('inputNumCon')).show();
		this.iptStatus = 2;
		$(this.getElementByXid('inputNum')).focus();
		$(this.getElementByXid('lightCon')).hide();
		$(this.getElementByXid('errorCon')).hide();
		$(this.getElementByXid('successCon')).hide();
		this.comp('inputNum').clear();
		this.tittle.set('输入数量');
		this.count = 1;
		this.problemType = '';

	};

	// 检查货位是否是该任务下的
	Model.prototype.checkLocataion = function(event) {
		var fun = function(me) {
			return function(data) {
				me.storageLocationId = data.storageLocationId;
				me.orderIndex = data.orderIndex;
				if (!me.isSave) {
					me.saveUser();
				}
				me.initial();
			};
		};
		api.mushinyAjaxICQA({
			type : "get",
			url : api.checkLocataion,
			data : {
				name : this.locationNo
			},
			success : fun(this)

		});
	};

	// 保存用户信息
	Model.prototype.saveUser = function(event) {
		if (this.round == 1) {
			var fun = function(me) {
				return function(data) {
					me.isSave = true
					me.storageLocationUserId = data.id;
				};
			};
			api.mushinyAjaxICQA({
				type : "post",
				url : api.userAction + '?mode=' + this.mode,
				data : JSON.stringify({
					stocktakingId : this.stocktakingId,
					times : this.round,
					userId : sessionStorage['userId'],
					storageLocationId : this.storageLocationId,
					orderIndex : this.orderIndex,
					state : 'OPEN'
				}),
				success : fun(this)
			});
		}
	};

	// 查找安灯类型的ID
	Model.prototype.search = function(event) {
		var fun = function(me) {
			return function(data) {
				;
				me.problemId = data[0].id;
				me.create();
			};
		};
		var ajax = {
			type : "get",
			url : api.andonMasterTypes,
			data : "search=name==" + hotKey.aodom[this.problemType],
			success : fun(this),
		};
		api.mushinyAjaxProblem(ajax);
	};

	// 保存安灯信息
	Model.prototype.create = function(event) {
		var fun = function(me) {
			return function(data) {
				$(me.getElementByXid('mainCon')).show();
				$(me.getElementByXid('gunCon')).hide();
				$(me.getElementByXid('andonTit')).hide();
				if (me.status == 1) {
					if (me.problemType == "P") {
						if (me.step == 2) {
							if (this.round == 1) {
								if (!me.isSave) {
									me.saveUser();
								}
							}
							me.stepTwo();
						}
					} else if (me.problemType == "R11" || me.problemType == "R12" || me.problemType == "R13" || me.problemType == "R14") {
						if (me.opation == 2) {
							if (me.step == 1) {
								me.checkLocataion();

							}
						}
					} else {
						me.iptStatus = 1;
						$(me.getElementByXid('input1')).focus();
					}
				} else if (me.status == 2) {
					me.iptStatus = 2;
					$(me.getElementByXid('inputNum')).focus();
				}
				if (me.type == 1) {
					$(me.getElementByXid('lightMsg')).html(me.light);
				} else if (me.type == 2) {
					$(me.getElementByXid('lightMsg')).html("已成功标记<span class='num1'>" + me.locationNo + "</span>号扫描枪" + me.light);
				}
				$(me.getElementByXid('lightCon')).show();
				me.type = 1;
				me.problemType = "";
			};
		};
		var ajax = {
			type : "post",
			url : api.andonMasters,
			data : JSON.stringify({
				andonMasterTypeId : this.problemId,
				locationNo : this.locationNo,
				activateBy : sessionStorage["workingName"],
				clientId : sessionStorage["clientId"]
			}),
			success : fun(this),
		};
		api.mushinyAjaxProblem(ajax);
	};

	// 检查盘点数量是否正确
	Model.prototype.inputNumKeydown = function(event) {
		this.num = parseInt($(this.getElementByXid('inputNum')).val());
		if (event.keyCode == '13' && !isNaN(this.num)) {
			$(this.getElementByXid('errorCon')).hide();
			$(this.getElementByXid('lightCon')).hide();
			if (this.step == 3) {
				if (this.num == this.amount) {
					this.state = 'OK';
					this.ok();
				} else {
					if (this.count == 1) {
						this.count++;
						this.comp("inputNum").clear();
						$(this.getElementByXid('errorMsg')).html("货位数量输入错误<br/>请重新检查清点并输入货位数量");
						$(this.getElementByXid('errorCon')).show();
					} else {
						this.state = 'NG';
						this.ok();
					}
				}
			}
		} else if (event.keyCode == '65') {
			this.status = 2;
			var url = require.toUrl('$UI/truk/light/ICQALightMenu.w');
			this.comp('windowDialog1').open({
				src : url,
				params : {
					lightOpt : "1",
				}
			});

		}

	};

	// 货位盘点完成操作
	Model.prototype.ok = function(event) {
		var fun = function(me) {
			return function(data) {
				var html = "已完成货位盘点:<br/><span class='num'>" + me.locationNo + "</span>";
				$(me.getElementByXid('successMsg')).html(html);
				$(me.getElementByXid('successCon')).show();
				me.initial();
			};
		};
		var update = {
			type : 'put',
			url : api.updateStocktakingOrders,
			data : JSON.stringify({
				id : this.stocktakingOrderId,
				operator : sessionStorage['workingName'],
				state : this.state,
				times : this.round,
			}),
			success : function() {
				api.mushinyAjaxICQA(create); // 保存盘点详情
			},
		};
		var create = {
			type : 'post',
			url : api.saveStocktakingRecords,
			data : JSON.stringify({
				locationName : this.locationNo,
				countedQuantity : this.num,
				stocktakingOrderId : this.stocktakingOrderId,
				state : this.state,
				times : this.round,
			}),
			success : fun(this)
		};
		api.mushinyAjaxICQA(update);// 更新OK或NG
	};

	// 扫描枪安灯事件
	Model.prototype.inputGunKeydown = function(event) {
		if (event.keyCode == '13') {
			this.locationNo = parseInt($(this.getElementByXid('inputGun')).val());
			if (!isNaN(this.locationNo)) {
				this.search();
			}
		}
	};

	// 安灯初始化
	Model.prototype.windowDialog1Receive = function(event) {
		if (this.problemType == '') {
			this.problemType = event.data;
			switch (this.problemType) {
			case "P": // 货位无法扫描
				if (this.step == 2) {
					this.light = "已成功标记货位：<br/><span class='num'>" + this.location.get() + "</span>货位无法扫描";
					this.search();

				} else {
					this.problemType = "";
				}
				break;
			case "I": // 用户盘点信息查询
				if (this.round == 1) {
					var info = '';
					api.mushinyAjaxICQA({
						type : 'get',
						url : api.getStockInfo,
						data : {
							stocktakingId : this.stocktakingId,
							userName : sessionStorage['workingName'],
							times : this.round
						},
						success : function(data) {
							;
							info = data;
						}
					});
					var url = "$UI/truk/ICQA/ICQAMessage.w";
					this.comp('windowDialog2').open({
						src : url,
						params : info,
					});
				}
				this.problemType = "";
				break;
			case "E": // 退出盘点
				var me = this;
				justep.Shell.showPage('dailyMain').done(function() {
					setTimeout(function(){
						me.close();
					});
				});
				break;
			case "R11":
				this.andonTittle.set('扫描问题货位正上方货位');
				break;
			case "R12":
				this.andonTittle.set('扫描问题货位正下方货位');
				break;
			case "R13":
				this.andonTittle.set('扫描问题货位正左方货位');
				break;
			case "R14":
				this.andonTittle.set('扫描问题货位正上方货位');
				break;
			case "R2":
				this.andonTittle.set('确定存在残品货位');
				this.light = "已成功标记货位：<br/><span class='num'>" + this.locationNo + "</span>货位存在残品";
				break;
			case "R3":
				this.andonTittle.set('确定存在条码无法扫描商品的货位');
				this.light = "已成功标记货位：<br/><span class='num'>" + this.locationNo + "</span>货位存在无法扫描商品";
				break;
			case "R9":
				this.andonTittle.set('扫描需要检查的货位');
				this.light = "已成功标记货位：<br/><span class='num'>" + this.locationNo + "</span>货位需要检查";
				break;
			case "R101":
				this.andonTittle.set('请输入问题扫描枪号码');
				this.light = "扫描商品/货位卡顿";

				break;
			case "R102":
				this.andonTittle.set('请输入问题扫描枪号码');
				this.light = "扫描枪没有声音";
				break;
			case "R103":
				this.andonTittle.set('请输入问题扫描枪号码');
				this.light = "扫描枪扫描光线问题";
				break;
			case "R104":
				this.andonTittle.set('请输入问题扫描枪号码');
				this.light = "扫描枪出现乱码";
				break;
			default:
				this.problemType = '';
				break;
			}
			if (this.problemType == '') {
				$(this.getElementByXid('mainCon')).show();
				$(this.getElementByXid('andonTit')).hide();
			} else if (this.problemType == 'R101' || this.problemType == 'R102' || this.problemType == 'R103' || this.problemType == 'R104') {
				this.type = 2;
				$(this.getElementByXid('gunCon')).show();
				$(this.getElementByXid('inputGun')).focus();
				this.iptStatus = 3;
			}
		}
	};

	// 安灯提交成功提示信息初始化
	Model.prototype.anDon = function(event) {
		this.nearLocationNo = $(this.getElementByXid('input1')).val().trim();
		var strLength = this.nearLocationNo.length;
		switch (this.problemType) {
		case "R11":
			this.locationNo = this.nearLocationNo.substring(0, strLength - 3) + String.fromCharCode(this.nearLocationNo.substring(strLength - 3, strLength - 2).charCodeAt() - 1)
					+ this.nearLocationNo.substring(strLength - 2, strLength); // 根据正上方货位获得正确货位
			this.light = "已成功标记货位：<br/><span class='num'>" + this.locationNo + "</span>货位无法扫描";
			break;
		case "R12":
			this.locationNo = this.nearLocationNo.substring(0, strLength - 3) + String.fromCharCode(this.nearLocationNo.substring(strLength - 3, strLength - 2).charCodeAt() + 1)
					+ this.nearLocationNo.substring(strLength - 2, strLength); // 根据正下方货位获得正确货位
			this.light = "已成功标记货位：<br/><span class='num'>" + this.locationNo + "</span>货位无法扫描";
			break;
		case "R13":
			// 根据正左方货位获得正确货位
			this.locationNo = this.nearLocationNo.substring(0, strLength - 2) + (Array(2).join(0) + (parseInt(this.nearLocationNo.substring(strLength - 2, strLength)) + 1)).slice(-2);
			this.light = "已成功标记货位：<br/><span class='num'>" + this.locationNo + "</span>货位无法扫描";
			break;
		case "R14":
			// 根据正右方货位获得正确货位
			this.locationNo = this.nearLocationNo.substring(0, strLength - 2) + (Array(2).join(0) + (parseInt(this.nearLocationNo.substring(strLength - 2, strLength)) - 1)).slice(-2);
			this.light = "已成功标记货位：<br/><span class='num'>" + this.locationNo + "</span>货位无法扫描";
			break;
		case "R2":
			this.light = "已成功标记货位：<br/><span class='num'>" + this.locationNo + "</span>货位存在残品";
			break;
		case "R3":
			this.light = "已成功标记货位：<br/><span class='num'>" + this.locationNo + "</span>货位存在无法扫描商品";
			break;
		case "R9":
			this.light = "已成功标记货位：<br/><span class='num'>" + this.locationNo + "</span>货位需要检查";
			break;
		default:
			break;
		}
	};

	// 盘点推出
	Model.prototype.button1Click = function(event) {
		var me = this;
		justep.Shell.showPage('dailyMain').done(function() {
			me.close();
		});
	};

	// 锁定输入框
	Model.prototype.panel1Click = function(event) {
		if (this.iptStatus == 1) {
			$(this.getElementByXid('input1')).focus().select();
		} else if (this.iptStatus == 2) {
			$(this.getElementByXid('inputNum')).focus().select();
		} else if (this.iptStatus == 3) {
			$(this.getElementByXid('inputGun')).focus().select();
		}
	};

	// 错误提示信息
	Model.prototype.error = function(me) {
		return function(data) {

			var html = "";
			if (typeof (data.responseJSON.key) != "undefined") {
				if (data.responseJSON.key == 'EX_INFORMATION_OBJECT_ERROR') {
					html = me.locationNo + "商品扫描错误,请重新扫描!"
				} else if (data.responseJSON.key == 'EX_OBJECT_NOT_FOUND') {
					html = "数据没找到!";

				} else if (data.responseJSON.key == 'EX_NEARBY_USER_ENPTY_ERROR') {
					me.tittle.set('扫描临近货位');
					me.step = 1;
					me.nextLocation.set('无');
					me.isSave = false;
				} else if (data.responseJSON.key == 'EX_USER_ENPTY_ERROR') {
					if (me.opation == 1) {
						me.initial();
					} else {
						me.tittle.set('扫描临近货位');
						me.step = 1;
						me.nextLocation.set('无');
					}
					me.isSave = false;
				} else {
					html = "服务器错误!";
				}
				if (data.responseJSON.key != 'EX_NEARBY_USER_ENPTY_ERROR' && data.responseJSON.key != 'EX_USER_ENPTY_ERROR') {
					$(me.getElementByXid('mainCon')).show();

					$(me.getElementByXid('errorMsg')).html(html);
					$(me.getElementByXid('errorCon')).show();
				}
			}

		};
	};
	Model.prototype.panel1Keydown = function(event) {

	};

	Model.prototype.windowReceiver1Receive = function(event) {

	};

	Model.prototype.button2Click = function(event){
		var me=this;
		justep.Shell.showPage('dailyMain').done(function() {
			me.close();
		});
	};

	Model.prototype.button3Click = function(event){
		var me=this;
		justep.Shell.showPage('login3').done(function() {
			me.close();
		});
	};

	return Model;
});