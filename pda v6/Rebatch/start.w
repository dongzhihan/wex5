<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad" onActive="modelActive"/> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1" bind-click="panel1Click">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" style="background: linear-gradient(#80B860, #61A335);box-shadow: 0rem 0.1rem 0.1rem #8B8B8B;">
   <div class="x-titlebar-title" xid="title1"><span style="font-family:微软雅黑;color:#FFFFFF;font-weight:bold;font-size:0.5rem" bind-text="comename">信息</span></div>
   </div></div>
   <div class="x-panel-content" xid="content1">
   <div xid="div1">
   <label xid="label2" style="text-align:center;font-family:微软雅黑;clip:rect(20px auto auto auto);padding:25px 25px 25px 25px;width:100%;font-weight:normal;font-size:0.65rem;color:#000000;" dir="rtl">请扫描工作站条码</label>
   <img src="../img/tiaoma.png" alt="" xid="image1" class="center-block" style="width:4rem;1rem;"></img>
   <input component="$UI/system/components/justep/input/input" class="form-control" xid="input1" bind-keydown="input1Keydown" style="opacity:0"></input></div></div>
   <div class="x-panel-bottom" xid="bottom1"></div></div></div>