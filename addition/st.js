function add()
{

var text1,text2;
var sum;
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
sum=Number(text1)+Number(text2);
document.getElementById("sum").value=sum;
   }
   }
}
function clear1()
{
	document.getElementById("first").value=" ";
	document.getElementById("second").value=" ";
	document.getElementById("sum").value=" ";
}
