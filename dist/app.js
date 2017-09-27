webpackJsonp([0],{105:function(t,e,n){"use strict";var r=n(7),i=(n.n(r),n(106)),o=n.n(i);angular.module("app.component",[]).component("app",{template:o.a,controller:["$state","$translate",function(t,e){function n(e){t.go(e),this.setActive(e)}function r(t){this.activeMenu=t.toLowerCase()}function i(){o="en"===o?"fr":"en",e.use(o)}var o="en";this.sideMenus=[],this.activeMenu="",this.sideMenuStyle={height:function(){return window.innerHeight+"px"}(),overflow:"scroll",position:"static"},this.sideMenus=function(){var t=[];return t.push({label:"Activity",state:"activity",name:"Activity",translate_key:"MENU_ITEM_ACTIVITY"}),t.push({label:"Profile",state:"profile",name:"Profile",translate_key:"MENU_ITEM_PROFILE"}),t}(),this.activeMenu=this.sideMenus[0].name.toLowerCase(),this.goToState=n,this.changeLanguage=i,this.setActive=r}]})},106:function(t,e){t.exports='<nav class="navbar navbar-default navbar-fixed-top"> <div class=container-fluid> <div class=navbar-header> <a href=# class=navbar-brand>{{ \'APP_TITLE\' | translate }}</a> </div> <button style=float:right;margin-top:10px class="btn btn-info" ng-click=$ctrl.changeLanguage()>{{ \'BUTTON_CHANGE_LANGUAGE\' | translate }}</button> </div> </nav> <div class=main_content_card> <div class=row> <div class=col-md-2 ng-style=$ctrl.sideMenuStyle> <div class=list-group ng-repeat="menu in $ctrl.sideMenus" ng-click=$ctrl.goToState(menu.state)> <div class=list-group-item ng-class="{active : $ctrl.activeMenu === menu.label.toLowerCase()}" translate>{{menu.translate_key}}</div> </div> </div> <div class=col-md-10> <ui-view></ui-view> </div> </div> </div>'},107:function(t,e,n){"use strict";var r=n(7),i=(n.n(r),n(108)),o=n.n(i);angular.module("app.component").component("activity",{template:o.a,controller:[function(){this.name="ACTIVITY_WELCOME_MESSAGE"}]})},108:function(t,e){t.exports="<div class=container> <p translate>{{ $ctrl.name }}</p> </div> "},109:function(t,e,n){"use strict";var r=n(7),i=(n.n(r),n(110)),o=n.n(i);angular.module("app.component").component("profile",{template:o.a,controller:[function(){this.name="PROFILE_WELCOME_MESSAGE",this.isCollapsed=!1}]})},110:function(t,e){t.exports='<div class=container> <p translate> {{ $ctrl.name }} </p> <button type=button class="btn btn-default" ng-click="$ctrl.isCollapsed = !$ctrl.isCollapsed">Toggle collapse test with ngAnimate</button> <hr> <div uib-collapse=$ctrl.isCollapsed> <div class="well well-lg">Some content</div> </div> </div>'},65:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(66),i=(n.n(r),n(7)),o=(n.n(i),n(31)),a=(n.n(o),n(32)),s=(n.n(a),n(33)),c=(n.n(s),n(34)),l=(n.n(c),n(35)),u=(n.n(l),n(63)),f=(n.n(u),n(64));n.n(f),n(105),n(107),n(109);angular.module("app",["ui.router","ngAnimate","ngSanitize","ui.bootstrap","app.component","pascalprecht.translate"]).config(["$stateProvider","$urlRouterProvider","$translateProvider",function(t,e,n){var r={name:"activity",url:"/activity",component:"activity"},i={name:"profile",url:"/profile",component:"profile"};t.state(r),t.state(i),e.otherwise("/activity"),n.translations("en",{APP_TITLE:"App Name",MENU_ITEM_ACTIVITY:"Activity",MENU_ITEM_PROFILE:"Profile",BUTTON_CHANGE_LANGUAGE:"Change Language",ACTIVITY_WELCOME_MESSAGE:"In activity controller",PROFILE_WELCOME_MESSAGE:"In profile controller"}),n.translations("fr",{APP_TITLE:"Nom de l'application",MENU_ITEM_ACTIVITY:"Activité",MENU_ITEM_PROFILE:"Profil",BUTTON_CHANGE_LANGUAGE:"Changer de langue",ACTIVITY_WELCOME_MESSAGE:"Dans le contrôleur d'activité",PROFILE_WELCOME_MESSAGE:"Dans le contrôleur de profil"}),n.preferredLanguage("en")}])},66:function(t,e,n){var r=n(67);"string"==typeof r&&(r=[[t.i,r,""]]);var i={};i.transform=void 0;n(69)(r,i);r.locals&&(t.exports=r.locals)},67:function(t,e,n){e=t.exports=n(68)(void 0),e.push([t.i,".menu{background-color:#add8e6;width:30%}.content,.menu{display:inline-block}.content{background-color:#ffa07a;width:60%}.main_content_card{margin-top:51px;padding:10px}",""])},68:function(t,e){function n(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=r(i);return[n].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},69:function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=v[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(u(r.parts[o],e))}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(u(r.parts[o],e));v[r.id]={id:r.id,refs:1,parts:a}}}}function i(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s=o[1],c=o[2],l=o[3],u={css:s,media:c,sourceMap:l};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}function o(t,e){var n=m(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=E[E.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),E.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=E.indexOf(t);e>=0&&E.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),o(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),o(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var l=b++;n=g||(g=s(e)),r=f.bind(null,n,l,!1),i=f.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),r=d.bind(null,n,e),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),r=p.bind(null,n),i=function(){a(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}function f(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=M(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function p(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function d(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=y(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var v={},h=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,b=0,E=[],y=n(70);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=h()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=i(t,e);return r(n,e),function(t){for(var o=[],a=0;a<n.length;a++){var s=n[a],c=v[s.id];c.refs--,o.push(c)}if(t){r(i(t,e),e)}for(var a=0;a<o.length;a++){var c=o[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete v[c.id]}}}};var M=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},70:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return t;var o;return o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}}},[65]);