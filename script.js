window.onload = function() {
  var images = document.getElementsByTagName("img");
  for(var i = 0; i < images.length; i++) {
    images[i].onmouseover = showAnswer;
    images[i].onmouseout = reblur;
  }
}

function showAnswer(eventObject) {
  var image = eventObject.target;
  image.src = image.id + ".jpg";
}

function reblur(eventObject) {
  image = eventObject.target;
  image.src = image.id + "blur.jpg";
}