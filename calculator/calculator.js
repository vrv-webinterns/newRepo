var values=0;
function cal()
{
    var val=event.target.value;	
	if(values==0)
	{
		values=val;document.getElementById("d").value=values;
	}
	else if(val=='=')
	{
		var res=eval(values);
		document.getElementById("d").value=res;
	}
	else if(val=='C')
	{
		document.getElementById("d").value="";
		values=0;
	}
	else
	{
		values=values+val;
		document.getElementById("d").value=values;
	}
}

	