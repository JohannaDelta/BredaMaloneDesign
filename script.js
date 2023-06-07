// JavaScript Document


//https://stackoverflow.com/questions/13975891/change-image-in-html-page-every-few-seconds 


 		  var images = [], x = -1;
          images[0] = "photos/breda_hat.jpg";
		  images[1] = "photos/Breda&Max.jpg";
 		  images[2] = "photos/breda_chair.jpg";

 		  var images2 = [], y = -1;
          images2[0] = "photos/breda_brush2.jpg";
		  images2[1] = "photos/breda_brush.jpg";
  
		  var images3 = [], z = -1;
          images3[0] = "photos/breda_studio2.jpg";
		  images3[1] = "photos/breda4.jpg";
		  images3[2] = "photos/breda_studio.jpg";

		  
		  function startTimer() {		  
			 setInterval(displayNextImage, 3000);
			  
		  }				  
 		  function displayPreviousImage() {
              x = (x <= 0) ? images.length - 1 : x - 1;
              document.getElementById("Image").src = images[x];
			  y = (y <= 0) ? images2.length - 1 : y - 1;
              document.getElementById("Image2").src = images2[y];
			  y = (z <= 0) ? images3.length - 1 : z - 1;
              document.getElementById("Image3").src = images3[z];
          }
		  function displayNextImage() {
              x = (x === images.length - 1) ? 0 : x + 1;
              document.getElementById("Image").src = images[x];
			 y = (y === images2.length - 1) ? 0 : y + 1;
			 document.getElementById("Image2").src = images2[y];
			 z = (z === images3.length - 1) ? 0 : z + 1;
             document.getElementById("Image3").src = images3[z];
          }

		  
  	
		 function loginCheck() {
			 
			 email= document.getElementById("mailIn").value;
			 pass = document.getElementById("passIn").value;
			 
			 if (email== "" && pass== "") {
				 document.getElementById("passIn").style.visibility="hidden";
				 document.getElementById("mailIn").style.visibility="hidden";
				 document.getElementById("loginStatus").style.visibility="hidden";
				 document.getElementById("logstate").innerHTML= "Welcome! You are logged in";
				 document.getElementById("loginButton").style.visibility="hidden";
				 document.getElementById("loginButton").style.visibility="hidden";
				 document.getElementById("closeButton").innerHTML="Click here to close window";
				 document.getElementById("loginResult").innerHTML="You are now logged in";
			 } else {
				 document.getElementById("logstate").innerHTML = ("Incorrect. Please try again.")
			 }
		 }






	function validateForm() {
		  var x = document.forms["loginForm"] ["user"].value;
		  if (x == null || x=="" ){
			alert("To log in username must be filled out");
			return false;
		  }
		  var y=document.forms["loginForm"]["password"].value;
		  if (y==null || y==""){
			alert("To log in password must be filled out");
			return false;
		  }
	}



