(function(){
	//alert("Welcome to todo List App");
	//document.getElementById("clearButon").addEventListener('click', clrscreen);
	var handle = document.getElementById("inputBox");
	handle.addEventListener("keydown",handler,false);
	function handler(event){
		if(event.keyCode === 13)
		{	
			if(handle.value.length <= 0){
				alert("enter something");
			}
			else{
			var ul = document.getElementById("ullist");
			var item = handle.value;
			var li = document.createElement("li");
			var check = document.createElement("input");
			check.type = "checkbox";
			var label = document.createElement("label");
			label.appendChild(document.createTextNode(item));
			var a = document.createElement("a");
			a.classList.add("delete");
			a.href = "#";
			a.innerHTML = "Delete";
			li.appendChild(check);
			li.appendChild(label);
			li.appendChild(a);
			ul.appendChild(li);
			var count = ul.childElementCount;
			check.id = "count" + count;
			a.id = "delete"+count;
			handle.value = "";
			count++;
			}
		}
	}
	var ul = document.getElementById("ullist");
	ul.addEventListener('click',checkHandler);
	function checkHandler(event){
		if(event.target.type == 'checkbox'){
			var id = event.target.id;
			checkEffect(id);
		}
		else if(event.target.classList.contains("delete")){
			var id = event.target.id;
			deletethis(id);
		}
	}
	function deletethis(id){
		id = document.getElementById(id);
		var liid = id.parentNode;
		id.parentNode.parentNode.removeChild(liid);
	}
	function checkEffect(id){
		var check1 = document.getElementById(id);
		var label = check1.nextSibling;
		if(check1.checked){
		console.log(label);
		label.classList.add("newLabel");
		}
		else{
			label.classList.remove("newLabel");
			
		}
	}
	
	
	
	deleteitm.addEventListener("click",deleteHandle);
	function deleteHandle(){
		var check1 = document.getElementById(id);
		var lengt = document.getElementById("ullist").childNodes.length;
		alert(lengt);
		
	}
	/*var clrbtn = document.getElementById("clr");
	clrbtn.addEventListener('click',clrscreen);
	function clrscreen(){
		clrbtn.value = "";
	}*/
	
})();