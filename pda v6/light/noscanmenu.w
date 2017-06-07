<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window container-fluid">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onActive="modelActive" onLoad="modelLoad"> 
  </div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialogR1" src="$UI/mushiny/login2.w" resizable="true" routable="true" status="normal" forceRefreshOnOpen="true" top="10%" height="55%"></span>
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiverR1"></span><div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" style="background-image:url(img/out.png) fixed center center no-repeat;	background-size:cover;" class="x-titlebar">
          <div class="x-titlebar-title" style="width:262px;font-size:0.6rem;">R-1货位条码无法扫描菜单</div>  
          </div> 
      </div>  
    <div class="x-panel-content  x-scroll-view" xid="content1" _xid="C745E73767000001E5C355A01748AA50" style="bottom: 0px;">
  
  
  
  
  <div xid="div7"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="width:100%;margin:0px 0px 5px 0px;padding:0px 0px 0px 0px;height:10%;">
   <div class="x-col" xid="col6" style="height:100%;width:100%;">
    <div xid="div1" style="width:100%;height:63%;text-align:center;">
     <span xid="span1" style="font-family:微软雅黑;font-size:0.6rem;height:36px;font-weight:bold;">热键号码：</span>
     <input component="$UI/system/components/justep/input/input" class="form-control" style="width:20%;display:inline-block;" xid="hotkeyR1" bind-keydown="hotkeyR1Keydown"></input></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="width:100%;height:40%;text-align:center;">
   <div class="x-col" xid="col1" style="text-align:center;">
    <div xid="div2" style="width:70%;" class="center-block">
     <ul xid="ul1" dir="ltr" style="margin:0px 0px 0px 0px;padding:0px 0px 0px 0px;text-align:left;">
      <li class="listyle" xid="li2">1—扫描问题货位正上方货位</li>
      <li class="listyle" xid="li3">2—扫描问题货位正下方货位</li>
      <li class="listyle" xid="li4">3—扫描问题货位正左方货位</li>
      <li class="listyle" xid="li5">4—扫描问题货位正右方货位</li>
       
      </ul> </div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="text-align:center;">
   <div class="x-col" xid="col5"><a component="$UI/system/components/justep/button/button" class="btn btn-default clr" label="确定" xid="button1" onClick="button1Click" style="background: linear-gradient(#5C81CA,#2F62BB );">
   <i xid="i1"></i>
   <span xid="span2">确定</span></a></div>
   <div class="x-col" xid="col7"><a component="$UI/system/components/justep/button/button" class="btn btn-default clr" label="取消" xid="button2" onClick="button2Click" style="background: linear-gradient(#5C81CA,#2F62BB );">
   <i xid="i2"></i>
   <span xid="span3">取消</span></a></div></div></div></div>
  </div> 
</div>