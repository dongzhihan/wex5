define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var pick ;
	var api = require("$UI/truk/js/api");
	// require("$UI/system/lib/cordova/cordova");

	// require("cordova!ionic-plugin-keyboard-master");
	// require("http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js");
	var Model = function() {
		this.callParent();

		$(this.getElementByXid("input1")).focus().select();
		this.storageLocation = justep.Bind.observable("");
		this.pickType = justep.Bind.observable("");
		this.pickOriginalCar = justep.Bind.observable("");
	};
	var str = "";

	/*
	 * window.onkeydown = function(e){
	 * 
	 * if (e.keyCode == "13") {
	 * 
	 * //回车执行查询 console.log(str); window.onkeydown =null; } else {
	 * str=str+e.key; } }
	 */

	Model.prototype.mainbtnClick = function(event) {

		// this.comp('windowDialog1').open({src:url});
		var self=this
		justep.Shell.showPage("outbandstart").done(function() {
					self.close()
				});

		/*
		 * this.comp("messagepickialog1").show({ type : "yesno", title :
		 * "qwe123",s message : "message", });
		 */
	};

	Model.prototype.panel1Keypress = function(event) {

	};
	Model.prototype.input1Keypress = function(event) {

	};

	Model.prototype.messagepickialog1Yes = function(event) {

		// this.comp('windowDialog1').open({src:url});
		justep.Shell.showPage("login3");

	};

	function qusetion1() {

		var html = "   <span>车牌</span><span>toOB0000001</span><span>内有</span><span>200</span><span>件商品，请扫描新的车牌，并将该车推到问题处理区</span>";
		$("#messagepick").html(html);
		// $(".waring1").html(html)

		$("#messagepick").css("background-color", "red");

	}

	function qusetion2() {

		var html = "   <span>车牌</span><span>toOB0000001</span><span>已分配给批次</span></br><span>800987</span><span>，请扫描新的车牌，并将该车推到问题处理区</span>";
		$("#messagepick").html(html);
		// $(".waring1").html(html)

		$("#messagepick").css("background-color", "red");

	}

	function qusetion3() {

		var html = '   <span>车牌</span><span>toOB0000001</span><span>属性设置不能拣该批次的商品，请扫描新的车牌【</span><span class="spstyle4">容器的类型区分</span><span>】</span>';
		$("#messagepick").html(html);
		// $(".waring1").html(html)

		$("#messagepick").css("background-color", "red");

	}

	function qusetion4() {

		var html = "   <span>拣货权限内没有相应工作，请联系组长或经理更改权限</span>";
		$("#messagepick").html(html);
		// $(".waring1").html(html)

		$("#messagepick").css("background-color", "red");

	}
	Model.prototype.input2Keypress = function(e) {
		var error = function(me) {
			return function(data) {
				$("#messagepick").show().css("color", "#FFFFFF").css("opacity", 1).html("<span>" + data.responseJSON.message + "</span>")
							me.comp("input2").clear();
			}
		}
		if (e.keyCode == "13") {
			if (this.pickOriginalCar.get()) {
				if ($(this.getElementByXid("input2")).val() != this.pickOriginalCar.get()) {
           
					return error(this)({
						responseJSON : {
							message : $(this.getElementByXid("input2")).val() + "车牌扫描错误"
						}
					});
				}
			}

			var fun = function(data) { // 扫车请求
				var self = this
				pick.pickCarCount = data.amountTotal;
				pick.pickCar = data.containerName;
				pick.pickCarId = data.id;
				justep.Shell.showPage("pickusermessages").done(function() {
					self.close()
				});
			}.bind(this)
			// /////////////////
			var pickingContainers = api.pickingContainers
			pickingContainers = pickingContainers.replace(/{orderId}/, pick.BatchId)
			var data = {
				containerName : $(this.getElementByXid("input2")).val()
			}
			var opt = {
				data : data,
				type : "get",
				url : pickingContainers,
				success : fun,
				error : error(this)
			}
			api.mushinyAjax(opt);
			/*
			 * var self=this
			 * justep.Shell.showPage("pickusermessages").done(function() {
			 * self.close()
			 * pick.pickCarId="6ae7d4df-3bf1-49b3-98b3-3acb9f9d7873" });
			 */
			this.comp("input2").clear();
		}
             
	};

	Model.prototype.modelLoad = function(event) {
		pick = window.pickMessage;
		this.storageLocation.set(pick.firstLocationName);
		this.pickType.set(pick.pickType);
		this.pickOriginalCar.set(pick.pickOriginalCar);
		$(this.getElementByXid("input2").focus());
	};

	Model.prototype.panel1Click = function(event) {
		$(this.getElementByXid("input2").focus());
	};

	Model.prototype.modelActive = function(event) {
		pick = window.pickMessage;
		this.storageLocation.set(pick.firstLocationName)
		this.pickType.set(pick.pickType)
		this.pickOriginalCar.set(pick.pickOriginalCar)
		$(this.getElementByXid("input2").focus())
	};

	return Model;
});