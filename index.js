
var myIndex = 0;
window.onload = function(){
    carousel();
}



function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function Scroll1() {
document.getElementById('1').scrollIntoView({block: 'start', behavior: 'smooth'})
}
function Scroll2() {
document.getElementById('2').scrollIntoView({block: 'start', behavior: 'smooth'})
}
function Scroll3() {
document.getElementById('3').scrollIntoView({block: 'start', behavior: 'smooth'})
}
function Scroll4() {
document.getElementById('4').scrollIntoView({block: 'start', behavior: 'smooth'})
}


function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000); // Change image every 2 seconds
}