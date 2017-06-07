define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var api=require("$UI/truk/js/api");
	var hotKey=require("$UI/truk/js/hotKey");
	var Model = function(){
		this.callParent();
	};

	Model.prototype.button1Click = function(event){
navigator.app.exitApp();
	};

	Model.prototype.button5Click = function(event){
 justep.Shell.closePage();
	};

	Model.prototype.mainbtnClick = function(event){
		  var url = require.toUrl('$UI/truk/login3.w');
	       // this.comp('windowDialog1').open({src:url});
	       justep.Shell.showPage("login3");
	};

	Model.prototype.INBOUND = function(event){
  var url = require.toUrl('$UI/truk/login4.w');
       // this.comp('windowDialog1').open({src:url});
      justep.Shell.showPage("login4");
	};

	Model.prototype.quitClick = function(event){
 navigator.app.exitApp();
	};

	Model.prototype.OUTBOUND = function(event){
        var url = require.toUrl('$UI/truk/login5.w');
            
          justep.Shell.showPage("login5");
	};

	Model.prototype.PROBLEM = function(event){
              var url = require.toUrl('$UI/truk/login6.w');
       // this.comp('windowDialog1').open({src:url});
      
       justep.Shell.showPage("login6");
       
	};
	Model.prototype.ICQA = function(event){
          
 // this.comp('windowDialog1').open({src:url});
 
		justep.Shell.showPage("ICQA");
 
};
Model.prototype.VENDOR_RETURN = function(event){
    
	 // this.comp('windowDialog1').open({src:url});
	 
			 
	 
	};

	Model.prototype.modelActive = function(event){
	   $(this.getElementByXid("panel1")).focus();
	};
/*    var fi=function(api,data,me)
    {
    	return function(i) {
	 
             var html='<div xid="div'+data[i].rfMenu.module.resourceKey+'"  style="width:60%;height:18%;margin:auto auto 0.5rem auto;"  class="center-block"><a component="$UI/system/components/justep/button/button"   id="button'+data[i].rfMenu.module.resourceKey+'"  class="btn btn-default btnstyle"  label="1-Inbound"  style="width:100%;background-color:#D3CFD0;font-size:0.6rem;color:#000000;font-family:Calibri;font-weight:bold;" onClick="'+'justep.Bind.contextFor(this).$model.'+data[i].rfMenu.module.resourceKey+'()'+'"><i xid="i6"></i><span xid="span6">'+hotKey.mainMatching(data[i].rfMenu.module.resourceKey,hotKey.problemMenu)+'-'+api.resourceMap[data[i].rfMenu.module.resourceKey]+'</span></a></div>'
                            $(me.getElementByXid("divmain")).append(html)
                            
                           sessionStorage[data[i].rfMenu.module.resourceKey]=JSON.stringify(data[i].childMenuItems);
                

      }
    }*/
    
	Model.prototype.modelLoad = function(event){

 
	var fun = function(me){
 
			return function(data){ 
	 
			$.each(data, function(i) {
				 
	              var html='<div xid="div'+data[i].rfMenu.module.resourceKey+'"  style="width:60%;height:18%;margin:auto auto 0.5rem auto;"  class="center-block"><a component="$UI/system/components/justep/button/button"   id="button'+data[i].rfMenu.module.resourceKey+'"  class="btn btn-default btnstyle"  label="1-Inbound"  style="width:100%;background-color:#D3CFD0;font-size:0.6rem;color:#000000;font-family:Calibri;font-weight:bold;" onClick="'+'justep.Bind.contextFor(this).$model.'+data[i].rfMenu.module.resourceKey+'()'+'"><i xid="i6"></i><span xid="span6">'+hotKey.mainMatching(data[i].rfMenu.module.resourceKey,hotKey.mainMenu)+'-'+api.resourceMap[data[i].rfMenu.module.resourceKey]+'</span></a></div>'
	                             $(me.getElementByXid("divmain")).append(html)
	                             
	                            sessionStorage[data[i].rfMenu.module.resourceKey]=JSON.stringify(data[i].childMenuItems);
	                 

	       });
          } ;
     }
          var data={access_token:api.taken}
          	var opt={data:data,type:"get",url:api.menu,success:fun(this)}
         
              api.mushinyAjax(opt);
              $(this.getElementByXid("panel1")).focus(); 
	};

	Model.prototype.panel1Keydown = function(event){
	      
             switch(event.keyCode)
           {
             case 49:
          
              if($("#buttonINBOUND").length>0)
              {	
                   $("#buttonINBOUND").click();
              }
              break;
              case 50:
                 if($("#buttonOUTBOUND").length>0)
              {	
                   $("#buttonOUTBOUND").click();
              }
              break;
              case 51:
              break;
              case 52:
              if($("#buttonICQA").length>0)
                {
                
                     $("#buttonICQA").click();
                }
              break;
              case 53:
                  if($("#buttonPROBLEM").length>0)
              {	
                   $("#buttonPROBLEM").click();
              }
              break;
           }
	};

	Model.prototype.panel1Click = function(event){
 $(this.getElementByXid("panel1")).focus(); 
	};

	return Model;
});