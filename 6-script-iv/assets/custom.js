const flags = [
  {"name": "Alpha", "color": "white"},
  {"name": "Bravo", "color": "white"},
  {"name": "Charlie", "color": "blue"},
  {"name": "Delta", "color": "yellow"},
  {"name": "Echo", "color": "blue"},
  {"name": "Foxtrot", "color": "red"},
  {"name": "Golf", "color": "yellow"},
  {"name": "Hotel", "color": "white"},
  {"name": "India", "color": "yellow"},
  {"name": "Juliet", "color": "white"},
  {"name": "Kilo", "color": "blue"},
  {"name": "Lima", "color": "black"},
  {"name": "Mike", "color": "white"},
  {"name": "November", "color": "white"},
  {"name": "Oscar", "color": "red"},
  {"name": "Papa", "color": "white"},
  {"name": "Quebec", "color": "white"},
  {"name": "Romeo", "color": "yellow"},
  {"name": "Sierra", "color": "blue"},
  {"name": "Tango", "color": "white"},
  {"name": "Uniform", "color": "red"},
  {"name": "Victor", "color": "red"},
  {"name": "Whiskey", "color": "white"},
  {"name": "X-ray", "color": "blue"},
  {"name": "Yankee", "color": "red"},
  {"name": "Zulu", "color": "white"}
]

class Slideshow {
  constructor(slides) {
    this.currentSlide = 10
    this.slides = slides
  }
  forward() {
    this.currentSlide = this.currentSlide = this.currentSlide + 1
    if (this.currentSlide > this.slides.length - 1) {
      this.currentSlide = 0
    }
  }
  back() {
    this.currentSlide = this.currentSlide - 1
    if (this.currentSlide < 0) {
      this.currentSlide = this.slides.length - 1
    }
  }
  shuffle() {
    shuffle(this.slides)
  }
}

document.addEventListener('DOMContentLoaded', function () {
  let slideshow = new Slideshow(flags)
  let forwardButton = document.querySelector('#forward')
  let backButton = document.querySelector('#back')
  let shuffleButton = document.querySelector('#shuffle')
  forwardButton.addEventListener('click', function() {
    slideshow.forward()
    updatePage(slideshow.currentSlide)
  })
  backButton.addEventListener('click', function() {
    slideshow.back()
    updatePage(slideshow.currentSlide)
  })
  shuffleButton.addEventListener('click', function () {
    slideshow.shuffle()
    updatePage(slideshow.currentSlide)
  })
});

function updatePage(currentSlide) {
  console.log(currentSlide)
  let img = document.querySelector('img')
  img.src = getImageFromIndex(currentSlide)
  document.body.style.background = getColorFromIndex(currentSlide)
  let html = document.querySelector('html')
  html.style.color = getSecondaryFromIndex(currentSlide)
  img.style.borderColor = getSecondaryFromIndex(currentSlide)
}

function getImageFromIndex(i) {
  return `/assets/ICS_${flags[i].name}.svg.png`
}

function getColorFromIndex(i) {
  return flags[i].color
}

function getSecondaryFromIndex(i) {
  let color = flags[i].color
  let secondary
  switch(color) {
    case 'red':
      secondary = 'white'
      break;
    case 'white':
      secondary = 'black'
      break;
    case 'blue':
      secondary = 'white'
      break;
    case 'yellow':
      secondary = 'black'
      break;
    case 'black':
      secondary = 'white'
      break;
  }
  return secondary
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
