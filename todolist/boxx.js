
 (function(){
alert("Welcome To Do List")
})();



document.getElementById("but").addEventListener("click",fun);
function fun(){
document.getElementById("text").value="";
}






 var InputBox=document.getElementById("text");
 InputBox.addEventListener("keydown",function(){
	if(event.keyCode == 13){
	InputBox=document.getElementById("text");
	if(InputBox.value.length < 1)
	{
		alert("enter proper input")
	}
	else{
		insertItem(InputBox.value)
		}
	}
});

	function insertItem(valu){
	
		var item=valu;
		InputBox.value=""
		var ul=document.getElementById("list");
		count = ul.childElementCount;
		var hr=document.createElement("hr");
		ul.appendChild(hr);
		var li=document.createElement("li");
		var check=document.createElement("input");
		check.type="checkbox";
		check.id = "ch"+count;
		var label=document.createElement("label");
		label.appendChild(document.createTextNode(item));
		
		var a=document.createElement("a");
		a.innerHTML="delete";
		a.style="float:right"
		a.href="#";
		a.classList.add=("right");
				li.appendChild(check);
						li.appendChild(label);
						li.appendChild(a);
						ul.appendChild(li);
	}
	
	var div=document.getElementById("ic");
	div.addEventListener("click",checkFun,false);
	
	function checkFun(){
            if(event.target.type ="checkbox")
			{
                var checkid=event.target.id;
                chfun(checkid);
			}
	}
        
    function chfun(id){
	var check1=document.getElementById(id);
		if(check1.checked)
		{
                        alert("item is selected");
						lable=check1.nextSibling;
						lable.classList.add("addlabel");
						
		}
         else
		 {
			 lable.classList.remove("addlabel");
		 } 				
	}
	