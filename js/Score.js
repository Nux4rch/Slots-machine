$.get("/control/Score.php", function(data)
{
	a = JSON.parse(data);
	$("ul.top").text("top utilisateurs");
	for( var i = 0 ; i<a.length ;i++)
	{
			$("ul.top").append("<li>"+a[i].u+" : "+a[i].sc+"</li>");
	}
});