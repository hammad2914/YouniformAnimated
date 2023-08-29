
document.addEventListener('scroll', function () {
    console.log($(window).scrollTop());
    
    if ($(window).scrollTop() < 30) {
      $('#shirt_1').css('left', '30%');
    }
    if ($(window).scrollTop() >= 30 && $(window).scrollTop() < 60) {
     
      $('#shirt_1').css('left', '28%');
    }
    if ($(window).scrollTop() >= 60 && $(window).scrollTop() < 90) {
      
      $('#shirt_1').css('left', '26%');
    }
    if ($(window).scrollTop() >= 90 && $(window).scrollTop() < 120) {
   
      $('#shirt_1').css('left', '24%');
    }
    if ($(window).scrollTop() >= 120 && $(window).scrollTop() < 150) {
      
      $('#shirt_1').css('left', '22%');
    }
    if ($(window).scrollTop() >= 150 && $(window).scrollTop() < 180) {
      
      $('#shirt_1').css('left', '20%');
    }
    if ($(window).scrollTop() >= 180 && $(window).scrollTop() < 210) {
      
      $('#shirt_1').css('left', '18%');
    }
    if ($(window).scrollTop() >= 210 && $(window).scrollTop() < 240) {
      
      $('#shirt_1').css('left', '16%');
    }
    if ($(window).scrollTop() >= 240 && $(window).scrollTop() < 270) {
      
      $('#shirt_1').css('left', '14%');
    }
    if ($(window).scrollTop() >= 270 && $(window).scrollTop() < 300) {
     
      $('#shirt_1').css('left', '12%');
    }
    if ($(window).scrollTop() >= 300 && $(window).scrollTop() < 330) {
      
      $('#shirt_1').css('left', '10%');
    }
    if ($(window).scrollTop() >= 330 && $(window).scrollTop() < 360) {
      
      $('#shirt_1').css('left', '8%');
    }
    if ($(window).scrollTop() >= 360 && $(window).scrollTop() < 390) {
  
      $('#shirt_1').css('left', '6%');
    }
    if ($(window).scrollTop() >= 390 && $(window).scrollTop() < 420) {
  
      $('#shirt_1').css('left', '4%');
    }
    if ($(window).scrollTop() >= 420 && $(window).scrollTop() < 450) {
   
      $('#shirt_1').css('left', '2%');
    }
    if ($(window).scrollTop() >= 450){
  
      $('#shirt_1').css('left', '0%');
    }


    // if ($(window).scrollTop() >= 5800){
  
    //     $('#shirt_1').css('display' , 'none');
    //   }
    // else if ($(window).scrollTop() < 5800){
  
    //     $('#shirt_1').css('display' , 'block');
    //   }  
  })

  document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById("shirt_1");
    const specificDiv = document.getElementById("hide_shirt");
    
    function handleScroll() {
      const rect = specificDiv.getBoundingClientRect();
      const shouldHideImage = rect.top <= 0; // Hide the image when the specific div is at or above the top of the viewport
  
      if (shouldHideImage) {
        image.style.display = "none";
      } else {
        image.style.display = "block";
      }
    }
  
    window.addEventListener("scroll", handleScroll);
  });
  