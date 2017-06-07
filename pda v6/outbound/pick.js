
define(function(require){ 
	var $ = require("jquery");
 
	return { 
		goodsallshow: function ()
	{
		 //$("#goodsall").text($("#scaninput").val());
		        $("#goodsall").show();
		 },
	  hide: function (abc)
		{
		  $(abc.getElementByXid("allocation")).hide();
				
		 },
		 mainType:"s"
		 
		 
	}; 
	 
	
}); 