var d,h,m,s,animate;
function init()
{
	d=new Date();
	y=d.getFullYear();
	m=d.getMonth() + 1;
	da =d.getDate();
	document.getElementById("date").innerHTML=m+"/"+da+"/"+y;
	h=d.getHours();
	m=d.getMinutes();
	s=d.getSeconds();
	
	if(h>=12)
	{
		setTime('ampm',"PM");
	}
	else{
		setTime('ampm',"AM");
	}
	
	if(h!=12)
	{
		h%=12;
	if(h==0)
	{
		h+=12;
		}
	}
	setTime('sec',s);
		setTime('min',m);
		setTime('hr',h);
	animate=setTimeout(init,1000);
};
	function setTime(id,val){
		
	if(val<10)
	{
		val='0'+val;
	}
	document.getElementById(id).innerHTML=val;
	
	
	};
	