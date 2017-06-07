<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onParamsReceive="modelParamsReceive" onActive="modelActive" onLoad="modelLoad"> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1" tabindex='1' bind-click="panel1Click" bind-keypress="panel1Keypress"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" style="background-image:url(img/out.png) fixed center center no-repeat;background-size:cover;font-size:0.7rem;height:auto;" class="x-titlebar" xid="titleBar1">
   <div class="x-titlebar-title" style="width:262px;" xid="title1">请选择移货工具类型</div></div></div>  
    <div class="x-panel-content" xid="content1" style="background-color:transparent;height:100%;width:100%;top:2rem">
    
    <div xid="divmain" style="height:65%;margin-top:0.5rem;">
    <div xid="div1" style="width:65%;height:12%;margin:0.5rem auto auto auto;" class="center-block"></div>
  <div xid="div3" style="width:65%;height:12%;margin:10px auto auto auto;" class="center-block  ">
   </div>
  <div xid="div4" style="width:65%;height:12%;margin:10px auto auto auto;" class="center-block">
   </div>
  <div xid="div5" style="width:65%;height:12%;margin:10px auto auto auto;" class="center-block">
   </div>
	<div xid="div6" style="width:60%;height:12%;margin:10px auto auto auto;" class="center-block"></div>
	</div>
  <div xid="div7" style="height:20%;text-align:center;line-height:normal;width:80%;" class="center-block"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="margin:50px 0px 0px 0px;width:100%;">
   <div class="x-col" xid="col4" style="width:20%;">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="主页" xid="mainbtn" style="width:100%;height:100%;background-color:#D3CFD0;font-size:0.6rem;color:#000000;font-weight:bold;font-family:微软雅黑;" bind-click="mainbtnClick">
     <i xid="i3"></i>
     <span xid="span3">主页</span></a> </div> 
   <div class="x-col" xid="col5" style="width:20%;">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="库房" xid="button4" style="font-weight:bold;width:100%;height:100%;background-color:#D3CFD0;font-size:0.6rem;color:#000000;font-family:微软雅黑;" bind-click="button4Click">
     <i xid="i4"></i>
     <span xid="span4">库房</span></a> </div> 
   <div class="x-col" xid="col6" style="width:20%;">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="返回" xid="quit" style="font-weight:bold;width:100%;height:100%;background-color:#D3CFD0;font-size:0.6rem;color:#000000;font-family:微软雅黑;" bind-click="quitClick">
     <i xid="i5"></i>
     <span xid="span5">返回</span></a> </div> </div></div></div>
  </div> 
</div>