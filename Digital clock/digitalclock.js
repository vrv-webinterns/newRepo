var d,h,m,s,anim,da,dt,dy;
function read()
{
	d= new Date();
	da=d.getDate();
	dt=d.getMonth()+1;
	dy=d.getFullYear();
	h=d.getHours();
	m=d.getMinutes();
	s=d.getSeconds();
	if(dt<10){
		dt="0"+dt;
	}
document.getElementById('day').innerHTML=da+"/"+dt+"/"+dy;	
	if(h<12){
		times('Am/Pm',"Am");
	}else
	{
		times('Am/Pm',"Pm");
	}
	if(h!=12){
		h%=12;
		if(h==0)
			{
				h+=12;
		}			
		
	}
times("h1",h);
times("m1",m);
times("s1",s);
}

function times(id,val)
{
	if(val<10)
	{
		val="0"+val;
	}
	
	document.getElementById(id).innerHTML= val;
	
}
window.onload=read
setInterval(read,1000);