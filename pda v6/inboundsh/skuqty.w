<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window container-fluid">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad" onParamsReceive="modelParamsReceive"> 
  </div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/mushiny/receiveTip.w" resizable="false" onReceive="windowDialog1Receive" routable="true" forceRefreshOnOpen="true" top="10%" height="70%" width="95%" status="normal"></span>
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiversg" onReceive="windowReceiver1Receive"></span><div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" style="background-image:url(img/out.png) fixed center center no-repeat;	background-size:cover;" class="x-titlebar">
          <div xid="left1" reverse="false" class="x-titlebar-right reverse" style="width:70px;text-align:right;">
   </div><div class="x-titlebar-title" style="width:262px;">请输入商品数量</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content  x-scroll-view" xid="content1" _xid="C745E73767000001E5C355A01748AA50" style="bottom: 0px;">
  
  
  
  
  <div xid="div7"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="width:100%;margin:0px 0px 5px 0px;padding:0px 0px 0px 0px;height:10%;">
   <div class="x-col" xid="col6" style="height:100%;width:100%;">
    <div xid="div1" style="width:100%;height:63%;text-align:center;">
     </div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="width:100%;height:40%;text-align:center;">
   <div class="x-col" xid="col1">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="margin-top:0.1rem;">
   <span xid="span4" class="span111"><![CDATA[每箱数量]]></span><input component="$UI/system/components/justep/input/input" class="form-control styleipt" xid="input1" type="number" dataType="Integer" bind-keydown="input1Keydown"></input></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row9" style="margin-top:0.1rem;">
   <span xid="span5" class="span111"><![CDATA[完整层数]]></span>
   <input component="$UI/system/components/justep/input/input" class="form-control styleipt" xid="input2" dataType="Integer" bind-keydown="input2Keydown"></input></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row10" style="margin-top:0.1rem;">
   <span xid="span6" class="span111"><![CDATA[每层箱数]]></span>
   <input   component="$UI/system/components/justep/input/input" class="form-control styleipt" xid="input3" dataType="Integer" bind-keydown="input3Keydown"></input></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row11" style="margin-top:0.1rem;">
   <span xid="span7" class="span111"><![CDATA[不足一层箱数]]></span>
   <input   component="$UI/system/components/justep/input/input" class="form-control styleipt" xid="input4" dataType="Integer" bind-keydown="input4Keydown"></input></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row12" style="margin-top:0.1rem;">
   <span xid="span8" class="span111"><![CDATA[总  数  量]]>
  </span>
   <span xid="span21" style="border:0px;box-shadow:0rem 0.1rem 0.1rem #8b8b8b;background:linear-gradient(#7EB75D, #62A336);font-size:0.8rem;font-weight:bold;font-family:微软雅黑;vertical-align:top;color:#FFFFFF;padding-top:0px;padding-bottom:px;" class="form-control"></span></div></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="text-align:center;">
   <div class="x-col" xid="col5"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="确定" xid="button1" onClick="button1Click" style="font-family:微软雅黑;background-image:url(../img/btn12.png);">
   <i xid="i1"></i>
   <span xid="span2">确定</span></a></div>
   <div class="x-col" xid="col7"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="取消" xid="button2" onClick="button2Click" style="font-family:微软雅黑;background-image:url(../img/btn12.png);">
   <i xid="i2"></i>
   <span xid="span3">取消</span></a></div></div></div>
  </div>
  </div> 
<span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1"></span></div>