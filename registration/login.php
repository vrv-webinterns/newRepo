<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="s1.css">
</head>
<body style="background-color:white;">
<center>
<div class="container-fluid">
<div class="jumbotron" style="margin-top: 3px;">
<nav class="navbar navbar-default navbar-fixed-top">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#" id="pushDown"  style="padding-top:20px;font-size:18px;font-family:verdana">
      <img src="http://localhost/myproj/logo1.jpg" class="img-responsive center-block" id="logo"></a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
        <ul ID="drop" class="nav navbar-nav navbar-right">
          <li><a href="#">HOME</a></li>
          <li><a href="#">COURSES</a></li>
          <li><a href="#">PACKAGES</a></li>
          <li><a href="#">PRINT</a></li>
          
          <li><a href="http://localhost/myproj/login.php" class="btnLogin">LOGIN</a></li>
       </ul>
    </div>
</nav>
<h1><b><center style="padding-top:20px;padding-bottom:20px;color:black;font-size:51px;font-family:'Montserrat', sans-serif;">Online Registration</center></b></h1> 
</div>
</div>
</center>
<br />
  <div class="container">
    <span id="brown">LOGIN</span>
    <hr style="height:2px;background-color:#C36464;"/>

     <form>
     <div style="position:absolute;top:500px;left:0px;right:0px;bottom:0px;
  width:600px;height:400px;margin:auto;background-color:white;border-style:solid;border-color:#ddd;border-width:1px;border-radius:1px;">

      
        <span style="background-color:lightgrey;width:500px;height:100px;"> </span>
        <div class="bck_grey"><br>
        <div id="sreg" style="font-size:20px;">Student Login</div>
        </div>
        <hr style="height:1px;background-color:#C36464;"/>
        <span id="sreg">Email</span><br/>
        <span id="sreg"><input id="textbox" type="text"/></span><br/><br/>
        <span id="sreg">Password</span><br/>
        <span id="sreg"><input id="textbox" type="text"/></span><br/><br/>
        <span id="sreg">Forgot <a href="#">password?</a></span><br/><br/>
        <button type="submit" value="Register" name="register" id="reg_btn">Submit</button>
       </div>
     </form>
    </div>
    <div class="container-fluid">
     <div class="jumbotron" style="margin-top:500px;"></div>
     </div>

</body>
</html>