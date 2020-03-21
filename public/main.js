!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r="data/answers.json";function s(e){return(location.search.split(e+"=")[1]||"").split("&")[0]}function a(){const e="abcdefghijklmnopqrstuvwxyz";return e[Math.floor(Math.random()*e.length)]}const o=(e,t,n)=>{const r=document.createElement("div");return r.classList.add("level-selector"),e&&e.length&&(r.innerHTML=`\n      <label>\n        Nivel\n        <select name="levelSelector">\n          ${e.map(e=>`<option value="${e.value}" ${e.value===t?'selected="selected"':""}>${e.text}</option>`).join("")}\n        </select>\n      </label>\n    `,r.querySelector("select").addEventListener("change",n)),r},c=function(){let e;const t={"&amp;":"&","&gt;":">","&lt;":"<","&quot;":'"',"&#39;":"'"},n={},r=function(){const e=[];for(let r in t){const s=t[r];n[s]=r,e.push(s)}return new RegExp("("+e.join("|")+")","g")}(),s=function(e,t){return n[t]};return{reset:t=>{Array.from(document.querySelectorAll("#questions article")).forEach(e=>{e.parentNode.removeChild(e)}),c.render(t,e),document.querySelector("#result .q-point").innerHTML="&nbsp;",document.querySelector("#test-result .q-point").innerHTML="&nbsp;",document.querySelector("#submit-test").style.display=""},render:(t,n)=>{!function e(t,n){if(Array.isArray(t))return void t.forEach((function(t,n){e(t,n+1)}));if(void 0===t)return void console.warn("no function");let r=t.q;const s=t.type||"js";"html"===s?r=(e=>e=e.replace(/</g,"&lt;"))(r):"function"==typeof r?r=(e=>{let t=e.trim();return t=t.replace(/\s*\(\s*\)\s*=>\s*{/,""),t=t.replace(/function\s+q\d+\(\)\s*\{/,""),t=t.substring(0,t.length-1),l(t)})(r.toString()):r&&(r=l(r));const a=t.answerType||"checkbox",o=t.answers?u(t.id,t.answers,a):"",c=i(t.text,r,o,n,t.id,s,t);$("#questions").append(c)}(t),e=n,e&&e.afterRender(),c.correctAnswers(t)},isText:e=>"text"===e||"number"===e,correctAnswers:e=>{window.questions=e,window.correctAnswers=e.reduce((e,t)=>{let n;if(c.isText(t.answerType))n=t.answers[0].correct;else{const e=t.answers.find(e=>!0===e.correct);e&&(n=e.id)}return void 0!==n&&(e[t.id]=[n]),e},{})},htmlEncode:e=>e?String(e).replace(r,s):e,sanitizeAnswer:e=>{const t=e.type;let n=c.htmlEncode(e.text);switch(t){case"mixed":n=e.text;break;case"js":case"html":case"css":case"code":n=`<code>${n}</code>`}return n},checkPoints:(e,t)=>(t||(console.warn("no correctAnswers for ",e,e[0].id),console.warn("question",document.querySelector(`input[name="${e[0].id}"]`).parentNode.parentNode.parentNode),t=[]),e.map(e=>{let n,r;return c.isText(e.type)?(n=!0,r=e.value==t[0]?1:0):(n=t.indexOf(e.value)>=0,r=e.checked&&n?1:e.checked?-1:0),{...e,point:r,required:n}})),markResults:e=>{e.forEach(e=>{let t;const n=c.isText(e.type);t=n?document.querySelector(`input[name="${e.id}"]`):document.querySelector(`input[name="${e.id}"][value="${e.value}"]`);const r=t.parentNode;r.classList.remove("correct-answer"),r.classList.remove("required-answer"),r.classList.remove("incorrect-answer"),e.required&&e.checked?!n||e.point?r.classList.add("correct-answer"):r.classList.add("incorrect-answer"):e.required&&!e.checked?r.classList.add("required-answer"):!e.required&&e.checked&&r.classList.add("incorrect-answer")})}}}();Array.prototype.shuffle=function(){var e,t,n=this.length;if(0==n)return this;for(;--n;)e=Math.floor(Math.random()*(n+1)),t=this[n],this[n]=this[e],this[e]=t;return this};const l=e=>e=(e=(e=e.replace(/</g,"&lt;")).replace(/\}\}/g,"} } ")).replace(/\n\s*\n/g,"\n");const i=(e,t,n,r,s,a,o)=>`<article id="q-${s}">\n    <h2><span class="q-point"></span><span class="q-nr">${r=r?r+") ":""}</span>${e}</h2>\n    ${t?`<pre class="code" data-type="${a}">${t}</pre>`:""}\n    ${n?`<ol type="A" class="${o.answerDisplay||""}">\n         ${n}\n       </ol>`:""}\n    </article>`,u=(e,t,n)=>(shuffle&&t.shuffle(),"<li>"+(t||[]).map(t=>`<label><input class="answer" type="${n}" name="${e}" value="${c.isText(n)?"":t.id}">${c.sanitizeAnswer(t)}</label>`).join("</li><li>")+"</li>"),d=(e,t)=>{const n=c.checkPoints(e,t);c.markResults(n);const r=n.reduce((e,t)=>e+t.point,0);let s=t.length;return 0===s&&(s=1),(r>0?r:0)/s},p=(e,t)=>{const n=Object.keys(e).length;let r=0;for(let n in e)if(e.hasOwnProperty(n)){const s=d(e[n],t[n]),a=Math.round(100*s)/100;document.querySelector(`#q-${n} .q-point`).innerHTML=`${a}`,1===a&&document.querySelector(`#q-${n}`).classList.add("correct"),r+=s}r=r.toFixed(2),document.querySelector("#result .q-point").innerHTML=`${r}/${n}`,document.querySelector("#test-result .q-point").innerHTML=`${r}/${n}`,document.querySelector("#submit-test").disabled=!0,m(!0),s("test")&&window.print()},m=e=>{Array.from(document.querySelectorAll("input.answer")).forEach(t=>{"radio"===t.type||"checkbox"===t.type?t.disabled=e:t.readOnly=e})};window.submitTest=()=>{const e=Array.from(document.querySelectorAll("input.answer")).map(e=>{const t=e.type,n=c.isText(t);return{id:e.name,value:n?e.value:1*e.value,checked:n?""!==e.value:e.checked,type:t}}).reduce((e,t)=>(e[t.id]=e[t.id]||[],e[t.id].push(t),e),{});"{}"!==JSON.stringify(window.correctAnswers)?p(e,window.correctAnswers):$.ajax(r).done(t=>{p(e,t)})};let f=[];const h={init:async()=>{var e;await(e=["js/questions/js.js","https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.3/ace.js","https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.3/ext-beautify.js","https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.3/mode-javascript.js"],e=[].concat(e),Promise.all(e.map(e=>new Promise(t=>{const n=document.createElement("script");n.type="text/javascript",n.src=e,n.async=!1,n.onload=()=>{t()},document.getElementsByTagName("head")[0].appendChild(n)})))),f=Object.keys(ALL_QUESTIONS.reduce((e,t)=>(e[t.level]=t.level,t.level||console.warn("no level",t),e),{})).map(e=>({value:e,text:e}))},getLevelSelector:(e,t)=>o(f,e,t),afterRender:()=>{(()=>{const e={js:"ace/mode/javascript",html:"ace/mode/html"};$("article .code").each((function(t,n){const r=n.getAttribute("data-type"),s=ace.edit(n),a=ace.require("ace/ext/beautify"),o=s.getSession();s.setReadOnly(!0),s.getSession().selection.on("changeSelection",(function(e){s.getSession().selection.clearSelection()})),s.setTheme("ace/theme/monokai"),o.setMode(e[r]),a.beautify(o),s.setOptions({maxLines:1/0})}))})()},generateQuestions:e=>function(e,t){let n=e.filter(e=>e.level<=t&&e.answers&&e.answers.length);return shuffle&&n.shuffle(),n=n.slice(0,10),n.sort((e,t)=>e.level-t.level),n}(ALL_QUESTIONS,e)},y=[{value:10,text:"Clasa I. Adunare cu trecere peste ordin - &#128288;",generator:()=>v("+",3,"radio")},{value:11,text:"Clasa I. Adunare cu trecere peste ordin - &#9997;",generator:()=>v("+",3,"number")},{value:15,text:"Clasa I. Adunare - afla numarul necunoscut - &#128288;",generator:()=>v("+","","radio")},{value:16,text:"Clasa I. Adunare - afla numarul necunoscut - &#9997;",generator:()=>v("+","","number")},{value:20,text:"Clasa I. Scaderea cu trecere peste ordin - &#128288;",generator:()=>v("-",3,"radio")},{value:21,text:"Clasa I. Scaderea cu trecere peste ordin - &#9997;",generator:()=>v("-",3,"number")},{value:25,text:"Clasa I. Scaderea - afla numarul necunoscut - &#128288;",generator:()=>v("-","","radio")},{value:26,text:"Clasa I. Scaderea - afla numarul necunoscut - &#9997;",generator:()=>v("-","","number")},{value:27,text:"Clasa I. Adunare si Scaderea - &#9997;",generator:()=>v("","","number")}],v=(e,t,n="radio")=>{const r=[];for(let s=0;s<10;s++){const o=e||(Math.random()<.5?"+":"-");let c,l,i,u;"+"===o?(i=parseInt(79*Math.random())+20,u=i%10+1,c=parseInt(Math.random()*(i-u))+u,l=i-c):(c=parseInt(79*Math.random())+20,u=c%10+1,l=parseInt(Math.random()*(c-u))+u,i=c-l);const d=t||1+parseInt(2*Math.random());let p;const m=a();1===d?(p=c,c=m):2===d?(p=l,l=m):(p=i,i="?");const f=w(p,n);r.push({id:s,level:10,text:`${c} ${o} ${l} = ${i}`,answerType:n,answerDisplay:"inline-block",answers:f})}return r},w=(e,t)=>{const n=[];if("radio"===t){const t=4;let r=Math.min(parseInt(Math.random()*t),e);for(let s=0;s<t;s++,r--)n.push({id:s,text:e-r,correct:0===r})}else n.push({id:0,text:"",correct:e});return n},g={init:async()=>{},getLevelSelector:(e,t)=>o(y,e,t),afterRender:()=>{},generateQuestions:e=>{let t=y.find(t=>t.value===e);return t||(console.warn("TODO find closest generator"),t=y[0]),t.generator()}};window.shuffle=!0;(async()=>{let e,t;const n=function(){const e=s("test");if(!e)return null;const t=new Date,n=t.getMonth()+t.getDate()+t.getHours();return e.split(/[a-z]+/).map(e=>parseInt(e)-n).sort((e,t)=>e-t)}(),r=s("domain")||"js";let a=s("level");if(a=a?parseInt(a):10,"js"===r?e=h:"math"===r&&(e=g),await e.init(),n){shuffle=!1;const e=prompt("Enter you full name (firstname & lastname)"),r=new Date,s=`${r.getUTCFullYear()}-${r.getUTCMonth()+1}-${r.getUTCDate()}`,a=`${r.getHours()}:${r.getMinutes()}`;document.title=`test-${s}-${e}`,document.querySelector("#reset").style.display="none",document.querySelector("#student-name").innerHTML=e,document.querySelector("#test-date").innerHTML=`${s} ${a}`,t=function(e){return e.map(e=>ALL_QUESTIONS[e])}(n)}else"math"===r&&(document.querySelector("#test-result").style.display="none"),t=e.generateQuestions(a);const o=e.getLevelSelector(a,n=>{const r=parseInt(n.target.value),s=window.location.search.replace(`&level=${a}`,"");history.pushState(null,"",`${s}&level=${r}`),a=r,t=e.generateQuestions(a),c.reset(t)});document.querySelector("#questions").appendChild(o),c.render(t,e)})()}]);