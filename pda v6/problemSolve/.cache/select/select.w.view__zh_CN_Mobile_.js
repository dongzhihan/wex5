window.__justep.__ResourceEngine.loadCss([{url: '/v_4f01ab460ffe4e799213bae0a8c4aa58l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_19d9073044f1433e850c507bcaa94b3fl_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_93f912a03f924990bdc16a1b9cb83856l_zh_CNs_d_m/system/core.min.js','/v_fefd69d1ec9b4dd28414e9b933ef344bl_zh_CNs_d_m/system/common.min.js','/v_c800f797abbc41cb995bdbd7ea9ab200l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/truk/problemSolve/select'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cuUJFfa';
	this._flag_='a287aa2a407952fedac7c954545b1b55';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"customer":{"define":"customer","label":"客户","name":"customer","relation":"customer","type":"String"},"goodsName":{"define":"goodsName","label":"商品名称","name":"goodsName","relation":"goodsName","type":"String"},"num":{"define":"num","label":"数量","name":"num","relation":"num","rules":{"integer":true},"type":"Integer"},"state":{"define":"state","label":"状态","name":"state","relation":"state","type":"String"}},"directDelete":false,"events":{},"idColumn":"goodsName","limit":20,"xid":"rqDes"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"customer":{"define":"customer","label":"客户","name":"customer","relation":"customer","type":"String"},"num":{"define":"num","label":"数量","name":"num","relation":"num","rules":{"integer":true},"type":"Integer"},"seat":{"define":"seat","label":"位置","name":"seat","relation":"seat","type":"String"},"state":{"define":"state","label":"状态","name":"state","relation":"state","type":"String"}},"directDelete":false,"events":{},"limit":20,"xid":"proDes"});
}}); 
return __result;});
