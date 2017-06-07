<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onActive="modelActive" onLoad="modelLoad"/>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1" bind-click="panel1Click"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        xid="titleBar1" style="background: linear-gradient(#FFC744, #E5B600);box-shadow: 0rem 0.1rem 0.1rem #8B8B8B;display:-webkit-box"> 
        <div class="x-titlebar-right reverse" xid="right1"> 
          <a component="$UI/system/components/justep/button/button" class="btn btn-default"
            label="" xid="button2" bind-click="button2Click" style="padding:0.2rem 0.3rem;font-size:0.4rem;margin-right:0.15rem;background: linear-gradient(#5C81CA,#2F62BB );"> 
            <i xid="i2"/>  
            <span xid="span2" style="font-weight:normal">退出</span>
          </a> 
        </div> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="content1" style="height:100%;"> 
      <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full"
        active="0" xid="contents1" routable="false"> 
        <div class="x-contents-content" xid="content2"> 
          <div> 
            <div xid="mianCon"> 
              <label xid="label1" bind-text="tittle" class="tittle" style="margin-top:0.5rem"><![CDATA[]]></label>  
              <div component="$UI/system/components/justep/labelEdit/labelEdit"
                class="x-label-edit x-label30" xid="labelEdit1" style="display:-webkit-box"> 
                <label class="x-label" xid="label1" style="width:3.5rem;color:#000000">笼车号码：</label>  
                <input component="$UI/system/components/justep/input/input" class="form-control x-edit"
                  xid="input1" style="width:6rem;height:0.8rem" bind-keydown="input1Keydown"/> 
              </div>  
              <div component="$UI/system/components/justep/labelEdit/labelEdit"
                class="x-label-edit x-label30" xid="labelEdit2" style="display:-webkit-box"> 
                <label class="x-label" xid="label2" style="width:3.5rem;color:#000000">发货门：</label>  
                <input component="$UI/system/components/justep/input/input" class="form-control x-edit"
                  xid="input2" style="width:6rem;height:0.8rem" bind-keydown="input2Keydown"/> 
              </div> 
            </div>  
            <div xid="errorCon" style="display:none;background-color:#FF0000;font-family:微软雅黑;font-weight:bold;color:#FFFFFF;font-size:0.5rem;text-align:center;padding:0.5rem;"
              dir="rtl">
              <span xid="errorMsg"/> 
            </div>  
            <div xid="successCon" style="display:none"> 
              <span xid="success" class="success"/> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
  </div> 
</div>
