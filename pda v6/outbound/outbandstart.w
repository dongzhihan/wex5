<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad"> 
  </div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/mushiny/login3.w"></span><div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1" style="height:90%;"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" style="background-image:url(../img/green.png);height:44px;background-color:white;" >
          <div xid="left1" reverse="false" class="x-titlebar-right reverse" style="width:70px;text-align:right;">
   </div><div class="x-titlebar-title" bind-text="comename" style="width:262px;">信息</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1" style="height:100%;"><label xid="label3" style="text-align:center;font-size:30px;font-family:宋体;clip:rect(20px auto auto auto);padding:25px 25px 25px 25px;width:100%;" dir="rtl"><![CDATA[请选择拣货模式]]></label><div xid="div1" style="width:100%;height:12%;margin:10px auto auto auto;" class="center-block"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-lg" label="基于批次单拣货" xid="button6" style="width:100%;background-color:#D3CFD0;font-size:20px;color:#FFFFFF;font-family:宋体;font-weight:bold;background-image:url(../img/btn3.png);">
   <i xid="i6"></i>
   <span xid="span6">基于批次单拣货</span></a></div>
  <div xid="div3" style="width:100%;height:12%;margin:10px auto auto auto;" class="center-block">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-lg" label="系统自动分配拣货" xid="button8" style="width:100%;background-color:#D3CFD0;font-size:20px;color:#FFFFFF;font-family:宋体;font-weight:bold;background-image:url(../img/btn3.png);" onClick="button8">
    <i xid="i8"></i>
    <span xid="span8">系统自动分配拣货</span></a> </div>
  </div>
  </div> 
</div>