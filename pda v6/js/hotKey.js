
define(function(require){ 
	var mainMenu={INBOUND:1,OUTBOUND:2,VENDOR_RETURN:3,ICQA:4,PROBLEM:5}
	var inBoundMenu={STOW:1,RECEIVING:2}
	var outBoundMenu={PICK:1,RE_BATCH:2,MOVE_PACKAGE:5}
	var ICQA={STOCKTAKING_DAILY:1,STOCKTAKING_SYSTEM:2}
	var problemMenu={QUERY_TOOL:1,MOVE_TOOL:2,INPUT_VALIDITY:3}
	var probleMovemMenu={ORGIN_CONTAINER:1,DESTINATION_CONTAINER:2,ORGIN_DESTINATION:3,MOVE_EACH:4}
	var probleValiditymMenu={ORGIN_CONTAINER:1,VALIDITY_EACH:2}
	var aodom={P:"1",R11:"1",R12:"1",R13:"1",R14:"1",R2:"2",R3:"3",R4:"4",R5:"5",R6:"6",R7:"7",R8:"8",R9:"9",R101:"10",R102:"10",R103:"10",R104:"10",M:"11"}
	var mainMatching=function (name,mainMenu)
	{
	return	mainMenu[name] || 0
	}
	return { 
		aodom:aodom,
		mainMatching:mainMatching,
		mainMenu:mainMenu,
		ICQA:ICQA,
		inBoundMenu:inBoundMenu,
		outBoundMenu:outBoundMenu,
		problemMenu:problemMenu,
		probleMovemMenu:probleMovemMenu,
		probleValiditymMenu:probleValiditymMenu
	}; 
	 
	
}); 