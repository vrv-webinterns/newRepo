(function(){
alert("welcome to todo list");

var text=document.getElementById("textbox");
text.addEventListener('keydown',keyDown);

function keyDown(event)
{
	if(event.keyCode==13)
	{
		if(text.value===" "||text.value==="")
		{
			var sh="enter correct value";
			alert(sh);
		}
	else{
		var item=text.value;
		text.value=" ";
		var ul=document.getElementById("listitem");
		var hr=document.createElement("hr");
		ul.appendChild(hr);
		var li=document.createElement("li");
		var check=document.createElement("input");
		check.type="checkbox";
		var label=document.createElement("label");
		label.appendChild(document.createTextNode(item));
		
		var a=document.createElement("a");
		a.innerHTML="Delete";
		a.href="";
		a.classList.add=("right");
				li.appendChild(check);
						li.appendChild(label);
						li.appendChild(a);
						//var ul=document.getElementById("ulist");
						ul.appendChild(li);
		
$('ul').click(function(e) {
	
	if ( $(e.target).is('a') ) {
		alert('clicked');
	}
});		
						
	}
	}
}
})();