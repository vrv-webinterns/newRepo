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
  <link rel="stylesheet" href="slide1.css">
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
<h1><b><center style="padding-top:20px;color:black;font-size:51px;font-family: 'Montserrat', sans-serif;">Online Registration</center></b></h1> 

</div>

  <div class="mySlides1">
    <img src="https://www.studyabroad.com/sites/default/files/images/iStock-498861460.jpg" style="width:100%;height:550px;">
  </div>

  <div class="mySlides1">
    <img src="https://pacs.ou.edu/filer/sharing/1512063122/4620/" style="width:100%;height:550px;">
  </div>

  <div class="mySlides1">
    <img src="https://www.gradschools.com/sites/all/files/public/images/iStock-510482146.jpg" style="width:100%;height:550px;">
  </div>

  <div class="mySlides1">
    <img src="https://i.amz.mshcdn.com/u3tzaLA8KrDOXrRohCRSrHXg3KQ=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F693119%2F2f888a8c-9dbb-471a-afc6-9b595e269bdb.jpg" style="width:100%;height:550px;">
  </div>

  <a class="prev" onclick="plusSlides(-1, 0)">&#10094;</a>
  <a class="next" onclick="plusSlides(1, 0)">&#10095;</a>




<script>
var slideIndex = [1];
var slideId = ["mySlides1"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
</script>
</div>
</center>
<br />
  <div class="container">
    <span id="brown">REGISTRATION</span>
    <hr style="height:2px;background-color:#C36464;"/>

     <form>
     <div style="position:absolute;top:1600px;left:0px;right:0px;bottom:0px;
  width:600px;height:580px;margin:auto;background-color:white;border-style:solid;border-color:#ddd;border-width:1px;border-radius:1px;">

      
        <span style="background-color:lightgrey;width:500px;height:100px;"> </span>
        <div class="bck_grey"><br>
        <div id="sreg" style="font-size:20px;">Student Registration</div>
        </div>
        <hr style="height:1px;background-color:#C36464;"/>

        <span id="sreg">Student Name</span><br/>
        <span id="sreg"><input id="textbox" type="text"/></span><br/><br/>
        <span id="sreg">Student Reg No</span><br/>
        <span id="sreg"><input id="textbox" type="text"/></span><br/><br/>
        <span id="sreg">Branch</span><br/>
        <span id="sreg"><input id="textbox" type="text"/></span><br/><br/>
        <span id="sreg">Year</span><br/>
        <span id="sreg"><input id="textbox" type="text"/></span><br/><br/>
        <span id="sreg">Mail ID</span><br/>
        <span id="sreg"><input id="textbox" type="text"/></span><br/><br/>
        <span id="sreg">Phone Number</span><br/>
        <span id="sreg"><input id="textbox" type="text"/></span><br/><br/>
        <button type="submit" value="Register" name="register" id="reg_btn">Submit</button>
       </div>
     </form>
    </div>
  
</body>
</html>