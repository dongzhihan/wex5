define(function(require) {
	var $ = require("jquery");
	var system = "http://192.168.1.201:11001"; // 菜单
	var before = "http://192.168.1.201:8001"; // 登陆
	var problem = "http://192.168.1.86:11008"; // 暗灯
	var ICQA = "http://192.168.1.86:11005"; // ICQA
	var sorting = "http://192.168.1.128:11004"; //移动包裹
	var tool="http://192.168.1.201:11007"; //工具
	var refresh_token = "/oauth/token"; // 刷新token
	var menu = "/system/rf-menus"; // 菜单
	var loginUrl = "/uaa/oauth/token";
	var getUserWarehouse = "/uaa/login";
	var language = "/system/resources"; // 抓取翻译列表

	var andonMasterTypes = "/andon-master/types"; // 问题类型查询
	var andonMasters = "/andon-masters"; // 暗灯菜单
	var andonInbounds = "/andon-inbounds"; // 暗灯inbound多货少货
	var storageLocations = "/andon-masters/locationName"; // 货位主请求	

	// /盘点
	var getStocktakingOrders = "/icqa/stocktakings"; // 获取周任务
	var getStocktakingLocation = "/icqa/stocktaking-orders/pod"; // 获取货位
	var updateStocktakingOrders = "/icqa/stocktaking-orders"; // 更新OK或NG
	var saveStocktakingRecords = "/icqa/stocktaking-records"; // 插入盘点详情
	var checkCounts = "/icqa/stocktaking-orders/check-counts"; // 检查盘点数量是否与数据库中货位的商品总数量一致
	var checkUsers = "/icqa/stocktaking-users/check-pod-round-users"; // 检查该用户是否有权限
	var checkSku = '/icqa/stocktaking-orders/check-goods'; // 检查扫描的商品是否存在
	var getStockInfo = '/icqa/stocktaking-orders/stock-information'; // 获取用户的盘点信息
	var overageOrLoss = '/icqa/stocktaking-orders/overage-or-loss'; //盘亏盘盈
	var checkStation='/icqa/stocktakings/binding-workstation'; //检查工作站
	var exitICQA='/icqa/stocktakings/untie-workstation'; //退出ICQA

	// reBatch
	var checkRebatchStation = "/wms/rebatch-stations";
	var checkRebatchTote = "/wms/rebatch-positions";
	var checkRebatchSlot = "/wms/rebatch-positions/{positionId}/finish";
	var confirmRebatch = "/wms/rebatch-requests/{requestId}/finish";
	var getFullSlot="/wms/rebatch-requests/open";

	// 移动包裹
	var checkSortStation="/outbound/sorting/station/check";
	var bindingContainerAndSortCode = "/outbound/sorting/binding/storageLocation";
	var sortingPackage = "/outbound/sorting";
	var getShipment = "/outbound/sorting/scanning/shipment";
	var getAll = "/outbound/sorting/storageLocation";
	var fullContainer = "/outbound/sorting/marking/storageLocation";
	var stopSort="/outbound/sorting/finish";
	var scanDockAndStorage="/outgoods/scandockandstorage";
	//工具
	var searchInventoryBySku="/internal-tool/search-inventory/item-data-global/sku";
	var getItemRecords="/internal-tool/search-inventory/item-records";
	var getContainerRecords="/internal-tool/search-inventory/storage-records";
	var scanningSource="/internal-tool/move-goods/scanning/source";
	var scanningSku="/internal-tool/move-goods/scanning/sku";
	var scanningDestination="/internal-tool/move-goods/scanning/destination";
	var moving="/internal-tool/move-goods/moving";
	var scanLotSource="/internal-tool/entry-lot/scanning/source";
	var scaningLotSku="/internal-tool/entry-lot/scanning/sku";
	var entering="/internal-tool/entry-lot/entering";
	var mushinyAjaxLogin = function(options) {
		$.ajax({
			type : "post",
			url : before + options.url,
			data : options.data,
			dataType : "json",
			contentType : "application/x-www-form-urlencoded;charset=utf-8",
			success : function(data) {
				options.success && options.success(data);
			},
			error : function() {
				console.log("ajax error", arguments);
			}
		});
	};
	
	var mushinyAjax = function(options){
		var stringHost = "";
		if (options.url.substring(0, 5) == "/wms/") {
			stringHost = before;
		}
		else if(options.url.substring(0,7)=="/system"){
			stringHost = system;
		}else if(options.url.substring(0,14)=="/internal-tool"){
			stringHost = tool;
		}else if(options.url.substring(0,9)=="/outbound"){
			stringHost = sorting;
		}else if(options.url.substring(0,5)=="/icqa"){
			stringHost = ICQA;
		}else if(options.url.substring(0,5)=="/icqa"){
			stringHost = problem;
		}
		$.ajax({
			contentType : options.contentType || "application/json;charset=utf-8",
			type : options.type || "GET",
			url : stringHost + options.url,
			cache : false,
			async : (options.async !== null ? options.async : false),
			dataType : options.dataType || "json",
			data : options.data || {},
			beforeSend : function(XMLHttpRequest) {

				XMLHttpRequest.setRequestHeader("Authorization", "Bearer " + sessionStorage["token"]);
				XMLHttpRequest.setRequestHeader("Warehouse", sessionStorage["warehouses"]);
			},
			success : function(data) {
				options.success && options.success(data);
			},
			error : function(data) {
				var message = eval("(" + data.responseText + ")");
				if (message.message == "org.springframework.web.client.HttpClientErrorException: 401 Unauthorized") {
					var opt = {
						url : refresh_token,
						data : "grant_type=refresh_token&refresh_token=" + sessionStorage["refresh_token"] + "&scope=ui",
						success : function(data) {
							sessionStorage["token"] = data.access_token;
							mushinyAjax(options);
						}
					};
					mushinyAjaxLogin(opt);
				} else {
					options.error && options.error(data);
				}
			}
		});
	};
	
	var mushinyAjaxLa = function(options){
		$.ajax({
			type : options.type || "GET",
			url : system + options.url,
			cache : false,
			contentType : options.contentType || "application/json;charset=utf-8",
			async : (options.async !== null ? options.async : false),
			dataType : "json",
			data : options.data || {},
			beforeSend : function(XMLHttpRequest) {

			},
			success : function(data) {
				options.success && options.success(data);
			},
			error : function() {
				console.log("ajax error", arguments);
			}
		});
	};

	var mushinyAjaxGet = function(options) {
		$.ajax({
			contentType : options.contentType || "application/json;charset=utf-8",
			type : "post",
			url : before + getUserWarehouse,
			cache : false,
			async : (options.async !== null ? options.async : false),
			dataType : "json",
			data : options.data,

			success : function(data) {
				options.success && options.success(data);
			},
			error : function() {
				console.log("ajax error", arguments);
			}
		});
	};
	
	return {
		warehousesid : {},
		getUserWarehouse : getUserWarehouse,
		mushinyAjaxGet : mushinyAjaxGet,
		mushinyAjaxLa : mushinyAjaxLa,
		loginUrl : loginUrl,
		mushinyAjax : mushinyAjax,
		mushinyAjaxGet : mushinyAjaxGet,
		menu : menu,
		language : language,
		resourceMap : "",
		mushinyAjaxLogin : mushinyAjaxLogin,
		//安灯
		andonMasterTypes:andonMasterTypes,
		andonMasters:andonMasters,
		andonInbounds:andonInbounds,
		storageLocations:storageLocations,
		// /////////////////////////
		getStocktakingOrders : getStocktakingOrders,
		getStocktakingLocation : getStocktakingLocation,
		updateStocktakingOrders : updateStocktakingOrders,
		saveStocktakingRecords : saveStocktakingRecords,
		checkCounts : checkCounts,
		checkUsers : checkUsers,
		getStockInfo : getStockInfo,
		checkSku : checkSku,
		ICQA : ICQA,
		overageOrLoss : overageOrLoss,
		checkStation:checkStation,
		exitICQA:exitICQA,
		// reBatch
		checkRebatchStation : checkRebatchStation,
		checkRebatchTote : checkRebatchTote,
		checkRebatchSlot : checkRebatchSlot,
		confirmRebatch : confirmRebatch,
		getFullSlot:getFullSlot,
		// 移动包裹
		sorting : sorting,
		checkSortStation:checkSortStation,
		bindingContainerAndSortCode : bindingContainerAndSortCode,
		sortingPackage : sortingPackage,
		getShipment : getShipment,
		getAll : getAll,
		fullContainer:fullContainer,
		stopSort:stopSort,
		scandockandstorage:scanDockAndStorage,
		//工具
		searchInventoryBySku:searchInventoryBySku,
		getItemRecords:getItemRecords,
		getContainerRecords:getContainerRecords,
		scanningSource:scanningSource,
		scanningSku:scanningSku,
		scanningDestination:scanningDestination,
		moving:moving,
		scanLotSource:scanLotSource,
		scaningLotSku:scaningLotSku,
		entering:entering
	};

});