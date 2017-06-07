<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onParamsReceive="modelParamsReceive" onLoad="modelLoad"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="id">
   <column label="ID" name="id" type="String" xid="default1"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" style="background-image:url(img/out.png) fixed center center no-repeat;background-size:cover;font-size:0.7rem;height:auto;" class="x-titlebar" xid="titleBar1">
   <div class="x-titlebar-title" style="width:262px;" xid="title1">请选择库房</div></div></div>
   <div class="x-panel-content" xid="content1" style="top:2rem;"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="data1">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2" style="text-align:center;border-style:solid solid solid solid;border-width:0.1rem;background-color:#0099FF;" bind-click="li2Click"><span xid="span1" bind-text='row.name' style="font-size:0.5rem;color:black;"></span></li></ul> </div>
  </div>
   <div class="x-panel-bottom" xid="bottom1"></div></div>
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1"></span></div>