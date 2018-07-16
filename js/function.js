function rand(min,max)
{ return Math.round(Math.random()* (max - min) + min); }

var randsli = [new slid( $('div.1') ),new slid( $('div.2') ),new slid( $('div.3') ),new slid( $('div.4') )]
console.log(randsli);
function conTaRaison(craft)
{
	var mine = craft[0];
	for(var i = 0;i<craft.length;i++)
	{ if(mine != craft[i]) {return 0;} }
	return 1;
}
function go()
{
	if(cred <= 0)
	{ console.log('plus de credit'); }
	else
	{
		if(g == 0)
		{
			console.log('play');
			var sc = [];
			var max = 0;
			g = 1;
			for(var i = 0;i<randsli.length;i++)
			{
				ttt = randsli[i].randoel()
				if(max < ttt) {max = ttt}
			}
			setTimeout(function ()
			{
				for(var i = 0;i<randsli.length;i++)
				{ sc[i] = randsli[i].actualite() }
			}, max+1);
			setTimeout(function ()
			{
				console.log(sc);
				if(conTaRaison(sc))
				{ console.log('win'); win();}
				else
				{ console.log("lose");  lose();}
				g =0;
			}, max+50);
		}
		else{ console.log('deja en jeux'); }
	}
}