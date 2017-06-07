define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var api = require("$UI/wms_client_v8/js/api");
	var hotKey = require("$UI/wms_client_v8/js/hotKey");
	var Model = function() {
		this.callParent();
	};

	Model.prototype.button1Click = function(event) {
		navigator.app.exitApp();
	};

	Model.prototype.button5Click = function(event) {
		justep.Shell.closePage();
	};

	Model.prototype.mainbtnClick = function(event) {
		var url = require.toUrl('$UI/wms_client_v8/login3.w');
		justep.Shell.showPage("login3");
	};

	Model.prototype.quitClick = function(event) {
		navigator.app.exitApp();
	};

	Model.prototype.OUTBOUND = function(event) {
		var url = require.toUrl('$UI/wms_client_v8/login5.w');
		justep.Shell.showPage("login5");
	}

	Model.prototype.INTERNAL_TOOL = function(event) {
		var url = require.toUrl('$UI/wms_client_v8/login6.w');
		justep.Shell.showPage("login6");

	};
	Model.prototype.ICQA = function(event) {
		justep.Shell.showPage("ICQA");

	};

	Model.prototype.modelActive = function(event) {
		$(this.getElementByXid("panel1")).focus();
	};
	
	Model.prototype.modelLoad = function(event) {
		//循环创建菜单按钮
		var fun = function(me) {
			return function(data) {
				$.each(data,function(i) {
					var html = '<div xid="div'
					+ data[i].rfMenu.module.resourceKey
					+ '"  style="width:60%;height:18%;margin:auto auto 0.5rem auto;"  class="center-block"><a component="$UI/system/components/justep/button/button"   id="button'
					+ data[i].rfMenu.module.resourceKey
					+ '"  class="btn btn-default btnstyle"  label="1-Inbound"  style="width:100%;background-color:#D3CFD0;font-size:0.6rem;color:#000000;font-family:Calibri;font-weight:bold;" onClick="'
					+ 'justep.Bind.contextFor(this).$model.' + data[i].rfMenu.module.resourceKey + '()' + '"><i xid="i6"></i><span xid="span6">'
					+ hotKey.mainMatching(data[i].rfMenu.module.resourceKey, hotKey.mainMenu) + '-' + api.resourceMap[data[i].rfMenu.module.resourceKey] + '</span></a></div>';
					$(me.getElementByXid("divmain")).append(html);
					sessionStorage[data[i].rfMenu.module.resourceKey] = JSON.stringify(data[i].childMenuItems);
				});
			};
		};
		var data = {
			access_token : api.taken
		};
		//抓取菜单
		var opt = {
			data : data,
			type : "get",
			url : api.menu,
			success : fun(this)
		};
		api.mushinyAjax(opt);
		$(this.getElementByXid("panel1")).focus();
	};
	
	//热键
	Model.prototype.panel1Keydown = function(event) {
		switch (event.keyCode) {
		case 49:
			if ($("#buttonOUTBOUND").length > 0) {
				$("#buttonOUTBOUND").click();
			}
			break;
		case 50:
			if ($("#buttonICQA").length > 0) {

				$("#buttonICQA").click();
			}
			break;
		case 51:
			if ($("#buttonINTERNAL_TOOL").length > 0) {
				$("#buttonINTERNAL_TOOL").click();
			}
			break;
		}
	};

	Model.prototype.panel1Click = function(event) {
		$(this.getElementByXid("panel1")).focus();
	};

	return Model;
});