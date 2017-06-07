define(function(require) {
	var $ = require("jquery");
	var user = require("$UI/truk/js/userMessage");
	var pickLang = require("$UI/truk/js/pickLang")
	var host = "http://192.168.1.201:9090"; // inbound 收货
	var before = "http://192.168.1.201:8000" // 登陆
	var problem = "http://192.168.1.201:9094" // 暗灯
	var pickHost = "http://192.168.1.201:9001" // 拣货主请求
	var ICQA = "http://192.168.1.201:9093" // ICQA
	var sorting = "http://192.168.1.201:9090"
	var stowingContainer = "/stowing/stowing-container"; // 上架 车
	var StockUnitController = "/stock-units";
	var refresh_token = "/oauth/token" // 刷新token
	var receivingStation = "/receiving/scanning/receiving-station" // 工作站
	var menu = "/rf-menus"; // 菜单
	var loginUrl = "/uaa/oauth/token"
	var getUserWarehouse = "/uaa/login"
	var adviceRequests = "/advice-requests"; // 收获单
	var login = "/uaa/login"
	var language = "/resources" // 抓取翻译列表
	var ContainerMessage = "/stowing/scanning/container" // 小车信息
	var scanContainerItemData = "/stowing/scanning/sku"; // 检查商品
	var scanningDamageContainer = "/stowing/scanning/damage-container" // 扫描残品商品
	var itemDatas = "/item-datas"; // 商品表
	var scanContainer = "/stowing/scanning/container"; // 检查小车
	var stowingGoods = "/stowing/stowing-goods"; // 上架商品到货位
	var scanStorageLocation = "/stowing/scanning/bin" //
	var andonMasterTypes = "/andon-master-types" // 问题类型查询
	var andonMasters = "/andon-masters" // 暗灯菜单
	var andonInbounds = "/andon-inbounds" // 暗灯inbound多货少货
	var storageLocations = "/storage-locations" // 货位主请求
	var containerAvailableAmount = "/stowing/container/available-amount" // 请求剩余车
	var scanningDamageContainer = "/reporting/damage-container" // 报残车牌检查
	var reportGoodsToDamageContainer = "/reporting/damage-goods" // 报残商品
	var scanReceivingStation = "/receiving/scanning/receiving-station"; // 工作站查询
	var adviceRequests = "/advice-requests"; // 收获单
	var scanReceivingDestination = "/receiving/scanning/receiving-destination"; // 目的地查询
	var scanContainer = "/receiving/scanning/container"; // 扫描车牌
	var getReceivingProcessContainers = "/receiving/receiving-process-containers"; // 获得绑定车牌
	var receivingGoodsToStockUnit = "/receiving/receiving-goods"; // 收获至库存单元
	var saveReceivingProcessContainer = "/receiving/receiving-process-container"; // 绑定笼车;
	var deleteReceivingProcessContainers = "/receiving/receiving-process-containers"; // 删除笼车;
	var updateReceivingProcessContainer = "/receiving/receiving-process-container"; // 满框;
	var activateAdviceNo = "/receiving/activating/dn"; // 扫描收货单号
	var scanAdviceRequest = "/receiving/scanning/dn"; // 收获单
	var getContainer = "/receiving/screening/receiving-destination" // 获得制定车牌
	var scanAdvicePositionItemData = "/receiving/scanning/sku"; // 扫描商品条码
	var checkContainer = "/receiving/checking/container" // 检查是否存在不同客户的同一商品

	// ///pick
	var batch = "/wms/picking-orders" // /////扫描批次号码，获取批次信息，成功的话锁定批次给当前用户
	var batchCheck = "/wms/picking-orders/{orderId}/info" // 批次信息
	var pickStart = "/wms/picking-orders/{orderId}/start" // 开始拣货
	var pickingContainers = "/wms/picking-orders/{orderId}/picking-unitloads" // ///检查小车
	var picksLocations = "/wms/picking-orders/{orderId}/picking-positions/{positionId}" // 检查货位
	var picksItems = "/wms/picking-orders/{orderId}/picking-positions/{positionId}" // 检查商品
	var picks = "/wms/picking-orders/{orderId}/picking-positions/{positionId}/confirm" // ///拣货主请求
	// post
	var picksFrom = "/wms/picking-orders/{orderId}/picking-positions/from" // 获取下一次商品
	var pickingCarts = "/wms/picking-orders/{orderId}/picking-unitloads/{pickingUnitLoadId}/confirm" // 手动满筐
	var reserve = "/wms/mobile/picking/orders/{orderId}/reserve" // 批次绑定
	var unreserve = "/wms/picking-orders/{orderId}/halt" // 批次解绑
	var assign = "/wms/picking-orders/assign" // 自动

	// /盘点
	var getStocktakingOrders = "/stocktakings"; // 获取周任务
	var getStocktakingLocation = "/stocktaking-orders/details"; // 获取货位
	var updateStocktakingOrders = "/stocktaking-orders"; // 更新OK或NG
	var saveStocktakingRecords = "/stocktaking-records"; // 插入盘点详情
	var checkCounts = "/stocktaking-orders/check-counts"; // 检查盘点数量是否与数据库中货位的商品总数量一致
	var checkUsers = "/stocktaking-users/check-users"; // 检查该用户是否已开始盘点或是否有权限
	var userAction = "/stocktaking-users"; // 保存用户证明已开始盘点和修改用户状态
	var checkPeoples = '/stocktaking-users/check-numbers'; // 检查用户人数
	var checkLocataion = '/stocktaking-users/index'; // 检查扫描的货位是否存在
	var checkSku = '/stocktaking-orders/check-goods'; // 检查扫描的商品是否存在
	var checkSystemUser = '/stocktaking-users/check-round-users'; // 检查这个用户是否是以系统分配模式开始
	var checkNearByUser = '/stocktaking-users/check-nearby-users'; // 检查这个用户是否是以临近货位模式开始
	var getStockInfo = '/stocktaking-orders/stock-information'; // 获取用户的盘点信息
	var overageOrLoss = '/stocktaking-orders/overage-or-loss';

	// reBatch
	var checkRebatchStation = "/wms/rebatch-stations";
	var checkRebatchTote = "/wms/rebatch-positions";
	var checkRebatchSlot = "/wms/rebatch-positions/{positionId}/finish";
	var confirmRebatch = "/wms/rebatch-requests/{requestId}/finish";
	var getFullSlot="/wms/rebatch-requests/open"

	// 移动包裹
	var bindingContainerAndSortCode = "/sorting/binding/container";
	var sortingPackage = "/sorting";
	var getPackingStation = "/sorting/scanning/shipment";
	var getAll = "/sorting/containers";
	var markContainerFull = "/sorting/marking/container";
	//工具
	var searchInventoryBySku="/internal-tool/search-inventory/item-data-global/sku"; //查找商品信息
	var getItemRecords="/internal-tool/search-inventory/item-records"; //查找sku库存记录
	var getContainerRecords="/internal-tool/search-inventory/storage-records"; //按容器查询库存记录
	var scanningSource="/internal-tool/move-goods/scanning/source"; //扫描移货的原始容器
	var scanningSku="/internal-tool/move-goods/scanning/sku"; //扫描移货的商品条码
	var scanningDestination="/internal-tool/move-goods/scanning/destination"; //扫描移货的目的容器
	var moving="/internal-tool/move-goods/moving"; //进行移货
	var scanLotSource="/internal-tool/entry-lot/scanning/source"; //扫描修改有效期的原始容器
	var scaningLotSku="/internal-tool/entry-lot/scanning/sku"; //扫描修改有效期的商品条码
	var entering="/internal-tool/entry-lot/entering"; //进行修改
	var mushinyAjaxLogin = function(options) {

		$.ajax({
			type : "post",
			url : before + options.url,

			// contentType: options.contentType ||
			// "application/json;charset=utf-8",
			data : options.data,
			dataType : "json",
			contentType : "application/x-www-form-urlencoded;charset=utf-8",

			success : function(data) {

				options.success && options.success(data);
				//
			},
			error : function() {
				console.log("ajax error", arguments);
			}
		});
	}
	var mushinyAjaxProblem = function(options) {

		$.ajax({
			contentType : options.contentType || "application/json;charset=utf-8",
			type : options.type || "GET",
			url : problem + options.url,
			cache : false,
			async : (options.async != null ? options.async : false),
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
				console.log("ajax error", arguments);
				options.error && options.error(data);
			}
		});
	}
	var mushinyAjax = function(options)

	{
		var stirngHost = host;
		if (options.url.substring(0, 5) == "/wms/") {
			stirngHost = pickHost
		}
		$.ajax({

			contentType : options.contentType || "application/json;charset=utf-8",
			type : options.type || "GET",
			url : stirngHost + options.url,
			cache : false,
			async : (options.async != null ? options.async : false),
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
							// me.comp('windowReceiver1').windowEnsure(state);
						}
					};
					mushinyAjaxLogin(opt);
				} else {
					options.error && options.error(data);
				}
			}
		});

	};
	var mushinyAjaxLa = function(options)

	{

		$.ajax({
			type : options.type || "GET",
			url : host + options.url,
			cache : false,
			contentType : options.contentType || "application/json;charset=utf-8",
			async : (options.async != null ? options.async : false),
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
	}
	var mushinyAjaxICQA = function(options)

	{

		$.ajax({

			contentType : options.contentType || "application/json;charset=utf-8",
			type : options.type || "GET",
			url : ICQA + options.url,
			cache : false,
			async : (options.async != null ? options.async : false),
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
				console.log("ajax error", arguments);
				options.error && options.error(data);
			}
		});
	}
	var mushinyAjaxGet = function(options) {
		$.ajax({

			contentType : options.contentType || "application/json;charset=utf-8",
			type : "post",
			url : before + getUserWarehouse,
			cache : false,
			async : (options.async != null ? options.async : false),
			dataType : "json",
			data : options.data,

			success : function(data) {
				options.success && options.success(data);
			},
			error : function() {
				console.log("ajax error", arguments);
			}
		});
	}
	var mushinyAjaxDel = function(options) {
		var form = new FormData();
		$.each(options.data, function(key, val) {
			form.append(key, options.data[key])

		});

		$.ajax({
			type : "delete",
			url : host + options.url,
			cache : false,

			processData : false,
			contentType : false,
			dataType : "text",

			data : form,
			beforeSend : function(XMLHttpRequest) {
				// XMLHttpRequest.setRequestHeader("Authorization","Bearer
				// 3819e770-df35-4f08-a08b-a7182223698c");
				XMLHttpRequest.setRequestHeader("Authorization", "Bearer " + sessionStorage["token"]);
				XMLHttpRequest.setRequestHeader("Warehouse", sessionStorage["warehouses"]);

			},
			success : function(data) {
				options.success && options.success(data);
			},
			error : function(data) {
				var message = eval("(" + data.responseText + ")")
				console.log("ajax error", arguments);
				if (message.message == "org.springframework.web.client.HttpClientErrorException: 401 Unauthorized") {

					var opt = {
						url : refresh_token,
						data : "grant_type=refresh_token&refresh_token=" + sessionStorage["token"] + "&scope=ui",
						success : function(data) {


							sessionStorage["token"] = data.access_token
							mushinyAjaxDel(options)
							// me.comp('windowReceiver1').windowEnsure(state);
						}

					}
					mushinyAjaxLogin(opt)
				} else {
					options.error && options.error(data);
				}
			}
		});

	}
	return {

		reportGoodsToDamageContainer : reportGoodsToDamageContainer,
		scanningDamageContainer : scanningDamageContainer,
		stowingGoods : stowingGoods,
		scanningDamageContainer : scanningDamageContainer,
		itemDatas : itemDatas,
		mushinyAjaxDel : mushinyAjaxDel,
		containerAvailableAmount : containerAvailableAmount,
		storageLocations : storageLocations,
		mushinyAjaxProblem : mushinyAjaxProblem,
		andonMasters : andonMasters,
		andonMasterTypes : andonMasterTypes,
		warehousesid : {},
		getUserWarehouse : getUserWarehouse,
		mushinyAjaxGet : mushinyAjaxGet,
		mushinyAjaxLa : mushinyAjaxLa,
		loginUrl : loginUrl,
		StockUnitController : StockUnitController,
		mushinyAjax : mushinyAjax,
		mushinyAjaxGet : mushinyAjaxGet,
		mushinyAjaxICQA : mushinyAjaxICQA,
		menu : menu,
		stowingContainer : stowingContainer,
		receivingStation : receivingStation,
		ContainerMessage : ContainerMessage,
		adviceRequests : adviceRequests,
		scanContainer : scanContainer,
		language : language,
		resourceMap : "",
		scanStorageLocation : scanStorageLocation,
		receivingGoodsToStockUnit : receivingGoodsToStockUnit,
		scanContainer : scanContainer,
		scanContainerItemData : scanContainerItemData,
		mushinyAjaxLogin : mushinyAjaxLogin,
		andonInbounds : andonInbounds,
		adviceRequests : adviceRequests,
		scanContainer : scanContainer,
		receivingGoodsToStockUnit : receivingGoodsToStockUnit,
		saveReceivingProcessContainer : saveReceivingProcessContainer,
		deleteReceivingProcessContainers : deleteReceivingProcessContainers,
		updateReceivingProcessContainer : updateReceivingProcessContainer,
		getReceivingProcessContainers : getReceivingProcessContainers,
		scanReceivingStation : scanReceivingStation,
		scanReceivingDestination : scanReceivingDestination,
		activateAdviceNo : activateAdviceNo,
		scanAdvicePositionItemData : scanAdvicePositionItemData,
		getContainer : getContainer,
		scanAdviceRequest : scanAdviceRequest,
		checkContainer : checkContainer,
		// ///////////////////// pick
		picksFrom:picksFrom,
		batch : batch,
		pickingContainers : pickingContainers,
		picksLocations : picksLocations,
		picksItems : picksItems,
		picks : picks,
		pickStart : pickStart,
		assign : assign,
		unreserve : unreserve,
		batchCheck : batchCheck,
		pickingCarts : pickingCarts,
		// /////////////////////////
		getStocktakingOrders : getStocktakingOrders,
		getStocktakingLocation : getStocktakingLocation,
		updateStocktakingOrders : updateStocktakingOrders,
		saveStocktakingRecords : saveStocktakingRecords,
		checkCounts : checkCounts,
		checkUsers : checkUsers,
		userAction : userAction,
		checkPeoples : checkPeoples,
		checkLocataion : checkLocataion,
		checkSystemUser : checkSystemUser,
		checkNearByUser : checkNearByUser,
		getStockInfo : getStockInfo,
		checkSku : checkSku,
		ICQA : ICQA,
		overageOrLoss : overageOrLoss,
		// reBatch
		checkRebatchStation : checkRebatchStation,
		checkRebatchTote : checkRebatchTote,
		checkRebatchSlot : checkRebatchSlot,
		confirmRebatch : confirmRebatch,
		getFullSlot:getFullSlot,
		// 移动包裹
		sorting : sorting,
		bindingContainerAndSortCode : bindingContainerAndSortCode,
		sortingPackage : sortingPackage,
		getPackingStation : getPackingStation,
		getAll : getAll,
		markContainerFull : markContainerFull,
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