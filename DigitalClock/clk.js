var d,h,m,s,animate;

function init(){
	
    d=new Date();
	y=d.getFullYear();
	n=d.getMonth()+1;
	dt=d.getDate();
	document.getElementById("date").innerHTML=dt+"/"+n+"/"+y;
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
	if(h>=12)
	{
		setime('ampm',"PM");
	}
	else{
		setime('ampm',"AM");
	}
	if(h!=12)
	{
		h%=12;
		if(h==0){
		h+=12;
		}
	}
    setime('sec',s);
    setime ('min',m);
     setime('hr',h);
    animate=setTimeout(init,1000);
};

function  setime(id,val){
    if(val<10){
        val='0'+val;
    }
    document.getElementById(id).innerHTML=val;
};



