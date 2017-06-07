define(function(require){
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
	this.__cid='cfEnIni';
	this._flag_='3626ea6ce86c1cef10edacf874ec493d';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"amount":{"define":"amount","label":"数量","name":"amount","relation":"amount","rules":{"integer":true},"type":"Integer"},"clientName":{"define":"clientName","label":"客户","name":"clientName","relation":"clientName","type":"String"},"inventoryState":{"define":"inventoryState","label":"状态","name":"inventoryState","relation":"inventoryState","type":"String"},"itemDataName":{"define":"itemDataName","label":"商品名称","name":"itemDataName","relation":"itemDataName","type":"String"}},"directDelete":false,"events":{},"idColumn":"goodsName","limit":20,"xid":"rqDes"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"amount":{"define":"amount","label":"数量","name":"amount","relation":"amount","rules":{"integer":true},"type":"Integer"},"clientName":{"define":"clientName","label":"客户","name":"clientName","relation":"clientName","type":"String"},"inventoryState":{"define":"inventoryState","label":"状态","name":"inventoryState","relation":"inventoryState","type":"String"},"storageLocationName":{"define":"storageLocationName","label":"位置","name":"storageLocationName","relation":"storageLocationName","type":"String"}},"directDelete":false,"events":{},"limit":20,"xid":"proDes"});
}}); 
return __result;});