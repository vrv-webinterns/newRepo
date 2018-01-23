var d,h,m,s,an,ampm;
function init()
{
d=new Date();
y=d.getFullYear();
m=d.getMonth() + 1;
da=d.getDate();
document.getElementById("date").innerHTML= m+ "/" + da + "/"+ y;



h=d.getHours();
m=d.getMinutes();
s=d.getSeconds();
if(h>=12)
{
	$('ampm',"PM")
}
else{
	$('ampm',"AM")
}
if(h!=12)
{
h=h%12;
}	
$('sec',s);
$('min',m);
$('hr',h);
an=setTimeout(init,1000);
}
function $(id,val) 
{
if(val<10){
val='0' + val
}
document.getElementById(id).innerHTML= val;

}
