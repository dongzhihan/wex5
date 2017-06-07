	
define(function(require){ 
	var mainMenu={INBOUND:0,OUTBOUND:1,VENDOR_RETURN:4,ICQA:2,INTERNAL_TOOL:3};
	var outBoundMenu={REBATCH:1,MOVE_PACKAGE:2,LOAD_PARCEL:3};
	var ICQA={STOCKTAKING_DAILY:1,STOCKTAKING_SYSTEM:2};
	var problemMenu={QUERY_TOOL:1,MOVE_TOOL:2,INPUT_VALIDITY_TOOL:3};
	var aodom={P:"货位条码无法扫描",R11:"货位条码无法扫描",R12:"货位条码无法扫描",R13:"货位条码无法扫描",R14:"货位条码无法扫描",R2:"货位存在残品",R3:"货位存在条码无法扫描商品",R4:"套装被拆/不全",R5:"套装组套错误",R6:"相似商品在相同货位",R7:"货位商品太满",R8:"货位存在安全隐患",R9:"货位存在安全隐患",R101:"扫描枪存在问题",R102:"扫描枪存在问题",R103:"扫描枪存在问题",R104:"扫描枪存在问题",M:"11"};
	var mainMatching=function (name,mainMenu)
	{
	return	mainMenu[name] || 0;
	};
	return { 
		aodom:aodom,
		mainMatching:mainMatching,
		mainMenu:mainMenu,
		ICQA:ICQA,
		outBoundMenu:outBoundMenu,
		problemMenu:problemMenu,
	}; 
	 
	
}); 