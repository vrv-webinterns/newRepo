(function()
{
	alert("Welcome to to do list app");
})();
document.getElementById("bt").addEventListener("click",clear);
function clear()
{
	alert("Cleared");
	document.getElementById("ip").value="";
}
var item=document.getElementById("ip");
item.addEventListener("keydown",keydown);
function keydown()
{
	if(event.keyCode==13)
	{
		if(item.value.length<1||item.value=="")
			alert("Enter the proper input");
		else
			insert(item.value);
	}
}
function insert(item)
{
	alert(item);
	var ul = document.getElementById("space");
	count = ul.childElementCount;
	var list=document.createElement("li");
	var check=document.createElement("input");
	check.type="checkbox";
	check.id = "check"+count;
	list.appendChild(check);
	var label=document.createElement("label");
	var ele=document.createTextNode(" "+item);
	label.appendChild(ele);
	list.appendChild(label);
	var anc=document.createElement("a");
	anc.href="#";
	anc.innerHTML="Delete";
	anc.id = "delete"+count;
	anc.className="delete";
	list.appendChild(anc);
	var h=document.createElement("hr");
	list.appendChild(h);
	ul.appendChild(list);
	count++;
}
var j=document.getElementById("space");
j=addEventListener('click',check);
function check()
{
	var v=event.target.type;
	if(v=='checkbox')
	{
		var checks=event.target.id;
		strike(checks);
	}
	else if(event.target.classList.contains("delete"))
	{
		var k=event.target.id;
		del(k);
	}
}
function strike(checks)
{
	
	checks=document.getElementById(checks);
	if(checks.checked)
	{
		i=checks.nextSibling;
		i.classList.add("addlabel");
	}
	else
		i.classList.remove("addlabel");
}
function del(k)
{
	delitem=document.getElementById(k);
	delitem.parentNode.parentNode.removeChild(delitem.parentNode);
}