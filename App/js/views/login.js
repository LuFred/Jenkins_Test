
import Utility from '../common/utility';
import ApiList from '../api/apiHelper';

$(function() {
    $("#button_login").click(function(){
        var user_name_login = $("#user_name_login").val();
        var user_psw_login = $("#user_psw_login").val();
        if(user_name_login == "" || user_psw_login == ""){
            alert("用户名、密码不能为空")
        } else {
            ApiList.trackServices('FC75D88E-31D1-4CD1-AD66-55311EB7D6F5', 'click user login');
            ApiList.login({
                UserName: user_name_login,
                Password: user_psw_login
            }, function(resp) {
                if(resp.success == 1) {
                    var returnurl = Utility.getParameterByName('returnurl');
                    if(returnurl == null) {
                        returnurl = window.location.host;
                    }
                    console.log(returnurl);
                    window.location.href = returnurl;
                } else {
                    if(resp.success == 0) {
                        alert("用户名或密码错误,请重新输入!");
                        $("#user_name_login").val("");
                        $("#user_psw_login").val("");
                    }
                }
            })
        }
    })
})

