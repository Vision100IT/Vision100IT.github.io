webpackJsonp([6],{1271:function(e,o){e.exports={modal:"support__modal___1K8xw",button:"support__button___1rAKj"}},694:function(e,o,t){"use strict";function r(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function i(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function n(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}Object.defineProperty(o,"__esModule",{value:!0});var a=t(4),l=t.n(a),s=t(13),u=(t.n(s),t(73)),c=t(722),p=t.n(c),d=t(723),m=t.n(d),f=t(724),h=t.n(f),b=t(726),y=t(703),v=t(727),w=t(1271),k=t.n(w),g=function(){function e(e,o){for(var t=0;t<o.length;t++){var r=o[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(o,t,r){return t&&e(o.prototype,t),r&&e(o,r),o}}(),S=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,t,r,i){var n=o&&o.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&n)for(var l in n)void 0===t[l]&&(t[l]=n[l]);else t||(t=n||{});if(1===a)t.children=i;else if(a>1){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:e,type:o,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}}(),_={summary:{component:v.e,label:"How can we help?",placeholder:"Summarise the issue like an email subject line",required:!0},details:{component:v.f,label:"Further details that will help us to help you",placeholder:"Please give us a detailed description, including any steps taken that led to the problem and the result",required:!0,rows:"4"},url:{component:v.e,label:"URL for affected page: (if applicable)",placeholder:"Please copy paste the url from the browser"},requestType:{component:v.c,label:"Issue type (This helps us quickly allocate to the product expert)",options:[{key:"error",label:"Username/password authentication issues",help:"May be for Website, Sparkleshare, Sympa"},{key:"error2",label:"Page not loading correctly/at all"},{key:"error3",label:"Sparkleshare conflict/error"},{key:"error4",label:"Mailing list issue/request"},{key:"error5",label:"Other"}],required:!0},severity:{component:v.d,label:"Severity:",options:[{key:"4 - minimal impact, tolerable for a period",label:"4 - minimal impact, tolerable for a period"},{key:"3 - affects one user, moderate impact on workflow",label:"3 - affects one user, moderate impact on workflow"},{key:"2 - affects multiple users, serious impact on workflow",label:"2 - affects multiple users, serious impact on workflow"},{key:"1 - affects multiple users and clients, system offline",label:"1 - affects multiple users and clients, system offline"}]},additional:{component:v.f,label:"Any other additional information",placeholder:"Not required. You may choose to enter any other relevant information or special requests here.",rows:"3"},hr:{component:"hr"},h4:{component:"h4",children:"Contact Details"},name:{component:v.e,label:"Name:",placeholder:"First and last name",required:!0},organisation:{component:v.e,label:"Organisation:",placeholder:"Your church or parachurch organisation",required:!0},email:{component:v.b,label:"Contact email:",placeholder:"Contact email",required:!0}},O=S("div",{className:"form-group"},void 0,S("button",{type:"submit",className:"btn btn-primary pull-right"},void 0,"Submit")),q=function(e){var o=e.bindInput,t=e.model,r=e.onSubmit,i=e.schema,n=function(e){e.preventDefault(),r(t)};return S("div",{className:"support-form"},void 0,S(v.a,{schema:i,fields:_,bindInput:o,onSubmit:n},void 0,O))},C=m()(p()(),h()(_),v.g.submitted)(q),N=S("h1",{},void 0,"Support form"),R=S("div",{},void 0,S("p",{},void 0,"Some issues may be answered by our ",S(u.b,{to:"/documentation"},void 0,"documentation")," which you can find ",S(u.b,{to:"/documentation"},void 0,"here"),". Please also check our ",S(u.b,{to:"/status"},void 0,"system status page")," for any issues that may impact your work.")),j=S("hr",{}),P=S("div",{className:"instruction"},void 0,S("h3",{},void 0,"Guidelines"),S("p",{},void 0,"To best assist you with your support requests, please ensure to:"),S("ul",{},void 0,S("li",{},void 0,"fill out this form ",S("strong",{},void 0,"as completely as you can.")),S("li",{},void 0,"include only one problem per submission. You’re welcome to submit multiple requests."),S("li",{},void 0,"check you’re allocated a ticket number.")),"Each submission will:",S("ul",{},void 0,S("li",{},void 0,"Send a support ticket by email (to you & us) for tracking by our team."),S("li",{},void 0,"Give an option to close your support request by email."))),M=S("h2",{},void 0,"Hearing you loud and clear!"),F=S("p",{},void 0,"We’ve received your submission and will get back to you about your issue as soon as possible. If you have other things to report, please feel free to complete the form a second time."),T=function(e){function o(e){r(this,o);var t=i(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e));return t.state={isModalOpen:!1},t.setFormRef=t.setFormRef.bind(t),t.handleOpen=t.handleOpen.bind(t),t.handleClose=t.handleClose.bind(t),t.handleSubmit=t.handleSubmit.bind(t),t}return n(o,e),g(o,[{key:"setFormRef",value:function(e){this.formRef=e}},{key:"handleOpen",value:function(){this.setState({isModalOpen:!0})}},{key:"handleClose",value:function(){this.setState({isModalOpen:!1}),this.formRef.resetModel()}},{key:"handleSubmit",value:function(e){return fetch("https://api.vision100it.org/support-request",{method:"post",mode:"cors",body:JSON.stringify(e),headers:new Headers({"Content-Type":"application/json"})}).catch(this.handleOpen).then(this.handleOpen)}},{key:"render",value:function(){var e=this.state.isModalOpen;return S(y.a,{},void 0,S("div",{className:"status-overlay"},void 0,S("div",{className:"site-wrapper site-wrapper-padding"},void 0,N,R,j,P,S(C,{getFormRef:this.setFormRef,initialModel:{severity:"4"},onSubmit:this.handleSubmit}))),e&&S(b.a,{onClose:this.handleClose},void 0,S("div",{className:k.a.modal},void 0,M,F,S("p",{},void 0,S("button",{className:k.a.button,onClick:this.handleClose},void 0,"No worries")))))}},{key:"formRef",set:function(e){this._formRef=e},get:function(){return this._formRef}}]),o}(l.a.Component);o.default=T}});