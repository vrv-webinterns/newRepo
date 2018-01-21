var input=document.getElementById("input");
var input2 = document.getElementById("btn");
input2.addEventListener("click",myFunction2,false);
function myFunction2()
{
	input.value=""
}

input.addEventListener("keydown",myFunction,false);
function myFunction(event)
{
	if(event.keyCode==13)
	{
		if(input.value.length<1 || input.value[0]==" ")
		{
			alert("Enter the input in correct format");
		}
		else
		{
			MyFun(input.value);
		}
	}
}

function MyFun(val)
{	
	var input=document.getElementById("input");
	input.value=null;
	
	var ul=document.getElementById("uls");
	var list=document.createElement("LI");
	
	var inp=document.createElement("INPUT");
	inp.type="checkbox";
	list.appendChild(inp);
	
	var lb=document.createElement("LABEL");
	lb.appendChild(document.createTextNode(val));
	list.appendChild(lb);
	
	var an=document.createElement("A");
	an.href="#";
	an.innerHTML="Delete";
	an.classList.add("d1");
	list.appendChild(an);
	ul.appendChild(list);
}

