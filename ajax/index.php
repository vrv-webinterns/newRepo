<!DOCTYPE html> 
	<html> 
		<head> 
			<title>Form </title> 
			<script type="text/javascript" src="js/jquery.min.js"></script> 
			
			<link rel = "stylesheet" type = "text/css" href = "style.css"/>
			<script src="script.js" type="text/javascript"></script> 
		</head> 
		<body> 
			<div id="mainform"> 
				<div class="innerdiv"> 
					<h1> Form </h1> 
					<!-- Required Div Starts Here --> 
						<form id="form" name="form"> 
							<h3>Fill Your Information!</h3> 
							<div> 
								<label>Name :</label>
								<input id="name" type="text"> 
								<label>Email :</label> 
								<input id="email" type="text"> 
								<label>Password :</label> 
								<input id="password" type="password"> 
								<input id="submit" onclick="myfunction()" type="button" value="Submit">
							</div> 
							</form> 
							<div id="clear"></div> 
				</div> 
				<div id="clear"></div> 
			</div> 
		</body> 
	</html>
