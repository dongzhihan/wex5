<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onParamsReceive="modelParamsReceive"/>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1" bind-click="panel1Click"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        xid="titleBar1" style="background:linear-gradient(#ffc746,#e5b600);box-shadow:0rem 0.1rem 0.1rem #8b8b8b"> 
        <div class="x-titlebar-left" xid="left1"> 
          <a component="$UI/system/components/justep/button/button" class="btn btn-default button"
            label="" xid="button1" bind-click="button1Click"> 
            <i xid="i1"/>  
            <span xid="span1">单一移货</span> 
          </a>  
          <a component="$UI/system/components/justep/button/button" class="btn btn-default button"
            label="" xid="button2" bind-click="button2Click"> 
            <i xid="i2"/>  
            <span xid="span2">批量移货</span> 
          </a> 
        </div>  
        <div class="x-titlebar-title" xid="title1"/>  
        <div class="x-titlebar-right reverse" xid="right1"> 
          <a component="$UI/system/components/justep/button/button" class="btn btn-default button"
            label="" xid="button3" bind-click="button3Click"> 
            <i xid="i3"/>  
            <span xid="span3"/>返回
          </a> 
        </div> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="content1"> 
      <div xid="div1">
        <div xid="sourceOn" class="container">
          <span xid="span4"  style="color:#000000">
         	原始容器：
          	<span xid="original" bind-text="original"></span>
          </span>
        </div>
        <div xid="destination" class="container">
        	<span xid="span5"  style="color:#000000">
        	目的容器：	
          <span xid="destinationName" bind-text="destinationName" style="color:#000000"/>
          </span>
        </div>   
        <input component="$UI/system/components/justep/input/input" class="form-control"
          xid="input1" bind-keydown="input1Keydown" style="opacity:0;height:0.6rem"/>
        <label xid="label1" class="title" bind-text="title"/>  
        
        <div component="$UI/system/components/justep/row/row" class="x-row"
          xid="source" style="display:none"> 
          <div class="x-col" xid="col14" style="font:bold 0.5rem 微软雅黑;color:#000000">
            <span xid="4">原始容器：</span><span xid="originalSpan" bind-text="original" style="color:#0033CC"></span>
          </div> 
        </div> 
        <div xid="proCon">
        <div component="$UI/system/components/justep/row/row" class="x-row"
          xid="row1"> 
          <div class="x-col" xid="col1">
            <span xid="type" style="color:red;font-size:0.625rem;font-weight:bold"></span>
          </div>  
          <div class="x-col" xid="col2">
            <span xid="proid" class="proId" bind-text="proId"></span>
          </div> 
        </div>  
        <div component="$UI/system/components/justep/row/row" class="x-row"
          xid="row2"> 
          <div class="x-col" xid="col13">
            <span xid="proDes" class="proDes" bind-text="proDes"></span>
          </div> 
        </div> 
        </div>
      </div>  
      <div xid="amountTextCon" style="text-align:center;display:none">
        <input component="$UI/system/components/justep/input/input" class="form-control"
          xid="input2" style="width:20%;display:inline-block;text-align:center;background:#FBE5D6" bind-keydown="input2Keydown"/>
      </div>
      <div xid="successCon" class="successCon">
            <span xid="successMsg"/> 
     </div> 
     <div xid="errorCon" class="errorCon">
            <span xid="errorMsg"/>
     </div> 
    </div> 
  </div> 
</div>
