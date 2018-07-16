class slid
{
	constructor(el)
	{
		this.el = el;
		this.element = [];
		el.find("li").remove();
		
		for(var i = 0;i<=3;i++)
		{
			var img = rand(0,3);
			this.element[i] = img;
			this.el.find("ul").append('<li><img src="asset/images/'+imgs[ img ]+'" alt="" width="350" height="200"/></li>');
		}
		console.log(this.element);
	}
	sli(delta)
	{
		this.el.find("ul").animate({marginTop:-this.el.find("li:last").height()},delta,function()
		{
			$(this).css({marginTop:0}).find("li:last").after($(this).find("li:first"));
		})
		var s = this.element[0];
		for(var i = 0;i<this.element.length-1;i++)
		{this.element[i] = this.element[i+1];}
		this.element[this.element.length-1] = s;
		return this.element[0];
	}
	//this.sli(800);
	randoel()
	{
		var fuckThisInThisFuckingSetinterval = this;//fuck this in setInterval
		var i = 1;
		var to = rand(10,20);
		var speed = 500;
		//var to = 1
		var  toto = setInterval(function a()
		{
			fuckThisInThisFuckingSetinterval.sli(speed);
			if(i>=to) {clearInterval(toto); return fuckThisInThisFuckingSetinterval.element[0]}
			i++;
		}, speed);
		return to*speed;
	}
	actualite()
	{
		return this.element[0] ;
	}
}	