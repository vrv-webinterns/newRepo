function clock()
{
	var d,h,m,s;
	var d=new Date();
	var s=6*d.getSeconds();
	var h=30*((d.getHours()%12)+d.getMinutes()/60);
	var m=6*d.getMinutes();
	
	
	setAttr('h-hand',h);
	setAttr('m-hand',m);
	setAttr('s-hand',s);
	
	s=d.getSeconds();
	h=d.getHours();
	m=d.getMinutes();
	  
	if(h>=12){
		display('fo','PM')
	}else{
		display('fo','AM')
	}
	
	if(h != 12){
		h %= 12;
		if(h == 0){
			h= h+12;
		}
	} 
		
	display('hr',h);
	display('min',m);
	display('sec',s);
	
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
		{
			val="0"+val;
			 
		}
		document.getElementById(id).innerHTML=val;
		
	 
	 
 }
 window.onload = clock; 
