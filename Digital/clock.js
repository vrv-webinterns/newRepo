function clock()
{
	var d=new Date();
	h=d.getHours();
	m=d.getMinutes();
	s=d.getSeconds();
	if(h>=12)
	{
		display('ampm','PM');
	}
	else
	{
		display('ampm','AM');
	}		
	if(h!=12)
	{
		h=h%12;
		if(h==0)
		{
			h=12;
		}
	}
	display('h',h);
	display('m',m);
	display('s',s);
	
}
function display(id,val)
{
	if(val<10)
		val='0'+val;
	document.getElementById(id).innerHTML=val;
	
}
setInterval(clock,1000);