define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var ShellImpl = require('$UI/system/lib/portal/shellImpl');
	require("$UI/truk/js/build/flexible_css.debug")
	require("$UI/truk/js/build/flexible.debug")
	var api = require("$UI/truk/js/api");
	// require("http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js");
	var Model = function() {
		this.callParent();
		var shellImpl = new ShellImpl(this, {
			"contentsXid" : "pages",
			"pageMappings" : {
				"main" : {
					//登陆
					url : require.toUrl('$UI/truk/login1.w')
				},
				//密码
				"login2" : {
					url : require.toUrl('$UI/truk/login2.w')
				},
				//主选择
				"login3" : {
					url : require.toUrl('$UI/truk/main.w')

				},
				//inBound
				"login4" : {
					url : require.toUrl('$UI/truk/inBound.w')
				},
				//outBound
				"login5" : {
					url : require.toUrl('$UI/truk/outBound.w')
				},
				//问题处理
				"login6" : {
					url : require.toUrl('$UI/truk/problem.w')
				//扫描主页面
				},
				"ICQA" : {
					url : require.toUrl('$UI/truk/ICQA.w')
				//扫描主页面
				},
				"sgend" : {
					url : require.toUrl('$UI/truk/inbandsg/sgend.w')
				//扫描主页面
				},
				"scancar_id" : {
					url : require.toUrl('$UI/truk/inbandsg/scancar_id.w')
				},
				"checkstart" : {
					url : require.toUrl('$UI/truk/inbandsg/startcheck.w')
				},
				"usermessage" : {
					url : require.toUrl('$UI/truk/inbandsg/usermessage.w')
				},
				//扫描主页面
				"ground" : {
					url : require.toUrl('$UI/truk/inbandsg/ground.w?time=' + new Date().getTime())
				},
				//
				"sgend" : {
					url : require.toUrl('$UI/truk/inbandsg/sgend.w?time=' + new Date().getTime())
				},
				"start" : {
					url : require.toUrl('$UI/truk/inbandsg/start.w')
				},
				"shstart" : {
					url : require.toUrl('$UI/truk/inboundsh/start.w')
				},
				"recipient" : {
					url : require.toUrl('$UI/truk/inboundsh/recipient.w')
				},
				"receiveTip":{
					url:require.toUrl('$UI/truk/inboundsh/receiveTip.w')
				},
				"skuqty" : {
					url : require.toUrl('$UI/truk/inboundsh/skuqty.w')
				},

				"scanbatch" : {
					url : require.toUrl('$UI/truk/outbound/Scanbatch.w')
				},
				"outbandopeaction" : {
					url : require.toUrl('$UI/truk/outbound/outbandopeaction.w')
				},
				"outbandstart" : {
					url : require.toUrl('$UI/truk/outbound/start.w')
				},
				"startcheck" : {
					url : require.toUrl('$UI/truk/outbound/startcheck.w')
				},
				"outbandscancarid" : {
					url : require.toUrl('$UI/truk/outbound/scancar_id.w')
				},
				"pickmain" : {
					url : require.toUrl('$UI/truk/outbound/pickmain.w')
				},
				"pickmenu" : {
					url : require.toUrl('$UI/truk/outbound/pickmenu.w')
				},
				"pickusermessages" : {
					url : require.toUrl('$UI/truk/outbound/usermessages.w')
				},
				"pickusermessages" : {
					url : require.toUrl('$UI/truk/outbound/usermessages.w')
				},
				"rebatch" : {
					url : require.toUrl('$UI/truk/Rebatch/start.w')
				},
				"startrebatch" : {
					url : require.toUrl('$UI/truk/Rebatch/startrebatch.w')
				},
				"move" : {
					url : require.toUrl('$UI/truk/outbandyd/start.w')
				},
				"selectGoods" : {
					url : require.toUrl('$UI/truk/problemSolve/select.w')
				},
				"transferMain" : {
					url : require.toUrl('$UI/truk/problemSolve/transferMain.w')
				},
				"transfer" : {
					url : require.toUrl('$UI/truk/problemSolve/transfer.w')
				},
				"vaildMain" : {
					url : require.toUrl('$UI/truk/problemSolve/vaildMain.w')
				},
				"vaild" : {
					url : require.toUrl('$UI/truk/problemSolve/vaild.w')
				},
				"dailyMain" : {
					url : require.toUrl('$UI/truk/ICQA/dailyInventoryMain.w')
				},
				"roundOne" : {
					url : require.toUrl('$UI/truk/ICQA/roundOne.w')
				},
				"roundTwo" : {
					url : require.toUrl('$UI/truk/ICQA/roundTwo.w')
				},
				"commodityTreatment" : {
					url : require.toUrl('$UI/truk/ICQA/commodityTreatment.w')
				},
				"receiveTip":{
					url:require.toUrl('$UI/truk/inboundsh/receiveTip.w')
				},
				"systemMain":{
					url:require.toUrl('$UI/truk/ICQA/systemCountMain.w')
				},
				"outbandCarMessage" : {
					url : require.toUrl('$UI/truk/outbound/carMessage.w')
				}
			}
		})

	};
 

	function keyboardShowHandler(e) {

	}
	Model.prototype.modelLoad = function(event) {
		   if (typeof(sessionStorage["locale"]) != "undefined") { 
	 	var func = function(api) {

			return function(data) {
				api.resourceMap = data

				// console.log(api.resourceMap[data.resourceKey])

			};
		}
	  
		var opt = {
	 		data:{locale:sessionStorage["locale"]},
			type : "get",
			url : api.language,
			success : func(api)
		}
		api.mushinyAjaxLa(opt);
		   }
		if (typeof (sessionStorage["token"]) == "undefined") {
 
           
			justep.Shell.showPage("main")
	        
			 
			// console.log(   require.toUrl('$UI/truk/inbandsg/ground.w？time='+new Date().getTime()));
		 


		}  else
		{
		    justep.Shell.showPage("main");
		}

	};

	Model.prototype.modelInactive = function(event) {

	};

	Model.prototype.mainActive = function(event) {

	};

	Model.prototype.windowDialog1Receive = function(event) {
		//if (event.data == "OK") {
           
			
		//}
	};

	Model.prototype.pagesActiveChange = function(event) {
/*	   if (typeof(sessionStorage["token"]) == "undefined") { 
	     if(event.source.contents[event.to].xid !="main" && event.source.contents[event.to].xid !="login2" )
	    	 {
	    	    var arr= event.bindingContext.$model._rootNode.baseURI.split("#")
	    		window.location.href =arr[0];
	     
	    	 }
	 
		 }  */
	};

	return Model;
});