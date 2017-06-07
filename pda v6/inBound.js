define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var hotKey=require("$UI/truk/js/hotKey");
	var api=require("$UI/truk/js/api");
	var Model = function(){
		this.callParent();
	};

	Model.prototype.button1Click = function(event){
          navigator.app.exitApp();
	};

	Model.prototype.mainbtnClick = function(event){
		  var url = require.toUrl('$UI/truk/login3.w');
	        //this.comp('windowDialog1').open({src:url});
	        justep.Shell.showPage("login3");
	};

	Model.prototype.STOW = function(event){
 
	        //this.comp('windowDialog1').open({src:url});
	        justep.Shell.showPage("start");
	};

	Model.prototype.quitClick = function(event){
      justep.Shell.closePage();
	};

	Model.prototype.RECEIVING = function(event){
	justep.Shell.showPage("shstart");
	};

	Model.prototype.modelParamsReceive = function(event){

	};

	Model.prototype.panel1Keydown = function(event){
        switch(event.keyCode)
        {
          case 49:
       
           if($("#buttonSTOW").length>0)
           {	
                $("#buttonSTOW").click();
           }
           break;
           case 50:
              if($("#buttonRECEIVING").length>0)
           {	
                $("#buttonRECEIVING").click();
           }
            break;
            default:
            	break;
        }
	};

	Model.prototype.panel1Click = function(event){
 $(this.getElementByXid("panel1")).focus(); 
	};

	Model.prototype.modelActive = function(event){
$(this.getElementByXid("panel1")).focus();
	};

	Model.prototype.modelLoad = function(event){
      
       var data =eval("("+sessionStorage["INBOUND"]+")");
   
	var fun = function(me,data){
	    $(me.getElementByXid("divmain")).empty();

			$.each(data, function(i) {
		     var html='<div xid="div'+data[i].rfMenu.module.resourceKey+'"  style="width:60%;height:18%;margin:auto auto 0.5rem auto;"  class="center-block"><a component="$UI/system/components/justep/button/button"   id="button'+data[i].rfMenu.module.resourceKey+'"  class="btn btn-default btnstyle"  label="1-Inbound"  style="width:100%;background-color:#D3CFD0;font-size:0.6rem;color:#000000;font-family:Calibri;font-weight:bold;" onClick="'+'justep.Bind.contextFor(this).$model.'+data[i].rfMenu.module.resourceKey+'()'+'"><i xid="i6"></i><span xid="span6">'+hotKey.mainMatching(data[i].rfMenu.module.resourceKey,hotKey.inBoundMenu)+'-'+api.resourceMap[data[i].rfMenu.module.resourceKey]+'</span></a></div>'
              $(me.getElementByXid("divmain")).append(html)
                             
                 

       });
          } ;
	 
		  fun(this,data);
		  $(this.getElementByXid("panel1")).focus(); 
	};

	return Model;
});