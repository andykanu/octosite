//get the modal
let modal1 = document.getElementById("imgModal1");
let modal2 = document.getElementById("imgModal2");

//get the image for the modal and insert it inside the modal using 'alt' as caption
let img1 = document.getElementsByClassName("clickable-image")[0];
let img2 = document.getElementsByClassName("clickable-image")[1];

let modalImg1 = document.getElementById("img01");
let modalImg2 = document.getElementById("img02");

let captionText1 = document.getElementById("caption1");
let captionText2 = document.getElementById("caption2");

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

//get the span element that closes the modal
let span1 = document.getElementsByClassName("close")[0];
let span2 = document.getElementById("close2");

//when the user clicks on span x, close the modal
span1.onclick = function () {
  modal1.style.display = "none";
};

try {
  span2.onclick = function () {
    modal2.style.display = "none";
  };
} catch (e) {}
