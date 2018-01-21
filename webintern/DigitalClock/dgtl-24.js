var h,m,d,s,anim;
function read()
{
	d=new Date();
	h=d.getHours();
	m=d.getMinutes();
	s=d.getSeconds();
	clock();
}

function clock()
{
	s++;
	if(s==60)
	{
		m++;
		s=0;
		if(m==60)
		{
			h++;
			m=0;
			if(h==24)
			{
				h=0;
			}
		}
	}
	times("hr",h);
	times("min",m);
	times("sec",s);
	anim = setTimeout(clock,1000);
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
