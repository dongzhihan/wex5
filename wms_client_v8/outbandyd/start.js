define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var api = require("$UI/wms_client_v8/js/api");

	var Model = function() {
		this.callParent();
		this.step = 1;
		this.Sstep = 1;
		this.Ftitle = justep.Bind.observable("");
		this.Mtitle = justep.Bind.observable("");
		this.Btitle = justep.Bind.observable("");
		this.Stitle = justep.Bind.observable("");
		this.destination = justep.Bind.observable("");//目的地
		this.destinationIn = "";//扫描的目的地
		this.sortCodeNo = justep.Bind.observable("");//sorCode号码
		this.containerName = justep.Bind.observable("");//小车名称
		this.prvOrder = justep.Bind.observable("");//上一个订单
		this.shipment = justep.Bind.observable("");//shipment号码
		this.status = 0;//锁定文本框标识
		this.container = "";//扫描的小车
		this.sortCode = "";//扫描的sortCode
		this.shipmentNo = "";//扫描的shipment号码
		this.containerSortCode = "";//所有目的地小车绑定关系
		this.station="";//工作站
	};
	
	//绑定笼车初始化
	Model.prototype.content2Active = function(event) {
		$(this.getElementByXid("button1")).css("background", "linear-gradient(#9989ce,#3061b9)");
		$(this.getElementByXid("button3")).css("background", "gray");
		$(this.getElementByXid("button2")).css("background", "gray");
		$(this.getElementByXid("button4")).css("background", "gray");
		$(this.getElementByXid("input1")).focus();
		this.Btitle.set("扫描目的地条码");
		$(this.getElementByXid("list1")).hide();
		this.status = 1;
		//获取所有目的地小车绑定关系
		var fun=function(me){
			return function(data){
				me.containerSortCode = data;
				var containerData = me.comp("data1");
				var options = {
					defaultValues : data
				};
				containerData.clear();
				containerData.newData(options);
				console.log(data.length)
				if (data.length !== 0) {
					$(me.getElementByXid("list1")).show();
				}
			};
		};
		api.mushinyAjax({
			type : "GET",
			url : api.getAll,
			success : fun(this)
		});
	};
	
	Model.prototype.content2Inactive = function(event) {
		$(this.getElementByXid("BErrCon")).hide();
		$(this.getElementByXid("list1")).hide();

	};
	
	//多目的地扫描初始化
	Model.prototype.content3Active = function(event) {
		$(this.getElementByXid("button2")).css("background", "linear-gradient(#9989ce,#3061b9)");
		$(this.getElementByXid("button3")).css("background", "gray");
		$(this.getElementByXid("button1")).css("background", "gray");
		$(this.getElementByXid("button4")).css("background", "gray");
		$(this.getElementByXid("input4")).focus();
		this.Mtitle.set("请扫描订单号码");
		this.status = 3;
	};

	Model.prototype.content3Inactive = function(event) {
		$(this.getElementByXid("MErrCon")).hide();
		$(this.getElementByXid("MSuccessCon")).hide();
		$(this.getElementByXid("orderDes")).hide();
		this.step = 1;
	};
	
	//满车初始化
	Model.prototype.content4Active = function(event) {
		$(this.getElementByXid("input3")).focus();
		$(this.getElementByXid("button3")).css("background", "linear-gradient(#9989ce,#3061b9)");
		$(this.getElementByXid("button1")).css("background", "gray");
		$(this.getElementByXid("button2")).css("background", "gray");
		$(this.getElementByXid("button4")).css("background", "gray");
		this.status = 4;
	};

	Model.prototype.content4Inactive = function(event) {
		$(this.getElementByXid("div2")).hide();
		$(this.getElementByXid("labelEdit3")).show();
	};
	
	//单目的地扫描
	Model.prototype.content5Active = function(event) {
		$(this.getElementByXid("button4")).css("background", "linear-gradient(#9989ce,#3061b9)");
		$(this.getElementByXid("button1")).css("background", "gray");
		$(this.getElementByXid("button2")).css("background", "gray");
		$(this.getElementByXid("button3")).css("background", "gray");
		$(this.getElementByXid("input5")).focus();
		this.Stitle.set("请扫描目的地条码");
		this.status = 5;

	};

	Model.prototype.content5Inactive = function(event) {
		$(this.getElementByXid("SSuccessCon")).hide();
		$(this.getElementByXid("SErrCon")).hide();
		$(this.getElementByXid("SorderDes")).hide();
		this.Sstep = 1;
	};
	
	//绑定笼车扫描目的地号码
	Model.prototype.input1Keydown = function(event) {
		if (event.keyCode == "13") {
			this.sortCode = $(this.getElementByXid("input1")).val();
			$(this.getElementByXid("BErrCon")).hide();
			$(this.getElementByXid("input2")).focus();
			this.Btitle.set("扫描笼车号码");
			this.status = 2;
		}
	};
	//绑定笼车扫描笼车号码
	Model.prototype.input2Keydown = function(event) {
		if (event.keyCode == "13") {
			this.container = $(this.getElementByXid("input2")).val();
			$(this.getElementByXid("BErrCon")).hide();
			var fun = function(me) {
				return function(data) {
					api.mushinyAjax({
						type : "GET",
						url : api.getAll,
						success : function(data) {
							me.containerSortCode = data;
							me.Btitle.set("扫描目的地条码");
							var containerData = me.comp("data1");
							var options = {
								defaultValues : data
							};
							containerData.clear();
							containerData.newData(options);
							if (data.length != 0) {
								$(me.getElementByXid("list1")).show();
							}

							me.status = 1;
						}
					});
				};
			};
			api.mushinyAjax({
				type : "POST",
				dataType : "Text",
				url : api.bindingContainerAndSortCode,
				data : JSON.stringify({
					"sortCode" : this.sortCode,
					"containerName" : this.container,
				}),
				success : fun(this),
				error : this.error(this, "BErrCon", "BErrMsg")
			});
			$(this.getElementByXid("input1")).focus();
			this.comp("input1").clear();
			this.comp("input2").clear();
		}
	};
	
	//满车扫描笼车
	Model.prototype.input3Keydown = function(event) {
		if (event.keyCode == "13") {
			this.container = $(this.getElementByXid("input3")).val();
			$(this.getElementByXid("FsuccessCon")).show();
			$(this.getElementByXid("FErrCon")).show();
			var fun = function(me) {
				return function(data) {
					var html = "已成功记录笼车<span class='num'>" + me.container + "</span>已满";
					$(me.getElementByXid("FsuccessMsg")).html(html);
					$(me.getElementByXid("FsuccessCon")).show();
					$(me.getElementByXid("labelEdit3")).hide();
				};
			};
			api.mushinyAjax({
				url : api.fullContainer,
				dataType : "Text",
				data : {
					"containerName" : this.container
				},
				success : fun(this),
				error : this.error(this, "FErrCon", "FErrMsg")
			});
			this.comp("input3").clear();
		}
	};
	//多目的地扫描
	Model.prototype.input4Keydown = function(event) {
		//扫描订单
		if (this.step == 1) {
			if (event.keyCode == "13") {
				this.shipmentNo = $(this.getElementByXid("input4")).val();
				$(this.getElementByXid("MErrCon")).hide();
				$(this.getElementByXid("MSuccessCon")).hide();
				var fun = function(me) {
					return function(data) {
						$(me.getElementByXid("orderDes")).show();
						me.shipment.set(me.shipmentNo);
						me.sortCodeNo.set(data.sortCode);
						me.containerName.set(data.storageLocationName);
						me.Mtitle.set("扫描笼车号码");
						if(me.containerName.get()!=null){
							me.step = 2;
						}else{
							$(me.getElementByXid("MErrCon")).show();
							var html = "<span class='weight'>Sort Code：<span class='num'>" + me.sortCodeNo.get() + "</span>没有绑定相应笼车,无法进行移动包裹,请先绑定笼车</span>";
							$(me.getElementByXid("MErrMsg")).html(html);
						}
					}
				}
				api.mushinyAjax({
					url : api.getShipment,
					data : {
						"shipmentNo" : this.shipmentNo
					},
					success : fun(this),
					error : this.error(this, "MErrCon", "MErrMsg")
				})
				
			} 
			//扫描小车
		} else if (this.step == 2) {
			if (event.keyCode == "13") {
				$(this.getElementByXid("MErrCon")).hide();
				$(this.getElementByXid("MSuccessCon")).hide();
				this.container = $(this.getElementByXid('input4')).val();
				if (this.container.toUpperCase() == this.containerName.get()) {
					var fun = function(me) {
						return function(data) {
							$(me.getElementByXid("orderDes")).hide();
							var html = "已成功转移订单：<span class='num'>" + me.shipment.get() + "</span>至笼车<span class='num'>" + me.containerName.get() + "</span>中";
							$(me.getElementByXid("MSuccessMsg")).html(html);
							$(me.getElementByXid("MSuccessCon")).show();
							me.Mtitle.set("请扫描订单号码");
							me.prvOrder.set(me.shipment.get());
							me.step = 1;
						}
					} 
					//移动包裹
					api.mushinyAjax({
						type : "POST",
						url : api.sortingPackage,
						dataType:"Text",
						data : JSON.stringify({
							"containerName" : this.containerName.get(),
							"sortCode" : this.sortCodeNo.get(),
							"shipmentNo" : this.shipment.get(),
							"stationName":this.station
						}),
						error : this.error(this, "MErrCon", "MErrMsg"),
						success : fun(this)
					});
				} else {
					$(this.getElementByXid("MErrCon")).show();
					$(this.getElementByXid("MErrMsg")).html("笼车号码扫描错误:<br/>" + this.container);
					this.Mtitle.set("请重新扫描笼车号码");
				}
				
			}
		}
		this.comp("input4").clear();
	};
	
	//单目的地扫描
	Model.prototype.input5Keydown = function(event) {
		//扫描小车
		if (this.Sstep == 1) {
			if (event.keyCode == "13") {
				this.destinationIn = $(this.getElementByXid("input5")).val();
				$(this.getElementByXid("SSuccessCon")).hide();
				$(this.getElementByXid("SErrorCon")).hide();
				var fun=function(me){
					return function(data){
						me.containerSortCode = data;
						var containerData = me.comp("data1");
						var options = {
							defaultValues : data
						};
						containerData.clear();
						containerData.newData(options);
						$(me.getElementByXid("SorderDes")).show();
						me.sortCodeNo.set(me.destinationIn);
						me.Stitle.set("扫描订单条码");
						var flag = 0;
						//根据扫描的小车去所有绑定关系中查找有没有该小车
						for (var i = 0; i < me.containerSortCode.length; i++) {
							if (me.destinationIn == me.containerSortCode[i].sortCode) {
								flag = 1;
								me.containerName.set(me.containerSortCode[i].containerName);
								me.Sstep = 2;
							}
						}
						if (flag == 0) {
							var html = "<span class='weight'>Sort Code：<span class='num'>" + me.sortCodeNo.get() + "</span>没有绑定相应笼车,无法进行移动包裹,请先绑定笼车</span>";
							$(me.getElementByXid("SErrMsg")).html(html);
							$(me.getElementByXid("SErrCon")).show();
						}
					};
				};
				api.mushinyAjax({
					type : "GET",
					url : api.getAll,
					success : fun(this) 
				});
			}
			//扫描订单
		} else if (this.Sstep == 2) {
			if (event.keyCode == "13") {
				this.shipmentNo = $(this.getElementByXid("input5")).val();
				$(this.getElementByXid("SSuccessCon")).hide();
				$(this.getElementByXid("SErrorCon")).hide();
				var fun = function(me) {
					return function(data) {
						api.mushinyAjax({
							type : "POST",
							url : api.sortingPackage,
							dataType:"Text",
							data : JSON.stringify({
								"containerName" : me.containerName.get(),
								"sortCode" : me.sortCodeNo.get(),
								"shipmentNo" : me.shipmentNo,
								"stationName":me.station
							}),
							error : me.error(me, "SErrCon", "SErrCon"),
							success : function(data) {
								var html = "已成功转移订单：<span class='num'>" + me.shipmentNo + "</span>至笼车<span class='num'>" + me.containerName.get() + "</span>中";
								$(me.getElementByXid("SSuccessMsg")).html(html);
								$(me.getElementByXid("SSuccessCon")).show();
								me.prvOrder.set(me.shipmentNo);
							}
						});
					};
				};
				api.mushinyAjax({
					url : api.getShipment,
					data : {
						"shipmentNo" : this.shipmentNo
					},
					success : fun(this),
					error : this.error(this, "SErrCon", "SErrCon")
				});

			} else if (event.keyCode == "49") {
				var html = "<span class='weight'>订单：<span class='num'>" + this.shipmentNo + "</span>已经转移至笼车<span class='num'>" + this.containerName.get() + "</span>中，不得重复移动</span>";
				$(this.getElementByXid("SErrMsg")).html(html);
				$(this.getElementByXid("SErrCon")).show();
				$(this.getElementByXid("SSuccessCon")).hide();
				$(this.getElementByXid("SErrCon")).hide();

			} else if (event.keyCode == "50") {
				var html = "<span class='weight'>订单：<span class='num'>" + this.shipment.get() + "</span>不属于此目的地请重新扫描</span>";
				$(this.getElementByXid("SErrMsg")).html(html);
				$(this.getElementByXid("SErrCon")).show();
				$(this.getElementByXid("SSuccessCon")).hide();
			}
		}
		this.comp("input5").clear();
	};
	
	//错误信息
	Model.prototype.error = function(me, errorCon, errorMsg) {
		return function(data) {
			var html = "";
			var message = eval("(" + data.responseText + ")")
			if (message != "") {
				html = message.message;
			} else {
				html = "服务器错误!";
			}
			$(me.getElementByXid(errorMsg)).html(html);
			$(me.getElementByXid(errorCon)).show();
		}
	};
	Model.prototype.button2Click = function(event) {

		$(this.getElementByXid("button2")).css("background", "linear-gradient(#9989ce,#3061b9)");
		$(this.getElementByXid("button1")).css("background", "gray");
		$(this.getElementByXid("button3")).css("background", "gray");
		$(this.getElementByXid("button4")).css("background", "gray");
		this.comp("contents1").to("content3");

	};

	Model.prototype.button1Click = function(event) {

		$(this.getElementByXid("button1")).css("background", "linear-gradient(#9989ce,#3061b9)");
		$(this.getElementByXid("button2")).css("background", "gray");
		$(this.getElementByXid("button3")).css("background", "gray");
		$(this.getElementByXid("button4")).css("background", "gray");
		this.comp("contents1").to("content2");

	};

	Model.prototype.button3Click = function(event) {

		$(this.getElementByXid("button3")).css("background", "linear-gradient(#9989ce,#3061b9)");
		$(this.getElementByXid("button1")).css("background", "gray");
		$(this.getElementByXid("button2")).css("background", "gray");
		$(this.getElementByXid("button4")).css("background", "gray");
		this.comp("contents1").to("content4");

	};

	Model.prototype.button4Click = function(event) {

		$(this.getElementByXid("button4")).css("background", "linear-gradient(#9989ce,#3061b9)");
		$(this.getElementByXid("button1")).css("background", "gray");
		$(this.getElementByXid("button2")).css("background", "gray");
		$(this.getElementByXid("button3")).css("background", "gray");
		this.comp("contents1").to("content5");

	};
	
	//结束移动包裹
	Model.prototype.button5Click = function(event) {
		var stopSort=function(me){
				justep.Shell.showPage('login5').done(function() {
					me.close();
				});
		};		
		api.mushinyAjax({
			url:api.stopSort,
			dataType:"TEXT",
			data:{stationName:this.station},
			success:stopSort(this),
		});
	};
	
	//锁定输入框
	Model.prototype.panel1Click = function(event) {
		if (this.status == 1) {
			$(this.getElementByXid("input1")).focus().select();
		} else if (this.status == 2) {
			$(this.getElementByXid("input2")).focus().select();
		} else if (this.status == 4) {
			$(this.getElementByXid("input3")).focus().select();
		} else if (this.status == 3) {
			$(this.getElementByXid("input4")).focus().select();
		} else if (this.status == 5) {
			$(this.getElementByXid("input5")).focus().select();
		}
	};
	Model.prototype.modelParamsReceive = function(event){
		this.station = event.params.station;
		this.prvOrder.set("无");
		this.Btitle.set("扫描目的地条码");
		this.Mtitle.set("请扫描订单号码");
		this.Stitle.set("请扫描目的地条码");
		
	};
	return Model;
});