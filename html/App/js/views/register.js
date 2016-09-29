	
	import jqueryValidation from '../lib/jquery.validate.min';
	import ApiList from '../api/apiHelper';
	
	$(function() {
	    $('#getting_code').click(function(){
	        var tel_value = $("#user_tel").val();
	        var code=$("#write_auth_code").val();
            var areaTel=$("option").val();
            console.log(areaTel);
	         if(tel_value == "") {
	            $("#user_tel").focus();
	            $("#user_tel").css("border", "1px solid red");
	        } else if(!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|17[0-9])\d{8}$/.test(tel_value)) {
	            $("#user_tel").focus();
	            $("#user_tel").css("border", "1px solid red");
	            $("#user_tel").val("");
	        } else{ 
	        	var btn = $(this);
	        	btn.attr('disabled', true).css('cursor', 'not-allowed');   
	        	ApiList.sendCode({
		         	PhoneNumber:tel_value,
		         	PhoneAreaCode:areaTel
		         },function(data){
		         	if(data.StatusCode==200){
		         	}
		         })
	        	//console.log(tel_value);
                var count= 60;
	            var resend = setInterval(function(){
	                count--;
	                if(count > 0) {
	                    btn.val(count + "秒后可重新获取");
	
	                } else {
	                    clearInterval(resend);
	                    btn.val("获取验证码").removeAttr('disabled');
	                }
	            }, 1000);
	         }
		 });
	
	    $("#user_tel").blur(function(){
	        $(this).css("border", "none");
	     })
	
	    var host = "";
	    var formvalidation = toValidate();
	    $("#button_register").click(function(){
	        var res = formvalidation.form();
	        if(res){
	            var userName = $($(".input_name")[0]).val();
	            var userTel = $($(".input_tel")[0]).val();
	            var userMailbox = $($(".input_mail_box")[0]).val();
	            var userPsw = $($(".input_psw")[0]).val();
	            var userPsw_sure = $($(".input_psw_sure")[0]).val();
	            var auth_code=$("#write_auth_code").val();
	            ApiList.register({
	                UserName: userName,
	               //Email: userMailbox,
	                Password: userPsw,
	                ConfirmPassword: userPsw_sure,
	                PhoneNumber: userTel,
	                Code:auth_code
	               }, function(result){
	                if(result.StatusCode == 200) {
	                   ApiList.trackServices('43A254E6-0020-473C-8707-3E834F996FC9', 'click user register');
	                  
	                }
	                if(result.StatusCode == 400){
	                   // alert("请求无效")
	                }
	            })
	        }
	    })
	})
					
				
	function addrules() {
	    $.validator.addMethod('isphoneNumber', function(value, element, param) {
	        if(!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|17[0-9])\d{8}$/.test(value)) {
	            return false;
	        }
	        return true;
	
	        //				if(!/^1(3[0-9]|4[57]|5[0-35-9]|8[0-9]|70)\\d{8}$/.test(value)){
	        //					return false;
	        //				}
	        //				return true;
	    }, $.validator.format("格式不正确"));
	
	    $.validator.addMethod('psw_rules', function(value, element, params) {
	        //		
	        //				if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value) ){
	        //					return false;
	        //				}
	        //				return true;
	
	        if(!/^(?=.*[\d])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/.test(value)) {
	            return false;
	        }
	        return true;
	
	        //				var resu = false;
	        //				if(/^[a-z]{1,}$/.test(value)){
	        //					if(/^[A-Z]{1,}$/.test(value) ){
	        //						//resu = true;
	        //					  if(/^[0-9]{1,}$/.test(value) ){
	        //					  	resu = true;
	        //					   }
	        //					}
	        //				}
	        //				return resu;
	    }, $.validator.format("密码包含数字、大小写字母和特殊字符"))
	}
	
	function toValidate() {
	    addrules();
	    var validator = $("#commentForm").validate({
	        debug: true,
	        //ignore: '.reset',
	        onfocusout: function(element) {
	            $(element).valid();
	        },
	
	        rules: {
	            //用户名
	            name: {
	                required: true,
	                minlength: 2
	            },
	
	            //邮箱
	            email: {
	                required: true,
	                email: true
	            },
	            //手机号
	            user_tel: {
	                required: true,
	                isphoneNumber: true
	            },
	            //密码
	            password: {
	                required: true,
	                minlength: 8,
	                psw_rules: true
	            },
	
	            //确认密码
	            confirm_password: {
	                required: true,
	                minlength: 8,
	                equalTo: "#password"
	            }
	        },
	        messages: {
	            name: {
	                required: "请输入用户名",
	                minlength: "用户名至少两位"
	            },
	            email: {
	                required: "请输入邮箱",
	                email: "邮箱格式不正确"
	            },
	
	            user_tel: {
	                required: "请输入手机号码",
	                //							mobile:"手机号码不正确"
	            },
	            password: {
	                required: "请输入密码",
	                minlength: "密码至少为8位"
	            },
	            confirm_password: {
	                required: "请再次输入密码",
	                minlength: "密码至少为8位",
	                equalTo: "密码输入不一致"
	            }
	        },
	        //				submitHandler: function(form) {
	        //					alert(11);
	        //				}
	    });
	    return validator;
	}