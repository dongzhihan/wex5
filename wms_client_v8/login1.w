<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad" onActive="modelActive"> 
  </div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/mushiny/login2.w" resizable="true"></span><div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1" style="height:auto;"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" style="background-image:url(img/out.png) fixed center center no-repeat;background-size:cover;font-size:0.7rem;height:auto;" class="x-titlebar">
          <div class="x-titlebar-title" style="width:262px;">请输入登录信息</div>  
          </div> 
      </div>  
    <div class="x-panel-content" xid="content1">
  
  
  <div xid="div1"><label xid="label3" style="text-align:center;font-size:0.6rem;font-family:宋体;clip:rect(20px auto auto auto);padding:25px 25px 25px 25px;width:100%;" dir="rtl"><![CDATA[请输入工卡信息]]></label><img src="$UI/wms_client_v8/img/worklog.png" alt="" xid="image1" class="center-block" align="middle" style="width:4rem;height:5rem;"></img><input component="$UI/system/components/justep/input/input" class="form-control center-block" xid="IDInput" style="width:50%;margin-top:5px;" bind-keyup="input1Keypress"></input><a component="$UI/system/components/justep/button/button" class="btn btn-default center-block" label="退出" xid="button1" style="background-color:#BFBFBF;color:#000000;text-decoration:none;margin-top:10px;font-weight:bold;width:2rem;font-size:0.6rem;" onClick="button1Click">
   <i xid="i2"></i>
   <span xid="span2">退出</span></a>
  </div>
  </div>
  </div> 
</div>