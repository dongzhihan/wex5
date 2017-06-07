<?xml version="1.0" encoding="UTF-8"?>

<div  xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad" onActive="modelActive"/> 
<span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog1" type="YesNo"></span>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" forceRefreshOnOpen="true" routable="true"></span>
  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1" bind-keypress="panel1Keypress" bind-click="panel1Click">  
   <label xid="outbandopwaring" style="text-align:left;font-size:2rem;font-family:微软雅黑;padding:15px 15px 15px 15px;width:100%;background-color:red;color:#FFFFFF;font-size:0.5rem;opacity:0" dir="ltr" id="messagepick"></label>
   <div class="x-panel-content" xid="content1">
   <input  component="$UI/system/components/justep/input/input" class="form-control" xid="input2" valueUpdateMode="input" style="opacity:0;" bind-keydown="input2Keypress"></input>
  </div>
   <div class="x-panel-bottom" xid="bottom1"></div>
  <div xid="div1" style="width:80%;text-align:center;color:#000000;font-family:微软雅黑;" class="center-block"><label id="lb" style="font-size:0.7rem;font-family:微软雅黑;color:#000000;font-weight:bold;width:100%;" dir="rtl"><![CDATA[请扫描车牌号码]]></label><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="text-align:left;">
   <div class="x-col" xid="col3"><span xid="span1" style="font-size:0.5rem;"><![CDATA[开始货位：]]></span>
  <span xid="span4" style="font-size:0.5rem;" bind-text="storageLocation"><![CDATA[]]></span></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="text-align:left;">
   <div class="x-col" xid="col5"><span xid="span2" style="font-size:0.5rem;"><![CDATA[当  前  PP ：]]></span>
  <span xid="span5" style="font-size:0.5rem;" bind-text="pickType"><![CDATA[]]></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="text-align:left;">
   <div class="x-col" xid="col1" bind-visible="pickOriginalCar.get()">
    <span xid="span7" style="font-size:0.5rem;"><![CDATA[原车：]]></span>
    <span xid="span6" style="font-size:0.5rem;" bind-text="pickOriginalCar"></span></div> </div></div>
  <img src="../img/ibnlog.png" alt="" xid="image1" class="center-block" align="middle" style="height:194px;"></img>
  <div style="position:relative;text-align:center;height:8%;width:60%;" class="center-block" xid="change"><a component="$UI/system/components/justep/button/button" label="重新选择拣货模式" xid="mainbtn" style="background:linear-gradient(#5C81CA,#2F62BB );background-size:100% 100%;font-size:0.6rem;position:absolute;text-align:center;width:100%;top:0;left:0;padding:0.15rem 0.15rem 0.15rem 0.15rem;font-family:微软雅黑;"  class="btn btn-default center-block" onClick="mainbtnClick">
   <i xid="i3"></i>
   <span xid="span3">重新选择拣货模式</span></a></div>
     </div>

   </div>
  