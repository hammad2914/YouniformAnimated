

// Add scrollmagic controller
let controller = new ScrollMagic.Controller();


// Scroll Pin Function

TweenMax.set("#box1", { transformOrigin: "center center" });


new ScrollMagic.Scene({
  triggerElement: ".qualities",
  triggerHook: "onLeave",
  duration: "200%"
})
  .setPin(".qualities")
  .addTo(controller);

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



