function start()
{
	
	var d=new Date();
	 s=d.getSeconds();
	 m=d.getMinutes();
 h=d.getHours();
	if(h>=12)
		am='pm';
	else
		am='am';
	if(h>12)
		h=h%12;
timeset('s',s);
	timeset('m',m);
	timeset('h',h);
	timeset('am',am);
}
function timeset(id,val){
	if(val<10)
	{
		val='0'+val;
	}
	document.getElementById(id).innerHTML=val;
}
setInterval(start,1000);