<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad"/>  
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver"
    xid="windowReceiver1"/>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog2"
    status="normal" width="80%" height="65%"/>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1" tabindex="-1" bind-click="panel1Click"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar welcome"
        xid="titleBar1"> 
        <div class="x-titlebar-left" xid="left1"> 
          <span xid="welTittle">掉落商品处理</span> 
        </div> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="content1"> 
      <div xid="div1"> 
        <input component="$UI/system/components/justep/input/input" class="form-control"
          xid="input1" bind-keydown="input1Keydown" style="opacity:0;height:0.6rem"/>  
        <label xid="andonTit" bind-text=" andonTittle" class="tittle" style="display:none;margin-top:-0.3rem"/>  
        <div xid="mainCon"> 
          <label xid="label1" bind-text="tittle" class="tittle" style="margin-top:-0.3rem"/>  
          <div xid="proDesCon" style="font-family:微软雅黑;font-weight:bold;background:#DEEBF7"> 
            <div component="$UI/system/components/justep/row/row" class="x-row"
              xid="row3"> 
              <div class="x-col" xid="col1"> 
                <span xid="type" style="color:red;font:bold 0.8rem 微软雅黑" bind-text="proType"/> 
              </div>  
              <div class="x-col" xid="col2"> 
                <span xid="proid" class="proId" bind-text="proId"/> 
              </div> 
            </div>  
            <div component="$UI/system/components/justep/row/row" class="x-row"
              xid="row4" style="margin-top:-0.4rem"> 
              <div class="x-col" xid="col13"> 
                <span xid="proDes" class="proDes" bind-text="proDes"/> 
              </div> 
            </div> 
          </div>  
          <div xid="locationCon"> 
            <div xid="locationACon" bind-style="{ background: currentProfit.get()  }"> 
              <div component="$UI/system/components/justep/row/row" class="x-row"
                xid="row1"> 
                <div class="x-col location" xid="locationA"> 
                  <span bind-text="location"/> 
                </div> 
              </div> 
            </div>  
            <div xid="locationBCon" style="display:none" bind-style="{ background: currentProfit.get()  }"> 
              <div component="$UI/system/components/justep/row/row" class="x-row"
                xid="row2"> 
                <div class="x-col locationB" xid="locationB"> 
                  <span bind-text="location"/> 
                </div> 
              </div> 
            </div>  
            <div xid="inputNumCon" style="text-align:center;display:none;"> 
              <input component="$UI/system/components/justep/input/input" class="form-control inputNum"
                xid="inputNum" bind-keydown="inputNumKeydown" dataType="Integer"/> 
            </div> 
          </div> 
        </div>  
        <div xid="gunCon" style="text-align:center;display:none;"> 
          <input component="$UI/system/components/justep/input/input" class="form-control inputNum"
            xid="inputGun" dataType="Integer" bind-keydown="inputGunKeydown"/> 
        </div>  
        <div xid="successCon" class="successCon" style="text-align:center"> 
          <span xid="successMsg"></span> 
        </div>  
        <div xid="errorCon" class="errorCon"> 
          <span xid="errorMsg"/> 
        </div>  
        <div xid="lightCon" class="successCon"> 
          <span xid="lightMsg" style="text-align:left"/> 
        </div> 
      </div>  
      <div xid="nextLonctionCon" style="position:fixed; bottom:0;background-color:#d9d9d9;font-family:微软雅黑;font-weight:bold;text-align:center;font-size:0.5rem;width:100%"> 
        <div xid="correctCon" class="correctCon"> 
          <span xid="correctMsg"/> 
        </div>  
        <span style="display:inline-block;;padding:0.4rem;color:#000000;" xid="nextMsg">下一货位：
          <span xid="nextLonction" bind-text="nextLocation"/> 
        </span> 
      </div> 
    </div> 
  </div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1"
    width="80%" status="normal" height="65%" onReceive="windowDialog1Receive" resizable="true"/> 
</div>
