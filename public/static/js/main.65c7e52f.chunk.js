(this.webpackJsonptesttesttest=this.webpackJsonptesttesttest||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(19),i=n.n(o),s=n(8),r=(n(29),n(23)),u=n(2),l=n(3),p=n.p+"static/media/logo-mesto.03b78ada.svg",h=n(0);var d=function(e){var t=Object(l.h)();return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)(s.b,{to:"/",children:Object(h.jsx)("img",{className:"header__logo",src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430"})}),Object(h.jsxs)("div",{className:"header__auth",children:[e.isLoggedIn?Object(h.jsx)("p",{className:"header__auth-item header__auth-item_email",children:localStorage.getItem("email")}):null,"/"===t.pathname&&Object(h.jsx)("p",{className:"header__auth-item header__auth-item_logout",onClick:function(){return e.onLogout()},children:"\u0412\u044b\u0439\u0442\u0438"}),"/sign-in"===t.pathname&&Object(h.jsx)(s.b,{to:"/sign-up",className:"header__auth-item header__auth-item_login",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),"/sign-up"===t.pathname&&Object(h.jsx)(s.b,{to:"/sign-in",className:"header__auth-item header__auth-item_login",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},j=n(12),b=n(21),_=n(22),m=new(function(){function e(t,n){Object(b.a)(this,e),this.baseUrl="https://mesto.nomoreparties.co/v1",this._token=t,this._groupId=n}return Object(_.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getCards",value:function(){return fetch("".concat(this.baseUrl,"/").concat(this._groupId,"/cards"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/").concat(this._groupId,"/users/me"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"patchProfileAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/").concat(this._groupId,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"patchProfileInfo",value:function(e,t){return fetch("".concat(this.baseUrl,"/").concat(this._groupId,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"postNewCard",value:function(e,t){return fetch("".concat(this.baseUrl,"/").concat(this._groupId,"/cards "),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/").concat(this._groupId,"/cards/").concat(e,"/"),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"putLikePost",value:function(e){return fetch("".concat(this.baseUrl,"/").concat(this._groupId,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"deleteLikePost",value:function(e){return fetch("".concat(this.baseUrl,"/").concat(this._groupId,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}}]),e}())("57e386f4-1a89-4d89-a10b-b49e88b17870","cohort-21"),O=Object(a.createContext)();var f=function(e){var t=Object(a.useContext)(O),n=e.owner===t._id,c="".concat(n?"card__delete":"card__delete_hidden"),o=e.likes.some((function(e){return e._id===t._id})),i="card__like ".concat(o&&"card__like_active");return Object(h.jsxs)("article",{className:"card",children:[Object(h.jsx)("img",{className:"card__picture",src:e.link,alt:e.name,onClick:function(){e.onCardClick(e)}}),Object(h.jsxs)("div",{className:"card__info",children:[Object(h.jsx)("h2",{className:"card__signature",children:e.name}),Object(h.jsxs)("div",{className:"card__like-section",children:[Object(h.jsx)("button",{className:i,type:"button",onClick:function(){e.onCardLike(e)}}),Object(h.jsx)("p",{className:"card__like-counter",children:e.likes.length})]})]}),Object(h.jsx)("button",{className:c,type:"button",onClick:function(){e.onCardDelete(e)}})]})};var g=function(e){var t=Object(a.useContext)(O);return Object(h.jsxs)("main",{className:"main",children:[Object(h.jsxs)("section",{className:"profile",children:[Object(h.jsx)("div",{className:"profile__avatar",onClick:e.onEditAvatar,style:{backgroundImage:"url(".concat(t.avatar,")")}}),Object(h.jsxs)("div",{className:"profile__user",children:[Object(h.jsx)("h1",{className:"profile__name",children:t.name}),Object(h.jsx)("button",{className:"profile__edit-button",onClick:e.onEditProfile,type:"button"})]}),Object(h.jsx)("p",{className:"profile__status",children:t.about}),Object(h.jsx)("button",{className:"profile__add-button",onClick:e.onAddPlace,type:"button"})]}),Object(h.jsx)("section",{className:"elements",children:e.cards.map((function(t){return Object(h.jsx)(f,Object(j.a)(Object(j.a)({},t),{},{onCardClick:e.onCardClick,onCardLike:e.hanldeCardLike,onCardDelete:e.handleCardDelete}),t.id)}))})]})};var x=function(){var e=(new Date).getFullYear();return Object(h.jsx)("footer",{className:"footer",children:Object(h.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",e," Mesto Russia"]})})};var v=function(e){var t=e.name,n=e.title,a=e.isOpen,c=e.onClose;return Object(h.jsx)("section",{className:a?"popup popup_type_".concat(t," popup_active"):"popup popup_type_".concat(t),children:Object(h.jsxs)("div",{className:"popup__container",children:[Object(h.jsx)("h2",{className:"popup__title",children:n}),Object(h.jsxs)("form",{name:t,onSubmit:e.onSubmit,children:[e.children,Object(h.jsx)("button",{className:"popup__save-button popup__save-button_active",type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}),Object(h.jsx)("button",{className:"popup__close-button popup__close-button_type_".concat(t),onClick:c,type:"button"})]})})};var k=function(e){var t=e.onClose,n=e.card;return Object(h.jsx)("section",{className:n?"popup popup_type_image popup_active":"popup popup_type_image",children:Object(h.jsxs)("div",{className:"popup__image-container",children:[Object(h.jsx)("img",{className:"popup__big-image",src:null===n||void 0===n?void 0:n.link,alt:null===n||void 0===n?void 0:n.name}),Object(h.jsx)("button",{className:"popup__close-button popup__close-button_type_image",onClick:t,type:"button"}),Object(h.jsx)("p",{className:"popup__big-image-signature",children:n?n.name:""})]})})};function N(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(""),s=Object(u.a)(i,2),r=s[0],l=s[1],p=Object(a.useContext)(O);return Object(a.useEffect)((function(){o(p.name),l(p.about)}),[p,e.isOpen]),Object(h.jsxs)(v,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser(c,r)},children:[Object(h.jsx)("input",{className:"popup__input popup__input_textarea_name",id:"input-name",name:"username",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",value:c||"",onChange:function(e){return o(e.target.value)},required:!0,minLength:"2",maxLength:"40"}),Object(h.jsx)("span",{className:"popup__input-error input-name-error"}),Object(h.jsx)("input",{className:"popup__input popup__input_textarea_status",id:"input-status",name:"status",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441",value:r||"",onChange:function(e){return l(e.target.value)},required:!0,minLength:"2",maxLength:"200"}),Object(h.jsx)("span",{className:"popup__input-error input-status-error"})]})}function C(e){var t=Object(a.useRef)();return Object(h.jsxs)(v,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar(t.current.value)},children:[Object(h.jsx)("input",{className:"popup__input popup__input_textarea_avatar",id:"input-avatar",name:"avatar",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",ref:t,required:!0}),Object(h.jsx)("span",{className:"popup__input-error input-avatar-error"})]})}function y(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(""),s=Object(u.a)(i,2),r=s[0],l=s[1];return Object(h.jsxs)(v,{name:"add-post",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace(c,r),o(""),l("")},children:[Object(h.jsx)("input",{onChange:function(e){return o(e.target.value)},value:c||"",className:"popup__input popup__input_textarea_signature",id:"input-signature",name:"signature",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30"}),Object(h.jsx)("span",{className:"popup__input-error input-signature-error"}),Object(h.jsx)("input",{onChange:function(e){return l(e.target.value)},value:r||"",className:"popup__input popup__input_textarea_picture",id:"input-picture",name:"picture",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(h.jsx)("span",{className:"popup__input-error input-picture-error"})]})}function S(e){var t=e.isOpen;return Object(h.jsx)("section",{className:t?"popup popup_type_register popup_active":"popup popup_type_register",children:Object(h.jsxs)("div",{className:"popup__container",children:[Object(h.jsx)("div",{className:"popup__register-status ".concat(e.isSuccess?"popup__register-status_good":"popup__register-status_bad")}),Object(h.jsx)("h2",{className:"popup__title popup__title_register",children:e.isSuccess?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."}),Object(h.jsx)("button",{className:"popup__close-button",onClick:function(){return e.onClose()},type:"button"})]})})}var I=n(24);var P=function(e){var t=e.component,n=Object(I.a)(e,["component"]);return Object(h.jsx)(l.b,{children:function(){return n.loggedIn?Object(h.jsx)(t,Object(j.a)({},n)):Object(h.jsx)(l.a,{to:"./login"})}})};function w(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(""),s=Object(u.a)(i,2),r=s[0],l=s[1];return Object(h.jsxs)("form",{className:"authorization",onSubmit:function(t){t.preventDefault(),e.onLogin(c,r)},children:[Object(h.jsx)("h2",{className:"authorization__title",children:"\u0412\u0445\u043e\u0434"}),Object(h.jsx)("input",{className:"authorization__input",id:"login-email",placeholder:"Email",required:!0,type:"email",onChange:function(e){return o(e.target.value)},value:c||""}),Object(h.jsx)("input",{className:"authorization__input",id:"login-password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,type:"password",onChange:function(e){return l(e.target.value)},value:r||""}),Object(h.jsx)("button",{className:"authorization__submit-button authorization__submit-button_login",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})}function L(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(""),r=Object(u.a)(i,2),l=r[0],p=r[1];return Object(h.jsxs)("form",{className:"authorization",onSubmit:function(t){t.preventDefault(),e.onRegister(c,l)},children:[Object(h.jsx)("h2",{className:"authorization__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(h.jsx)("input",{className:"authorization__input",id:"registration-email",placeholder:"Email",required:!0,type:"email",onChange:function(e){return o(e.target.value)},value:c||""}),Object(h.jsx)("input",{className:"authorization__input",id:"registration-password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,type:"password",onChange:function(e){return p(e.target.value)},value:l||""}),Object(h.jsx)("button",{className:"authorization__submit-button authorization__submit-button_login",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(h.jsxs)("p",{className:"authorization__notice",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(h.jsx)(s.b,{className:"authorization__link",to:"/login",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}var z="https://auth.nomoreparties.co";function E(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status,": ").concat(e.statusText))}var T=function(){var e=Object(a.useState)({about:"",avatar:"",cohort:"",name:"",_id:","}),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),i=Object(u.a)(o,2),s=i[0],p=i[1],j=Object(l.g)();Object(a.useEffect)((function(){!function(){var e=localStorage.getItem("jwt");if(!e)return;(t=e,fetch("".concat(z,"/users/me"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},method:"GET"}).then((function(e){return E(e)}))).then((function(e){e&&p(!0)})).catch((function(e){console.log(e)}));var t}()}),[]),Object(a.useEffect)((function(){s&&j.push("/")}),[s]),Object(a.useEffect)((function(){m.getUserInfo().then((function(e){c(e)})).catch((function(e){console.log(e)}))}),[]);var b=Object(a.useState)(!1),_=Object(u.a)(b,2),f=_[0],I=_[1],T=Object(a.useState)(!1),U=Object(u.a)(T,2),A=U[0],D=U[1],R=Object(a.useState)(!1),q=Object(u.a)(R,2),J=q[0],F=q[1],B=Object(a.useState)(!1),H=Object(u.a)(B,2),M=H[0],G=H[1],Y=Object(a.useState)(!1),K=Object(u.a)(Y,2),Q=K[0],V=K[1],W=Object(a.useState)(null),X=Object(u.a)(W,2),Z=X[0],$=X[1],ee=Object(a.useState)(!1),te=Object(u.a)(ee,2),ne=te[0],ae=te[1],ce=Object(a.useState)([]),oe=Object(u.a)(ce,2),ie=oe[0],se=oe[1];function re(){D(!1),I(!1),F(!1),G(!1),V(!1),$(null)}return Object(a.useEffect)((function(){m.getCards().then((function(e){var t=e.map((function(e){return{id:e._id,name:e.name,link:e.link,owner:e.owner._id,likes:e.likes}}));se(t)})).catch((function(e){console.log(e)}))}),[]),Object(h.jsx)("div",{className:"page",children:Object(h.jsxs)(O.Provider,{value:n,children:[Object(h.jsx)(d,{isLoggedIn:s,onLogout:function(){p(!1),localStorage.setItem("jwt",null)}}),Object(h.jsxs)(l.d,{children:[Object(h.jsx)(P,{exact:!0,path:"/",loggedIn:s,component:g,cards:ie,onEditProfile:function(){I(!0)},onAddPlace:function(){D(!0)},onEditAvatar:function(){F(!0)},onCardClick:function(e){$(e)},handleCardDelete:function(e){m.deleteCard(e.id).then((function(){se((function(t){return t.filter((function(t){return t.id!==e.id}))}))})).catch((function(e){console.log(e)}))},hanldeCardLike:function(e){e.likes.some((function(e){return e._id===n._id}))?m.deleteLikePost(e.id).then((function(t){var n={id:t._id,name:t.name,link:t.link,owner:t.owner._id,likes:t.likes};se((function(t){return t.map((function(t){return t.id===e.id?n:t}))}))})).catch((function(e){console.log(e)})):m.putLikePost(e.id).then((function(t){var n={id:t._id,name:t.name,link:t.link,owner:t.owner._id,likes:t.likes};se((function(t){return t.map((function(t){return t.id===e.id?n:t}))}))})).catch((function(e){console.log(e)}))}}),Object(h.jsx)(l.b,{path:"/sign-in",children:Object(h.jsx)(w,{onLogin:function(e,t){return function(e,t){return fetch("".concat(z,"/signin"),{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({password:t,email:e})}).then((function(e){return E(e)}))}(e,t).then((function(t){t&&(localStorage.setItem("jwt",t.token),localStorage.setItem("email",e),p(!0))})).catch((function(e){console.log(e)}))}})}),Object(h.jsx)(l.b,{path:"/sign-up",children:Object(h.jsx)(L,{onRegister:function(e,t){return function(e,t){return fetch("".concat(z,"/signup"),{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({password:t,email:e})}).then((function(e){return E(e)}))}(e,t).then((function(e){e&&(ae(!0),V(!0),j.push("/sign-in"))})).catch((function(e){ae(!1),V(!0),console.log(e)}))}})}),Object(h.jsx)(l.b,{children:s?Object(h.jsx)(l.a,{to:"/"}):Object(h.jsx)(l.a,{to:"sign-in"})})]}),Object(h.jsx)(x,{}),Object(h.jsx)(y,{isOpen:A,onClose:re,onAddPlace:function(e,t){m.postNewCard(e,t).then((function(e){var t={id:e._id,name:e.name,link:e.link,owner:e.owner._id,likes:e.likes};se([t].concat(Object(r.a)(ie))),re()})).catch((function(e){console.log(e)}))}}),Object(h.jsx)(N,{isOpen:f,onClose:re,onUpdateUser:function(e,t){m.patchProfileInfo(e,t).then((function(e){c(e),re()})).catch((function(e){console.log(e)}))}}),Object(h.jsx)(C,{isOpen:J,onClose:re,onUpdateAvatar:function(e){m.patchProfileAvatar(e).then((function(e){c(e),re()})).catch((function(e){console.log(e)}))}}),Object(h.jsx)(v,{name:"delete-post",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:M,onClose:re}),Object(h.jsx)(k,{card:Z,onClose:re}),Object(h.jsx)(S,{isOpen:Q,onClose:re,isSuccess:ne})]})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(s.a,{children:Object(h.jsx)(T,{})})}),document.getElementById("root")),U()}},[[36,1,2]]]);
//# sourceMappingURL=main.65c7e52f.chunk.js.map