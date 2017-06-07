<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:168px;left:31px;height:auto;"
    onLoad="modelLoad" onActive="modelActive"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="data1" idColumn="containerName"> 
      <column label="笼车名称" name="containerName" type="String" xid="xid1"></column>
  <column name="sortCode" type="String" xid="xid2"></column></div> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1" bind-click="panel1Click"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        xid="titleBar1" style="background: linear-gradient(#FFC84C, #E2B600);box-shadow: 0rem 0.1rem 0.1rem #8B8B8B;height:3rem"> 
        <div class="x-titlebar-left" xid="left1" style="display:-webkit-box;"> 
          <div style="display:inline-block;width:7rem"> 
            <a component="$UI/system/components/justep/button/button" class="btn btn-default"
              label="" xid="button1" style="width:2.6rem;margin-right:0.6rem;margin-bottom:0.3rem;background:linear-gradient(#9989ce,#3061b9)"
              bind-click="button1Click"> 
              <i xid="i1"/>  
              <span xid="span1"> 
                <span class="yw">B</span>绑定笼车
              </span> 
            </a>  
            <a component="$UI/system/components/justep/button/button" class="btn btn-default"
              label="" xid="button2" style="width:3.5rem;margin-bottom:0.3rem;" bind-click="button2Click"> 
              <i xid="i2"/>  
              <span xid="span2"> 
                <span class="yw">M</span>多目的地扫描
              </span> 
            </a> 
          </div>  
          <div style="display:inline-block;width:7rem"> 
            <a component="$UI/system/components/justep/button/button" class="btn btn-default"
              label="" xid="button3" style="width:2.6rem;margin-right:0.6rem; " bind-click="button3Click"> 
              <i xid="i3"/>  
              <span xid="span3"> 
                <span class="yw">F</span>笼车已满
              </span> 
            </a>  
            <a component="$UI/system/components/justep/button/button" class="btn btn-default"
              xid="button4" style="width:3.5rem;" bind-click="button4Click"> 
              <i xid="i4"/>  
              <span xid="span4"> 
                <span class="yw">S</span>单目的地扫描
              </span> 
            </a> 
          </div> 
        </div>  
        <div class="x-titlebar-right reverse" xid="right1"> 
          <a component="$UI/system/components/justep/button/button" class="btn btn-default"
            label="" xid="button5" style="width:2rem" bind-click="button5Click"> 
            <i xid="i5"/>  
            <span xid="span5" style="text-algin:center"> 
              <span class="yw">E
                <br/> 
              </span>退出
            </span> 
          </a> 
        </div> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="content1" style="top:3rem"> 
      <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full"
        active="0" xid="contents1" slidable="false" routable="false" wrap="false"
        swipe="false"> 
        <div class="x-contents-content" xid="content2" onActive="content2Active"
          onInactive="content2Inactive"> 
          <div xid="div1"> 
            <label xid="label1" bind-text="Btitle" class="title" style="margin-top:0.5rem"><![CDATA[]]></label>  
            <div component="$UI/system/components/justep/labelEdit/labelEdit"
              class="x-label-edit x-label30" xid="labelEdit1" style="display:-webkit-box"> 
              <label class="x-label" xid="label2" style="width:auto;color:#000000">目的地ID：</label>  
              <input component="$UI/system/components/justep/input/input" class="form-control x-edit"
                xid="input1" style="width:6rem;height:0.8rem" bind-keydown="input1Keydown"/> 
            </div>  
            <div component="$UI/system/components/justep/labelEdit/labelEdit"
              class="x-label-edit x-label30" xid="labelEdit2" style="display:-webkit-box"> 
              <label class="x-label" xid="label3" style="width:auto;color:#000000">笼车号码：</label>  
              <input component="$UI/system/components/justep/input/input" class="form-control x-edit"
                xid="input2" style="width:6rem;height:0.8rem" bind-keydown="input2Keydown"/> 
            </div>  
            <div xid="BErrCon" class="errorCon"> 
              <span xid="BErrMsg"/> 
            </div> 
          </div> 
        </div>  
        <div class="x-contents-content" xid="content3" onActive="content3Active"
          onInactive="content3Inactive"> 
          <input component="$UI/system/components/justep/input/input" class="form-control"
            xid="input4" bind-keydown="input4Keydown" style="opacity:0;height:0.6rem"/>  
          <label xid="label6" class="title" bind-text="Mtitle"><![CDATA[]]></label>  
          <div xid="orderDes" style="display:none;margin-top:-0.5rem"> 
            <div component="$UI/system/components/justep/row/row" class="x-row"
              xid="row1" style="display:-webkit-box;"> 
              <div class="x-col" xid="col1" style="display:inline-block"> 
                <span class="msgLab">订单号码：</span> 
              </div>  
              <div class="x-col" xid="col2"> 
                <span class="msgLab msgValue" xid="shipment" bind-text="shipment"/> 
              </div> 
            </div>  
            <div component="$UI/system/components/justep/row/row" class="x-row"
              xid="row2" style="display:-webkit-box;"> 
              <div class="x-col" xid="col3" style="display:inline-block"> 
                <span class="msgLab">Sort Code：</span> 
              </div>  
              <div class="x-col" xid="col4"> 
                <span class="msgLab msgValue" xid="sortCodeNo" bind-text="sortCodeNo"/> 
              </div> 
            </div>  
            <div component="$UI/system/components/justep/row/row" class="x-row"
              xid="row3" style="display:-webkit-box;"> 
              <div class="x-col" xid="col5" style="display:inline-block"> 
                <span class="msgLab ">笼车号码：</span> 
              </div>  
              <div class="x-col" xid="col6"> 
                <span class="msgLab msgValue" xid="containerName" bind-text="containerName"/> 
              </div> 
            </div> 
          </div>  
          <div xid="MErrCon" class="errorCon"> 
            <span xid="MErrMsg"/> 
          </div>  
          <div xid="MSuccessCon" class="successCon"> 
            <span xid="MSuccessMsg"/> 
          </div> 
        </div>  
        <div class="x-contents-content" xid="content4" onActive="content4Active"
          onInactive="content4Inactive"> 
          <label xid="label4" class="title" style="margin-top:0.5rem">扫描已满笼车号码</label>  
          <div component="$UI/system/components/justep/labelEdit/labelEdit"
            class="x-label-edit x-label30" xid="labelEdit3" style="display:-webkit-box"> 
            <label class="x-label" xid="label5" style="width:auto;color:#000000">已满笼车：</label>  
            <input component="$UI/system/components/justep/input/input" class="form-control x-edit"
              xid="input3" style="width:6rem;height:0.8rem" bind-keydown="input3Keydown"/> 
          </div>  
          <div xid="FErrCon" class="errorCon"> 
            <span xid="FErrMsg"/> 
          </div>  
          <div xid="FsuccessCon" class="successCon"> 
            <span xid="FsuccessMsg"/> 
          </div> 
        </div>  
        <div class="x-contents-content" xid="content5" onActive="content5Active"
          onInactive="content5Inactive"> 
          <div xid="div3"> 
            <div xid="SorderDes" style="display:none;background:#BDD7EE;line-height:0.5rem"> 
              <!--<div component="$UI/system/components/justep/row/row" class="x-row"
                xid="row4" style="display:-webkit-box;"> 
                <div class="x-col" xid="col7" style="display:inline-block"> 
                  <span class="msgLab SmsgLab">目的地号码：</span> 
                </div>  
                <div class="x-col" xid="col8"> 
                  <span class="msgLab msgValue" xid="destination" bind-text="destination"/> 
                </div> 
              </div>-->  
              <div component="$UI/system/components/justep/row/row" class="x-row"
                xid="row5" style="display:-webkit-box;"> 
                <div class="x-col" xid="col9"  style="display:inline-block"> 
                  <span class="msgLab SmsgLab">Sort Code：</span> 
                </div>  
                <div class="x-col" xid="col10"> 
                  <span class="msgLab msgValue" xid="sortCodeNo" bind-text="sortCodeNo"/> 
                </div> 
              </div>  
              <div component="$UI/system/components/justep/row/row" class="x-row"
                xid="row6" style="display:-webkit-box;"> 
                <div class="x-col" xid="col11" style="display:inline-block"> 
                  <span class="msgLab SmsgLab">笼车号码：</span> 
                </div>  
                <div class="x-col" xid="col12"> 
                  <span class="msgLab msgValue" xid="containerName" bind-text="containerName"/> 
                </div> 
              </div> 
            </div>  
            <input component="$UI/system/components/justep/input/input" class="form-control"
              xid="input5" bind-keydown="input5Keydown" style="opacity:0;height:0.6rem"/>  
            <label xid="label7" class="title" bind-text="Stitle" style="width:100%;"/>  
            <div xid="SErrCon" class="errorCon"> 
              <span xid="SErrMsg"/> 
            </div>  
            <div xid="SSuccessCon" class="successCon"> 
              <span xid="SSuccessMsg"/> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div>  
    <div style="position:fixed; bottom:0;font-family:微软雅黑;font-weight:bold;text-align:center;font-size:0.44rem;width:100%"> 
      <div class="x-scroll-view" style="height:5.5rem;" supportpulldown="true"> 
        <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView"
          xid="scrollView8"> 
          <div class="x-scroll-content" xid="div27"> 
            <ul class="x-list x-list-template" component="$UI/system/components/justep/list/list"
              data="data1" limit="-1" xid="list1"> 
               <li xid="li1" style="background:#92d050;margin-top:0.05rem;color:#000000"> 
            <span xid="span6" style="margin-left:0.3rem;" bind-text="ref('sortCode')"/>-<span xid="span7" bind-text='ref("containerName")'/>
          </li> 
            </ul> 
          </div>  
        </div>
      </div>  
      <div>
        <span style="display:inline-block;padding:0.5rem;color:#000000;background-color:#d9d9d9;width:100%"
          xid="prvmsg">上一订单：
          <span xid="span1" bind-text="prvOrder"/> 
        </span>
      </div> 
    </div> 
  </div> 
</div>
