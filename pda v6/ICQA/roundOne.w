<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onParamsReceive="modelParamsReceive"/>  
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver"
    xid="windowReceiver1" onReceive="windowReceiver1Receive"/>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog2" width="auto" height="65%"></span><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1" bind-click="panel1Click" bind-keydown="panel1Keydown"> 
    <div class="x-panel-top" xid="top1">
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar welcome"
        xid="titleBar1"> 
        <div class="x-titlebar-left" xid="left1">
          <span xid="welTittle" bind-text="welTittle"/>
        </div>  
        <div class="x-titlebar-right reverse" xid="right1">
            <a component="$UI/system/components/justep/button/button" class="btn btn-default" xid="button1" style='font:0.44rem 微软雅黑;padding:0.2rem 0.4rem;background: linear-gradient(#5C81CA,#2F62BB )' bind-click="button1Click">
   			<i xid="i1"></i>
   			<span xid="span1">盘点菜单</span></a>
          </div> 
      </div>
    </div>  
    <div class="x-panel-content" xid="content1">
      <div xid="div1">
        <input component="$UI/system/components/justep/input/input" class="form-control"
          xid="input1" bind-keydown="input1Keydown" style="opacity:0;height:0.6rem"/>
         <label xid="andonTit" bind-text=" andonTittle" class="tittle" style='display:none;margin-top:-0.3rem'/>
         <div xid="mainCon">
        <label xid="label1" bind-text="tittle" class="tittle" style='margin-top:-0.3rem'/>
        <div xid="locationACon" style="display:none" bind-style="{ color: currentProfit.get()  }" >
          <div component="$UI/system/components/justep/row/row" class="x-row"
            xid="row1"> 
            <div class="x-col location" xid="locationA" >
              <span bind-text="location" style="color:#000000"/>
            </div> 
          </div>
        </div>
        <div xid="locationBCon" style="display:none" bind-style="{ background: currentProfit.get()  }">
          <div component="$UI/system/components/justep/row/row" class="x-row"
            xid="row2"> 
            <div class="x-col locationB" xid="locationB">
              <span bind-text="location"/>
            </div> 
          </div>
        </div>
        <div xid="inputNumCon" style="text-align:center;display:none;">
          <input component="$UI/system/components/justep/input/input" class="form-control inputNum"
            xid="inputNum"  bind-keydown="inputNumKeydown" dataType="Integer"/>
        </div>
        </div>
       <div xid="gunCon" style="text-align:center;display:none;">
          <input component="$UI/system/components/justep/input/input" class="form-control inputNum"
            xid="inputGun"  dataType="Integer" bind-keydown="inputGunKeydown"/>
        </div>
        <div xid="successCon" class="successCon" style="text-align:center">
          <span xid="successMsg" >

          </span>
        </div>
        <div xid="lightCon" class="successCon">
          <span xid="lightMsg" style="text-align:left"/>
        </div>
        <div xid="errorCon" class="errorCon">
          <span xid="errorMsg"/>
        </div>
        <div xid="buttonCon" style="text-align:center;margin-top:0.5rem;display:none">
        	
        <a component="$UI/system/components/justep/button/button" class="btn btn-default" xid="button2" style="margin-right:0.5rem;background: linear-gradient(#5C81CA,#2F62BB )" bind-click="button2Click"> 
   <i xid="i2"></i>
   <span xid="span2">继续盘点</span></a><a component="$UI/system/components/justep/button/button" class="btn btn-default" xid="button3" style="margin-left:0.5rem;background: linear-gradient(#5C81CA,#2F62BB )" bind-click="button3Click">
   <i xid="i3"></i>
   <span xid="span3">退出盘点</span></a></div>
      </div>  
      <div style="position:fixed; bottom:0;background-color:#d9d9d9;font-family:微软雅黑;font-weight:bold;text-align:center;font-size:0.5rem;width:100%"> 
        <span style="display:inline-block;padding:0.4rem;color:#000000;" xid="nextMsg">下一货位：
          <span xid="nextLonction" bind-text="nextLocation"/>
        </span> 
      </div> 
      
    
  </div> 
  </div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1"
    width="80%" status="normal" height="65%" onReceive="windowDialog1Receive" resizable="true"/>
</div>
