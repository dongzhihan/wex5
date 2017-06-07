define(function (require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var expand = require("$UI/truk/inbandsg/groundexpand");
	var light = require("$UI/truk/js/light")
	var api = require("$UI/truk/js/api");
	var hotKey = require("$UI/truk/js/hotKey");
	var stowMessage = require("$UI/truk/js/STOW");
	this.det = justep.Bind.observable("");

	var Model = function () {
		this.unitName = justep.Bind.observable("");
		this.textName = justep.Bind.observable("");
		this.No = justep.Bind.observable("");
		this.det = justep.Bind.observable("");
		this.carNumber = justep.Bind.observable("");
		this.hsNumber = justep.Bind.observable("");
		this.hintreminder = justep.Bind.observable("检查并扫描商品");
		this.binName = justep.Bind.observable("");
		this.lastStorage = justep.Bind.observable("上一货位：无");
		this.carid = justep.Bind.observable("");
		this.bccar = justep.Bind.observable("");
		this.itemNoOut = "";
		this.sku = "";
		this.callParent();
		this.type = "S";
		this.bccarId = "";
		this.bccarName = "";
		this.BCitemDataId = "";
		this.BCbinId = "";
		this.step = 1;
		this.itemNoEveryTime = '';
	};

	$('body,html').height(document.body.clientHeight);


	Model.prototype.button1Keypress = function (event) {
		if (event.keyCode == "13") {

		}
	};
	$("#scaninput").focus().select();

	// 1>2>1>2
	// 货位需要检查
	// 货位存在无法扫描商品
	// r51 2 3 4

	// 问题货位
	Model.prototype.successsghw = function successsghw(thenA) {
		var msg = $("#messagStow")
		msg.css("text-align", "left");
		var html = '<span class="spstyle3">已成功标记货位：</br></span><span class="spstyle2">' + thenA + '</span></br><span class="spstyle3">货位无法扫描</span></br></br><span class="spstyle3">请扫描商品继续上架</span>'
		msg.html(html);

		msg.css("background", "#6BAD3E");

	}
	Model.prototype.successsgcp = function successsgcp() {
		var msg = $("#messagStow")
		var html = '<span class="spstyle3">已成功放回</span><span class="spstyle2"></span><span class="spstyle3">件商品至</span><span class="spstyle2">' + sessionStorage["containerName"] + '</span>'
		msg.html(html);
		msg.css("background", "#6BAD3E");

	}
	Model.prototype.successsg = function successsg(thenA, thenB) {
		var msg = $("#messagStow")
		var html = '<span class="spstyle3">已成功上架</span><span class="spstyle2">' + thenA + '件</span><span class="spstyle3">商品至</span><span class="spstyle2">' + thenB + '</span>'
		msg.html(html);

		msg.css("background", "#6BAD3E");

	}
	// 报残
	Model.prototype.successsc = function successsc(thenA, me) {
		var msg = $("#messagStow")
		var html = '<span class="spstyle3">已成功报残</span><span class="spstyle2">' + thenA + '件</span><span class="spstyle3">件商品至</span></br><span class="spstyle2">' + me.bccar.get() + '</span>'
		msg.html(html);
		msg.css("background", "#F4BF00");

	}
	// 多货多件
	Model.prototype.successsg2Out = function successsg2Out(thenA) {
		var msg = $("#messagStow")
		var html = '<span>商品：</span><span class="spstyle2">' + this.itemNoEveryTime + '</span></br><span>已成功登记</span><span class="spstyle2">' + thenA +
			'件</span><span>多货至</span><span class="spstyle2">' + sessionStorage["containerName"] + '</span>'
		msg.html(html);
		msg.css("text-align", "left");
		msg.css("background", "#6BAD3E");

	}


	Model.prototype.ck = function (event) {
		$("#messagStow").hide();
		$(this.getElementByXid("input3")).show().focus();

		this.hintreminder.set("请输入多货数量");
		this.flag = 2;
	};


	// 1
	// 双按钮
	Model.prototype.failhwOut = function failhwOut(thenA) {
		var msg = $("#messagStow")
		var html = '<span>商品' + thenA + '不存在，请确认是否要标记多货？</br></span><div style="text-align:center;"> <a component="$UI/system/components/justep/button/button" class="btn btn-default clr" label="是" xid="button3" onClick="justep.Bind.contextFor(this).$model.ck()" style="vertical-align:middle;width:2rem;margin:1rem 0px 0px 0px;"><i xid="i3"></i><span xid="span3">是</span></a><a onClick="justep.Bind.contextFor(this).$model.canel()" component="$UI/system/components/justep/button/button" class="btn btn-default clr" label="否" xid="button4" style="width:2rem;margin:1rem 0px 0px 10%;"><i xid="i4"></i><span xid="span7">否</span></a></div>'
		$("#messagStow").html(html);
		// $(".waring1").html(html)

		msg.css("text-align", "left");
		msg.css("background", "red");
	}
	Model.prototype.failhwOutFir = function failhwOut() {
		var msg = $("#messagStow")
		var html = '<span>商品已经全部上架完成！是否标记多货？</br></span><div style="text-align:center;"> <a component="$UI/system/components/justep/button/button" class="btn btn-default clr" label="是" xid="button3" onClick="justep.Bind.contextFor(this).$model.ck()" style="vertical-align:middle;width:2rem;margin:1rem 0px 0px 0px;"><i xid="i3"></i><span xid="span3">是</span></a><a onClick="justep.Bind.contextFor(this).$model.canel()" component="$UI/system/components/justep/button/button" class="btn btn-default clr" label="否" xid="button4" style="width:2rem;margin:1rem 0px 0px 10%;"><i xid="i4"></i><span xid="span7">否</span></a></div>'
		$("#messagStow").html(html);
		// $(".waring1").html(html)
		this.det.set(html);
		msg.css("text-align", "left");
		msg.css("background", "red");
	}
	Model.prototype.qtyOut = function qtyOut(thenA, thenB, thenC) {
		var msg = $("#messagStow")
		var html = '<span>商品在当前容器中只有</span><span class="spstyle">' +
			thenA +
			'件</span><span>，输入</span ><span class="spstyle">' +
			thenB +
			'件</span ><span>，多余</span><span class="spstyle">' +
			thenC +
			'件</span><span>是否标记为多货？</br></span><div style="text-align:center;"> <a component="$UI/system/components/justep/button/button" class="btn btn-default clr" label="是" xid="button3" onClick="justep.Bind.contextFor(this).$model.qtyOutPost(' +
			thenC +
			',' +
			thenA +
			')" style="vertical-align:middle;width:2rem;margin-top:0.5rem;"><i xid="i3"></i><span xid="span3">是</span></a><a onClick="justep.Bind.contextFor(this).$model.canel()" component="$UI/system/components/justep/button/button" class="btn btn-default clr" label="否" xid="button4" style="margin-left:10%;width:2rem;margin-top:0.5rem;"><i xid="i4"></i><span xid="span7">否</span></a></div>'
		msg.html(html);
		this.det.set(html);
		msg.css("text-align", "left");
		msg.css("background", "red");
	}
	Model.prototype.failhw23 = function failhw23() {
		var msg = $("#messagStow")
		var html = '<span>商品并不在当前容器中，目前在当前容器中已经标记</span><span >1件</span><span>当前商品为多货</br></span><span>请确认是否要再次标记</span><span>1件</span><span>当前商品为多货？</br></span> <div style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn btn-default clr" label="是" xid="button3" style="vertical-align:middle;margin-top:0.5rem;width:2rem;"><i xid="i3"></i><span xid="span3">是</span></a><a component="$UI/system/components/justep/button/button" class="btn btn-default clr" label="否" xid="button4" style="margin-left:10%;margin-top:0.5rem;width:2rem;"><i xid="i4"></i><span xid="span7">否</span></a></div>'
		$("#messagStow").html(html);
		this.det.set(html);
		msg.css("text-align", "left");
		msg.css("background", "red");

	}
	// 1>2>1
	Model.prototype.scanItemData = function failhw1(thenA) {
		var msg = $("#messagStow")
		var html = '<span>商品无效：</span><span class="spstyle">' + thenA + '</span><span>，请重新确认</span>';
		msg.html(html);

		msg.css("background", "red");

	}
	Model.prototype.failhw1 = function failhw1(thenA) {
		var msg = $("#messagStow")
		var html = '<span>货位无效：</span><span class="spstyle">' + thenA + '</span><span>，货位中存在不同供应商相同商品请将商品从货位中取出并重新扫描商品以确认</span>';
		msg.html(html);
		this.det.set(html);
		msg.css("background", "red");

	}
	Model.prototype.failhw2 = function failhw2(thenA) {
		var msg = $("#messagStow")
		var html = '<span>货位无效：</span><span class="spstyle">' + thenA + '</span><span>，货位中商品种类超过系统设置数量请将商品从货位中取出并重新扫描商品以确认</span>';
		msg.html(html);
		// $(".waring1").html(html)
		this.det.set(html);
		msg.css("background", "red");

	}
	Model.prototype.damageCar = function damageCar() {
		var msg = $("#messagStow")
		var html = '<span>该小车不是残品车</span>';
		msg.html(html);
		// $(".waring1").html(html)
		this.det.set(html);
		msg.css("background", "red");

	}
	Model.prototype.failhws3 = function failhws3() {
		var msg = $("#messagStow")
		var html = '<span>商品为有效期商品，但尚未录入有效期请将商品放回原车牌，上架完成后，交给问题处理处</span>';
		msg.html(html);
		// $(".waring1").html(html)
		this.det.set(html);
		msg.css("background", "red");

	}
	Model.prototype.failhwst21 = function failhwst2(thenA) {
		var msg = $("#messagStow")
		var html = '<span>货位无效：</span><span>' + thenA + '</span><span>，货位不存在。</br>请将商品从货位中取出并重新扫描商品以确认</span>';
		$("#messagStow").html(html);
		// $(".waring1").html(html)
		this.det.set(html);
		msg.css("text-align", "left");
		msg.css("background", "red");

	}
	Model.prototype.failhwst2 = function failhwst2() {
		var msg = $("#messagStow")
		var html = '<span>货位无效：</span><span>2-1-A098-067C02</span><span>，货位中商品种类超过系统设置数量。</br>请将商品从货位中取出并重新扫描商品以确认</span>';
		$("#messagStow").html(html);
		// $(".waring1").html(html)
		this.det.set(html);
		msg.css("text-align", "left");
		msg.css("background", "red");

	}
	Model.prototype.failhwst3 = function failhwst3(thenA) {
		var msg = $("#messagStow")
		var html = '<span>货位无效：</span><span>' + thenA + '</span><span>，货位中存在相同名称不同有效期商品。</br>请将商品从货位中取出并重新扫描商品以确认</span>';
		msg.html(html);
		// $(".waring1").html(html)

		msg.css("text-align", "left");
		msg.css("background", "red");

	}

	Model.prototype.failhwst4 = function failhwst4(thenA) {
		var msg = $("#messagStow")
		var html = '<span>货位无效：</span><span>' + thenA + '</span><span>，货位中存在相似商品</br>请将商品从货位中取出并重新扫描商品以确认</span>';
		msg.html(html);
		// $(".waring1").html(html)

		msg.css("text-align", "left");
		msg.css("background", "red");

	}

	Model.prototype.failhw72 = function failhw72(thenA) {
		var msg = $("#messagStow")
		var html = '<div style="text-align:center;"><span class="spstyle2  center-block">' + stowMessage.itemGroupName + '<br/></span></div><span>货位无效：</span><span class="spstyle">' + thenA +
			'</span><span>，商品属性与货位设置不符</br>请将商品从货位中取出并重新扫描商品以确认</span>';
		msg.html(html);
		// $(".waring1").html(html)

		msg.css("background", "red");
		msg.css("text-align", "left");

	}
	Model.prototype.dmageLocation = function failhw72(thenA) {
		var msg = $("#messagStow")
		var html = '<span>货位无效：</span><span>' + thenA + '</span><span>，货位不是残品货位！</span>';
		msg.html(html);
		// $(".waring1").html(html)
		this.det.set(html);
		msg.css("text-align", "left");
		msg.css("background", "red");

	}
	Model.prototype.INVENTORY = function failhw72(thenA) {
		var msg = $("#messagStow")
		var html = '<span>货位无效：</span><span>' + thenA + '</span><span>，货位不是存货货位！</span>';
		msg.html(html);
		// $(".waring1").html(html)
		this.det.set(html);
		msg.css("text-align", "left");
		msg.css("background", "red");

	}
	Model.prototype.div1Click = function (event) {
		/* this.comp('windowDialog').open(); */

	};
	// 菜单页面返回状态控制
	Model.prototype.windowDialogReceive = function (event) {
		$("#scaninput").focus().select();
		var order = event.data;
		if (typeof (order) != "undefined") {
			$("#messagStow").hide();
			$(this.getElementByXid("input3")).hide();
			$("#goodsall").hide();
			this.No.set("");
			this.textName.set("");
			this.unitName.set("");
		}

		switch (order) {
			case "S":
				if (this.step == 1) {
					this.singleton(this);
				}
				break;
			case "Q":
				if (this.step == 1) {
					this.batch(this);
				}
				break;
			case "D":
				this.type = "D";

				this.hintreminder.set("扫描受损商品");
				this.step = 1;
				break;
			case "I":
				var url = require.toUrl('$UI/truk/inbandsg/usermessages.w');
				this.comp('windowDialog2').open({
					src: url
				});
				break;
			case "R":
				var url = require.toUrl('$UI/truk/inbandsg/scanmenu.w');
				this.comp('windowDialog1').open({
					src: url
				});

				break;
			case "R11":
				this.type = "R11"

				this.hintreminder.set("扫描问题货位正上方货位");
				this.step = 1;
				break;
			case "R12":
				this.type = "R12"

				this.hintreminder.set("扫描问题货位正下方货位");
				this.step = 1;
				break;

			case "R13":

				this.type = "R13"
				this.hintreminder.set("扫描问题货位正左方货位");
				this.step = 1;
				break;
			case "R14":
				this.type = "R14"
				this.hintreminder.set("扫描问题货位正右方货位");
				this.step = 1;
				break;
			case "R2":
				this.type = "R2";
				this.hintreminder.set("扫描存在残品的货位");
				this.step = 1;
				break;
			case "R3":
				this.type = "R3";
				this.hintreminder.set("扫描存在条码无法扫描商品的货位");
				this.step = 1;
				break;
			case "R4":
				this.type = "R4";
				this.hintreminder.set("扫描需要检查的货位");
				this.step = 1;
				break;
			case "R5":
				this.type = "R5";
				this.hintreminder.set("扫描需要检查的货位");
				this.step = 1;
				break;
			case "R6":
				this.type = "R6";
				this.hintreminder.set("扫描需要检查的货位");
				this.step = 1;
				break;
			case "R7":
				this.type = "R7";

				this.hintreminder.set("扫描需要检查的货位");
				this.step = 1;
				break;
			case "R8":
				this.type = "R8"
				this.hintreminder.set("扫描需要检查的货位");
				this.step = 1;
				break;
			case "R9":
				this.type = "R9"
				this.hintreminder.set("扫描需要检查的货位");
				this.step = 1;
				break;
			case "R101":
				this.type = "R101"
				this.hintreminder.set("扫描输入问题扫描枪号码");
				this.step = 1;
				expand.show();
				$(this.getElementByXid("input3")).show().focus();

				break;
			case "R102":
				this.type = "R102"
				this.hintreminder.set("扫描输入问题扫描枪号码");
				this.step = 1;
				$(this.getElementByXid("input3")).show().focus();
				break;
			case "R103":
				this.type = "R103"
				this.hintreminder.set("扫描输入问题扫描枪号码");
				$(this.getElementByXid("input3")).show().focus();
				this.step = 1;
				expand.show();
				break;
			case "R104":
				this.type = "R104"
				this.hintreminder.set("扫描输入问题扫描枪号码");
				$(this.getElementByXid("input3")).show().focus();
				this.step = 1;
				expand.show();
				break;
			case "E":
	 
				var me = this;
		
					justep.Shell.showPage('sgend').done(function () {
						setTimeout(function() {
						me.close()
					}, 0);
					});;
		
			
				break;
			default:

		}

	};

	Model.prototype.batch = function batch(me) {
		me.type = "Q";
		stowMessage.mainType = "Q"
		var btnd = $("#sgsp");
		btnd.css("background", "gray");

		var btns = $(this.getElementByXid("button2"));
		btns.css("background", "linear-gradient(#5C81CA,#2F62BB)");
	}
	Model.prototype.singleton = function singleton(me) {
		stowMessage.mainType = "S"
		me.type = "S";
		var btnd = $(this.getElementByXid("button2"));
		btnd.css("background", "gray");

		var btns = $("#sgsp");
		btns.css("background", "linear-gradient(#5C81CA,#2F62BB)");
	}
	// 控制单件批量按钮显示及功能
	Model.prototype.button1Click = function (event) {
		if (this.step == 1 && (this.type == "Q" || this.type == "S")) {
			this.singleton(this);
		}

	};

	// 计算商品在车数量
	Model.prototype.skuCom = function (me, qty) {

		sessionStorage["containerConstantly"] = parseInt(sessionStorage["containerConstantly"]) - parseInt(qty)

		me.hsNumber.set(parseInt(sessionStorage["containerAmount"]) - parseInt(sessionStorage["containerConstantly"]))
		me.carNumber.set(sessionStorage["containerConstantly"])

	}
	Model.prototype.button2Click = function (event) {
		if (this.step == 1 && (this.type == "Q" || this.type == "S")) {
			this.batch(this);
		}
	};

	Model.prototype.div2Keypress = function (event) {

	};
	Model.prototype.initmain = function (me) {

	}
	// 数量多货提交请求
	Model.prototype.qtyOutPost = function (most, out) {

		var fun = function (me) {
			return function (data) {

				$("#messagStow").show();
				$("#messagStow").css("color", "#FFFFFF");
				$("#goodsall").hide();
				me.successsg2Out(most);
				me.No.set("");
				me.textName.set("")
				me.unitName.set("");
				me.comp("input3").clear();
				$(me.getElementByXid("input3")).hide();
				me.hintreminder.set("请检查并扫描商品");
				$("#scaninput").focus();
			}
		}
		var data = JSON.stringify({
			amount: most,
			itemNo: this.No.get(),
			jobType: "STOW",
			state: "OPEN",
			problemType: "More",
			operateCode: "M",

			toContainer: sessionStorage["containerName"]
		})
		// 数量多货
		var opt = {

			data: data,
			type: "post",
			url: api.andonInbounds,
			success: fun(this)
		}
		api.mushinyAjaxProblem(opt);

		var fun = function (me) {
			return function (data) {

				me.step = 1;
				me.hintreminder.set("检查并扫描商品");
				$("#scaninput").focus();
				me.No.set("");
				me.textName.set("")
				me.unitName.set("");
				$(me.getElementByXid("input3")).hide();
				stowMessage.amount = stowMessage.amount - parseInt($(me.getElementByXid("input3")).val());
				me.lastStorage.set("上一货位：" + stowMessage.binName)

				me.carNumber.set(stowMessage.amount)
				me.skuCom(me, out)
			}
		}
		var data = JSON.stringify({
			stowingContainerId: sessionStorage["containerId"],
			itemDataId: stowMessage.itemDataId,
			destinationId: stowMessage.binId,
			amount: out,
			stowingType: "Stow"

		})

		var opt = {
			data: data,
			dataType: "text",
			type: "post",
			url: api.stowingGoods,
			success: fun(this)
		}
		api.mushinyAjax(opt);
	};
	var str = "";

	Model.prototype.input2Keypress = function (ex) {


		// 扫商品错误提示总合
		var errorItemData = function (me) {
			return function (data) {

				// 商品条码无效
				var itemData = $("#scaninput").val();
				if (data.responseJSON.key == "EX_CONTAINER_SKU_NOT_FOUND") {

					me.failhwOut(itemData);
					me.hintreminder.set("确认是否多货");
					me.itemNoOut = $("#scaninput").val();

					$("#messagStow").show();
					$("#messagStow").css("color", "#FFFFFF");

				} else if (data.responseJSON.key == "EX_STOWING_ITEM_DATA_NOT_FOUND") {

					me.failhwOut();
					me.hintreminder.set("确认是否多货");
					me.itemNoOut = $("#scaninput").val();
					$("#messagStow").show();
					$("#messagStow").css("color", "#FFFFFF");

				}
				// 商品为有效期商品,但尚未录入有效期;请将商品放回原车牌,上架完成后,交给问题处理处
				else if (data.responseJSON.key == "EX_LOT_ITEM_DATA_NOT_FOUND_DATE") {

					me.failhws3();
					$("#messagStow").show();
					$("#messagStow").css("color", "#FFFFFF");
				} else if (data.responseJSON.key == "EX_CONTAINER_SKU_AMOUNT_IS_ZERO") {


					me.failhwOut(itemData);
					me.hintreminder.set("确认是否多货");
					me.itemNoOut = $("#scaninput").val();

					$("#messagStow").show();
					$("#messagStow").css("color", "#FFFFFF");
				} else {
					$("#messagStow").show();
					$("#messagStow").css("color", "#FFFFFF").css("background", "red");
					$("#messagStow").html("<span>" + data.responseJSON.message + "</span>");
				}


			}

		}
		var errorStow = function (me) {
			return function (data) {

				// 商品条码无效

				$("#messagStow").show();
				$("#messagStow").css("color", "#FFFFFF").css("background", "red");
				var json = eval("(" + data.responseText + ")")
				$("#messagStow").html("<span>" + json.message + "</span>");
				$(me.getElementByXid("input3")).hide();
				me.type = "reContaine"
				me.reContaineStep = 1;
				me.hintreminder.set("确认并扫描商品");
			}
		}
		// 货位错误集合
		var errorStroage = function (me) {

			return function (data) {

				if (typeof (data.responseJSON) != "undefined") {
					var hw = $("#scaninput").val();
					switch (data.responseJSON.key) {

						case "EX_SCANNING_OBJECT_NOT_FOUND":
							me.failhwst21(hw)
							$("#messagStow").show();
							$("#messagStow").css("color", "#FFFFFF");

							break;
						case "EX_STORAGE_LOCATION_SKU_DIFFERENT_CLIENT":

							me.failhw1(hw)
							$("#messagStow").show();
							$("#messagStow").css("color", "#FFFFFF");
							break;
							// 货位中商品种类超过系统设置数量。
						case "EX_STORAGE_LOCATION_SKU_ITEMS_MAX_AMOUNT":

							me.failhw2(hw)
							$("#messagStow").show();
							$("#messagStow").css("color", "#FFFFFF");
							break;
							// 货位中相同商品不同有效期商品/
						case "EX_STORAGE_LOCATION_SKU_DIFFERENT_LOT":
							me.failhwst3(hw)
							$("#messagStow").show();
							$("#messagStow").css("color", "#FFFFFF");
							break;
							// 货位中存在相同供应商相同SKU的不同商品
						case "EX_STORAGE_LOCATION_SKU_CLIENT_DIFFERENT":
							me.failhwst4(hw)
							$("#messagStow").show();
							$("#messagStow").css("color", "#FFFFFF");
							break;
							// 商品属性与货位设置不符

						case "EX_STORAGE_LOCATION_SKU_DIFFERENT_ITEM_GROUP":

							me.failhw72(hw);
							$("#messagStow").show();
							$("#messagStow").css("color", "#FFFFFF");
							break;
						case "EX_STORAGE_LOCATION_NOT_IS_DAMAGE":
							me.dmageLocation(hw)
							$("#messagStow").show();
							$("#messagStow").css("color", "#FFFFFF");
							break;
						case "EX_STORAGE_LOCATION_NOT_IS_INVENTORY":
							me.INVENTORY(hw)
							$("#messagStow").show();
							$("#messagStow").css("color", "#FFFFFF");
							break;
						default:
							$("#messagStow").show();
							$("#messagStow").css("color", "#FFFFFF");
							$("#messagStow").html("<span>" + data.responseJSON.message + "</span>");
					}

				}
				me.type = "reContaine"
				me.reContaineStep = 1;
				me.hintreminder.set("确认并扫描商品");
			}

		}

		if (ex.keyCode == "13") {
			if ($.trim(ex.target.value) != "") {
				switch (this.type) {
					case "RE":
						if (this.restep == 1) { // 确认商品回车扫描的商品
							if ($("#scaninput").val() == this.sku) {
								this.hintreminder.set("检查并扫描商品");
								$("#scaninput").focus();
								this.restep = 2;

							}

						} else if (this.restep == 2) {
							if ($("#scaninput").val() == this.sku) {
								this.hintreminder.set("扫描货位/上架车牌");
								this.restep = 2;

							}
						}
						break;
					case "reContaine":
						if (this.reContaineStep == 1) {
							if ($("#scaninput").val() == this.No.get()) {
								this.hintreminder.set("扫描货位/上架车牌");
								this.reContaineStep = 2;
								$("#messagStow").hide()
							} else {
								this.scanItemData($("#scaninput").val())
								$("#messagStow").show();
								$("#messagStow").css("color", "#FFFFFF");
							}

						} else if (this.reContaineStep == 2) {
							if ($("#scaninput").val() == sessionStorage["containerName"]) {
								this.reContaineStep = -1;
								this.hintreminder.set("检查并扫描商品");
								$("#scaninput").focus();
								this.type = stowMessage.mainType;

								this.step = 1;

								$("#messagStow").hide();
								this.No.set("");
								this.textName.set("")
								this.unitName.set("");
								$("#messagStow").show();
								$("#messagStow").css("color", "#FFFFFF");
								this.successsgcp();
							} else {
								this.step = 2
								this.type = stowMessage.mainType;
								this.input2Keypress(ex)
							}
						}


						break;
					case "S":
					case "Q":
						{
							this.itemNoEveryTime = $("#scaninput").val();
							if (this.step == 1) {
								$("#goodsall").hide();
								var fun = function (me) {
									return function (data) {

										stowMessage.itemGroupName = data.itemData.itemGroup.name

										me.unitName.set(data.itemData.itemUnit.name);
										stowMessage.itemDataId = data.itemData.id;
										stowMessage.itemDataqty = data.amount;
										me.No.set(data.itemData.itemNo);
										me.textName.set(data.itemData.name);
										me.hintreminder.set("扫描货位");
										me.step = 2;
										$("#messagStow").hide();

									}
								}
								var data = {
									containerId: sessionStorage["containerId"],
									itemNo: $("#scaninput").val()
								}

								var opt = {
									data: data,
									type: "get",
									url: api.scanContainerItemData,
									success: fun(this),
									error: errorItemData(this),
								}
								$("goodsall").hide();

								api.mushinyAjax(opt);

							} else if (this.step == 2) {
								var fun = function (me) {
									return function (data) {

										me.binName.set(data.name);
										stowMessage.binName = data.name;
										stowMessage.binId = data.id;

										$("#goodsall").css("background", data.color);
										// 批量逻辑
										if (me.type == "Q") {

											var fun = function (me) {
												return function (data) {

													$("#goodsall").show();
													me.hintreminder.set("请输入数量");

													me.comp("input3").clear();
													$(me.getElementByXid("input3")).show().focus();
													// $("#qty").focus().select();
													me.step = 3
												}
											}

											var data = {
												containerId: sessionStorage["containerId"],
												itemDataId: stowMessage.itemDataId,
												name: $("#scaninput").val()
											}

											var opt = {
												data: data,
												type: "get",
												url: api.scanStorageLocation,
												success: fun(me),
												error: errorStroage(me)
											}

											api.mushinyAjax(opt);
										}
										// 单个上架
										else {
											var fun = function (me) {
												return function (data) {

													me.step = 1;
													me.hintreminder.set("检查并扫描商品");
													$("#scaninput").focus();
													me.lastStorage.set("上一货位：" + stowMessage.binName)
													me.No.set("");
													me.textName.set("")
													me.unitName.set("");
													me.successsg(1, stowMessage.binName);
													$("#messagStow").show();
													$("#messagStow").css("color", "#FFFFFF");
													me.skuCom(me, 1);
												}
											}
											var data = JSON.stringify({
												stowingContainerId: sessionStorage["containerId"],
												itemDataId: stowMessage.itemDataId,
												destinationId: stowMessage.binId,
												amount: 1,
												stowingType: "Stow"

											})
											var opt = {
												data: data,
												dataType: "text",
												type: "post",
												url: api.stowingGoods,
												success: fun(me),
												error: errorStow(me)
											}
											// 上架
											api.mushinyAjax(opt);

										}
									}
								}

								var data = {
									containerId: sessionStorage["containerId"],
									itemDataId: stowMessage.itemDataId,
									name: $("#scaninput").val()
								}

								var opt = {
									data: data,
									type: "get",
									url: api.scanStorageLocation,
									success: fun(this),

									error: errorStroage(this)
								}
								// 扫货位
								api.mushinyAjax(opt);

							}

						}

						break;
						// 报残 报残和批量上架操作基本一致
					case "D":
						{
							if (this.step == 1) {

								var fun = function (me) {
									return function (data) {

										stowMessage.itemGroupName = data.itemData.itemGroup.name
										stowMessage.itemDataqty = data.amount;
										me.unitName.set(data.itemData.itemUnit.name);

										me.No.set(data.itemData.itemNo);
										me.BCitemdataId = data.itemData.id
										$(me.getElementByXid("baoc")).show();
										me.textName.set(data.itemData.name);
										me.hintreminder.set("扫描残品车牌");
										me.step = 2;
										$("#messagStow").hide();

									}
								}
								var data = {
									containerId: sessionStorage["containerId"],
									itemNo: $("#scaninput").val()
								}

								var opt = {
									data: data,
									type: "get",
									url: api.scanContainerItemData,
									success: fun(this),
									error: errorItemData(this),
								}
								api.mushinyAjax(opt);

							} else if (this.step == 2) {
								var error = function (me) {
									return function (data) {
										$("#messagStow").show();
										$("#messagStow").css("color", "#FFFFFF");
										me.damageCar()

									}
								}
								var fun = function (me) {
									return function (data) {
										$("#messagStow").hide();
										me.bccar.set(data.name)
										me.bccarId = data.id;
										me.hintreminder.set("输入残品数量");
										$(me.getElementByXid("baoc")).hide();

										$(me.getElementByXid("carid")).show();
										$(me.getElementByXid("input3")).show();
										me.step = 3;
									}
								}
								var errorDamageContainer = function (data) {
									$("#messagStow").show();
									$("#messagStow").css("color", "#FFFFFF");
									$("#messagStow").html("<span>" + data["0"].responseJSON.message + "</span>")
								}
								var data = {

									name: $("#scaninput").val()
								}

								var opt = {
									data: data,
									type: "get",
									url: api.scanningDamageContainer,
									success: fun(this),
									error: errorDamageContainer(this)
								}
								api.mushinyAjax(opt);

							}

						}
						break;
				}
				//暗灯
				if (this.type == "R11" || this.type == "R12" || this.type == "R13" || this.type == "R12" || this.type == "R2" || this.type == "R3" || this.type == "R4" || this.type == "R5" ||
					this.type == "R6" || this.type == "R7" || this.type == "R8" || this.type == "R9") {

					var q = $("#scaninput").val();
					var len = q.length;

					var type = {
						name: hotKey.aodom[this.type]
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
					var fun = function (me) {
						return function (data) {

							if (data.length > 0) {
								var fun = function (me) {
									return function (data) {
										var fun = function (me) {

											return function (data) {
												expand.goodsallshow();
												me.step = 1;
												$("#messagStow").show();
												$("#messagStow").css("color", "#FFFFFF");

												switch (me.type) {

													case "R11":
													case "R12":
													case "R13":
													case "R14":

														me.successsghw(q);
														break;
													case "R2":
														light.hwquestionR2sg("messagStow", $("#scaninput").val());
														break;
													case "R3":
														light.hwquestionR3sg("messagStow", $("#scaninput").val());
														break;
													case "R4":
														light.hwquestionR4sg("messagStow", $("#scaninput").val());
														break;
													case "R5":
														light.hwquestionR5sg("messagStow", $("#scaninput").val());
														break;
													case "R6":
														light.hwquestionR6sg("messagStow", $("#scaninput").val());
														break;
													case "R7":
														light.hwquestionR7sg("messagStow", $("#scaninput").val());
														break;
													case "R8":
														light.hwquestionR8sg("messagStow", $("#scaninput").val());
														break;
													case "R9":
														light.hwquestionR9sg("messagStow", $("#scaninput").val());
														break;

												}
												me.hintreminder.set("检查并扫描商品");
												$("#scaninput").focus();
												me.type = stowMessage.mainType
											}
										}

										var data = JSON.stringify({
											locationNo: q,
											activateBy: sessionStorage["working"],
											andonMasterTypeId: data.id,
											clientId: sessionStorage["clientId"]
										})
										var opt = {

											data: data,
											type: "post",
											url: api.andonMasters,
											success: fun(me)
										}
										api.mushinyAjaxProblem(opt);

									}

								}
								var opt = {
									data: type,
									type: "get",
									url: api.andonMasterTypes,
									success: fun(me)
								}
								api.mushinyAjaxProblem(opt);
							} else {
								$("#messagStow").show();
								$("#messagStow").css("color", "#FFFFFF");
								$("#messagStow").html("<span>货位不存在</span>")
							}

						}

					}

					var opt = {

						data: 'search=name=="' + q + '" and warehouse.id==' + sessionStorage["warehouses"],
						type: "get",
						url: api.storageLocations,
						success: fun(this)

					}

					// 检查货位是否存在
					api.mushinyAjax(opt);
				}

			}
		} ////
		else {

			switch (ex.keyCode) {
				/*		case 69:

							var param = {
								url : "sgend",
								data : {}
							}
							var me=this;
						justep.Shell.showPage(param).done( function(){me.close()});;*/
				//break;
				case 49:
					// this.hintreminder.set("确认是否多货");

					var url = require.toUrl('$UI/truk/inbandsg/sgmenu.w');
					this.comp('windowDialog1').open({
						src: url
					});
					break;

				default:

			}


		}
	};

	Model.prototype.initStow = function (me) {
		this.singleton(this);
		// 得到小车内商品数量并存储
		stowMessage.mainType = "S"
		$("#scaninput").focus()
		me.skuCom(me, 0);

	}
	Model.prototype.modelLoad = function (event) {
		this.initStow(this)
		$("#scaninput").focus();
		this.lastStorage.set("上一货位：无")

	};

	Model.prototype.modelActive = function (event) {

		this.step = 1;
		this.comp("windowDialog").close();
		this.lastStorage.set("上一货位：无")
		$(".waring1").empty();
		this.unitName.set("");
		this.textName.set("");
		this.No.set("");
		this.initStow(this)
		$("#scaninput").focus();
	};

	Model.prototype.button3Click = function (event) {

	};

	Model.prototype.modelInactive = function (event) {
		$("#messagStow").hide();
	};

	Model.prototype.input3Keydown = function (event) {
		if ($.trim(event.target.value) != "") {

			if (event.keyCode == "13") {

				// 问题扫描枪
				if (this.type == "R101" || this.type == "R102" || this.type == "R103" || this.type == "R104") {
					var type = {
						name: "10"
					}

					var q = $(this.getElementByXid("input3")).val();

					var fun = function (me) {
						return function (data) {
							var fun = function (me) {

								return function (data) {
									me.hintreminder.set("检查并扫描商品");
									$("#scaninput").focus();
									me.step = 1;
									me.type = stowMessage.mainType
									$("#messagStow").show();
									$("#messagStow").css("color", "#FFFFFF");
									light.successsgscanid("messagStow", q)
									$(me.getElementByXid("input3")).hide()
								}
							}
							var data = JSON.stringify({
								locationNo: q,
								activateBy: sessionStorage["working"],
								andonMasterTypeId: data.id,
								clientId: sessionStorage["clientId"]
							})

							var opt = {

								data: data,
								type: "post",
								url: api.andonMasters,
								success: fun(me)
							}
							api.mushinyAjaxProblem(opt);
						}
					}

					var opt = {
						data: type,
						type: "get",
						url: api.andonInbounds,
						success: fun(this)
					}
					api.mushinyAjaxProblem(opt);
				} else if (this.type == "Q" && this.flag != 2) {

					var qty = parseInt($(this.getElementByXid("input3")).val());

					if ((stowMessage.itemDataqty - qty) < 0) {

						$("#messagStow").show();
						$("#messagStow").css("color", "#FFFFFF");
						this.qtyOut(stowMessage.itemDataqty, qty, qty - stowMessage.itemDataqty)
						qty = stowMessage.itemDataqty
					} else {
						var fun = function (me) {
							return function (data) {

								me.step = 1;
								me.hintreminder.set("检查并扫描商品");
								$("#scaninput").focus();
								me.No.set("");
								me.textName.set("")
								me.unitName.set("");
								$(me.getElementByXid("input3")).hide();

								me.lastStorage.set("上一货位：" + stowMessage.binName)
								me.skuCom(me, qty);
								$("#goodsall").hide();
								me.successsg($(me.getElementByXid("input3")).val(), stowMessage.binName);
								$("#messagStow").show();
								$("#messagStow").css("color", "#FFFFFF");

							}

						}
						var data = JSON.stringify({
							stowingContainerId: sessionStorage["containerId"],
							itemDataId: stowMessage.itemDataId,
							destinationId: stowMessage.binId,
							amount: qty,
							stowingType: "Stow"

						})
						var errorStow = function (me) {
							return function (data) {

								// 商品条码无效
								$("#messagStow").show();
								$("#messagStow").css("color", "#FFFFFF").css("background", "red");
								var json = eval("(" + data.responseText + ")")
								$("#messagStow").html("<span>" + json.message + "</span>");
								$(me.getElementByXid("input3")).hide();
								me.type = "reContaine"
								me.reContaineStep = 1;
								$("#goodsall").hide();
								me.hintreminder.set("确认并扫描商品");
							}
						}
						var opt = {
							data: data,
							dataType: "text",
							type: "post",
							url: api.stowingGoods,
							success: fun(this),
							error: errorStow(this)
						}
						api.mushinyAjax(opt);
					}

				} else if (this.flag == 2) {
					this.hintreminder.set("请确认多货");


					var fun = function (me) {
						return function (data) {

							$("#messagStow").show();
							$("#messagStow").css("color", "#FFFFFF");
							$("#goodsall").hide();
							me.successsg2Out($(me.getElementByXid("input3")).val());
							me.No.set("");
							me.textName.set("")
							me.unitName.set("");
							me.comp("input3").clear();
							me.flag = 1;
							$(me.getElementByXid("input3")).hide();
							me.hintreminder.set("请检查并扫描商品");
							$("#scaninput").focus();
						}
					}

					var datas = JSON.stringify({
						amount: $(this.getElementByXid("input3")).val(),
						itemNo: this.itemNoOut,
						jobType: "STOW",
						state: "OPEN",
						problemType: "More",
						operateCode: "M",

						toContainer: sessionStorage["containerName"]
					})
					// 数量多货
					var opt = {

						data: datas,
						type: "post",
						url: api.andonInbounds,
						success: fun(this)
					}
					api.mushinyAjaxProblem(opt);



				} else if (this.type == "D") {
					var errorDamage = function (me) {
						return function (data) {

							var json = eval("(" + data.responseText + ")")

							$("#messagStow").show();
							$("#messagStow").css("color", "#FFFFFF").css("background", "red");
							$("#messagStow").html("<span>" + json.message + "</span>");


						}
					}
					if (parseInt($(this.getElementByXid("input3")).val()) <= stowMessage.itemDataqty) {
						var fun = function (me) {
							return function (data) {
								$("#messagStow").hide();
								$(me.getElementByXid("carid")).hide();
								$(me.getElementByXid("input3")).hide();
								me.No.set("");
								me.textName.set("");
								me.unitName.set("");
								me.successsc($(me.getElementByXid("input3")).val(), me);
								me.skuCom(me, $(me.getElementByXid("input3")).val())
								stowMessage.damageqty = parseInt(stowMessage.damageqty) + parseInt($(me.getElementByXid("input3")).val())

								me.comp("input3").clear();
								me.type = stowMessage.mainType
								me.step = 1


								$("#messagStow").show();
								$("#messagStow").css("color", "#FFFFFF");
								me.hintreminder.set("检查并扫描商品");
								$("#scaninput").focus();
								$("#messagStow").css("color", "black");
							}
						}

						var data = JSON.stringify({
							source: sessionStorage["containerId"],
							itemDataId: this.BCitemdataId,
							destination: this.bccarId,
							amount: $(this.getElementByXid("input3")).val()


						})

						var opt = {
							data: data,
							dataType: "text",
							type: "post",
							url: api.reportGoodsToDamageContainer,
							success: fun(this),
							error: errorDamage(this)
						}
						api.mushinyAjax(opt);

					} else {
						$("#messagStow").show();
						$("#messagStow").css("color", "#FFFFFF");
						$("#messagStow").html("<span>商品数量不符,系统中最大为" + stowMessage.itemDataqty + "</span>");
					}
				}
			}
		}
	};

	Model.prototype.panel1Click = function (event) {

		if (this.type == "D" && this.step == 3 || this.type == "Q" && this.step == 3 || this.flag == 2 || this.type == "R101" || this.type == "R102" || this.type == "R103" || this.type == "R104") {

			$(this.getElementByXid("input3")).focus().select();
		} else {

			$("#scaninput").focus().select();
		}
	};

	// 管控底层div显示问题
	Model.prototype.input1Blur = function (event) {
		$(this.getElementByXid("div2")).css("position", "fiexd");
	};

	Model.prototype.input3Focus = function (event) {

	};

	Model.prototype.input3Blur = function (event) {
		$(this.getElementByXid("div2")).css("position", "fiexd");
	};

	// 多条码list按钮
	Model.prototype.li1Click = function (event) {

		var row = event.bindingContext.$object;

		var itemUnit = row.children();

		this.hintreminder.set("扫描货位");
		this.step = 2;
		stowMessage.itemDataId = row.row.id;

		this.unitName.set(row.row.itemUnit.name);

		this.No.set(row.val("itemNo"));
		this.textName.set(row.val("name"));
		$(this.getElementByXid("list1")).hide();
		$("#messagStow").hide();

	};

	Model.prototype.mainbtnClick = function (event) {
		this.hintreminder.set("检查并扫描商品");
		this.step = 1;
		this.No.set("");
		this.textName.set("");
		this.unitName.set("");
		this.type = stowMessage.mainType
		$("#messagStow").hide();
		$(this.getElementByXid("baoc")).hide();
	};
	Model.prototype.canel = function (event) {
		this.hintreminder.set("请确认商品");
		$("#messagStow").hide();
	};
	Model.prototype.returnStep = function (event) {
		this.hintreminder.set("检查并扫描商品");
		$("#scaninput").focus();
		this.step = 1;

	};

	Model.prototype.windowDialog2Receive = function (event) {
		$("#scaninput").focus();
	};

	return Model;
});