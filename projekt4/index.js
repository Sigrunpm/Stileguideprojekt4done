
onclick="document.getElementById('demo').innerHTML = Date()"

// Alt herunder er vores galleri, til profilbilleder:

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//Herunder er burgermenu lavet ved brug af
var burgerMenu = document.getElementById('burgermenu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});




console.log("events.js is running...");
function myFunction(){
    let value, text, inputObject;

    //Get the value of the input field with id"numb"
    inputObject = document.getElementById("numb");
    value= parseFloat(inputObject.value);
 
    //if x is not a number
    if (isNaN(value)){
        text="input not valid";
    }
    else{
        text="input ok";
        inputObject.value= value+1;
    }
    console.log(text);
}

