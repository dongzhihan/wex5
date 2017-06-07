<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad" onActive="modelActive" onParamsReceive="modelParamsReceive"/> 
<span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1"></span><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-content" xid="content1">
  <div xid="div1">
  <label xid="label1" class="tittle">信息</label>
  <ul xid="ul1">
  	<li><span>用户：<span bind-text="userName"></span></span></li>
  	<li><span>盘点任务：<span bind-text="mission"></span></span></li>
  	<li><span>盘点类型：<span bind-text="type"></span></span></li>
  	<li><span>盘点数量：<span bind-text="number"></span></span></li>
  	<li><span>已盘点货位：<span bind-text="right"></span></span></li>
  	<li><span>盘点时间：<span bind-text="time"></span></span></li>
  	<li><span>盘点效率：<span bind-text="efficiency"></span></span></li>
  	<li><span>盘点差货位：<span bind-text="poorLocation"></span></span></li>
  </ul>
  
  
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="" xid="button1" bind-click="button1Click">
   <i xid="i1"></i>
   <span xid="span1">继续盘点</span></a></div>
  </div>
   </div></div>