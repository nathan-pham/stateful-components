const t=(e,o)=>{o?e.children.length!==o.children.length?e.node.replaceWith(o.node):(((t,e)=>{if("text"==t.type)return void(t.parent.textContent=e.content);const o=[...t.props,...e.props],r=(e,o)=>{e.startsWith("on")?t.node[e.toLowerCase()]=o:t.node.setAttributeNS(null,e,o)},a=e=>{e.startsWith("on")?t.node[e.toLowerCase()]="":t.node.removeAttribute(e)};for(const s of o){const o=t.node.getAttribute(s),n=e.node.getAttribute(s);o&&o===n?n||a(s):r(s,n)}})(e,o),e.children.forEach(((e,r)=>{t(e,o.children[r])}))):e.node.remove()},e=t=>{let e=[];for(let o=0;o<t.length;o++)e.push(t[o].name);return e},o=(t,r)=>{if(!t)return null;const a=3==t.nodeType?"text":t.tagName.toLowerCase(),s={content:t.childNodes&&t.childNodes.length>0?null:t.textContent,props:"text"!==a&&t.hasAttributes()?e(t.attributes):[],node:t,parent:r,type:a};return s.children=[...t.childNodes].map((e=>o(e,t))),s},r=t=>(e,...o)=>((t,e={},...o)=>{const r=document.createElement(t);for(const[t,o]of Object.entries(e))t.startsWith("on")?r[t.toLowerCase()]=o:r.setAttributeNS(null,t,o);return o.flat(1/0).forEach((t=>{t&&r.appendChild("string"==typeof t?document.createTextNode(t):t)})),r})(t,e,o),a=r("a"),s=r("b"),n=r("i"),i=r("p"),d=r("q"),l=r("s"),c=r("br"),h=r("dd"),p=r("dl"),u=r("dt"),m=r("em"),b=r("h1"),f=r("h2"),g=r("h3"),v=r("h4"),w=r("h5"),y=r("h6"),x=r("hr"),C=r("li"),k=r("ol"),N=r("rp"),A=r("rt"),E=r("td"),R=r("th"),j=r("tr"),L=r("ul"),q=r("bdi"),S=r("bdo"),W=r("col"),_=r("del"),T=r("dfn"),O=r("div"),z=r("img"),H=r("ins"),M=r("kbd"),P=r("map"),B=r("nav"),D=r("pre"),F=r("rtc"),G=r("sub"),I=r("sup"),J=r("svg"),K=r("wbr"),Q=r("abbr"),U=r("area"),V=r("cite"),X=r("code"),Y=r("data"),Z=r("form"),$=r("main"),tt=r("mark"),et=r("ruby"),ot=r("samp"),rt=r("span"),at=r("time"),st=r("aside"),nt=r("audio"),it=r("input"),dt=r("label"),lt=r("meter"),ct=r("param"),ht=r("small"),pt=r("table"),ut=r("tbody"),mt=r("tfoot"),bt=r("thead"),ft=r("track"),gt=r("video"),vt=r("button"),wt=r("canvas"),yt=r("dialog"),xt=r("figure"),Ct=r("footer"),kt=r("header"),Nt=r("iframe"),At=r("legend"),Et=r("object"),Rt=r("option"),jt=r("output"),Lt=r("select"),qt=r("source"),St=r("strong"),Wt=r("address"),_t=r("article"),Tt=r("caption"),Ot=r("details"),zt=r("section"),Ht=r("summary"),Mt=r("picture"),Pt=r("colgroup"),Bt=r("datalist"),Dt=r("fieldset"),Ft=r("menuitem"),Gt=r("optgroup"),It=r("progress"),Jt=r("textarea"),Kt=r("blockquote"),Qt=r("figcaption");var Ut=Object.freeze({__proto__:null,a:a,b:s,i:n,p:i,q:d,s:l,br:c,dd:h,dl:p,dt:u,em:m,h1:b,h2:f,h3:g,h4:v,h5:w,h6:y,hr:x,li:C,ol:k,rp:N,rt:A,td:E,th:R,tr:j,ul:L,bdi:q,bdo:S,col:W,del:_,dfn:T,div:O,img:z,ins:H,kbd:M,map:P,nav:B,pre:D,rtc:F,sub:G,sup:I,svg:J,wbr:K,abbr:Q,area:U,cite:V,code:X,data:Y,form:Z,main:$,mark:tt,ruby:et,samp:ot,span:rt,time:at,aside:st,audio:nt,input:it,label:dt,meter:lt,param:ct,small:ht,table:pt,tbody:ut,tfoot:mt,thead:bt,track:ft,video:gt,button:vt,canvas:wt,dialog:yt,figure:xt,footer:Ct,header:kt,iframe:Nt,legend:At,object:Et,option:Rt,output:jt,select:Lt,source:qt,strong:St,address:Wt,article:_t,caption:Tt,details:Ot,section:zt,summary:Ht,picture:Mt,colgroup:Pt,datalist:Bt,fieldset:Dt,menuitem:Ft,optgroup:Gt,progress:It,textarea:Jt,blockquote:Kt,figcaption:Qt});export default(e,r)=>{const{initialState:a,render:s,style:n}="function"==typeof r?r():r;class i extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"});const e={set:(e,r,a)=>(e[r]=a,t(o(this.shadowRoot.firstChild,this.shadowRoot),o(s(this.state),this.shadowRoot)),!0)};if(this.state=new Proxy(a||{},e),this.shadowRoot.appendChild(s(this.state)),n){let t=document.createElement("style");t.textContent=n(),this.shadowRoot.appendChild(t)}}}customElements.define(e,i)};export{Ut as jsh};
