function win()
{
	var url = "/control/credit.php";
	
	//Send the data using post
	$.post( url , {'stat':'win'} )
	// results
	.done(function(e) 
	{
		e = JSON.parse(e);
		cred += parseInt(e.cred);
		pts.text("credits : "+e.cred);
		console.log("credit added");
		$('div.msg').css('display', 'inline');
		$('p#msg').text(" you win ");
	})
	.fail(function(e) {console.log( "error" ,e);})
	.always(function() {console.log( "finished" );});
	
}
function lose()
{
	var url = "/control/credit.php";
	
	//Send the data using post
	$.post( url , {'stat':'lose'} )
	// results
	.done(function(e) 
	{
		e = JSON.parse(e);
		cred += parseInt(e.cred);
		pts.text("credits : "+e.cred);
		$('div.msg').css('display', 'inline');
		$('p#msg').text(" you lose ");
	})
	.fail(function(e) {console.log( "error" ,e);})
	.always(function() {console.log( "finished" );});
	
}