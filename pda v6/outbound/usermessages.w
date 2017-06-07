<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad"/> 
<span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiveruser"></span><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-content" xid="content1" bind-click="content1Click" style="height:100%;width:100%;"><label xid="label3" style="text-align:center;font-size:1rem;font-family:宋体;clip:rect(20px auto auto auto);padding:10px 10px 10px 10px;width:100%;color:#000000;" dir="rtl"><![CDATA[信息]]></label><div xid="div1" class="center-block fontfam" style="margin-left: 1rem;font-family:宋体;">
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
    <div class="x-col" xid="col1">
     <span id="span1" xid="user"  dir="ltr" class="spsp"><![CDATA[用 户 名：]]></span><span id="span18" xid="span18" style="font-size:0.5rem;font-family:SimSun;clip:rect(20px auto auto auto);width:auto;text-align:left;background-color:transparent;padding-right:25px;" dir="ltr" bind-text="name"><![CDATA[]]></span>
  </div> </div> 
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
    <div class="x-col" xid="col5">
     <span id="Car1" xid="Car1"  dir="ltr" class="spsp"><![CDATA[车  牌   号：]]></span><span id="span15" xid="span15" style="font-size:0.5rem;font-family:宋体;clip:rect(20px auto auto auto);width:100%;text-align:left;background-color:transparent;padding-top:0.4rem;padding-bottom:0.3rem;" dir="ltr" bind-text="carName"><![CDATA[]]></span>
  </div> </div> 
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
    <div class="x-col" xid="col8">
     <span id="path" xid="path"  dir="ltr" class="spsp"><![CDATA[拣货批次：]]></span><span id="span16" xid="span16" style="font-size:0.5rem;font-family:宋体;clip:rect(20px auto auto auto);width:100%;text-align:left;background-color:transparent;padding-top:0.4rem;padding-bottom:0.3rem;" dir="ltr" bind-text="BatchNo"><![CDATA[]]></span>
  </div> </div> 
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
    <div class="x-col" xid="col11">
     <span id="QTY" xid="QTY"  dir="ltr" class="spsp"><![CDATA[当  前 PP：]]></span>
  <span id="span2" xid="span2" style="font-size:0.5rem;font-family:宋体;clip:rect(20px auto auto auto);width:100%;text-align:left;background-color:transparent;padding-top:0.4rem;padding-bottom:0.3rem;" dir="ltr" bind-text="PickType"></span></div> </div> 
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
    <div class="x-col" xid="col14">
     <span id="AVG" xid="AVG"  dir="ltr" class="spsp"><![CDATA[开始货位：]]></span><span id="span19" xid="span19" style="font-size:0.5rem;font-family:宋体;clip:rect(20px auto auto auto);width:100%;text-align:left;background-color:transparent;padding-top:0.4rem;padding-bottom:0.3rem;" dir="ltr" bind-text="storageLoction"><![CDATA[]]></span>
  </div> </div> 
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col" xid="col2">
    
  
  <span id="span2" xid="shenyu" style="font-size:0.5rem;font-family:宋体;clip:rect(20px auto auto auto);width:100%;text-align:left;background-color:transparent;padding-top:0.4rem;padding-bottom:0.3rem;" dir="ltr" class="spsp"><![CDATA[商品总数：]]></span><span id="span2" xid="span20" style="font-size:0.5rem;clip:rect(20px auto auto auto);width:100%;text-align:left;background-color:transparent;padding-top:10px;padding-right:25px;padding-bottom:10px;" dir="ltr" bind-text="qty"><![CDATA[]]></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col" xid="col3">
    <span id="span2" xid="cansun" style="font-size:0.5rem;font-family:宋体;clip:rect(20px auto auto auto);width:100%;text-align:left;background-color:transparent;padding-top:0.4rem;padding-bottom:0.3rem;" dir="ltr" class="spsp"><![CDATA[平均效率：]]></span>
  <span id="span2" xid="span21" style="font-size:0.5rem;font-family:宋体;clip:rect(20px auto auto auto);width:100%;text-align:left;background-color:transparent;padding-top:0.4rem;padding-bottom:0.3rem;" dir="ltr"><![CDATA[]]></span></div> </div>
  </div><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="开始拣货" xid="button10" style="width:100%;background-color:#D3CFD0;font-size:0.6rem;color:#000000;font-family:微软雅黑;background-image:url(../img/btn3.png);font-weight:bold;" onClick="button10Click">
   <i xid="i10"></i>
   <span xid="span10">开始拣货</span></a>
  </div>
   
  
  
  </div>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1"></span></div>