define(function(require){
	var $ = require("jquery");
	var api=require("$UI/truk/js/api");
	var Model = function(){
		this.callParent();
	};
	
	    this.comename = justep.Bind.observable("");
	    this.comename.set("欢迎"+sessionStorage["working"]+"进入收货系统");
	    Model.prototype.button8Click = function(event){
	
           
	};

	Model.prototype.modelActive = function(event){
		this.comename.set("欢迎"+sessionStorage["working"]+"进入收货系统");
		 $(this.getElementByXid("input1")).focus();
	};

	Model.prototype.modelLoad = function(event){
		 $(this.getElementByXid("input1")).focus();
	};

	Model.prototype.button6Click = function(event){
  
   this.comp("contents1").to("content3");
	};

	Model.prototype.input1Keydown = function(e){

		var name="";
	   name= $(this.getElementByXid("input1")).val().trim();
	    if (e.keyCode == "13") {
	    	$(this.getElementByXid('errorCon')).hide();
	    if(name!=""){
           var opt={type:"get",url:api.scanReceivingStation,
           success:function(data){
           ;
           var params={
        		maxAmount:data.maxAmount,
        		receivingStationId:data.receivingStation.id
           };	

           justep.Shell.showPage("recipient",params) 
           },
           data:{name:name},
           error:this.error(this),
           };
           
              api.mushinyAjax(opt);
              }else{
            	  $('#errorMsg').html("请扫描工作站!");
		   		$(this.getElementByXid('errorCon')).show()
           }
	   }
};


	Model.prototype.error =function(me){
		   return function(data){
		
				   	$('#errorMsg').html(data.responseJSON.message);
				   	me.comp('input1').clear();
				   	$(me.getElementByXid('errorCon')).show();
			   
		   }
	}
	Model.prototype.content3Active = function(event){
         $(this.getElementByXid("input1")).focus();
	};

	Model.prototype.content3Click = function(event){
          $(this.getElementByXid("input1")).focus().select();
	};


	Model.prototype.modelInactive = function(event){
		this.comp('contents1').to('content2');
	};


	return Model;
});
