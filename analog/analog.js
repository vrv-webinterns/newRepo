function start()
{
	var d,h,m,s;
	d=new Date();
	
    h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
    m = 6 * d.getMinutes();
    s = 6 * d.getSeconds();
    
 
    setAttr('h-hand', h);
    setAttr('m-hand', m);
    setAttr('s-hand', s);
    setAttr('s-tail', s+180);
    
	 s=d.getSeconds();
	 m=d.getMinutes();
 h=d.getHours();
	if(h>=12)
		am='pm';
	else
		am='am';
	if(h>12)
		h=h%12;
timeset('s',s);
	timeset('m',m);
	timeset('h',h);
timeset('am',am);
setTimeout}

function setAttr(id,val){
    var v = 'rotate(' + val + ', 70, 70)';
    document.getElementById(id).setAttribute('transform', v);
};

