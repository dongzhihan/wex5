
define(function(require){ 
	var $ = require("jquery");
 
	return { 
		goodsallshow: function ()
	{
		 //$("#goodsall").text($("#scaninput").val());
		        $("#goodsall").show();
		 },
		 successsgscanid: function (message,thenA)
		{
		 
			 var mesg = $("#"+message).show();
			 mesg.css("text-align", "left");
				    var html = '<span class="spstyle3">已成功标记</br></span><span class="spstyle2">'+thenA+'</span><span class="spstyle3">扫描枪扫描商品/货位卡顿</span>'
				    	mesg.html(html);
				    mesg.css("color", "#FFFFFF");
				    mesg.css("background", "linear-gradient(#7EB75D, #62A336)");
				    
				 
		 }
		 ,
		 //R4
		 R4: function (message,thenA)
		{
		 
			  var mesg = $("#"+message).show();
			  mesg.css("text-align", "left");
				    var html = '<span class="spstyle3">已成功标记货位：</br></span><span class="spstyle2">'+thenA+'</span></br><span class="spstyle3">套装被拆/不全</span>'
				    	mesg.html(html);
				    mesg.css("color", "#FFFFFF");
				    mesg.css("background", "linear-gradient(#7EB75D, #62A336)");
				    
				 
		 }
		 ,
		 //R5
		 R5: function (message,thenA)
		{
		 
			  var mesg = $("#"+message).show();
			  mesg.css("text-align", "left");
				    var html = '<span class="spstyle3">已成功标记货位：</br></span><span class="spstyle2">'+thenA+'</span></br><span class="spstyle3">套装组套错误</span>'
				    	mesg.html(html);
				    mesg.css("color", "#FFFFFF");
				    mesg.css("background", "linear-gradient(#7EB75D, #62A336)");
				    
				 
		 }
		 ,
		 //R6
		 R6: function (message,thenA)
		{
		 
			  var mesg = $("#"+message).show();
			  mesg.css("text-align", "left");
				    var html = '<span class="spstyle3">已成功标记货位：</br></span><span class="spstyle2">'+thenA+'</span></br><span class="spstyle3">相似商品在相同货位</span>'
				    	mesg.html(html);
				    mesg.css("color", "#FFFFFF");
				    mesg.css("background", "linear-gradient(#7EB75D, #62A336)");
				    
				 
		 }
		 ,
		 //R7
		 R7: function (message,thenA)
		{
		 
			  var mesg = $("#"+message).show();
			  mesg.css("text-align", "left");
				    var html = '<span class="spstyle3">已成功标记货位：</br></span><span class="spstyle2">1-2-A056-020B01</span></br><span class="spstyle3">货位商品太满</span>'
				    	mesg.html(html);
				    mesg.css("color", "#FFFFFF");
				    mesg.css("background", "linear-gradient(#7EB75D, #62A336)");
				    
				 
		 }
		 ,
		 //R8
		 R8: function (message,thenA)
		{
		 
			  var mesg = $("#"+message).show();
			  mesg.css("text-align", "left");
				    var html = '<span class="spstyle3">已成功标记货位：</br></span><span class="spstyle2">1-2-A056-020B01</span></br><span class="spstyle3">货位存在安全隐患</span>'
				    	mesg.html(html);
				    mesg.css("color", "#FFFFFF");
				    mesg.css("background", "linear-gradient(#7EB75D, #62A336)");
				    
				 
		 }
		 ,
		 //R9
		 R9: function (message,thenA)
		{
		 
			  var mesg = $("#"+message).show();
			  mesg.css("text-align", "left");
				    var html = '<span class="spstyle3">已成功标记货位：</br></span><span class="spstyle2">'+thenA+'</span></br><span class="spstyle3">货位需要检查</span>'
				    	mesg.html(html);
				    mesg.css("color", "#FFFFFF");
				    mesg.css("background", "linear-gradient(#7EB75D, #62A336)");
				    
				 
		 },
		 
		 //R3
		 R3: function (message,thenA)
			{
			 
				 var mesg = $("#"+message).show();
				  mesg.css("text-align", "left");
					    var html = '<span class="spstyle3">已成功标记货位：</br></span><span class="spstyle2">'+thenA+'1</span></br><span class="spstyle3">货位存在无法扫描商品</span>'
					    	mesg.html(html);
					    mesg.css("color", "#FFFFFF");
					    mesg.css("background", "linear-gradient(#7EB75D, #62A336)");
					    
					 
			 }
		 ,
		 //R2
		 R2: function (message,thenA)
			{
			 
				  var mesg=$("#"+message).show();
				  mesg.css("text-align", "left");
					    var html = '<span class="spstyle3">已成功标记货位：</br></span><span class="spstyle2">'+thenA+'</span></br><span class="spstyle3">货位存在残品</span>'
					    	mesg.html(html);
					    mesg.css("color", "#FFFFFF");
					    mesg.css("background", "linear-gradient(#7EB75D, #62A336)");
					    
					 
			 }
		 ,
		 //R1
		 R1: function (message,thenA)
			{
			 
				 var mesg= $("#"+message).show();
				 mesg.css("text-align", "left");
					    var html = '<span class="spstyle3">已成功标记货位：</br></span><span class="spstyle2">'+thenA+'</span></br><span class="spstyle3">货位无法扫描</span>'
					    	mesg.html(html);
					    mesg.css("color", "#FFFFFF");
					    mesg.css("background", "linear-gradient(#7EB75D, #62A336)");
					    
					 
			 }
		 ,
		 //R1sg
		 hwquestionR1sg: function (message,thenA)
			{
			 
				 var mesg= $("#"+message).show();
				 mesg.css("text-align", "left");
				 var html = '<span class="spstyle3">已成功标记货位：</br></span><span class="spstyle2">'+thenA+'</span></br><span class="spstyle3">套装被拆/不全</span></br></br><span class="spstyle3">请扫描商品继续上架</span>'
					    	mesg.html(html);
					    mesg.css("color", "#FFFFFF");
					    mesg.css("background", "linear-gradient(#7EB75D, #62A336)");
					    
					 
			 }
		 ,
		 //R2sg
		 hwquestionR2sg: function (message,thenA)
			{
			 
				 var mesg= $("#"+message).show();
				 mesg.css("text-align", "left");
				 var html = '<span class="spstyle3">已成功标记货位：</br></span><span class="spstyle2">'+thenA+'</span></br><span class="spstyle3">货位存在残品</span></br></br><span class="spstyle3">请扫描商品继续上架</span>'
					    	mesg.html(html);
					    mesg.css("color", "#FFFFFF");
					    mesg.css("background", "linear-gradient(#7EB75D, #62A336)");
					    
					 
			 }
		 ,
		 //R3sg
		 hwquestionR3sg: function (message,thenA)
			{
			 
				 var mesg= $("#"+message).show();
				 mesg.css("text-align", "left");
				 var html = '<span class="spstyle3">已成功标记货位：</br></span><span class="spstyle2">'+thenA+'</span></br><span class="spstyle3">货位存在无法扫描商品</span></br></br><span class="spstyle3">请扫描商品继续上架</span>'
					    	mesg.html(html);
					    mesg.css("color", "#FFFFFF");
					    mesg.css("background", "linear-gradient(#7EB75D, #62A336)");
					    
					 
			 }
		 ,
		 //R4sg
		 hwquestionR4sg: function (message,thenA)
			{
			 
				 var mesg= $("#"+message).show();
				 mesg.css("text-align", "left");
				 var html = '<span class="spstyle3">已成功标记货位：</br></span><span class="spstyle2">'+thenA+'</span></br><span class="spstyle3">套装被拆/不全</span></br></br><span class="spstyle3">请扫描商品继续上架</span>'
					    	mesg.html(html);
					    mesg.css("color", "#FFFFFF");
					    mesg.css("background", "linear-gradient(#7EB75D, #62A336)");
					    
					 
			 }
		 ,
		 //R5sg
		 hwquestionR5sg: function (message,thenA)
			{
			 
				 var mesg= $("#"+message).show();
				 mesg.css("text-align", "left");
				 var html = '<span class="spstyle3">已成功标记货位：</br></span><span class="spstyle2">'+thenA+'</span></br><span class="spstyle3">套装组套错误</span></br></br><span class="spstyle3">请扫描商品继续上架</span>'
					    	mesg.html(html);
					    mesg.css("color", "#FFFFFF");
					    mesg.css("background", "linear-gradient(#7EB75D, #62A336)");
					    
					 
			 }
		 ,
		 //R6sg
		 hwquestionR6sg: function (message,thenA)
			{
			 
				 var mesg= $("#"+message).show();
				 mesg.css("text-align", "left");
				 var html = '<span class="spstyle3">已成功标记货位：</br></span><span class="spstyle2">'+thenA+'</span></br><span class="spstyle3">相似商品在相同货位</span></br></br><span class="spstyle3">请扫描商品继续上架</span>'
					    	mesg.html(html);
					    mesg.css("color", "#FFFFFF");
					    mesg.css("background", "linear-gradient(#7EB75D, #62A336)");
					    
					 
			 }
		 ,
		 //R7sg
		 hwquestionR7sg: function (message,thenA)
			{
				 var mesg= $("#"+message).show();
				 mesg.css("text-align", "left");
				 var html = '<span class="spstyle3">已成功标记货位：</br></span><span class="spstyle2">'+thenA+'</span></br><span class="spstyle3">货位商品太满</span></br></br><span class="spstyle3">请扫描商品继续上架</span>'
					    	mesg.html(html);
				 mesg.css("color", "#FFFFFF");
				 mesg.css("background", "linear-gradient(#7EB75D, #62A336)");
					    
					 
			 }
		 ,
		 //R8sg
		 hwquestionR8sg: function (message,thenA)
			{
			 
				 var mesg= $("#"+message).show();
				 mesg.css("text-align", "left");
				 var html = '<span class="spstyle3">已成功标记货位：</br></span><span class="spstyle2">'+thenA+'</span></br><span class="spstyle3">货位存在安全隐患</span></br></br><span class="spstyle3">请扫描商品继续上架</span>'
					    	mesg.html(html);
					    mesg.css("color", "#FFFFFF");
					    mesg.css("background", "linear-gradient(#7EB75D, #62A336)");
					    
					 
			 }
		 ,
		 //R9sg
		 hwquestionR9sg: function (message,thenA)
			{
			 
				 var mesg= $("#"+message).show();
				 mesg.css("text-align", "left");
				 var html = '<span class="spstyle3">已成功标记货位：</br></span><span class="spstyle2">'+thenA+'</span></br><span class="spstyle3">货位需要检查</span></br></br><span class="spstyle3">请扫描商品继续上架</span>'
					    	mesg.html(html);
					    mesg.css("color", "#FFFFFF");
					    mesg.css("background", "linear-gradient(#7EB75D, #62A336)");
					    
					 
			 }
		 
	}; 
	 
	
}); 