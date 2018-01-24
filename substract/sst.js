function subs()
{

var text1,text2;
var result;
text1=document.getElementById("first").value;
text2=document.getElementById("second").value;
if(text1=="" || text2=="" )
   {
	   alert("error");
   }
   else
   { 
		if(isNaN(text1)&& isNaN(text2))
		{
			alert("invalid inputs");
		}
		else if(isNaN(text1))
		{
			alert("invalid number");
		}
		else if(isNaN(text2))
		{
			alert("invalid number");
		}
		else
   {
result=Number(text1)-Number(text2);
document.getElementById("result").value=result;
   }
   }
}
function clear1()
{
	document.getElementById("first").value=" ";
	document.getElementById("second").value=" ";
	document.getElementById("result").value=" ";
}
