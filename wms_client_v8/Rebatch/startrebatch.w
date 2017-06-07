<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onParamsReceive="modelParamsReceive"/>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" status="normal" height="70%" onReceive="windowDialog1Receive"></span><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1" bind-click="panel1Click"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        xid="titleBar1" style="background: linear-gradient(#FFC744, #E5B600);box-shadow: 0rem 0.1rem 0.1rem #8B8B8B;display:-webkit-box"> 
        <div class="x-titlebar-left" xid="left1" bind-text='headTittle' style="color:#000000;font-size:0.44rem;font-weight:bold;font-family:calibri,'宋体'"/> 
        <div class="x-titlebar-right reverse" xid="right1">
          <a component="$UI/system/components/justep/button/button"  class="btn btn-default" label="" xid="button2" bind-click="button2Click" style="padding:0.2rem 0.3rem;font-size:0.4rem;margin-right:0.15rem;background: linear-gradient(#5C81CA,#2F62BB );">
   <i xid="i2" ></i>
   <span xid="span2" style="font-weight:normal">退出</span></a>
        <a component="$UI/system/components/justep/button/button"  class="btn btn-default" label="" xid="button3" bind-click="button3Click" style="padding:0.2rem 0.3rem;font-size:0.4rem;margin-right:0.15rem;background: linear-gradient(#5C81CA,#2F62BB );">
   <i xid="i3" ></i>
   <span xid="span3" style="font-weight:normal">查看换车</span></a>
   </div> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="content1" style="height:100%;"> 
      <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full"
        active="0" xid="contents1" routable="false"> 
        <div class="x-contents-content" xid="content2"> 
          <div> 
           <input component="$UI/system/components/justep/input/input" class="form-control"
              xid="input1" style="height:0.6rem;opacity:0" bind-keydown="input1Keydown"/>  
            <label xid="label1" style="text-align:center;font-family:微软雅黑;width:100%;font-weight:bold;font-size:0.5rem;color:#000000;margin-bottom:0.5rem"
              dir="rtl" bind-text='tittle'></label>  
              <div xid="slotCon" style="display:none;margin-bottom:0.5rem">
              <div xid="div4" style="box-shadow:0rem 0.1rem 0.1rem #8B8B8B">
              <span xid="rq" style="display:inline-block;background-color:#000000;padding:0.1rem;font-family:Calibri;font-size:0.5rem;color:#ffffff;font-weight:bold;width:100%;text-align:center" bind-text="containerName"></span>
            </div> 
            <div bind-style="{ background: currentProfit.get()  }">
            	<span xid="slot" class="slotmsg" bind-text="slot" bind-style="{ fontSize: fontSize.get(),color: fontColor.get()}">
            	</span>
            </div>
            <div bind-style="{ background: exsdColors.get()  }">
            	<span class="data" xid="data" bind-style="{ color: exsdFontColor.get()  }">ExSD:<span bind-text="date"></span></span>
            </div>
            </div>
            <div xid="div1" style="display:none;background-color:#FF0000;font-family:微软雅黑;font-weight:bold;color:#FFFFFF;font-size:0.5rem;text-align:center;padding:0.5rem;"
              dir="rtl"><span xid="errorMsg"/>
            </div>  
            <div xid="div2" style="display:none"> 
            	<span xid="success" class="success"></span>
            </div>
          </div> 
        </div>  
      </div> 
    </div>  
    <div style="position:fixed; bottom:0;background-color:#d9d9d9;font-family:微软雅黑;font-weight:bold;text-align:center;font-size:0.5rem;width:100%"> 
      <span style="display:inline-block;padding:0.4rem;color:#000000;" id="prvmsg">上一个容器：<span bind-text="prvContainer" style="color:#000000;"></span></span> 
    </div> 
  </div> 
</div>
