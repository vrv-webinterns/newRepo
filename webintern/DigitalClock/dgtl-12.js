var h,m,d,s,anim;
function read()
{
	d=new Date();
	h=d.getHours();
	m=d.getMinutes();
	s=d.getSeconds();

	if(h>=12 && h<24)
	{
		times('ampm','PM');
	}
	else
	{
		times('ampm','AM');
	}
	
	if(h!=12)
	{
		h%=12;
		if(h==0)
		{
			h+=12;
		}
	}
	
	times("hr",h);
	times("min",m);
	times("sec",s);
	anim = setTimeout(read,1000);
}

function times(id,val)
{
	if(val<10)
	{
		val="0"+val;
	}
	document.getElementById(id).innerHTML= val;
}
window.onload=read;	
