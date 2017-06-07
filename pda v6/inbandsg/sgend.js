define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var api = require("$UI/truk/js/api");
	var stowMessage = require("$UI/truk/js/STOW");
	var Model = function() {
		this.callParent();
		this.car = justep.Bind.observable("");
		this.stationqty = justep.Bind.observable("");
		this.details = justep.Bind.observable("");
		this.color = justep.Bind.observable("");
		this.bgcolor = justep.Bind.observable("");
		this.carNumber = justep.Bind.observable("");
		this.hsNumber = justep.Bind.observable("");
		this.lastStorage = justep.Bind.observable("");
		this.amount = -1;
	};
	//创建初始div内容
	this.details = justep.Bind.observable("");
	//退回扫描车牌页面
	Model.prototype.quitclick = function(event) {
		justep.Shell.showPage("login4");  //选择inbound界面  >路由匹配在index.js
		//justep.Shell.showPage("scancar_id", {"data" : 1}).done(function(){
		// self.close();
		//执行后事件中关闭当前页
		//  });
		//     justep.Shell.showPage("scancar_id");
	};

	Model.prototype.quitthatclick = function(event) {

		this.outthat();

	};
	Model.prototype.sleepclick = function(event) {

		outsleep();
	};
	Model.prototype.outmessageclick = function(event) {

		var url = require.toUrl('inbandsg/ground.w');
		//this.comp('windowDialog1').open({src:url});
		justep.Shell.showPage("ground");
	};
	Model.prototype.windowReceiver1Receive = function(event) {

	};

	//
	function sgcgcp() {

		var html = '<span>成功关闭车牌</span><div style="text-align:left;"><span class="spstyle3">此车牌共登记</span><span class="spstyle2">1件残品</span><span class="spstyle3">，</span><span class="spstyle2">1件多货</span><span>，请将以上商品连同问题车辆交至问题处理处</span></br></br><span style="class">点击继续开始新的车牌上架</span></br></br></div><a component="$UI/system/components/justep/button/button" class="btn btn-default center-block" bind-click="quitclick" label="继续" xid="button3" onClick="justep.Bind.contextFor(this).$model.quitclick()" style="vertical-align:middle;display:block;width:40%; "><i xid="i3"></i><span xid="span3">继续</span></a>'

		// this.details.set(html);
		var message = $("#message")
		message.html(html);
		message.css("color", "#FFFFFF");
		message.css("background-color", "#69AB3C");

	}
	function sgcg(outQty) {
		var html = '</br></br><span bind-click="">成功关闭车牌</span></br></br>'
		if (stowMessage.damageqty != 0 || outQty != 0) {
			html = html + '<span class="spstyle3">此车牌共登记</span>'
		}
		if (stowMessage.damageqty != 0) {
			html = html + '<span>，</span><span class="spstyle2">' + stowMessage.damageqty + '件残品</span><span>，'
		}
		if (outQty != 0) {
			html = html + '<span>，</span><span class="spstyle2">' + outQty + '件多货</span><span>，'
		}
		if (stowMessage.damageqty != 0 || outQty != 0) {
			html = html + '<span class="spstyle3">请将以上商品连同问题车辆交至问题处理处</span></br>'
		}
		html = html
				+ '<span>点击继续开始新的车牌上架</span></br></br></br></br><a component="$UI/system/components/justep/button/button" class="btn btn-default center-block" bind-click="justep.Bind.contextFor(this).$model.quitclick()" label="继续" xid="button3" onClick="justep.Bind.contextFor(this).$model.quitclick()" style="vertical-align:middle;display:block;width:40%; 	box-shadow: 0rem 0.1rem 0.1rem #8b8b8b;"><i xid="i3"></i><span xid="span3">继续</span></a>'
		// this.details.set(html);
		var message = $("#message")
		message.html(html);
		message.css("color", "#FFFFFF");
		message.css("background-color", "#69AB3C");

	}
	//div强制退出渲染
	Model.prototype.outthat = function outthat() {
		var outQty = 0;
		var fun = function(data) {
			outQty = data;
		}
		var opt = {
			data : {
				toContainer : sessionStorage["containerName"]
			},
			type : "get",
			url : api.andonInbounds,
			success : fun
		}
		api.mushinyAjaxProblem(opt);
		var the = this
		var fn = function(data) {
			var html = '<div style="text-align:left;"><span >成功选择</span><span class="spstyle2">强制退出</span><span>模式，' + data
					+ '件商品已经通知问题处理人员</br></span><span>此车牌共登记</span><span class="spstyle2"></span>'
			if (stowMessage.damageqty != 0) {
				html = html + '<span>，</span><span class="spstyle2">' + stowMessage.damageqty + '件残品</span><span>，'
			}
			if (outQty != 0) {
				html = html + '<span>，</span><span class="spstyle2">' + outQty + '件多货</span><span>，'
			}

			html = html
					+ '</span><span class="spstyle2">'
					+ data
					+ '件少货</span><span>，请将以上商品和车牌交至问题处理处</br></span><span>点击继续开始新的车牌上架</span><a component="$UI/system/components/justep/button/button" class="btn btn-default center-block" bind-click="quitclick" label="继续" xid="button3" onClick="justep.Bind.contextFor(this).$model.quitclick()" style="vertical-align:middle;display:block;width:40%;background: linear-gradient(#5C81CA,#2F62BB );	box-shadow: 0rem 0.1rem 0.1rem #8b8b8b;"><i xid="i3"></i><span xid="span3">继续</span></a>'

			// this.details.set(html);
			var message = $("#message")
			message.html(html);
			message.css("color", "black");
			message.css("background-color", "#F4B183");
		}
		var datas = {
			containerId : sessionStorage["containerId"]
		}
		// 数量多货
		var opt = {
			data : datas,
			type : "get",
			url : api.andonInbounds,
			success : fn
		}
		api.mushinyAjaxProblem(opt);
	}
	//div中途休息渲染
	function outsleep() {
		var html = '</br><span>成功选择</span><span class="spstyle2">中途休息</span><span>模式，休息完成后扫描车牌继续上架或直接退出上架系统</span></br></br></br><a component="$UI/system/components/justep/button/button" class="btn btn-default center-block" label="继续" xid="button3"  onClick="justep.Bind.contextFor(this).$model.quitclick()" style="vertical-align:middle;display:block;width:5rem; "><i xid="i3"></i><span xid="span3">退出上架系统</span></a>'

		//   this.details.set(html);
		var message = $("#message")
		message.html(html);
		message.css("color", "#FFFFFF");
		message.css("background-color", "#65A739");
	}

	function succcess() {

		var html = '   <span>成功关闭车牌点击继续开始新的车牌上架</span><a component="$UI/system/components/justep/button/button" class="btn btn-default center-block" label="继续" xid="button3" style="vertical-align:middle;display:block;width:40%;background: linear-gradient(#5C81CA,#2F62BB );	box-shadow: 0rem 0.1rem 0.1rem #8b8b8b;"><i xid="i3"></i><span xid="span3">是</span></a>'
		var message = $("#message")
		message.html(html);
		message.css("background-color", "#65A739");

	}
	function outmessage() {

		var html = ' <div style="text-align:left;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="rowr1"> <div class="x-col" xid="colr2">    <span xid="spanr8">车牌剩余数据</span> <span xid="spanr9">XX</span> <span xid="spanr10">个，关闭车牌后，将全部反馈至问题处理人员</span></br><span>请扫描组长或经理工卡以确认。如操作失误，请点击下方按钮。</span></div> </div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="rowr3"> <div class="x-col" xid="colr7"> <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="操作失误重新选择" xid="buttonr2" onClick="justep.Bind.contextFor(this).$model.outmessageclick()"><i xid="ir2"></i><span xid="spanr2">操作失误重新选择</span></a></div></div>'
		var message = $("#message")
	message.css("background-color", "#BDD7EE");

	}

	function succcescp() {
		var html = '<div><span>成功关闭车牌</span><div></br><a component="$UI/system/components/justep/button/button" class="btn btn-default center-block" label="继续" xid="button3" onClick="quitclick" style="vertical-align:middle;display:block;width:40%"><i xid="i3"></i><span xid="span3">是</span></a>'
		var message = $("#message")
		message.html(html);
		message.css("background-color", "red");
	}

	Model.prototype.modelActive = function(event) {

	};

	Model.prototype.loadCheck = function(me) {
		var data = {
			containerId : sessionStorage["containerId"]
		}
		this.lastStorage.set("上一货位：" + stowMessage.binName)
		var fun = function(me)

		{
			return function(data) {

				me.hsNumber.set(parseInt(sessionStorage["containerAmount"]) - parseInt(sessionStorage["containerConstantly"]))

				me.carNumber.set(data)

				if (data > 0) {
					var ml = '<div component="$UI/system/components/justep/row/row" class="x-row" xid="row1"><div class="x-col" xid="col2"><span xid="span8">目前车牌剩余数据</span><span xid="span9">'
							+ data
							+ '</span><span xid="span10"></br></br>请确认操作</span></div> </div></br></br></br></br><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3"><div class="x-col" xid="col7"><a component="$UI/system/components/justep/button/button" class="btn btn-default clr" label="1中途休息"  xid="button7" onClick="justep.Bind.contextFor(this).$model.sleepclick()"><i xid="i7"></i><span xid="span11">1中途休息</span></a> <a component="$UI/system/components/justep/button/button" class="btn clr btn-default" label="2强制退出" xid="button1" onClick="justep.Bind.contextFor(this).$model.quitthatclick()"  style="margin-left:50px;"><i xid="i1"></i><span xid="span1">2强制退出</span></a> </div> </div>'

					var message = $("#message")
					message.show();
					message.css("background-color", "#DEEBF7");
					message.html(ml);

					message.css("color", "black");
				} else if (data == 0) {

					var outQty = 0;
					var fun = function(data) {
						outQty = data;
						if (outQty > 0) {
							$("#message").show();
							sgcg(outQty);
						} else {
							var fun = function(me) {
								return function(data) {
									$("#message").show();
									sgcg(0);
								}
							}
							var error=function()
							{
								justep.Shell.showPage("login4"); 
							}
							var opt = {
								data : {
									containerId : sessionStorage["containerId"]
								},

								url : api.stowingContainer,
								success : fun(me),
								error:error
							}

							api.mushinyAjaxDel(opt);
						}
					}

					var opt = {
						data : {
							toContainer : sessionStorage["containerName"]
						},
						type : "get",
						url : api.andonInbounds,
						success : fun
					}
					api.mushinyAjaxProblem(opt);

				}
				;

			}
		}

		var opt = {
			data : data,
			type : "get",
			url : api.containerAvailableAmount,
			success : fun(me)
		}
		api.mushinyAjax(opt);
	}

	/*	Model.prototype.initStow = function(me) {
		// 得到小车内商品数量并存储
	 
		var data = {
			name : sessionStorage["containerName"]
		}
		var fun = function(me)

		{

			return function(data) {
				;

				stowMessage.amountmax = data.amount

				var fun = function(me)

				{
					return function(data) {
						;

						me.hsNumber.set(stowMessage.amountmax - data)
						me.carNumber.set(data)
					}
				}
				var opt = {
					data : {
						containerId : sessionStorage["containerId"]
					},
					type : "get",
					url : api.containerAvailableAmount,
					success : fun(me)
				}
				// 扫车牌获取数量
				api.mushinyAjax(opt);
			}
		}
		var opt = {
			data : data,
			type : "get",
			url : api.ContainerMessage,
			success : fun(me)
		}
		api.mushinyAjax(opt);
	}*/

	Model.prototype.modelLoad = function(event) {

		this.loadCheck(this);

		//  sgcgcp();
	};
	Model.prototype.input2Keydown = function(event) {
		if (event.keyCode == "13") {
			var ko = 2;
			if (ko == 2) {
				this.outthat();
			}
		}
	};

	Model.prototype.modelInactive = function(event) {
		this.loadCheck(this);
		/*      var ml='<div component="$UI/system/components/justep/row/row" class="x-row" xid="row1"><div class="x-col" xid="col2"><span xid="span8">目前车牌剩余数据</span><span xid="span9">XX</span><span xid="span10"></br></br>请确认操作</span></div> </div></br></br></br></br><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3"><div class="x-col" xid="col7"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="1中途休息" xid="button7" onClick="justep.Bind.contextFor(this).$model.sleepclick()"><i xid="i7"></i><span xid="span11">1中途休息</span></a> <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="2强制退出" xid="button1" onClick="justep.Bind.contextFor(this).$model.quitthatclick()" style="margin-left:50px;"><i xid="i1"></i><span xid="span1">2强制退出</span></a> </div> </div>'
		      
		     var message=$("#message")
		   
		      this.details.set(ml);
		     message.show();
		        this.bgcolor.set("#DEEBF7")
		 // message.css("background-color","#DEEBF7");
		       this.color.set("black");*/
		// message.css("color","black");
	};

	Model.prototype.modelIlnactive = function(event) {
		$("#message").hide();
	};

	return Model;
});
