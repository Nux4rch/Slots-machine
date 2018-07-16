var fl = $('form.log')
var flo = $('form.log :input');
var uname = $('a.uname');
fl.submit(function(e) 
{
	e.preventDefault();
	if(flo.val() == "")
	{flo.css('border','1px solid red');console.log('no_username');}
	else
	{
		var url = root + "/control/login.php";
		var d = {'login':''};
		d.login = flo.val();
		
		//Send the data using post
		$.post( url, d )
		// results
		.done(function(e) 
		{
			if(e.connected == "true")
			{
				console.log("connected" ,e.cred);
				cred = parseInt(e.cred);
				uname.text("username : "+e.uname);
				pts.text("credits : "+e.cred);
				$('.disabled').css('display','none');
			}
			else{console.log("error : " + e.msg);}
		})
		.fail(function(e) {console.log( "error" ,e);})
		.always(function() {console.log( "finished" );});
	}
});