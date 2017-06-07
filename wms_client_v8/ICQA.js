define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var hotKey=require("$UI/wms_client_v8/js/hotKey");
	var api=require("$UI/wms_client_v8/js/api");
	var Model = function(){
		this.callParent();
	};

	Model.prototype.button1Click = function(event){
 navigator.app.exitApp();
	};

 

	Model.prototype.quitClick = function(event){
  justep.Shell.closePage();
	};

 

	Model.prototype.mainbtnClick = function(event){
		  justep.Shell.showPage("login3");
	};

 

	Model.prototype.modelParamsReceive = function(event){
		
                         
                 
 
	
          } ;
        
	 

      	Model.prototype.STOCKTAKING_DAILY = function(event){
      		justep.Shell.showPage("dailyMain");
      	};

       

      	Model.prototype.STOCKTAKING_SYSTEM = function(event){
      		justep.Shell.showPage("systemMain");
      	};

       

      	Model.prototype.INPUT_VALIDITY = function(event){
      		justep.Shell.showPage("vaildMain");
      	};
 

	Model.prototype.panel1Click = function(event){
 $(this.getElementByXid("panel1")).focus(); 
	};
        
	 

 

	Model.prototype.quitKeypress = function(event){
    
	};
        
	 

 

	Model.prototype.panel1Keydown = function(event){
        switch(event.keyCode)
        {
          case 49:
       
           if($("#buttonSTOCKTAKING_DAILY").length>0)
           {	
                $("#buttonSTOCKTAKING_DAILY").click();
           }
           break;
           case 50:
              if($("#buttonSTOCKTAKING_SYSTEM").length>0)
           {	
                $("#buttonSTOCKTAKING_SYSTEM").click();
           }
            break;
               case 51:
              if($("#buttonINPUT_VALIDITY").length>0)
           {	
                $("#buttonINPUT_VALIDITY").click();
           }
            break;
            default:
            	break;
        }
	};
        
	 

 

	Model.prototype.modelActive = function(event){
$(this.getElementByXid("panel1")).focus();
	};
        
	 

 

	Model.prototype.modelLoad = function(event){
          var data =eval("("+sessionStorage["ICQA"]+")");
       $(this.getElementByXid("divmain")).empty();
	var fun = function(me,data){
	

			$.each(data, function(i) {
		     
              var html='<div xid="div'+data[i].rfMenu.module.resourceKey+'"  style="width:60%;height:18%;margin:auto auto 0.5rem auto;"  class="center-block"><a component="$UI/system/components/justep/button/button"   id="button'+data[i].rfMenu.module.resourceKey+'"  class="btn btn-default btnstyle"  label="1-Inbound"  style="width:100%;background-color:#D3CFD0;font-size:0.6rem;color:#000000;font-family:Calibri;font-weight:bold;" onClick="'+'justep.Bind.contextFor(this).$model.'+data[i].rfMenu.module.resourceKey+'()'+'"><i xid="i6"></i><span xid="span6">'+hotKey.mainMatching(data[i].rfMenu.module.resourceKey,hotKey.ICQA)+'-'+api.resourceMap[data[i].rfMenu.module.resourceKey]+'</span></a></div>'
                             $(me.getElementByXid("divmain")).append(html)
                             
                           // sessionStorage[data[i].rfMenu.module.resourceKey]=JSON.stringify(data[i].childMenuItems);
                 

       });
          } ;
	 
		  fun(this,data);
		  $(this.getElementByXid("panel1")).focus(); 
	};
        
	 

 

	return Model;
});