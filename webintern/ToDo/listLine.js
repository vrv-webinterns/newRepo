var ul=document.getElementById("uls");
var count=ul.childElementCount;


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
	
	var list=document.createElement("LI");
	
	var inp=document.createElement("INPUT");
	inp.type="checkbox";
	inp.id="check"+count;
	list.appendChild(inp);
	
	var lb=document.createElement("LABEL");
	lb.appendChild(document.createTextNode(val));
	list.appendChild(lb);
	
	var an=document.createElement("A");
	an.href="#";
	an.innerHTML="Delete";
	an.classList.add("d1");
	
	an.id="dlt"+count;
	count++;
	list.appendChild(an);
	ul.appendChild(list);
	
	alert(an.id);
	
}

var ul=document.getElementById("uls");
ul.addEventListener('click',myCbox,false);
function myCbox()
{	
	if(event.target.type=="checkbox")
	{
		
		var checkboxid=event.target.id;
		checkboxFun(checkboxid);
		
	}
	else if(event.target.classList.contains('d1'))
	{
		var did=event.target.id;
		delt(did);
	}
	
}

function checkboxFun(id)
{
	var check=document.getElementById(id);
	if(check.checked)
	{
		lb=check.nextSibling;
		lb.classList.add("box");
	}
	else
	{
		lb.classList.remove("box");
	}
}

function delt(id)
{
	var del=document.getElementById(id);
	alert(id);
	
	console.log(del)
	console.log(del.parentNode);
	del.parentNode.parentNode.removeChild(del.parentNode);
	//del.parentNode.parentNode.removeChild(del.parentNode);
}
