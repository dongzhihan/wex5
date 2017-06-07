define(function (require) {


	return {

		//surplus:0,//单商品剩余数量
		pickCar: "", //拣货车
		pickCarId: "", //unitload拣货车id
		BatchNo: "", //批次号
		BatchId: "",
		//PickType:"",//拣货类型
		// storageLoction:"", //当前货位
		qty: 0,
		firstLocationName: "", //第一个货位
		LocationId: "", //货位ID
		itemId: "",
		lostQty: 0,
		pickQty:0,
		//pickType:"",
		// text:"",
	
		pickT: "",
		// pickSur:0,  //单商品拣货数量
		picks: [], //当前拣货信息  //////////////////////>基本信息都可获取  
		positionId: "",
		pickCarCount: 0,
        pickOriginalCar:null,
    	pickOriginalCarId:null

	};





});