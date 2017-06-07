define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var api = require("$UI/wms_client_v8/js/api");

	var Model = function() {
		this.callParent();
		this.title = justep.Bind.observable('');
		this.sku = justep.Bind.observable('');
		this.proName = justep.Bind.observable('');
		this.total = justep.Bind.observable('');
		this.thAmount = justep.Bind.observable('');
		this.type = 1;
	};

	Model.prototype.modelActive = function(event) {
		$(this.getElementByXid("button1")).css("background",
				"linear-gradient(#6083cb,#2e61ba)");
		$(this.getElementByXid("button2")).css("background", "gray");
		$(this.getElementByXid("button3")).css("background",
				"linear-gradient(#6083cb,#2e61ba)");
		this.initial();
	};

	Model.prototype.modelLoad = function(event) {
		$(this.getElementByXid("button1")).css("background",
				"linear-gradient(#6083cb,#2e61ba)");
		$(this.getElementByXid("button2")).css("background", "gray");
		$(this.getElementByXid("button3")).css("background",
				"linear-gradient(#6083cb,#2e61ba)");
		this.initial();
	};

	Model.prototype.modelInactive = function(event) {

	};
	
	//初始化
	Model.prototype.initial = function(event) {
		$(this.getElementByXid("button1")).css("background",
				"linear-gradient(#6083cb,#2e61ba)");
		$(this.getElementByXid("button2")).css("background", "gray");
		$(this.getElementByXid("button3")).css("background",
				"linear-gradient(#6083cb,#2e61ba)");
		$(this.getElementByXid("input1")).focus();
		this.title.set("扫描需要查询的商品");
		this.sku.set('');
		this.proName.set('');
		this.total.set('');
	};
	
	//按容器查询
	Model.prototype.input1Keydown = function(event) {
		if (event.keyCode == "13") {
			var amount = 0;
			var sku = $(this.getElementByXid("input1")).val().trim();
			var getGoods = function(me) {
				return function(data) {
					me.sku.set("SKU：" + data.itemNo);
					me.proName.set("商品名称：" + data.name);
					api.mushinyAjax({
						url : api.getItemRecords,
						data : {
							sku : sku
						},
						success : function(dataSource) {
							for (var i = 0; i < dataSource.length; i++) {
								amount += dataSource[i].amount;
							}
							me.total.set("总量：" + amount);
							me.thAmount.set("数量("+amount+")");
							var proDes = me.comp("proDes");
							var options = {
								defaultValues : dataSource
							};
							proDes.clear();
							proDes.newData(options);
							$(me.getElementByXid("scrollView1")).show();
						}
					});
				};
			};
			api.mushinyAjax({
				url : api.searchInventoryBySku,
				data : {
					sku : sku
				},
				success : getGoods(this)
			});
			this.comp('input2').clear();
		}
	};

	//按sku查询
	Model.prototype.input2Keydown = function(event) {
		if (event.keyCode == "13") {
			var amount=0;
			var storageLocationName = $(this.getElementByXid("input2")).val().trim();
			var getContaionerRecords=function(me){
				return function(data){
					for(var i=0;i<data.length;i++){
						amount+=data[i].amount;
					}
					me.sku.set("容器："+data[0].storageLocationName);
					me.total.set("总量："+amount);
					me.thAmount.set("数量("+amount+")");
					var rqDes = me.comp("rqDes");
					var options = {
						defaultValues : data
					};
					rqDes.clear();
					rqDes.newData(options);
					$(me.getElementByXid("scrollView2")).show();
				};
			};
			api.mushinyAjax({
				url : api.getContainerRecords,
				data : {
					storageLocationName : storageLocationName
				},
				success : getContaionerRecords(this)
			});
			this.comp('input2').clear();
		}
	};
	Model.prototype.rq = function(keyCode) {
		
	};
	Model.prototype.input1Blur = function(event) {
		$(this.getElementByXid('input1')).focus();
	};
	Model.prototype.input2Blur = function(event) {
		$(this.getElementByXid('input2')).focus();
	};
	
	//按容器查询初始化
	Model.prototype.button1Click = function(event) {
		$(this.getElementByXid("button1")).css("background",
				"linear-gradient(#6083cb,#2e61ba)");
		$(this.getElementByXid("button2")).css("background", "gray");
		this.typeChange();
		this.title.set("扫描需要查询的商品");
		$(this.getElementByXid("ipt1")).show();
		$(this.getElementByXid("ipt2")).hide();
		$(this.getElementByXid('input1')).focus();
		$(this.getElementByXid("scrollView2")).hide();
	};

	Model.prototype.typeChange = function(event) {
		this.sku.set('');
		this.proName.set('');
		this.total.set('');
	};
	
	//按sku查询初始化
	Model.prototype.button2Click = function(event) {
		$(this.getElementByXid("button2")).css("background",
				"linear-gradient(#6083cb,#2e61ba)");
		$(this.getElementByXid("button1")).css("background", "gray");
		this.typeChange();
		this.title.set("扫描需要查询的容器");
		$(this.getElementByXid("ipt1")).hide();
		$(this.getElementByXid("ipt2")).show();
		$(this.getElementByXid('input2')).focus();
		$(this.getElementByXid("scrollView1")).hide();
	};
	
	//退出
	Model.prototype.button3Click = function(event) {
		justep.Shell.closePage();
	};
	
	Model.prototype.td4Click = function(event) {

	};

	return Model;
});