(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(4),c=n.n(o),i=(n(22),n(1)),a=function(e){var t=e.name,n=e.email,r=e.id;return Object(i.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow",children:[Object(i.jsx)("img",{alt:"robots",height:"200",width:"200",src:"https://robohash.org/".concat(r,"?size=200x200")}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:t}),Object(i.jsx)("p",{children:n})]})]})},s=function(e){var t=e.robots;return t.length?Object(i.jsx)("div",{children:t.map((function(e,n){return Object(i.jsx)(a,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))}):Object(i.jsx)("div",{})},l=function(e){e.searchField;var t=e.searchChange;return Object(i.jsx)("div",{className:"pa2",children:Object(i.jsx)("input",{"aria-label":"search robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},u=function(e){return Object(i.jsx)("div",{style:{overflowY:"scroll",border:"3px solid black",height:"800px"},children:e.children})},d=n(11),h=n(12),b=n(17),f=n(16),j=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(i.jsx)("h1",{children:"Oooops. That is not good"}):this.props.children}}]),n}(r.Component),g=(n(24),n(3)),p="CHANGE_SEARCH_FIELD",O="REQUEST_ROBOTS_PENDING",v="REQUEST_ROBOTS_SUCCESS",w="REQUEST_ROBOTS_FAILED",y="FILTER_ROBOTS",m="INCREMENT_CLICKME_COUNTER",x=function(e,t){var n=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));return{type:y,payload:n}},E=function(){var e=Object(g.c)((function(e){return e.clickMe.counter})),t=Object(g.c)((function(e){return e.searchRobots.searchField})),n=Object(g.c)((function(e){return e.requestRobots.robots})),r=Object(g.c)((function(e){return e.filterRobots.robots})),o=Object(g.b)();return n.length||function(e){e({type:O}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:v,payload:t})})).catch((function(t){return e({type:w,payload:t})}))}(o),!n.length||r.length||t.length||o(x("",n)),Object(i.jsxs)("div",{className:"tc",children:[Object(i.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(i.jsxs)("button",{onClick:function(){o(function(e){return{type:m,payload:e+1}}(e))},children:["Click me (",e,")"]}),Object(i.jsx)(l,{searchChange:function(e){var t;o((t=e.target.value,{type:p,payload:t})),o(x(e.target.value,n))}}),Object(i.jsx)(u,{children:Object(i.jsx)(j,{children:Object(i.jsx)(s,{robots:r})})})]})},R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(29);var k=n(5),S=n(13),N=n(14),T=n(2),_={searchField:""},L={isPending:!1,robots:[],error:""},A={counter:0},F=Object(S.createLogger)(),U=Object(k.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case p:return Object(T.a)(Object(T.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case O:return Object(T.a)(Object(T.a)({},e),{},{isPending:!0});case v:return Object(T.a)(Object(T.a)({},e),{},{robots:t.payload,isPending:!1});case w:return Object(T.a)(Object(T.a)({},e),{},{error:t.payload,isPending:!1});default:return e}},filterRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case y:return Object(T.a)(Object(T.a)({},e),{},{robots:t.payload});default:return e}},clickMe:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case m:return Object(T.a)(Object(T.a)({},e),{},{counter:t.payload});default:return e}}}),W=Object(k.c)(U,Object(k.a)(N.a,F));c.a.render(Object(i.jsx)(g.a,{store:W,children:Object(i.jsx)(E,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");R?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}()}},[[31,1,2]]]);
//# sourceMappingURL=main.2a58d674.chunk.js.map