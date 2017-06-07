<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onParamsReceive="modelParamsReceive" onLoad="modelLoad" onActive="modelActive"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="ordersData" idColumn="name"><column label="name" name="name" type="String" xid="xid1"></column>
  <column label="id" name="id" type="String" xid="xid3"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar welcome" xid="titleBar1" >
   <div class="x-titlebar-title" xid="title1" bind-text="welcome" ></div>
   </div></div>
   <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents1" routable="false" slidable="false" swipe="false" wrap="false">
   <div class="x-contents-content" xid="content2" onActive="content2Active"><div xid="div1"><label xid="label1" class="tittle" bind-text="tittle"></label>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btnOpation" xid="button1" bind-click="button1Click">
   <i xid="i1"></i>
   <span xid="span1" bind-text="opationOne"></span></a><a component="$UI/system/components/justep/button/button" class="btn btn-default btnOpation"  xid="button2" bind-click="button2Click">
   <i xid="i2"></i>
   <span xid="span2" bind-text="opationTwo"></span></a><a component="$UI/system/components/justep/button/button" class="btn btn-default btnOpation"  xid="button3" bind-click="button3Click">
   <i xid="i3"></i>
   <span xid="span3" bind-text="opationThree"></span></a>
            <a component="$UI/system/components/justep/button/button" class="btn btn-default btnOpation" xid="button4" bind-click="button4Click">
   <i xid="i4"></i>
   <span xid="span4" bind-text="opationFour"></span></a><a component="$UI/system/components/justep/button/button" class="btn btn-default center-block" label="返回" xid="quit" style="margin-top:0.5rem;width:2rem;font-size:0.47rem;font-weight:bold;font-family:微软雅黑;color:#000000;background-color:#FFC000;" onClick="quitClick" bind-keypress="quitKeypress">
   <i xid="i5"></i>
   <span xid="span5">返回</span></a>
   </div>

  </div>
  <div class="x-contents-content" xid="content3" onActive="content3Active"><div xid="div2"><label xid="label2" class="tittle" bind-text="tittle"></label>
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="ordersData">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1" class="btnOpation" bind-click="stocktakingNameClick"><span xid="stocktakingName" bind-text='ref("name")'></span></li></ul> </div></div>
  <div xid="orderErrorCon" class="errorCon"><span xid="orderErrorMsg" class="errorMsg">
   </span></div>
            <a component="$UI/system/components/justep/button/button" class="btn btn-default center-block" label="返回" xid="quit" style="margin-top:0.5rem;width:2rem;font-size:0.47rem;font-weight:bold;font-family:微软雅黑;color:#000000;background-color:#FFC000;" onClick="quitClick" bind-keypress="quitKeypress">
   <i xid="i5"></i>
   <span xid="span5">返回</span></a></div>
  <div class="x-contents-content" xid="content4" onActive="content4Active" onInactive="content4Inactive"><div xid="div3"><label xid="label3" class="tittle" bind-text="tittle"></label>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btnOpation" label="" xid="button5" bind-click="button5Click">
   <i xid="i5"></i>
   <span xid="span5">系统自动分配任务</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btnOpation" label="" xid="button6" bind-click="button6Click">
   <i xid="i6"></i>
   <span xid="span6">扫描临近货位</span></a></div>
   <div xid="errorCon" class="errorCon"><span xid="errorMsg" class="errorMsg">
   </span></div>
            <a component="$UI/system/components/justep/button/button" class="btn btn-default center-block" label="返回" xid="quit" style="margin-top:0.5rem;width:2rem;font-size:0.47rem;font-weight:bold;font-family:微软雅黑;color:#000000;background-color:#FFC000;" onClick="quitClick" bind-keypress="quitKeypress">
   <i xid="i5"></i>
   <span xid="span5">返回</span></a></div></div></div>
</div></div>