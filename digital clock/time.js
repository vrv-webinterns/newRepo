var h,m,s,d,an,dt,mn,yr;
function t() {
     d = new Date();
	 
     h = d.getHours();
     m = d.getMinutes();
	 s = d.getSeconds();
	 dt= d.getDate();
	 mn=d.getMonth()+1;
	 yr=d.getFullYear();
	 if(mn<10)
	 {
		 mn="0"+mn;
	 }
	 document.getElementById('date').innerHTML=dt+"/"+mn+"/"+yr;	
	if(h<12)
	{
		setime('ampm',"AM");
	}
	else{
		setime('ampm',"PM");
	}
	if(h!=12)
	{
		h%=12
		if(h == 0){
			h+=12;
		}
	}
	
	setime('sec',s);
	setime('min',m);
	setime('hr',h);
	
	an=setTimeout(t,1000);
}
function setime(id,val) {
    if (val < 10)
		{
			val = "0" + val;
		}
    document.getElementById(id).innerHTML=val;

}