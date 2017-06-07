<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:9px;left:230px;height:auto;"
    onActive="modelActive" onLoad="modelLoad" onInactive="modelInactive"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="rqDes" idColumn="goodsName">
      <column label="商品名称" name="itemDataName" type="String" xid="xid5"></column>
  <column label="数量" name="amount" type="Integer" xid="xid6"></column>
  <column label="状态" name="inventoryState" type="String" xid="xid7"></column>
  <column label="客户" name="clientName" type="String" xid="xid8"></column></div>
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="proDes">
      <column label="位置" name="storageLocationName" type="String" xid="xid1"></column>
  <column label="数量" name="amount" type="Integer" xid="xid2"></column>
  <column label="状态" name="inventoryState" type="String" xid="xid3"></column>
  <column label="客户" name="clientName" type="String" xid="xid4"></column></div>
  </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        xid="titleBar1" style="background:linear-gradient(#ffc746,#e5b600);box-shadow:0rem 0.1rem 0.1rem #8b8b8b"> 
        <div class="x-titlebar-left" xid="left1"> 
          <a component="$UI/system/components/justep/button/button" class="btn btn-default button"
            label="" xid="button1" bind-click="button1Click"> 
            <i xid="i1"/>  
            <span xid="span1">商品</span> 
          </a>  
          <a component="$UI/system/components/justep/button/button" class="btn btn-default button"
            label="" xid="button2" bind-click="button2Click"> 
            <i xid="i2"/>  
            <span xid="span2">容器</span> 
          </a> 
        </div>  
        <div class="x-titlebar-title" xid="title1"/>  
        <div class="x-titlebar-right reverse" xid="right1"> 
          <a component="$UI/system/components/justep/button/button" class="btn btn-default button"
            label="" xid="button3" bind-click="button3Click"> 
            <i xid="i3"/>  
            <span xid="span3"/>返回
          </a> 
        </div> 
      </div> 
    </div>  
    <div class="x-panel-content x-scroll-view" xid="content1" _xid="C7877F0E4F500001DF29C7422F90196F" style="bottom: 0px;"> 
      <div xid="div1"> 
              <div xid="ipt1">
        <input component="$UI/system/components/justep/input/input" class="form-control"
          xid="input1" bind-keydown="input1Keydown" onBlur="input1Blur" style="opacity:0;height:0.6rem"/>
          </div>
          <div xid="ipt2" style="display:none">
          <input component="$UI/system/components/justep/input/input" class="form-control"
          xid="input2" onBlur="input2Blur" bind-keydown="input2Keydown"/>
          </div>   
        <label xid="label1" class="title" bind-text="title"/>   
        <div component="$UI/system/components/justep/row/row" class="x-row"
          xid="row1" style="display:-webkit-box;"> 
          <div class="x-col" xid="col1" style="display:inline-block;padding:0"> 
            <span xid="span4" class="ms" bind-text="sku"/>
          </div> 
        </div>  
        <div component="$UI/system/components/justep/row/row" class="x-row"
          xid="row2" style="display:-webkit-box;"> 
          <div class="x-col" xid="col2" style="display:inline-block;padding:0">
            <span xid="span5" bind-text="proName" class="ms"/>
          </div> 
        </div>  
        <div component="$UI/system/components/justep/row/row" class="x-row"
          xid="row3" style="display:-webkit-box;"> 
          <div class="x-col" xid="col3" style="display:inline-block;padding:0">
            <span xid="span6" bind-text="total" class="ms"/>
          </div> 
        </div> 
      </div>  
    <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1" style="height:58.7%;display:none">
   <div class="x-scroll-content" xid="div3">
         <table component="$UI/system/components/justep/list/list" class="x-list"
        xid="list1" imit="-1" data="proDes" style="width:100%;"> 
        <thead xid="thead1"> 
          <tr xid="tr1"> 
            <th xid="th1">位置</th>  
            <th xid="th2" bind-text="thAmount"></th>  
            <th xid="th3">状态</th>  
            <th xid="th4">客户</th> 
          </tr> 
        </thead>  
        <tbody class="x-list-template" xid="listTemplate1"> 
          <tr xid="tr2" bind-css="{'bg-info':$index() %2 == 1 }"> 
            <td xid="td1" bind-text='ref("storageLocationName")' style="font-family:calibri;"/>  
            <td xid="td2" bind-text='ref("amount")' style="font-family:calibri"/>  
            <td xid="td3" bind-text='ref("inventoryState")' style="font-family:calibri"/>  
            <td xid="td4" bind-text='ref("clientName")' style="font-family:calibri"></td>
          </tr> 
        </tbody> 
      </table>  
	</div> 
   </div>
   <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView2" style="height:58.7%;display:none">
   <div class="x-scroll-content" xid="div4">
     <table component="$UI/system/components/justep/list/list" class="x-list"
        xid="list2" imit="-1" data="rqDes"> 
        <thead xid="thead2"> 
          <tr xid="tr3"> 
            <th xid="th5">商品名称</th>
            <th xid="th6" bind-text="thAmount"></th>
            <th xid="th7">状态</th>
            <th xid="th8">客户</th>
          </tr> 
        </thead>  
        <tbody class="x-list-template" xid="listTemplate4"> 
          <tr xid="tr4" bind-css="{'bg-info':$index() %2 == 1 }"> 
            <td xid="td5" style="font-family:calibri;width:5rem" bind-text='ref("itemDataName")'/>
            <td xid="td6" style="font-family:calibri" bind-text='ref("amount")'/>
            <td xid="td7" bind-text='ref("inventoryState")'/>
            <td xid="td8" bind-text='ref("clientName")'/>
          </tr> 
        </tbody> 
      </table> </div> 
   </div></div> 
  </div> 
</div>
