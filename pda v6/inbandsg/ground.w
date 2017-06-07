<?xml version="1.0" encoding="utf-8"?>
<div id="di1"  tabindex="-1" xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad" onActive="modelActive" onInactive="modelInactive"> 
  </div>  
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1" style="top:10px;left:128px;"></span>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" routable="false" status="normal" onReceive="windowDialogReceive" forceRefreshOnOpen="true" height="65%" top="10%" style="top:11px;left:87px;"></span>
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1" style="height:100%;width:100%;" bind-click="panel1Click"> 
        
    <div class="x-panel-top" xid="top1" style="width:100%;" height="48"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" style="background-image:url(../img/btn3.png);height:100%;width:100%;">
          <div class="x-titlebar-left" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;width:30%;"> 
            <a component="$UI/system/components/justep/button/button" id="sgsp" label="单件" xid="button1" style="margin-left:5px;background: linear-gradient(#5C81CA,#2F62BB );font-size:0.4rem;text-align:center;border:none;" bind-keypress="button1Keypress" onClick="button1Click" class="btn btn-default">
   <i xid="i1"></i>
    
    
   <span xid="span1">单件</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-only-label" xid="button2" style="margin-left:5px;background: linear-gradient(#5C81CA,#2F62BB );font-size:0.4rem;text-align:center;border:none;" label="批量" onClick="button2Click">
   <i xid="i2"></i>
 	 
   <span xid="span2">批量</span></a></div>  
   
          <div class="x-titlebar-right reverse" style="margin:1px 1px 1px 1px;width:30%;height:100%;"> 
         <!--  <span class="label" xid="name" style="text-align:left;"><![CDATA[name]]></span> -->
  <span xid="car2qty" bind-text="hsNumber" class="qtystyle"><![CDATA[]]></span>
  <img src="../img/chezi.png" alt="" xid="car2" style="height:80%;"></img>
  <span xid="car1qty" bind-text="carNumber" class="qtystyle"><![CDATA[]]></span>
  <img src="../img/car1.png" alt="" xid="car1" style="height:80%;" height="100%" dir="ltr"></img>
  </div>
        </div> 
      </div>
  
  <div  tabindex="-1" xid="div2" align="center" style="position:fixed;background-color:#D9D9D9;left:0;width:100%;font-weight:bold;font-family:微软雅黑;bottom:0px;height:8%;top:92%;" class="pull-left center-block">
   <span  xid="span10" style="font-size:0.4rem;display:block;position:absolute;width:100%;height:40%;top:30%;" bind-text="lastStorage"><![CDATA[]]></span></div><div class="x-panel-content" xid="content1" style="width:100%;height:94%;">
  
 
  
  
<div component="$UI/system/components/justep/row/row" class="x-row center-block" xid="row1">
    <div class="x-col" xid="col1">
    <!-- <span id="sp8" xid="span8">当前需要进行操作</span> -->
  <input component="$UI/system/components/justep/input/input" class="form-control" xid="input1" id="scaninput" style="opacity: 0;height:0.6rem;" valueUpdateMode="keypress" bind-keydown="input2Keypress"></input></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col" xid="col3" style="text-align:center;"><span xid="span3" style="font-size:0.6rem;font-weight:bold;font-family:微软雅黑;" class="center-block" bind-text="hintreminder"><![CDATA[检查并扫描商品]]></span></div>
   </div><div xid="line" style="background-color:#FF0000;height:0.1rem;display:none;"></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col" xid="col2"><span class="type" xid="span4" style="font-weight:bold;font-family:微软雅黑;" bind-text="unitName"></span>
  <span xid="span6" style="margin-top:0.2rem;font-family:微软雅黑;" class="righttext" bind-text="No"></span></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <span xid="span5" class="text" bind-text="textName" style="font-size:0.5rem;font-family:微软雅黑;font-weight:bold;width:100%;"></span></div><label xid="label3" style="text-align:center;font-size:0.5rem;font-family:微软雅黑;width:100%;clip:rect(20px auto auto auto);background-color:#C00000;color:#FFFFFF;display:none;font-weight:bold;padding-top:0.2rem;padding-bottom:0.2rem;margin:0px 0px 0px 0px;" dir="ltr" id="goodsall" bind-text="binName"><![CDATA[]]></label>
  <label xid="carid" style="text-align:center;font-size:0.5rem;font-family:微软雅黑;width:100%;clip:rect(20px auto auto auto);color:#FFFFFF;font-weight:bold;padding-top:0.2rem;padding-bottom:0.2rem;background-color:#F4BF00;display:none;" dir="rtl" bind-text="bccar"><![CDATA[]]></label><div xid="baoc" style="text-align:center;margin-bottom:0.3rem;display:none;"><img src="../img/scrap.png" alt="" xid="image1" style="width:4rem;height:3rem;"></img>
  <a component="$UI/system/components/justep/button/button" label="操作失误，返回上一页面" xid="mainbtn" style="background-image:url(../img/btn12.png);background-size:100% 100%;font-size:0.6rem;text-align:center;top:0;left:0;font-family:微软雅黑;width:80%;" class="btn btn-default center-block" bind-click="mainbtnClick">
   <i xid="i3"></i>
   <span xid="span7">重新选择上架模式</span></a></div><div component="$UI/system/components/justep/row/row" class="x-row" style="width:100%;padding:0px 0px 0px 0px;margin-right:0px;margin-bottom:0px;margin-left:0px;" xid="row2">
   <div class="x-col" xid="col6" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:100%;"><input component="$UI/system/components/justep/input/input" class="form-control center-block" xid="input3" style="display:none;width:2rem;text-align:center;font-weight:bold;margin-top:0.2rem;margin-bottom:0.2rem;" bind-keydown="input3Keydown"   valueUpdateMode="keypress" dataType="Integer"></input><div id="messagStow" xid="div1" class="waring1" align="left" bind-click="div1Click" style="height:auto;text-align:center;padding:20px 10px 20px 10px;display:none;font-family:微软雅黑;font-size:0.5rem;font-weight:bold;" dir="ltr" bind-html="det">
</div>
  </div></div><div xid="div3"></div>
  </div>
  </div> 
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog2" forceRefreshOnOpen="true" height="60%" top="20%" style="top:62px;left:28px;" onReceive="windowDialog2Receive"></span><span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog" style="left:523px;top:120px;" routable="true" showTitle="false" resizable="true" height="auto" width="auto" onReceive="windowDialogReceive" forceRefreshOnOpen="true">
   <result concept="data" operation="edit" origin="data" xid="default6">
    <mapping from="id" to="id" locator="true" xid="default7"></mapping>
    <mapping from="name" to="name" xid="default8"></mapping>
    <mapping from="age" to="age" xid="default9"></mapping></result> </span></div>