define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var api = require("$UI/truk/js/api");
	var Model = function() {
		this.opt = justep.Bind.observable("");
		this.fID = justep.Bind.observable("");
		this.fTitle = justep.Bind.observable("");
		this.fContent = justep.Bind.observable("");
		this.textid = justep.Bind.observable("");
		this.cartextid = justep.Bind.observable("");
		this.numbercut = justep.Bind.observable("");
		this.cartextid = justep.Bind.observable("");
		this.retype = "H";
		this.steprec = 1;
		this.stepAmode = 1;
		this.retypeas = "";
		this.maxAmount = 0; // 最大小车数量
		this.mdd = ''; // 目的地名称
		this.callParent();
		this.receivingStationId = ''; // 收货工作站ID
		this.receivingDestinationId = ''; // 收获目的地ID
		this.receivingDestinationName = ''; // 收获目的地名称
		this.containerId = ''; // 小车ID
		this.newContainerId = ''; // 新车牌ID
		this.containerName = ''; // 小车名称
		this.newContainerName = ''; // 新小车名称
		this.ok = 0; // 是否成功
		this.adviceNo = ''; // 收货单号
		this.adviceId = ''; // 收货单ID
		this.itemNo = ''; // sku
		this.itemDataId = ''; // skuID
		this.itemName = ''; // sku名称
		this.itemUnit = ''; // sku类型
		this.itemAmount = 0;// sku数量
		this.receiveAmount = 0;// sku已收数量
		this.sj = 1; // 所有小车
		this.start = 0; // 满框是否能点击
		this.itemData = ''; // 所有商品
		this.receivingData = ''// 目的地集合
		this.count = 0; // 计数
		this.iptStatus = 0; // 输入框索引
		this.opation = 1;
		this.productionDate = justep.Bind.observable('无');
		this.expirationDate = justep.Bind.observable('无');
		this.expiryDateOut = justep.Bind.observable('无');
		this.yearlab = justep.Bind.observable('');
		this.monthlab = justep.Bind.observable('');
		this.daylab = justep.Bind.observable('');
		this.expiryDatelab = justep.Bind.observable('');
		this.date = '';
		this.lotDate = '';
		this.year = '';
		this.month = '';
		this.day = '';
		this.expiryDate = '';
		this.lotOpation = 1;
		this.flag = 1;
		this.rex = /^\d+$/;
		this.regular = /((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/
	};

	// 解绑所有小车
	Model.prototype.scancar2 = function() {

		var fun = function(me) {
			return function(data) {

				$(me.getElementByXid("iptcar")).show();
				data = me.comp("datacar");
				me.opt.set("扫描目的地")
				$(me.getElementByXid("listTemplateUl1")).empty();
				$("#messaged").hide();
				me.iptStatus = 1;
				$(me.getElementByXid("row1")).show();
				$(me.getElementByXid("row2")).show();
			};
		};

		api.mushinyAjaxDel({
			type : "delete",
			cache : false,
			url : api.deleteReceivingProcessContainers,
			data :{
				receivingStationId: this.receivingStationId,
			},
			contentType : false,
			processData : false,
			dataType : "Text",
			success : fun(this),
		});
	};

	Model.prototype.ck2 = function() {

		this.opt.set("请确认收货模式")
		$("#messaged").css("text-align", "left");
		$("#messaged").show();
		var html = '<span >自动满F筐请将所有目的地绑定车牌放置到对应目的地的托盘上，并重新开始绑定所有车牌，是否确认继续操作？</span></br><div style="text-align:center;"> <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="是" xid="button3" onClick="justep.Bind.contextFor(this).$model.scancar2()" style="background: linear-gradient(#5C81CA,#2F62BB );vertical-align:middle;width:2rem;margin:0.5rem 0px 0px 0px;"><i xid="i3"></i><span xid="span3">是</span></a><a component="$UI/system/components/justep/button/button" class="btn btn-default" onClick="justep.Bind.contextFor(this).$model.fi()" label="否" xid="button4" style="background: linear-gradient(#5C81CA,#2F62BB );width:2rem;margin:0.5rem 0px 0px 10%;"><i xid="i4"></i><span xid="span7">否</span></a></div>'
		$("#messaged").html(html);

		$("#messaged").css("background-color", "#F4BF00");

	}
	Model.prototype.fi = function(event) {

		$("#messaged").show();
		var html = '<span >此站台目前已绑定</span><span >'
				+ this.sj.length
				+ '</span><span >个目的地和收货车牌</span></br><span style="text-align:center;width: 100%;display: inline-block;">请选择收货模式</span></br><div style="text-align:left;font-family:宋体;font:0.4rem;"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="是" xid="button3" onClick="justep.Bind.contextFor(this).$model.ck()" style="background: linear-gradient(#5C81CA,#2F62BB );vertical-align:middle;width:auto;margin:0.5rem 0px 0px 0px;"><i xid="i3"></i><span xid="span3">1.继续使用现有绑定车牌收货</span></a></br><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="是" xid="button3" onClick="justep.Bind.contextFor(this).$model.ck2()" style="background: linear-gradient(#5C81CA,#2F62BB );vertical-align:middle;width:auto;margin:0.5rem 0px 0px 0px;"><i xid="i3"></i><span xid="span3">2.自动满筐所有车牌重新绑定</span></a></div>'
		$("#messaged").html(html);

		$("#messaged").css("background-color", "#F4BF00");

	}

	// 继续使用绑定小车收货
	Model.prototype.ck = function(event) {
		if (this.retype === "H") {
			$(this.getElementByXid("mk1btn")).attr("disabled", false);

		}
		this.start = 1;
		this.iptStatus = 3;
		$(this.getElementByXid('scanrecipient')).attr("readonly", false);
		$(this.getElementByXid("scanrecipient")).focus();
		$("#messaged").hide();
		this.opt.set("请扫描收货单号码")
	};

	// 手动满框初始化
	Model.prototype.button1Click = function(event) {

		if (this.opation === 1) {
			this.retype = "H";
			this.steprec = 1;
			var bntd = $("#sgsp");
			var btns = $("#btnshow");
			bntd.css("background", "linear-gradient(#5C81CA,#2F62BB  )");
			bntd.addClass("btnsty");
			$(this.getElementByXid('Hmk')).hide();
			if (this.start === 1) {
				$(this.getElementByXid("mk1btn")).attr("disabled", false);
				this.opt.set("请扫描收货单号码");
			}
			btns.css("background", "gray");
		}
	};

	// 自动满框初始化
	Model.prototype.button2Click = function(event) {
		if (this.opation === 1) {
			this.retype = "A";
			var btns = $("#btnshow");
			var btnd = $("#sgsp");
			this.steprec = 1;
			$(this.getElementByXid('Hmk')).hide();
			if (this.start === 1) {
				this.opt.set("请扫描收货单号码");
			}
			$(this.getElementByXid("mk1btn")).attr("disabled", true);
			btns.css("background", "linear-gradient(#5C81CA,#2F62BB  )");
			btns.addClass("btnsty");
			btnd.css("background", "gray");
		}
	};

	Model.prototype.modelLoad = function(event) {

	};
	// 扫描目的地
	Model.prototype.ipt1Keydown = function(event) {
		var fun = function(me) {
			return function(data) {

				me.receivingDestinationId = data.id;
				var mesg = "扫描车牌号";
				me.opt.set(mesg);
				$(me.getElementByXid("input3")).focus();
				me.iptStatus = 2;

			}
		};
		if (event.keyCode == "13") {
			this.mdd = $(this.getElementByXid('ipt1')).val().trim();
			$(this.getElementByXid('errorCon')).hide();
			if (this.mdd != "") {

				var ajax = {
					type : "get",
					url : api.scanReceivingDestination,
					success : fun(this),
					error : this.error(this),
					data : {
						name : this.mdd,
						receivingStationId : this.receivingStationId
					}
				};
				api.mushinyAjax(ajax);
			} else {
				$(this.getElementByXid('errorMsg')).html("目的地不能为空");
				$(this.getElementByXid('errorCon')).show();
			}
		}
	};
	// 扫描车牌
	Model.prototype.input3Keydown = function(event) {
		var fun = function(me) {
			return function(data) {
				me.containerId = data.id;
				me.ok = 1;
				me.isOk();
			};
		}
		if (event.keyCode == "13") {
			var car = $(this.getElementByXid('input3')).val().trim();
			$(this.getElementByXid('errorCon')).hide();
			if (car != '') {
				var ajax = {
					type : "get",
					url : api.scanContainer,
					success : fun(this),
					error : this.error(this),
					data : {
						name : car
					}
				};
				api.mushinyAjax(ajax);
			} else {
				$(this.getElementByXid('errorMsg')).html("车牌号不能为空");
				$(this.getElementByXid('errorCon')).show();
			}
		}
		;
	};
	var steph = 1;

	// 绑定车牌
	Model.prototype.isOk = function(event) {
		if (this.ok === 1) {
			var fun = function(me) {
				return function(data) {
					me.getContainer();
					me.showContainer();
					me.count = me.count + 1;
					if (me.count === me.maxAmount) {
						if (me.retype === "H") {
							$(me.getElementByXid("mk1btn")).attr("disabled", false);

						}
						me.start = 1;
						me.iptStatus = 3;
						me.opt.set("请扫描收货单号码")
						$(me.getElementByXid('iptcar')).hide();
						$(me.getElementByXid('scanrecipient')).attr("readonly", false);
						$(me.getElementByXid('scanrecipient')).focus();

					} else {
						me.iptStatus = 1;
						$(me.getElementByXid('ipt1')).focus();
						me.comp('ipt1').clear();
						me.comp('input3').clear();
					}
				}
			}
			api.mushinyAjax({
				type : "post",
				dataType : "Text",
				contentType : "application/json;charset=utf-8",
				url : api.saveReceivingProcessContainer,
				data : JSON.stringify({
					receivingStationId : this.receivingStationId,
					receivingDestinationId : this.receivingDestinationId,
					containerId : this.containerId
				}),
				success : fun(this),
			});
		}
	};

	// 收获扫描
	Model.prototype.scanrecipientKeydown = function(event) {
		if (event.keyCode == "13") {
			$("#messaged").hide();
			$(this.getElementByXid('errorCon')).hide();
			this.adviceNo = $(this.getElementByXid("scanrecipient")).val().trim();
			if (this.steprec == 1) { // 扫描DN
				if (this.adviceNo != '') {
					var fun = function(me) {
						return function(data) {
							;
							me.adviceId = data.id;
							me.textid.set(me.adviceNo);
							$(me.getElementByXid("carlist")).hide();
							$("#messaged").hide();
							me.opt.set("请扫描商品条码");
							me.steprec = 2;
							me.opation = 2;
							$(me.getElementByXid("maindiv")).show();
							me.comp('scanrecipient').clear();
						};
					}
					var ajax = {
						type : "get",
						contentType : "application/x-www-form-urlencoded;charset=utf-8",
						url : api.scanAdviceRequest,
						data : {
							adviceNo : this.adviceNo
						},
						success : fun(this),
						error : this.error(this),
					}
					api.mushinyAjax(ajax);
				} else {
					$(this.getElementByXid('errorMsg')).html("DN不能为空");
					$(this.getElementByXid('errorCon')).show();
				}

			} else if (this.steprec == 2) {
				// 扫描sku
				this.itemNo = $(this.getElementByXid("scanrecipient")).val().trim();
				if (this.itemNo != '') {
					var fun = function(me) {
						return function(data) {

						if(data.itemData.serialRecordType=="NO_RECORD"){
							me.itemDataId = data.itemData.id;
							me.opt.set("请输入商品数量");
							me.fID.set(data.itemData.itemUnit.name);
							me.fContent.set(data.itemData.itemNo);
							me.fTitle.set(data.itemData.name);
							me.itemAmount = data.amount;
							me.receiveAmount = data.receiveAmount;

							if (data.itemData.lotMandatory) {
								me.opt.set("请输入商品有效期");
								$(me.getElementByXid("opationCon")).show();
							} else {
								me.opt.set("请输入商品数量");
								$(me.getElementByXid("qtyipt")).show();
							}

							me.steprec = 3;
							me.retypeas = "";
						}else{
							$(me.getElementByXid('errorMsg')).html("托盘收货不支持收拥有SN的商品!");
							$(me.getElementByXid('errorCon')).show();
						}
							me.comp('scanrecipient').clear();
						};

					};
					var opt = {
						type : "get",
						url : api.scanAdvicePositionItemData,
						data : {
							adviceId : this.adviceId,
							itemNo : this.itemNo
						},
						success : fun(this),
						error : this.error(this),
					}
					api.mushinyAjax(opt);
				} else {
					$(this.getElementByXid('errorMsg')).html("SKU不能为空");
					$(this.getElementByXid('errorCon')).show();
				}
			} else if (this.retypeas == "mk") { // 扫描车牌
				this.containerName = $(this.getElementByXid('scanrecipient')).val();
				if (this.retype == "H") {
					if (this.numbercut.get() != 0 && this.numbercut.get() != '') {
						if (this.containerName.toUpperCase() == this.cartextid.get()) {
							this.selectContainer(this.containerName);
							var data = "";
							if (this.lotDate == '') {
								data = {
									containerId : this.containerId,
									itemDataId : this.itemDataId,
								}
							} else {
								data = {
									containerId : this.containerId,
									itemDataId : this.itemDataId,
									useNotAfter : this.lotDate,
								}
							}
							var fun = function(me) {
								return function(data) {
									me.receivingGoods();
								}
							}
							var err = function(me) {
								return function(data) {
									$(me.getElementByXid('errorMsg')).html(data.responseJSON.message);
									$(me.getElementByXid('errorCon')).show();
									$('#messaged').hide();
									me.steprec = 1;
									me.opation = 1;
									$(me.getElementByXid('maindiv')).hide();
									$(me.getElementByXid('number')).hide();
									$(me.getElementByXid('dateCon')).hide();
									me.opt.set("请扫描收货单号码");
									me.fID.set("");
									me.fTitle.set("");
									me.fContent.set("");
								}
							}
							api.mushinyAjax({
								type : "get",
								url : api.checkContainer,
								data : data,
								success : fun(this),
								error : err(this),
							})
						} else {
							$(this.getElementByXid('errorMsg')).html(this.containerName+"车牌不对请重新扫描!");
							$(this.getElementByXid('errorCon')).show();
						}

					} else {
						$(this.getElementByXid('errorMsg')).html("收货数量不容许为零");
						$(this.getElementByXid('errorCon')).show();
					}
				} else if (this.retype == "A") {
					if (this.stepAmode == 1) {
						if (this.numbercut.get() != 0 && this.numbercut.get() != '') {
							if (this.containerName.toUpperCase() == this.cartextid.get()) {
								this.selectContainer(this.containerName);
								var data = "";
								if (this.lotDate == '') {
									data = {
										containerId : this.containerId,
										itemDataId : this.itemDataId,
									};
								} else {
									data = {
										containerId : this.containerId,
										itemDataId : this.itemDataId,
										useNotAfter : this.lotDate,
									};
								}
								var fun = function(me) {
									return function(data) {
										me.receivingGoods();
									}
								}
								var err = function(me) {
									return function(data) {
										$(me.getElementByXid('errorMsg')).html(data.responseJSON.message);
										$(me.getElementByXid('errorCon')).show();
										$('#messaged').hide();
										me.steprec = 1;
										me.opation = 1;
										$(me.getElementByXid('maindiv')).hide();
										$(me.getElementByXid('number')).hide();
										$(me.getElementByXid('dateCon')).hide();
										me.opt.set("请扫描收货单号码");
										me.fID.set("");
										me.fTitle.set("");
										me.fContent.set("");
									}
								}
								api.mushinyAjax({
									type : "get",
									url : api.checkContainer,
									data : data,
									success : fun(this),
									error : err(this),
								})
							} else {
								$(this.getElementByXid('errorMsg')).html(this.containerName+"车牌不对请重新扫描!");
								$(this.getElementByXid('errorCon')).show();
							}

						} else {
							$(this.getElementByXid('errorMsg')).html("收货数量不容许为零");
							$(this.getElementByXid('errorCon')).show();
						}
					} else if (this.stepAmode == 2) { // 自动满框
						this.newContainerName = $(this.getElementByXid('scanrecipient')).val().trim();
						if (this.newContainerName != '') {
							var fun = function(me) {
								return function(data) {
									me.newContainerId = data.id;
									me.update();
								};
							}
							var ajax = {
								type : "get",
								url : api.scanContainer,
								success : fun(this),
								error : this.error(this),
								data : {
									name : this.newContainerName
								}
							};
							api.mushinyAjax(ajax);
						} else {
							$(this.getElementByXid('errorMsg')).html("车牌号不能为空");
							$(this.getElementByXid('errorCon')).show();
						}
					}

				}
			} else if (this.retypeas === "F") { // 满框
				if (steph == 1) { // 扫描旧车牌
					$("#messaged").hide();
					this.getContainer();
					this.containerName = $(this.getElementByXid('scanrecipient')).val();
					this.selectContainer(this.containerName);
					this.comp('scanrecipient').clear();
					if (this.containerId !== '') {
						steph = 2;
						this.opt.set("请扫描新车牌");
						$(this.getElementByXid("span29")).html(this.containerName)
						$(this.getElementByXid("Hmk")).show();
					} else {
						$(this.getElementByXid('errorMsg')).html("小车未绑定");
						$(this.getElementByXid('errorCon')).show();
					}

				} else if (steph == 2) { // 扫描新车牌
					this.newContainerName = $(this.getElementByXid('scanrecipient')).val().trim();
					if (this.newContainerName != '') {
						var fun = function(me) {
							return function(data) {
								me.newContainerId = data.id;
								me.update();
							};
						};
						var ajax = {
							type : "get",
							url : api.scanContainer,
							success : fun(this),
							error : this.error(this),
							data : {
								name : this.newContainerName
							}
						};
						api.mushinyAjax(ajax);
					} else {
						$(this.getElementByXid('errorMsg')).html("车牌号不能为空");
						$(this.getElementByXid('errorCon')).show();
					}
				}
			}
		}
	};

	// 收货
	Model.prototype.receivingGoods = function(event) {
		var data = "";
		if (this.lotDate == '') {
			data = {
				receivingContainerId : this.containerId,
				itemDataId : this.itemDataId,
				amount : this.numbercut.get(),
				adviceId : this.adviceId,
				receivingType : "PALLET RECEIVE",
			}
		} else {
			data = {
				receivingContainerId : this.containerId,
				itemDataId : this.itemDataId,
				amount : this.numbercut.get(),
				adviceId : this.adviceId,
				receivingType : "PALLET RECEIVE",
				useNotAfter : this.lotDate,
			}
		}

		var fun = function(me) {
			return function(data) {
				me.fID.set("");
				me.fContent.set("");
				me.fTitle.set("");
				$(me.getElementByXid("qtyipt")).hide();
				$(me.getElementByXid("maindiv")).hide();
				$(me.getElementByXid("number")).hide();
				$(me.getElementByXid("dateCon")).hide();
				me.comp('yearIn').clear();
				me.comp('monthIn').clear();
				me.comp('dayIn').clear();
				me.comp('expiryDateIn').clear();
				me.lotDate = '';
				me.containerName='';
				if (me.retype === "H") {
					me.steprec = 1;
					me.opt.set("请扫描收货单号码");
					me.opation = 1;
				} else {
					me.opt.set("请扫描新车牌绑定至目的地");
					me.stepAmode = 2;
				}
				var qty = $(me.getElementByXid("span21")).text();
				successsgre1mk(qty, me.containerName, me.receivingDestinationName);
				me.comp('scanrecipient').clear();
			};
		};
		this.selectContainer(this.containerName);
		if (this.containerId !== '') {
			var re = {
				type : "post",
				dataType : "Text",
				url : api.receivingGoodsToStockUnit,
				contentType : "application/json;charset=utf-8",

				data : JSON.stringify(data),
				success : fun(this),
				error : this.error(this),
			};
			api.mushinyAjax(re);
		} else {
			$(this.getElementByXid('errorMsg')).html("小车未绑定");
			$(this.getElementByXid('errorCon')).show();
		}
	};

	// 满框更换小车
	Model.prototype.update = function(event) {
		var fun = function(me) {
			return function(data) {
				me.comp('scanrecipient').clear();
				$(me.getElementByXid("Hmk")).hide();
				me.opt.set("请扫描收货单号码");
				successsgrezdmk(me.containerName, me.newContainerName, me.receivingDestinationName);
				me.steprec = 1;
				me.stepAmode = 1;
				me.opation = 1;
				me.getContainer();
				me.comp('scanrecipient').clear();
			};
		};
		var re = {
			type : "put",
			url : api.updateReceivingProcessContainer,
			contentType : "application/x-www-form-urlencoded;charset=utf-8",
			dataType : "Text",
			data : {
				oldContainerId : this.containerId,
				newContainerId : this.newContainerId
			},
			success : fun(this),
			error : this.error(this),
		};
		api.mushinyAjax(re);

	};

	// 打开输入页面
	Model.prototype.button5Click = function(event) {
		var url = require.toUrl('../inboundsh/skuqty.w');
		$('#errorCon').hide();
		this.comp('windowDialog1').forceRefreshOnOpen = true;
		this.comp('windowDialog1').open({
			src : url,
		});
	};

	// 收获成功提示
	function successsgre1mk(qty, containerName, receivingDestinationName) {

		var html = '<span class="spstyle3">已成功收货</span><span class="spstyle2">' + qty + '件</span><span class="spstyle3">商品至车牌</br></span><span class="spstyle2">' + containerName
				+ '</span><span>目的地</span><span class="spstyle2">' + receivingDestinationName + '</span>';
		$("#messaged").html(html);

		$("#messaged").css("color", "#FFFFFF");
		$("#messaged").show();
		$("#messaged").css("background-color", "#6BAD3E");

	}

	// 满框成功提示
	function successsgrezdmk(containerName, newContainerName, receivingDestinationName) {

		var html = '<span class="spstyle3">请将车牌</span><span class="spstyle2">' + containerName + '</span><span class="spstyle3">放置到托盘上，成功绑定新车牌</span><span class="spstyle2">' + newContainerName
				+ '</span><span>至</span><span class="spstyle2">' + receivingDestinationName + '</span>';
		$("#messaged").html(html);

		$("#messaged").css("color", "#FFFFFF");
		$("#messaged").show();
		$("#messaged").css("background-color", "#6BAD3E");

	}

	// 接收数量
	Model.prototype.windowDialog1Receive = function(event) {
		var order = event.data;
		if (typeof (order) != "undefined") {
			var fun = function(me) {
				return function(data) {
					me.receivingDestinationId = data.id;
					me.selectContainerName();
					me.cartextid.set(me.containerName);
					me.retypeas = "mk";
					$(me.getElementByXid("number")).show();
					me.numbercut.set(order);
					me.cartextid.set(me.containerName);
					me.opt.set("请扫描车牌号码");
					$(me.getElementByXid("qtyipt")).hide();
					$(me.getElementByXid('scanrecipient')).focus();
					me.iptStatus = 3;
				};
			};
			api.mushinyAjax({
				type : "get",
				url : api.getContainer,
				data : {
					receivingType : "PALLET",
					itemDataId : this.itemDataId,
				},
				success : fun(this),
				error : this.error(this),
			});
		}
	};

	// 满框初始化
	Model.prototype.mk1btnClick = function(event) {
		if (this.opation === 1) {
			steph = 1;

			this.steprec = 5;
			this.retypeas = "F";
			this.opt.set("请扫描已满车牌");
			$(this.getElementByXid("Hmk")).hide();
		}
	};

	Model.prototype.modelModelConstructDone = function(event) {

	};

	Model.prototype.modelActive = function(event) {

	};

	Model.prototype.datacarCustomRefresh = function(event) {

	};

	Model.prototype.button7Click = function(event) {
		var url = require.toUrl('../inboundsh/skuqty.w');
		this.comp('windowDialog1').forceRefreshOnOpen = false;
		this.comp('windowDialog1').open({
			src : url,
		});
	};

	// 页面接收数据及初始化
	Model.prototype.modelParamsReceive = function(event) {
		$(this.getElementByXid("mk1btn")).attr("disabled", true);
		this.maxAmount = event.params.maxAmount;
		this.receivingStationId = event.params.receivingStationId;
		this.getContainer();
		$(this.getElementByXid("maindiv")).hide();
		$(this.getElementByXid("row1")).hide();
		$(this.getElementByXid("row2")).hide();
		$(this.getElementByXid("qtyipt")).hide();
		$(this.getElementByXid("dateCon")).hide();
		$(this.getElementByXid("opationCon")).hide();
		$(this.getElementByXid("dateInCon")).hide();
		$(this.getElementByXid("okCon")).hide();
		$(this.getElementByXid('errorCon')).hide();
		$(this.getElementByXid("carlist")).hide();
		$(this.getElementByXid('scanrecipient')).attr("readonly", true);
		this.comp('yearIn').clear();
		this.comp('monthIn').clear();
		this.comp('dayIn').clear();
		this.comp('expiryDateIn').clear();
		$("#messaged").css("color", "#000000");
		this.fID.set('');
		this.fContent.set('');
		this.fTitle.set('');
		this.date = '';
		this.lotDate = '';
		this.year = '';
		this.month = '';
		this.day = '';
		this.expiryDate = '';
		$(this.getElementByXid("number")).hide();
		this.steprec = 1;
		this.opation = 1;
		$("#messaged").hide();
		this.itemAmount = 0;// sku数量
		this.receiveAmount = 0;// sku已收数量
		if (this.sj.length < this.maxAmount) {
			$(this.getElementByXid("iptcar")).show();
			this.opt.set("扫描目的地");
			this.iptStatus = 1;
			$(this.getElementByXid("row1")).show();
			$(this.getElementByXid("row2")).show();
			this.count = this.sj.length;
			$(this.getElementByXid('ipt1')).focus();
		} else {
			this.opt.set("请选择收货模式");
			this.fi();
		}
		if (this.sj.length != 0) {
			$(this.getElementByXid("carlist")).show();
			this.showContainer();
		}
	};

	// 获取所有绑定小车信息
	Model.prototype.getContainer = function(event) {
		var fun = function(me) {
			return function(data) {
				me.sj = data;
				;
			};
		};
		var ajax = {
			type : "get",
			url : api.getReceivingProcessContainers,
			data : {
				receivingStationId : this.receivingStationId,
			},
			success : fun(this),
		};
		api.mushinyAjax(ajax)
	};

	// 列表绑定信息
	Model.prototype.showContainer = function(event) {
		var cardata = this.comp('datacar');
		var opt = {
			defaultValues : this.sj
		};
		cardata.clear();
		cardata.newData(opt);
		$(this.getElementByXid('carlist')).show();
	};

	Model.prototype.li1Click = function(event) {

	};

	// 收索绑定小车信息
	Model.prototype.selectContainer = function(name) {
		this.containerId = '';
		this.receivingDestinationName = '';
		var i = 0;
		for (i; i < this.sj.length; i++) {

			if (name.toUpperCase() === this.sj[i].container.name) {
				this.containerId = this.sj[i].container.id;
				this.receivingDestinationName = this.sj[i].receivingDestination.name;
			}
		}
	};

	// 收索指定小车名称
	Model.prototype.selectContainerName = function() {
		this.containerName = ''
		var i = 0;
		for (i; i < this.sj.length; i++) {

			if (this.receivingDestinationId === this.sj[i].receivingDestination.id) {
				this.containerName = this.sj[i].container.name;
			}
		}
	};

	// 收索选定商品信息
	Model.prototype.selectItem = function(name) {
		this.itemUnit = '';
		var i = 0;
		for (i; i < this.itemData.length; i++) {
			if (name === this.itemData[i].name) {
				this.itemUnit = this.itemData[i].itemUnit.name;
				this.itemDataId = this.itemData[i].id;
				this.itemName = this.itemData[i].name;
			}
		}
	};

	// 商品详情
	Model.prototype.span36Click = function(event) {
		var row = event.bindingContext.$object;
		var name = row.val("name");
		this.selectItem(name);
		this.opt.set("请输入商品数量");
		this.fID.set(this.itemUnit);
		this.fContent.set(this.itemNo);
		this.fTitle.set(this.itemName);
		$(this.getElementByXid("qtyipt")).show();
		this.steprec = 3;
		this.retypeas = "";
		$(this.getElementByXid('tipXX')).hide();
	};

	// 锁定输入框
	Model.prototype.panel1Click = function(event) {
		if (this.iptStatus === 1) {
			$(this.getElementByXid('ipt1')).focus().select();
		} else if (this.iptStatus === 2) {
			$(this.getElementByXid('input3')).focus().select();
		} else if (this.iptStatus === 3) {
			$(this.getElementByXid('scanrecipient')).focus().select();
		}

	};

	// 返回
	Model.prototype.backClick = function(event) {
		justep.Shell.showPage("login4")
	};

	// 错误信息提示
	Model.prototype.error = function(me) {
		return function(data) {
			var html = "";
			if (typeof (data.responseJSON.key) != "undefined") {
				/*
				 * switch (data.responseJSON.key) { case
				 * "EX_RECEIVING_DESTINATION_NOT_FOUND": html =
				 * data.responseJSON.values[0] + "目的地不存在，请重新核实!";
				 * me.comp('ipt1').clear(); break; case
				 * "EX_CONTAINER_NOT_FOUND": html = data.responseJSON.values[0] +
				 * "车辆不存在，请重新核实!"; me.comp('input3').clear();
				 * me.comp('scanrecipient').clear(); break; case
				 * "EX_CONTAINER_IS_FULL_STATE": html =
				 * data.responseJSON.values[0] + "小车已被绑定!";
				 * me.comp('input3').clear(); me.comp('scanrecipient').clear();
				 * break; case "EX_RECEIVING_CONTAINER_SKU_DIFFERENT_LOT": html =
				 * data.responseJSON.values[0] + "同一车中是否存在同一商品的不同有效期!";
				 * me.comp('scanrecipient').clear(); break; case
				 * "EX_RECEIVING_CONTAINER_SKU_DIFFERENT_CLIEN": html =
				 * data.responseJSON.values[0] + "小车中存在不同供应商相同商品!";
				 * me.comp('scanrecipient').clear(); break; case
				 * "EX_RECEIVING_DN_NOT_FOUND": html =
				 * data.responseJSON.values[0] + "DN不存在!";
				 * me.comp('scanrecipient').clear(); break; case
				 * "EX_RECEIVING_SKU_NOT_FOUND": html =
				 * data.responseJSON.values[0] + "SKU不在该DN上!";
				 * me.comp('scanrecipient').clear(); break; case
				 * "EX_STOWING_ITEM_DATA_NOT_FOUND": html =
				 * data.responseJSON.values[0] + "商品条码无效!";
				 * me.comp('scanrecipient').clear(); break; case
				 * "EX_RECEIVING_DESTINATION_HAS_DELETED": html =
				 * data.responseJSON.values[0] + "目的地已被标记为删除!";
				 * me.comp('ipt1').clear(); break; case
				 * "EX_RECEIVING_DN_HAS_DELETED": html =
				 * data.responseJSON.values[0] + "DN已被标记为删除!";
				 * me.comp('scanrecipient').clear(); break; case
				 * "EX_RECEIVING_DN_NOT_ACTIVATED": html =
				 * data.responseJSON.values[0] + "DN没有激活!";
				 * me.comp('scanrecipient').clear(); break; case
				 * "EX_RECEIVING_DESTINATION_HAS_USED": html =
				 * data.responseJSON.values[0] + "目的地已被使用!";
				 * me.comp('ipt1').clear(); break; case "EX_SKU_NOT_FOUND": html =
				 * data.responseJSON.values[0] + "SKU不存在!";
				 * me.comp('scanrecipient').clear(); break; case
				 * "EX_OBJECT_NOT_FOUND": html="数据未找到!"; break; case
				 * "EX_RECEIVING_CATEGORY_NOT_FOUND": html="当前客户没有设定收货规则!";
				 * break; default:
				 * 
				 * break; }
				 */
				html = data.responseJSON.message;
			} else {
				html = "服务器错误!";
			}

			$(me.getElementByXid('errorMsg')).html(html);
			$(me.getElementByXid('errorCon')).show();
			$('#messaged').hide();
		};
	};
	Model.prototype.btnPdClick = function(event) {
		this.opt.set("请输入年份");
		this.lotOpation = 1;
		this.iptStatus = 4;
		this.yearlab.set('生产年：');
		this.monthlab.set('生产月：');
		this.daylab.set('生产日：');
		this.expiryDatelab.set('有效期（月）：');
		$(this.getElementByXid('dateInRow4')).show();
		$(this.getElementByXid('dateCon')).hide();
		$(this.getElementByXid('opationCon')).hide();
		$(this.getElementByXid('dateInCon')).show();
		$(this.getElementByXid('yearIn')).focus();
	};
	Model.prototype.btnLotClick = function(event) {
		this.opt.set("请输入年份");
		this.lotOpation = 2;
		this.iptStatus = 4;
		this.yearlab.set('到期年：');
		this.monthlab.set('到期月：');
		this.daylab.set('到期日：');
		$(this.getElementByXid('dateInRow4')).hide();
		$(this.getElementByXid('dateCon')).hide();
		$(this.getElementByXid('opationCon')).hide();
		$(this.getElementByXid('dateInCon')).show();
		$(this.getElementByXid('yearIn')).focus();
	};
	Model.prototype.yearInKeydown = function(event) {

		if (event.keyCode == "13") {
			this.year = $(this.getElementByXid('yearIn')).val();
			if (this.rex.test(this.year)) {
				this.flag = 1;
				this.dateInitial();
			} else {
				this.comp("yearIn").clear();
				$(this.getElementByXid('errorMsg')).html("只能输入数字!");
				$(this.getElementByXid('errorCon')).show();
			}

		}
	};
	Model.prototype.monthInKeydown = function(event) {
		if (event.keyCode == "13") {
			this.month = $(this.getElementByXid('monthIn')).val();
			if (this.rex.test(this.month)) {

				this.flag = 2;
				this.dateInitial();
			} else {
				this.comp("monthIn").clear();
				$(this.getElementByXid('errorMsg')).html("只能输入数字!");
				$(this.getElementByXid('errorCon')).show();
			}

		}
	};
	Model.prototype.dayInKeydown = function(event) {
		if (event.keyCode == "13") {
			this.day = $(this.getElementByXid('dayIn')).val();
			if (this.rex.test(this.day)) {
				this.flag = 3;
				this.dateInitial();
			} else {
				this.comp("dayIn").clear();
				$(this.getElementByXid('errorMsg')).html("只能输入数字!");
				$(this.getElementByXid('errorCon')).show();
			}

		}
	};
	Model.prototype.expiryDateInKeydown = function(event) {
		if (event.keyCode == '13') {
			this.expiryDate = $(this.getElementByXid('expiryDateIn')).val();
			if (this.rex.test(this.expiryDate)) {

				this.flag = 4;
				this.dateInitial();
				this.dateShow();
			} else {
				this.comp('expiryDateIn').clear();
				$(this.getElementByXid('errorMsg')).html("只能输入数字!");
				$(this.getElementByXid('errorCon')).show();
			}

		}
	};
	Model.prototype.dateShow = function(event) {
		if (this.lotOpation == 1) {
			if (!isNaN((parseInt(this.year))) && !isNaN((parseInt(this.month))) && !isNaN((parseInt(this.day))) && !isNaN((parseInt(this.expiryDate)))) {
				this.expiryDate = $(this.getElementByXid('expiryDateIn')).val();
				this.date = this.year + "/" + this.month + "/" + this.day;
				this.productionDate.set(this.date);
				var date = new Date(this.date);
				var now = new Date();
				if (this.regular.test(this.date)) {
					if(date<now){
					date.setMonth(date.getMonth() + parseInt(this.expiryDate));
					this.expirationDate.set(date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate());
					
					this.lotDate = date.getFullYear() + '-' + (Array(2).join(0) + (parseInt((date.getMonth() + 1)))).slice(-2) + '-' + (Array(2).join(0) +(parseInt(date.getDate()))).slice(-2);
					var lot = new Date(this.lotDate);
					if (lot > now) {
						this.expiryDateOut.set(this.expiryDate);
						$(this.getElementByXid('dateCon')).css("background", "linear-gradient(#6284cb,#3061b9)");
						$(this.getElementByXid('dateCon')).show();
						$(this.getElementByXid('dateInCon')).hide();
						$(this.getElementByXid('pd')).hide();
						$(this.getElementByXid('exp')).hide();
						$(this.getElementByXid('okCon')).show();
					} else {
						$(this.getElementByXid('errorMsg')).html("到期日期小于当前日期，请重新核实!");
						$(this.getElementByXid('errorCon')).show();
						$('#messaged').hide();
					}
					}else{
						$(this.getElementByXid('errorMsg')).html("生产日期大于当前日期，请重新核实!");
						$(this.getElementByXid('errorCon')).show();
						$('#messaged').hide();	
					}
				} else {
					var html = "输入的日期无效，请重新核实!";
					$(this.getElementByXid('errorMsg')).html(html);
					$(this.getElementByXid('errorCon')).show();
					$('#messaged').hide();
				}
			
			}
		} else if (this.lotOpation == 2) {
			if (!isNaN((parseInt(this.year))) && !isNaN((parseInt(this.month))) && !isNaN((parseInt(this.day)))) {
				var now = new Date();
				this.date = this.year + "/" + this.month + "/" + this.day;
				this.lotDate = this.year+ '-' + (Array(2).join(0) + (parseInt(this.month))).slice(-2) + '-' + (Array(2).join(0) +(parseInt(this.day))).slice(-2);
				var lot = new Date(this.date);
				if (this.regular.test(this.date)) {
					if (lot < now) {
						$(this.getElementByXid('errorMsg')).html("到期日期小于当前日期，请重新核实!");
						$(this.getElementByXid('errorCon')).show();
						$('#messaged').hide();
					} else {
						$(this.getElementByXid("dateCon")).show();
						$(this.getElementByXid('dateCon')).css("background", "linear-gradient(#6284cb,#3061b9)");
						this.expirationDate.set(this.date);
						$(this.getElementByXid('pd')).hide();
						$(this.getElementByXid('exp')).hide();
						$(this.getElementByXid('okCon')).show();
						$(this.getElementByXid('dateInCon')).hide();
					}
				} else {
					$(this.getElementByXid('errorMsg')).html("输入的日期无效，请重新核实!");
					$(this.getElementByXid('errorCon')).show();
					$('#messaged').hide();
				}
			}
		}
	};

	Model.prototype.dateInitial = function(event) {
		var now = new Date();
		if (!isNaN(parseInt(this.year)) && !isNaN(parseInt(this.month)) && !isNaN(parseInt(this.day)) && !isNaN(parseInt(this.expiryDate))) {
			this.year = $(this.getElementByXid('yearIn')).val();
			this.month = $(this.getElementByXid('monthIn')).val();
			this.day = $(this.getElementByXid('dayIn')).val();
			this.expiryDate = $(this.getElementByXid('expiryDateIn')).val();
		}
		$(this.getElementByXid('errorCon')).hide();
		var html = "";
		var ff = 0;
		if (this.flag == 1 && !isNaN(parseInt(this.year))) {
			ff = 1;
			if (this.lotOpation == 1) {
				if (this.year > now.getFullYear()) {
					html = "生产月大于当前年，请重新核实!";
					$(this.getElementByXid('yearIn')).focus();
					this.comp('yearIn').clear();
				} else {
					this.opt.set("请输入月份");
					$(this.getElementByXid('monthIn')).focus();
					this.dateShow();

				}
			} else {
				this.opt.set("请输入月份");
				$(this.getElementByXid('monthIn')).focus();
				this.dateShow();
			}
		}

		else if (this.flag == 2 && !isNaN(parseInt(this.year)) && !isNaN(parseInt(this.month))) {
			ff = 1;
			if (this.lotOpation == 1) {
				if (this.month > (now.getMonth() + 1)&&this.year == now.getFullYear()) {
					html = "生产月大于当前月，请重新核实!";
					$(this.getElementByXid('monthIn')).focus();
					this.comp('monthIn').clear();

				} else {
					this.opt.set("请输入日期");
					$(this.getElementByXid('dayIn')).focus();
					this.dateShow();
				}
			} else {
				this.opt.set("请输入日期");
				$(this.getElementByXid('dayIn')).focus();
				this.dateShow();
			}
		}

		else if (this.flag == 3 && !isNaN(parseInt(this.year)) && !isNaN(parseInt(this.month)) && !isNaN(parseInt(this.day))) {
			ff = 1;
			if (this.lotOpation == 1) {
				if (this.day > now.getDate()&&this.year == now.getFullYear()) {
					html = "生产月日于当前日，请重新核实!";
					$(this.getElementByXid('dayIn')).focus();
					this.comp('dayIn').clear();
				} else {
					$(this.getElementByXid('expiryDateIn')).focus();
					this.opt.set("请输入有效期");
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
			} else if ((isNaN(parseInt(this.expiryDate))) && this.lotOpation === 1 && ff === 0) {
				html = "请输入有效期!";
				$(this.getElementByXid('expiryDateIn')).focus();
			}

		}
		if (html !== "") {
			$(this.getElementByXid('errorMsg')).html(html);
			$(this.getElementByXid('errorCon')).show();
			$('#messaged').hide();
		}

	};
	Model.prototype.confirmClick = function(event) {
		$(this.getElementByXid("okCon")).hide();
		this.opt.set("请输入商品数量");
		$(this.getElementByXid("qtyipt")).show();
		this.comp('yearIn').clear();
		this.comp('monthIn').clear();
		this.comp('dayIn').clear();
		this.comp('expiryDateIn').clear();
		this.date = '';
		this.year = '';
		this.month = '';
		this.day = '';
		this.expiryDate = '';
	};
	Model.prototype.cancelClick = function(event) {
		$(this.getElementByXid('okCon')).hide();
		
		$(this.getElementByXid('dateCon')).hide();
		$(this.getElementByXid('dateInCon')).show();
		$(this.getElementByXid('expiryDateIn')).focus();
	};
	return Model;
});