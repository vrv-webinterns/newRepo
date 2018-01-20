var d,h,m,s,an,ampm,e,f,g;
function init()
{
d=new Date();
h=d.getHours();
m=d.getMinutes();
s=d.getSeconds();
e=d.getDate();
f=d.getMonth()+1;
g=d.getFullYear();
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
dat('date',e);
dat('mon',f);
dat('yr',g)
an=setTimeout(init,1000);
};
function dat(id,val){
	document.getElementById(id).innerHTML= val;
}
function $(id,val){
if(val<10){
val='0' + val
}
document.getElementById(id).innerHTML= val;

};
