<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad"> 
  </div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/mushiny/login3.w"></span><div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1" style="height:90%;"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" style="font-family:微软雅黑;height:auto;font-size:0.7rem;background-color:#6EB041;" >
          <div class="x-titlebar-title" bind-text="comename" style="width:262px;">信息</div>  
          </div> 
      </div>  
    <div xid="content1" style="height:100%;" class="x-panel-content">
  
  <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents1">
   <div class="x-contents-content" xid="content2"><div xid="div3" style="width:100%;height:12%;margin:0.5rem auto auto auto;" class="center-block">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="DN激活" xid="button6" style="width:100%;background-color:#D3CFD0;font-size:0.6rem;color:#000000;font-family:微软雅黑;font-weight:bold;background-image:url(../img/btn3.png); opacity:0.5">
   <i xid="i6"></i>
   <span xid="span6">DN激活</span></a></div><label xid="label3" style="text-align:center;font-family:微软雅黑;clip:rect(20px auto auto auto);padding:25px 25px 25px 25px;width:100%;font-weight:normal;font-size:0.65rem;color:#000000;" dir="rtl"><![CDATA[请选择收货模式]]></label><div xid="div1" style="width:100%;height:12%;margin:10px auto auto auto;" class="center-block"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="托盘收货" xid="button1" style="width:100%;background-color:#D3CFD0;font-size:0.6rem;color:#000000;font-family:微软雅黑;font-weight:bold;background-image:url(../img/btn3.png);" onClick="button6Click">
   <i xid="i1"></i>
   <span xid="span1">托盘收货</span></a></div></div>
   <div class="x-contents-content" xid="content3" onActive="content3Active" bind-click="content3Click">
      
   <label xid="label2" style="text-align:center;font-family:微软雅黑;clip:rect(20px auto auto auto);padding:25px 25px 25px 25px;width:100%;font-weight:normal;font-size:0.65rem;" dir="rtl"><![CDATA[请扫描工作站]]></label>
  <img src="../img/tiaoma.png" alt="" xid="image1" class="center-block" style="width:4rem;1rem;"></img>
  <input component="$UI/system/components/justep/input/input" class="form-control" xid="input1" bind-keydown="input1Keydown" style="height:100;opacity: 0;"></input>
  <div xid="errorCon" class="errorCon"> 
            <span id="errorMsg"/> 
  </div>  
  </div>
   </div></div>
  </div> 
</div>