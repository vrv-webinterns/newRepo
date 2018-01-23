(function()
{
alert("Welcome to toDO list app");
})();
/*
var tb;
tb=document.getElementById("txt");
tb.addEventListener("keydown",fun);
function fun(){
 if(tb.keyCode==13){
	 document.createElement("");	
}
*/
var ul = document.getElementById("list");
var count = ul.childElementCount;
var inBox=document.getElementById("myTxt");
inBox.addEventListener("keydown",ad);
function ad()
{
	if(event.keyCode==13)
	{
		if(inBox.value.length<1 || inBox.value=="")
		{
			alert("enter corect text");
		}
		else
		{
			// insertItem(inBox.value);
			var item=myTxt.value;
			myTxt.value="";
			var ul=document.getElementById("list");
			var count=ul.childElementCount;
			var hr=document.getElementById("hr");
			
			var li=document.createElement("li");
			var check=document.createElement("input");
			check.type="checkbox";
			check.id="chk"+count;
			
			var label=document.createElement("label");
			label.appendChild(document.createTextNode(item));
			
			var a=document.createElement("a");
			a.innerHTML="DELETE";
			a.href="#";
			a.style="float:right";
			a.className="delete";
			a.id = "ten"+count;
				li.appendChild(check);
				li.appendChild(label);
				li.appendChild(a);
				ul.appendChild(li);
			}
	} 
			
}

var div=document.getElementById("itemcontainer");
div.addEventListener("click",Myfun,false);
/* function insertItem(val)
{
	alert(val);
} */
function Myfun(){
	if(event.target.type=="checkbox")
	{
		var checkid=event.target.id;
		checkFun(checkid);
	}
	else if(event.target.classList.contains("delete")){ 
	id=event.target.id;
	deleteitem(id);
}
}
function deleteitem(id){
	did=document.getElementById(id);
	console.log(did.parentNode.parentNode)
	did.parentNode.parentNode.removeChild(did.parentNode);	
}
function checkFun(id)
{
id = document.getElementById(id);
if(id.checked)
{
	label = id.nextSibling;
	label.classList.add("addlabel");
}
else{
	label.classList.remove("addlabel");
}
}

var clrButton = document.getElementById("but");
clrButton.addEventListener("click",remove,false);
 function remove(){
	l = document.childNodes.length;
	while(l>0){
		i = document.childNodes[0];
		document.removeChild(i);
	}
}
//Alternate Remove function
/* function remove(){
	document.body.innerHTML = '';
} */


