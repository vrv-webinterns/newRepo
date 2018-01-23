var val,h,m,s,animate;
function init() 
{
d=new Date();

h=d.getHours();
m=d.getMinutes();
s=d.getSeconds();

setTime('sec',s);
setTime('min',m);
setTime('hr',h);
var ap=(h<12)?"<span>AM</span>":"<span>PM</span>";
h=(h==0)?12:h;
h=(h>12)?h-12:h;
  document.getElementById("dc").innerHTML=h+":"+m+":"+s+" "+ap;
animate=setTimeout(init,1000);
};
function setTime(id,val){

if(val<10){
val='0'+val;
}
};
