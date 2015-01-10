(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback, errBack){
      try{
        var i = 0;
        var l = modulesAr.length;
        var args = [];
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    };
    defineFun = function(requireAr, callback){
      requireFun(requireAr, function(){
        module.exports = callback.apply(callback, arguments);
      });
    };
    
  }else if (typeof define == "function" && define.amd){ // AMD
    var _define = define;
    requireFun = require;
    
    defineFun = function(par1, par2){
      if (par1 instanceof Array){
        par1.unshift("require");
      }else{
        par2 = par1;
        par1 = ["require"];
      };
      _define(par1, function(){
        requireFun = arguments[0];
        var args = [];
        for (var i = 1; i < arguments.length; ++i){
          args.push(arguments[i]);
        };
        return par2.apply(par2, args);
      });
    };
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  defineFun(["promiseland"], function(promiseland){
var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
var __requireFun = function(parModule){
      var returnPromise = new __Promise();
      try{__require([parModule], function(m){
        if (promiseland.isPromiseLandPromisingModule(m)){
          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
        }else{
          returnPromise.resolve(m);
        };
        }, function(err){ returnPromise.reject(err); });
      }catch(e){ returnPromise.reject(e); };
      return returnPromise.promise;};
    var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "120e06c54cdf04aabe8fa91a75678f0e" })){ return promiseland._getModule("120e06c54cdf04aabe8fa91a75678f0e"); };
var PL$8/*console*/;try{PL$8/*console*/ = console;}catch(e){};
var PL$14/*__dirname*/;try{PL$14/*__dirname*/ = __dirname;}catch(e){};
var PL$25/*Callback*/;try{PL$25/*Callback*/ = Callback;}catch(e){};
var PL$1 = (function(){
"use strict";

  ;
  var PL$2/*cp*/;
  (function(){
  if (!promiseland.profileHas("server")){
  var p = new __Promise();
p.reject({id: 14, msg: "function does not execute in this frame."});
return p;
};
var PL$3 = new __Promise();
var PL$5 = function(code){ return function(res){ try{code(res);}catch(e){ PL$3.reject(e); }; }; };
var PL$6 = function(e){ PL$3.reject(e); };
PL$5(function(){
  
    ;
    __requireFun("../createProcess").then(PL$5(function(PL$7){PL$2/*cp*/ = PL$7;
    PL$3.resolve(); return;}), PL$6);
;})();
return PL$3;
})();
  PL$8/*console*/["log"]("loaded");
  var PL$9/*runTests*/ = ((function(f){
promiseland.registerRemote("server", "120e06c54cdf04aabe8fa91a75678f0e", "PL$28", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("120e06c54cdf04aabe8fa91a75678f0e", "PL$28", arguments);
}
};
})(function(){
  var PL$10 = new __Promise();
var PL$12 = function(code){ return function(res){ try{code(res);}catch(e){ PL$10.reject(e); }; }; };
var PL$13 = function(e){ PL$10.reject(e); };
var PL$23/*ts*/;
var PL$24/*cb*/;
PL$12(function(){
  
    ;
    PL$8/*console*/["log"]("running tests");
    PL$8/*console*/["log"]("copy promiseland");
    PL$2/*cp*/("cp", [(PL$14/*__dirname*/ + "/../../../promiseland/promiseland.js"), (PL$14/*__dirname*/ + "/../node_modules/promiseland/")])["result"].then(PL$12(function(PL$15){PL$8/*console*/["log"](PL$15);
    PL$2/*cp*/("cp", [(PL$14/*__dirname*/ + "/../../../promiseland/package.json"), (PL$14/*__dirname*/ + "/../node_modules/promiseland/")])["result"].then(PL$12(function(PL$16){PL$8/*console*/["log"](PL$16);
    PL$2/*cp*/("cp", [(PL$14/*__dirname*/ + "/../../../promiseland/modules"), (PL$14/*__dirname*/ + "/../node_modules/promiseland/"), "-R"])["result"].then(PL$12(function(PL$17){PL$8/*console*/["log"](PL$17);
    PL$8/*console*/["log"]("running compileall");
    PL$2/*cp*/("node", ["compileAll.js"])["result"].then(PL$12(function(PL$18){PL$8/*console*/["log"](PL$18);
    PL$8/*console*/["log"]("starting tests");
    var PL$19 = new __Promise();
var PL$20 = new __Promise();
var PL$21/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$20.resolve(e); }; }; };
var PL$22 = function(e){ PL$20.resolve(e); };
PL$21/*try catch*/(function(){
      PL$23/*ts*/ = PL$2/*cp*/("./testServer", [], {"fork": true});
      PL$24/*cb*/ = new PL$25/*Callback*/();
      PL$23/*ts*/["child"]["on"]("message", PL$24/*cb*/);
      PL$24/*cb*/["promise"].then(PL$21/*try catch*/(function(PL$26){PL$10.resolve(PL$26[0]); return;
      PL$19.resolve();}), PL$22);
;})();
PL$20.then(PL$12(function(PL$27/*e*/){
      PL$8/*console*/["log"]("error");
      PL$8/*console*/["log"](PL$27/*e*/);
      PL$10.resolve({"failed": true}); return;
      PL$19.resolve();;}));
PL$19.then(PL$12(function(){;
    ;
    PL$10.resolve(); return;}), PL$13)}), PL$13);
;}), PL$13);
;}), PL$13);
;}), PL$13);
;})();
return PL$10;
}));
  return {"runTests": PL$9/*runTests*/};
  ;})();
;return PL$1;
});
})();