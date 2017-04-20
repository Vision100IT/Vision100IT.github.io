webpackJsonp([6],{649:function(e,o,t){"use strict";function n(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function r(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function a(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}Object.defineProperty(o,"__esModule",{value:!0});var i=t(2),l=t.n(i),s=t(661),u=t.n(s),p=t(63),c=t(680),d=t.n(c),m=t(679),f=t.n(m),h=t(681),b=t.n(h),y=t(673),v=t(652),w=t(672),k=t(927),g=t.n(k),S=function(){function e(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(o,t,n){return t&&e(o.prototype,t),n&&e(o,n),o}}(),_=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,t,n,r){var a=o&&o.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});if(1===i)t.children=r;else if(i>1){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:e,type:o,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}}(),O={summary:{component:w.a,label:"How can we help?",placeholder:"Summarise the issue like an email subject line",required:!0},details:{component:w.b,label:"Further details that will help us to help you",placeholder:"Please give us a detailed description, including any steps taken that led to the problem and the result",required:!0,rows:"4"},url:{component:w.a,label:"URL for affected page: (if applicable)",placeholder:"Please copy paste the url from the browser"},requestType:{component:w.c,label:"Issue type (This helps us quickly allocate to the product expert)",options:[{key:"error",label:"Username/password authentication issues",help:"May be for Website, Sparkleshare, Sympa"},{key:"error2",label:"Page not loading correctly/at all"},{key:"error3",label:"Sparkleshare conflict/error"},{key:"error4",label:"Mailing list issue/request"},{key:"error5",label:"Other"}],required:!0},severity:{component:w.d,label:"Severity:",options:[{key:"4 - minimal impact, tolerable for a period",label:"4 - minimal impact, tolerable for a period"},{key:"3 - affects one user, moderate impact on workflow",label:"3 - affects one user, moderate impact on workflow"},{key:"2 - affects multiple users, serious impact on workflow",label:"2 - affects multiple users, serious impact on workflow"},{key:"1 - affects multiple users and clients, system offline",label:"1 - affects multiple users and clients, system offline"}]},additional:{component:w.b,label:"Any other additional information",placeholder:"Not required. You may choose to enter any other relevant information or special requests here.",rows:"3"},hr:{component:"hr"},h4:{component:"h4",children:"Contact Details"},name:{component:w.a,label:"Name:",placeholder:"First and last name",required:!0},organisation:{component:w.a,label:"Organisation:",placeholder:"Your church or parachurch organisation",required:!0},email:{component:w.e,label:"Contact email:",placeholder:"Contact email",required:!0}},q=_("div",{className:"form-group"},void 0,_("button",{type:"submit",className:"btn btn-primary pull-right"},void 0,"Submit")),C=function(e){var o=e.bindInput,t=e.model,n=e.onSubmit,r=e.schema,a=function(e){e.preventDefault(),n(t)};return _("div",{className:"support-form"},void 0,_(w.f,{schema:r,fields:O,bindInput:o,onSubmit:a},void 0,q))},N=f()(d()(),b()(O),w.g.submitted)(C),R=_("h1",{},void 0,"Support form"),j=_("div",{},void 0,_("p",{},void 0,"Some issues may be answered by our ",_(p.d,{to:"/documentation"},void 0,"documentation")," which you can find ",_(p.d,{to:"/documentation"},void 0,"here"),". Please also check our ",_(p.d,{to:"/status"},void 0,"system status page")," for any issues that may impact your work.")),P=_("hr",{}),M=_("div",{className:"instruction"},void 0,_("h3",{},void 0,"Guidelines"),_("p",{},void 0,"To best assist you with your support requests, please ensure to:"),_("ul",{},void 0,_("li",{},void 0,"fill out this form ",_("strong",{},void 0,"as completely as you can.")),_("li",{},void 0,"include only one problem per submission. You’re welcome to submit multiple requests."),_("li",{},void 0,"check you’re allocated a ticket number.")),"Each submission will:",_("ul",{},void 0,_("li",{},void 0,"Send a support ticket by email (to you & us) for tracking by our team."),_("li",{},void 0,"Give an option to close your support request by email."))),F=_("h2",{},void 0,"Hearing you loud and clear!"),T=_("p",{},void 0,"We’ve received your submission and will get back to you about your issue as soon as possible. If you have other things to report, please feel free to complete the form a second time."),x=function(e){function o(e){n(this,o);var t=r(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e));return t.state={isModalOpen:!1},t.setFormRef=t.setFormRef.bind(t),t.handleOpen=t.handleOpen.bind(t),t.handleClose=t.handleClose.bind(t),t.handleSubmit=t.handleSubmit.bind(t),t.shouldComponentUpdate=u.a.shouldComponentUpdate.bind(t),t}return a(o,e),S(o,[{key:"setFormRef",value:function(e){this.formRef=e}},{key:"handleOpen",value:function(){this.setState({isModalOpen:!0})}},{key:"handleClose",value:function(){this.setState({isModalOpen:!1}),this.formRef.resetModel()}},{key:"handleSubmit",value:function(e){return fetch("https://qvikae2ufi.execute-api.us-west-2.amazonaws.com/prod/support-request",{method:"post",mode:"cors",body:JSON.stringify(e),headers:new Headers({"Content-Type":"application/json"})}).catch(this.handleOpen).then(this.handleOpen)}},{key:"shouldComponentUpdate",value:function(){}},{key:"render",value:function(){var e=this.state.isModalOpen;return _(v.a,{},void 0,_("div",{className:"status-overlay"},void 0,_("div",{className:"site-wrapper site-wrapper-padding"},void 0,R,j,P,M,_(N,{getFormRef:this.setFormRef,initialModel:{severity:"4"},onSubmit:this.handleSubmit}))),e&&_(y.a,{onClose:this.handleClose},void 0,_("div",{className:g.a.modal},void 0,F,T,_("p",{},void 0,_("button",{className:g.a.button,onClick:this.handleClose},void 0,"No worries")))))}},{key:"formRef",set:function(e){this._formRef=e},get:function(){return this._formRef}}]),o}(l.a.Component);o.default=x},927:function(e,o){e.exports={modal:"support__modal___1K8xw",button:"support__button___1rAKj"}}});