<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad"> 
  </div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/mushiny/login3.w"></span><div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1" style="height:90%;"> 
      <div class="x-panel-content" xid="content1" style="height:100%;"><div id="messagpp" xid="div2" class="waring1" align="center" bind-click="div1Click" style="height:auto;text-align:center;padding:20px 10px 20px 10px;display:none;font-family:微软雅黑;font-size:0.5rem;font-weight:bold;color:#FFFFFF;" dir="ltr"></div><label xid="label3" style="text-align:center;font-family:微软雅黑;clip:rect(20px auto auto auto);padding:25px 25px 25px 25px;width:100%;font-weight:normal;font-size:0.65rem;color:#000000;" dir="rtl"><![CDATA[请选择操作模式]]></label><div xid="div1" style="width:100%;height:12%;margin:10px auto auto auto;" class="center-block"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="返回主页面" xid="button6" style="width:100%;background-color:#D3CFD0;font-size:0.6rem;color:#000000;font-family:微软雅黑;font-weight:bold;background-image:url(../img/btn3.png);" bind-click="modelActive" onClick="button6Click">
   <i xid="i6"></i>
   <span xid="span6">返回主页面</span></a></div>
  <div xid="div3" style="width:100%;height:12%;margin:10px auto auto auto;" class="center-block">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default " label="继续进入拣货页面" xid="button8" style="width:100%;background-color:#D3CFD0;font-size:0.6rem;color:#000000;font-family:微软雅黑;font-weight:bold;background-image:url(../img/btn3.png);" onClick="button8Click">
    <i xid="i8"></i>
    <span xid="span8">继续进入拣货页面</span></a> </div>
  </div>
  </div> 
</div>