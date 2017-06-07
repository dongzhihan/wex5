<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad" onParamsReceive="modelParamsReceive" onActive="modelActive"> 
  </div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/mushiny/login3.w"></span><div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1" style="height:90%;"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" style="font-family:微软雅黑;height:auto;font-size:0.7rem;background-color:#6EB041;" xid="titleBar1">
          <div class="x-titlebar-title" bind-text="comename" style="width:262px;"></div>  
          </div> 
      </div>  
    <div xid="message" class="waring1" align="center" bind-click="div1Click" style="height:auto;text-align:center;padding:0.5rem 0.25rem 0.5rem 0.25rem;font-family:微软雅黑;font-size:0.6rem;font-weight:bold;color:#FFFFFF;display:none;" dir="ltr"></div><div xid="content1" style="top:20%;height:80%;" class="x-panel-content">
  
  <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents1">
   <div class="x-contents-content" xid="content2"><label xid="label3" style="text-align:center;font-family:微软雅黑;clip:rect(20px auto auto auto);padding:25px 25px 25px 25px;width:100%;font-weight:normal;font-size:0.65rem;color:#000000;" dir="rtl"><![CDATA[请选择拣货模式]]></label><div xid="div3" style="width:100%;height:12%;margin:0.5rem auto auto auto;" class="center-block">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="基于批次拣货" xid="button6" style="width:100%;background-color:#D3CFD0;font-size:0.6rem;color:#000000;font-family:微软雅黑;font-weight:bold;background-image:url(../img/btn3.png);" onClick="button6Click">
   <i xid="i6"></i>
   <span xid="span6">基于批次拣货</span></a></div><div xid="div1" style="width:100%;height:12%;margin:10px auto auto auto;" class="center-block"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="系统自动分配拣货" xid="button1" style="width:100%;background-color:#D3CFD0;font-size:0.6rem;color:#000000;font-family:微软雅黑;font-weight:bold;background-image:url(../img/btn3.png);" onClick="assignedClick">
   <i xid="i1"></i>
   <span xid="span1">系统自动分配拣货</span></a></div>
  <div xid="div2" class="waring1" align="center" bind-click="div1Click" style="height:auto;text-align:center;padding:0.5rem 0.25rem 0.5rem 0.25rem;font-family:微软雅黑;font-size:0.6rem;font-weight:bold;color:#FFFFFF;" dir="ltr"></div>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default center-block" label="返回" xid="quit" style="margin-top:1.8rem;width:2rem;font-size:0.6rem;font-weight:bold;font-family:微软雅黑;color:#000000;background-color:#FFFF00;" onClick="quitClick" bind-keypress="quitKeypress">
   <i xid="i5"></i>
   <span xid="span5">返回</span></a></div>
   <div class="x-contents-content" xid="content3" onActive="content3Active" bind-click="content3Click">
      
   <label xid="label2" style="text-align:center;font-family:微软雅黑;clip:rect(20px auto auto auto);padding:25px 25px 25px 25px;width:100%;font-weight:normal;font-size:0.65rem;color:#000000;" dir="rtl"><![CDATA[请扫描批次号码]]></label>
  <img src="../img/tiaoma.png" alt="" xid="image1" class="center-block" style="width:4rem;1rem;"></img>
  <input component="$UI/system/components/justep/input/input" class="form-control" xid="input1" bind-keydown="input1Keydown" style="    opacity: 0;"></input>
  <div xid="div4" class="waring1" align="left" style="height:auto;text-align:center;padding:20px 10px 20px 10px;display:none;font-family:微软雅黑;font-size:0.5rem;font-weight:bold;" dir="ltr"></div></div>
   </div></div>
  </div> 
</div>