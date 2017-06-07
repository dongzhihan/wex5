window.__justep.__ResourceEngine.loadCss([{url: '/v_84e56ff8c8324aee95dd0398ca222d4al_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_3a99d2e164e7401a8106081eb98fd4f0l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_2f2463d267fb41639bfc5b8673a9bacbl_zh_CNs_d_m/system/core.min.js','/v_2f1fe4a8762c4c8688ba0eed9f64937el_zh_CNs_d_m/system/common.min.js','/v_e524c1986a3045c9b6ed0b769a51d41dl_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/wms_client_v8/problemSolve/select');
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cuUJFfa';
	this._flag_='a287aa2a407952fedac7c954545b1b55';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"amount":{"define":"amount","label":"数量","name":"amount","relation":"amount","rules":{"integer":true},"type":"Integer"},"clientName":{"define":"clientName","label":"客户","name":"clientName","relation":"clientName","type":"String"},"inventoryState":{"define":"inventoryState","label":"状态","name":"inventoryState","relation":"inventoryState","type":"String"},"itemDataName":{"define":"itemDataName","label":"商品名称","name":"itemDataName","relation":"itemDataName","type":"String"}},"directDelete":false,"events":{},"idColumn":"goodsName","limit":20,"xid":"rqDes"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"amount":{"define":"amount","label":"数量","name":"amount","relation":"amount","rules":{"integer":true},"type":"Integer"},"clientName":{"define":"clientName","label":"客户","name":"clientName","relation":"clientName","type":"String"},"inventoryState":{"define":"inventoryState","label":"状态","name":"inventoryState","relation":"inventoryState","type":"String"},"storageLocationName":{"define":"storageLocationName","label":"位置","name":"storageLocationName","relation":"storageLocationName","type":"String"}},"directDelete":false,"events":{},"limit":20,"xid":"proDes"});
}}); 
return __result;});
