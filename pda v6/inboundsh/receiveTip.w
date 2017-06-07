<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;resolution:320 x 568;" xid="window" class="window container-fluid">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onParamsReceive="modelParamsReceive" onLoad="modelLoad"> 
  </div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialoglight" src="$UI/mushiny/login2.w" resizable="true" routable="true" status="normal" forceRefreshOnOpen="false" height="65%"></span>
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1"></span><div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" style="background-image:url(img/out.png) fixed center center no-repeat;	background-size:cover;" class="x-titlebar">
          <div xid="left1" reverse="false" class="x-titlebar-right reverse" style="width:70px;text-align:right;">
   </div><div class="x-titlebar-title" style="width:262px;">请确认是否多货</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content  x-scroll-view" xid="content1" _xid="C745E73767000001E5C355A01748AA50" style="bottom: 0px;">
  
  
  
  
  <div xid="div7" class="div"><div component="$UI/system/components/justep/row/row" class="x-row " xid="row1">
   <div class="x-col block" xid="col1" style="word-break: break-all">商品：<span bind-text="itemName"></span></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row " xid="row2">
   <div class="x-col block" xid="col4">DN内总数量：</div>
   <div class="x-col" xid="col6"><span bind-text="itemAmount"></span>件</div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col block" xid="col9">已 收 货数量：</div>
   <div class="x-col" xid="col10"><span bind-text="receiveAmount"></span>件</div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col block" xid="col12">已 输 入数量：</div>
   <div class="x-col" xid="col13"><span bind-text="total"></span>件</div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col block" xid="col15" style="word-break: break-all">超出DN数量：<span id="overtop"></span></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="text-align:center;">
   <div class="x-col" xid="col5"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="确定" xid="button1" onClick="button1Click" style="background: linear-gradient(#5C81CA,#2F62BB );">
   <i xid="i1"></i>
   <span xid="span2">确定</span></a></div>
   <div class="x-col" xid="col7"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="取消" xid="button2" onClick="button2Click" style="background: linear-gradient(#5C81CA,#2F62BB );">
   <i xid="i2"></i>
   <span xid="span3">取消</span></a></div></div></div>
  
  
  </div>
  </div> 
</div>