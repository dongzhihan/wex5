define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var api = require("$UI/truk/js/api");
	var hotKey = require("$UI/truk/js/hotKey");
	var Model = function() {
		this.callParent();
		this.welTittle = justep.Bind.observable('');
		this.location = justep.Bind.observable('');
		this.tittle = justep.Bind.observable('');
		this.andonTittle = justep.Bind.observable('');
		this.step = 1;
		this.skuCount = 1;
		this.num = 0;
		this.problemType = '';
		this.gunErrorMsg = '';
		this.light = '';
		this.type = 1;
		this.status = 1;
		this.locationNo = 0;
		this.nearLocationNo = 0;
		this.problemId = '';
		this.locationData = "";
		this.anDonTypesData = "";
		this.amount = 0;
		this.stocktakingId = '';
		this.state = "";
		this.stocktakingOrderId = "";
		this.currentProfit = justep.Bind.observable('white');
		this.total = justep.Bind.observable('');
		this.skuNum = justep.Bind.observable('');
		this.proType = justep.Bind.observable('');
		this.proId = justep.Bind.observable('');
		this.proDes = justep.Bind.observable('');
		this.round = '';
		this.iptStatus = 1;
		this.storageLocationId = '';
		this.opation = 0;
		this.isSave = '';
		this.mode = '';
		this.storageLocationUserId = '';
		this.itemNo = '';
		this.sku = '';
		this.itemDataId = ""
	};

	Model.prototype.modelParamsReceive = function(event) {
		this.stocktakingId = event.params.stocktakingId;
		this.welTittle.set('');
		this.welTittle.set(event.params.welTittle);
		this.round = event.params.round;
		this.roundState = event.params.state;
		this.opation = event.params.opation;
		this.mode = event.params.mode
		var fun = function(me) {
			return function(data) {
				me.isSave = data;

				me.storageLocationUserId = data.id;
				if (me.round == 1) {
					if (me.opation == 1) {
						me.initial();
					} else {
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
				} else {
					me.initial();
				}
			};
		};
		api.mushinyAjaxICQA({
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

	Model.prototype.initial = function(event) {
		var fun = function(me) {
			return function(data) {
				;
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
					me.step = 2;
					$(me.getElementByXid('input1')).focus();
					this.sku = new Array();
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
					if (me.round == 1) {
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
								$(me.getElementByXid('locationACon')).hide();
								$(me.getElementByXid('locationBCon')).hide();
								$(me.getElementByXid('inputNumCon')).hide();
								$(me.getElementByXid('button1')).hide();
								$(me.getElementByXid('button2')).show();
								$(me.getElementByXid('buttonCon')).show();
							}
						});
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
				}
				me.total.set('0');
				me.skuNum.set('0');
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
			error : this.error(this)
		};
		api.mushinyAjaxICQA(ajax);
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

						if (data.length != 0) {
							me.locationData = data;
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
					api.mushinyAjax(ajax);
					error: this.error(this)
				}

			} else {
				$(this.getElementByXid('errorCon')).hide();
				if (this.locationNo != "") {
					if (this.step == 1) {
						this.checkLocataion();
					} else if (this.step == 2) {
						if (this.locationNo == this.location.get()) {
							if (!this.isSave) {
								this.saveUser();
							}
							$(this.getElementByXid('button1')).show();
							$(this.getElementByXid('button2')).hide();
							this.stepTwo();
						} else {
							var html = "货位扫描错误:<br/><span class='num'>" + this.locationNo + "</span>";
							$(this.getElementByXid('errorMsg')).html(html);
							$(this.getElementByXid('errorCon')).show();
						}
					} else if (this.step == 3) {
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
								me.step = 4;
								me.iptStatus = 2;
							};
						};
						api.mushinyAjaxICQA({
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
					if (this.step == 3) {
						$(this.getElementByXid('errorMsg')).html('请扫描货位!');
					} else {
						$(this.getElementByXid('errorMsg')).html('请扫描货位!');
					}
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

	Model.prototype.checkLocataion = function(event) {
		var fun = function(me) {
			return function(data) {
				me.storageLocationId = data.storageLocationId;
				me.orderIndex = data.orderIndex;
				if (me.round == 1) {
					if (!me.isSave) {
						me.saveUser();
					}
				}
				me.initial();
				if (me.problemType == "R11" || me.problemType == "R12" || me.problemType == "R13" || me.problemType == "R14") {
					me.lightTwo();
				}
			};
		};
		api.mushinyAjaxICQA({
			type : "get",
			url : api.checkLocataion,
			data : {
				name : this.locationNo
			},
			success : fun(this),
		});
	};

	Model.prototype.saveUser = function(event) {
		if (this.round == 1) {
			var fun = function(me) {
				return function(data) {

					me.storageLocationUserId = data.id;
					me.isSave = true
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
	Model.prototype.search = function(event) {
		var fun = function(me) {
			return function(data) {
				if (data.length != 0) {
					;
					me.problemId = data[0].id;
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
		api.mushinyAjaxProblem(ajax);
	};
	Model.prototype.create = function(event) {
		var fun = function(me) {
			return function(data) {
				$(me.getElementByXid('mainCon')).show();
				$(me.getElementByXid('gunCon')).hide();
				$(me.getElementByXid('andonTit')).hide();
				if (me.status == 1) {
					if (me.problemType == "P") {
						if (me.step == 2) {
							if (me.round == 1) {
								if (!me.isSave) {
									me.saveUser();
								}
							}
							$(me.getElementByXid('button1')).show();
							$(me.getElementByXid('button2')).hide();
							me.stepTwo();
						}
						me.iptStatus = 1;
						$(me.getElementByXid('input1')).focus();
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
					$(me.getElementByXid('lightMsg')).html("已成功标记<span class='num1'>" + me.locationNo + "</span>号扫描枪" + me.gunErrorMsg);
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
	Model.prototype.input1Blur = function(event) {

	};
	Model.prototype.inputNumBlur = function(event) {

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
						"storageLocationId" : this.storageLocationId,
						"destination" : this.locationNo,
						"itemDataId" : this.itemDataId,
						"source" : this.locationNo
					});
					this.skuCount += 1;
				}

				this.num += skuNum;
				this.stepTwo();
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

	Model.prototype.inputGunKeydown = function(event) {
		if (this.type == 2 && event.keyCode == '13') {
			this.locationNo = parseInt($(this.getElementByXid('inputGun')).val());
			if (!isNaN(this.locationNo)) {
				this.search();
			}
		}
	};
	Model.prototype.inputGunClick = function(event) {

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

		if (this.step == 4) {
			this.skuNum.set(this.skuCount);
			this.total.set(this.num);
		}
		this.step = 3;
		this.iptStatus = 1;
		this.problemType = '';
	};

	Model.prototype.windowReceiver1Receive = function(event) {
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

	}, Model.prototype.windowDialog1Receive = function(event) {
		if (this.problemType == '') {
			this.problemType = event.data;
			switch (this.problemType) {
			case "P":
				if (this.step == 2) {
					this.light = "已成功标记货位：<br/><span class='num'>" + this.location.get() + "</span>货位无法扫描";
					this.search();
				} else {
					this.problemType = "";
				}
				break;
			case "I":
				if (this.round == 1) {
					var info = '';
					api.mushinyAjaxICQA({
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
					var url = "$UI/truk/ICQA/ICQAMessage.w";
					this.comp('windowDialog2').open({
						src : url,
						params : info,
					});
				}
				this.problemType = "";
				break;
			case "E":
				if (this.round != 1) {
					$(this.getElementByXid('okCon')).show();
				} else {
					var me = this;
					if (this.roundState == 'daily') {
						justep.Shell.showPage('dailyMain').done(function() {
							me.close();
						});
					} else if (this.roundState == 'system') {
						justep.Shell.showPage('systemMain').done(function() {
							me.close();
						});
					}
				}
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
				this.iptStatus = 3;
			}
		}
	};
	Model.prototype.button1Click = function(event) {
		var me = this;
		if (this.roundState == 'daily') {
			justep.Shell.showPage('dailyMain').done(function() {
				me.close();
			});
		} else if (this.roundState == 'system') {
			justep.Shell.showPage('systemMain').done(function() {
				me.close();
			});
		}
	};
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
		if(this.sku.length==0){
			this.sku.push({"storageLocationId" : this.storageLocationId})
		}
		var fun = function(me) {
			return function(data) {
				;
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
			api.mushinyAjaxICQA({
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
				if (me.round != 1&&me.state=='OK') {
					api.mushinyAjaxICQA({
						type : 'post',
						dataType:"text",
						url : api.overageOrLoss,
						data : JSON.stringify(me.sku),
						success : function(data) {
							me.initial();
						},
						error :function(data){

						}
					})
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
				api.mushinyAjaxICQA(create);
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
		api.mushinyAjaxICQA(update);
	};

	Model.prototype.btnCancelClick = function(event) {
		$(this.getElementByXid('okCon')).hide();
	};

	Model.prototype.error = function(me) {
		return function(data) {

			var html = "";
			if (typeof (data.responseJSON.key) != "undefined") {
				if (data.responseJSON.key == 'EX_INFORMATION_OBJECT_ERROR') {
					html = me.itemNo + "商品扫描错误,请重新扫描!"
				} else if (data.responseJSON.key == 'EX_OBJECT_NOT_FOUND') {
					html = "数据没找到!";

				} else if (data.responseJSON.key == 'EX_NEARBY_USER_ENPTY_ERROR') {
					me.isSave = false;
					me.tittle.set('扫描临近货位');
					me.step = 1;
					me.total.set('0');
					me.skuNum.set('0');
				} else if (data.responseJSON.key == 'EX_USER_ENPTY_ERROR') {
					me.isSave = false;
					if (me.opation == 1) {
						me.initial();
					} else {
						me.tittle.set('扫描临近货位');
						me.step = 1;
						me.total.set('0');
						me.skuNum.set('0');
					}
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
	Model.prototype.button3Click = function(event) {
		var me = this;
		if (this.roundState == 'daily') {
			justep.Shell.showPage('dailyMain').done(function() {
				me.close();
			});
		} else if (this.roundState == 'system') {
			justep.Shell.showPage('systemMain').done(function() {
				me.close();
			});
		}
	};
	Model.prototype.button4Click = function(event) {
		var me = this;
		justep.Shell.showPage('login3').done(function() {
			me.close();
		});
	};
	return Model;
});