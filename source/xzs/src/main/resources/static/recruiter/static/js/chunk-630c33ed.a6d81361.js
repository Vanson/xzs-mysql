(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-630c33ed"],{1276:function(t,e,n){"use strict";var i=n("d784"),r=n("44e7"),s=n("825a"),a=n("1d80"),o=n("4840"),u=n("8aa5"),c=n("50c4"),l=n("14c3"),d=n("9263"),f=n("d039"),p=[].push,h=Math.min,v=4294967295,g=!f((function(){return!RegExp(v,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(a(this)),s=void 0===n?v:n>>>0;if(0===s)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,s);var o,u,c,l=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=new RegExp(t.source,f+"g");while(o=d.call(g,i)){if(u=g.lastIndex,u>h&&(l.push(i.slice(h,o.index)),o.length>1&&o.index<i.length&&p.apply(l,o.slice(1)),c=o[0].length,h=u,l.length>=s))break;g.lastIndex===o.index&&g.lastIndex++}return h===i.length?!c&&g.test("")||l.push(""):l.push(i.slice(h)),l.length>s?l.slice(0,s):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=a(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,r,n):i.call(String(r),e,n)},function(t,r){var a=n(i,t,this,r,i!==e);if(a.done)return a.value;var d=s(t),f=String(this),p=o(d,RegExp),m=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),x=new p(g?d:"^(?:"+d.source+")",b),y=void 0===r?v:r>>>0;if(0===y)return[];if(0===f.length)return null===l(x,f)?[f]:[];var w=0,q=0,_=[];while(q<f.length){x.lastIndex=g?q:0;var S,C=l(x,g?f:f.slice(q));if(null===C||(S=h(c(x.lastIndex+(g?0:q)),f.length))===w)q=u(f,q,m);else{if(_.push(f.slice(w,q)),_.length===y)return _;for(var T=1;T<=C.length-1;T++)if(_.push(C[T]),_.length===y)return _;q=w=S}}return _.push(f.slice(w)),_}]}),!g)},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("6b75");function r(t){if(Array.isArray(t))return Object(i["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var a=n("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return r(t)||s(t)||Object(a["a"])(t)||o()}},2927:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-container",{staticClass:"app-item-contain"},[n("el-main",[t._l(t.showQuestions,(function(e){return n("el-row",{key:e.id},[n("h3",[t._v(t._s(e.titleContent))]),n("el-card",{staticClass:"exampaper-item-box"},[n("el-row",[n("el-col",{attrs:{span:2,offset:2}},[t._v("Industry: ")]),n("el-col",{attrs:{span:20}},[t._v(t._s(e.industryName))])],1),n("el-row",[n("el-col",{attrs:{span:2,offset:2}},[t._v("Skillset: ")]),n("el-col",{attrs:{span:20}},[t._v(t._s(e.skillName))])],1),n("el-row",[n("el-col",{attrs:{span:2,offset:2}},[t._v("Difficulty: ")]),n("el-col",{attrs:{span:20}},[n("el-rate",{attrs:{disabled:""},model:{value:e.difficult,callback:function(n){t.$set(e,"difficult",n)},expression:"item.difficult"}})],1)],1),n("el-row",[n("el-col",{attrs:{span:2,offset:2}},[t._v("Correct Answer: ")]),n("el-col",{attrs:{span:20}},[t._v(t._s(e.correct))])],1),n("el-row",[n("el-col",{attrs:{span:2,offset:2}},[t._v("Analysis: ")]),n("el-col",{attrs:{span:20}},[t._v(t._s(e.analyze))])],1)],1)],1)})),n("el-row",[n("el-pagination",{attrs:{"hide-on-single-page":t.hideSinglePage,total:t.questions.length,"page-size":t.pageSize,"current-page":t.currentPage,layout:"prev, pager, next, total"},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"current-change":t.setShowQuestion}})],1)],2)],1)],1)},r=[],s=(n("4160"),n("fb6a"),n("a434"),n("159b"),n("2909"));n("a630"),n("c975"),n("a15b"),n("baa5"),n("d81d"),n("b64b"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("6062"),n("3ca3"),n("466d"),n("5319"),n("1276"),n("ddb0"),n("a4d3"),n("e01a"),n("d28b");var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.qLoading,expression:"qLoading"}],staticStyle:{"line-height":"1.8"}},[1==t.qType||2==t.qType||3==t.qType||4==t.qType||5==t.qType?n("div",[1==t.qType?n("div",[n("div",{staticClass:"q-title",domProps:{innerHTML:t._s(t.question.title)}}),n("div",{staticClass:"q-content"},[n("el-radio-group",{model:{value:t.answer.content,callback:function(e){t.$set(t.answer,"content",e)},expression:"answer.content"}},t._l(t.question.items,(function(e){return n("el-radio",{key:e.prefix,attrs:{label:e.prefix}},[n("span",{staticClass:"question-prefix"},[t._v(t._s(e.prefix)+".")]),n("span",{staticClass:"q-item-span-content",domProps:{innerHTML:t._s(e.content)}})])})),1)],1)]):2==t.qType?n("div",[n("div",{staticClass:"q-title",domProps:{innerHTML:t._s(t.question.title)}}),n("div",{staticClass:"q-content"},[n("el-checkbox-group",{model:{value:t.answer.contentArray,callback:function(e){t.$set(t.answer,"contentArray",e)},expression:"answer.contentArray"}},t._l(t.question.items,(function(e){return n("el-checkbox",{key:e.prefix,attrs:{label:e.prefix}},[n("span",{staticClass:"question-prefix"},[t._v(t._s(e.prefix)+".")]),n("span",{staticClass:"q-item-span-content",domProps:{innerHTML:t._s(e.content)}})])})),1)],1)]):3==t.qType?n("div",[n("div",{staticClass:"q-title",staticStyle:{display:"inline","margin-right":"10px"},domProps:{innerHTML:t._s(t.question.title)}}),n("span",{staticStyle:{"padding-right":"10px"}},[t._v("(")]),n("el-radio-group",{model:{value:t.answer.content,callback:function(e){t.$set(t.answer,"content",e)},expression:"answer.content"}},t._l(t.question.items,(function(e){return n("el-radio",{key:e.prefix,attrs:{label:e.prefix}},[n("span",{staticClass:"q-item-span-content",domProps:{innerHTML:t._s(e.content)}})])})),1),n("span",{staticStyle:{"padding-left":"10px"}},[t._v(")")])],1):4==t.qType?n("div",[n("div",{staticClass:"q-title",domProps:{innerHTML:t._s(t.question.title)}}),null!==t.answer.contentArray?n("div",t._l(t.question.items,(function(e){return n("el-form-item",{key:e.prefix,staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{label:e.prefix,"label-width":"50px"}},[n("el-input",{model:{value:t.answer.contentArray[e.prefix-1],callback:function(n){t.$set(t.answer.contentArray,e.prefix-1,n)},expression:"answer.contentArray[item.prefix-1]"}})],1)})),1):t._e()]):5==t.qType?n("div",[n("div",{staticClass:"q-title",domProps:{innerHTML:t._s(t.question.title)}}),n("div",[n("el-input",{attrs:{type:"textarea",rows:"5"},model:{value:t.answer.content,callback:function(e){t.$set(t.answer,"content",e)},expression:"answer.content"}})],1)]):t._e(),n("div",{staticClass:"question-answer-show-item",staticStyle:{"margin-top":"15px"}},[n("span",{staticClass:"question-show-item"},[t._v("结果：")]),n("el-tag",{attrs:{type:t.doRightTagFormatter(t.answer.doRight)}},[t._v(" "+t._s(t.doRightTextFormatter(t.answer.doRight))+" ")])],1),n("div",{staticClass:"question-answer-show-item"},[n("span",{staticClass:"question-show-item"},[t._v("分数：")]),n("span",[t._v(t._s(t.question.score))])]),n("div",{staticClass:"question-answer-show-item"},[n("span",{staticClass:"question-show-item"},[t._v("难度：")]),n("el-rate",{staticClass:"question-show-item",attrs:{disabled:""},model:{value:t.question.difficult,callback:function(e){t.$set(t.question,"difficult",e)},expression:"question.difficult"}})],1),n("br"),n("div",{staticClass:"question-answer-show-item",staticStyle:{"line-height":"1.8"}},[n("span",{staticClass:"question-show-item"},[t._v("解析：")]),n("span",{staticClass:"q-item-span-content",domProps:{innerHTML:t._s(t.question.analyze)}})]),n("div",{staticClass:"question-answer-show-item"},[n("span",{staticClass:"question-show-item"},[t._v("正确答案：")]),1==t.qType||2==t.qType||5==t.qType?n("span",{staticClass:"q-item-span-content",domProps:{innerHTML:t._s(t.question.correct)}}):t._e(),3==t.qType?n("span",{staticClass:"q-item-span-content",domProps:{innerHTML:t._s(t.trueFalseFormatter(t.question))}}):t._e(),4==t.qType?n("span",[t._v(t._s(t.question.correctArray))]):t._e()])]):n("div")])},o=[],u=(n("4de4"),n("a9e3"),n("5530")),c=n("2f62"),l={name:"QuestionShow",props:{question:{type:Object,default:function(){return{}}},answer:{type:Object,default:function(){return{id:null,content:"",contentArray:[],doRight:!1}}},qLoading:{type:Boolean,default:!1},qType:{type:Number,default:0}},methods:{trueFalseFormatter:function(t){return t.items.filter((function(e){return e.prefix===t.correct}))[0].content},doRightTagFormatter:function(t){return this.enumFormat(this.doRightTag,t)},doRightTextFormatter:function(t){return this.enumFormat(this.doRightEnum,t)}},computed:Object(u["a"])(Object(u["a"])({},Object(c["c"])("enumItem",["enumFormat"])),Object(c["e"])("enumItem",{doRightEnum:function(t){return t.exam.question.answer.doRightEnum},doRightTag:function(t){return t.exam.question.answer.doRightTag}}))},d=l,f=n("2877"),p=Object(f["a"])(d,a,o,!1,null,null,null),h=p.exports,v=n("b775"),g={pageList:function(t){return Object(v["b"])("/api/student/exampaper/answer/pageList",t)},answerSubmit:function(t){return Object(v["b"])("/api/student/exampaper/answer/answerSubmit",t)},read:function(t){return Object(v["b"])("/api/student/exampaper/answer/read/"+t)},edit:function(t){return Object(v["b"])("/api/student/exampaper/answer/edit",t)},production:function(t){return Object(v["b"])("/api/student/examination/paper/production",t)}},m={components:{QuestionAnswerShow:h},data:function(){return{questions:[],showQuestions:[],hideSinglePage:!0,pageSize:10,currentPage:1}},props:["industryId","skillIds","difficult","questionNumber"],created:function(){var t,e=this;t=Array.isArray(this.skillIds)?this.skillIds:[t],g.production({industryId:this.industryId,skillIds:t,difficult:this.difficult,questionNumber:this.questionNumber}).then((function(t){var n;1===t.code&&(t.response.forEach((function(t){t.content=JSON.parse(t.content),t.titleContent=t.content.titleContent,t.correct=t.content.correct,t.analyze=t.content.analyze})),(n=e.questions).push.apply(n,Object(s["a"])(t.response)),e.questions.length<e.questionNumber&&e.$message({message:"Questions is less then ".concat(e.questionNumber),type:"warning"}))})).then(this.setShowQuestion)},methods:{setShowQuestion:function(){var t,e,n;e=(this.currentPage-1)*this.pageSize,n=e+this.pageSize,this.showQuestions.splice(0),(t=this.showQuestions).push.apply(t,Object(s["a"])(this.questions.slice(e,n)))}},computed:{}},b=m,x=(n("bf25"),Object(f["a"])(b,i,r,!1,null,"ce9cf99c",null));e["default"]=x.exports},"44e7":function(t,e,n){var i=n("861d"),r=n("c6b6"),s=n("b622"),a=s("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==r(t))}},"466d":function(t,e,n){"use strict";var i=n("d784"),r=n("825a"),s=n("50c4"),a=n("1d80"),o=n("8aa5"),u=n("14c3");i("match",1,(function(t,e,n){return[function(e){var n=a(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var a=r(t),c=String(this);if(!a.global)return u(a,c);var l=a.unicode;a.lastIndex=0;var d,f=[],p=0;while(null!==(d=u(a,c))){var h=String(d[0]);f[p]=h,""===h&&(a.lastIndex=o(c,s(a.lastIndex),l)),p++}return 0===p?null:f}]}))},"4d63":function(t,e,n){var i=n("83ab"),r=n("da84"),s=n("94ca"),a=n("7156"),o=n("9bf2").f,u=n("241c").f,c=n("44e7"),l=n("ad6d"),d=n("9f7f"),f=n("6eeb"),p=n("d039"),h=n("69f3").set,v=n("2626"),g=n("b622"),m=g("match"),b=r.RegExp,x=b.prototype,y=/a/g,w=/a/g,q=new b(y)!==y,_=d.UNSUPPORTED_Y,S=i&&s("RegExp",!q||_||p((function(){return w[m]=!1,b(y)!=y||b(w)==w||"/a/i"!=b(y,"i")})));if(S){var C=function(t,e){var n,i=this instanceof C,r=c(t),s=void 0===e;if(!i&&r&&t.constructor===C&&s)return t;q?r&&!s&&(t=t.source):t instanceof C&&(s&&(e=l.call(t)),t=t.source),_&&(n=!!e&&e.indexOf("y")>-1,n&&(e=e.replace(/y/g,"")));var o=a(q?new b(t,e):b(t,e),i?this:x,C);return _&&n&&h(o,{sticky:n}),o},T=function(t){t in C||o(C,t,{configurable:!0,get:function(){return b[t]},set:function(e){b[t]=e}})},k=u(b),E=0;while(k.length>E)T(k[E++]);x.constructor=C,C.prototype=x,f(r,"RegExp",C)}v("RegExp")},6062:function(t,e,n){"use strict";var i=n("6d61"),r=n("6566");t.exports=i("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},6566:function(t,e,n){"use strict";var i=n("9bf2").f,r=n("7c73"),s=n("e2cc"),a=n("0366"),o=n("19aa"),u=n("2266"),c=n("7dd0"),l=n("2626"),d=n("83ab"),f=n("f183").fastKey,p=n("69f3"),h=p.set,v=p.getterFor;t.exports={getConstructor:function(t,e,n,c){var l=t((function(t,i){o(t,l,e),h(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=i&&u(i,t[c],{that:t,AS_ENTRIES:n})})),p=v(e),g=function(t,e,n){var i,r,s=p(t),a=m(t,e);return a?a.value=n:(s.last=a={index:r=f(e,!0),key:e,value:n,previous:i=s.last,next:void 0,removed:!1},s.first||(s.first=a),i&&(i.next=a),d?s.size++:t.size++,"F"!==r&&(s.index[r]=a)),t},m=function(t,e){var n,i=p(t),r=f(e);if("F"!==r)return i.index[r];for(n=i.first;n;n=n.next)if(n.key==e)return n};return s(l.prototype,{clear:function(){var t=this,e=p(t),n=e.index,i=e.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete n[i.index],i=i.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=p(e),i=m(e,t);if(i){var r=i.next,s=i.previous;delete n.index[i.index],i.removed=!0,s&&(s.next=r),r&&(r.previous=s),n.first==i&&(n.first=r),n.last==i&&(n.last=s),d?n.size--:e.size--}return!!i},forEach:function(t){var e,n=p(this),i=a(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){i(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!m(this,t)}}),s(l.prototype,n?{get:function(t){var e=m(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),d&&i(l.prototype,"size",{get:function(){return p(this).size}}),l},setStrong:function(t,e,n){var i=e+" Iterator",r=v(e),s=v(i);c(t,e,(function(t,e){h(this,{type:i,target:t,state:r(t),kind:e,last:void 0})}),(function(){var t=s(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},"6d61":function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),s=n("94ca"),a=n("6eeb"),o=n("f183"),u=n("2266"),c=n("19aa"),l=n("861d"),d=n("d039"),f=n("1c7e"),p=n("d44e"),h=n("7156");t.exports=function(t,e,n){var v=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),m=v?"set":"add",b=r[t],x=b&&b.prototype,y=b,w={},q=function(t){var e=x[t];a(x,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(s(t,"function"!=typeof b||!(g||x.forEach&&!d((function(){(new b).entries().next()})))))y=n.getConstructor(e,t,v,m),o.REQUIRED=!0;else if(s(t,!0)){var _=new y,S=_[m](g?{}:-0,1)!=_,C=d((function(){_.has(1)})),T=f((function(t){new b(t)})),k=!g&&d((function(){var t=new b,e=5;while(e--)t[m](e,e);return!t.has(-0)}));T||(y=e((function(e,n){c(e,y,t);var i=h(new b,e,y);return void 0!=n&&u(n,i[m],{that:i,AS_ENTRIES:v}),i})),y.prototype=x,x.constructor=y),(C||k)&&(q("delete"),q("has"),v&&q("get")),(k||S)&&q(m),g&&x.clear&&delete x.clear}return w[t]=y,i({global:!0,forced:y!=b},w),p(y,t),g||n.setStrong(y,t,v),y}},"938a":function(t,e,n){},a15b:function(t,e,n){"use strict";var i=n("23e7"),r=n("44ad"),s=n("fc6a"),a=n("a640"),o=[].join,u=r!=Object,c=a("join",",");i({target:"Array",proto:!0,forced:u||!c},{join:function(t){return o.call(s(this),void 0===t?",":t)}})},a434:function(t,e,n){"use strict";var i=n("23e7"),r=n("23cb"),s=n("a691"),a=n("50c4"),o=n("7b0b"),u=n("65f0"),c=n("8418"),l=n("1dde"),d=n("ae40"),f=l("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,v=Math.min,g=9007199254740991,m="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!f||!p},{splice:function(t,e){var n,i,l,d,f,p,b=o(this),x=a(b.length),y=r(t,x),w=arguments.length;if(0===w?n=i=0:1===w?(n=0,i=x-y):(n=w-2,i=v(h(s(e),0),x-y)),x+n-i>g)throw TypeError(m);for(l=u(b,i),d=0;d<i;d++)f=y+d,f in b&&c(l,d,b[f]);if(l.length=i,n<i){for(d=y;d<x-i;d++)f=d+i,p=d+n,f in b?b[p]=b[f]:delete b[p];for(d=x;d>x-i+n;d--)delete b[d-1]}else if(n>i)for(d=x-i;d>y;d--)f=d+i-1,p=d+n-1,f in b?b[p]=b[f]:delete b[p];for(d=0;d<n;d++)b[d+y]=arguments[d+2];return b.length=x-i+n,l}})},baa5:function(t,e,n){var i=n("23e7"),r=n("e58c");i({target:"Array",proto:!0,forced:r!==[].lastIndexOf},{lastIndexOf:r})},bb2f:function(t,e,n){var i=n("d039");t.exports=!i((function(){return Object.isExtensible(Object.preventExtensions({}))}))},bf25:function(t,e,n){"use strict";n("938a")},e58c:function(t,e,n){"use strict";var i=n("fc6a"),r=n("a691"),s=n("50c4"),a=n("a640"),o=n("ae40"),u=Math.min,c=[].lastIndexOf,l=!!c&&1/[1].lastIndexOf(1,-0)<0,d=a("lastIndexOf"),f=o("indexOf",{ACCESSORS:!0,1:0}),p=l||!d||!f;t.exports=p?function(t){if(l)return c.apply(this,arguments)||0;var e=i(this),n=s(e.length),a=n-1;for(arguments.length>1&&(a=u(a,r(arguments[1]))),a<0&&(a=n+a);a>=0;a--)if(a in e&&e[a]===t)return a||0;return-1}:c},f183:function(t,e,n){var i=n("d012"),r=n("861d"),s=n("5135"),a=n("9bf2").f,o=n("90e3"),u=n("bb2f"),c=o("meta"),l=0,d=Object.isExtensible||function(){return!0},f=function(t){a(t,c,{value:{objectID:"O"+ ++l,weakData:{}}})},p=function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!s(t,c)){if(!d(t))return"F";if(!e)return"E";f(t)}return t[c].objectID},h=function(t,e){if(!s(t,c)){if(!d(t))return!0;if(!e)return!1;f(t)}return t[c].weakData},v=function(t){return u&&g.REQUIRED&&d(t)&&!s(t,c)&&f(t),t},g=t.exports={REQUIRED:!1,fastKey:p,getWeakData:h,onFreeze:v};i[c]=!0}}]);