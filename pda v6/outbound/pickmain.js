define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var pick = require("$UI/truk/outbound/pick");
	var light = require("$UI/truk/js/light")
	var hotKey = require("$UI/truk/js/hotKey");
	var api = require("$UI/truk/js/api");
	var pickLang = window.pickMessage;
	var Model = function() {
		this.hintreminder = justep.Bind.observable("确认并扫描货位");
		this.hw = justep.Bind.observable("");
		this.unitType = justep.Bind.observable("");
		this.text = justep.Bind.observable("");
		this.itemNo = justep.Bind.observable("");
		this.fqty = justep.Bind.observable("");
		this.skuid = justep.Bind.observable("");
		this.color = justep.Bind.observable("");
		this.lostQty = justep.Bind.observable("");
		this.carQty = justep.Bind.observable("");
		this.binName = justep.Bind.observable("");
		this.fontColor = justep.Bind.observable("");
		this.picktypemain = "s";
		this.steppick = 1;
		this.stepWaring = 1;
		this.pickop = "  ";
		this.callParent();
		this.finsh = false;
		this.finshPick = true;
	}
	/*
	 * Model.prototype.pick = function(me) { // 准备写pick提交请求 var fun =
	 * function(data) { me.fqty.set(1) } }
	 */
	Model.prototype.reSet = function() {
		$(this.getElementByXid("div3")).show();
		$(this.getElementByXid("div6")).hide();
		this.comp("input3").clear();
		this.steppick = 1;
		this.hintreminder.set("扫描货位");
		this.picktypemain = "s"
		$(this.getElementByXid("input3")).hide();
		$(this.getElementByXid("input1")).focus();
	}
	Model.prototype.input1Keydown = function(event) {
		var error = function(data) {
			var msg = $("#messagpickmain")
			msg.show();
			msg.css("color", "#FFFFFF");
			msg.html("<span>" + data["0"].responseJSON.message + "</span>")
		}
		if (event.keyCode == "13") {
			if ($(this.getElementByXid("input1")).val() != "") {
				if (this.picktypemain == "s") {
					// 控制货位扫描前后显示逻辑
					if (this.steppick == 1) {
						if (this.hw.get() == $(this.getElementByXid("input1")).val()) {
							var fun = function(data) {
								// pickLang.LocationId = data.locationId
								$(this.getElementByXid("div3")).hide();
								$(this.getElementByXid("div6")).show();
								$("#messagpickmain").hide();
								this.steppick = 2;
								this.finshPick = true;
								this.hintreminder.set("检查并扫描商品");
							}.bind(this)
							// ////////////

							// ////////////
							var picksLocations = api.picksLocations
							picksLocations = picksLocations.replace(/{orderId}/, pickLang.BatchId)
							picksLocations = picksLocations.replace(/{positionId}/, pickLang.positionId)
							var data = {
								locationName : $(this.getElementByXid("input1")).val()
							}
							var opt = {
								data : data,
								type : "get",
								url : picksLocations,
								success : fun
							}
							api.mushinyAjax(opt);
						} else {
							this.hwsb1($(this.getElementByXid("input1")).val());
						}
					} else if (this.steppick == 2) {
						if (this.itemNo.get() == $(this.getElementByXid("input1")).val()) {
							$("#messagpickmain").hide();
							var fun = function(data) {
								// pickLang.itemId = data.itemId // 取商品id
								if (this.fqty.get() > 1) {
									this.steppick = 3;
									$(this.getElementByXid("input3")).show().focus();
									this.hintreminder.set("请输入数量");
								} else {
									var fun = function(data) {
										this.steppick = 1;
										this.hintreminder.set("扫描货位");
										$(this.getElementByXid("div3")).show();
										$(this.getElementByXid("div6")).hide();
										this.nextLoad()
										this.success()
										// 成功请求
										$("#messagpickmain").show();
									}.bind(this)
									this.pickOperation(1, fun)
								}
							}.bind(this)
							// /////////////////

							// //////////////////
							var errorItems = function(data) {
								$("#messagpickmain").show();
								this.hintreminder.set("确认并扫描货位");
								this.steppick = 1;
								$(this.getElementByXid("div3")).show();
								$(this.getElementByXid("div6")).hide();
								error && error(data)
							}
							var picksItems = api.picksItems
							picksItems = picksItems.replace(/{orderId}/, pickLang.BatchId)
							picksItems = picksItems.replace(/{positionId}/, pickLang.positionId)
							var data = {
								itemNumber : $(this.getElementByXid("input1")).val()
							}
							var opt = {
								data : data,
								type : "get",
								url : picksItems,
								success : fun,
								error : errorItems
							// 一般不可能报错
							}
							api.mushinyAjax(opt);
						} else {
							$("#messagpickmain").show();
							this.hintreminder.set("确认并扫描货位");
							this.steppick = 1;
							$(this.getElementByXid("div3")).show();
							$(this.getElementByXid("div6")).hide();
							this.spsb1($(this.getElementByXid("input1")).val());
						}
					}
					// 报残
				} else if (this.picktypemain == "D") {
					if (this.stepWaring == 1 && (this.itemNo.get() == $(this.getElementByXid("input1")).val())) {
						this.hintreminder.set("扫描残品车牌");
						$(this.getElementByXid("allocation")).hide();
						$(this.getElementByXid("baoc")).show();
						this.stepWaring = 2;
					} else if (this.stepWaring == 2) { // ///////////////扫描残品车牌请求==>残品请求
						var fun = function(data) {
							var fun = function(data) {
								// ===>>>>>>>>>>>>>>>>>>>hotPick
							}.bind(this)
							var data = JSON.stringify({
								source : pickLang.pickCarId,
								itemDataId : pickLang.picks.itemId,
								destination : data.id,
								amount : this.fqty.get()
							})
							var errorDamage = function(data) {
								var json = eval("(" + data.responseText + ")")
								$("#messagpickmain").show().css("color", "#FFFFFF").css("background", "red").html("<span>" + json.message + "</span>");
							}.bind(this)
							var opt = {
								data : data,
								dataType : "text",
								type : "post",
								url : api.reportGoodsToDamageContainer,
								success : fun(this),
								error : errorDamage(this)
							}
							api.mushinyAjax(opt);
						}.bind(this)
						var errorDamageContainer = function(data) {
							$("#messagpickmain").show().css("color", "#FFFFFF").html("<span>" + data["0"].responseJSON.message + "</span>")
						}
						var data = {
							name : $(this.getElementByXid("input1")).val()
						}
						var opt = {
							data : data,
							type : "get",
							url : api.scanningDamageContainer,
							success : fun(this),
							error : errorDamageContainer(this)
						}
						api.mushinyAjax(opt);
					} else if (this.stepWaring == 3) {
						$(this.getElementByXid("div3")).show();
						$(this.getElementByXid("div6")).hide();
						$(this.getElementByXid("allocation")).show();
						$(this.getElementByXid("baoc")).hide();
						this.hintreminder.set("扫描货位");
						this.stepWaring = 1;
						this.picktypemain = "s";
						this.bcsuccess()
					}
				}
				// 商品丢失
				else if (this.picktypemain == "M") {
					if (this.stepWaring == 1) {
						if (this.hw.get() == $(this.getElementByXid("input1")).val()) {
							this.stepWaring = 2;
							this.hintreminder.set("扫描货位中所有商品");
							$(this.getElementByXid("div3")).hide();
							$(this.getElementByXid("div6")).show();
							$(this.getElementByXid("div9")).show();
							$("#messagpickmain").hide();
						}
					} else if (this.stepWaring == 2) {
						if (this.itemNo.get() != $(this.getElementByXid("input1")).val()) {
							$(this.getElementByXid("div9")).hide();
							$(this.getElementByXid("div10")).show();
							$(this.getElementByXid("div11")).show();
							this.skuid.set($(this.getElementByXid("input1")).val());
						} else {
							var fun = function() {
								this.fqty = this.fqty - 1
								if (this.fqty.get() == 0) {
									this.picktypemain = "s";
									$(this.getElementByXid("div9")).hide();
									$(this.getElementByXid("div10")).hide();
									$(this.getElementByXid("div3")).show();
									$(this.getElementByXid("div6")).hide();
									this.hintreminder.set("扫描货位");
								}
							}.bind(this)
							this.pickOperation(1, fun)
							// 单件拣货请求
						}
					}
				} else if (this.picktypemain == "R11" || this.picktypemain == "R12" || this.picktypemain == "R13" || this.picktypemain == "R12" || this.picktypemain == "R2"
						|| this.picktypemain == "R3" || this.picktypemain == "R4" || this.picktypemain == "R5" || this.picktypemain == "R6" || this.picktypemain == "R7" || this.picktypemain == "R8"
						|| this.picktypemain == "R9") {
					var q = $(this.getElementByXid("input1")).val();
					var type = {
						name : hotKey.aodom[this.picktypemain]
					}
					if (this.type == "R11") {
						q = q.substring(0, len - 3) + String.fromCharCode(q.substring(len - 3, len - 2).charCodeAt() + 1) + q.substring(len - 2, len)
					}
					if (this.type == "R12") {
						q = q.substring(0, len - 3) + String.fromCharCode(q.substring(len - 3, len - 2).charCodeAt() - 1) + q.substring(len - 2, len)
					}
					if (this.type == "R13") {
						q = q.substring(0, len - 3) + (Array(2).join(0) + (parseInt(q.substring(len - 2, len)) + 1)).slice(-2)
					}
					if (this.type == "R14") {
						q = q.substring(0, len - 3) + (Array(2).join(0) + (parseInt(q.substring(len - 2, len)) - 1)).slice(-2)
					}
					var fun = function(me) {
						return function(data) {
							if (data.length > 0) {
								var fun = function(me) {
									return function(data) {
										var fun = function(me) {
											return function(data) {
												$(me.getElementByXid("allocation")).show();
												$("#messaged").show();
												switch (me.picktypemain) {
												case "R11":
												case "R12":
												case "R13":
												case "R14":
													light.R1(q);
													break;
												case "R2":
													light.R2("messagpickmain", $(me.getElementByXid("input1")).val());
													break;
												case "R3":
													light.R3("messagpickmain", $(me.getElementByXid("input1")).val());
													break;
												case "R4":
													light.R4("messagpickmain", $(me.getElementByXid("input1")).val());
													break;
												case "R5":
													light.R5("messagpickmain", $(me.getElementByXid("input1")).val());
													break;
												case "R6":
													light.R6("messagpickmain", $(me.getElementByXid("input1")).val());
													break;
												case "R7":
													light.R7("messagpickmain", $(me.getElementByXid("input1")).val());
													break;
												case "R8":
													light.R8("messagpickmain", $(me.getElementByXid("input1")).val());
													break;
												case "R9":
													light.R9("messagpickmain", $(me.getElementByXid("input1")).val());
													break;
												}
												me.andonInitialize()
											}
										}
										var data = JSON.stringify({
											locationNo : q,
											activateBy : sessionStorage["working"],
											andonMasterTypeId : data.id,
											clientId : sessionStorage["clientId"]
										})
										var opt = {
											data : data,
											type : "post",
											url : api.andonMasters,
											success : fun(me)
										}
										api.mushinyAjaxProblem(opt);
									}
								}
								var opt = {
									data : type,
									type : "get",
									url : api.andonMasterTypes,
									success : fun(me)
								}
								api.mushinyAjaxProblem(opt);
							} else {
								$("#messagpickmain").show();
								$("#messagpickmain").css("color", "#FFFFFF");
								$("#messagpickmain").html("<span>货位不存在</span>")
							}
						}
					}
					var opt = {
						data : 'search=name=="' + $(this.getElementByXid("input1")).val() + '" and warehouse.id==' + sessionStorage["warehouses"],
						type : "get",
						url : api.storageLocations,
						success : fun(this)
					}
					// 检查货位是否存在
					api.mushinyAjax(opt);
				}
				if (this.comp("input1")) {
					this.comp("input1").clear();
				}
			}
		} else if (event.keyCode == "49") {
			var url = require.toUrl('$UI/truk/outbound/pickmenu.w');
			this.comp("input1").clear();
			this.comp('windowDialog1').open({
				src : url,
				params : {
					picktypemain : this.picktypemain
				}
			});
		}

	};
	Model.prototype.showhide = function showhide(so) {
		$(so.getElementByXid("allocation")).show();
		if ($(so.getElementByXid("div3")).is(':hidden')) {
			so.hintreminder.set("检查并扫描商品");
		} else {
			so.hintreminder.set("扫描货位");
		}
	}
	Model.prototype.reBorn = function reBorn() {
		this.steppick = 1;
	}
	Model.prototype.success = function success() {
		var msg = $("#messagpickmain")
		if ($(this.getElementByXid("input3")).val() != '') {
			var html = '<span>已成功拣货</span><span class="spstyle2">' + $(this.getElementByXid("input3")).val() + '件</span><span>商品</span>';
		} else {
			var html = '<span>已成功拣货</span><span class="spstyle2">1件</span><span>商品</span>';
		}
		msg.html(html);
		// $(".waring1").html(html)
		msg.css("text-align", "center");
		msg.css("background", "linear-gradient(#6FAB46,#71B048 )");
	}
	Model.prototype.bcsuccess = function bcsuccess() {
		var msg = $("#messagpickmain")
		var html = '<span class="spstyle4">已成功报残</span><span class="spstyle">1件</span><span class="spstyle4">商品</span></br><span  class="spstyle3">请将残品单独放置在残品区域</span>';
		$("#messagpickmain").html(html);
		// $(".waring1").html(html)
		msg.css("text-align", "center");
		msg.css("background", "linear-gradient(#6FAB46,#71B048 )");
	}
	Model.prototype.dssuccess = function dssuccess(thenA) {
		var msg = $("#messagpickmain")
		var html = '<span class="spstyle4">已成功登记</span><span class="spstyle">' + thenA + '件</span><span class="spstyle4">丢失商品</span>';
		$("#messagpickmain").html(html);
		// $(".waring1").html(html)
		msg.css("text-align", "center");
		msg.css("color", "#FFFFFF");
		msg.css("background", "linear-gradient(#6FAB46,#71B048 )");
	}
	Model.prototype.qtysb = function qtysb() {
		var msg = $("#messagpickmain")
		var html = '<span>输入数量大于需求数量，请确认</span><div style="text-align:center"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="是" xid="button3" onClick="justep.Bind.contextFor(this).$model.canel()" style="background: linear-gradient(#5C81CA,#2F62BB );vertical-align:middle;width:2rem;margin:1rem 0px 0px 0px;"><i xid="i3"></i><span xid="span3">1确定</span></a></div>';
		$("#messagpickmain").html(html);
		// $(".waring1").html(html)
		msg.css("background", "#FF0000");
		msg.css("text-align", "center");
		msg.css("color", "#FFFFFF");
	}
	Model.prototype.amoutLess = function qtysb() {
		var msg = $("#messagpickmain")
		var html = '<span>输入数量小于需求数量，请确认</span><div style="text-align:center;"> <a component="$UI/system/components/justep/button/button" class="btn btn-default clr" label="是" xid="button3" onClick="justep.Bind.contextFor(this).$model.less()" style="vertical-align:middle;width:2rem;margin:1rem 0px 0px 0px;"><i xid="i3"></i><span xid="span3">是</span></a><a onClick="justep.Bind.contextFor(this).$model.canel()" component="$UI/system/components/justep/button/button" class="btn btn-default clr" label="否" xid="button4" style="width:2rem;margin:1rem 0px 0px 10%;"><i xid="i4"></i><span xid="span7">否</span></a></div>';
		$("#messagpickmain").html(html);
		// $(".waring1").html(html)
		msg.css("background", "#FF0000");
		msg.css("text-align", "center");
		msg.css("color", "#FFFFFF");
	}
	Model.prototype.canel = function() {
		this.comp("input3").clear();
		$("#messagpickmain").hide();
	}
	Model.prototype.less = function() {
		var fun = function(data) {
			// pickLang.pickSur = $(this.getElementByXid("input3")).val()
			// pickLang.surplus = this.fqty.get() -
			// parseInt($(this.getElementByXid("input3")).val())
			// this.fqty.set(this.fqty.get() -
			// parseInt($(this.getElementByXid("input3")).val()))
			$("#messagpickmain").show()
			this.success();
			this.nextLoad()
		}.bind(this)
		this.pickOperation(parseInt($(this.getElementByXid("input3")).val()), fun)
	}
	// 货位扫描错误
	Model.prototype.hwsb1 = function hwsb1(thenA) {
		var msg = $("#messagpickmain")
		var html = '<span>货位扫描错误：</span><span >' + thenA + '</span></br><span>请重新扫描货位</span>';
		$("#messagpickmain").html(html);
		// $(".waring1").html(html)
		msg.css("background", "#FF0000");
		msg.css("text-align", "left");
		msg.css("color", "#FFFFFF");
	}
	// 商品扫描错误
	Model.prototype.spsb1 = function spsb1(thenA) {
		var msg = $("#messagpickmain")
		var html = '<span>商品扫描错误：</span><span >' + thenA + '</span><span>，此商品不是需求拣货商品</span></br><span>请将商品放回原货位并重新扫描货位以确认位置</span>';
		$("#messagpickmain").html(html);
		// $(".waring1").html(html)
		msg.css("background", "#FF0000");
		msg.css("text-align", "left");
		msg.css("color", "#FFFFFF");
	}
	Model.prototype.spsb2 = function spsb2() {
		var msg = $("#messagpickmain")
		msg.css("text-align", "left");
		var html = '<span>在此货位中，此商品条码对应</span><span >'
				+ this.fqty.get()
				+ '</span><span>件商品，请再次确认名称是否相符</span><div style="text-align:center"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="是" xid="button3" onClick="justep.Bind.contextFor(this).$model.ck()" style="background: linear-gradient(#5C81CA,#2F62BB );vertical-align:middle;width:2rem;margin:1rem 0px 0px 0px;"><i xid="i3"></i><span xid="span3">1确定</span></a></div>';
		msg.html(html);
		// $(".waring1").html(html)
		msg.css("color", "#FFFFFF");
		msg.css("background", "#FF0000");
	}
	Model.prototype.bc = function bc() {
		var msg = $("#messagpickmain")
		msg.css("text-align", "left");
		var html = '<span>车牌</span><span >toOB0000001</span><span>不是残品车牌，请重新扫描新的残品车牌</span>';
		msg.html(html);
		// $(".waring1").html(html)
		msg.css("color", "#FFFFFF");
		msg.css("background", "#FF0000");
	}
	Model.prototype.nextLoad = function(event) {
		// ////////////////////获取拣货的位置和商品以及下一个货位
		var fun = function(data) {
			pickLang.picks = data
			pickLang.positionId = data.id
			this.hintreminder.set("确认并扫描货位");
			$(this.getElementByXid("input1")).focus();
			$(this.getElementByXid("div3")).show();
			this.comp("input3").clear();
			$(this.getElementByXid("input3")).hide();
			$(this.getElementByXid("div6")).hide();
			this.hw.set(pickLang.picks.locationName) // 货位名
			this.unitType.set(pickLang.picks.unitName); // 套件
			this.itemNo.set(pickLang.picks.itemNumber); // 商品no
			this.fqty.set(pickLang.picks.amount); // 单商品总数
			// /////////
			this.color.set(pickLang.picks.locationColor) // 货位颜色
			if (pickLang.picks.locationColor == "#66FFFF" || pickLang.picks.locationColor == "#FFFF00")
				this.fontColor.set("#000000")
			else {
				this.fontColor.set("#ffffff")
			}
			this.text.set(pickLang.picks.itemName) // 商品名
			// /////////
			this.carQty.set(pickLang.pickCarCount) // 车内商品数量
			this.lostQty.set(pickLang.lostQty) // 批次剩余数量
			this.steppick = 1;
			if (pickLang.picks.next == null) {
				this.finsh = true
			}
			if (pickLang.picks.next != null) {
				this.binName.set("下一货位：" + pickLang.picks.next.locationName) // 下一个货位
			} else {
				this.binName.set("下一货位：无")
			}
			$("#messagpickmain").show();
		}.bind(this)
		// ///////////////////

		// /////////////////////
		var picks = api.picksFrom.replace(/{orderId}/, pickLang.BatchId)
		var opt = {
			type : "get",
			url : picks,
			success : fun
		}
		api.mushinyAjax(opt);
		// /////////////////////////////////////////////
	}
	Model.prototype.andonP = function(event) {
		var fun = function(data) {
			var fun = function(data) {
				$(this.getElementByXid("div3")).hide();
				$(this.getElementByXid("div6")).show();
				this.steppick = 2;
				this.hintreminder.set("检查并扫描商品");
				// me.type = stowMessage.mainType
			}.bind(this);
			var data = JSON.stringify({
				locationNo : this.hw.get(),
				activateBy : sessionStorage["working"],
				andonMasterTypeId : data.id,
				clientId : sessionStorage["clientId"]
			})
			var opt = {
				data : data,
				type : "post",
				url : api.andonMasters,
				success : fun
			}
			api.mushinyAjaxProblem(opt);
		}.bind(this)
		var type = {
			name : hotKey.aodom["P"]
		}
		var opt = {
			data : type,
			type : "get",
			url : api.andonMasterTypes,
			success : fun
		}
		api.mushinyAjaxProblem(opt);
	};
	Model.prototype.modelLoad = function(event) {
		pickLang = window.pickMessage;
		$(this.getElementByXid("input1")).focus() // /主输入框
		this.finsh = false
		this.nextLoad()
	};
	Model.prototype.windowDialog1Receive = function(event) {
		$(this.getElementByXid("input2")).focus();
		var order = event.data;
		switch (order) {
		case "D":
			this.hintreminder.set("扫描受损商品");
			$(this.getElementByXid("input3")).hide();
			$(this.getElementByXid("input1")).focus();
			this.picktypemain = "D";
			this.stepWaring = 1;
			break;
		case "M":
			this.hintreminder.set("确认并再次扫描货位");
			this.picktypemain = "M";
			$(this.getElementByXid("input3")).hide();
			$(this.getElementByXid("input1")).focus();
			this.stepWaring = 1;
			$(this.getElementByXid("div3")).show();
			$(this.getElementByXid("div6")).hide();
			break;
		case "E":
			var self = this
			// ////////////退出

			var fun = function(data) {
				justep.Shell.showPage("outbandstart").done(function() {
					setTimeout(function() {
						self.close()
					}, 0);
				});
			}
			unreserve = api.unreserve.replace(/{orderId}/, pickLang.BatchId)
			var opt = {
				type : "post",
				url : unreserve,
				success : fun
			}

			api.mushinyAjax(opt);
			break;
		case "F":
			var self = this
			// //////////////////////// 手动满筐
			var fun = function(data) {
				pickLang.pickOriginalCar = null;
				justep.Shell.showPage("outbandscancarid").done(function() {
					setTimeout(function() {
						self.close()
					}, 0);
				});
			}

			var pickingCarts = api.pickingCarts.replace(/{pickingUnitLoadId}/, pickLang.pickCarId)
			pickingCarts = pickingCarts.replace(/{orderId}/, pickLang.BatchId)
			var opt = {
				type : "post",
				url : pickingCarts,
				success : fun
			}

			api.mushinyAjax(opt);
			break;
		case "P":
			this.andonP() // /////暗灯 货位无法扫描
			break;
		case "I":
			var url = require.toUrl('$UI/truk/outbound/user.w');
			this.comp('windowDialog3').open({
				src : url
			});
			break;
		case "R11":
			this.picktypemain = "R11"
			this.hintreminder.set("扫描问题货位正上方货位");
			pick.hide(this);
			break;
		case "R12":
			this.picktypemain = "R12"
			pick.hide(this);
			this.hintreminder.set("扫描问题货位正下方货位");
			break;
		case "R13":
			pick.hide(this);
			this.picktypemain = "R13"
			this.hintreminder.set("扫描问题货位正左方货位");
			break;
		case "R14":
			this.picktypemain = "R14"
			pick.hide(this);
			this.hintreminder.set("扫描问题货位正右方货位");
			break;
		case "R2":
			this.picktypemain = "R2"
			pick.hide(this);
			this.hintreminder.set("扫描存在残品的货位");
			break;
		case "R3":
			this.picktypemain = "R3"
			pick.hide(this);
			this.hintreminder.set("扫描存在条码无法扫描商品的货位");
			break;
		case "R9":
			this.picktypemain = "R9"
			pick.hide(this);
			this.hintreminder.set("扫描需要检查的货位");
			break;
		case "R101":
			this.picktypemain = "R101"
			pick.hide(this);
			$(this.getElementByXid("scanning")).show();
			$(this.getElementByXid("input2")).focus();
			$(this.getElementByXid("input2")).focus();
			this.hintreminder.set("扫描输入问题扫描枪号码");
			break;
		case "R102":
			this.picktypemain = "R102"
			pick.hide(this);
			$(this.getElementByXid("scanning")).show();
			$(this.getElementByXid("input2")).focus();
			this.hintreminder.set("扫描输入问题扫描枪号码");
			break;
		case "R103":
			this.picktypemain = "R103"
			pick.hide(this);
			$(this.getElementByXid("scanning")).show();
			$(this.getElementByXid("input2")).focus();
			this.hintreminder.set("扫描输入问题扫描枪号码");
			break;
		case "R104":
			this.picktypemain = "R104"
			pick.hide(this);
			$(this.getElementByXid("scanning")).show();
			$(this.getElementByXid("input2")).focus();
			this.hintreminder.set("扫描输入问题扫描枪号码");
			break;
		default:
			$(this.getElementByXid("panel1")).click()
		}
		;
	}
	Model.prototype.pickOperation = function(amount, func) {
		/*
		 * var datas = JSON.stringify({ locationNo : this.hw.get(), activateBy :
		 * sessionStorage["working"], andonMasterTypeId : data.id, clientId :
		 * sessionStorage["clientId"], itemNo : this.itemNo.get() })
		 */
		var data = JSON.stringify({
			pickingUnitLoadId : pickLang.pickCarId,
			id : pickLang.positionId,
			amountPicked : parseInt(amount),
			amountRemain : pickLang.picks.amount - parseInt(amount),
		})
		var fun = function(data) {
			// //////////////////////批次结束
			if (this.finsh == true && this.finshPick == true) {
				var fun = function() {
					var value = {
						type : "normal"
					};
					var me = this
					justep.Shell.showPage("outbandstart", value).done(function() {
						me.close()
					});
				}.bind(this)
				fun();
				/*
				 * var pickFinish = api.pickFinish.replace(/{positionId}/,
				 * pickLang.positionId) var pickFinish =
				 * pickFinish.replace(/{orderId}/, pickLang.BatchId) var opt = {
				 * data: data, type: "post", url: pickFinish, success: fun }
				 * 
				 * api.mushinyAjax(opt);
				 */

			} else {
				pickLang.pickQty = pickLang.pickQty + amount;
				pickLang.lostQty = pickLang.lostQty - parseInt(amount); // //////////////批次剩余数量更新
				pickLang.pickCarCount = pickLang.pickCarCount + parseInt(amount) // ////////////////车内数量更新
				func && func(data);
			}

		}.bind(this)
		// ////////////

		// ////////////
		var picks = api.picks
		picks = picks.replace(/{positionId}/, pickLang.positionId)
		picks = picks.replace(/{orderId}/, pickLang.BatchId)
		var opt = {
			data : data,
			type : "post",
			url : picks,
			success : fun
		}
		api.mushinyAjax(opt);
	}
	Model.prototype.andonInitialize = function() {
		this.picktypemain = "s"
		if (this.steppick == 1) {
			this.hintreminder.set("扫描货位");
		} else if (this.steppick == 2) {
			this.hintreminder.set("检查并扫描商品");
		}
	}
	Model.prototype.input3Keydown = function(event) {
		if (event.keyCode == "13") {
			if (this.steppick == 3) {
				if ($(this.getElementByXid("input3")).val() && (parseInt($(this.getElementByXid("input3")).val())) < this.fqty.get()) {
					this.finshPick = false; // 单件商品结束 判断
					/*
					 * var fun = function(data) { pickLang.pickSur =
					 * $(this.getElementByXid("input3")).val() pickLang.surplus =
					 * this.fqty.get() -
					 * parseInt($(this.getElementByXid("input3")).val())
					 * this.fqty.set(this.fqty.get() -
					 * parseInt($(this.getElementByXid("input3")).val()))
					 * 
					 * 
					 * 
					 * }.bind(this)
					 * this.pickOperation($(this.getElementByXid("input3")).val(),
					 * fun) // qtysb();
					 */
					$("#messagpickmain").show()
					this.amoutLess();
				} else if ($(this.getElementByXid("input3")).val() == this.fqty.get()) {
					// this.reSet();
					var fun = function(data) {
						$("#messagpickmain").show()
						this.success();
						this.nextLoad()
					}.bind(this)
					this.finshPick = true; // 单件商品结束 判断
					this.pickOperation(this.fqty.get(), fun)
				} else if ($(this.getElementByXid("input3")).val() > this.fqty.get()) {
					this.qtysb();
					$("#messagpickmain").show();
					this.comp("input3").clear();
				}
			}
		}
	};
	Model.prototype.input5Keydown = function(event) {
		if (event.keyCode == "13") {
			var q = parseInt($(this.getElementByXid('input2')).val());
			var type = {
				name : hotKey.aodom[this.picktypemain]
			}
			var fun = function(me) {
				return function(data) {
					var fun = function(me) {
						return function(data) {
							$(me.getElementByXid("allocation")).show();
							$(me.getElementByXid('scanning')).hide();
							$("#messaged").show();
							me.picktypemain = 's';
							me.andonInitialize()
							light.successsgscanid("messagpickmain", q);
						}
					}
					var data = JSON.stringify({
						locationNo : q,
						activateBy : sessionStorage["working"],
						andonMasterTypeId : data.id,
						clientId : sessionStorage["clientId"]
					})
					var opt = {
						data : data,
						type : "post",
						url : api.andonMasters,
						success : fun(me)
					}
					api.mushinyAjaxProblem(opt);
				}
			}
			var opt = {
				data : type,
				type : "get",
				url : api.andonMasterTypes,
				success : fun(this)
			}
			api.mushinyAjaxProblem(opt);
		}
	};
	Model.prototype.panel1Click = function(event) {
		if (this.picktypemain == "s" && this.steppick == 3) {
			$(this.getElementByXid("input3")).focus().select();
		} else if (this.picktypemain == "R101" || this.picktypemain == "R102" || this.picktypemain == "R103" || this.picktypemain == "R104") {
			$(this.getElementByXid("input2")).focus().select();
		} else {
			$(this.getElementByXid("input1")).focus().select();
		}
	};
	Model.prototype.modelActive = function(event) {
		this.picktypemain = "s"
		this.steppick = 1;
		this.pickop = "s";
		this.unitType.set("");
		this.itemNo.set("");
		this.fqty.set("");
		$(this.getElementByXid("span8")).hide();
		this.text.set("")
	};
	Model.prototype.button2Click = function(event) {
		var fun = function(data) {
			var fun = function(data) {
				this.hintreminder.set("扫描货位");
				$(this.getElementByXid("div3")).show();
				$(this.getElementByXid("div6")).hide();
				$(this.getElementByXid("div11")).hide();
				$(this.getElementByXid("div10")).hide();
				$(this.getElementByXid("lostsku")).hide();
				$("#messagpickmain").show()
				this.dssuccess(this.fqty.get())
				this.steppick = 1;
				this.picktypemain = "s";
				// this.type = stowMessage.mainType
			}.bind(this)
			var data = JSON.stringify({
				locationNo : this.hw.get(),
				activateBy : sessionStorage["working"],
				andonMasterTypeId : data.id,
				clientId : sessionStorage["clientId"],
				itemNo : this.itemNo.get()
			})
			var opt = {
				data : data,
				type : "post",
				url : api.andonMasters,
				success : fun(this)
			}
			api.mushinyAjaxProblem(opt);
		}.bind(this)
		var type = {
			name : hotKey.aodom[this.picktypemain]
		}
		var opt = {
			data : type,
			type : "get",
			url : api.andonMasterTypes,
			success : fun(this)
		}
		api.mushinyAjaxProblem(opt);
	};
	/*
	 * Model.prototype.button1Click = function(event) { //
	 * me.hintreminder.set("扫描货位"); $(me.getElementByXid("div3")).show();
	 * $(me.getElementByXid("div6")).hide();
	 * $(me.getElementByXid("div11")).hide();
	 * $(me.getElementByXid("div10")).hide();
	 * $(me.getElementByXid("lostsku")).hide(); $("#messagpickmain").show()
	 * me.dssuccess(me.fqty.get()) me.steppick = 1; me.picktypemain = "s"; };
	 */
	Model.prototype.mainbtnClick = function(event) {
		$(this.getElementByXid("baoc")).hide();
		this.andonInitialize()
		this.stepWaring = 1;
		this.picktypemain = "s";
		$(this.getElementByXid("allocation")).show();
	};
	Model.prototype.modelParamsReceive = function(event) {
	};
	Model.prototype.windowDialog3Receive = function(event) {
		$(this.getElementByXid("panel1")).click()
	};
	return Model;
});