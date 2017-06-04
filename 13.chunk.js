webpackJsonp([13],{643:function(e,o,n){"use strict";function i(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function t(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function a(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}Object.defineProperty(o,"__esModule",{value:!0});var l=n(2),r=n.n(l),s=n(15),d=(n.n(s),n(685)),u=n.n(d),m=n(684),p=n.n(m),v=n(686),b=n.n(v),h=n(678),c=n(690),f=n(658),j=n(677),y=n(949),_=(n.n(y),function(){function e(e,o){for(var n=0;n<o.length;n++){var i=o[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(o,n,i){return n&&e(o.prototype,n),i&&e(o,i),o}}()),g=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,n,i,t){var a=o&&o.defaultProps,l=arguments.length-3;if(n||0===l||(n={}),n&&a)for(var r in a)void 0===n[r]&&(n[r]=a[r]);else n||(n=a||{});if(1===l)n.children=t;else if(l>1){for(var s=Array(l),d=0;d<l;d++)s[d]=arguments[d+3];n.children=s}return{$$typeof:e,type:o,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),O={name:{component:j.a,label:"Name",placeholder:"Insert your full name",required:!0},email:{component:j.e,label:"Email address",placeholder:"Insert a valid email address",required:!0}},T=g("div",{className:"form-group"},void 0,g("button",{type:"submit",className:"btn btn-primary"},void 0,"Submit")),L=function(e){var o=e.bindInput,n=e.model,i=e.onSubmit,t=e.schema,a=function(e){e.preventDefault(),i(n)};return g(j.f,{schema:t,fields:O,bindInput:o,onSubmit:a},void 0,T)},I=p()(u()(),b()(O),j.g.submitted)(L),M=g("h1",{},void 0,"Contact Us"),w=g("div",{},void 0,g("h3",{},void 0,"Email contact"),g("a",{href:"mailto:it@vision100.org"},void 0,"it@vision100.org")),V=g("h3",{},void 0,"Join our mailing list"),R=g("h2",{},void 0,"Thanks for joining the mailing list."),S=g("p",{},void 0,"Vision 100 sends out a bunch of stuff via email regularly including:"),k=g("ul",{},void 0,g("li",{},void 0,"New features,"),g("li",{},void 0,"Hot tips on best practices,"),g("li",{},void 0,"Other helpful content around the web,"),g("li",{},void 0,"Official updates,"),g("li",{},void 0,"Upcoming events")),C=g("p",{},void 0,"These emails are sent on a regular predictable timeline entirely reliable and also dependent on how much spare time we have..."),N=g("div",{},void 0,g("h3",{},void 0,"Mailing address"),g("p",{},void 0,"PO Box 5006"),g("p",{},void 0,"UTAS LPO"),g("p",{},void 0,"SANDY BAY TAS 7005")),P=function(e){function o(){i(this,o);var e=t(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return e.state={isOpen:!1,isModalOpen:!1},e.setFormRef=e.setFormRef.bind(e),e.handleOpen=e.handleOpen.bind(e),e.handleClose=e.handleClose.bind(e),e.handleSubmit=e.handleSubmit.bind(e),e.handleCollapse=e.handleCollapse.bind(e),e}return a(o,e),_(o,[{key:"setFormRef",value:function(e){this.formRef=e}},{key:"handleOpen",value:function(){this.setState({isModalOpen:!0})}},{key:"handleClose",value:function(){this.setState({isModalOpen:!1}),this.formRef.resetModel()}},{key:"handleSubmit",value:function(e){fetch("https://api.vision100it.org/mailing-list",{method:"post",mode:"cors",body:JSON.stringify({name:e.name,email:e.email}),headers:new Headers({"Content-Type":"application/json"})}).catch(this.handleOpen).then(this.handleOpen)}},{key:"handleCollapse",value:function(e){e.preventDefault(),this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this.state.isModalOpen;return g(f.a,{},void 0,g("div",{className:"contact-overlay"},void 0,g("div",{className:"site-wrapper site-wrapper-padding"},void 0,M,g("div",{},void 0,w,V,g(I,{getFormRef:this.setFormRef,onSubmit:this.handleSubmit}),e&&g(h.a,{onClose:this.handleClose},void 0,g("div",{className:y.default.modal},void 0,R,g("p",{},void 0,g("button",{className:y.default.button,onClick:this.handleClose},void 0,"Great")))),g("p",{},void 0,g("a",{href:"#",onClick:this.handleCollapse},void 0,"About our mailing lists")),g(c.a,{isOpened:this.state.isOpen},void 0,S,k,C),N))))}},{key:"formRef",set:function(e){this._formRef=e},get:function(){return this._formRef}}]),o}(r.a.Component);o.default=P},949:function(e,o){throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Node Sass does not yet support your current environment: Linux 64-bit with Unsupported runtime (57)\nFor more information on which environments are supported please see:\nhttps://github.com/sass/node-sass/releases/tag/v4.5.2\n    at module.exports (/home/travis/build/Vision100IT/v100it-template/node_modules/node-sass/lib/binding.js:13:13)\n    at Object.<anonymous> (/home/travis/build/Vision100IT/v100it-template/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (module.js:569:30)\n    at Module._extensions..js (module.js:580:10)\n    at Object.require.extensions.(anonymous function) [as .js] (/home/travis/build/Vision100IT/v100it-template/node_modules/babel-register/lib/node.js:152:7)\n    at Module.load (module.js:503:32)\n    at tryModuleLoad (module.js:466:12)\n    at Function.Module._load (module.js:458:3)\n    at Module.require (module.js:513:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/home/travis/build/Vision100IT/v100it-template/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (module.js:569:30)\n    at Module._extensions..js (module.js:580:10)\n    at Object.require.extensions.(anonymous function) [as .js] (/home/travis/build/Vision100IT/v100it-template/node_modules/babel-register/lib/node.js:152:7)\n    at Module.load (module.js:503:32)\n    at tryModuleLoad (module.js:466:12)\n    at runLoaders (/home/travis/build/Vision100IT/v100it-template/node_modules/webpack/lib/NormalModule.js:192:19)\n    at /home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:170:18\n    at loadLoader (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/loadLoader.js:27:11)\n    at iteratePitchingLoaders (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/home/travis/build/Vision100IT/v100it-template/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/home/travis/build/Vision100IT/v100it-template/node_modules/webpack/lib/NormalModule.js:179:3)\n    at NormalModule.build (/home/travis/build/Vision100IT/v100it-template/node_modules/webpack/lib/NormalModule.js:268:15)")}});