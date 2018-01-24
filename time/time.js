function clock()
{ 	
	var date= new Date();
	 h=date.getHours();
	 m=date.getMinutes();
	 s=date.getSeconds();
	 if(h>=12)
	 {
		 display('ab','PM');
	 }
		 else
		 {
		 display('ab','AM'); 
		 }
	if(h !=12)
	{
		h%=12;
	if(h==0)
	{
		h=h+12;
	}
	}
	 display('hr',h);
	 display('min',m);
	 display('sec',s);
}

function display(id,val)
{
	if(val<10)
		{
			val="0"+val;
		}
	
	document.getElementById(id).innerHTML=val;
}
window.onload=clock;
setInterval(clock,1000);

	
				