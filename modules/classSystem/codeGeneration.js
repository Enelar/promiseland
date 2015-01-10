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
  defineFun([], function(){
var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;

if (promiseland._hasModule({ hashStr: "822af854b026498da931a8af7a988cd9" })){ return promiseland._getModule("822af854b026498da931a8af7a988cd9"); };
var PL$3/*extra*/;try{PL$3/*extra*/ = extra;}catch(e){};
var PL$1 = (function(){
"use strict";

  ;
  ;
  var PL$2/*errorMsg*/ = PL$3/*extra*/["errorMsg"];
  return (function(PL$4/*classSystem*/, PL$5/*internals*/){
  var PL$17/*MAKRO_SELF*/;
var PL$18/*MAKRO_PROPERTYVALUE*/;
var PL$21/*MAKRO_VALUE*/;
var PL$37/*MAKRO_LEFT*/;
var PL$20/*MAKRO_OPERATOR*/;
var PL$38/*MAKRO_RIGHT*/;
var PL$30/*MAKRO_CONSTRUCTOR*/;
var PL$16/*assembleCode*/;

    ;
    var PL$6/*cs*/ = PL$4/*classSystem*/;
    var PL$7/*classHider*/ = PL$5/*internals*/["classHider"];
    var PL$8/*getClass*/ = PL$5/*internals*/["getClass"];
    var PL$9/*TrackedPromise*/ = PL$5/*internals*/["TrackedPromise"];
    var PL$10/*DynInstance*/ = PL$5/*internals*/["DynInstance"];
    var PL$11/*stringEncodeStr*/ = PL$5/*internals*/["stringEncodeStr"];
    var PL$12/*runtimeError*/ = (function(PL$13/*par*/, PL$14/*par2*/){
    
      ;
      if((PL$14/*par2*/ && PL$14/*par2*/["errorFun"])){
        PL$14/*par2*/["errorFun"](PL$13/*par*/);
      };
      ;
      return (((("(function(){ throw { id:" + PL$13/*par*/["id"]) + ", msg: ") + PL$11/*stringEncodeStr*/(PL$13/*par*/["msg"])) + " } })()");
      ;});
    PL$5/*internals*/["runtimeError"] = PL$12/*runtimeError*/;
    PL$6/*cs*/["getGetPropertyCode"] = (function(PL$13/*par*/){
    
      ;
      var PL$15/*cDef*/ = PL$8/*getClass*/(PL$13/*par*/["type"]);
      if(PL$15/*cDef*/["isVar"]){
        if((PL$13/*par*/["asmMode"] && ! PL$13/*par*/["propertyValue"])){
          return PL$16/*assembleCode*/([PL$17/*MAKRO_SELF*/, ".", PL$13/*par*/["property"]], PL$13/*par*/);
        };
        ;
        return PL$16/*assembleCode*/([PL$17/*MAKRO_SELF*/, "[", PL$18/*MAKRO_PROPERTYVALUE*/, "]"], PL$13/*par*/);
      };
      ;
      var PL$19/*map*/ = PL$15/*cDef*/["map"];
      if(PL$13/*par*/["property"]){
        if(PL$19/*map*/["members"][PL$13/*par*/["property"]]){
          return PL$16/*assembleCode*/(PL$19/*map*/["members"][PL$13/*par*/["property"]]["getCode"], PL$13/*par*/);
        };
        ;
      };
      ;
      if(PL$19/*map*/["getMemberCode"]){
        return PL$16/*assembleCode*/(PL$19/*map*/["getMemberCode"], PL$13/*par*/);
      };
      ;
      return PL$12/*runtimeError*/(PL$2/*errorMsg*/["accessNotAllowd"], PL$13/*par*/);
      ;});
    PL$6/*cs*/["getSetPropertyCode"] = (function(PL$13/*par*/){
    
      ;
      var PL$15/*cDef*/ = PL$8/*getClass*/(PL$13/*par*/["type"]);
      if(PL$15/*cDef*/["isVar"]){
        if(! this["canSet"](this["getBuiltinType"]("var"), PL$13/*par*/["valueType"])){
          return PL$12/*runtimeError*/(PL$2/*errorMsg*/["typeMissmatch"], PL$13/*par*/);
        };
        ;
        return PL$16/*assembleCode*/([PL$17/*MAKRO_SELF*/, "[", PL$18/*MAKRO_PROPERTYVALUE*/, "] ", PL$20/*MAKRO_OPERATOR*/, " ", PL$21/*MAKRO_VALUE*/], PL$13/*par*/);
      };
      ;
      var PL$19/*map*/ = PL$15/*cDef*/["map"];
      if((PL$19/*map*/ && PL$13/*par*/["property"])){
        if(PL$19/*map*/["members"][PL$13/*par*/["property"]]){
          var PL$22/*propertyType*/ = this["getPropertyType"]({"type": PL$13/*par*/["type"],
"property": PL$13/*par*/["property"]});
          if(! this["canSet"](PL$22/*propertyType*/, PL$13/*par*/["valueType"])){
            if(this["canSet"](PL$22/*propertyType*/, this["getClassFromTemporaryTracked"](PL$13/*par*/["valueType"]))){
              return PL$16/*assembleCode*/(PL$19/*map*/["members"][PL$13/*par*/["property"]]["setCodeFromTemporary"], PL$13/*par*/);
            };
            ;
            return PL$12/*runtimeError*/(PL$2/*errorMsg*/["typeMissmatch"], PL$13/*par*/);
          };
          ;
          return PL$16/*assembleCode*/(PL$19/*map*/["members"][PL$13/*par*/["property"]]["setCode"], PL$13/*par*/);
        };
        ;
      };
      ;
      if((PL$19/*map*/ && PL$19/*map*/["setMemberCode"])){
        if(! this["canSet"](this["getBuiltinType"]("var"), PL$13/*par*/["valueType"])){
          return PL$12/*runtimeError*/(PL$2/*errorMsg*/["typeMissmatch"], PL$13/*par*/);
        };
        ;
        return PL$16/*assembleCode*/(PL$19/*map*/["setMemberCode"], PL$13/*par*/);
      };
      ;
      return PL$12/*runtimeError*/(PL$2/*errorMsg*/["accessNotAllowd"], PL$13/*par*/);
      ;});
    PL$6/*cs*/["getConnectCode"] = (function(PL$13/*par*/){
    
      ;
      var PL$15/*cDef*/ = PL$8/*getClass*/(PL$13/*par*/["type"]);
      var PL$19/*map*/ = PL$15/*cDef*/["map"];
      if(PL$13/*par*/["valueProperty"]){
        var PL$23/*valuePropertyType*/ = this["getPropertyType"]({"type": PL$13/*par*/["valueType"],
"property": PL$13/*par*/["valueProperty"]});
        if(! this["canConnect"](PL$13/*par*/["type"], PL$13/*par*/["property"], PL$23/*valuePropertyType*/)){
          return PL$12/*runtimeError*/(PL$2/*errorMsg*/["connectNotPossible"], PL$13/*par*/);
        };
        ;
        PL$13/*par*/["valueProperty"] = ("" + this["getPropertyAlias"]({"type": PL$13/*par*/["valueType"],
"property": PL$13/*par*/["valueProperty"]}));
        return PL$16/*assembleCode*/(PL$19/*map*/["members"][PL$13/*par*/["property"]]["connectSlotCode"], PL$13/*par*/);
      }else{
      if(! this["canConnect"](PL$13/*par*/["type"], PL$13/*par*/["property"], PL$13/*par*/["valueType"])){
        return PL$12/*runtimeError*/(PL$2/*errorMsg*/["connectNotPossible"], PL$13/*par*/);
      };
      ;
      return PL$16/*assembleCode*/(PL$19/*map*/["members"][PL$13/*par*/["property"]]["connectFunCode"], PL$13/*par*/);
      };
      ;
      return PL$12/*runtimeError*/(PL$2/*errorMsg*/["connectNotPossible"], PL$13/*par*/);
      ;});
    PL$6/*cs*/["getPassAsTypeCode"] = (function(PL$13/*par*/){
    
      ;
      var PL$15/*cDef*/ = PL$8/*getClass*/(PL$13/*par*/["type"]);
      var PL$24/*vcDef*/ = PL$8/*getClass*/(PL$13/*par*/["valueType"]);
      if(PL$13/*par*/["value"]){
        if(! this["canSet"](PL$13/*par*/["type"], PL$13/*par*/["valueType"])){
          return PL$12/*runtimeError*/(PL$2/*errorMsg*/["typeMissmatch"], PL$13/*par*/);
        };
        ;
        if(this["isTemporaryTrackedClass"](PL$13/*par*/["type"])){
          return this["getCreateTemporaryClassCode"](PL$13/*par*/);
        };
        ;
        return PL$16/*assembleCode*/([PL$21/*MAKRO_VALUE*/], PL$13/*par*/);
      };
      ;
      return PL$12/*runtimeError*/(PL$2/*errorMsg*/["missingVariable"], PL$13/*par*/);
      ;});
    PL$6/*cs*/["getCreateTemporaryClassCode"] = (function(PL$13/*par*/){
    
      ;
      if(this["isTemporaryTrackedClass"](PL$13/*par*/["valueType"])){
        return PL$16/*assembleCode*/([PL$21/*MAKRO_VALUE*/], PL$13/*par*/);
      };
      ;
      if(! this["isTrackedClass"](PL$13/*par*/["valueType"])){
        return PL$16/*assembleCode*/([PL$21/*MAKRO_VALUE*/], PL$13/*par*/);
      };
      ;
      var PL$15/*cDef*/ = PL$8/*getClass*/(PL$13/*par*/["valueType"]);
      var PL$25/*codeAr*/ = [(("(function(v){ if(!v){ return; }; return [v, v[" + PL$15/*cDef*/["map"]["trackRootIdx"]) + "]()];})("), PL$21/*MAKRO_VALUE*/, ")"];
      return PL$16/*assembleCode*/(PL$25/*codeAr*/, PL$13/*par*/);
      ;});
    PL$6/*cs*/["getDestroyTemporaryClassCode"] = (function(PL$13/*par*/){
    
      ;
      if(! this["isTemporaryTrackedClass"](PL$13/*par*/["valueType"])){
        if(PL$13/*par*/["noValueRequired"]){
          return PL$16/*assembleCode*/([], PL$13/*par*/);
        };
        ;
        return PL$16/*assembleCode*/([PL$21/*MAKRO_VALUE*/], PL$13/*par*/);
      };
      ;
      var PL$25/*codeAr*/ = ["(function(v){ v[1](); return v[0]; })(", PL$21/*MAKRO_VALUE*/, ")"];
      return PL$16/*assembleCode*/(PL$25/*codeAr*/, PL$13/*par*/);
      ;});
    PL$6/*cs*/["dereferencePromisePreCode"] = (function(PL$13/*par*/){
    
      ;
      var PL$25/*codeAr*/ = [PL$21/*MAKRO_VALUE*/, ".then("];
      if(this["isTemporaryTrackedClass"](PL$13/*par*/["valueType"])){
        PL$25/*codeAr*/ = ["/*temptracked promise*/(function(vAr){\nvar r = vAr[0].thenReuse(vAr[1], "];
      };
      ;
      return PL$16/*assembleCode*/(PL$25/*codeAr*/, PL$13/*par*/);
      ;});
    PL$6/*cs*/["dereferencePromisePostCode"] = (function(PL$13/*par*/){
    
      ;
      var PL$25/*codeAr*/ = [");\n"];
      if(this["isTemporaryTrackedClass"](PL$13/*par*/["valueType"])){
        PL$25/*codeAr*/ = [");\nreturn r;\n})(", PL$21/*MAKRO_VALUE*/, ");/*temptracked promise end*/\n"];
      };
      ;
      return PL$16/*assembleCode*/(PL$25/*codeAr*/, PL$13/*par*/);
      ;});
    PL$6/*cs*/["promisingReturnTypeCheck"] = (function(PL$13/*par*/){
    
      ;
      if(! this["isPromiseOfClass"](PL$13/*par*/["type"])){
        return PL$12/*runtimeError*/(PL$2/*errorMsg*/["notAPromise"], PL$13/*par*/);
      };
      ;
      return PL$16/*assembleCode*/([], PL$13/*par*/);
      ;});
    PL$6/*cs*/["getSetVariableCode"] = (function(PL$13/*par*/){
    
      ;
      var PL$15/*cDef*/ = PL$8/*getClass*/(PL$13/*par*/["type"]);
      var PL$24/*vcDef*/ = PL$8/*getClass*/(PL$13/*par*/["valueType"]);
      if(PL$13/*par*/["instance"]){
        var PL$26/*operator*/ = (PL$13/*par*/["operator"] || "=");
        if((PL$26/*operator*/ != "=")){
          if(! (PL$15/*cDef*/["isVar"] && PL$24/*vcDef*/["isVar"])){
            return PL$12/*runtimeError*/(PL$2/*errorMsg*/["operatorMissmatch"], PL$13/*par*/);
          };
          ;
        };
        ;
        if(! this["canSet"](PL$13/*par*/["type"], PL$13/*par*/["valueType"])){
          if(this["canSet"](PL$13/*par*/["type"], this["getClassFromTemporaryTracked"](PL$13/*par*/["valueType"]))){
            if((PL$13/*par*/["assignmentType"] == "Identifier")){
              return PL$16/*assembleCode*/(["/*temp tracked assign*/(function(vAr){\n", "if (_T", PL$17/*MAKRO_SELF*/, "){ _T", PL$17/*MAKRO_SELF*/, "(); };\n", "if(vAr){\nvar v = vAr[0];\n", PL$17/*MAKRO_SELF*/, " ", PL$26/*operator*/, " v;\n", "_T", PL$17/*MAKRO_SELF*/, " = vAr[1];\n", "return v;\n}else{\n", PL$17/*MAKRO_SELF*/, " ", PL$26/*operator*/, " undefined; ", "_T", PL$17/*MAKRO_SELF*/, " = undefined;\n", "return;\n}; })", "(", PL$21/*MAKRO_VALUE*/, ")/*end temp assign*/\n"], PL$13/*par*/);
            };
            ;
          };
          ;
          return PL$12/*runtimeError*/(PL$2/*errorMsg*/["typeMissmatch"], PL$13/*par*/);
        };
        ;
        if(this["isTrackedClass"](PL$13/*par*/["type"])){
          if((PL$13/*par*/["assignmentType"] == "Identifier")){
            return PL$16/*assembleCode*/(["/*tracked assign*/(function(v){\n", "if (_T", PL$17/*MAKRO_SELF*/, "){ _T", PL$17/*MAKRO_SELF*/, "(); };\n", PL$17/*MAKRO_SELF*/, " ", PL$26/*operator*/, " v;\n", "if (v){\n", "_T", PL$17/*MAKRO_SELF*/, ((" = v[" + PL$24/*vcDef*/["map"]["trackRootIdx"]) + "]();\n"), "}else{\n", "_T", PL$17/*MAKRO_SELF*/, " = undefined;\n", "};\n", "return v;\n", "})", "(", PL$21/*MAKRO_VALUE*/, ")/*end assign*/\n"], PL$13/*par*/);
          };
          ;
          return PL$12/*runtimeError*/(PL$2/*errorMsg*/["typeMissmatch"], PL$13/*par*/);
        };
        ;
        return PL$16/*assembleCode*/([PL$17/*MAKRO_SELF*/, " ", PL$26/*operator*/, " ", PL$21/*MAKRO_VALUE*/], PL$13/*par*/);
      };
      ;
      return PL$12/*runtimeError*/(PL$2/*errorMsg*/["missingVariable"], PL$13/*par*/);
      ;});
    PL$6/*cs*/["declareReturnPromiseCode"] = (function(PL$13/*par*/){
    
      ;
      var PL$27/*retType*/ = PL$13/*par*/["type"];
      var PL$28/*track*/ = false;
      if(this["isTemporaryTrackedClass"](PL$27/*retType*/)){
        PL$28/*track*/ = true;
        PL$27/*retType*/ = this["getClassFromTemporaryTracked"](PL$27/*retType*/);
      };
      ;
      if(this["isTrackedClass"](PL$27/*retType*/)){
        PL$28/*track*/ = true;
      };
      ;
      var PL$29/*assemblyAr*/;
      if(PL$28/*track*/){
        PL$29/*assemblyAr*/ = ["var ", PL$13/*par*/["name"], ";\nvar _T", PL$13/*par*/["name"], ";\n(function(){ var vAr = new ", PL$30/*MAKRO_CONSTRUCTOR*/, "(); ", PL$13/*par*/["name"], " = vAr[0]; _T", PL$13/*par*/["name"], " = vAr[1]; })();"];
      }else{
      PL$29/*assemblyAr*/ = ["var ", PL$13/*par*/["name"], " = new __Promise();\n"];
      };
      ;
      return PL$16/*assembleCode*/(PL$29/*assemblyAr*/, PL$13/*par*/);
      ;});
    PL$6/*cs*/["returnReturnPromiseCode"] = (function(PL$13/*par*/){
    
      ;
      var PL$27/*retType*/ = PL$13/*par*/["type"];
      var PL$28/*track*/ = false;
      if(this["isTemporaryTrackedClass"](PL$27/*retType*/)){
        PL$28/*track*/ = true;
        PL$27/*retType*/ = this["getClassFromTemporaryTracked"](PL$27/*retType*/);
      };
      ;
      if(this["isTrackedClass"](PL$27/*retType*/)){
        PL$28/*track*/ = true;
      };
      ;
      var PL$29/*assemblyAr*/;
      if(PL$28/*track*/){
        PL$29/*assemblyAr*/ = ["return [", PL$13/*par*/["name"], ", _T", PL$13/*par*/["name"], "];\n"];
      }else{
      PL$29/*assemblyAr*/ = ["return ", PL$13/*par*/["name"], ";\n"];
      };
      ;
      return PL$16/*assembleCode*/(PL$29/*assemblyAr*/, PL$13/*par*/);
      ;});
    PL$6/*cs*/["getDeclareVariableCode"] = (function(PL$13/*par*/){
    
      ;
      var PL$15/*cDef*/ = PL$8/*getClass*/(PL$13/*par*/["type"]);
      var PL$29/*assemblyAr*/ = [];
      if(PL$13/*par*/["declaration"]){
        PL$29/*assemblyAr*/["push"]("var ");
        PL$29/*assemblyAr*/["push"](PL$13/*par*/["name"]);
        PL$29/*assemblyAr*/["push"](";\n");
      };
      ;
      if(PL$15/*cDef*/["track"]){
        PL$29/*assemblyAr*/["push"]("var _T");
        PL$29/*assemblyAr*/["push"](PL$13/*par*/["name"]);
        PL$29/*assemblyAr*/["push"](";\n");
      };
      ;
      return PL$16/*assembleCode*/(PL$29/*assemblyAr*/, PL$13/*par*/);
      ;});
    PL$6/*cs*/["getProcessParameterCode"] = (function(PL$13/*par*/){
    
      ;
      var PL$15/*cDef*/ = PL$8/*getClass*/(PL$13/*par*/["type"]);
      var PL$29/*assemblyAr*/ = [];
      if(PL$15/*cDef*/["track"]){
        PL$29/*assemblyAr*/["push"]("var _T");
        PL$29/*assemblyAr*/["push"](PL$13/*par*/["name"]);
        PL$29/*assemblyAr*/["push"](";\n");
        PL$29/*assemblyAr*/["push"]("if(");
        PL$29/*assemblyAr*/["push"](PL$13/*par*/["name"]);
        PL$29/*assemblyAr*/["push"]("){ _T");
        PL$29/*assemblyAr*/["push"](PL$13/*par*/["name"]);
        PL$29/*assemblyAr*/["push"](" = ");
        PL$29/*assemblyAr*/["push"](PL$13/*par*/["name"]);
        PL$29/*assemblyAr*/["push"]("[1];\n");
        PL$29/*assemblyAr*/["push"](PL$13/*par*/["name"]);
        PL$29/*assemblyAr*/["push"](" = ");
        PL$29/*assemblyAr*/["push"](PL$13/*par*/["name"]);
        PL$29/*assemblyAr*/["push"]("[0];}\n");
      };
      ;
      return PL$16/*assembleCode*/(PL$29/*assemblyAr*/, PL$13/*par*/);
      ;});
    PL$6/*cs*/["getDestroyVariableCode"] = (function(PL$13/*par*/){
    
      ;
      var PL$15/*cDef*/ = PL$8/*getClass*/(PL$13/*par*/["type"]);
      var PL$29/*assemblyAr*/ = [];
      if(PL$15/*cDef*/["track"]){
        PL$29/*assemblyAr*/["push"]("if (_T");
        PL$29/*assemblyAr*/["push"](PL$13/*par*/["name"]);
        PL$29/*assemblyAr*/["push"]("){ _T");
        PL$29/*assemblyAr*/["push"](PL$13/*par*/["name"]);
        PL$29/*assemblyAr*/["push"]("();};");
      };
      ;
      return PL$16/*assembleCode*/(PL$29/*assemblyAr*/, PL$13/*par*/);
      ;});
    PL$6/*cs*/["getCallCode"] = (function(PL$13/*par*/){
    
      ;
      var PL$15/*cDef*/ = PL$8/*getClass*/(PL$13/*par*/["type"]);
      var PL$31/*i*/;
      var PL$32/*l*/;
      var PL$33/*args*/;
      var PL$34/*assembly*/;
      if(PL$15/*cDef*/["isVar"]){
        PL$33/*args*/ = PL$13/*par*/["arguments"];
        PL$32/*l*/ = PL$33/*args*/["length"];
        PL$34/*assembly*/ = [PL$17/*MAKRO_SELF*/, "("];
        for(PL$31/*i*/ = 0;(PL$31/*i*/ < PL$32/*l*/);++PL$31/*i*/){{
          if((PL$31/*i*/ > 0)){
            PL$34/*assembly*/["push"](", ");
          };
          ;
          PL$34/*assembly*/["push"]({"_internFun": "getPassAsTypeCode",
"type": this["getBuiltinType"]("var"),
"value": PL$33/*args*/[PL$31/*i*/]["value"],
"valueType": PL$33/*args*/[PL$31/*i*/]["type"]});}};
        ;
        PL$34/*assembly*/["push"](")");
        return PL$16/*assembleCode*/(PL$34/*assembly*/, PL$13/*par*/);
      };
      ;
      if(! PL$15/*cDef*/["isFunction"]){
        return PL$12/*runtimeError*/(PL$2/*errorMsg*/["expectedCallable"], PL$13/*par*/);
      };
      ;
      PL$33/*args*/ = PL$13/*par*/["arguments"];
      PL$32/*l*/ = PL$33/*args*/["length"];
      PL$34/*assembly*/ = [PL$17/*MAKRO_SELF*/, "("];
      for(PL$31/*i*/ = 0;(PL$31/*i*/ < PL$32/*l*/);++PL$31/*i*/){{
        if((PL$31/*i*/ > 0)){
          PL$34/*assembly*/["push"](", ");
        };
        ;
        PL$34/*assembly*/["push"]({"_internFun": "getPassAsTypeCode",
"type": (PL$15/*cDef*/["arguments"][PL$31/*i*/] || this["getBuiltinType"]("var")),
"value": PL$33/*args*/[PL$31/*i*/]["value"],
"valueType": PL$33/*args*/[PL$31/*i*/]["type"]});}};
      ;
      PL$34/*assembly*/["push"](")");
      return PL$16/*assembleCode*/(PL$34/*assembly*/, PL$13/*par*/);
      ;});
    PL$6/*cs*/["getBinaryExpressionCode"] = (function(PL$13/*par*/){
    
      ;
      var PL$35/*lcDef*/ = PL$8/*getClass*/(PL$13/*par*/["leftType"]);
      var PL$36/*rcDef*/ = PL$8/*getClass*/(PL$13/*par*/["rightType"]);
      if((PL$35/*lcDef*/["isVar"] && PL$36/*rcDef*/["isVar"])){
        return PL$16/*assembleCode*/(["(", PL$37/*MAKRO_LEFT*/, " ", PL$20/*MAKRO_OPERATOR*/, " ", PL$38/*MAKRO_RIGHT*/, ")"], PL$13/*par*/);
      };
      ;
      switch (PL$13/*par*/["operator"]){
case "==":
case "===":
case "!=":
case "!==":

      return PL$16/*assembleCode*/(["(", PL$37/*MAKRO_LEFT*/, " ", PL$20/*MAKRO_OPERATOR*/, " ", PL$38/*MAKRO_RIGHT*/, ")"], PL$13/*par*/);}
;
      ;
      return PL$12/*runtimeError*/(PL$2/*errorMsg*/["operatorMissmatch"], PL$13/*par*/);
      ;});
    PL$17/*MAKRO_SELF*/ = 0;
    var PL$39/*MAKRO_PROPERTY*/ = 1;
    var PL$40/*MAKRO_PROPERTYSTRING*/ = 2;
    PL$18/*MAKRO_PROPERTYVALUE*/ = 3;
    PL$21/*MAKRO_VALUE*/ = 4;
    PL$37/*MAKRO_LEFT*/ = 5;
    PL$20/*MAKRO_OPERATOR*/ = 6;
    PL$38/*MAKRO_RIGHT*/ = 7;
    var PL$41/*MAKRO_VALUEPROPERTY*/ = 8;
    var PL$42/*MAKRO_RESOLVEFUN*/ = 9;
    var PL$43/*MAKRO_REJECTFUN*/ = 10;
    var PL$44/*MAKRO_TYPEVALUE*/ = 11;
    PL$30/*MAKRO_CONSTRUCTOR*/ = 12;
    var PL$45/*MAKRO_NEWLINE*/ = 13;
    var PL$46/*presets*/ = {"getMemberCode": (function(PL$47/*freePart*/){
    
      ;
      return [PL$17/*MAKRO_SELF*/, (("[" + PL$47/*freePart*/) + "]["), PL$18/*MAKRO_PROPERTYVALUE*/, "]"];
      ;}),
"setMemberCode": (function(PL$47/*freePart*/){
    
      ;
      return [PL$17/*MAKRO_SELF*/, (("[" + PL$47/*freePart*/) + "]["), PL$18/*MAKRO_PROPERTYVALUE*/, "] ", PL$20/*MAKRO_OPERATOR*/, " ", PL$21/*MAKRO_VALUE*/];
      ;})};
    PL$5/*internals*/["presets"] = PL$46/*presets*/;
    PL$16/*assembleCode*/ = (function(PL$48/*ar*/, PL$13/*par*/){
    
      ;
      var PL$49/*res*/ = PL$13/*par*/["result"];
      var PL$50/*resStr*/ = "";
      if(! PL$49/*res*/){
        PL$49/*res*/ = {"push": (function(PL$51/*parStr*/){
        
          ;
          PL$50/*resStr*/ += PL$51/*parStr*/;
          ;})};
      };
      ;
      var PL$31/*i*/ = 0;
      var PL$52/*r*/ = "";
      for(PL$31/*i*/ = 0;(PL$31/*i*/ < PL$48/*ar*/["length"]);++PL$31/*i*/){{
        if((typeof PL$48/*ar*/[PL$31/*i*/] == "string")){
          PL$49/*res*/["push"](PL$48/*ar*/[PL$31/*i*/]);
        }else{
        if(PL$48/*ar*/[PL$31/*i*/]["_internFun"]){
          var PL$53/*tempPar*/ = PL$48/*ar*/[PL$31/*i*/];
          PL$53/*tempPar*/["result"] = PL$13/*par*/["result"];
          PL$53/*tempPar*/["errorFun"] = PL$13/*par*/["errorFun"];
          var PL$54/*tempRes*/ = PL$4/*classSystem*/[PL$48/*ar*/[PL$31/*i*/]["_internFun"]](PL$53/*tempPar*/);
          if(! PL$13/*par*/["result"]){
            PL$49/*res*/["push"](PL$54/*tempRes*/);
          };
          ;
        }else{
        switch (PL$48/*ar*/[PL$31/*i*/]){
case PL$17/*MAKRO_SELF*/:

        PL$49/*res*/["push"](PL$13/*par*/["instance"]);
        break;;case PL$39/*MAKRO_PROPERTY*/:

        PL$49/*res*/["push"](PL$13/*par*/["property"]);
        break;;case PL$40/*MAKRO_PROPERTYSTRING*/:

        PL$49/*res*/["push"](PL$11/*stringEncodeStr*/(PL$13/*par*/["property"]));
        break;;case PL$18/*MAKRO_PROPERTYVALUE*/:

        if(PL$13/*par*/["propertyValue"]){
          PL$49/*res*/["push"](PL$13/*par*/["propertyValue"]);
        }else{
        PL$49/*res*/["push"](PL$11/*stringEncodeStr*/(PL$13/*par*/["property"]));
        };
        ;
        break;;case PL$21/*MAKRO_VALUE*/:

        PL$49/*res*/["push"](PL$13/*par*/["value"]);
        break;;case PL$41/*MAKRO_VALUEPROPERTY*/:

        PL$49/*res*/["push"](PL$13/*par*/["valueProperty"]);
        break;;case PL$37/*MAKRO_LEFT*/:

        PL$49/*res*/["push"](PL$13/*par*/["left"]);
        break;;case PL$38/*MAKRO_RIGHT*/:

        PL$49/*res*/["push"](PL$13/*par*/["right"]);
        break;;case PL$20/*MAKRO_OPERATOR*/:

        PL$49/*res*/["push"](PL$13/*par*/["operator"]);
        break;;case PL$42/*MAKRO_RESOLVEFUN*/:

        PL$49/*res*/["push"]((PL$13/*par*/["resolveFun"] || "undefined"));
        break;;case PL$43/*MAKRO_REJECTFUN*/:

        PL$49/*res*/["push"]((PL$13/*par*/["rejectFun"] || "undefined"));
        break;;case PL$44/*MAKRO_TYPEVALUE*/:

        PL$49/*res*/["push"](PL$13/*par*/["typeValue"]);
        break;;case PL$30/*MAKRO_CONSTRUCTOR*/:

        PL$49/*res*/["push"](PL$13/*par*/["constructorName"]);
        break;;case PL$45/*MAKRO_NEWLINE*/:

        PL$49/*res*/["push"]((PL$13/*par*/["newLine"] || "\n"));}
;
        ;
        };
        };
        ;}};
      ;
      if(PL$13/*par*/["result"]){
        return PL$49/*res*/;
      };
      ;
      return PL$50/*resStr*/;
      ;});
    ;});
  ;})();
;return PL$1;
}; return function(){ return __execute.apply(null, arguments); } });
})();