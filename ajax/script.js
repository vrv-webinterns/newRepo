function myfunction() {

	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var passwor = document.getElementById("password").value;
	if (name == '' || email == '' || passwor == '' ) {
	alert("Please Fill All Fields");
	}
	else
	{
	$.ajax({
		type: "POST",
		url: "ajaxjs.php",
		data : {
				'name2' :name,
				'email2' :email,
				'password2' :passwor,
				},
				dataType :"json",
		success: function(data) {
			if(data == 1) {
				alert("inserted") ;
			} else {
				alert("fail");
			}
		}
	});
}
return false;
}
