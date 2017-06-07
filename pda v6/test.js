define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var api=require("$UI/truk/js/api");
	var Model = function(){
		this.callParent();
	};
      
     function qwe(options)
     {
    	 $.ajax({
	          type: options.type || "GET",
	          url:options.url,
	          cache: false,
	          async: (options.async!=null? options.async: false),
	          
	          dataType: options.dataType || "json",
	          
	          data: options.data || {},
	          beforeSend: function(XMLHttpRequest){
	        	 // XMLHttpRequest.setRequestHeader("Authorization","Bearer 3819e770-df35-4f08-a08b-a7182223698c");
	        	  XMLHttpRequest.setRequestHeader("Warehouse", "DEFAULT");
	          },
	          success: function(data){
	            options.success && options.success(data);
	          },
	          error: function(){
	          }
	        });

     }
	Model.prototype.modelLoad = function(event){

	       var opt={
	          type: "get",
	          url: "http://192.168.1.101:9292/andon-masters",
	         dataType:"text",
	          cache: false,
	          contentType: "application/json",
	          
	          data: {
	        	  locationNo:"z6"
	         },
	          beforeSend: function(XMLHttpRequest){
	        	//  XMLHttpRequest.setRequestHeader("Authorization","Bearer 3819e770-df35-4f08-a08b-a7182223698c");
	        	  XMLHttpRequest.setRequestHeader("Warehouse", "DEFAULT");
	          },
	          success: function(data){
	            //options.success && options.success(data);
	          },
	          error: function(){
	          }
	        };
	       qwe(opt)
	 
	}
	 
	return Model;
});