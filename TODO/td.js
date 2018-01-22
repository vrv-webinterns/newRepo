 (
 function()
{
	alert('welcome to do list page');
})(); 


document.getElementById("clear").addEventListener("click", function(){
    alert("data cleared!!");
});
 
 
var Item =  document.getElementById('box');
Item.addEventListener('keydown',check);

function check()
{
 	if(event.keyCode == 13)
	{
		if(Item.value.length<1)
		{
			alert("invalid input");
		}
		else
		{	
				insert(Item);
		}
	}
	
}
function insert(Item)
{
			ul = document.getElementById("u1");
			count = ul.childElementCount;
			var itemlist=Item.value;
			Item.value="";
			var li=document.createElement("LI");
			var check= document.createElement("INPUT");
			check.type="checkbox";
			check.id = "check"+count;
			var label=document.createElement("LABEL");
			li.classList.add('check');
			var hr=document.createElement("HR");
			label.appendChild(document.createTextNode(itemlist));
			var anch=document.createElement('a');
			anch.className = "del";
			anch.id = "delete"+count;
			var ul=document.getElementById('u1');
			anch.href="#";
			anch.innerHTML="DELETE";
			li.appendChild(check);
			li.appendChild(label);
			li.appendChild(anch);
			li.appendChild(hr);
			ul.appendChild(li);
			count++;
}

var Item1 = document.getElementById('u1');
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
		deleteItem(id);
	
	} 
}

function strike1(check1)
{
	check1=document.getElementById(check1);
	if(check1.checked)
		{
			item = check1.nextSibling;
			item.classList.add('strike');
		}
		else
		{
			item.classList.remove('strike');
		}
}
function deleteItem(id){
	deleteItem1 = document.getElementById(id);
	deleteItem1.parentNode.parentNode.removeChild(deleteItem1.parentNode);
}