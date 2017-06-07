<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad">
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="slotInfo" idColumn="id">
      <column name="id" type="String" xid="xid1"/>  
      <column name="rebatchSlotName" type="String" xid="xid2"/>
    </div>
  </div>  
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver"
    xid="windowReceiver1"/>
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-content" xid="content1"> 
      <div style="width:95%;margin:0 auto; height:9.5rem" class=" x-scroll-view"> 
      	<!--
        <table component="$UI/system/components/justep/list/list" class="x-list"
          xid="list1" data="slotInfo" style="width:100%;text-align:center"> 
          <thead xid="thead1"> 
            <tr xid="tr1"> 
              <th xid="th1">Slot号码</th>  
              <th xid="th2">操作</th> 
            </tr> 
          </thead>  
          <tbody class="x-list-template" xid="listTemplate1"> 
            <tr xid="tr2" bind-css="{'bg-info':$index() %2 == 1 }"> 
              <td xid="td1" bind-text="ref(&quot;rebatchSlotName&quot;)" style="font-family:calibri;"/>  
              <td xid="td2">
                <a component="$UI/system/components/justep/button/button"
                  class="btn btn-default" xid="button1" onClick="button1Click" style="padding:0.1rem 0.5rem;background:#00b050;box-shadow: 1px 1px 1px #2e2e2e;"> 
                  <i xid="i1"/>  
                  <span xid="span1">换车完成</span>
                </a> 
              </td> 
            </tr> 
          </tbody> 
        </table>  
          -->
        <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView"
          xid="scrollView3" > 
          <div class="x-scroll-content" xid="div8"> 
            <table class="x-list" component="$UI/system/components/justep/list/list"
              data="slotInfo" limit="-1" xid="list3"> 
              <thead xid="thead1"> 
                <tr xid="tr1"> 
                  <th xid="th1">Slot号码</th>  
                  <th xid="th2">操作</th> 
                </tr> 
              </thead>  
              <tbody class="x-list-template" xid="listTemplate3"> 
                <tr xid="tr2" bind-css="{'bg-info':$index() %2 == 1 }"> 
                  <td xid="td1" bind-text="ref(&quot;rebatchSlotName&quot;)" style="font-family:calibri;"/>  
                  <td xid="td2">
                    <a component="$UI/system/components/justep/button/button"
                      class="btn btn-default" xid="button1" onClick="button1Click"
                      style="padding:0.1rem 0.5rem;background:#00b050;box-shadow: 1px 1px 1px #2e2e2e;" bind-visible="ref('id')"> 
                      <i xid="i1"/>  
                      <span xid="span1">换车完成</span>
                    </a> 
                  </td> 
                </tr> 
              </tbody> 
            </table> 
          </div> 
        </div>
      </div> 
      <a component="$UI/system/components/justep/button/button" class="btn btn-default"
          xid="button2" style="padding:0.1rem 0.5rem;margin-top:0.2rem" onClick="button2Click"> 
          <i xid="i2"/>  
          <span xid="span2">返回</span>
        </a> 
    </div> 
  </div>
</div>
