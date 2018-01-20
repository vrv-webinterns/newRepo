var d,h,m,s,animate;

function init(){
	
    d=new Date();
	y=d.getFullYear();
	m=d.getMonth()+1;
	dt=d.getDate();
	document.getElementById("date").innerHTML=dt+"/"+m+"/"+y;
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();


if(h>=12)
{
	settime('ampm',"PM");
            }
			else{
				settime('ampm',"AM");
				
        }
		if(h!=12)
		{
			h=h%12;
			
    }
	
	
		
    settime('sec',s);
    settime ('min',m);
     settime('hr',h);
    animate=setTimeout(init,1000);
	};

function  settime(id,val){
    if(val<10){
        val='0'+val;
    }
    document.getElementById(id).innerHTML=val;
};


