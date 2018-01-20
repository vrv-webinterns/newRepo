var values="0";

function display(vale)
{
		if(values=="0")
		{
			values=vale;
		}		
		 else
		{
			values=values+vale;
			
		
		}
		document.getElementById("text").value=values;
		
		
}
function equal()
{
	if(values.substring(1,1)=="^")
	{	alert(1);
		var a,b;
	a=values.substring(0,0);
	b=values.substring(2,2);
	var c=Math.pow(a,b);
	document.getElementById("text").value=c;
	}
	else{
	document.getElementById("text").value=eval(values);
	values=eval(values);
	}
	
}

function cle()
{
	if(values!="0")
		
		{ 
			values="0";
			document.getElementById("text").value=values;
		}
		else 
			document.getElementById("text").value=values;
}

function del()
{
	var a=values.length;
	values=values.substring(0,a-1);
	document.getElementById("text").value=values;
	
	
}

// function tothepower()
// {
	// var a,b;
	// a=values.substring(0,0);
	// alert(a);
	// b=values.substring(2,2);
	// var c=Math.pow(a,b);
	// document.getElementById("text").value=c;
// }