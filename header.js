var header = document.getElementById("header");
var sxn2 = document.getElementById("two");
var sxn3 = document.getElementById("three");
var hh = header.offsetHeight;


window.addEventListener("scroll", function() {
  if (pageYOffset < sxn2.offsetTop - hh) {
    header.style.backgroundColor = "pink";
    changeImage("Assets/Logo-2.png");
  }

  else if ((pageYOffset >= sxn2.offsetTop - hh) && (pageYOffset <= sxn2.offsetTop)) {
    header.style.backgroundColor = "blue";
    changeImage("Assets/Logo-1.png");
  }
})


function changeImage(a) {
  document.getElementById("logo").src = a;
}

