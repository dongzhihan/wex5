define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var ShellImpl = require('$UI/system/lib/portal/shellImpl');
	require("$UI/wms_client_v8/js/build/flexible_css.debug");
	require("$UI/wms_client_v8/js/build/flexible.debug");
	var api = require("$UI/wms_client_v8/js/api");
	// require("http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js");
	var Model = function() {
		this.callParent();
		var shellImpl = new ShellImpl(this, {
			"contentsXid" : "pages",
			"pageMappings" : {
				"main" : {
					//登陆
					url : require.toUrl('$UI/wms_client_v8/login1.w')
				},
				//密码
				"login2" : {
					url : require.toUrl('$UI/wms_client_v8/login2.w')
				},
				//主选择
				"login3" : {
					url : require.toUrl('$UI/wms_client_v8/main.w')

				},
				//outBound
				"login5" : {
					url : require.toUrl('$UI/wms_client_v8/outBound.w')
				},
				//问题处理
				"login6" : {
					url : require.toUrl('$UI/wms_client_v8/problem.w')
				//扫描主页面
				},
				//ICQA菜单
				"ICQA" : {
					url : require.toUrl('$UI/wms_client_v8/ICQA.w')
				//扫描主页面
				},
				//rebatch扫描工作站
				"rebatch" : {
					url : require.toUrl('$UI/wms_client_v8/Rebatch/start.w')
				},
				//rebatch主页面
				"startrebatch" : {
					url : require.toUrl('$UI/wms_client_v8/Rebatch/startrebatch.w')
				},
				//移动包裹主页面
				"move" : {
					url : require.toUrl('$UI/wms_client_v8/outbandyd/start.w')
				},
				//移动包裹扫描工作站
				"scanMoveStation" : {
					url : require.toUrl('$UI/wms_client_v8/outbandyd/scanStation.w')
				},
				"loadParcel":{
					url:require.toUrl('$UI/wms_client_v8/outbandyd/loadParcel.w')
				},
				//查询工具
				"selectGoods" : {
					url : require.toUrl('$UI/wms_client_v8/problemSolve/select.w')
				},
				//移货菜单
				"transferMain" : {
					url : require.toUrl('$UI/wms_client_v8/problemSolve/transferMain.w')
				},
				//移货主页面
				"transfer" : {
					url : require.toUrl('$UI/wms_client_v8/problemSolve/transfer.w')
				},
				//有效期录入菜单
				"vaildMain" : {
					url : require.toUrl('$UI/wms_client_v8/problemSolve/vaildMain.w')
				},
				//有效期录入主页面
				"vaild" : {
					url : require.toUrl('$UI/wms_client_v8/problemSolve/vaild.w')
				},
				//日常盘点
				"dailyMain" : {
					url : require.toUrl('$UI/wms_client_v8/ICQA/dailyInventoryMain.w')
				},
				//1轮盘点
				"roundOne" : {
					url : require.toUrl('$UI/wms_client_v8/ICQA/roundOne.w')
				},
				//2、3、4轮盘点以及所有系统盘点
				"roundTwo" : {
					url : require.toUrl('$UI/wms_client_v8/ICQA/roundTwo.w')
				},
				//系统盘点
				"systemMain" : {
					url : require.toUrl('$UI/wms_client_v8/ICQA/systemCountMain.w')
				},
			}
		})

	};

	function keyboardShowHandler(e) {

	}
	Model.prototype.modelLoad = function(event) {
		if (typeof (sessionStorage["locale"]) != "undefined") {
			var func = function(api) {
				return function(data) {
					api.resourceMap = data;
				};
			};
			//抓取语言包
			var opt = {
				data : {
					locale : sessionStorage["locale"]
				},
				type : "get",
				url : api.language,
				success : func(api)
			};
			api.mushinyAjaxLa(opt);
		}
		if (typeof (sessionStorage["token"]) == "undefined") {

			justep.Shell.showPage("main");

		} else {
			justep.Shell.showPage("main");
		}

	};

	Model.prototype.modelInactive = function(event) {

	};

	Model.prototype.mainActive = function(event) {

	};

	Model.prototype.windowDialog1Receive = function(event) {

	};

	Model.prototype.pagesActiveChange = function(event) {

	};

	return Model;
});