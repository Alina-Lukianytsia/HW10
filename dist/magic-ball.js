!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("magic-ball",[],e):"object"==typeof exports?exports["magic-ball"]=e():t["magic-ball"]=e()}("undefined"==typeof self?this:self,(function(){return t={294:function(t,e,o){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.getAnswer=void 0;const r=n(o(611)),i=o(383);e.getAnswer=()=>i.DEFAULT_ANSWERS[(0,r.default)(i.DEFAULT_ANSWERS.length-1)]},611:t=>{var e=9007199254740991,o=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,u=/^(?:0|[1-9]\d*)$/,f=parseFloat,a=parseInt,s=Object.prototype.toString,l=Math.floor,c=Math.min,p=Math.random;function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function d(t){return t?Infinity===(t=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var u=r.test(t);return u||i.test(t)?a(t.slice(2),u?2:8):n.test(t)?NaN:+t}(t))||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}t.exports=function(t,o,n){if(n&&"boolean"!=typeof n&&function(t,o,n){if(!y(n))return!1;var r=typeof o;return!!("number"==r?function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=e}(t.length)&&!function(t){var e=y(t)?s.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}(t)}(n)&&function(t,o){return!!(o=null==o?e:o)&&("number"==typeof t||u.test(t))&&t>-1&&t%1==0&&t<o}(o,n.length):"string"==r&&o in n)&&function(t,e){return t===e||t!=t&&e!=e}(n[o],t)}(t,o,n)&&(o=n=void 0),void 0===n&&("boolean"==typeof o?(n=o,o=void 0):"boolean"==typeof t&&(n=t,t=void 0)),void 0===t&&void 0===o?(t=0,o=1):(t=d(t),void 0===o?(o=t,t=0):o=d(o)),t>o){var r=t;t=o,o=r}if(n||t%1||o%1){var i=p();return c(t+i*(o-t+f("1e-"+((i+"").length-1))),o)}return function(t,e){return t+l(p()*(e-t+1))}(t,o)}},383:t=>{"use strict";t.exports=JSON.parse('{"DEFAULT_ANSWERS":["As I see it, yes","It is certain","It is decidedly so","Most likely","Outlook good","Signs point to yes","Without a doubt","Yes","Yes - definitely","You may rely on it","Reply hazy, try again","Ask again later","Better not tell you now","Cannot predict now","Concentrate and ask again","Don`t count on it","My reply is no","My sources say no","Outlook not so good","Very doubtful"]}')}},e={},function o(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,o),i.exports}(294).default;var t,e}));