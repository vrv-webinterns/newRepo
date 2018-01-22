var d,h,m,s,t;
function init() {
	d = new Date();
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();
	clock();
}
function clock() {
	s++;
	if(s==60)
	{
		s=0;
		m++;
	}
	if(m==60)
	{
		m=0;
		h++;
	}
	if(h==24)
	{
		h=0;
	}
	 time(h);
	 time(m);
    time(s);
	document.getElementById("txt").innerHTML = h+":"+m+":"+s;
	t= setTimeout(init,500);
}
       


function time(val)
{
	if(val < 10)
	{
		val = '0' + val;
		return val;
	}
	
	
}