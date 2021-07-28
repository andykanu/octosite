// Get the navbar and changing home icons
const navbar = document.getElementById("navbar");
const navHomeIcon = document.getElementById("navHomeIcon");
// When the user scrolls the page in Desktop, execute stickyNav

if (window.innerWidth >= 800) {
  window.onscroll = () => {
    stickyNav();
  };
}

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("navOtherPages");
  } else {
    navbar.classList.remove("navOtherPages");
  }
}

//Make home icon white on hover
navHomeIcon.addEventListener("mouseover", function (event) {
  event.target.src = "resources/images/HomeiconWhite.png";
});
navHomeIcon.addEventListener("mouseout", function (event) {
  event.target.src = "resources/images/Homeicon.png";
});
