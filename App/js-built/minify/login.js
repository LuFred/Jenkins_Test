webpackJsonp([2],{0:function(e,n,t){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var i=t(10),o=n(i),a=t(17),r=n(a);e(function(){e("#button_login").click(function(){var n=e("#user_name_login").val(),t=e("#user_psw_login").val();""==n||""==t?alert("用户名、密码不能为空"):(r["default"].trackServices("FC75D88E-31D1-4CD1-AD66-55311EB7D6F5","click user login"),r["default"].login({UserName:n,Password:t},function(n){if(1==n.success){var t=o["default"].getParameterByName("returnurl");null==t&&(t=window.location.host),console.log(t)}else 0==n.success&&(alert("用户名或密码错误,请重新输入!"),e("#user_name_login").val(""),e("#user_psw_login").val(""))}))})})}).call(n,t(3))},10:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={getParameterByName:function(e,n){n||(n=window.location.href);var e=e.replace(/[\[\]]/g,"\\$&"),t=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)","i"),i=t.exec(n);return i?i[2]?decodeURIComponent(i[2].replace(/\+/g," ")):"":null},isMoble:function(){var e=!1,n=window.navigator.userAgent.toLowerCase();return n.indexOf("iphone")==-1&&n.indexOf("ipad")==-1&&n.indexOf("android")==-1||(e=!0),e}};n["default"]=t},17:function(e,n,t){(function(e){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(10),a=i(o),r={Get:"GET",Post:"POST"},c={Ajax:function(n,t,i,o,a,r){e.ajax({url:t,type:n,data:o,dataType:i,success:a,error:function(e){"undefined"!=typeof r&&r(e)}})}},u={register:function(e,n){c.Ajax(r.Post,applicationPath+"/ApiCommon/RegisterByEmail","JSON",e,n)},login:function(e,n){c.Ajax(r.Post,applicationPath+"/ApiCommon/LoginServices","JSON",e,n)},trackServices:function(e,n){var t="VidaHouse.Official",i={Decive:a["default"].isMoble()?"Mobile":"PC",EventId:e,Project:t,Description:n};c.Ajax(r.Get,applicationPath+"/track/trackServices","JSON",i,function(){})}};n["default"]=u}).call(n,t(3))}});