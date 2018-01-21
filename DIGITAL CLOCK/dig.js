 function dat()
 {
	 var d=new Date();
	 var s=d.getSeconds();
	 var h=d.getHours();
	 var m=d.getMinutes();
	 
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


 }
 
 function display(id,val)
 {
		 
	 
//	 document.getElementById(id).innerHTML.value = val;
	 if(val<10)
		{
			val="0"+val;
			 
		}
		document.getElementById(id).innerHTML=val;
		//dis3.value=valh; */
		
	 
	 
 }
 window.onload = dat;
 setInterval(dat,1000);