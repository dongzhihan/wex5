define(function(require){
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