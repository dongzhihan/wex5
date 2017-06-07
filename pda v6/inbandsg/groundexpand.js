
define(function(require){ 
	return { 
		goodsallshow: function ()
	{
		 $("#goodsall").text($("#scaninput").val());
		        $("#goodsall").show();
		 },
	  show: function ()
		{
		 
				 $("#qty").show();
		 }
		 
	}; 
	 
	
}); 