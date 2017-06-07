define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var api = require("$UI/wms_client_v8/js/api");
	var hotKey = require("$UI/wms_client_v8/js/hotKey");
	var Model = function() {
		this.callParent();
		this.welTittle = justep.Bind.observable('');
		this.location = justep.Bind.observable('');
		this.tittle = justep.Bind.observable('');
		this.andonTittle = justep.Bind.observable('');
		this.step = 1;//步骤
		this.skuCount = 0;//商品扫描数量
		this.num = 0;//货位总商品数量
		this.problemType = '';//问题类型
		this.gunErrorMsg = '';//扫描枪错误提报成功信息
		this.light = '';//andon成功提示信息
		this.type = 1;//
		this.status = 1;//标识是否已扫描完货位后触发安灯
		this.locationNo = 0;//扫描的货位
		this.nearLocationNo = 0;//临近货位
		this.problemId = '';//问题类型ID
		this.amount = 0;//数据库中货位的商品总数量
		this.stocktakingId = '';// 盘点任务ID
		this.state = "";// 货位状态OK或NG
		this.stocktakingOrderId = "";
		this.currentProfit = justep.Bind.observable('white'); //货位颜色
		this.total = justep.Bind.observable(''); //货位总商品数量
		this.skuNum = justep.Bind.observable('');//商品扫描数量
		this.proType = justep.Bind.observable(''); //商品类型
		this.proId = justep.Bind.observable('');//skuNo
		this.proDes = justep.Bind.observable('');//商品名称
		this.round = '';//第几轮盘点
		this.iptStatus = 1;//锁定输入框标识
		this.storageLocationId = '';
		this.itemNo = '';//扫描的商品编号
		this.sku = '';//所有该货位扫描的商品信息
		this.itemDataId = "";
		this.problemName = "";//问题名称
		this.anDonData = "";//提报暗灯的信息
		this.stataion = ""//工作站名称
	};

	//接收参数
	Model.prototype.modelParamsReceive = function(event) {
		this.stocktakingId = event.params.stocktakingId;
		this.welTittle.set('');
		this.welTittle.set(event.params.welTittle);
		this.round = event.params.round;
		this.roundState = event.params.state;
		this.station = event.params.station;
		this.initial();
	};

	//初始化加载货位
	Model.prototype.initial = function(event) {
		var fun = function(me) {
			return function(data) {
				me.tittle.set('扫描货位');
				if (data.length != 0) {
					me.location.set(data[0].locationName);
					if (typeof (data[0].color) == "undefined") {
						me.currentProfit.set("white");
					} else {
						me.currentProfit.set(data[0].color);
					}
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
					me.sku = new Array();
					me.step = 1;
					$(me.getElementByXid('input1')).focus();
					me.comp('inputNum').clear();
					me.skuCount = 0;
					me.num = 0;
					me.problemType = '';
					me.type = 1;
					me.status = 1;
					me.locationName = "";
					me.iptStatus = 1;
					me.itemDataId = "";
					$(me.getElementByXid('button1')).hide();
					$(me.getElementByXid('button2')).show();
				} else {
					$(me.getElementByXid('successMsg')).html('已盘点到盘点路径的最后一个货位!<br/>是否继续重新盘点!');
					$(me.getElementByXid('successCon')).show();
					$(me.getElementByXid('locationACon')).hide();
					$(me.getElementByXid('locationBCon')).hide();
					$(me.getElementByXid('inputNumCon')).hide();
					$(me.getElementByXid('button1')).hide();
					$(me.getElementByXid('button2')).show();
					$(me.getElementByXid('buttonCon')).show();
				}
				me.total.set('0');
				me.skuNum.set('0');
			};
		};
		//获取货位
		var ajax = {
			type : 'get',
			url : api.getStocktakingLocation,
			data : {
				stocktakingId : this.stocktakingId,
				times : this.round,
			},
			success : fun(this),
			error : this.error(this)
		};
		api.mushinyAjax(ajax);
	};

	Model.prototype.input1Keydown = function(event) {
		if (event.keyCode == '13') {
			$(this.getElementByXid('errorCon')).hide();
			$(this.getElementByXid('lightCon')).hide();
			$(this.getElementByXid('successCon')).hide();
			if (this.step != 3) {
				this.locationNo = $(this.getElementByXid('input1')).val().trim();
			}
			if (this.problemType !== "") {
				this.anDon();
				var fun = function(me) {
					return function(data) {
						me.storageLocationId = data.id;
						me.anDonData = {
							storageLocationId : me.storageLocationId,
							state : "undisposed",
							activateBy : sessionStorage["workingName"],
							clientId : sessionStorage["clientId"],
							problemName : ""
						};
						me.search();
					};
				};
				if (this.type == 1) {
					var ajax = {
						type : "get",
						url : api.storageLocations,
						data : "name=" + this.locationNo,
						success : fun(this),
						error : this.error(this),
					};
					api.mushinyAjax(ajax);
				}
			} else {
				$(this.getElementByXid('errorCon')).hide();
				if (this.locationNo != "") {
					if (this.step == 1) {
						if (this.locationNo == this.location.get()) {
							$(this.getElementByXid('button1')).show();
							$(this.getElementByXid('button2')).hide();
							this.stepTwo();
						} else {
							var html = "货位扫描错误:<br/><span class='num'>" + this.locationNo + "</span>";
							$(this.getElementByXid('errorMsg')).html(html);
							$(this.getElementByXid('errorCon')).show();
						}
					} else if (this.step == 2) {
						this.itemNo = $(this.getElementByXid('input1')).val().trim();
						var fun = function(me) {
							return function(data) {
								$(me.getElementByXid('successCon')).hide();
								me.tittle.set('请输入数量');
								me.proId.set(data.itemNo);
								me.proDes.set(data.name);
								me.proType.set(data.itemUnit.name);
								me.itemDataId = data.id;
								$(me.getElementByXid('inputNumCon')).show();
								$(me.getElementByXid('proDesCon')).show();
								$(me.getElementByXid('inputNum')).focus();
								me.step = 3;
								me.iptStatus = 2;
							};
						};
						api.mushinyAjax({
							type : 'get',
							url : api.checkSku,
							data : {
								storageLocationId : this.storageLocationId,
								itemNo : this.itemNo
							},
							success : fun(this),
							error : this.error(this)
						});
					}
				} else {
					if (this.step == 1) {
						$(this.getElementByXid('errorMsg')).html('请扫描货位!');
					} else if (this.step == 2) {
						$(this.getElementByXid('errorMsg')).html('请扫描商品!');
					}
					$(this.getElementByXid('errorCon')).show();
				}
			}
		} else if (event.keyCode == '65') {
			var url = require.toUrl('$UI/wms_client_v8/light/ICQALightMenu.w');
			this.comp('windowDialog1').open({
				src : url,
				params : {
					lightOpt : 1,
				}
			});
		}
	};

	Model.prototype.search = function(event) {
		var fun = function(me) {
			return function(data) {
				if (data.length != 0) {
					me.problemId = data[0].id;
					me.anDonData.anDonMasterTypeId = me.problemId;
					me.create();
				} else {
					var html = "货位扫描错误:<br/><span class='num'>" + me.locationNo + "</span>";
					$(me.getElementByXid('errorMsg')).html(html);
					$(me.getElementByXid('errorCon')).show();
				}
			};
		};
		var ajax = {
			type : "get",
			url : api.andonMasterTypes,
			data : "search=name==" + hotKey.aodom[this.problemType],
			success : fun(this),
			error : this.error(this)
		};
		api.mushinyAjax(ajax);
	};
	Model.prototype.create = function(event) {
		var fun = function(me) {
			return function(data) {
				$(me.getElementByXid('mainCon')).show();
				$(me.getElementByXid('gunCon')).hide();
				$(me.getElementByXid('andonTit')).hide();
				if (me.problemType == "P") {
					if (me.step == 1) {
						$(me.getElementByXid('button1')).show();
						$(me.getElementByXid('button2')).hide();
						me.stepTwo();
					}
					me.iptStatus = 1;
					$(me.getElementByXid('input1')).focus();
				} else {
					if (me.status == 1) {
						me.iptStatus = 1;
						$(me.getElementByXid('input1')).focus();
					} else if (me.status == 2) {
						me.iptStatus = 2;
						$(me.getElementByXid('inputNum')).focus();
					}
					if (me.type == 1) {
						$(me.getElementByXid('lightMsg')).html(me.light);
					} else if (me.type == 2) {
						$(me.getElementByXid('lightMsg')).html("已成功标记<span class='num1'>" + me.problemName + "</span>号扫描枪" + me.gunErrorMsg);
					}
					$(me.getElementByXid('lightCon')).show();
					me.type = 1;
					me.problemType = "";
				}
			}
		};
		var ajax = {
			type : "post",
			url : api.andonMasters,
			data : JSON.stringify(this.anDonData),
			success : fun(this)
		};
		api.mushinyAjax(ajax);
	};

	Model.prototype.inputNumKeydown = function(event) {
		$(this.getElementByXid('errorCon')).hide();
		$(this.getElementByXid('lightCon')).hide();
		var skuNum = parseInt($(this.getElementByXid('inputNum')).val());
		var flag = 0;
		if (this.type == 1 && event.keyCode == '13' && !isNaN(skuNum)) {
			if (this.step == 4) {

				for (var i = 0; i < this.sku.length; i++) {
					if (this.sku[i].skuNo == this.itemNo) {
						this.sku[i].amount += skuNum;
						flag = 1;
						break;
					} else {
						flag = 0
					}
				}
				if (flag == 0) {
					this.sku.push({
						"skuNo" : this.itemNo,
						"amount" : skuNum,
						"storageLocationId" : this.storageLocationId, // 原容器id
						"destination" : this.locationNo, // 目的容器名称
						"itemDataId" : this.itemDataId,
						"source" : this.locationNo,
						"itemDataNo" : this.itemNo
					});
					this.skuCount += 1;
				}

				this.num += skuNum;
				this.stepTwo();
			}
		} else if (event.keyCode == '65') {
			this.status = 2;
			var url = require.toUrl('$UI/wms_client_v8/light/ICQALightMenu.w');
			this.comp('windowDialog1').open({
				src : url,
				params : {
					lightOpt : "1",
				}
			});

		}

	};

	Model.prototype.inputGunKeydown = function(event) {
		if (this.type == 2 && event.keyCode == '13') {
			this.problemName = parseInt($(this.getElementByXid('inputGun')).val());
			if (!isNaN(this.locationNo)) {
				this.anDonData = {
					state : "undisposed",
					activateBy : sessionStorage["workingName"],
					clientId : sessionStorage["clientId"],
					problemName : ""
				};
				this.search();
			}
		}
	};

	Model.prototype.stepTwo = function(event) {
		this.comp('inputNum').clear();
		$(this.getElementByXid('locationACon')).hide();
		$(this.getElementByXid('locationBCon')).show();
		$(this.getElementByXid('lightCon')).hide();
		$(this.getElementByXid('errorCon')).hide();
		$(this.getElementByXid('successCon')).hide();
		$(this.getElementByXid('inputNumCon')).hide();
		$(this.getElementByXid('proDesCon')).hide();
		$(this.getElementByXid('input1')).focus();
		this.tittle.set('请将商品从货位拿出逐一扫描');
		if (this.step == 3) {
			this.skuNum.set(this.skuCount);
			this.total.set(this.num);
		}
		this.step = 2;
		this.iptStatus = 1;
		this.problemType = '';
	};

	Model.prototype.anDon = function(event) {
		this.nearLocationNo = $(this.getElementByXid('input1')).val().trim();
		var strLength = this.nearLocationNo.length;
		switch (this.problemType) {
		case "R11":
			this.locationNo = this.nearLocationNo.substring(0, strLength - 3) + String.fromCharCode(this.nearLocationNo.substring(strLength - 3, strLength - 2).charCodeAt() - 1)
					+ this.nearLocationNo.substring(strLength - 2, strLength);
			this.light = "已成功标记货位：<br/><span class='num'>" + this.locationNo + "</span>货位无法扫描";
			break;
		case "R12":
			this.locationNo = this.nearLocationNo.substring(0, strLength - 3) + String.fromCharCode(this.nearLocationNo.substring(strLength - 3, strLength - 2).charCodeAt() + 1)
					+ this.nearLocationNo.substring(strLength - 2, strLength);
			this.light = "已成功标记货位：<br/><span class='num'>" + this.locationNo + "</span>货位无法扫描";
			break;
		case "R13":
			this.locationNo = this.nearLocationNo.substring(0, strLength - 2) + (Array(2).join(0) + (parseInt(this.nearLocationNo.substring(strLength - 2, strLength)) + 1)).slice(-2);
			this.light = "已成功标记货位：<br/><span class='num'>" + this.locationNo + "</span>货位无法扫描";
			break;
		case "R14":
			this.locationNo = this.nearLocationNo.subst4ring(0, strLength - 2) + (Array(2).join(0) + (parseInt(this.nearLocationNo.substring(strLength - 2, strLength)) - 1)).slice(-2);
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

	}, Model.prototype.windowDialog1Receive = function(event) {
		if (this.problemType == '') {
			this.problemType = event.data;
			switch (this.problemType) {
			case "P":
				if (this.step == 1) {
					this.light = "已成功标记货位：<br/><span class='num'>" + this.location.get() + "</span>货位无法扫描";
					this.anDonData = {
						storageLocationId : this.storageLocationId,
						state : "undisposed",
						activateBy : sessionStorage["workingName"],
						clientId : sessionStorage["clientId"],
						problemName : ""
					};
					this.search();
				} else {
					this.problemType = "";
				}
				break;
			case "I":
				if (this.round == 1) {
					var info = '';
					api.mushinyAjax({
						type : 'get',
						url : api.getStockInfo,
						data : {
							stocktakingId : this.stocktakingId,
							userName : sessionStorage['workingName'],
							times : this.round,
						},
						success : function(data) {
							;
							info = data;
						},
						error : this.error(this),
					});
					var url = "$UI/wms_client_v8/ICQA/ICQAMessage.w";
					this.comp('windowDialog2').open({
						src : url,
						params : info,
					});
				}
				this.problemType = "";
				break;
			case "E":
				var exitICQA = function(me) {
					if (me.round != 1) {
						$(me.getElementByXid('okCon')).show();
					} else {
						if (me.roundState == 'daily') {
							justep.Shell.showPage('dailyMain').done(function() {
								me.close();
							});
						} else if (me.roundState == 'system') {
							justep.Shell.showPage('systemMain').done(function() {
								me.close();
							});
						}
					}
				};
				api.mushinyAjax({
					url : api.exitICQA,
					data : {
						name : this.stataion
					},
					success : exitICQA(this),
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
				this.gunErrorMsg = "扫描商品/货位卡顿";

				break;
			case "R102":
				this.andonTittle.set('请输入问题扫描枪号码');
				this.gunErrorMsg = "扫描枪没有声音";
				break;
			case "R103":
				this.andonTittle.set('请输入问题扫描枪号码');
				this.gunErrorMsg = "扫描枪扫描光线问题";
				break;
			case "R104":
				this.andonTittle.set('请输入问题扫描枪号码');
				this.gunErrorMsg = "扫描枪出现乱码";
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
				this.comp('inputGun').clear();
				this.iptStatus = 3;
			}
		}
	};
	//退出
	Model.prototype.button1Click = function(event) {
		var exitICQA = function(me) {
			if (me.roundState == 'daily') {
				justep.Shell.showPage('dailyMain').done(function() {
					me.close();
				});
			} else if (me.roundState == 'system') {
				justep.Shell.showPage('systemMain').done(function() {
					me.close();
				});
			}
		};
		api.mushinyAjax({
			url : api.exitICQA,
			data : {
				name : this.stataion
			},
			success : exitICQA(this),
		});
	};
	
	//锁定输入框
	Model.prototype.panel1Click = function(event) {
		if (this.iptStatus == 1) {
			$(this.getElementByXid('input1')).focus().select();
		} else if (this.iptStatus == 2) {
			$(this.getElementByXid('inputNum')).focus().select();
		} else if (this.iptStatus == 3) {
			$(this.getElementByXid('inputGun')).focus().select();
		}
	};

	Model.prototype.panel1Keydown = function(event) {

	};

	Model.prototype.button2Click = function(event) {
		$(this.getElementByXid('okCon')).show();
		$(this.getElementByXid('lightCon')).hide();
		$(this.getElementByXid('errorCon')).hide();
		$(this.getElementByXid('successCon')).hide();
	};
	
	Model.prototype.btnOkClick = function(event) {
		$(this.getElementByXid('lightCon')).hide();
		$(this.getElementByXid('errorCon')).hide();
		$(this.getElementByXid('successCon')).hide();
		if (this.sku.length == 0) {
			this.sku.push({
				"storageLocationId" : this.storageLocationId
			});
		}
		var fun = function(me) {
			return function(data) {
				if (data) {
					me.state = "OK";
				} else {
					me.state = "NG";
				}
				me.ok();
			};
		};
		$(this.getElementByXid('okCon')).hide();
		$(this.getElementByXid('lightCon')).hide();
		if (parseInt(this.total.get()) == this.amount) {
			this.state = 'OK';
			this.ok();
		} else {
			api.mushinyAjax({
				type : 'get',
				url : api.checkCounts,
				data : {
					stocktakingOrderId : this.stocktakingOrderId,
					quantity : this.total.get()
				},
				success : fun(this),
				error : this.error(this)
			});
		}

	};
	Model.prototype.ok = function(event) {
		var fun = function(me) {
			return function(data) {
				if (me.round != 1 && me.state == 'OK') {
					//当二、三、四轮成功时进行盘盈盘亏
					api.mushinyAjax({
						type : 'post',
						dataType : "text",
						url : api.overageOrLoss,
						data : JSON.stringify(me.sku),
						success : function(data) {
							me.initial();
						},
						error : function(data) {

						}
					});
				} else {
					me.initial();
				}
			};
		};
		var update = {
			type : 'put',
			url : api.updateStocktakingOrders,
			data : JSON.stringify({
				id : this.stocktakingOrderId,
				operator : sessionStorage['workingName'],
				state : this.state,
				times : this.round
			}),
			success : function(data) {
				api.mushinyAjax(create);
			},
			error : this.error(this)
		};
		var create = {
			type : 'post',
			url : api.saveStocktakingRecords,
			data : JSON.stringify({
				locationName : this.locationNo,
				countedQuantity : this.num,
				stocktakingOrderId : this.stocktakingOrderId,
				state : this.state,
				times : this.round
			}),
			success : fun(this),
			error : this.error(this)
		};
		api.mushinyAjax(update);
	};

	Model.prototype.btnCancelClick = function(event) {
		$(this.getElementByXid('okCon')).hide();
	};

	Model.prototype.error = function(me) {
		return function(data) {
			var html = "";
			if (typeof (data.responseJSON.key) != "undefined") {
				if (data.responseJSON.key == 'EX_INFORMATION_OBJECT_ERROR') {
					html = me.itemNo + "商品扫描错误,请重新扫描!";
				} else if (data.responseJSON.key == 'EX_OBJECT_NOT_FOUND') {
					html = "数据没找到!";

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
	//退出
	Model.prototype.button3Click = function(event) {
		var exitICQA = function(me) {
			if (me.roundState == 'daily') {
				justep.Shell.showPage('dailyMain').done(function() {
					me.close();
				});
			} else if (me.roundState == 'system') {
				justep.Shell.showPage('systemMain').done(function() {
					me.close();
				});
			}
		};
		api.mushinyAjax({
			url : api.exitICQA,
			data : {
				name : this.stataion
			},
			success : exitICQA(this),
		});
	};
	//退出
	Model.prototype.button4Click = function(event) {
		var exitICQA = function(me) {
			justep.Shell.showPage('login3').done(function() {
				me.close();
			});
		};
		api.mushinyAjax({
			url : api.exitICQA,
			data : {
				name : this.stataion
			},
			success : exitICQA(this),
		});
	};
	return Model;
});