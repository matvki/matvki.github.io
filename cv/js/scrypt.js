window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function adresse() {
    if (document.getElementById("adresse").style.visibility== "visible")
    document.getElementById("adresse").style.visibility= "hidden";
    else
    document.getElementById("adresse").style.visibility= "visible";
}

function email() {
    if (document.getElementById("email").style.visibility== "visible")
    document.getElementById("email").style.visibility= "hidden";
    else
    document.getElementById("email").style.visibility= "visible";
}

function github() {
    if (document.getElementById("github").style.visibility== "visible")
    document.getElementById("github").style.visibility= "hidden";
    else
    document.getElementById("github").style.visibility= "visible";
}

function a2015() {
    if (document.getElementById("a2015").style.visibility== "visible")
    document.getElementById("a2015").style.visibility= "hidden";
    else
    document.getElementById("a2015").style.visibility= "visible";
}