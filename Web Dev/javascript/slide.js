var slideIndex = 0;
sliding();

function sliding() {
  var i;
  var x = document.getElementsByTagName("img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = 'block';
  setTimeout(sliding, 1000);
}