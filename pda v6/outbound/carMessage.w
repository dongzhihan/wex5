<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad" onActive="modelInactive"> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="提示"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            </div>  
          <div class="x-titlebar-title">提示</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div style="font-size:0.5rem;margin-top: 2.5rem"  >
    
    <span  style="font-family:微软雅黑;margin-left:2rem;color:#000000;"  bind-text="carMessage"></span> 
    <br />
    <span   style="font-family:微软雅黑;font-size:0.5rem;margin-left:2rem;color:#000000;" bind-text="carMessageBottom">	</span>
    </div>
  <img src="../img/ibnlog.png" alt="" xid="image1" class="center-block" align="middle" style="height:194px;margin-top: 0.5rem"></img><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="text-align:center;">
   <div class="x-col" xid="col5">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="确定" xid="button1" onClick="button1Click" style="font-family:微软雅黑;background-image:url(../img/btn12.png);">
     <i xid="i1"></i>
     <span xid="span2">确定</span></a> </div> 
   <div class="x-col" xid="col7">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="取消" xid="button2" onClick="button2Click" style="font-family:微软雅黑;background-image:url(../img/btn12.png);">
     <i xid="i2"></i>
     <span xid="span3">取消</span></a> </div> </div>
  </div>
   		
  </div> 
<span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1" onReceive="windowReceiver1Receive"></span></div>