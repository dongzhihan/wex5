define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var hotKey=require("$UI/truk/js/hotKey");
	var api=require("$UI/truk/js/api");
	var Model = function(){
		this.callParent()
		
	};

	Model.prototype.button1Click = function(event){
   
	};

	Model.prototype.quitClick = function(event){
    justep.Shell.closePage();
	};
	Model.prototype.mainbtnClick = function(event){
	 justep.Shell.showPage("login3");
	};

	Model.prototype.PICK = function(event){
		justep.Shell.showPage("outbandstart");
	};

	Model.prototype.RE_BATCH = function(event){
      justep.Shell.showPage("rebatch");
	};
	
	Model.prototype.MOVE_PACKAGE = function(event){
	      justep.Shell.showPage("move");
	};

	Model.prototype.modelParamsReceive = function(event){
   
	};

	Model.prototype.panel1Click = function(event){
            $(this.getElementByXid("panel1")).focus(); 
	};

	Model.prototype.panel1Keydown = function(event){
                  switch(event.keyCode)
           {
             case 49:
          
              if($("#buttonPICK").length>0)
              {	
                   $("#buttonPICK").click();
              }
              break;
              case 50:
                 if($("#buttonRE_BATCH").length>0)
              {	
                   $("#buttonRE_BATCH").click();
              }
              break;
              case 51:
            	  if($("#buttonMOVE_PACKAGE").length>0)
                  {	
                       $("#buttonMOVE_PACKAGE").click();
                  }
              break;
              case 52:
              break;
              case 53:
                  if($("#buttonPACK").length>0)
              {	
                   $("#buttonPACK").click();
              }
              break;
           }
	};

	Model.prototype.modelActive = function(event){
$(this.getElementByXid("panel1")).focus();
	};

	Model.prototype.modelLoad = function(event){
     var data =eval("("+sessionStorage["OUTBOUND"]+")");
       $(this.getElementByXid("divmain")).empty();
	var fun = function(me,data){
	

			$.each(data, function(i) {
		 
              var html='<div xid="div'+data[i].rfMenu.module.resourceKey+'"  style="width:60%;height:18%;margin:auto auto 0.5rem auto;"  class="center-block"><a component="$UI/system/components/justep/button/button"   id="button'+data[i].rfMenu.module.resourceKey+'" class="btn btn-default btnstyle"  label="1-Inbound"  style="width:100%;background-color:#D3CFD0;font-size:0.6rem;color:#000000;font-family:Calibri;font-weight:bold;" onClick="'+'justep.Bind.contextFor(this).$model.'+data[i].rfMenu.module.resourceKey+'()'+'"><i xid="i6"></i><span xid="span6">'+hotKey.mainMatching(data[i].rfMenu.module.resourceKey,hotKey.outBoundMenu)+'-'+api.resourceMap[data[i].rfMenu.module.resourceKey]+'</span></a></div>'
                             $(me.getElementByXid("divmain")).append(html)
                             
                           //  sessionStorage[data[i].rfMenu.module.resourceKey]=JSON.stringify(data[i].childMenuItems);
                 

       });
          } ;
	 
		  fun(this,data);
		  $(this.getElementByXid("panel1")).focus(); 
	};

	return Model;
});