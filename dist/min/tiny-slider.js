var tns=function(){Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var t=window,si=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window,ui=e.cancelAnimationFrame||e.mozCancelAnimationFrame||function(t){clearTimeout(t)};function li(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function ci(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function fi(t,e){return localStorage.setItem(t,e),e}function u(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function l(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function c(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function di(){var t=document,e=u(),n=l(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o=["calc(10px)","-moz-calc(10px)","-webkit-calc(10px)"],s=0;s<3;s++)if(r=o[s],i.style.width=r,10===i.offsetWidth){a=r.replace("(10px)","");break}}catch(t){}return e.fake?c(e,n):i.remove(),a}function vi(){var t,e,n=document,i=u(),a=l(i),r=n.createElement("div"),o=n.createElement("div");return r.style.cssText="width: 10px",o.style.cssText="float: left; width: 5.5px; height: 10px;",t=o.cloneNode(!0),r.appendChild(o),r.appendChild(t),i.appendChild(r),e=o.offsetTop!==t.offsetTop,i.fake?c(i,a):r.remove(),e}function pi(){var t,e=document,n=u(),i=l(n),a=e.createElement("div"),r=e.createElement("style"),o="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return r.type="text/css",a.className="tns-mq-test",n.appendChild(r),n.appendChild(a),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(e.createTextNode(o)),t=window.getComputedStyle?window.getComputedStyle(a).position:a.currentStyle.position,n.fake?c(n,i):a.remove(),"absolute"===t}function hi(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function mi(t){return("insertRule"in t?t.cssRules:t.rules).length}function yi(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var i="classList"in document.createElement("_"),gi=i?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},xi=i?function(t,e){gi(t,e)||t.classList.add(e)}:function(t,e){gi(t,e)||(t.className+=" "+e)},bi=i?function(t,e){gi(t,e)&&t.classList.remove(e)}:function(t,e){gi(t,e)&&(t.className=t.className.replace(e,""))};function wi(t,e){return t.hasAttribute(e)}function r(t){return void 0!==t.item}function Ci(t,e){if(t=r(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function Ai(t,e){t=r(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function Ti(t){t.style.cssText=""}function Ei(t){wi(t,"hidden")||Ci(t,{hidden:""})}function ki(t){wi(t,"hidden")&&Ai(t,"hidden")}function Ni(t){return 0<t.offsetWidth&&0<t.offsetHeight}function Oi(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),a=(e.length,0);a<e.length;a++){var r=e[a];if(void 0!==t.style[r])return r}return!1}function Mi(t){if(!window.getComputedStyle)return!1;var e,n=document,i=u(),a=l(i),r=n.createElement("p"),o=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?c(i,a):r.remove(),void 0!==e&&0<e.length&&"none"!==e}function Di(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var a=!1;try{var o=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,o)}catch(t){}var s=!!a&&{passive:!0};function Si(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&s;t.addEventListener(n,e[n],i)}}function Ii(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&s;t.removeEventListener(n,e[n],i)}}function Bi(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){this.topics[t]&&this.topics[t].forEach(function(t){t(e)})}}}var Li=function(w){w=li({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,fixedWidthViewportWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,freezable:!0,onInit:!1,useLocalStorage:!0},w||{});var C,A,E,f,t,T,s,k,u,N,n,O=document,M=window,l=13,c=32,d=33,v=34,p=35,h=36,m=37,y=38,g=39,x=40,e=!0;if(w.useLocalStorage){var i=navigator.userAgent,a={};try{(a=localStorage).tnsApp&&a.tnsApp!==i&&["tC","tSP","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){a.removeItem(t)}),a.tnsApp=i}catch(t){e=!1}localStorage||(e=!(a={})),e&&(a.tC?(C=ci(a.tC),A=ci(a.tSP),E=ci(a.tMQ),f=ci(a.tTf),t=ci(a.t3D),T=ci(a.tTDu),s=ci(a.tTDe),k=ci(a.tADu),u=ci(a.tADe),N=ci(a.tTE),n=ci(a.tAE)):(C=fi("tC",di()),A=fi("tSP",vi()),E=fi("tMQ",pi()),t=fi("t3D",Mi(f=fi("tTf",Oi("transform")))),T=fi("tTDu",Oi("transitionDuration")),s=fi("tTDe",Oi("transitionDelay")),k=fi("tADu",Oi("animationDuration")),u=fi("tADe",Oi("animationDelay")),N=fi("tTE",Di(T,"Transition")),n=fi("tAE",Di(k,"Animation"))))}else e=!1;e||(C=di(),A=vi(),E=pi(),t=Mi(f=Oi("transform")),T=Oi("transitionDuration"),s=Oi("transitionDelay"),k=Oi("animationDuration"),u=Oi("animationDelay"),N=Di(T,"Transition"),n=Di(k,"Animation")),E||(A=!1);for(var r=M.console&&"function"==typeof M.console.warn,o=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],b=o.length;b--;){var D=o[b];if("string"==typeof w[D]){var S=O.querySelector(w[D]);if(!S||!S.nodeName)return void(r&&console.warn("Can't find",w[D]));w[D]=S}}if(!(w.container.children&&w.container.children.length<1)){if(w.responsive){var I={},B=w.responsive;for(var L in B){var P=B[L];I[L]="number"==typeof P?{items:P}:P}w.responsive=I,I=null,0 in w.responsive&&delete(w=li(w,w.responsive[0])).responsive[0]}var W="carousel"===w.mode;if(!W){w.axis="horizontal",w.edgePadding=!1;var z="tns-fadeIn",H="tns-fadeOut",R=!1,q=w.animateNormal||"tns-normal";N&&n&&(z=w.animateIn||z,H=w.animateOut||H,R=w.animateDelay||R)}var j,F,V="horizontal"===w.axis,Q=O.createElement("div"),X=O.createElement("div"),Y=w.container,K=Y.parentNode,U=Y.children,G=U.length,J=w.responsive,_=[],Z=!1,$=0,tt=tn();if(w.fixedWidth)var et=en(K);if(J){(Z=Object.keys(J).map(function(t){return parseInt(t)}).sort(function(t,e){return t-e})).forEach(function(t){_=_.concat(Object.keys(J[t]))});var nt=[];_.forEach(function(t){nt.indexOf(t)<0&&nt.push(t)}),_=nt,pn()}var it,at,rt,ot,st,ut,lt,ct,ft=an("items"),dt="page"===an("slideBy")?ft:an("slideBy"),vt=w.nested,pt=an("gutter"),ht=an("edgePadding"),mt=an("fixedWidth"),yt=w.fixedWidthViewportWidth,gt=an("arrowKeys"),xt=an("speed"),bt=w.rewind,wt=!bt&&w.loop,Ct=an("autoHeight"),At=(ct=document.createElement("style"),lt&&ct.setAttribute("media",lt),document.querySelector("head").appendChild(ct),ct.sheet?ct.sheet:ct.styleSheet),Tt=w.lazyload,Et=[],kt=nn("edgePadding"),Nt=wt?(st=function(){{if(mt&&!yt)return G-1;var n=mt?"fixedWidth":"items",i=[];return(mt||w[n]<G)&&i.push(w[n]),Z&&0<=_.indexOf(n)&&Z.forEach(function(t){var e=J[t][n];e&&(mt||e<G)&&i.push(e)}),i.length||i.push(0),mt?Math.ceil(yt/Math.min.apply(null,i)):Math.max.apply(null,i)}}(),ut=W?Math.ceil((5*st-G)/2):4*st-G,ut=Math.max(st,ut),kt?ut+1:ut):0,Ot=W?G+2*Nt:G+Nt,Mt=!(!mt||wt||ht),Dt=!W||!wt,St=V?"left":"top",It="",Bt="",Lt=an("startIndex"),Pt=Lt?function(t){(t%=G)<0&&(t+=G);return t=Math.min(t,Ot-ft)}(Lt):W?Nt:0,Wt=Pt,zt=0,Ht=Ze(),Rt=w.swipeAngle,qt=!Rt||"?",jt=!1,Ft=w.onInit,Vt=new Bi,Qt=Y.id,Xt=" tns-slider tns-"+w.mode,Yt=Y.id||(ot=window.tnsId,window.tnsId=ot?ot+1:1,"tns"+window.tnsId),Kt=an("disable"),Ut=w.freezable,Gt=!!Kt||!!Ut&&G<=ft,Jt="inner"===vt?" !important":"",_t={click:Fn,keydown:function(t){switch((t=_n(t)).keyCode){case m:case y:case d:ge.disabled||Fn(t,-1);break;case g:case x:case v:xe.disabled||Fn(t,1);break;case h:jn(0,t);break;case p:jn(G-1,t)}}},Zt={click:function(t){jt&&qn();var e=(t=_n(t)).target||t.srcElement;for(;e!==Ce&&!wi(e,"data-nav");)e=e.parentNode;wi(e,"data-nav")&&jn((Ee=[].indexOf.call(be,e))+Nt,t)},keydown:function(t){var e=O.activeElement;if(!wi(e,"data-nav"))return;var n=(t=_n(t)).keyCode,i=[].indexOf.call(be,e),a=Ae.length,r=Ae.indexOf(i);w.navContainer&&(a=G,r=i);function o(t){return w.navContainer?t:Ae[t]}switch(n){case m:case d:0<r&&Gn(be[o(r-1)]);break;case y:case h:0<r&&Gn(be[o(0)]);break;case g:case v:r<a-1&&Gn(be[o(r+1)]);break;case x:case p:r<a-1&&Gn(be[o(a-1)]);break;case l:case c:jn((Ee=i)+Nt,t)}}},$t={mouseover:function(){De&&(Qn(),Se=!0)},mouseout:function(){Se&&(Vn(),Se=!1)}},te={visibilitychange:function(){O.hidden?De&&(Qn(),Be=!0):Be&&(Vn(),Be=!1)}},ee={keydown:function(t){switch((t=_n(t)).keyCode){case m:Fn(t,-1);break;case g:Fn(t,1)}}},ne={touchstart:ei,touchmove:ni,touchend:ii,touchcancel:ii},ie={mousedown:ei,mousemove:ni,mouseup:ii,mouseleave:ii},ae=nn("controls"),re=nn("nav"),oe=w.navAsThumbnails,se=nn("autoplay"),ue=nn("touch"),le=nn("mouseDrag"),ce="tns-slide-active",fe="tns-complete",de={load:xn,error:xn};if(ae)var ve,pe,he=an("controls"),me=an("controlsText"),ye=w.controlsContainer,ge=w.prevButton,xe=w.nextButton;if(re)var be,we=an("nav"),Ce=w.navContainer,Ae=[],Te=Ae,Ee=-1,ke=$e(),Ne=ke,Oe="tns-nav-active";if(se)var Me,De,Se,Ie,Be,Le=an("autoplay"),Pe=an("autoplayTimeout"),We="forward"===w.autoplayDirection?1:-1,ze=an("autoplayText"),He=an("autoplayHoverPause"),Re=w.autoplayButton,qe=an("autoplayResetOnVisibility"),je=["<span class='tns-visually-hidden'>"," animation</span>"];if(ue||le)var Fe,Ve={},Qe={},Xe=!1,Ye=0,Ke=V?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};if(ue)var Ue=an("touch");if(le)var Ge=an("mouseDrag");Gt&&(he=we=Ue=Ge=gt=Le=He=qe=!1),f&&(St=f,It="translate",t?(It+=V?"3d(":"3d(0px, ",Bt=V?", 0px, 0px)":", 0px)"):(It+=V?"X(":"Y(",Bt=")")),function(){Q.appendChild(X),K.insertBefore(Q,Y),X.appendChild(Y),j=en(X);var t="tns-outer",e="tns-inner",n=nn("gutter");if(W?V&&(nn("edgePadding")||n&&!w.fixedWidth)?t+=" tns-ovh":e+=" tns-ovh":n&&(t+=" tns-ovh"),Q.className=t,X.className=e,X.id=Yt+"-iw",Ct&&(X.className+=" tns-ah"),""===Y.id&&(Y.id=Yt),Xt+=A?" tns-subpixel":" tns-no-subpixel",Xt+=C?" tns-calc":" tns-no-calc",W&&(Xt+=" tns-"+w.axis),Y.className+=Xt,W&&N){var i={};i[N]=qn,Si(Y,i)}t=e=null;for(var a=0;a<G;a++){(p=U[a]).id||(p.id=Yt+"-item"+a),xi(p,"tns-item"),!W&&q&&xi(p,q),Ci(p,{"aria-hidden":"true",tabindex:"-1"})}if(wt||ht){for(var r=O.createDocumentFragment(),o=O.createDocumentFragment(),s=Nt;s--;){var u=s%G,l=U[u].cloneNode(!0);if(Ai(l,"id"),o.insertBefore(l,o.firstChild),W){var c=U[G-1-u].cloneNode(!0);Ai(c,"id"),r.appendChild(c)}}Y.insertBefore(r,Y.firstChild),Y.appendChild(o),U=Y.children}if(nn("autoHeight")||!W){var f=Y.querySelectorAll("img");yi(f,function(t){Si(t,de);var e=t.src;t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t.src=e}),si(function(){Cn(function(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}(f),function(){rt=!0})})}for(var d=Pt,v=Pt+Math.min(G,ft);d<v;d++){var p;Ci(p=U[d],{"aria-hidden":"false"}),Ai(p,["tabindex"]),xi(p,ce),W||(p.style.left=100*(d-Pt)/ft+"%",xi(p,z),bi(p,q))}if(W&&V&&(A?(hi(At,"#"+Yt+" > .tns-item","font-size:"+M.getComputedStyle(U[0]).fontSize+";",mi(At)),hi(At,"#"+Yt,"font-size:0;",mi(At))):yi(U,function(t,e){var n;t.style.marginLeft=(n=e,C?C+"("+100*n+"% / "+Ot+")":100*n/Ot+"%")})),E){var h=rn(w.edgePadding,w.gutter,w.fixedWidth,w.speed);hi(At,"#"+Yt+"-iw",h,mi(At)),W&&(h=V?"width:"+on(w.fixedWidth,w.gutter,w.items)+";":"",T&&(h+=cn(xt)),hi(At,"#"+Yt,h,mi(At))),(V||w.gutter)&&(h=sn(w.fixedWidth,w.gutter,w.items)+un(w.gutter),W||(T&&(h+=cn(xt)),k&&(h+=fn(xt))),hi(At,"#"+Yt+" > .tns-item",h,mi(At)))}else if(X.style.cssText=rn(ht,pt,mt),W&&V&&(Y.style.width=on(mt,pt,ft)),V||pt){h=sn(mt,pt,ft)+un(pt);hi(At,"#"+Yt+" > .tns-item",h,mi(At))}if(V||Kt||(kn(),ai()),J&&E&&Z.forEach(function(t){var e,n=J[t],i="",a="",r="",o=an("items",t),s=an("fixedWidth",t),u=an("speed",t),l=an("edgePadding",t),c=an("gutter",t);("edgePadding"in n||"gutter"in n)&&(i="#"+Yt+"-iw{"+rn(l,c,s,u)+"}"),W&&V&&("fixedWidth"in n||"gutter"in n||"items"in n)&&(a="width:"+on(s,c,o)+";"),T&&"speed"in n&&(a+=cn(u)),a&&(a="#"+Yt+"{"+a+"}"),("fixedWidth"in n||nn("fixedWidth")&&"gutter"in n||!W&&"items"in n)&&(r+=sn(s,c,o)),"gutter"in n&&(r+=un(c)),!W&&"speed"in n&&(T&&(r+=cn(u)),k&&(r+=fn(u))),r&&(r="#"+Yt+" > .tns-item{"+r+"}"),(e=i+a+r)&&At.insertRule("@media (min-width: "+t/16+"em) {"+e+"}",At.cssRules.length)}),W&&!Kt&&Pn(),navigator.msMaxTouchPoints&&(xi(Y,"ms-touch"),Si(Y,{scroll:Jn}),Nn()),re){var m=W?Nt:0;if(Ce)Ci(Ce,{"aria-label":"Carousel Pagination"}),yi(be=Ce.children,function(t,e){Ci(t,{"data-nav":e,tabindex:"-1","aria-selected":"false","aria-controls":U[m+e].id})});else{var y="",g=oe?"":"hidden";for(d=0;d<G;d++)y+='<button data-nav="'+d+'" tabindex="-1" aria-selected="false" aria-controls="'+U[m+d].id+'" '+g+' type="button"></button>';y='<div class="tns-nav" aria-label="Carousel Pagination">'+y+"</div>",Q.insertAdjacentHTML("afterbegin",y),Ce=Q.querySelector(".tns-nav"),be=Ce.children}if(ri(),T){var x=T.substring(0,T.length-18).toLowerCase();h="transition: all "+xt/1e3+"s";x&&(h="-"+x+"-"+h),hi(At,"[aria-controls^="+Yt+"-item]",h,mi(At))}Ci(be[ke],{tabindex:"0","aria-selected":"true"}),xi(be[ke],Oe),Si(Ce,Zt),we||Ei(Ce)}if(se){var b=Le?"stop":"start";Re?Ci(Re,{"data-action":b}):w.autoplayButtonOutput&&(X.insertAdjacentHTML("beforebegin",'<button data-action="'+b+'" type="button">'+je[0]+b+je[1]+ze[0]+"</button>"),Re=Q.querySelector("[data-action]")),Re&&Si(Re,{click:Un}),Le?(Yn(),He&&Si(Y,$t),qe&&Si(Y,te)):Re&&Ei(Re)}ae&&(ye||ge&&xe?(ye&&(ge=ye.children[0],xe=ye.children[1],Ci(ye,{"aria-label":"Carousel Navigation",tabindex:"0"}),Ci(ye.children,{"aria-controls":Yt,tabindex:"-1"})),Ci(ge,{"data-controls":"prev"}),Ci(xe,{"data-controls":"next"})):(Q.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+Yt+'" type="button">'+me[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+Yt+'" type="button">'+me[1]+"</button></div>"),ye=Q.querySelector(".tns-controls"),ge=ye.children[0],xe=ye.children[1]),ve=Mn(ge),pe=Mn(xe),In(),ye?Si(ye,_t):(Si(ge,_t),Si(xe,_t)),he||Ei(ye)),W&&(Ue&&Si(Y,ne),Ge&&Si(Y,ie)),gt&&Si(O,ee),"inner"===vt?Vt.on("outerResized",function(){vn(),Vt.emit("innerLoaded",oi())}):Si(M,{resize:dn}),"outer"===vt?Vt.on("innerLoaded",wn):!Ct&&W||Kt||wn(),gn(),hn(),mn(),Vt.on("indexChanged",An),"function"==typeof Ft&&Ft(oi()),"inner"===vt&&Vt.emit("innerLoaded",oi()),Kt&&yn(!0),F=!0}();var Je=wt?W?function(){var t=zt,e=Ht;if(t+=dt,e-=dt,ht)t+=1,e-=1;else if(mt){var n=pt||0;n<et%(mt+n)&&(e-=1)}Nt&&(e<Pt?Pt-=G:Pt<t&&(Pt+=G))}:function(){if(Ht<Pt)for(;zt+G<=Pt;)Pt-=G;else if(Pt<zt)for(;Pt<=Ht-G;)Pt+=G}:function(){Pt=zt<=Pt&&Pt<=Ht?Pt:Ht<Pt?Ht:zt},_e=W?function(t,e){var n,i,a,r,o,s,u,l,c,f,d;e||(e=Ln()),Mt&&Pt===Ht&&(e=-((mt+pt)*Ot-j)+"px"),T||!t?(Wn(e),t&&Ni(Y)||qn()):(n=Y,i=St,a=It,r=Bt,o=e,s=xt,u=qn,l=Math.min(s,10),c=0<=o.indexOf("%")?"%":"px",o=o.replace(c,""),f=Number(n.style[i].replace(a,"").replace(r,"").replace(c,"")),d=(o-f)/s*l,setTimeout(function t(){s-=l,f+=d,n.style[i]=a+f+c+r,0<s?setTimeout(t,l):u()},l)),V||ai()}:function(t){Et=[];var e={};e[N]=e[n]=qn,Ii(U[Wt],e),Si(U[Pt],e),zn(Wt,z,H,!0),zn(Pt,q,z),N&&n&&t||qn()};return{getInfo:oi,events:Vt,goTo:jn,play:function(){Le&&!De&&(Yn(),Ie=!1)},pause:function(){De&&(Kn(),Ie=!0)},isOn:F,updateSliderHeight:En,rebuild:function(){return Li(w)},destroy:function(){if(Ii(M,{resize:dn}),Ii(O,ee),At.disabled=!0,wt)for(var t=Nt;t--;)W&&U[0].remove(),U[U.length-1].remove();var e=["tns-item",ce];W||(e=e.concat("tns-normal",z));for(var n=G;n--;){var i=U[n];0<=i.id.indexOf(Yt+"-item")&&(i.id=""),e.forEach(function(t){bi(i,t)})}if(Ai(U,["style","aria-hidden","tabindex"]),U=Yt=G=Ot=Nt=null,he&&(Ii(ye,_t),w.controlsContainer&&(Ai(ye,["aria-label","tabindex"]),Ai(ye.children,["aria-controls","aria-disabled","tabindex"])),ye=ge=xe=null),we&&(Ii(Ce,Zt),w.navContainer&&(Ai(Ce,["aria-label"]),Ai(be,["aria-selected","aria-controls","tabindex"])),Ce=be=null),Le&&(clearInterval(Me),Re&&Ii(Re,{click:Un}),Ii(Y,$t),Ii(Y,te),w.autoplayButton&&Ai(Re,["data-action"])),Y.id=Qt||"",Y.className=Y.className.replace(Xt,""),Ti(Y),W&&N){var a={};a[N]=qn,Ii(Y,a)}Ii(Y,ne),Ii(Y,ie),K.insertBefore(Y,Q),Q.remove(),Q=X=Y=Pt=Wt=ft=dt=ke=Ne=ae=Ae=Te=this.getInfo=this.events=this.goTo=this.play=this.pause=this.destroy=null,this.isOn=F=!1}}}function Ze(){return W||wt?Math.max(0,Ot-ft):Ot-1}function $e(t){if(void 0===t&&(t=Pt),W){for(;t<Nt;)t+=G;t-=Nt}return t?t%G:t}function tn(){return M.innerWidth||O.documentElement.clientWidth||O.body.clientWidth}function en(t){return t.clientWidth||en(t.parentNode)}function nn(e){var n=w[e];return!n&&Z&&0<=_.indexOf(e)&&Z.forEach(function(t){J[t][e]&&(n=!0)}),n}function an(t,e){e=e||tt;var n,i={slideBy:"page",edgePadding:!1};if(!W&&t in i)n=i[t];else if("items"===t&&an("fixedWidth"))n=Math.floor(et/(an("fixedWidth")+an("gutter")));else if("autoHeight"===t&&"outer"===vt)n=!0;else if(n=w[t],Z&&0<=_.indexOf(t))for(var a=0,r=Z.length;a<r;a++){var o=Z[a];if(!(o<=e))break;t in J[o]&&(n=J[o][t])}return"slideBy"===t&&"page"===n&&(n=an("items")),n}function rn(t,e,n,i){var a="";if(t){var r=t;e&&(r+=e),a=n?"margin: 0px "+(et%(n+e)+e)/2+"px":V?"margin: 0 "+t+"px 0 "+r+"px;":"padding: "+r+"px 0 "+t+"px 0;"}else if(e&&!n){var o="-"+e+"px";a="margin: 0 "+(V?o+" 0 0":"0 "+o+" 0")+";"}return T&&i&&(a+=cn(i)),a}function on(t,e,n){return t?(t+e)*Ot+"px":C?C+"("+100*Ot+"% / "+n+")":100*Ot/n+"%"}function sn(t,e,n){var i="";if(V){if(i="width:",t)i+=t+e+"px";else{var a=W?Ot:n;i+=C?C+"(100% / "+a+")":100/a+"%"}i+=Jt+";"}return i}function un(t){var e="";!1!==t&&(e=(V?"padding-":"margin-")+(V?"right":"bottom")+": "+t+"px;");return e}function ln(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function cn(t){return ln(T,18)+"transition-duration:"+t/1e3+"s;"}function fn(t){return ln(k,17)+"animation-duration:"+t/1e3+"s;"}function dn(t){si(function(){vn(_n(t))})}function vn(t){if(F){tt=tn(),"outer"===vt&&Vt.emit("outerResized",oi(t));var e=$,n=Pt,i=ft,a=Gt,r=!1;if(mt&&(et=en(Q)),j=en(X),Z&&pn(),e!==$||mt){var o=gt,s=Ct,u=mt,l=ht,c=pt,f=Kt;if(ft=an("items"),dt=an("slideBy"),Kt=an("disable"),Gt=!!Kt||!!Ut&&G<=ft,ft!==i&&(Ht=Ze(),Je()),Kt!==f&&yn(Kt),Gt!==a&&(Gt&&(Pt=W?Nt:0),hn()),e!==$&&(xt=an("speed"),ht=an("edgePadding"),pt=an("gutter"),mt=an("fixedWidth"),Kt||mt===u||(r=!0),(Ct=an("autoHeight"))!==s&&(Ct||(X.style.height=""))),(gt=!Gt&&an("arrowKeys"))!==o&&(gt?Si(O,ee):Ii(O,ee)),ae){var d=he,v=me;he=!Gt&&an("controls"),me=an("controlsText"),he!==d&&(he?ki(ye):Ei(ye)),me!==v&&(ge.innerHTML=me[0],xe.innerHTML=me[1])}if(re){var p=we;(we=!Gt&&an("nav"))!==p&&(we?(ki(Ce),ri()):Ei(Ce))}if(ue){var h=Ue;(Ue=!Gt&&an("touch"))!==h&&W&&(Ue?Si(Y,ne):Ii(Y,ne))}if(le){var m=Ge;(Ge=!Gt&&an("mouseDrag"))!==m&&W&&(Ge?Si(Y,ie):Ii(Y,ie))}if(se){var y=Le,g=He,x=qe,b=ze;if(Gt?Le=He=qe=!1:(Le=an("autoplay"))?(He=an("autoplayHoverPause"),qe=an("autoplayResetOnVisibility")):He=qe=!1,ze=an("autoplayText"),Pe=an("autoplayTimeout"),Le!==y&&(Le?(Re&&ki(Re),De||Ie||Yn()):(Re&&Ei(Re),De&&Kn())),He!==g&&(He?Si(Y,$t):Ii(Y,$t)),qe!==x&&(qe?Si(O,te):Ii(O,te)),Re&&ze!==b){var w=Le?1:0,C=Re.innerHTML,A=C.length-b[w].length;C.substring(A)===b[w]&&(Re.innerHTML=C.substring(0,A)+ze[w])}}if(!E){if(Gt||ht===l&&pt===c||(X.style.cssText=rn(ht,pt,mt)),W&&V&&(mt!==u||pt!==c||ft!==i)&&(Y.style.width=on(mt,pt,ft)),V&&(ft!==i||pt!==c||mt!=u)){var T=sn(mt,pt,ft)+un(pt);At.removeRule(mi(At)-1),hi(At,"#"+Yt+" > .tns-item",T,mi(At))}mt||(r=!0)}Pt!==n&&(Vt.emit("indexChanged",oi()),r=!0),ft!==i&&(An(),function(){if(!W){for(var t=Pt+Math.min(G,ft),e=Ot;e--;){var n=U[e];Pt<=e&&e<t?(xi(n,"tns-moving"),n.style.left=100*(e-Pt)/ft+"%",xi(n,z),bi(n,q)):n.style.left&&(n.style.left="",xi(n,q),bi(n,z)),bi(n,H)}setTimeout(function(){yi(U,function(t){bi(t,"tns-moving")})},300)}}(),navigator.msMaxTouchPoints&&Nn())}V||Kt||(kn(),ai(),r=!0),r&&(Pn(),Wt=Pt),mn(!0),!Ct&&W||Kt||wn()}}function pn(){$=0,Z.forEach(function(t,e){t<=tt&&($=e+1)})}function hn(){var t="tns-transparent";if(Gt){if(!at){if(ht&&(X.style.margin="0px"),Nt)for(var e=Nt;e--;)W&&xi(U[e],t),xi(U[Ot-e-1],t);at=!0}}else if(at){if(ht&&!mt&&E&&(X.style.margin=""),Nt)for(e=Nt;e--;)W&&bi(U[e],t),bi(U[Ot-e-1],t);at=!1}}function mn(t){mt&&ht&&(Gt||et<=mt+pt?"0px"!==X.style.margin&&(X.style.margin="0px"):t&&(X.style.cssText=rn(ht,pt,mt)))}function yn(t){var e=U.length;if(t){if(At.disabled=!0,Y.className=Y.className.replace(Xt.substring(1),""),Ti(Y),wt)for(var n=Nt;n--;)W&&Ei(U[n]),Ei(U[e-n-1]);if(V&&W||Ti(X),!W)for(var i=Pt,a=Pt+G;i<a;i++){Ti(r=U[i]),bi(r,z),bi(r,q)}}else{if(At.disabled=!1,Y.className+=Xt,V||kn(),Pn(),wt)for(n=Nt;n--;)W&&ki(U[n]),ki(U[e-n-1]);if(!W)for(i=Pt,a=Pt+G;i<a;i++){var r=U[i],o=i<Pt+ft?z:q;r.style.left=100*(i-Pt)/ft+"%",xi(r,o)}}}function gn(){if(Tt&&!Kt){var t=Pt,e=Pt+ft;for(ht&&(t-=1,e+=1),t=Math.max(t,0),e=Math.min(e,Ot);t<e;t++)yi(U[t].querySelectorAll(".tns-lazy-img"),function(t){var e,n={};n[N]=function(t){t.stopPropagation()},Si(t,n),gi(t,"loaded")||(t.src=(e="data-src",t.getAttribute(e)),xi(t,"loaded"))})}}function xn(t){var e=Zn(t);xi(e,fe),Ii(e,de)}function bn(t,e){for(var n=[],i=t,a=t+e;i<a;i++)yi(U[i].querySelectorAll("img"),function(t){n.push(t)});return n}function wn(){var t=Ct?bn(Pt,ft):bn(Nt,G);si(function(){Cn(t,En)})}function Cn(n,t){return rt?t():(n.forEach(function(t,e){gi(t,fe)&&n.splice(e,1)}),n.length?void si(function(){Cn(n,t)}):t())}function An(){gn(),function(){for(var t=Pt+Math.min(G,ft),e=Ot;e--;){var n=U[e];Pt<=e&&e<t?wi(n,"tabindex")&&(Ci(n,{"aria-hidden":"false"}),Ai(n,["tabindex"]),xi(n,ce)):(wi(n,"tabindex")||Ci(n,{"aria-hidden":"true",tabindex:"-1"}),gi(n,ce)&&bi(n,ce))}}(),In(),ri(),function(){if(we&&(ke=-1!==Ee?Ee:$e(),Ee=-1,ke!==Ne)){var t=be[Ne],e=be[ke];Ci(t,{tabindex:"-1","aria-selected":"false"}),Ci(e,{tabindex:"0","aria-selected":"true"}),bi(t,Oe),xi(e,Oe)}}()}function Tn(t,e){for(var n=[],i=t,a=t+e;i<a;i++)n.push(U[i].offsetHeight);return Math.max.apply(null,n)}function En(){var t=Ct?Tn(Pt,ft):Tn(Nt,G);X.style.height!==t&&(X.style.height=t+"px")}function kn(){it=[0];for(var t,e=U[0].getBoundingClientRect().top,n=1;n<Ot;n++)t=U[n].getBoundingClientRect().top,it.push(t-e)}function Nn(){Q.style.msScrollSnapPointsX="snapInterval(0%, "+100/ft+"%)"}function On(t){return t.nodeName.toLowerCase()}function Mn(t){return"button"===On(t)}function Dn(t){return"true"===t.getAttribute("aria-disabled")}function Sn(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function In(){if(he&&!bt&&!wt){var t=ve?ge.disabled:Dn(ge),e=pe?xe.disabled:Dn(xe),n=Pt===zt,i=!bt&&Pt===Ht;n&&!t&&Sn(ve,ge,!0),!n&&t&&Sn(ve,ge,!1),i&&!e&&Sn(pe,xe,!0),!i&&e&&Sn(pe,xe,!1)}}function Bn(t,e){T&&(t.style[T]=e)}function Ln(){var t;V?t=mt?-(mt+pt)*Pt+"px":100*-Pt/(f?Ot:ft)+"%":t=-it[Pt]+"px";return t}function Pn(t){Bn(Y,"0s"),Wn(t),setTimeout(function(){Bn(Y,"")},0)}function Wn(t,e){t||(t=Ln()),Y.style[St]=It+t+Bt}function zn(t,e,n,i){var a=t+ft;wt||(a=Math.min(a,Ot));for(var r=t;r<a;r++){var o=U[r];i||(o.style.left=100*(r-Pt)/ft+"%"),R&&s&&(o.style[s]=o.style[u]=R*(r-t)/1e3+"s"),bi(o,e),xi(o,n),i&&Et.push(o)}}function Hn(t,e){var n,i;Dt&&Je(),(Pt!==Wt||e)&&(Vt.emit("indexChanged",oi()),Vt.emit("transitionStart",oi()),De&&t&&0<=["click","keydown"].indexOf(t.type)&&Kn(),jt=!0,isNaN(n)&&(n=xt),De&&!Ni(Y)&&(n=0),_e(n,i))}function Rn(t){return t.toLowerCase().replace(/-/g,"")}function qn(t){if(W||jt){if(Vt.emit("transitionEnd",oi(t)),!W&&0<Et.length)for(var e=0;e<Et.length;e++){var n=Et[e];n.style.left="",u&&s&&(n.style[u]="",n.style[s]=""),bi(n,H),xi(n,q)}if(!t||!W&&t.target.parentNode===Y||t.target===Y&&Rn(t.propertyName)===Rn(St)){if(!Dt){var i=Pt;Je(),Pt!==i&&(Vt.emit("indexChanged",oi()),Pn())}Ct&&wn(),"inner"===vt&&Vt.emit("innerLoaded",oi()),jt=!1,Ne=ke,Wt=Pt}}}function jn(t,e){if(!Gt)if("prev"===t)Fn(e,-1);else if("next"===t)Fn(e,1);else{jt&&qn();var n=$e(),i=0;if(n<0&&(n+=G),"first"===t)i=-n;else if("last"===t)i=W?G-ft-n:G-1-n;else if("number"!=typeof t&&(t=parseInt(t)),!isNaN(t)){var a=$e(t);a<0&&(a+=G),i=a-n}$e(Pt+=i)!==$e(Wt)&&Hn(e)}}function Fn(t,e){var n;if(jt&&qn(),!e){for(var i=(t=_n(t)).target||t.srcElement;i!==ye&&[ge,xe].indexOf(i)<0;)i=i.parentNode;var a=[ge,xe].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(bt){if(Pt===zt&&-1===e)return void jn("last",t);if(Pt===Ht&&1===e)return void jn(0,t)}e&&(Pt+=dt*e,Hn(n||t&&"keydown"===t.type?t:null))}function Vn(){Me=setInterval(function(){Fn(null,We)},Pe),De=!0}function Qn(){clearInterval(Me),De=!1}function Xn(t,e){Ci(Re,{"data-action":t}),Re.innerHTML=je[0]+t+je[1]+e}function Yn(){Vn(),Re&&Xn("stop",ze[1])}function Kn(){Qn(),Re&&Xn("start",ze[0])}function Un(){De?(Kn(),Ie=!0):(Yn(),Ie=!1)}function Gn(t){t.focus()}function Jn(){_e(0,Y.scrollLeft),Wt=Pt}function _n(t){return $n(t=t||M.event)?t.changedTouches[0]:t}function Zn(t){return t.target||M.event.srcElement}function $n(t){return 0<=t.type.indexOf("touch")}function ti(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function ei(t){jt&&qn(),Xe=!0,ui(Ye),Ye=si(function(){!function t(e){if(!qt)return void(Xe=!1);ui(Ye);Xe&&(Ye=si(function(){t(e)}));"?"===qt&&Qe.x!==Ve.x&&Qe.y!==Ve.y&&(o=Qe.y-Ve.y,s=Qe.x-Ve.x,n=Math.atan2(o,s)*(180/Math.PI),i=Rt,a=!1,r=Math.abs(90-Math.abs(n)),90-i<=r?a="horizontal":r<=i&&(a="vertical"),qt=a===w.axis);var n,i,a,r;var o,s;if(qt){Vt.emit($n(e)?"touchMove":"dragMove",oi(e));var u=Fe,l=Ke(Qe,Ve);if(!V||mt)u+=l,u+="px";else{var c=f?l*ft*100/(j*Ot):100*l/j;u+=c,u+="%"}Y.style[St]=It+u+Bt}}(t)});var e=_n(t);Vt.emit($n(t)?"touchStart":"dragStart",oi(t)),!$n(t)&&0<=["img","a"].indexOf(On(Zn(t)))&&ti(t),Qe.x=Ve.x=parseInt(e.clientX),Qe.y=Ve.y=parseInt(e.clientY),Fe=parseFloat(Y.style[St].replace(It,"").replace(Bt,"")),Bn(Y,"0s")}function ni(t){if(Xe){var e=_n(t);Qe.x=parseInt(e.clientX),Qe.y=parseInt(e.clientY)}}function ii(i){if(Rt&&(qt="?"),Xe){ui(Ye),Bn(Y,""),Xe=!1;var t=_n(i);Qe.x=parseInt(t.clientX),Qe.y=parseInt(t.clientY);var a=Ke(Qe,Ve);if(5<=Math.abs(a)){if(!$n(i)){var n=Zn(i);Si(n,{click:function t(e){ti(e),Ii(n,{click:t})}})}Ye=si(function(){if(Vt.emit($n(i)?"touchEnd":"dragEnd",oi(i)),V){var t=-a*ft/j;t=0<a?Math.floor(t):Math.ceil(t),Pt+=t}else{var e=-(Fe+a);if(e<=0)Pt=zt;else if(e>=it[it.length-1])Pt=Ht;else for(var n=0;n++,Pt=a<0?n+1:n,n<Ot&&e>=it[n+1];);}Hn(i,a)})}}}function ai(){X.style.height=it[Pt+ft]-it[Pt]+"px"}function ri(){we&&!oe&&(!function(){Ae=[];for(var t=$e()%ft;t<G;)W&&!wt&&G<t+ft&&(t=G-ft),Ae.push(t),t+=ft;(wt&&Ae.length*ft<G||!wt&&0<Ae[0])&&Ae.unshift(0)}(),Ae!==Te&&(yi(be,function(t,e){Ae.indexOf(e)<0?Ei(t):ki(t)}),Te=Ae))}function oi(t){return{container:Y,slideItems:U,navContainer:Ce,navItems:be,controlsContainer:ye,hasControls:ae,prevButton:ge,nextButton:xe,items:ft,slideBy:dt,cloneCount:Nt,slideCount:G,slideCountNew:Ot,index:Pt,indexCached:Wt,navCurrentIndex:ke,navCurrentIndexCached:Ne,visibleNavIndexes:Ae,visibleNavIndexesCached:Te,sheet:At,event:t||{}}}r&&console.warn("No slides found in",w.container)};return Li}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
