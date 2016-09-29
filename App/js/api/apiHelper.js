	
	import Utility from '../common/utility';
	var type = {
	    Get: "GET",
	    Post: "POST"
	}
	var httpCLient={
	    Ajax: function(type, url, datat, param, callback, errorcallback){
	        $.ajax({
	            url: url,
	            type:type,
	            data: param,
	            dataType: datat,
	            success: callback,
	            error: function(data) {
	                if(typeof errorcallback != 'undefined') {
	                    errorcallback(data);
	                }
	            }
	        })
	    }
	}
	
	
	var ApiList = {
	    register: function(param, callback) {
			callback({StatusCode:200});
	        //httpCLient.Ajax(type.Post, applicationPath + "/ApiCommon/RegisterByPhone", "JSON",param,callback);
	    },
	    login: function(param, callback) {
	        callback({result:1});
	       // httpCLient.Ajax(type.Post, applicationPath + "/ApiCommon/LoginServices", "JSON", param,callback);
	    },
	    
	    sendCode:function(param,callback){
	      httpCLient.Ajax(type.Post, applicationPath + "/ApiCommon/Challenge", "JSON",param,callback);
	    },
	
	   trackServices:function(eventId,description){
	        var projectName='VidaHouse.Official';
	        var data = {
	            Decive:Utility.isMoble() ? 'Mobile' : 'PC',
	            EventId: eventId,
	            Project: projectName,
	            Description: description
	        };
	        httpCLient.Ajax(type.Get, applicationPath + "/track/trackServices", "JSON",data,function(){});       
	    }
	}
	export default ApiList;
			
