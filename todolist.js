(function(){
	alert("welcome to TODOLIST");
var item=document.getElementById("textbox");
	item.addEventListener("keydown",addItem);
 var ul=document.getElementById("list");
			
			var count=ul.childElementCount;
function addItem(event)
 {
		if(event.keyCode == 13)
		{
			if(item.value.length<1 || item.value[0]==" ")
			{
			alert("please enter the input");
			}
			
			else{
				myfunction(item.value);
				document.getElementById("textbox").value=null;
			}
		}
}

	var bttn=document.getElementById("clr");
	bttn.addEventListener("click",clear);
		function clear()
		{
			item.value="";
		}
		
		var btn=document.getElementById("clr");
	btn.addEventListener("click",clearbody);
		function clearbody()
		{
			document.getElementById = "";
		}
		
	
			
	
		function myfunction(val)
		{
			var item=val;
			item.value=null;
			
			var ul=document.getElementById("list");
			
			console.log(count);
			var	li=document.createElement("LI");
			li.classList.add("a");
			var check=document.createElement("INPUT");
			check.type="checkbox";
			check.id="chk"+count;
			li.appendChild(check);
		
			var label1=document.createElement("LABEL");
			label1.appendChild(document.createTextNode(item));
console.log(label1);
li.appendChild(label1);

			var a=document.createElement("A");
			a.href="#";
			a.id="delete"+count;
			a.innerHTML="Delete";
			a.classList.add("delete");
			li.appendChild(a);
			ul.appendChild(li);
			count++;
		}
		
		var div=document.getElementById("list");
		div.addEventListener('click',myfun);
		function myfun()
		{
			if(event.target.type=="checkbox")
				{
					id=event.target.id;
				checkEffect(id);
				}
				else if(event.target.classList.contains("delete"))
				{
				id=event.target.id;
				deleteItem(id);
				}
		}
		        function deleteItem(id)
				{
					del=document.getElementById(id);
					del.parentNode.parentNode.removeChild(del.parentNode);
				}
					
				function checkEffect(id)
				{
					console.log(id);
					
					chk=document.getElementById(id);
					
					label=chk.nextSibling;
					console.log(label);
					
					if(chk.checked)
					{
					label.classList.add("addlabel");
					}
					else
					{
						label.classList.remove("addlabel");
				    }
				}
						
				
			
})();