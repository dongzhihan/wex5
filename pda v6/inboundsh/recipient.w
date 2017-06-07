<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"
    onLoad="modelLoad" onModelConstructDone="modelModelConstructDone" onActive="modelActive"
    onParamsReceive="modelParamsReceive"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="false"
      xid="datacar" onCustomRefresh="datacarCustomRefresh" isTree="true" limit="-1"
      confirmRefresh="true"> 
      <treeOption xid="default1" parentRelation="container" delayLoad="false"/>  
      <column label="name" name="name" type="String" xid="default2"/>  
      <column label="container" name="container" type="String" xid="default3"/>  
      <column label="id" name="id" type="String" xid="default4"/> 
    </div>  
    <div component="$UI/system/components/justep/data/data" xid="dataItem"
      idColumn="name">
      <column label="name" name="name" type="String" xid="xid1"/>
    </div>
  </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1" bind-click="panel1Click"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="标题"
        class="x-titlebar" style="box-shadow:0rem 0.1rem 0.1rem #8b8b8b;background-image:url(../img/btn3.png);"> 
        <div class="x-titlebar-left" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"
          xid="left1"> 
          <a component="$UI/system/components/justep/button/button" id="sgsp"
            label="H手动满筐" xid="mkbtn" bind-keypress="button1Keypress" onClick="button1Click"
            class="btn btn-default btnsty" style="font-size:0.4rem;"> 
            <i xid="i1"/>  
            <span xid="span1">H手动满筐</span>
          </a>  
          <a component="$UI/system/components/justep/button/button" class="btn btn-default btnstygray"
            xid="automkbtn" label="A自动满筐" onClick="button2Click" id="btnshow" style="font-size:0.4rem;"> 
            <i xid="i2"/>  
            <span xid="span2">A自动满筐</span>
          </a> 
        </div>
        <div class="x-titlebar-right reverse"> 
          <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-only-label"
            xid="back" style="background: linear-gradient(#5C81CA,#2F62BB );margin-left:5px;font-size:0.4rem;text-align:center;border:none;"
            label="E退出" onClick="" bind-click="backClick"> 
            <i xid="i3"/>  
            <span xid="span3">E退出</span>
          </a>  
          <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-only-label"
            xid="mk1btn" style="background: linear-gradient(#5C81CA,#2F62BB );margin-left:5px;font-size:0.4rem;text-align:center;border:none;"
            label="F满筐" onClick="mk1btnClick"> 
            <i xid="i3"/>  
            <span xid="span3">F满筐</span>
          </a> 
        </div>
      </div> 
    </div>  
    <div class="x-panel-content" xid="content1">
    <input component="$UI/system/components/justep/input/input" class="form-control"
        xid="scanrecipient" bind-keydown="scanrecipientKeydown" style="opacity:0;height:0.6rem"/>
      <label xid="label2" style="text-align:center;font-family:微软雅黑;clip:rect(20px auto auto auto);margin-top:-0.3rem;width:100%;font-weight:normal;font-size:0.65rem;color:#000000;"
        dir="rtl" bind-text="opt">请扫描工作站</label>  
      <div xid="maindiv" style="display:none;">
        <div component="$UI/system/components/justep/row/row" class="x-row"
          xid="row3"> 
          <div class="x-col" xid="col7">
            <span xid="span6" style="font-family:微软雅黑;font-weight:bold;font-size:0.55rem;color:#000000;"><![CDATA[收货单号码：]]></span>
            <span xid="span13" bind-text="textid" style="font-size:0.5rem;font-family:微软雅黑;color:#0033CC;font-weight:bold;"/>
          </div> 
        </div>  
        <div component="$UI/system/components/justep/row/row" class="x-row"
          xid="row4"> 
          <div class="x-col" xid="col2"> 
            <span class="type" xid="span14" bind-text="fID" style="font-weight:bold;font-family:微软雅黑;"/>  
            <span xid="span16" bind-text="fContent" style="margin-top:0.2rem;font-family:微软雅黑;"
              class="righttext"/>
          </div> 
        </div>  
        <div component="$UI/system/components/justep/row/row" class="x-row"
          xid="row4"> 
          <span xid="span15" class="text" bind-text="fTitle" style="font-size:0.5rem;font-family:微软雅黑;font-weight:bold;"/>
        </div> 
      </div>
      <div xid="iptcar" style="font-weight:bold;font-family:微软雅黑;display:none;"> 
        <div component="$UI/system/components/justep/row/row" class="x-row"
          xid="row1"> 
          <div class="x-col" xid="col1">
            <span xid="span4" style="width:3rem;display:inline-block;font-weight:bold;font-size:0.5rem;font-family:微软雅黑;"
              class="carnumber"><![CDATA[目的地ID：]]></span>
            <input component="$UI/system/components/justep/input/input" xid="ipt1"
              bind-keydown="ipt1Keydown" style="font-weight:bold;font-size:0.5rem;font-family:微软雅黑;text-align:center;"
              class="iptcar"/> 
          </div> 
        </div>
        <div component="$UI/system/components/justep/row/row" class="x-row"
          xid="row2"> 
          <div class="x-col" xid="col6">
            <span xid="span5" style="font-size:0.5rem;display:inline-block;width:3rem;font-weight:bold;font-family:微软雅黑;"><![CDATA[车牌号码  :  ]]></span>
            <input component="$UI/system/components/justep/input/input" xid="input3"
              bind-keydown="input3Keydown" style="font-weight:bold;font-size:0.5rem;font-family:微软雅黑;text-align:center;"
              class="iptcar"/>
          </div>
        </div> 
      </div>
          <div xid="dateCon" style="display:none;background:linear-gradient(#F18D59,#E26B1A);box-shadow:0rem 0.1rem 0.1rem #8b8b8b"> 
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="dateRow1"
        style=""> 
        <div class="x-col" xid="col54"> 
          <span xid="pd" class="dateDes">生产日期：
            <span xid="productionDate" bind-text="productionDate"/> 
          </span> 
        </div> 
      </div>  
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="dateRow2"
        style=""> 
        <div class="x-col" xid="col55"> 
          <span xid="lot" class="dateDes">到期日期：
            <span xid="expirationDate" bind-text="expirationDate"/> 
          </span> 
        </div> 
      </div>  
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="dateRow3"
        style=""> 
        <div class="x-col" xid="col56"> 
          <span xid="exp" class="dateDes">有 效 期 ：
            <span xid="expiryDateOut" bind-text="expiryDateOut"/> 
          </span> 
        </div> 
      </div> 
    </div>  
    <div xid="opationCon" style="display:none"> 
      <a component="$UI/system/components/justep/button/button" class="btn btn-default btnOpation"
        xid="btnPd" bind-click="btnPdClick"> 
        <i xid="i4"/>  
        <span xid="span8">1按生产日期修改</span> 
      </a>  
      <a component="$UI/system/components/justep/button/button" class="btn btn-default btnOpation"
        xid="btnLot" bind-click="btnLotClick"> 
        <i xid="i7"/>  
        <span xid="span9">2按到期日期修改</span> 
      </a> 
    </div>  
    <div xid="dateInCon" style="display:none"> 
      <div component="$UI/system/components/justep/row/row" class="x-row dateIn"
        xid="dateInRow1"> 
        <div class="x-col" xid="col3" style="width:80%"> 
          <span xid="year" bind-text="yearlab"/> 
        </div>  
        <div class="x-col" xid="col4"> 
          <input component="$UI/system/components/justep/input/input" class="form-control"
            xid="yearIn" style="height:0.8rem;text-align:center" bind-keydown="yearInKeydown"/> 
        </div> 
      </div>  
      <div component="$UI/system/components/justep/row/row" class="x-row dateIn"
        xid="dateInRow2"> 
        <div class="x-col" xid="col9" style="width:80%"> 
          <span xid="monthlab" bind-text="monthlab"/> 
        </div>  
        <div class="x-col" xid="col10"> 
          <input component="$UI/system/components/justep/input/input" class="form-control"
            xid="monthIn" style="height:0.8rem;text-align:center" bind-keydown="monthInKeydown"/> 
        </div> 
      </div>  
      <div component="$UI/system/components/justep/row/row" class="x-row dateIn"
        xid="dateInRow3"> 
        <div class="x-col" xid="col6" style="width:80%"> 
          <span xid="daylab" bind-text="daylab"/> 
        </div>  
        <div class="x-col" xid="co07"> 
          <input component="$UI/system/components/justep/input/input" class="form-control"
            xid="dayIn" style="height:0.8rem;text-align:center" bind-keydown="dayInKeydown"/> 
        </div> 
      </div>  
      <div component="$UI/system/components/justep/row/row" class="x-row dateIn"
        xid="dateInRow4"> 
        <div class="x-col" xid="col99" style="width:80%"> 
          <span xid="expiryDate" bind-text="expiryDatelab"/> 
        </div>  
        <div class="x-col" xid="col17"> 
          <input component="$UI/system/components/justep/input/input" class="form-control"
            xid="expiryDateIn" style="height:0.8rem;text-align:center" bind-keydown="expiryDateInKeydown"/> 
        </div> 
      </div> 
    </div>  
    <div xid="okCon" style="width:100%;display:none"> 
      <div style="width:6rem;text-align:center;margin:0 auto"> 
        <a component="$UI/system/components/justep/button/button" class="btn btn-default btnOpation btnOk"
          xid="confirm" bind-click="confirmClick"> 
          <i xid="i6"/>  
          <span xid="span11">确定</span> 
        </a>  
        <a component="$UI/system/components/justep/button/button" class="btn btn-default btnOpation btnOk"
          xid="cancel" bind-click="cancelClick"> 
          <i xid="i7"/>  
          <span xid="span12">取消</span> 
        </a> 
      </div> 
    </div>  
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="qtyipt"
        style="display:none;"> 
        <div class="x-col" xid="col12">
          <a component="$UI/system/components/justep/button/button" label="输入数量"
            xid="inputqty" style="background: linear-gradient(#5C81CA,#2F62BB );margin-left:5px;font-size:0.6rem;text-align:center;border:none;"
            bind-keypress="button1Keypress" class="btn btn-default" bind-click="button5Click"> 
            <i xid="i5"/>  
            <span xid="span18">输入数量</span>
          </a>
        </div>
      </div>
      <div id="messaged" xid="div1" class="waring1" align="center" style="text-align:center;margin-top: 0.3rem;padding:20px 10px 20px 10px;font-family:微软雅黑;font-size:0.5rem;font-weight:bold;display:none;color:#000000;"
        dir="ltr"/>  
      <div xid="Hmk" style="display:none;">
        <div component="$UI/system/components/justep/row/row" class="x-row"
          xid="row11"> 
          <div class="x-col" xid="col28"> 
            <span xid="span28" style="font-family:微软雅黑;font-weight:bold;font-size:0.6rem;color:#000000;"><![CDATA[已满车牌：]]></span>  
            <span xid="span29" style="color:#007FEE;font-size:0.6rem;font-weight:bold;"><![CDATA[toOB0000001]]></span>
          </div> 
        </div>
      </div>
      <div xid="number" style="display:none;line-height:1rem">
        <div component="$UI/system/components/justep/row/row" class="x-row"
          xid="row8" style="display:inline-block;"> 
          <div class="x-col" xid="col19" style="display:inline-block;width:3.6rem;">
            <span xid="span20" style="font-family:微软雅黑;font-weight:bold;font-size:0.55rem;color:#000000;"><![CDATA[总数量：]]></span>
          </div>  
          <div class="x-col" xid="col20" style="display:inline-block;width:2.8rem;">
            <span xid="span21" style="background:linear-gradient(#7EB75D, #62A336);font-size:0.8rem;font-weight:bold;padding-right:0.5rem;padding-left:0.5rem;font-family:微软雅黑;vertical-align:top;color:#FFFFFF;"
              bind-text="numbercut"><![CDATA[]]></span>
          </div>  
          <div class="x-col" xid="col21" style="display:inline-block;width:2rem;margin-left:0.6rem;">
            <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-only-label"
              xid="button7" style="background:linear-gradient(#5C81CA,#2F62BB );margin-left:5px;font-size:0.4rem;text-align:center;border:none;font-family:微软雅黑;vertical-align:top;padding:0.25rem 0.35rem 0.25rem 0.35rem;"
              label="修改"  onClick="button7Click"> 
              <i xid="i7"/>  
              <span xid="span23">修改</span>
            </a>
          </div>
        </div>  
        <div component="$UI/system/components/justep/row/row" class="x-row"
          xid="row10" style="display:inline-block;"> 
          <div class="x-col" xid="col27" style="display:inline-block;width:3.6rem;vertical-align:top;"> 
            <span xid="span26" style="font-family:微软雅黑;font-weight:bold;font-size:0.55rem;color:#000000;"><![CDATA[车牌号：]]></span>
          </div>  
          <div class="x-col" xid="col26" style="display:inline-block;width:5.5rem;"> 
            <input component="$UI/system/components/justep/input/input" class="form-control"
              xid="input5" readonly="true" dataType="String" bind-value="cartextid"
              style="font-family:微软雅黑;"/>
          </div> 
        </div>
      </div>  
      <div component="$UI/system/components/justep/list/list" class="x-list"
        xid="carlist" data="datacar" autoLoad="true" style="display:none;position:absolute;bottom:0px;width:100%;"> 
        <ul class="x-list-template" xid="listTemplateUl1"> 
          <li xid="li1" style="background-color:#92D050;color:#000000;border-color:#0070C0;font-size:0.6rem;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;font-family:微软雅黑;"
            bind-click="li1Click"> 
            <span xid="span8">
              <span bind-text="row.receivingDestination.name"/>-
              <span bind-text="row.container.name"/>
            </span> 
          </li> 
        </ul> 
      </div>  
 
      <div xid="errorCon" class="errorCon"> 
        <span xid="errorMsg"/> 
      </div> 
    </div> 
  </div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1"
    onReceive="windowDialog1Receive" status="normal" top="10%" height="70%" width="95%"
    routable="false" resizable="false"/>
</div>
