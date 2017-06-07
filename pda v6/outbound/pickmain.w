<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:12px;left:105px;height:auto;" onLoad="modelLoad"
    onActive="modelActive" onParamsReceive="modelParamsReceive" />
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1" bind-click="panel1Click">
    <div class="x-panel-top" xid="top1" style="width:100%;" height="48">
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" style="box-shadow:0rem 0.1rem 0.1rem #8b8b8b;background: linear-gradient(#FFC642,#E6B600);height:100%;width:100%;"
        xid="titleBar1">
        <div class="x-titlebar-right reverse" style="margin:1px 1px 1px 1px;width:30%;height:100%;" xid="right1">
          <span class="qtystyle" xid="car2qty" bind-text="lostQty"><![CDATA[]]></span>
          <img src="../img/chezi.png" alt="" xid="car2" style="height:100%;"></img>
          <span class="qtystyle" xid="car1qty" bind-text="carQty"><![CDATA[]]></span>
          <img src="../img/car1.png" alt="" xid="car1" style="height:100%;" height="100%" dir="ltr"></img>
        </div>
      </div>
    </div>
    <div class="x-panel-content" xid="content1"><input   component="$UI/system/components/justep/input/input" style="opacity: 0;height:0.6rem"  class="form-control" xid="input1" bind-keydown="input1Keydown"></input>
      <div
        component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
        <div class="x-col" xid="col3" style="text-align:center;">
          <span xid="span3" style="font-size:0.6rem;font-weight:bold;font-family:微软雅黑;color:#000000;" class="center-block" bind-text="hintreminder"><![CDATA[扫描货位]]></span></div>
    </div>

    <div xid="allocation" style="text-align:center;font-family:微软雅黑;font-weight:bold;color:#000000;">
      <div xid="div3">
        <div xid="div4" style="height:0.2rem;background-color:#66FFFF;" bind-style="{'background':color.get()}"></div>
        <span xid="span1" style="font-size:0.9rem;font-family:微软雅黑;color:#000000;" bind-text="hw"></span>
        <div xid="div5"
          style="height:0.2rem;background-color:#66FFFF;" bind-style="{'background':color.get()}"></div>
      </div>
      <div xid="div6">
        <div xid="div7" style="height:1.2rem;background-color:#66FFFF;" dir="ltr" bind-style="{'background':color.get()}"><span xid="span2" bind-text="hw" style="font-size:0.8rem" bind-style="{'color':fontColor.get()}"></span></div>
      </div>

      <div xid="div1" style="text-align:left;">
        <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
          <div class="x-col" xid="col2">
            <span class="qty" xid="span7" bind-text="fqty" style="font-weight:bold;font-family:微软雅黑;" bind-visible="fqty.get()&gt;1"><![CDATA[]]></span>
            <span
              class="qty" xid="span8" style="font-weight:bold;font-family:微软雅黑;" bind-visible="fqty.get()&gt;1">
              <![CDATA[件]]>
              </span><span class="type" xid="span4" bind-text="unitType" style="font-weight:bold;font-family:微软雅黑;"></span>
              <span xid="span6" style="margin-top:0.2rem;font-family:微软雅黑;" class="righttext" bind-text="itemNo"></span>
          </div>
        </div>
        <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
          <span xid="span5" class="text" bind-text="text" style="font-size:0.5rem;font-family:微软雅黑;font-weight:bold;"></span></div>
      </div>
      <input component="$UI/system/components/justep/input/input" class="form-control center-block" xid="input3" style="display:none;width:2rem;text-align:center;font-weight:bold;margin-top:0.2rem;margin-bottom:0.2rem;"
        bind-keydown="input3Keydown"></input>
    </div>

    <div xid="baoc" style="text-align:center;margin-bottom:0.3rem;display:none;">
      <img src="$UI/truk/img/scrap.png" alt="" xid="image1" style="width:4rem;height:3rem;"></img>
      <a component="$UI/system/components/justep/button/button" label="操作失误，返回上一页面" xid="mainbtn" style="background: linear-gradient(#5C81CA,#2F62BB );background-size:100% 100%;font-size:0.6rem;text-align:center;top:0;left:0;font-family:微软雅黑;width:80%;"
        class="btn btn-default center-block" bind-click="mainbtnClick">
        <i xid="i3"></i>

        <span xid="span9">重新选择上架模式</span></a>
    </div>
    <div xid="lostsku" style="text-align:center;">
      <div xid="div9" style="display:none;margin-top:0.5rem;">
        <a component="$UI/system/components/justep/button/button" label="货位为空 没有商品" xid="button1" style="background:linear-gradient(#5C81CA,#2F62BB );background-size:100% 100%;font-size:0.6rem;text-align:center;top:0;left:0;font-family:微软雅黑;width:auto;display:inline;"
          class="btn btn-default center-block" bind-click="button2Click">
          <i xid="i1"></i>
          <span xid="span11">货位为空 没有商品</span></a>
      </div>
      <div xid="div10" style="display:none;margin-top:0.5rem;">
        <a component="$UI/system/components/justep/button/button" label="我已扫描完所有商品" xid="button2" style="background:linear-gradient(#5C81CA,#2F62BB );background-size:100% 100%;font-size:0.6rem;text-align:center;top:0;left:0;font-family:微软雅黑;width:auto;display:inline;"
          class="btn btn-default center-block" bind-click="button2Click">
          <i xid="i2"></i>
          <span xid="span12">我已扫描完所有商品</span></a>
        <div xid="div11" style="font-size:0.5rem;background-color:red;width:100%;height:2rem;text-align:left;padding:15px 15px 15px 15px;font-family:微软雅黑;font-weight:bold;color:#FFFFFF;margin-top:0.5rem;"><span xid="span13" style="vertical-align:middle;"><![CDATA[商品扫描错误：]]></span>
          <span xid="span14" bind-text="skuid"></span>
        </div>
      </div>
    </div>

    <div xid="scanning" style="display:none;"><input component="$UI/system/components/justep/input/input" class="form-control center-block" xid="input2" style="width:2rem;text-align:center;font-weight:bold;margin-top:0.2rem;margin-bottom:0.2rem;"
        bind-keydown="input5Keydown" dataType="String"></input>
    </div>
    <div id="messagpickmain" xid="div8" class="waring1 war" align="center" style="text-align:center;padding:0.3rem;font-family:微软雅黑;font-size:0.5rem;font-weight:bold;height:auto;color:#FFFFFF;"
      dir="ltr"></div>
  </div>
  <div class="x-panel-bottom" xid="bottom1"><div tabindex="-1" xid="div2" align="center" style="background-color:#D9D9D9;width:100%;height:100%;font-weight:bold;font-family:微软雅黑;" class="pull-left center-block">
    <span xid="span10" style="font-size:0.4rem;display:block;position:absolute;width:100%;height:40%;top:30%;" bind-text="binName"><![CDATA[下一货位：P-1-A332B432]]></span></div></div>
</div>
<span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog3" onReceive="windowDialog3Receive"></span>
<span
  component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" height="65%" top="10%" status="normal"
  onReceive="windowDialog1Receive" forceRefreshOnOpen="true"></span>
  </div>