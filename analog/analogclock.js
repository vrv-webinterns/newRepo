function clock()
{
	 var d,b,m,s;
	 d=new Date();
	 h=30*((d.getHours()%12)+d.getMinutes()/60);
	 m=6*d.getMinutes();
	 s=6*d.getSeconds();
	 setAttr('h-hand',h);
	 setAttr('m-hand',m);
	 setAttr('s-hand',s);
	 h=d.getHours();
	 m=d.getMinutes();
	 s=d.getSeconds();
	 if(h>=12)
		 display('suffix','PM');
	 else
		 display('suffix','AM');
	 if(h!=12)
		 h=h%12;
	     if(h==0){
			 h=h+12;
		 }

	 display('s',s);
	 display('m',m);
	 display('h',h);
	 setTimeout(clock,1000);
};
function setAttr(id,val)
{ 
    var v='rotate('+val+',70,70)';
	document.getElementById(id).setAttribute('transform',v);
};
function display(id,val)
{
	
	 if(val<10)
		 val="0"+val;
	 document.getElementById(id).innerHTML=val;
}
window.onload=clock;