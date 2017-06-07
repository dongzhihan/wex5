<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad"/> 
<span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1"></span><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-content" xid="content1" style="background-color:#DEEBF7;"><div xid="div1" style="text-align:center;color:#000000;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col3"><span xid="span3" style="font-size:0.6rem;font-family:宋体;font-weight:bold;"><![CDATA[已经拣货]]></span>
  <span xid="span4" style="font-size:0.5rem;font-family:宋体;font-weight:bold;" bind-text="pickQty"></span>
  <span xid="span5" style="font-size:0.6rem;font-family:宋体;font-weight:bold;"><![CDATA[件商品]]></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col4">
    <span xid="span6" style="font-size:0.6rem;font-family:宋体;font-weight:bold;"><![CDATA[还有]]></span>
    <span xid="span7" style="font-size:0.5rem;font-family:宋体;font-weight:bold;" bind-text="surplus"></span>
    <span xid="span8" style="font-size:0.6rem;font-family:宋体;font-weight:bold;"><![CDATA[件商品待处理]]></span></div> </div></div>
  
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btnstyle " label="M —商品丢失" xid="button8" style="background:linear-gradient(#5C81CA,#2F62BB );font-size:0.5rem;font-family:宋体;width:90%;" bind-click="button8Click">
   <i xid="i8"></i>
   <span xid="span9">M —商品丢失</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btnstyle" label="D —商品残损" xid="button1" style="background:linear-gradient(#5C81CA,#2F62BB );font-size:0.5rem;font-family:宋体;width:90%;" bind-click="button1Click">
   <i xid="i1"></i>
   <span xid="span10">D —商品残损</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btnstyle" label="F —货筐已满" xid="button2" style="background:linear-gradient(#5C81CA,#2F62BB );background-color:#D3CFD0;font-size:0.5rem;font-family:宋体;width:90%;" bind-click="button2Click">
   <i xid="i2"></i>
   <span xid="span11">F —货筐已满</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btnstyle" label="B—操作失误，重新输入数量" xid="button3" style="background:linear-gradient(#5C81CA,#2F62BB );background-color:#D3CFD0;font-size:0.5rem;font-family:宋体;width:90%;" bind-click="button3Click">
   <i xid="i3"></i>
   <span xid="span12">B—操作失误，重新输入数量</span></a></div>
   </div></div>