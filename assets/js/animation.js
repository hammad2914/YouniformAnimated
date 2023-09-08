

// Add scrollmagic controller
let controller = new ScrollMagic.Controller();

//------------------
//TIMELINE 2
//------------------

// Add timeline
let tl2 = anime.timeline({autoplay: false});

// Add animations
let s2a1 = {
  targets: '#two .elem img',
  opacity: [0.3,1],
  scale: [4,1],
  duration: 2000,
  delay: 0,
  easing: 'easeInOutSine'
};

let s2a2 = {
  targets: '#two .elem img',
  scale: 1,
  duration: 2000,
};

// Add children
tl2.add(s2a1).add(s2a2);

//------------------
//SCENE 2
//------------------

//Add second scrollmagic scene
let scene2 = new ScrollMagic.Scene({
  triggerElement: "#two",
  duration: 2000,
  triggerHook: 0,
})



// Trigger animation timeline
//Use scroll position to play animation
.on("progress", function (event) {
  tl2.seek(tl2.duration * event.progress);
})

.setPin('#two')
.addTo(controller);


AOS.init({
  duration: 1000
});


// Color Change

const logo = document.querySelector('#shirt_images');
const changeColorElement = document.querySelector('.colorChange');
console.log(logo)

window.addEventListener('scroll', () => {
const logoRect = logo.getBoundingClientRect();
const elementRect = changeColorElement.getBoundingClientRect();

if (logoRect.bottom >= elementRect.top && logoRect.top <= elementRect.bottom) {
  console.log('aya')
  changeColorElement.classList.add('green');
} else {
  console.log('gaya')
  changeColorElement.classList.remove('green');
}
});






