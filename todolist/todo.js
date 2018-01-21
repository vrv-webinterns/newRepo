(function()
{
	alert("Welcome to todo list");
	document.getElementById("bt").addEventListener("click",clear);
})();

function clear(){
	alert("clear");
document.getElementById("ip").value="";
}
	 var i=document.getElementById("ip");
i.addEventListener('keydown',KeyDown);

function KeyDown(){
	if(event.keyCode==13){
		if(i.value=="")
		alert("enter a proper input");
	else
	{
		var item=i.value;
		var ul=document.getElementById("order");
		var count=ul.childElementCount;
	var list=document.createElement('li');
	var check=document.createElement('input');
	check.type="checkbox";
	
	check.id="check"+count;
	list.appendChild(check);
	var label=document.createElement('label');
	label.appendChild(document.createTextNode(" "+item));
	list.appendChild(label);
	var anc=document.createElement('a');
	anc.href="#"
	anc.innerHTML="Delete";
	anc.id="delete"+count;
	anc.classList.add("d");
	var hr=document.createElement('hr');
		list.appendChild(anc);
		list.appendChild(hr);
		var u=document.createElement('ul');
		ul.appendChild(list);
		
	
	count++;
	}
	}
}
	var item1=document.getElementById("order");
	item1.addEventListener("click",assignlist);
	
function assignlist(){
	var v=event.target.type;
	if(v=='checkbox')
	{
	 var checks=event.target.id;
	 cEffect(checks);
	}
	else if(event.target.classList.contains("d"))
	{
		var k=event.target.id;
		del(k);
}
function cEffect(checks)
{
	checks=document.getElementById(checks);
	if(checks.checked)
	{
		o=checks.nextSibling;
		o.classList.add("adlabel");
	}
	else
		o.classList.remove("adlabel");
	}
}
function del(k)
{
	delitem=document.getElementById(k);
	delitem.parentNode.parentNode.removeChild(delitem.parentNode);
}