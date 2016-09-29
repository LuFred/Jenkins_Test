	
var Utility = {
    //登录成功后返回的url
    getParameterByName: function(name, url) {
        if(!url) url = window.location.href;
        var name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)', 'i'),
            results = regex.exec(url);
        if(!results) return null;
        if(!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    },

    isMoble: function () {
        var result = false;
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.indexOf("iphone") != -1 || ua.indexOf("ipad") != -1 || ua.indexOf("android") != -1)
            result = true;
        return result;
    }
}
	export default Utility;