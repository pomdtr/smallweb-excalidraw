import{a6 as Ee,V as se,s as H,Y as ye,l as L,g as de,e as De,p as we,c as ve}from"./index-BnAGYxjy.js";import{c as Ne}from"./clone-B7QDUk4_.js";import{i as ke,a as ge,p as Ie,b as Oe,c as Te,d as ze}from"./edges-e0da2a9e-C26m8ncr.js";import{G as Ce}from"./graph-DE9BLW39.js";import"./index-CYgtJuFL.js";import{c as Ae}from"./channel-Bukq19hp.js";import{o as Re}from"./ordinal-Cboi1Yqb.js";import{s as Be}from"./Tableau10-B-NsZVaP.js";import"./createText-2e5e7dd3-BwV1-PwH.js";import"./line-bsYdX7j4.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";import"./init-Gi6I4Gst.js";var le,oe,ee=function(){var e=function(w,l,s,i){for(s=s||{},i=w.length;i--;s[w[i]]=l);return s},a=[1,7],h=[1,13],c=[1,14],n=[1,15],g=[1,19],o=[1,16],f=[1,17],b=[1,18],p=[8,30],x=[8,21,28,29,30,31,32,40,44,47],E=[1,23],T=[1,24],v=[8,15,16,21,28,29,30,31,32,40,44,47],N=[8,15,16,21,27,28,29,30,31,32,40,44,47],y=[1,49],S={trace:function(){},yy:{},symbols_:{error:2,spaceLines:3,SPACELINE:4,NL:5,separator:6,SPACE:7,EOF:8,start:9,BLOCK_DIAGRAM_KEY:10,document:11,stop:12,statement:13,link:14,LINK:15,START_LINK:16,LINK_LABEL:17,STR:18,nodeStatement:19,columnsStatement:20,SPACE_BLOCK:21,blockStatement:22,classDefStatement:23,cssClassStatement:24,styleStatement:25,node:26,SIZE:27,COLUMNS:28,"id-block":29,end:30,block:31,NODE_ID:32,nodeShapeNLabel:33,dirList:34,DIR:35,NODE_DSTART:36,NODE_DEND:37,BLOCK_ARROW_START:38,BLOCK_ARROW_END:39,classDef:40,CLASSDEF_ID:41,CLASSDEF_STYLEOPTS:42,DEFAULT:43,class:44,CLASSENTITY_IDS:45,STYLECLASS:46,style:47,STYLE_ENTITY_IDS:48,STYLE_DEFINITION_DATA:49,$accept:0,$end:1},terminals_:{2:"error",4:"SPACELINE",5:"NL",7:"SPACE",8:"EOF",10:"BLOCK_DIAGRAM_KEY",15:"LINK",16:"START_LINK",17:"LINK_LABEL",18:"STR",21:"SPACE_BLOCK",27:"SIZE",28:"COLUMNS",29:"id-block",30:"end",31:"block",32:"NODE_ID",35:"DIR",36:"NODE_DSTART",37:"NODE_DEND",38:"BLOCK_ARROW_START",39:"BLOCK_ARROW_END",40:"classDef",41:"CLASSDEF_ID",42:"CLASSDEF_STYLEOPTS",43:"DEFAULT",44:"class",45:"CLASSENTITY_IDS",46:"STYLECLASS",47:"style",48:"STYLE_ENTITY_IDS",49:"STYLE_DEFINITION_DATA"},productions_:[0,[3,1],[3,2],[3,2],[6,1],[6,1],[6,1],[9,3],[12,1],[12,1],[12,2],[12,2],[11,1],[11,2],[14,1],[14,4],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[19,3],[19,2],[19,1],[20,1],[22,4],[22,3],[26,1],[26,2],[34,1],[34,2],[33,3],[33,4],[23,3],[23,3],[24,3],[25,3]],performAction:function(l,s,i,u,d,t,m){var r=t.length-1;switch(d){case 4:u.getLogger().debug("Rule: separator (NL) ");break;case 5:u.getLogger().debug("Rule: separator (Space) ");break;case 6:u.getLogger().debug("Rule: separator (EOF) ");break;case 7:u.getLogger().debug("Rule: hierarchy: ",t[r-1]),u.setHierarchy(t[r-1]);break;case 8:u.getLogger().debug("Stop NL ");break;case 9:u.getLogger().debug("Stop EOF ");break;case 10:u.getLogger().debug("Stop NL2 ");break;case 11:u.getLogger().debug("Stop EOF2 ");break;case 12:u.getLogger().debug("Rule: statement: ",t[r]),typeof t[r].length=="number"?this.$=t[r]:this.$=[t[r]];break;case 13:u.getLogger().debug("Rule: statement #2: ",t[r-1]),this.$=[t[r-1]].concat(t[r]);break;case 14:u.getLogger().debug("Rule: link: ",t[r],l),this.$={edgeTypeStr:t[r],label:""};break;case 15:u.getLogger().debug("Rule: LABEL link: ",t[r-3],t[r-1],t[r]),this.$={edgeTypeStr:t[r],label:t[r-1]};break;case 18:const R=parseInt(t[r]),Y=u.generateId();this.$={id:Y,type:"space",label:"",width:R,children:[]};break;case 23:u.getLogger().debug("Rule: (nodeStatement link node) ",t[r-2],t[r-1],t[r]," typestr: ",t[r-1].edgeTypeStr);const F=u.edgeStrToEdgeData(t[r-1].edgeTypeStr);this.$=[{id:t[r-2].id,label:t[r-2].label,type:t[r-2].type,directions:t[r-2].directions},{id:t[r-2].id+"-"+t[r].id,start:t[r-2].id,end:t[r].id,label:t[r-1].label,type:"edge",directions:t[r].directions,arrowTypeEnd:F,arrowTypeStart:"arrow_open"},{id:t[r].id,label:t[r].label,type:u.typeStr2Type(t[r].typeStr),directions:t[r].directions}];break;case 24:u.getLogger().debug("Rule: nodeStatement (abc88 node size) ",t[r-1],t[r]),this.$={id:t[r-1].id,label:t[r-1].label,type:u.typeStr2Type(t[r-1].typeStr),directions:t[r-1].directions,widthInColumns:parseInt(t[r],10)};break;case 25:u.getLogger().debug("Rule: nodeStatement (node) ",t[r]),this.$={id:t[r].id,label:t[r].label,type:u.typeStr2Type(t[r].typeStr),directions:t[r].directions,widthInColumns:1};break;case 26:u.getLogger().debug("APA123",this?this:"na"),u.getLogger().debug("COLUMNS: ",t[r]),this.$={type:"column-setting",columns:t[r]==="auto"?-1:parseInt(t[r])};break;case 27:u.getLogger().debug("Rule: id-block statement : ",t[r-2],t[r-1]),u.generateId(),this.$={...t[r-2],type:"composite",children:t[r-1]};break;case 28:u.getLogger().debug("Rule: blockStatement : ",t[r-2],t[r-1],t[r]);const C=u.generateId();this.$={id:C,type:"composite",label:"",children:t[r-1]};break;case 29:u.getLogger().debug("Rule: node (NODE_ID separator): ",t[r]),this.$={id:t[r]};break;case 30:u.getLogger().debug("Rule: node (NODE_ID nodeShapeNLabel separator): ",t[r-1],t[r]),this.$={id:t[r-1],label:t[r].label,typeStr:t[r].typeStr,directions:t[r].directions};break;case 31:u.getLogger().debug("Rule: dirList: ",t[r]),this.$=[t[r]];break;case 32:u.getLogger().debug("Rule: dirList: ",t[r-1],t[r]),this.$=[t[r-1]].concat(t[r]);break;case 33:u.getLogger().debug("Rule: nodeShapeNLabel: ",t[r-2],t[r-1],t[r]),this.$={typeStr:t[r-2]+t[r],label:t[r-1]};break;case 34:u.getLogger().debug("Rule: BLOCK_ARROW nodeShapeNLabel: ",t[r-3],t[r-2]," #3:",t[r-1],t[r]),this.$={typeStr:t[r-3]+t[r],label:t[r-2],directions:t[r-1]};break;case 35:case 36:this.$={type:"classDef",id:t[r-1].trim(),css:t[r].trim()};break;case 37:this.$={type:"applyClass",id:t[r-1].trim(),styleClass:t[r].trim()};break;case 38:this.$={type:"applyStyles",id:t[r-1].trim(),stylesStr:t[r].trim()};break}},table:[{9:1,10:[1,2]},{1:[3]},{11:3,13:4,19:5,20:6,21:a,22:8,23:9,24:10,25:11,26:12,28:h,29:c,31:n,32:g,40:o,44:f,47:b},{8:[1,20]},e(p,[2,12],{13:4,19:5,20:6,22:8,23:9,24:10,25:11,26:12,11:21,21:a,28:h,29:c,31:n,32:g,40:o,44:f,47:b}),e(x,[2,16],{14:22,15:E,16:T}),e(x,[2,17]),e(x,[2,18]),e(x,[2,19]),e(x,[2,20]),e(x,[2,21]),e(x,[2,22]),e(v,[2,25],{27:[1,25]}),e(x,[2,26]),{19:26,26:12,32:g},{11:27,13:4,19:5,20:6,21:a,22:8,23:9,24:10,25:11,26:12,28:h,29:c,31:n,32:g,40:o,44:f,47:b},{41:[1,28],43:[1,29]},{45:[1,30]},{48:[1,31]},e(N,[2,29],{33:32,36:[1,33],38:[1,34]}),{1:[2,7]},e(p,[2,13]),{26:35,32:g},{32:[2,14]},{17:[1,36]},e(v,[2,24]),{11:37,13:4,14:22,15:E,16:T,19:5,20:6,21:a,22:8,23:9,24:10,25:11,26:12,28:h,29:c,31:n,32:g,40:o,44:f,47:b},{30:[1,38]},{42:[1,39]},{42:[1,40]},{46:[1,41]},{49:[1,42]},e(N,[2,30]),{18:[1,43]},{18:[1,44]},e(v,[2,23]),{18:[1,45]},{30:[1,46]},e(x,[2,28]),e(x,[2,35]),e(x,[2,36]),e(x,[2,37]),e(x,[2,38]),{37:[1,47]},{34:48,35:y},{15:[1,50]},e(x,[2,27]),e(N,[2,33]),{39:[1,51]},{34:52,35:y,39:[2,31]},{32:[2,15]},e(N,[2,34]),{39:[2,32]}],defaultActions:{20:[2,7],23:[2,14],50:[2,15],52:[2,32]},parseError:function(l,s){if(s.recoverable)this.trace(l);else{var i=new Error(l);throw i.hash=s,i}},parse:function(l){var s=this,i=[0],u=[],d=[null],t=[],m=this.table,r="",R=0,Y=0,F=2,C=1,Se=t.slice.call(arguments,1),D=Object.create(this.lexer),K={yy:{}};for(var Z in this.yy)Object.prototype.hasOwnProperty.call(this.yy,Z)&&(K.yy[Z]=this.yy[Z]);D.setInput(l,K.yy),K.yy.lexer=D,K.yy.parser=this,typeof D.yylloc>"u"&&(D.yylloc={});var J=D.yylloc;t.push(J);var me=D.options&&D.options.ranges;typeof K.yy.parseError=="function"?this.parseError=K.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function _e(){var P;return P=u.pop()||D.lex()||C,typeof P!="number"&&(P instanceof Array&&(u=P,P=u.pop()),P=s.symbols_[P]||P),P}for(var I,M,z,Q,W={},X,B,ae,G;;){if(M=i[i.length-1],this.defaultActions[M]?z=this.defaultActions[M]:((I===null||typeof I>"u")&&(I=_e()),z=m[M]&&m[M][I]),typeof z>"u"||!z.length||!z[0]){var $="";G=[];for(X in m[M])this.terminals_[X]&&X>F&&G.push("'"+this.terminals_[X]+"'");D.showPosition?$="Parse error on line "+(R+1)+`:
`+D.showPosition()+`
Expecting `+G.join(", ")+", got '"+(this.terminals_[I]||I)+"'":$="Parse error on line "+(R+1)+": Unexpected "+(I==C?"end of input":"'"+(this.terminals_[I]||I)+"'"),this.parseError($,{text:D.match,token:this.terminals_[I]||I,line:D.yylineno,loc:J,expected:G})}if(z[0]instanceof Array&&z.length>1)throw new Error("Parse Error: multiple actions possible at state: "+M+", token: "+I);switch(z[0]){case 1:i.push(I),d.push(D.yytext),t.push(D.yylloc),i.push(z[1]),I=null,Y=D.yyleng,r=D.yytext,R=D.yylineno,J=D.yylloc;break;case 2:if(B=this.productions_[z[1]][1],W.$=d[d.length-B],W._$={first_line:t[t.length-(B||1)].first_line,last_line:t[t.length-1].last_line,first_column:t[t.length-(B||1)].first_column,last_column:t[t.length-1].last_column},me&&(W._$.range=[t[t.length-(B||1)].range[0],t[t.length-1].range[1]]),Q=this.performAction.apply(W,[r,Y,R,K.yy,z[1],d,t].concat(Se)),typeof Q<"u")return Q;B&&(i=i.slice(0,-1*B*2),d=d.slice(0,-1*B),t=t.slice(0,-1*B)),i.push(this.productions_[z[1]][0]),d.push(W.$),t.push(W._$),ae=m[i[i.length-2]][i[i.length-1]],i.push(ae);break;case 3:return!0}}return!0}},A=function(){var w={EOF:1,parseError:function(s,i){if(this.yy.parser)this.yy.parser.parseError(s,i);else throw new Error(s)},setInput:function(l,s){return this.yy=s||this.yy||{},this._input=l,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var l=this._input[0];this.yytext+=l,this.yyleng++,this.offset++,this.match+=l,this.matched+=l;var s=l.match(/(?:\r\n?|\n).*/g);return s?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),l},unput:function(l){var s=l.length,i=l.split(/(?:\r\n?|\n)/g);this._input=l+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-s),this.offset-=s;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var d=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===u.length?this.yylloc.first_column:0)+u[u.length-i.length].length-i[0].length:this.yylloc.first_column-s},this.options.ranges&&(this.yylloc.range=[d[0],d[0]+this.yyleng-s]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(l){this.unput(this.match.slice(l))},pastInput:function(){var l=this.matched.substr(0,this.matched.length-this.match.length);return(l.length>20?"...":"")+l.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var l=this.match;return l.length<20&&(l+=this._input.substr(0,20-l.length)),(l.substr(0,20)+(l.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var l=this.pastInput(),s=new Array(l.length+1).join("-");return l+this.upcomingInput()+`
`+s+"^"},test_match:function(l,s){var i,u,d;if(this.options.backtrack_lexer&&(d={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(d.yylloc.range=this.yylloc.range.slice(0))),u=l[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+l[0].length},this.yytext+=l[0],this.match+=l[0],this.matches=l,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(l[0].length),this.matched+=l[0],i=this.performAction.call(this,this.yy,this,s,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var t in d)this[t]=d[t];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var l,s,i,u;this._more||(this.yytext="",this.match="");for(var d=this._currentRules(),t=0;t<d.length;t++)if(i=this._input.match(this.rules[d[t]]),i&&(!s||i[0].length>s[0].length)){if(s=i,u=t,this.options.backtrack_lexer){if(l=this.test_match(i,d[t]),l!==!1)return l;if(this._backtrack){s=!1;continue}else return!1}else if(!this.options.flex)break}return s?(l=this.test_match(s,d[u]),l!==!1?l:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var s=this.next();return s||this.lex()},begin:function(s){this.conditionStack.push(s)},popState:function(){var s=this.conditionStack.length-1;return s>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(s){return s=this.conditionStack.length-1-Math.abs(s||0),s>=0?this.conditionStack[s]:"INITIAL"},pushState:function(s){this.begin(s)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(s,i,u,d){switch(u){case 0:return 10;case 1:return s.getLogger().debug("Found space-block"),31;case 2:return s.getLogger().debug("Found nl-block"),31;case 3:return s.getLogger().debug("Found space-block"),29;case 4:s.getLogger().debug(".",i.yytext);break;case 5:s.getLogger().debug("_",i.yytext);break;case 6:return 5;case 7:return i.yytext=-1,28;case 8:return i.yytext=i.yytext.replace(/columns\s+/,""),s.getLogger().debug("COLUMNS (LEX)",i.yytext),28;case 9:this.pushState("md_string");break;case 10:return"MD_STR";case 11:this.popState();break;case 12:this.pushState("string");break;case 13:s.getLogger().debug("LEX: POPPING STR:",i.yytext),this.popState();break;case 14:return s.getLogger().debug("LEX: STR end:",i.yytext),"STR";case 15:return i.yytext=i.yytext.replace(/space\:/,""),s.getLogger().debug("SPACE NUM (LEX)",i.yytext),21;case 16:return i.yytext="1",s.getLogger().debug("COLUMNS (LEX)",i.yytext),21;case 17:return 43;case 18:return"LINKSTYLE";case 19:return"INTERPOLATE";case 20:return this.pushState("CLASSDEF"),40;case 21:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 22:return this.popState(),this.pushState("CLASSDEFID"),41;case 23:return this.popState(),42;case 24:return this.pushState("CLASS"),44;case 25:return this.popState(),this.pushState("CLASS_STYLE"),45;case 26:return this.popState(),46;case 27:return this.pushState("STYLE_STMNT"),47;case 28:return this.popState(),this.pushState("STYLE_DEFINITION"),48;case 29:return this.popState(),49;case 30:return this.pushState("acc_title"),"acc_title";case 31:return this.popState(),"acc_title_value";case 32:return this.pushState("acc_descr"),"acc_descr";case 33:return this.popState(),"acc_descr_value";case 34:this.pushState("acc_descr_multiline");break;case 35:this.popState();break;case 36:return"acc_descr_multiline_value";case 37:return 30;case 38:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";case 39:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";case 40:return this.popState(),s.getLogger().debug("Lex: ))"),"NODE_DEND";case 41:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";case 42:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";case 43:return this.popState(),s.getLogger().debug("Lex: (-"),"NODE_DEND";case 44:return this.popState(),s.getLogger().debug("Lex: -)"),"NODE_DEND";case 45:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";case 46:return this.popState(),s.getLogger().debug("Lex: ]]"),"NODE_DEND";case 47:return this.popState(),s.getLogger().debug("Lex: ("),"NODE_DEND";case 48:return this.popState(),s.getLogger().debug("Lex: ])"),"NODE_DEND";case 49:return this.popState(),s.getLogger().debug("Lex: /]"),"NODE_DEND";case 50:return this.popState(),s.getLogger().debug("Lex: /]"),"NODE_DEND";case 51:return this.popState(),s.getLogger().debug("Lex: )]"),"NODE_DEND";case 52:return this.popState(),s.getLogger().debug("Lex: )"),"NODE_DEND";case 53:return this.popState(),s.getLogger().debug("Lex: ]>"),"NODE_DEND";case 54:return this.popState(),s.getLogger().debug("Lex: ]"),"NODE_DEND";case 55:return s.getLogger().debug("Lexa: -)"),this.pushState("NODE"),36;case 56:return s.getLogger().debug("Lexa: (-"),this.pushState("NODE"),36;case 57:return s.getLogger().debug("Lexa: ))"),this.pushState("NODE"),36;case 58:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 59:return s.getLogger().debug("Lex: ((("),this.pushState("NODE"),36;case 60:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 61:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 62:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 63:return s.getLogger().debug("Lexc: >"),this.pushState("NODE"),36;case 64:return s.getLogger().debug("Lexa: (["),this.pushState("NODE"),36;case 65:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 66:return this.pushState("NODE"),36;case 67:return this.pushState("NODE"),36;case 68:return this.pushState("NODE"),36;case 69:return this.pushState("NODE"),36;case 70:return this.pushState("NODE"),36;case 71:return this.pushState("NODE"),36;case 72:return this.pushState("NODE"),36;case 73:return s.getLogger().debug("Lexa: ["),this.pushState("NODE"),36;case 74:return this.pushState("BLOCK_ARROW"),s.getLogger().debug("LEX ARR START"),38;case 75:return s.getLogger().debug("Lex: NODE_ID",i.yytext),32;case 76:return s.getLogger().debug("Lex: EOF",i.yytext),8;case 77:this.pushState("md_string");break;case 78:this.pushState("md_string");break;case 79:return"NODE_DESCR";case 80:this.popState();break;case 81:s.getLogger().debug("Lex: Starting string"),this.pushState("string");break;case 82:s.getLogger().debug("LEX ARR: Starting string"),this.pushState("string");break;case 83:return s.getLogger().debug("LEX: NODE_DESCR:",i.yytext),"NODE_DESCR";case 84:s.getLogger().debug("LEX POPPING"),this.popState();break;case 85:s.getLogger().debug("Lex: =>BAE"),this.pushState("ARROW_DIR");break;case 86:return i.yytext=i.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (right): dir:",i.yytext),"DIR";case 87:return i.yytext=i.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (left):",i.yytext),"DIR";case 88:return i.yytext=i.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (x):",i.yytext),"DIR";case 89:return i.yytext=i.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (y):",i.yytext),"DIR";case 90:return i.yytext=i.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (up):",i.yytext),"DIR";case 91:return i.yytext=i.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (down):",i.yytext),"DIR";case 92:return i.yytext="]>",s.getLogger().debug("Lex (ARROW_DIR end):",i.yytext),this.popState(),this.popState(),"BLOCK_ARROW_END";case 93:return s.getLogger().debug("Lex: LINK","#"+i.yytext+"#"),15;case 94:return s.getLogger().debug("Lex: LINK",i.yytext),15;case 95:return s.getLogger().debug("Lex: LINK",i.yytext),15;case 96:return s.getLogger().debug("Lex: LINK",i.yytext),15;case 97:return s.getLogger().debug("Lex: START_LINK",i.yytext),this.pushState("LLABEL"),16;case 98:return s.getLogger().debug("Lex: START_LINK",i.yytext),this.pushState("LLABEL"),16;case 99:return s.getLogger().debug("Lex: START_LINK",i.yytext),this.pushState("LLABEL"),16;case 100:this.pushState("md_string");break;case 101:return s.getLogger().debug("Lex: Starting string"),this.pushState("string"),"LINK_LABEL";case 102:return this.popState(),s.getLogger().debug("Lex: LINK","#"+i.yytext+"#"),15;case 103:return this.popState(),s.getLogger().debug("Lex: LINK",i.yytext),15;case 104:return this.popState(),s.getLogger().debug("Lex: LINK",i.yytext),15;case 105:return s.getLogger().debug("Lex: COLON",i.yytext),i.yytext=i.yytext.slice(1),27}},rules:[/^(?:block-beta\b)/,/^(?:block\s+)/,/^(?:block\n+)/,/^(?:block:)/,/^(?:[\s]+)/,/^(?:[\n]+)/,/^(?:((\u000D\u000A)|(\u000A)))/,/^(?:columns\s+auto\b)/,/^(?:columns\s+[\d]+)/,/^(?:["][`])/,/^(?:[^`"]+)/,/^(?:[`]["])/,/^(?:["])/,/^(?:["])/,/^(?:[^"]*)/,/^(?:space[:]\d+)/,/^(?:space\b)/,/^(?:default\b)/,/^(?:linkStyle\b)/,/^(?:interpolate\b)/,/^(?:classDef\s+)/,/^(?:DEFAULT\s+)/,/^(?:\w+\s+)/,/^(?:[^\n]*)/,/^(?:class\s+)/,/^(?:(\w+)+((,\s*\w+)*))/,/^(?:[^\n]*)/,/^(?:style\s+)/,/^(?:(\w+)+((,\s*\w+)*))/,/^(?:[^\n]*)/,/^(?:accTitle\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*\{\s*)/,/^(?:[\}])/,/^(?:[^\}]*)/,/^(?:end\b\s*)/,/^(?:\(\(\()/,/^(?:\)\)\))/,/^(?:[\)]\))/,/^(?:\}\})/,/^(?:\})/,/^(?:\(-)/,/^(?:-\))/,/^(?:\(\()/,/^(?:\]\])/,/^(?:\()/,/^(?:\]\))/,/^(?:\\\])/,/^(?:\/\])/,/^(?:\)\])/,/^(?:[\)])/,/^(?:\]>)/,/^(?:[\]])/,/^(?:-\))/,/^(?:\(-)/,/^(?:\)\))/,/^(?:\))/,/^(?:\(\(\()/,/^(?:\(\()/,/^(?:\{\{)/,/^(?:\{)/,/^(?:>)/,/^(?:\(\[)/,/^(?:\()/,/^(?:\[\[)/,/^(?:\[\|)/,/^(?:\[\()/,/^(?:\)\)\))/,/^(?:\[\\)/,/^(?:\[\/)/,/^(?:\[\\)/,/^(?:\[)/,/^(?:<\[)/,/^(?:[^\(\[\n\-\)\{\}\s\<\>:]+)/,/^(?:$)/,/^(?:["][`])/,/^(?:["][`])/,/^(?:[^`"]+)/,/^(?:[`]["])/,/^(?:["])/,/^(?:["])/,/^(?:[^"]+)/,/^(?:["])/,/^(?:\]>\s*\()/,/^(?:,?\s*right\s*)/,/^(?:,?\s*left\s*)/,/^(?:,?\s*x\s*)/,/^(?:,?\s*y\s*)/,/^(?:,?\s*up\s*)/,/^(?:,?\s*down\s*)/,/^(?:\)\s*)/,/^(?:\s*[xo<]?--+[-xo>]\s*)/,/^(?:\s*[xo<]?==+[=xo>]\s*)/,/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,/^(?:\s*~~[\~]+\s*)/,/^(?:\s*[xo<]?--\s*)/,/^(?:\s*[xo<]?==\s*)/,/^(?:\s*[xo<]?-\.\s*)/,/^(?:["][`])/,/^(?:["])/,/^(?:\s*[xo<]?--+[-xo>]\s*)/,/^(?:\s*[xo<]?==+[=xo>]\s*)/,/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,/^(?::\d+)/],conditions:{STYLE_DEFINITION:{rules:[29],inclusive:!1},STYLE_STMNT:{rules:[28],inclusive:!1},CLASSDEFID:{rules:[23],inclusive:!1},CLASSDEF:{rules:[21,22],inclusive:!1},CLASS_STYLE:{rules:[26],inclusive:!1},CLASS:{rules:[25],inclusive:!1},LLABEL:{rules:[100,101,102,103,104],inclusive:!1},ARROW_DIR:{rules:[86,87,88,89,90,91,92],inclusive:!1},BLOCK_ARROW:{rules:[77,82,85],inclusive:!1},NODE:{rules:[38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,78,81],inclusive:!1},md_string:{rules:[10,11,79,80],inclusive:!1},space:{rules:[],inclusive:!1},string:{rules:[13,14,83,84],inclusive:!1},acc_descr_multiline:{rules:[35,36],inclusive:!1},acc_descr:{rules:[33],inclusive:!1},acc_title:{rules:[31],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,12,15,16,17,18,19,20,24,27,30,32,34,37,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,93,94,95,96,97,98,99,105],inclusive:!0}}};return w}();S.lexer=A;function k(){this.yy={}}return k.prototype=S,S.Parser=k,new k}();ee.parser=ee;const Pe=ee;let O={},ie=[],V={};const ce="color",ue="fill",Fe="bgFill",pe=",",Ke=de();let j={};const Me=e=>ve.sanitizeText(e,Ke),Ye=function(e,a=""){j[e]===void 0&&(j[e]={id:e,styles:[],textStyles:[]});const h=j[e];a!=null&&a.split(pe).forEach(c=>{const n=c.replace(/([^;]*);/,"$1").trim();if(c.match(ce)){const o=n.replace(ue,Fe).replace(ce,ue);h.textStyles.push(o)}h.styles.push(n)})},We=function(e,a=""){const h=O[e];a!=null&&(h.styles=a.split(pe))},Ve=function(e,a){e.split(",").forEach(function(h){let c=O[h];if(c===void 0){const n=h.trim();O[n]={id:n,type:"na",children:[]},c=O[n]}c.classes||(c.classes=[]),c.classes.push(a)})},fe=(e,a)=>{const h=e.flat(),c=[];for(const n of h){if(n.label&&(n.label=Me(n.label)),n.type==="classDef"){Ye(n.id,n.css);continue}if(n.type==="applyClass"){Ve(n.id,(n==null?void 0:n.styleClass)||"");continue}if(n.type==="applyStyles"){n!=null&&n.stylesStr&&We(n.id,n==null?void 0:n.stylesStr);continue}if(n.type==="column-setting")a.columns=n.columns||-1;else if(n.type==="edge")V[n.id]?V[n.id]++:V[n.id]=1,n.id=V[n.id]+"-"+n.id,ie.push(n);else{n.label||(n.type==="composite"?n.label="":n.label=n.id);const g=!O[n.id];if(g?O[n.id]=n:(n.type!=="na"&&(O[n.id].type=n.type),n.label!==n.id&&(O[n.id].label=n.label)),n.children&&fe(n.children,n),n.type==="space"){const o=n.width||1;for(let f=0;f<o;f++){const b=Ne(n);b.id=b.id+"-"+f,O[b.id]=b,c.push(b)}}else g&&c.push(n)}}a.children=c};let re=[],U={id:"root",type:"composite",children:[],columns:-1};const je=()=>{L.debug("Clear called"),we(),U={id:"root",type:"composite",children:[],columns:-1},O={root:U},re=[],j={},ie=[],V={}};function Ue(e){switch(L.debug("typeStr2Type",e),e){case"[]":return"square";case"()":return L.debug("we have a round"),"round";case"(())":return"circle";case">]":return"rect_left_inv_arrow";case"{}":return"diamond";case"{{}}":return"hexagon";case"([])":return"stadium";case"[[]]":return"subroutine";case"[()]":return"cylinder";case"((()))":return"doublecircle";case"[//]":return"lean_right";case"[\\\\]":return"lean_left";case"[/\\]":return"trapezoid";case"[\\/]":return"inv_trapezoid";case"<[]>":return"block_arrow";default:return"na"}}function Xe(e){switch(L.debug("typeStr2Type",e),e){case"==":return"thick";default:return"normal"}}function Ge(e){switch(e.trim()){case"--x":return"arrow_cross";case"--o":return"arrow_circle";default:return"arrow_point"}}let he=0;const He=()=>(he++,"id-"+Math.random().toString(36).substr(2,12)+"-"+he),qe=e=>{U.children=e,fe(e,U),re=U.children},Ze=e=>{const a=O[e];return a?a.columns?a.columns:a.children?a.children.length:-1:-1},Je=()=>[...Object.values(O)],Qe=()=>re||[],$e=()=>ie,et=e=>O[e],tt=e=>{O[e.id]=e},st=()=>console,it=function(){return j},rt={getConfig:()=>se().block,typeStr2Type:Ue,edgeTypeStr2Type:Xe,edgeStrToEdgeData:Ge,getLogger:st,getBlocksFlat:Je,getBlocks:Qe,getEdges:$e,setHierarchy:qe,getBlock:et,setBlock:tt,getColumns:Ze,getClasses:it,clear:je,generateId:He},nt=rt,q=(e,a)=>{const h=Ae,c=h(e,"r"),n=h(e,"g"),g=h(e,"b");return Ee(c,n,g,a)},at=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }



  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${q(e.edgeLabelBackground,.5)};
    // background-color:
  }

  .node .cluster {
    // fill: ${q(e.mainBkg,.5)};
    fill: ${q(e.clusterBkg,.5)};
    stroke: ${q(e.clusterBorder,.2)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`,lt=at;function be(e,a,h=!1){var c,n,g;const o=e;let f="default";(((c=o==null?void 0:o.classes)==null?void 0:c.length)||0)>0&&(f=((o==null?void 0:o.classes)||[]).join(" ")),f=f+" flowchart-label";let b=0,p="",x;switch(o.type){case"round":b=5,p="rect";break;case"composite":b=0,p="composite",x=0;break;case"square":p="rect";break;case"diamond":p="question";break;case"hexagon":p="hexagon";break;case"block_arrow":p="block_arrow";break;case"odd":p="rect_left_inv_arrow";break;case"lean_right":p="lean_right";break;case"lean_left":p="lean_left";break;case"trapezoid":p="trapezoid";break;case"inv_trapezoid":p="inv_trapezoid";break;case"rect_left_inv_arrow":p="rect_left_inv_arrow";break;case"circle":p="circle";break;case"ellipse":p="ellipse";break;case"stadium":p="stadium";break;case"subroutine":p="subroutine";break;case"cylinder":p="cylinder";break;case"group":p="rect";break;case"doublecircle":p="doublecircle";break;default:p="rect"}const E=ye((o==null?void 0:o.styles)||[]),T=o.label,v=o.size||{width:0,height:0,x:0,y:0};return{labelStyle:E.labelStyle,shape:p,labelText:T,rx:b,ry:b,class:f,style:E.style,id:o.id,directions:o.directions,width:v.width,height:v.height,x:v.x,y:v.y,positioned:h,intersect:void 0,type:o.type,padding:x??(((g=(n=se())==null?void 0:n.block)==null?void 0:g.padding)||0)}}async function ot(e,a,h){const c=be(a,h,!1);if(c.type==="group")return;const n=await ge(e,c),g=n.node().getBBox(),o=h.getBlock(c.id);o.size={width:g.width,height:g.height,x:0,y:0,node:n},h.setBlock(o),n.remove()}async function ct(e,a,h){const c=be(a,h,!0);h.getBlock(c.id).type!=="space"&&(await ge(e,c),a.intersect=c==null?void 0:c.intersect,Ie(c))}async function ne(e,a,h,c){for(const n of a)await c(e,n,h),n.children&&await ne(e,n.children,h,c)}async function ut(e,a,h){await ne(e,a,h,ot)}async function ht(e,a,h){await ne(e,a,h,ct)}async function dt(e,a,h,c,n){const g=new Ce({multigraph:!0,compound:!0});g.setGraph({rankdir:"TB",nodesep:10,ranksep:10,marginx:8,marginy:8});for(const o of h)o.size&&g.setNode(o.id,{width:o.size.width,height:o.size.height,intersect:o.intersect});for(const o of a)if(o.start&&o.end){const f=c.getBlock(o.start),b=c.getBlock(o.end);if(f!=null&&f.size&&(b!=null&&b.size)){const p=f.size,x=b.size,E=[{x:p.x,y:p.y},{x:p.x+(x.x-p.x)/2,y:p.y+(x.y-p.y)/2},{x:x.x,y:x.y}];await Oe(e,{v:o.start,w:o.end,name:o.id},{...o,arrowTypeEnd:o.arrowTypeEnd,arrowTypeStart:o.arrowTypeStart,points:E,classes:"edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"},void 0,"block",g,n),o.label&&(await Te(e,{...o,label:o.label,labelStyle:"stroke: #333; stroke-width: 1.5px;fill:none;"}),await ze({...o,x:E[1].x,y:E[1].y},{originalPath:E}))}}}const _=((oe=(le=de())==null?void 0:le.block)==null?void 0:oe.padding)||8;function gt(e,a){if(e===0||!Number.isInteger(e))throw new Error("Columns must be an integer !== 0.");if(a<0||!Number.isInteger(a))throw new Error("Position must be a non-negative integer."+a);if(e<0)return{px:a,py:0};if(e===1)return{px:0,py:a};const h=a%e,c=Math.floor(a/e);return{px:h,py:c}}const pt=e=>{let a=0,h=0;for(const c of e.children){const{width:n,height:g,x:o,y:f}=c.size||{width:0,height:0,x:0,y:0};L.debug("getMaxChildSize abc95 child:",c.id,"width:",n,"height:",g,"x:",o,"y:",f,c.type),c.type!=="space"&&(n>a&&(a=n/(e.widthInColumns||1)),g>h&&(h=g))}return{width:a,height:h}};function te(e,a,h=0,c=0){var n,g,o,f,b,p,x,E,T,v,N;L.debug("setBlockSizes abc95 (start)",e.id,(n=e==null?void 0:e.size)==null?void 0:n.x,"block width =",e==null?void 0:e.size,"sieblingWidth",h),(g=e==null?void 0:e.size)!=null&&g.width||(e.size={width:h,height:c,x:0,y:0});let y=0,S=0;if(((o=e.children)==null?void 0:o.length)>0){for(const d of e.children)te(d,a);const A=pt(e);y=A.width,S=A.height,L.debug("setBlockSizes abc95 maxWidth of",e.id,":s children is ",y,S);for(const d of e.children)d.size&&(L.debug(`abc95 Setting size of children of ${e.id} id=${d.id} ${y} ${S} ${d.size}`),d.size.width=y*(d.widthInColumns||1)+_*((d.widthInColumns||1)-1),d.size.height=S,d.size.x=0,d.size.y=0,L.debug(`abc95 updating size of ${e.id} children child:${d.id} maxWidth:${y} maxHeight:${S}`));for(const d of e.children)te(d,a,y,S);const k=e.columns||-1;let w=0;for(const d of e.children)w+=d.widthInColumns||1;let l=e.children.length;k>0&&k<w&&(l=k),e.widthInColumns;const s=Math.ceil(w/l);let i=l*(y+_)+_,u=s*(S+_)+_;if(i<h){L.debug(`Detected to small siebling: abc95 ${e.id} sieblingWidth ${h} sieblingHeight ${c} width ${i}`),i=h,u=c;const d=(h-l*_-_)/l,t=(c-s*_-_)/s;L.debug("Size indata abc88",e.id,"childWidth",d,"maxWidth",y),L.debug("Size indata abc88",e.id,"childHeight",t,"maxHeight",S),L.debug("Size indata abc88 xSize",l,"padding",_);for(const m of e.children)m.size&&(m.size.width=d,m.size.height=t,m.size.x=0,m.size.y=0)}if(L.debug(`abc95 (finale calc) ${e.id} xSize ${l} ySize ${s} columns ${k}${e.children.length} width=${Math.max(i,((f=e.size)==null?void 0:f.width)||0)}`),i<(((b=e==null?void 0:e.size)==null?void 0:b.width)||0)){i=((p=e==null?void 0:e.size)==null?void 0:p.width)||0;const d=k>0?Math.min(e.children.length,k):e.children.length;if(d>0){const t=(i-d*_-_)/d;L.debug("abc95 (growing to fit) width",e.id,i,(x=e.size)==null?void 0:x.width,t);for(const m of e.children)m.size&&(m.size.width=t)}}e.size={width:i,height:u,x:0,y:0}}L.debug("setBlockSizes abc94 (done)",e.id,(E=e==null?void 0:e.size)==null?void 0:E.x,(T=e==null?void 0:e.size)==null?void 0:T.width,(v=e==null?void 0:e.size)==null?void 0:v.y,(N=e==null?void 0:e.size)==null?void 0:N.height)}function xe(e,a){var h,c,n,g,o,f,b,p,x,E,T,v,N,y,S,A,k;L.debug(`abc85 layout blocks (=>layoutBlocks) ${e.id} x: ${(h=e==null?void 0:e.size)==null?void 0:h.x} y: ${(c=e==null?void 0:e.size)==null?void 0:c.y} width: ${(n=e==null?void 0:e.size)==null?void 0:n.width}`);const w=e.columns||-1;if(L.debug("layoutBlocks columns abc95",e.id,"=>",w,e),e.children&&e.children.length>0){const l=((o=(g=e==null?void 0:e.children[0])==null?void 0:g.size)==null?void 0:o.width)||0,s=e.children.length*l+(e.children.length-1)*_;L.debug("widthOfChildren 88",s,"posX");let i=0;L.debug("abc91 block?.size?.x",e.id,(f=e==null?void 0:e.size)==null?void 0:f.x);let u=(b=e==null?void 0:e.size)!=null&&b.x?((p=e==null?void 0:e.size)==null?void 0:p.x)+(-((x=e==null?void 0:e.size)==null?void 0:x.width)/2||0):-_,d=0;for(const t of e.children){const m=e;if(!t.size)continue;const{width:r,height:R}=t.size,{px:Y,py:F}=gt(w,i);if(F!=d&&(d=F,u=(E=e==null?void 0:e.size)!=null&&E.x?((T=e==null?void 0:e.size)==null?void 0:T.x)+(-((v=e==null?void 0:e.size)==null?void 0:v.width)/2||0):-_,L.debug("New row in layout for block",e.id," and child ",t.id,d)),L.debug(`abc89 layout blocks (child) id: ${t.id} Pos: ${i} (px, py) ${Y},${F} (${(N=m==null?void 0:m.size)==null?void 0:N.x},${(y=m==null?void 0:m.size)==null?void 0:y.y}) parent: ${m.id} width: ${r}${_}`),m.size){const C=r/2;t.size.x=u+_+C,L.debug(`abc91 layout blocks (calc) px, pyid:${t.id} startingPos=X${u} new startingPosX${t.size.x} ${C} padding=${_} width=${r} halfWidth=${C} => x:${t.size.x} y:${t.size.y} ${t.widthInColumns} (width * (child?.w || 1)) / 2 ${r*((t==null?void 0:t.widthInColumns)||1)/2}`),u=t.size.x+C,t.size.y=m.size.y-m.size.height/2+F*(R+_)+R/2+_,L.debug(`abc88 layout blocks (calc) px, pyid:${t.id}startingPosX${u}${_}${C}=>x:${t.size.x}y:${t.size.y}${t.widthInColumns}(width * (child?.w || 1)) / 2${r*((t==null?void 0:t.widthInColumns)||1)/2}`)}t.children&&xe(t),i+=(t==null?void 0:t.widthInColumns)||1,L.debug("abc88 columnsPos",t,i)}}L.debug(`layout blocks (<==layoutBlocks) ${e.id} x: ${(S=e==null?void 0:e.size)==null?void 0:S.x} y: ${(A=e==null?void 0:e.size)==null?void 0:A.y} width: ${(k=e==null?void 0:e.size)==null?void 0:k.width}`)}function Le(e,{minX:a,minY:h,maxX:c,maxY:n}={minX:0,minY:0,maxX:0,maxY:0}){if(e.size&&e.id!=="root"){const{x:g,y:o,width:f,height:b}=e.size;g-f/2<a&&(a=g-f/2),o-b/2<h&&(h=o-b/2),g+f/2>c&&(c=g+f/2),o+b/2>n&&(n=o+b/2)}if(e.children)for(const g of e.children)({minX:a,minY:h,maxX:c,maxY:n}=Le(g,{minX:a,minY:h,maxX:c,maxY:n}));return{minX:a,minY:h,maxX:c,maxY:n}}function ft(e){const a=e.getBlock("root");if(!a)return;te(a,e,0,0),xe(a),L.debug("getBlocks",JSON.stringify(a,null,2));const{minX:h,minY:c,maxX:n,maxY:g}=Le(a),o=g-c,f=n-h;return{x:h,y:c,width:f,height:o}}const bt=function(e,a){return a.db.getClasses()},xt=async function(e,a,h,c){const{securityLevel:n,block:g}=se(),o=c.db;let f;n==="sandbox"&&(f=H("#i"+a));const b=n==="sandbox"?H(f.nodes()[0].contentDocument.body):H("body"),p=n==="sandbox"?b.select(`[id="${a}"]`):H(`[id="${a}"]`);ke(p,["point","circle","cross"],c.type,a);const E=o.getBlocks(),T=o.getBlocksFlat(),v=o.getEdges(),N=p.insert("g").attr("class","block");await ut(N,E,o);const y=ft(o);if(await ht(N,E,o),await dt(N,v,T,o,a),y){const S=y,A=Math.max(1,Math.round(.125*(S.width/S.height))),k=S.height+A+10,w=S.width+10,{useMaxWidth:l}=g;De(p,k,w,!!l),L.debug("Here Bounds",y,S),p.attr("viewBox",`${S.x-5} ${S.y-5} ${S.width+10} ${S.height+10}`)}Re(Be)},Lt={draw:xt,getClasses:bt},zt={parser:Pe,db:nt,renderer:Lt,styles:lt};export{zt as diagram};
