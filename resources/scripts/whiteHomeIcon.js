const navHomeIcon = document.getElementById("navHomeIcon");

//Make home icon white on hover
navHomeIcon.addEventListener("mouseover", function (event) {
  event.target.src = "../resources/images/HomeiconWhite.png";
});
navHomeIcon.addEventListener("mouseout", function (event) {
  event.target.src = "../resources/images/Homeicon.png";
});
