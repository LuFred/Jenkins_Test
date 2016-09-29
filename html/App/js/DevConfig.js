		
		var scriptDomain ='';
		//var script ='unminify';//unminify|minify
		//if (script == "unminify")
		//{
		//  scriptDomain = Url.Content("~/App/js-built/minify/");
		//}
		//else if (script == "unminify")
		//{
		//	console.log(333);
		//  scriptDomain = Url.Content("~/App/js-built/unminify/");
		//}
		//else
		//{
		 scriptDomain = "http://localhost:8080/build/";
		//}
		var scriptBaseUrl = scriptDomain;
		var applicationPath ='/';
		var host="";
		
		var vendor = 'vendor.js';
		var script = "<script type='text/javascript' src=" + scriptBaseUrl + vendor + "><\/script>";
	    console.log(script);
		document.write(script);
