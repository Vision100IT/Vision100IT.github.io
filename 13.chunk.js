webpackJsonp([13],{1117:function(e,o){throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Node Sass does not yet support your current environment: Linux 64-bit with Unsupported runtime (59)\nFor more information on which environments are supported please see:\nhttps://github.com/sass/node-sass/releases/tag/v4.5.3\n    at module.exports (/home/travis/build/Vision100IT/v100it-template/node_modules/node-sass/lib/binding.js:13:13)\n    at Object.<anonymous> (/home/travis/build/Vision100IT/v100it-template/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (module.js:641:30)\n    at Object.Module._extensions..js (module.js:652:10)\n    at Module.load (module.js:560:32)\n    at tryModuleLoad (module.js:503:12)\n    at Function.Module._load (module.js:495:3)\n    at Module.require (module.js:585:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/home/travis/build/Vision100IT/v100it-template/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (module.js:641:30)\n    at Object.Module._extensions..js (module.js:652:10)\n    at Module.load (module.js:560:32)\n    at tryModuleLoad (module.js:503:12)\n    at Function.Module._load (module.js:495:3)\n    at Module.require (module.js:585:17)\n    at runLoaders (/home/travis/build/Vision100IT/v100it-template/node_modules/webpack/lib/NormalModule.js:194:19)\n    at /home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:170:18\n    at loadLoader (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/loadLoader.js:27:11)\n    at iteratePitchingLoaders (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/home/travis/build/Vision100IT/v100it-template/node_modules/webpack/lib/NormalModule.js:181:3)\n    at NormalModule.build (/home/travis/build/Vision100IT/v100it-template/node_modules/webpack/lib/NormalModule.js:274:15)")},560:function(e,o,n){"use strict";function t(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function i(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function a(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}Object.defineProperty(o,"__esModule",{value:!0});var l=n(1),r=n.n(l),d=n(9),s=(n.n(d),n(593)),u=n.n(s),m=n(594),p=n.n(m),v=n(595),h=n.n(v),b=n(597),c=n(618),f=n(574),j=n(598),y=n(1117),_=(n.n(y),function(){function e(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(o,n,t){return n&&e(o.prototype,n),t&&e(o,t),o}}()),g=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,n,t,i){var a=o&&o.defaultProps,l=arguments.length-3;if(n||0===l||(n={}),n&&a)for(var r in a)void 0===n[r]&&(n[r]=a[r]);else n||(n=a||{});if(1===l)n.children=i;else if(l>1){for(var d=Array(l),s=0;s<l;s++)d[s]=arguments[s+3];n.children=d}return{$$typeof:e,type:o,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}}(),O={name:{component:j.e,label:"Name",placeholder:"Insert your full name",required:!0},email:{component:j.b,label:"Email address",placeholder:"Insert a valid email address",required:!0}},L=g("div",{className:"form-group"},void 0,g("button",{type:"submit",className:"btn btn-primary"},void 0,"Submit")),M=function(e){var o=e.bindInput,n=e.model,t=e.onSubmit,i=e.schema,a=function(e){e.preventDefault(),t(n)};return g(j.a,{schema:i,fields:O,bindInput:o,onSubmit:a},void 0,L)},T=p()(u()(),h()(O),j.g.submitted)(M),w=g("h1",{},void 0,"Contact Us"),I=g("div",{},void 0,g("h3",{},void 0,"Email contact"),g("a",{href:"mailto:it@vision100.org"},void 0,"it@vision100.org")),R=g("h3",{},void 0,"Join our mailing list"),S=g("h2",{},void 0,"Thanks for joining the mailing list."),V=g("p",{},void 0,"Vision 100 sends out a bunch of stuff via email regularly including:"),k=g("ul",{},void 0,g("li",{},void 0,"New features,"),g("li",{},void 0,"Hot tips on best practices,"),g("li",{},void 0,"Other helpful content around the web,"),g("li",{},void 0,"Official updates,"),g("li",{},void 0,"Upcoming events")),C=g("p",{},void 0,"These emails are sent on a regular predictable timeline entirely reliable and also dependent on how much spare time we have..."),N=g("div",{},void 0,g("h3",{},void 0,"Mailing address"),g("p",{},void 0,"PO Box 5006"),g("p",{},void 0,"UTAS LPO"),g("p",{},void 0,"SANDY BAY TAS 7005")),P=function(e){function o(){t(this,o);var e=i(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return e.state={isOpen:!1,isModalOpen:!1},e.setFormRef=e.setFormRef.bind(e),e.handleOpen=e.handleOpen.bind(e),e.handleClose=e.handleClose.bind(e),e.handleSubmit=e.handleSubmit.bind(e),e.handleCollapse=e.handleCollapse.bind(e),e}return a(o,e),_(o,[{key:"setFormRef",value:function(e){this.formRef=e}},{key:"handleOpen",value:function(){this.setState({isModalOpen:!0})}},{key:"handleClose",value:function(){this.setState({isModalOpen:!1}),this.formRef.resetModel()}},{key:"handleSubmit",value:function(e){fetch("https://api.vision100it.org/mailing-list",{method:"post",mode:"cors",body:JSON.stringify({name:e.name,email:e.email}),headers:new Headers({"Content-Type":"application/json"})}).catch(this.handleOpen).then(this.handleOpen)}},{key:"handleCollapse",value:function(e){e.preventDefault(),this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this.state.isModalOpen;return g(f.a,{},void 0,g("div",{className:"contact-overlay"},void 0,g("div",{className:"site-wrapper site-wrapper-padding"},void 0,w,g("div",{},void 0,I,R,g(T,{getFormRef:this.setFormRef,onSubmit:this.handleSubmit}),e&&g(b.a,{onClose:this.handleClose},void 0,g("div",{className:y.default.modal},void 0,S,g("p",{},void 0,g("button",{className:y.default.button,onClick:this.handleClose},void 0,"Great")))),g("p",{},void 0,g("a",{href:"#",onClick:this.handleCollapse},void 0,"About our mailing lists")),g(c.a,{isOpened:this.state.isOpen},void 0,V,k,C),N))))}},{key:"formRef",set:function(e){this._formRef=e},get:function(){return this._formRef}}]),o}(r.a.Component);o.default=P}});