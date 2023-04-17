//get the modal
let modal1 = document.getElementById("imgModal1");
let modal2 = document.getElementById("imgModal2");
let modal3 = document.getElementById("imgModal3");
let modal4 = document.getElementById("imgModal4");
let modal5 = document.getElementById("imgModal5");

//get the image for the modal and insert it inside the modal using 'alt' as caption
let img1 = document.getElementsByClassName("clickable-image")[0];
let img2 = document.getElementById("imgASteps");
let img3 = document.getElementById("cycle-view");
let img4 = document.getElementById("illusion-roadmap");
let img5 = document.getElementById("cycle-view1");

let modalImg1 = document.getElementById("img01");
let modalImg2 = document.getElementById("img02");
let modalImg3 = document.getElementById("img03");
let modalImg4 = document.getElementById("img04");
let modalImg5 = document.getElementById("img05");

let captionText1 = document.getElementById("caption1");
let captionText2 = document.getElementById("caption2");
let captionText3 = document.getElementById("caption3");
let captionText4 = document.getElementById("caption4");
let captionText5 = document.getElementById("caption5");

img1.onclick = function () {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  modalImg1.style.backgroundColor = "#fff";
  captionText1.innerHTML = this.alt;
};
try {
  img2.onclick = function () {
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
  };
} catch (e) {}
try {
  img3.onclick = function () {
    modal3.style.display = "block";
    modalImg3.src = this.src;
    captionText3.innerHTML = this.alt;
  };
} catch (e) {}
try {
  img4.onclick = function () {
    modal4.style.display = "block";
    modalImg4.src = this.src;
    captionText4.innerHTML = this.alt;
  };
} catch (e) {}

try {
  img5.onclick = function () {
    modal5.style.display = "block";
    modalImg5.src = this.src;
    captionText5.innerHTML = this.alt;
  };
} catch (e) {}

//get the span element that closes the modal
let span1 = document.getElementsByClassName("close")[0];
let span2 = document.getElementById("close2");
let span3 = document.getElementById("close3");
let span4 = document.getElementById("close4");
let span5 = document.getElementById("close5");

//when the user clicks on span x, close the modal
span1.onclick = function () {
  modal1.style.display = "none";
};

try {
  span2.onclick = function () {
    modal2.style.display = "none";
  };
} catch (e) {}
try {
  span3.onclick = function () {
    modal3.style.display = "none";
  };
} catch (e) {}
try {
  span4.onclick = function () {
    modal4.style.display = "none";
  };
} catch (e) {}
try {
  span5.onclick = function () {
    modal5.style.display = "none";
  };
} catch (e) {}
