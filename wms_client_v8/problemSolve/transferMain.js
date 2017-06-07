define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var hotKey=require("$UI/wms_client_v8/js/hotKey");
	var api = require("$UI/wms_client_v8/js/api");
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.mainbtnClick = function(event){
		justep.Shell.showPage("login3");
	};

	Model.prototype.button4Click = function(event){
		
	};

	Model.prototype.quitClick = function(event){
		justep.Shell.closePage();
	};

	Model.prototype.ORGIN_CONTAINER = function(event){
		var value={
				opation:1
		};
		justep.Shell.showPage("transfer",value);
	};

	Model.prototype.DESTINATION_CONTAINER = function(event){
		var value={
				opation:2
		};
		justep.Shell.showPage("transfer",value);
	};

	Model.prototype.ORGIN_DESTINATION = function(event){
		var value={
				opation:3
		};
		justep.Shell.showPage("transfer",value);
	};

	Model.prototype.MOVE_EACH = function(event){
		var value={
				opation:4
		};
		justep.Shell.showPage("transfer",value);
	};

	Model.prototype.modelParamsReceive = function(event){
   
	};

	Model.prototype.panel1Click = function(event){
  $(this.getElementByXid("panel1")).focus(); 
	};

	Model.prototype.panel1Keypress = function(event){
                       switch(event.keyCode)
        {
          case 49:
       
           if($("#buttonORGIN_CONTAINER").length>0)
           {	
                $("#buttonORGIN_CONTAINER").click();
           }
           break;
           case 50:
              if($("#buttonDESTINATION_CONTAINER").length>0)
           {	
                $("#buttonDESTINATION_CONTAINER").click();
           }
            break;
                  case 51:
              if($("#buttonORGIN_DESTINATION").length>0)
           {	
                $("#buttonORGIN_DESTINATION").click();
           }
            break;
                     case 52:
              if($("#buttonMOVE_EACH").length>0)
           {	
                $("#buttonMOVE_EACH").click();
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
 var data =["ORGIN_CONTAINER","DESTINATION_CONTAINER","ORGIN_DESTINATION","MOVE_EACH"];
	var fun = function(me,data){
	 $(me.getElementByXid("divmain")).empty();
		 

	 $.each(data, function(i) {
	     var html='<div xid="div'+data[i]+'"  style="width:60%;height:18%;margin:auto auto 0.5rem auto;"  class="center-block"><a component="$UI/system/components/justep/button/button"   id="button'+data[i]+'"  class="btn btn-default btnstyle"  label="1-Inbound"  style="width:100%;background-color:#D3CFD0;font-size:0.48rem;color:#000000;font-family:Calibri;font-weight:bold;" onClick="'+'justep.Bind.contextFor(this).$model.'+data[i]+'()'+'"><i xid="i6"></i><span xid="span6">'+hotKey.mainMatching(data[i],hotKey.probleMovemMenu)+'-'+api.resourceMap[data[i]]+'</span></a></div>';
          $(me.getElementByXid("divmain")).append(html);
                             
       });
          } ;
	 
		  fun(this,data);
		  $(this.getElementByXid("panel1")).focus(); 
	};

	return Model;
});