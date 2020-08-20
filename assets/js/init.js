var nextIndex = 1;
const disp = (n) => {
  var i;
  var slides = document.getElementsByClassName("carousel");
  if (n > slides.length) {
    nextIndex = 1;
  }
  if (n < 1) {
    nextIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[nextIndex - 1].style.display = "block";
};
disp(nextIndex);

// Next/previous controls
const navigate = (n) => {
  disp((nextIndex += n));
};

 