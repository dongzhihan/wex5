<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad"> 
  </div>  
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1" onReceive="windowReceiver1Receive"></span>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" forceRefreshOnOpen="false" routable="true"></span><div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar">
          <div class="x-titlebar-right reverse" style="margin:1px 1px 1px 1px;width:30%;height:100%;" xid="right1">
   <span xid="car2qty" bind-text="hsNumber" class="qtystyle"></span>
   <img src="../img/chezi.png" alt="" xid="car2" style="height:80%;"></img>
   <span xid="car1qty" bind-text="carNumber" class="qtystyle"></span>
   <img src="../img/car1.png" alt="" xid="car1" style="height:80%;" height="100%" dir="ltr"></img></div></div> 
      </div>  
     
    <div class="x-panel-content" xid="content1" ><label xid="label3" style="text-align:center;font-size:0.8rem;font-family:微软雅黑;clip:rect(20px auto auto auto);padding:0px 25px 25px 25px;width:100%;font-weight:bold;" dir="rtl"><![CDATA[上架结束]]></label><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:8rem;">
   <div class="x-col" xid="col6" style="height:100%;width:100%;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
    <div id="message" xid="div1" class="waring" align="justify" style="text-align:center;background-color:#DEEBF7;height:auto;width:100%;font-family:微软雅黑;font-size:0.5rem;padding:10px 10px 10px 10px;" dir="ltr" bind-html="details" bind-style="{'color':color.get(),'background-color':bgcolor.get()}">
  </div>
  
 
  
  
  
  </div> </div>

 
 <input component="$UI/system/components/justep/input/input" class="form-control" xid="input3" bind-keydown="input2Keydown" style="opacity:0;"></input></div>
  <div id="hw" tabindex="-1" xid="div2" align="center" style="position:absolute;background-color:#D9D9D9;left:0;width:100%;top:94%;height:6%;font-weight:bold;font-family:微软雅黑;" class="pull-left center-block">
   <span id="s10" xid="span10" style="font-size:0.4rem;display:block;position:absolute;width:100%;height:40%;top:30%;" bind-text="lastStorage"><![CDATA[]]></span></div></div> 
</div>
