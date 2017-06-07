<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window container-fluid">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onActive="modelActive" onLoad="modelLoad"> 
  </div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialoglight" src="$UI/mushiny/login2.w" resizable="true" onReceive="windowDialog1Receive" routable="true" status="normal" forceRefreshOnOpen="true" top="10%" height="65%"></span>
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiverlight" onReceive="windowReceiverlightReceive"></span><div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" style="background-image:url(img/out.png) fixed center center no-repeat;	background-size:cover;" class="x-titlebar">
          <div xid="left1" reverse="false" class="x-titlebar-right reverse" style="width:70px;text-align:right;">
   </div><div class="x-titlebar-title" style="width:262px;">R报告暗灯菜单</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content  x-scroll-view" xid="content1" _xid="C745E73767000001E5C355A01748AA50" style="bottom: 0px;">
  
  
  
  
  <div xid="div7"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="width:100%;margin:0px 0px 5px 0px;padding:0px 0px 0px 0px;height:10%;">
   <div class="x-col" xid="col6" style="height:100%;width:100%;">
    <div xid="div1" style="width:100%;height:63%;text-align:center;">
     <span xid="span1" style="font-family:微软雅黑;font-size:0.6rem;height:36px;font-weight:bold;">热键号码：</span>
     <input component="$UI/system/components/justep/input/input" class="form-control" xid="input5" id="hotkeylight" style="width:20%;display:inline-block;" bind-keydown="input5Keydown"></input></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row center-block" xid="row1" style="width:100%;height:40%;">
   <div class="x-col" xid="col1" style="text-align:center;">
    <div xid="div2" style="margin-left:1.5rem;width:80%;text-align:left;" class="center-block">
     <ul xid="ul1" dir="ltr" style="margin:0px 0px 0px 0px;padding:0px 0px 0px 0px;">
      <li class="listyle" xid="li2">1—货位条码无法扫描</li>
      <li class="listyle" xid="li3">2—货位存在残品</li>
      <li class="listyle" xid="li4">3—货位存在条码无法扫描商品</li>
      <li class="listyle" xid="li5">4—套装被拆/不全</li>
      <li class="listyle" xid="li6">5—套装组套错误</li>
      <li class="listyle" xid="li7">6—相似商品在相同货位</li>
      <li class="listyle" xid="li8">7—货位商品太满</li>
      <li class="listyle" xid="li9">8—货位存在安全隐患</li>
      <li class="listyle" xid="li10">9—货位需要检查</li>
      <li class="listyle" xid="li11">10—扫描枪存在问题</li>
      </ul> </div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="text-align:center;">
   <div class="x-col" xid="col5"><a component="$UI/system/components/justep/button/button" class="btn btn-default clr" label="确定" xid="button1" onClick="button1Click" style="background: linear-gradient(#5C81CA,#2F62BB );">
   <i xid="i1"></i>
   <span xid="span2">确定</span></a></div>
   <div class="x-col" xid="col7"><a component="$UI/system/components/justep/button/button" class="btn btn-default clr" label="取消" xid="button2" onClick="button2Click" style="background: linear-gradient(#5C81CA,#2F62BB );">
   <i xid="i2"></i>
   <span xid="span3">取消</span></a></div></div></div></div>
  </div> 
</div>