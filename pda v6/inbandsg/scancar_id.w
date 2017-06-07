<?xml version="1.0" encoding="UTF-8"?>

<div  xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad" onActive="modelActive"/> 

  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1" bind-keypress="panel1Keypress" bind-click="panel1Click">
   <div class="x-panel-content" xid="content1" style="height:100%;">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="input2" bind-keypress="input2Keypress" valueUpdateMode="input" style="opacity:0;" onFocus="input2Focus" bind-click="input2Click"></input></div> 
   <div class="x-panel-bottom" xid="bottom1"></div>
   <label id="lb" style="text-align:center;font-size:0.8rem;font-family:微软雅黑;clip:rect(20px auto auto auto);padding:25px 25px 25px 25px;width:100%;font-weight:normal;" dir="rtl" xid="label1">扫描上架车车牌号</label>
   <img src="../img/ibnlog.png" alt="" xid="image1" class="center-block" align="middle" style="height:194px;width:4rem;" height="3rem"></img>
   <div style="position:relative;text-align:center;height:8%;width:60%;" class="center-block" xid="change">
    <a component="$UI/system/components/justep/button/button" label="重新选择上架模式" xid="mainbtn" style="background-image:url(../img/btn12.png);background-size:100% 100%;font-size:0.6rem;position:absolute;text-align:center;width:100%;top:0;left:0;font-family:微软雅黑;" class="btn btn-default center-block" onClick="mainbtnClick">
     <i xid="i3"></i>
     <span xid="span3">重新选择上架模式</span></a> </div> 
   <div xid="div1" class="waring1" align="center" bind-click="div1Click" style="height:auto;text-align:center;padding:0.6rem 0.3rem 0.6rem 0.3rem;display:none;font-family:微软雅黑;font-size:0.5rem;font-weight:bold;background-color:#FF0000;color:#FFFFFF;margin-top:0.5rem;" dir="ltr"></div></div><span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" forceRefreshOnOpen="true" routable="true"></span>
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog1" type="OK" onYes="messageDialog1Yes" title="上架提示" message="上架车牌号不能为空"></span></div>
  