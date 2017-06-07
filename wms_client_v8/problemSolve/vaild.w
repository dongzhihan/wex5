<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:19px;left:118px;height:auto;" onParamsReceive="modelParamsReceive"/>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1" bind-click="panel1Click"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        xid="titleBar1" style="background:linear-gradient(#ffc746,#e5b600);box-shadow:0rem 0.1rem 0.1rem #8b8b8b"> 
        <div class="x-titlebar-left" xid="left1"> 
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
    <div class="x-panel-content" xid="content1"> 
      <div xid="div1"> 
        <div xid="originalCon" class="container"> 
        <span xid="span4"  style="color:#000000">
         	原始容器：
          	<span xid="original" bind-text="original"></span>
          </span>
        </div>  
        <div xid="mainContent"> 
         <input component="$UI/system/components/justep/input/input" class="form-control"
            xid="input1" bind-keydown="input1Keydown" style="opacity:0;height:0.6rem"/> 
          <label xid="label1" class="title" bind-text="title"/>  
        </div>  
        <div xid="proDesCon" style="display:none"> 
            <div component="$UI/system/components/justep/row/row" class="x-row"
              xid="sourceCon" style="display:none"> 
              <div class="x-co7" xid="col14" style="font:bold 0.5rem 微软雅黑;color:#000000"> 
                <span xid="span7">原始容器：</span>
                <span xid="originall" bind-text="original" style="color:#0033CC"/> 
              </div> 
            </div>  
          <div component="$UI/system/components/justep/row/row" class="x-row"
            xid="row1"> 
            <div class="x-col" xid="col1"> 
              <span xid="type" style="color:red;font-size:0.625rem;font-weight:bold" bind-text="proType"></span> 
            </div>  
            <div class="x-col" xid="col2"> 
              <span xid="proid" class="proId" bind-text="proId"/> 
            </div> 
          </div>  
          <div component="$UI/system/components/justep/row/row" class="x-row"
            xid="row2"> 
            <div class="x-col" xid="col13"> 
              <span xid="proDes" class="proDes" bind-text="proDes"/> 
            </div> 
          </div>  
              </div> 
          <div xid="dateCon" style="display:none;background:linear-gradient(#F18D59,#E26B1A);box-shadow:0rem 0.1rem 0.1rem #8b8b8b"> 
            <div component="$UI/system/components/justep/row/row" class="x-row"
              xid="productionDate" style="dispaly:none"> 
              <div class="x-col" xid="col14"> 
                <span xid="span5" class="dateDes">生产日期：
                  <span bind-text="productionDate"/> 
                </span> 
              </div> 
            </div>  
            <div component="$UI/system/components/justep/row/row" class="x-row"
              xid="row4" style=""> 
              <div class="x-col" xid="col15"> 
                <span xid="span6" class="dateDes">到期日期：
                  <span xid="expirationDate" bind-text="expirationDate"/> 
                </span> 
              </div> 
            </div>  
            <div component="$UI/system/components/justep/row/row" class="x-row"
              xid="expiryDateOut"> 
              <div class="x-col" xid="col16"> 
                <span xid="span7" class="dateDes">有 效 期 ：
                  <span bind-text="expiryDateOut"/> 
                </span> 
              </div> 
            </div> 
          </div> 
    
      </div>
      <div xid="opationCon" style="display:none">
        <a component="$UI/system/components/justep/button/button" class="btn btn-default btnOpation"
          xid="button4" bind-click="button4Click" style="background:linear-gradient(#6083cb,#2e61ba)"> 
          <i xid="i4"/>  
          <span xid="span8">1确定</span>
        </a>
        <a component="$UI/system/components/justep/button/button" class="btn btn-default btnOpation"
          xid="button5" bind-click="button5Click" style="background:linear-gradient(#6083cb,#2e61ba)"> 
          <i xid="i5"/>  
          <span xid="span9">2取消</span>
        </a> 
      </div> 
      <div xid="dateInCon" style="display:none">
        <div component="$UI/system/components/justep/row/row" class="x-row dateIn"
          xid="row7"> 
          <div class="x-col" xid="col3" style="width:80%">
            <span xid="year" bind-text="yearlab"></span>
          </div>  
          <div class="x-col" xid="col4">
            <input component="$UI/system/components/justep/input/input" class="form-control"
              xid="yearIn" style="height:1rem" bind-keydown="yearInKeydown"/>
          </div> 
        </div>  
        <div component="$UI/system/components/justep/row/row" class="x-row dateIn"
          xid="row9"> 
          <div class="x-col" xid="col9" style="width:80%">
            <span xid="month" bind-text="monthlab"></span>
          </div>  
          <div class="x-col" xid="col10">
            <input component="$UI/system/components/justep/input/input" class="form-control"
              xid="monthIn" style="height:1rem" bind-keydown="monthInKeydown"/>
          </div> 
        </div>
        <div component="$UI/system/components/justep/row/row" class="x-row dateIn"
          xid="row8"> 
          <div class="x-col" xid="col6" style="width:80%">
            <span xid="day" bind-text="daylab"></span>
          </div>  
          <div class="x-col" xid="col7">
            <input component="$UI/system/components/justep/input/input" class="form-control"
              xid="dayIn" style="height:1rem" bind-keydown="dayInKeydown"/>
          </div> 
        </div>
        <div component="$UI/system/components/justep/row/row" class="x-row dateIn"
          xid="expiryDateCon"> 
          <div class="x-col" xid="col12" style="width:80%">
            <span xid="expiryDate" bind-text="expiryDatelab"></span>
          </div>  
          <div class="x-col" xid="col17">
            <input component="$UI/system/components/justep/input/input" class="form-control"
              xid="expiryDateIn" style="height:1rem" bind-keydown="expiryDateInKeydown"/>
          </div> 
        </div>
      </div> 
    <div xid="okCon" style="width:100%;display:none">
    <div style="width:6rem;text-align:center;margin:0 auto">	
    <a component="$UI/system/components/justep/button/button" class="btn btn-default btnOpation btnOk"  xid="button6" bind-click="button6Click">
   <i xid="i6"></i>
   <span xid="span11">确定</span></a><a component="$UI/system/components/justep/button/button" class="btn btn-default btnOpation btnOk"  xid="button7" bind-click="button7Click">
   <i xid="i7"></i>
   <span xid="span12">取消</span></a></div>
  </div>
   <div xid="successCon" class="successCon">
            <span xid="successMsg"/> 
     </div>
        <div xid="errorCon" class="errorCon">
            <span xid="errorMsg"/> 
     </div>  
  </div> 
  </div> 
</div>
