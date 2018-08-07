// we need to wait for the 'DOMContentLoaded' event since this code
// would otherwise run before the HTML is loaded (since our .js file is
// included in the head of the document.
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', function(event) {
  // first we need to grab references to the HTML elements we need.
  // querySelectorAll returns an array of elements matches the selector
  let images = document.querySelectorAll('.images img');
  // querySelector returns just the first element that matches the selector
  let overlay = document.querySelector('.overlay');
  let overlayImage = document.querySelector('.overlay img');

  // for each image in the images array, we want to trigger some code on the
  // 'click' event
  for (let i = 0; i < images.length; i++) {
    let image = images[i];
    image.addEventListener('click', function() {
      // this will show the overlay
      overlay.classList.add('show');
      // this replaces the sample image in our HTML with the actual image the
      // user clicked.
      overlayImage.src = image.src;
      // naturalWidth and naturalHeight are references to the original width & height
      // of the image in pixels. (image.width & image.height in contrast are the
      // _current_ size as rescaled in our layout)
      overlayImage.naturalWidth = image.naturalWidth;
      overlayImage.naturalHeight = image.naturalHeight;
    })
  }

  // clicking anywhere on the overlay should hide it
  overlay.addEventListener('click', function() {
    overlay.classList.remove('show');
  })
});
