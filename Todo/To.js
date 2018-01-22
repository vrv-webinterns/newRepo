(
function ()
 {
    alert('Welcom to Todo list App');  	
 }
 )();
 
document.getElementById("btn").addEventListener("click",clear);
function clear()
{
	document.getElementById("nw").value="";
	alert('Clear text box'); 
 	
}
var Item = document.getElementById("nw");
Item.addEventListener("keydown",keyDown);
function keyDown()
{
	if(event.keyCode==13)
	{
		console.log(Item);
		if(Item.value.length < 1 || Item.value == " ")
		{
			alert("enyter proper input");
		}
		else
		{
			insertItem(Item.value);
		}
	}
}

function insertItem(Item)
{
    ul = document.getElementById("space");
	count = ul.childElementCount;
	
	var list=document.createElement("li");
	var check=document.createElement("input");
	check.type="checkbox";
	check.id = "c"+count;
	var label=document.createElement("label");
	var ele=document.createTextNode(" "+Item);
	label.appendChild(ele);
	
	var anc=document.createElement("a");
	anc.className="del";
	anc.id="delete"+count;
	anc.href="#";
	anc.innerHTML="Delete";
	
	var hrr=document.createElement("hr");
	
	list.appendChild(check);
	list.appendChild(label);
	list.appendChild(anc);
	list.appendChild(hrr);
	ul.appendChild(list);
	count++;
}
var Item1=document.getElementById('space');
Item1.addEventListener('click',strike);
function strike()
{
	var v=event.target.type;
	if(v=='checkbox')
	{
		var check1=event.target.id;
		strike1(check1);
	}

	else if(event.target.classList.contains('del'))
	{
		var id=event.target.id;
		    dell(id);
	}
}
function strike1(check1)
{
	check1=document.getElementById(check1);
	if(check1.checked)
	{
		item=check1.nextSibling;
		item.classList.add('dec');
	}
	else
    {
			item.classList.remove('dec');
    }
	
}
		
function dell(id)
{
	 var d=document.getElementById(id);
	 d.parentNode.parentNode.removeChild(d.parentNode);
}