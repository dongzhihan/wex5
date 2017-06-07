<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onActive="modelActive" onLoad="modelLoad" onParamsReceive="modelParamsReceive"/>  
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver"
    xid="windowReceiver1" onReceive="windowReceiver1Receive"/>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" status="normal" width="80%" height="65%" onReceive="windowDialog1Receive"/>
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="top1">
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        xid="titleBar1"> 
        <div class="x-titlebar-left" xid="left1"/>  
        <div class="x-titlebar-title" xid="title1">
          <span style="font:bold 0.5rem 微软雅黑">盘点菜单</span>
        </div>  
        <div class="x-titlebar-right reverse" xid="right1"/>
      </div>
    </div>  
    <div class="x-panel-content" xid="content1">
      <div xid="div1" style="text-align:center;margin-top:0.5rem">
       
          <label class="x-label" xid="label2" style="text-align:right;font:bold 0.5rem 微软雅黑">热键号码:</label>  
          <input component="$UI/system/components/justep/input/input" class="form-control x-edit"
            xid="hotKey" style="width:30%;display:inline-block;font:bold 0.5rem 微软雅黑;text-align:center;height:1rem" bind-keydown="hotKeyKeydown"/>
  
      </div>  
      <ul xid="ul1">
        <li>1-货位无法扫描</li>
        <li>2-信息查询</li>
        <li>3-报告暗灯</li>
        <li id="e">4-停止处理掉落商品</li>
      </ul>
    </div>  
    <div class="x-panel-bottom" xid="bottom1">
      <div xid="div2" style="text-align:center;margin:0 auto;font:0.47rem 微软雅黑">  
      <a component="$UI/system/components/justep/button/button" class="btn btn-default"
        label="确定" xid="button1" bind-click="button1Click" style="margin-right:1.5rem;background: linear-gradient(#5C81CA,#2F62BB )"> 
        <i xid="i1"/>  
        <span xid="span1"/>
      </a>  
      <a component="$UI/system/components/justep/button/button" class="btn btn-default"
        label="取消" xid="button2" bind-click="button2Click" style="background: linear-gradient(#5C81CA,#2F62BB )"> 
        <i xid="i2"/>  
        <span xid="span2"/>
      </a>
      </div>
    </div>
  </div>
</div>
