<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onParamsReceive="modelParamsReceive" onActive="modelActive"/> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"></div>
   <div class="x-panel-content" xid="content1" style="color:#000000;" bind-click="content1Click"><label xid="label3" style="text-align:center;font-size:1rem;font-family:宋体;clip:rect(20px auto auto auto);padding:25px 25px 25px 25px;width:100%;" dir="rtl"><![CDATA[信息]]></label><div xid="div1" class="center-block" style="margin-left: 1rem;font-family:宋体;">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"><span id="span1" xid="user" style="font-size:0.5rem;font-family:宋体;clip:rect(20px auto auto auto);width:100%;text-align:left;background-color:transparent;padding-top:0.4rem;padding-bottom:0.3rem;" dir="ltr"><![CDATA[用 户 名：]]></span>
  <span id="span1" xid="span1" style="font-size:0.5rem;font-family:SimSun;clip:rect(20px auto auto auto);width:auto;text-align:left;padding:10px 0.2rem 10px 4px;" dir="ltr" bind-text='sessionStorage["working"]'><![CDATA[]]></span></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col5"><span id="Car_No" xid="Car_No" style="font-size:0.5rem;font-family:宋体;clip:rect(20px auto auto auto);width:100%;text-align:left;background-color:transparent;padding-top:0.4rem;padding-bottom:0.3rem;"><![CDATA[车  牌  号：]]></span>
  <span id="span2" xid="span2" style="font-size:0.5rem;font-family:宋体;clip:rect(20px auto auto auto);width:100%;text-align:left;background-color:transparent;padding-top:0.4rem;padding-bottom:0.3rem;" bind-text="car"><![CDATA[]]></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col" xid="col8"><span id="path" xid="path" style="font-size:0.5rem;font-family:宋体;clip:rect(20px auto auto auto);width:100%;text-align:left;background-color:transparent;padding-top:0.4rem;padding-bottom:0.3rem;"><![CDATA[上架区域：]]></span>
  <span id="span3" xid="span3" style="font-size:0.5rem;font-family:宋体;clip:rect(20px auto auto auto);width:100%;text-align:left;background-color:transparent;padding-top:0.4rem;padding-bottom:0.3rem;" bind-text="description"></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col" xid="col11"><span id="QTY" xid="QTY" style="font-size:0.5rem;font-family:宋体;clip:rect(20px auto auto auto);width:100%;text-align:left;background-color:transparent;padding-top:0.4rem;padding-bottom:0.3rem;"><![CDATA[商品总数：]]></span>
  <span id="span4" xid="span4" style="font-size:0.5rem;font-family:宋体;clip:rect(20px auto auto auto);width:100%;text-align:left;background-color:transparent;padding-top:0.4rem;padding-bottom:0.3rem;" bind-text="qty"></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col" xid="col14"><span id="AVG" xid="AVG" style="font-size:0.5rem;font-family:宋体;clip:rect(20px auto auto auto);width:100%;text-align:left;background-color:transparent;padding-top:0.4rem;padding-bottom:0.3rem;"><![CDATA[平均效率：]]></span>
  <span id="span5" xid="span5" style="font-size:0.5rem;font-family:宋体;clip:rect(20px auto auto auto);width:100%;text-align:left;background-color:transparent;padding-top:0.4rem;padding-bottom:0.3rem;" bind-text="speed"></span></div></div></div><a component="$UI/system/components/justep/button/button" class="btn btn-default" span="开始上架" xid="button10" style="width:100%;background-color:#D3CFD0;font-size:0.6rem;color:#000000;font-family:微软雅黑;background-image:url(../img/btn3.png);font-weight:bold;" bind-click="button10Click">
   <i xid="i10"></i>
   <span xid="span10">开始上架</span></a></div>
   
  
  <div class="x-panel-bottom" xid="bottom1"></div>
  
  
  
  
  </div>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1"></span></div>