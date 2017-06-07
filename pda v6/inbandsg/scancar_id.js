define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var api = require("$UI/truk/js/api");
	var stowMessage = require("$UI/truk/js/STOW");
	
	var Model = function() {
		this.callParent();
	 
        this.carName = justep.Bind.observable("");
	};

	

	var str = "";

	/* window.onkeydown = function(e){
	
	 if (e.keyCode == "13") {
	
	 //回车执行查询
	 console.log(str);
	 window.onkeydown =null;
	 }
	 else 
	 {
	 str=str+e.key;
	 }
	 }*/

	Model.prototype.mainbtnClick = function(event) {

		var url = require.toUrl('../inbandsg/start.w');
		this.comp('windowDialog1').open({
			src : url
		});
		//justep.Shell.showPage("start.w");
		/*	this.comp("messageDialog1").show({
				type : "yesno",
				title : "qwe123",s
				message : "message",
				 
				 
				 
			});*/
	};

	Model.prototype.panel1Keypress = function(event) {

	};

	Model.prototype.input1Keypress = function(event) {

	};

	Model.prototype.messageDialog1Yes = function(event) {
		var url = require.toUrl('$UI/mushiny/login3.w');
		//   this.comp('windowDialog1').open({src:url});
		justep.Shell.showPage("login3");

	};

	Model.prototype.input2Keypress = function(e) {
		var params ;
        if( $.trim(e.target.value)!="")
        {
   
		if (e.keyCode == "13") {
			//if( $.trim(event.target.value)!="")
           // {
           this.comp("input2").val();
			var data = {
				name :   this.comp("input2").val()
			}

			function rest(me)
				{
				return function(data) {
					;
				
					sessionStorage["containerId"] = data.container.id;
					sessionStorage["containerName"] =    me.comp("input2").val();
					stowMessage.amount = data.amount;
					if(data.receivingDestination)
						{
					sessionStorage["receivingDestination"] =data.receivingDestination.name
						}
					else
						{
						sessionStorage["receivingDestination"] ="无";
						}
					 params = {
					 
						description : sessionStorage["receivingDestination"]
					};
								var data = {
			containerId : sessionStorage["containerId"]
		}
		var fun = function(me)

		{
			return function(data) {
				;
			
			sessionStorage["containerAmount"] =data;
			sessionStorage["containerConstantly"]=data;
			$(me.getElementByXid("div1")).hide();
			
		stowMessage.amount=0;
	    stowMessage.itemDataId="";
	    stowMessage.binName="";
	    stowMessage.binId="";
	    stowMessage.amountmax="";
	    stowMessage.lastBinName="";
	    stowMessage.mainType="";
	    stowMessage.itemDataqty=0;
	    stowMessage.itemGroupName="";
	    stowMessage.damageqty=0
		     var self=me;
				 
			justep.Shell.showPage("usermessage", params).done( function(){self.close()});
		 
			}
		}
		var opt = {
			data : data,
			type : "get",
			url : api.containerAvailableAmount,
			success : fun(me)
		}
		// 扫车牌获取数量
		api.mushinyAjax(opt);
				}
				}
			var errorContainer = function(me) {
				return function(data) {
					;
					var waring=$(me.getElementByXid("div1"));
					
					//商品条码无效
					 
				/*	if (data.responseJSON.key == "EX_CONTAINER_IS_EMPTY_STATE") {
						waring.show();
						waring.html("<span>"+data.responseJSON.message+"</span>")
					 
					}
					if (data.responseJSON.key == "EX_CONTAINER_NOT_FOUND") {
						waring.show();
							waring.html("<span>小车不存在</span>")
						 
					}*/
					waring.show();
					waring.html("<span>"+data.responseJSON.message+"</span>")
                      
				}
}
			var opt = {
				data : data,
				type : "get",
				url : api.ContainerMessage,
				success :rest(this) 
				,
				error:errorContainer(this)
			}
			api.mushinyAjax(opt);
			
			//}
			//else
				//{
				       
				//}
			

			//alert($("#i1pt").val());
			//var url = require.toUrl('../inbandsg/ground.w');
			//this.comp('windowDialog1').open({src:url});

			//   justep.Shell.showPage("usermessage");
	
		}}
	};

	Model.prototype.input2Focus = function(event) {
		//Keyboard.hide();
	};

	Model.prototype.input2Click = function(event) {

		//Keyboard.hide();
	};

	Model.prototype.modelLoad = function(event){
$(this.getElementByXid("input2")).focus();
	};

	Model.prototype.panel1Click = function(event){
$(this.getElementByXid("input2")).focus();
	};

	Model.prototype.modelActive = function(event){
$(this.getElementByXid("input2")).focus();
	};

	return Model;
});