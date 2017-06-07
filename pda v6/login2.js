define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var api = require("$UI/truk/js/api");
	var user = require("$UI/truk/js/userMessage");
	var Model = function() {

		this.callParent();
		this.welcome = justep.Bind.observable("");
	};
	document.addEventListener("deviceready", onDeviceReady, false);
	function onDeviceReady() {
		document.addEventListener("backbutton", onBackKeyDown, false);
	}
	function onBackKeyDown() {

	}
	Model.prototype.input1Keypress = function(event) {

		if (event.keyCode == "13") {
			if ($.trim(event.target.value) != "") {

				var userName = sessionStorage["working"] = sessionStorage["workingName"];
				user.passWord = $(this.getElementByXid("input1")).val();
				var fi = function(me) {
					return function(data) {
					 	var func = function(api) {

							return function(data) {
								api.resourceMap = data

								// console.log(api.resourceMap[data.resourceKey])

							};
						}
					  
						var opt = {
					 			data:{locale:data.locale},
							type : "get",
							url : api.language,
							success : func(api)
						}
						api.mushinyAjaxLa(opt);
					    sessionStorage["locale"]=data.locale
						sessionStorage["clientId"] = data.client.id
						sessionStorage["working"] = data.name
						sessionStorage["userId"] = data.id
						var warehouses = data.warehouses
						if (!warehouses.length) {
							this.close()
						} else if (warehouses.length > 1) {
							api.warehousesid = warehouses;
							var url = require.toUrl("./warehouses.w");
							me.comp('windowDialog2').open({
								src : url
							});
						} else {

							var state = "OK"
							sessionStorage["warehouses"] = warehouses[0].id;
							sessionStorage["warehousesName"] = warehouses[0].name
							//$(this.getElementByXid("input1")).val();
							//  sessionStorage["name"]=name;

							var fun = function(me) {
								return function(data) {

									sessionStorage["token"] = data.access_token
									sessionStorage["refresh_token"]=data.refresh_token
									justep.Shell.showPage("login3");
								}
							}

							var opt = {
								url : api.loginUrl,
								data : "username=" + userName + "&password=" + user.passWord + "&grant_type=password&scope=ui&client_id=web_app",
								success : fun(me)
							}
							api.mushinyAjaxLogin(opt)
						}
					}

				}

				var ajaxNoOne = {
					data : JSON.stringify({
						username : userName,
						password : user.passWord
					}),
					success : fi(this)
				};
				api.mushinyAjaxGet(ajaxNoOne);
				$(this.getElementByXid("IDInput")).focus().select();

			} else {
				this.comp("messageDialog1").show();
			}
		}

	};

	Model.prototype.button1Click = function(event) {
		navigator.app.exitApp();
	};

	Model.prototype.modelActive = function(event) {
		$(this.getElementByXid("input1")).focus().select();
		this.comp("input1").clear();
	};
	Model.prototype.modelLoad = function(event) {
		this.welcome.set("欢迎" + sessionStorage["workingName"] + "进入系统")

		$(this.getElementByXid("input1")).focus().select();

	};
	Model.prototype.windowDialog1Receive = function(event) {

	};

	Model.prototype.windowDialog2Receive = function(event) {
		var userName = sessionStorage["workingName"];
		user.passWord = $(this.getElementByXid("input1")).val();
		sessionStorage["warehouses"] = event.data;
		var state = "OK"

		//$(this.getElementByXid("input1")).val();
		//  sessionStorage["name"]=name;

		var fun = function(me) {
			return function(data) {

				sessionStorage["token"] = data.access_token

				justep.Shell.showPage("login3");
				// me.comp('windowReceiver1').windowEnsure(state);
			}
		}

		var opt = {
			url : api.loginUrl,
			data : "username=" + userName + "&password=" + user.passWord + "&grant_type=password&scope=ui&client_id=web_app",
			success : fun(this)
		}
		api.mushinyAjaxLogin(opt)
	};

	return Model;
});