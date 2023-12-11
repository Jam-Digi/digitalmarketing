// visually-hidden
const hide = 'visually-hidden'
const navHeader = document.getElementById("navHeader");
const navlink = document.getElementById('navlink')

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    navHeader.classList.add(hide)
    navlink.classList.add(hide)
  } else {
   navHeader.classList.remove(hide)
   navlink.classList.remove(hide)
  }
}

var mobileView = window.matchMedia("(max-width: 580px)");
myFunction(mobileView); // Call listener function at run time
mobileView.addListener(myFunction); // Attach listener function on state changes


