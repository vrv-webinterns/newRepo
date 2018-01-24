var val=0;

function cal()
{
	var i=event.target.value;
	if(val==0)
	{
		val=i;
		document.getElementById("result").value=val;
	}
	else if(i=='=')
	{
		var res=eval(val);
		document.getElementById("result").value=res;
	}
	else if(i=='c')
	{
		document.getElementById("result").value=" ";
		val=0;
	}
	else
	{
		val=val+i;
		document.getElementById("result").value=val;
	}
}