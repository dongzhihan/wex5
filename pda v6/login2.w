<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onActive="modelActive" onLoad="modelLoad"> 
  </div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/truk/login3.w" onReceive="windowDialog1Receive"></span><div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" style="background-image:url(img/out.png) fixed center center no-repeat;background-size:cover;font-size:0.7rem;height:auto;" class="x-titlebar" xid="titleBar1">
   <div class="x-titlebar-title" style="width:262px;" xid="title1">请输入登录信息</div></div></div>  
    <div class="x-panel-content" xid="content1"><label xid="label3" style="text-align:center;font-size:0.6rem;font-family:微软雅黑;width:100%;clip:rect(20px auto auto auto);padding:25px 25px 10px 25px;font-weight:normal;" dir="rtl" bind-text="welcome"><![CDATA[]]></label>
  <label xid="label3" style="text-align:center;font-size:0.6rem;font-family:微软雅黑;width:100%;clip:rect(20px auto auto auto);padding:0px 25px 25px 25px;font-weight:normal;" dir="rtl">请输入密码</label>
  <img src="img/passwordlogo.png" alt="" xid="image1"   class="center-block" align="middle" style="width:252px;height:194px;"></img>
  <input component="$UI/system/components/justep/input/password" class="form-control center-block" xid="input1" style="width:50%;" bind-keydown="input1Keypress"></input><a component="$UI/system/components/justep/button/button" class="btn btn-default center-block" label="退出" xid="button2" style="background-color:#BFBFBF;color:#000000;text-decoration:none;margin-top:10px;font-weight:bold;width:2rem;font-size:0.6rem;font-family:微软雅黑;" onClick="button1Click">
   <i xid="i1"></i>
   <span xid="span1">退出</span></a>
  </div>
  </div> 
<span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog2" status="normal" onReceive="windowDialog2Receive"></span><span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1"></span>
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog1" title="登陆提示" message="密码不能为空！" type="OK"></span></div>