//get the modal
let modal1 = document.getElementById("imgModal1");
let modal2 = document.getElementById("imgModal2");
let modal3 = document.getElementById("imgModal3");

//get the image for the modal and insert it inside the modal using 'alt' as caption
let img1 = document.getElementById("imgPSteps");
let img2 = document.getElementById("imgASteps");
let img3 = document.getElementById("cycle-view");
let modalImg1 = document.getElementById("img01");
let modalImg2 = document.getElementById("img02");
let modalImg3 = document.getElementById("img03");

let captionText1 = document.getElementById("caption1");
let captionText2 = document.getElementById("caption2");
let captionText3 = document.getElementById("caption3");

img1.onclick = function () {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText1.innerHTML = this.alt;
};

img2.onclick = function () {
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
};

img3.onclick = function () {
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
};
//get the span element that closes the modal
let span1 = document.getElementById("close1");
let span2 = document.getElementById("close2");
let span3 = document.getElementById("close3");

//when the user clicks on span x, close the modal
span1.onclick = function () {
  modal1.style.display = "none";
};

span2.onclick = function () {
  modal2.style.display = "none";
};
span3.onclick = function () {
  modal3.style.display = "none";
};
