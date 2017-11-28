webpackJsonp([10],{1224:function(e,o){e.exports={modal:"feature__modal___HePQ7",button:"feature__button___2Dw7O"}},669:function(e,o,t){"use strict";function n(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function r(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function i(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}Object.defineProperty(o,"__esModule",{value:!0});var a=t(3),l=t.n(a),s=t(13),u=(t.n(s),t(72)),d=t(700),c=t.n(d),p=t(701),f=t.n(p),m=t(702),b=t.n(m),h=t(704),v=t(681),y=t(705),w=t(1224),g=t.n(w),_=function(){function e(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(o,t,n){return t&&e(o.prototype,t),n&&e(o,n),o}}(),k=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,t,n,r){var i=o&&o.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var l in i)void 0===t[l]&&(t[l]=i[l]);else t||(t=i||{});if(1===a)t.children=r;else if(a>1){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:e,type:o,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}}(),O={name:{component:y.e,label:"Name:",placeholder:"First and last name",required:!0},organisation:{component:y.e,label:"Organisation:",placeholder:"Your church or parachurch organisation",required:!0},email:{component:y.b,label:"Contact email:",placeholder:"Contact email",required:!0},urlIssue:{component:y.e,label:"Example URL (if applicable)",placeholder:"Please copy paste the url from your web browser"},requestType:{component:y.c,label:"Request type:",options:[{key:"error",label:"New website feature",help:"May be a module, a visual tweak, or new template"},{key:"error2",label:"Sparkleshare feature"},{key:"error3",label:"Mailing list feature"},{key:"error4",label:"App integration request"},{key:"error5",label:"Other"}],required:!0},description:{component:y.f,label:"Description",placeholder:"Required. Please provide a brief description",required:!0,rows:"3"},additional:{component:y.f,label:"Any other additional information",placeholder:"Not required. You may choose to enter any other relevant information or special requests here.",rows:"5"}},q=k("div",{className:"form-group"},void 0,k("button",{type:"submit",className:"btn btn-primary pull-right"},void 0,"Submit")),S=function(e){var o=e.bindInput,t=e.model,n=e.onSubmit,r=e.schema,i=function(e){e.preventDefault(),n(t)};return k("div",{className:"support-form"},void 0,k(y.a,{schema:r,fields:O,bindInput:o,onSubmit:i},void 0,q))},R=f()(c()(),b()(O),y.g.submitted)(S),N=k("h1",{},void 0,"Feature request form"),C=k("div",{},void 0,k("p",{},void 0,"Some features may be in the pipeline or already available. See our ",k(u.b,{to:"/documentation"},void 0,"documentation page")," for assistance in using these features, and our ",k(u.b,{to:"/client"},void 0,"client page")," for any announcements.")),P=k("hr",{}),j=k("div",{className:"instruction"},void 0,k("h3",{},void 0,"Guidelines"),k("p",{},void 0,"To best assist you with your feature requests, please ensure to:"),k("ul",{},void 0,k("li",{},void 0,"fill out this form ",k("strong",{},void 0,"as completely as you can.")),k("li",{},void 0,"include only one request per submission. You’re welcome to submit multiple requests."),k("li",{},void 0,"check you’re allocated a ticket number.")),k("p",{},void 0,"Each submission will:"),k("ul",{},void 0,k("li",{},void 0,"Send a request ticket by email (to you & us) for tracking by our team."),k("li",{},void 0,"Give an option to close your feature request by email."))),M=k("h2",{},void 0,"New features! Always exciting.."),F=k("p",{},void 0,"We’ll review your submission and get back to you about your request as soon as possible."),E=function(e){function o(e){n(this,o);var t=r(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e));return t.state={isModalOpen:!1},t.setFormRef=t.setFormRef.bind(t),t.handleOpen=t.handleOpen.bind(t),t.handleClose=t.handleClose.bind(t),t.handleSubmit=t.handleSubmit.bind(t),t}return i(o,e),_(o,[{key:"setFormRef",value:function(e){this.formRef=e}},{key:"handleOpen",value:function(){this.setState({isModalOpen:!0})}},{key:"handleClose",value:function(){this.setState({isModalOpen:!1}),this.formRef.resetModel()}},{key:"handleSubmit",value:function(e){return fetch("https://api.vision100it.org/feature-request",{method:"post",mode:"cors",body:JSON.stringify(e),headers:new Headers({"Content-Type":"application/json"})}).catch(this.handleOpen).then(this.handleOpen)}},{key:"render",value:function(){var e=this.state.isModalOpen;return k(v.a,{},void 0,k("div",{className:"status-overlay"},void 0,k("div",{className:"site-wrapper site-wrapper-padding"},void 0,N,C,P,j,k(R,{getFormRef:this.setFormRef,onSubmit:this.handleSubmit}))),e&&k(h.a,{onClose:this.handleClose},void 0,k("div",{className:g.a.modal},void 0,M,F,k("p",{},void 0,k("button",{className:g.a.button,onClick:this.handleClose},void 0,"Woo Hoo!")))))}},{key:"formRef",set:function(e){this._formRef=e},get:function(){return this._formRef}}]),o}(l.a.Component);o.default=E}});