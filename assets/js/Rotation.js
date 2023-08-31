
document.addEventListener('scroll', function () {
  console.log($(window).scrollTop());
  shirtArray = ['#shirt_16', '#shirt_17', '#shirt_18', '#shirt_19', '#shirt_20', '#shirt_21', '#shirt_22', '#shirt_23', '#shirt_24', '#shirt_25', '#shirt_26', '#shirt_27','#shirt_1', '#shirt_2', '#shirt_3', '#shirt_4', '#shirt_5', '#shirt_6', '#shirt_7', '#shirt_8', '#shirt_9', '#shirt_10',
  '#shirt_11', '#shirt_12', '#shirt_13', '#shirt_14', '#shirt_15',]
  let totalShirts = shirtArray.length;
  let scrollTop = $(window).scrollTop();

  if ($(window).scrollTop() < 30) {
    $('.active').removeClass('active');
    $('#shirt_1').addClass('active');
    $('#shirt_1').css('left', '30%');
  }
  if ($(window).scrollTop() >= 30 && $(window).scrollTop() < 60) {
    $('.active').removeClass('active');
    $('#shirt_2').addClass('active');
    $('#shirt_2').css('left', '28%');
  }
  if ($(window).scrollTop() >= 60 && $(window).scrollTop() < 90) {
    $('.active').removeClass('active');
    $('#shirt_3').addClass('active');
    $('#shirt_3').css('left', '26%');
  }
  if ($(window).scrollTop() >= 90 && $(window).scrollTop() < 120) {
    $('.active').removeClass('active');
    $('#shirt_4').addClass('active');
    $('#shirt_4').css('left', '24%');
  }
  if ($(window).scrollTop() >= 120 && $(window).scrollTop() < 150) {
    $('.active').removeClass('active');
    $('#shirt_5').addClass('active');
    $('#shirt_5').css('left', '22%');
  }
  if ($(window).scrollTop() >= 150 && $(window).scrollTop() < 180) {
    $('.active').removeClass('active');
    $('#shirt_6').addClass('active');
    $('#shirt_6').css('left', '20%');
  }
  if ($(window).scrollTop() >= 180 && $(window).scrollTop() < 210) {
    $('.active').removeClass('active');
    $('#shirt_7').addClass('active');
    $('#shirt_7').css('left', '18%');
  }
  if ($(window).scrollTop() >= 210 && $(window).scrollTop() < 240) {
    $('.active').removeClass('active');
    $('#shirt_8').addClass('active');
    $('#shirt_8').css('left', '16%');
  }
  if ($(window).scrollTop() >= 240 && $(window).scrollTop() < 270) {
    $('.active').removeClass('active');
    $('#shirt_9').addClass('active');
    $('#shirt_9').css('left', '14%');
  }
  if ($(window).scrollTop() >= 270 && $(window).scrollTop() < 300) {
    $('.active').removeClass('active');
    $('#shirt_10').addClass('active');
    $('#shirt_10').css('left', '12%');
  }
  if ($(window).scrollTop() >= 300 && $(window).scrollTop() < 330) {
    $('.active').removeClass('active');
    $('#shirt_11').addClass('active');
    $('#shirt_11').css('left', '10%');
  }
  if ($(window).scrollTop() >= 330 && $(window).scrollTop() < 360) {
    $('.active').removeClass('active');
    $('#shirt_12').addClass('active');
    $('#shirt_12').css('left', '8%');
  }
  if ($(window).scrollTop() >= 360 && $(window).scrollTop() < 390) {
    $('.active').removeClass('active');
    $('#shirt_13').addClass('active');
    $('#shirt_13').css('left', '6%');
  }
  if ($(window).scrollTop() >= 390 && $(window).scrollTop() < 420) {
    $('.active').removeClass('active');
    $('#shirt_14').addClass('active');
    $('#shirt_14').css('left', '4%');
  }
  if ($(window).scrollTop() >= 420 && $(window).scrollTop() < 450) {
    $('.active').removeClass('active');
    $('#shirt_15').addClass('active');
    $('#shirt_15').css('left', '2%');
  }

  if ($(window).scrollTop() >= 450 && $(window).scrollTop() < 480) {
    $('.active').removeClass('active');
    $('#shirt_15').addClass('active');
    $('#shirt_15').css('left', '0%');
  }

  if ($(window).scrollTop() >= 450 && $(window).scrollTop() < 480) {
    $('.active').removeClass('active');
    $('#shirt_16').addClass('active');
    $('#shirt_16').css('left', '0%');
  }
  if ($(window).scrollTop() >= 480 && $(window).scrollTop() < 510) {
    $('.active').removeClass('active');
    $('#shirt_17').addClass('active');
    $('#shirt_17').css('left', '0%');
  }
  if ($(window).scrollTop() >= 510 && $(window).scrollTop() < 540) {
    $('.active').removeClass('active');
    $('#shirt_18').addClass('active');
    $('#shirt_18').css('left', '0%');
  }
  if ($(window).scrollTop() >= 540 && $(window).scrollTop() < 570) {
    $('.active').removeClass('active');
    $('#shirt_19').addClass('active');
    $('#shirt_19').css('left', '0%');
  }
  if ($(window).scrollTop() >= 570 && $(window).scrollTop() < 600) {
    $('.active').removeClass('active');
    $('#shirt_20').addClass('active');
    $('#shirt_20').css('left', '0%');
  }
  if ($(window).scrollTop() >= 600 && $(window).scrollTop() < 630) {
    $('.active').removeClass('active');
    $('#shirt_21').addClass('active');
    $('#shirt_21').css('left', '0%');
  }
  if ($(window).scrollTop() >= 630 && $(window).scrollTop() < 660) {
    $('.active').removeClass('active');
    $('#shirt_22').addClass('active');
    $('#shirt_22').css('left', '0%');
  }
  if ($(window).scrollTop() >= 660 && $(window).scrollTop() < 690) {
    $('.active').removeClass('active');
    $('#shirt_23').addClass('active');
    $('#shirt_23').css('left', '0%');
  }
  if ($(window).scrollTop() >= 690 && $(window).scrollTop() < 720) {
    $('.active').removeClass('active');
    $('#shirt_24').addClass('active');
    $('#shirt_24').css('left', '0%');
  }
  if ($(window).scrollTop() >= 720 && $(window).scrollTop() < 750) {
    $('.active').removeClass('active');
    $('#shirt_25').addClass('active');
    $('#shirt_25').css('left', '0%');
  }
  if ($(window).scrollTop() >= 750 && $(window).scrollTop() < 780) {
    $('.active').removeClass('active');
    $('#shirt_26').addClass('active');
    $('#shirt_26').css('left', '0%');
  }
  if ($(window).scrollTop() >= 780 && $(window).scrollTop() < 810) {
    $('.active').removeClass('active');
    $('#shirt_27').addClass('active');
    $('#shirt_27').css('left', '0%');
  }
  if ($(window).scrollTop() >= 810 && $(window).scrollTop() < 840) {
    $('.active').removeClass('active');
    $('#shirt_1').addClass('active');
    $('#shirt_1').css('left', '0%');
  }
  if ($(window).scrollTop() >= 840 && $(window).scrollTop() < 870) {
    $('.active').removeClass('active');
    $('#shirt_2').addClass('active');
    $('#shirt_2').css('left', '0%');
  }
  if ($(window).scrollTop() >= 870 && $(window).scrollTop() < 900) {
    $('.active').removeClass('active');
    $('#shirt_3').addClass('active');
    $('#shirt_3').css('left', '0%');
  }
  if ($(window).scrollTop() >= 900 && $(window).scrollTop() < 930) {
    $('.active').removeClass('active');
    $('#shirt_4').addClass('active');
    $('#shirt_4').css('left', '0%');
  }
  if ($(window).scrollTop() >= 930 && $(window).scrollTop() < 960) {
    $('.active').removeClass('active');
    $('#shirt_5').addClass('active');
    $('#shirt_5').css('left', '0%');
  }
  if ($(window).scrollTop() >= 960 && $(window).scrollTop() < 990) {
    $('.active').removeClass('active');
    $('#shirt_6').addClass('active');
    $('#shirt_6').css('left', '0%');
  }
  if ($(window).scrollTop() >= 990 && $(window).scrollTop() < 1020) {
    $('.active').removeClass('active');
    $('#shirt_7').addClass('active');
    $('#shirt_7').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1020 && $(window).scrollTop() < 1050) {
    $('.active').removeClass('active');
    $('#shirt_8').addClass('active');
    $('#shirt_8').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1050 && $(window).scrollTop() < 1080) {
    $('.active').removeClass('active');
    $('#shirt_9').addClass('active');
    $('#shirt_9').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1080 && $(window).scrollTop() < 1110) {
    $('.active').removeClass('active');
    $('#shirt_10').addClass('active');
    $('#shirt_10').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1110 && $(window).scrollTop() < 1140) {
    $('.active').removeClass('active');
    $('#shirt_11').addClass('active');
    $('#shirt_11').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1140 && $(window).scrollTop() < 1170) {
    $('.active').removeClass('active');
    $('#shirt_12').addClass('active');
    $('#shirt_12').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1170 && $(window).scrollTop() < 1200) {
    $('.active').removeClass('active');
    $('#shirt_13').addClass('active');
    $('#shirt_13').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1200 && $(window).scrollTop() < 1230) {
    $('.active').removeClass('active');
    $('#shirt_14').addClass('active');
    $('#shirt_14').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1230 && $(window).scrollTop() < 1260) {
    $('.active').removeClass('active');
    $('#shirt_15').addClass('active');
    $('#shirt_15').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1260 && $(window).scrollTop() < 1290) {
    $('.active').removeClass('active');
    $('#shirt_16').addClass('active');
    $('#shirt_16').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1290 && $(window).scrollTop() < 1320) {
    $('.active').removeClass('active');
    $('#shirt_17').addClass('active');
    $('#shirt_17').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1320 && $(window).scrollTop() < 1350) {
    $('.active').removeClass('active');
    $('#shirt_18').addClass('active');
    $('#shirt_18').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1350 && $(window).scrollTop() < 1380) {
    $('.active').removeClass('active');
    $('#shirt_19').addClass('active');
    $('#shirt_19').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1380 && $(window).scrollTop() < 1410) {
    $('.active').removeClass('active');
    $('#shirt_20').addClass('active');
    $('#shirt_20').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1410 && $(window).scrollTop() < 1440) {
    $('.active').removeClass('active');
    $('#shirt_21').addClass('active');
    $('#shirt_21').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1440 && $(window).scrollTop() < 1470) {
    $('.active').removeClass('active');
    $('#shirt_22').addClass('active');
    $('#shirt_22').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1470 && $(window).scrollTop() < 1500) {
    $('.active').removeClass('active');
    $('#shirt_23').addClass('active');
    $('#shirt_23').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1500 && $(window).scrollTop() < 1530) {
    $('.active').removeClass('active');
    $('#shirt_24').addClass('active');
    $('#shirt_24').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1530 && $(window).scrollTop() < 1560) {
    $('.active').removeClass('active');
    $('#shirt_25').addClass('active');
    $('#shirt_25').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1560 && $(window).scrollTop() < 1590) {
    $('.active').removeClass('active');
    $('#shirt_26').addClass('active');
    $('#shirt_26').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1590 && $(window).scrollTop() < 1620) {
    $('.active').removeClass('active');
    $('#shirt_27').addClass('active');
    $('#shirt_27').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1620 && $(window).scrollTop() < 1650) {
    $('.active').removeClass('active');
    $('#shirt_1').addClass('active');
    $('#shirt_1').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1650 && $(window).scrollTop() < 1680) {
    $('.active').removeClass('active');
    $('#shirt_2').addClass('active');
    $('#shirt_2').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1680 && $(window).scrollTop() < 1710) {
    $('.active').removeClass('active');
    $('#shirt_3').addClass('active');
    $('#shirt_3').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1710 && $(window).scrollTop() < 1740) {
    $('.active').removeClass('active');
    $('#shirt_4').addClass('active');
    $('#shirt_4').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1740 && $(window).scrollTop() < 1770) {
    $('.active').removeClass('active');
    $('#shirt_5').addClass('active');
    $('#shirt_5').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1770 && $(window).scrollTop() < 1800) {
    $('.active').removeClass('active');
    $('#shirt_6').addClass('active');
    $('#shirt_6').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1800 && $(window).scrollTop() < 1830) {
    $('.active').removeClass('active');
    $('#shirt_7').addClass('active');
    $('#shirt_7').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1830 && $(window).scrollTop() < 1860) {
    $('.active').removeClass('active');
    $('#shirt_8').addClass('active');
    $('#shirt_8').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1860 && $(window).scrollTop() < 1890) {
    $('.active').removeClass('active');
    $('#shirt_9').addClass('active');
    $('#shirt_9').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1890 && $(window).scrollTop() < 1920) {
    $('.active').removeClass('active');
    $('#shirt_10').addClass('active');
    $('#shirt_10').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1920 && $(window).scrollTop() < 1950) {
    $('.active').removeClass('active');
    $('#shirt_11').addClass('active');
    $('#shirt_11').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1950 && $(window).scrollTop() < 1980) {
    $('.active').removeClass('active');
    $('#shirt_12').addClass('active');
    $('#shirt_12').css('left', '0%');
  }
  if ($(window).scrollTop() >= 1980 && $(window).scrollTop() < 2010) {
    $('.active').removeClass('active');
    $('#shirt_13').addClass('active');
    $('#shirt_13').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2010 && $(window).scrollTop() < 2040) {
    $('.active').removeClass('active');
    $('#shirt_14').addClass('active');
    $('#shirt_14').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2040 && $(window).scrollTop() < 2070) {
    $('.active').removeClass('active');
    $('#shirt_15').addClass('active');
    $('#shirt_15').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2070 && $(window).scrollTop() < 2100) {
    $('.active').removeClass('active');
    $('#shirt_16').addClass('active');
    $('#shirt_16').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2100 && $(window).scrollTop() < 2130) {
    $('.active').removeClass('active');
    $('#shirt_17').addClass('active');
    $('#shirt_17').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2130 && $(window).scrollTop() < 2160) {
    $('.active').removeClass('active');
    $('#shirt_18').addClass('active');
    $('#shirt_18').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2160 && $(window).scrollTop() < 2190) {
    $('.active').removeClass('active');
    $('#shirt_19').addClass('active');
    $('#shirt_19').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2190 && $(window).scrollTop() < 2220) {
    $('.active').removeClass('active');
    $('#shirt_20').addClass('active');
    $('#shirt_20').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2220 && $(window).scrollTop() < 2250) {
    $('.active').removeClass('active');
    $('#shirt_21').addClass('active');
    $('#shirt_21').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2250 && $(window).scrollTop() < 2280) {
    $('.active').removeClass('active');
    $('#shirt_22').addClass('active');
    $('#shirt_22').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2280 && $(window).scrollTop() < 2310) {
    $('.active').removeClass('active');
    $('#shirt_23').addClass('active');
    $('#shirt_23').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2310 && $(window).scrollTop() < 2340) {
    $('.active').removeClass('active');
    $('#shirt_24').addClass('active');
    $('#shirt_24').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2340 && $(window).scrollTop() < 2370) {
    $('.active').removeClass('active');
    $('#shirt_25').addClass('active');
    $('#shirt_25').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2370 && $(window).scrollTop() < 2400) {
    $('.active').removeClass('active');
    $('#shirt_26').addClass('active');
    $('#shirt_26').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2400 && $(window).scrollTop() < 2430) {
    $('.active').removeClass('active');
    $('#shirt_27').addClass('active');
    $('#shirt_27').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2430 && $(window).scrollTop() < 2460) {
    $('.active').removeClass('active');
    $('#shirt_1').addClass('active');
    $('#shirt_1').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2460 && $(window).scrollTop() < 2490) {
    $('.active').removeClass('active');
    $('#shirt_2').addClass('active');
    $('#shirt_2').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2490 && $(window).scrollTop() < 2520) {
    $('.active').removeClass('active');
    $('#shirt_3').addClass('active');
    $('#shirt_3').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2520 && $(window).scrollTop() < 2550) {
    $('.active').removeClass('active');
    $('#shirt_4').addClass('active');
    $('#shirt_4').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2550 && $(window).scrollTop() < 2580) {
    $('.active').removeClass('active');
    $('#shirt_5').addClass('active');
    $('#shirt_5').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2580 && $(window).scrollTop() < 2610) {
    $('.active').removeClass('active');
    $('#shirt_6').addClass('active');
    $('#shirt_6').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2610 && $(window).scrollTop() < 2640) {
    $('.active').removeClass('active');
    $('#shirt_7').addClass('active');
    $('#shirt_7').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2640 && $(window).scrollTop() < 2670) {
    $('.active').removeClass('active');
    $('#shirt_8').addClass('active');
    $('#shirt_8').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2670 && $(window).scrollTop() < 2700) {
    $('.active').removeClass('active');
    $('#shirt_9').addClass('active');
    $('#shirt_9').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2700 && $(window).scrollTop() < 2730) {
    $('.active').removeClass('active');
    $('#shirt_10').addClass('active');
    $('#shirt_10').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2730 && $(window).scrollTop() < 2760) {
    $('.active').removeClass('active');
    $('#shirt_11').addClass('active');
    $('#shirt_11').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2760 && $(window).scrollTop() < 2790) {
    $('.active').removeClass('active');
    $('#shirt_12').addClass('active');
    $('#shirt_12').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2790 && $(window).scrollTop() < 2820) {
    $('.active').removeClass('active');
    $('#shirt_13').addClass('active');
    $('#shirt_13').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2820 && $(window).scrollTop() < 2850) {
    $('.active').removeClass('active');
    $('#shirt_14').addClass('active');
    $('#shirt_14').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2850 && $(window).scrollTop() < 2880) {
    $('.active').removeClass('active');
    $('#shirt_15').addClass('active');
    $('#shirt_15').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2880 && $(window).scrollTop() < 2910) {
    $('.active').removeClass('active');
    $('#shirt_16').addClass('active');
    $('#shirt_16').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2910 && $(window).scrollTop() < 2940) {
    $('.active').removeClass('active');
    $('#shirt_17').addClass('active');
    $('#shirt_17').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2940 && $(window).scrollTop() < 2970) {
    $('.active').removeClass('active');
    $('#shirt_18').addClass('active');
    $('#shirt_18').css('left', '0%');
  }
  if ($(window).scrollTop() >= 2970 && $(window).scrollTop() < 3000) {
    $('.active').removeClass('active');
    $('#shirt_19').addClass('active');
    $('#shirt_19').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3000 && $(window).scrollTop() < 3030) {
    $('.active').removeClass('active');
    $('#shirt_20').addClass('active');
    $('#shirt_20').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3030 && $(window).scrollTop() < 3060) {
    $('.active').removeClass('active');
    $('#shirt_21').addClass('active');
    $('#shirt_21').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3060 && $(window).scrollTop() < 3090) {
    $('.active').removeClass('active');
    $('#shirt_22').addClass('active');
    $('#shirt_22').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3090 && $(window).scrollTop() < 3120) {
    $('.active').removeClass('active');
    $('#shirt_23').addClass('active');
    $('#shirt_23').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3120 && $(window).scrollTop() < 3150) {
    $('.active').removeClass('active');
    $('#shirt_24').addClass('active');
    $('#shirt_24').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3150 && $(window).scrollTop() < 3180) {
    $('.active').removeClass('active');
    $('#shirt_25').addClass('active');
    $('#shirt_25').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3180 && $(window).scrollTop() < 3210) {
    $('.active').removeClass('active');
    $('#shirt_26').addClass('active');
    $('#shirt_26').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3210 && $(window).scrollTop() < 3240) {
    $('.active').removeClass('active');
    $('#shirt_27').addClass('active');
    $('#shirt_27').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3240 && $(window).scrollTop() < 3270) {
    $('.active').removeClass('active');
    $('#shirt_1').addClass('active');
    $('#shirt_1').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3270 && $(window).scrollTop() < 3300) {
    $('.active').removeClass('active');
    $('#shirt_2').addClass('active');
    $('#shirt_2').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3300 && $(window).scrollTop() < 3330) {
    $('.active').removeClass('active');
    $('#shirt_3').addClass('active');
    $('#shirt_3').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3330 && $(window).scrollTop() < 3360) {
    $('.active').removeClass('active');
    $('#shirt_4').addClass('active');
    $('#shirt_4').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3360 && $(window).scrollTop() < 3390) {
    $('.active').removeClass('active');
    $('#shirt_5').addClass('active');
    $('#shirt_5').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3390 && $(window).scrollTop() < 3420) {
    $('.active').removeClass('active');
    $('#shirt_6').addClass('active');
    $('#shirt_6').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3420 && $(window).scrollTop() < 3450) {
    $('.active').removeClass('active');
    $('#shirt_7').addClass('active');
    $('#shirt_7').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3450 && $(window).scrollTop() < 3480) {
    $('.active').removeClass('active');
    $('#shirt_8').addClass('active');
    $('#shirt_8').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3480 && $(window).scrollTop() < 3510) {
    $('.active').removeClass('active');
    $('#shirt_9').addClass('active');
    $('#shirt_9').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3510 && $(window).scrollTop() < 3540) {
    $('.active').removeClass('active');
    $('#shirt_10').addClass('active');
    $('#shirt_10').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3540 && $(window).scrollTop() < 3570) {
    $('.active').removeClass('active');
    $('#shirt_11').addClass('active');
    $('#shirt_11').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3570 && $(window).scrollTop() < 3600) {
    $('.active').removeClass('active');
    $('#shirt_12').addClass('active');
    $('#shirt_12').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3600 && $(window).scrollTop() < 3630) {
    $('.active').removeClass('active');
    $('#shirt_13').addClass('active');
    $('#shirt_13').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3630 && $(window).scrollTop() < 3660) {
    $('.active').removeClass('active');
    $('#shirt_14').addClass('active');
    $('#shirt_14').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3660 && $(window).scrollTop() < 3690) {
    $('.active').removeClass('active');
    $('#shirt_15').addClass('active');
    $('#shirt_15').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3690 && $(window).scrollTop() < 3720) {
    $('.active').removeClass('active');
    $('#shirt_16').addClass('active');
    $('#shirt_16').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3720 && $(window).scrollTop() < 3750) {
    $('.active').removeClass('active');
    $('#shirt_17').addClass('active');
    $('#shirt_17').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3750 && $(window).scrollTop() < 3780) {
    $('.active').removeClass('active');
    $('#shirt_18').addClass('active');
    $('#shirt_18').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3780 && $(window).scrollTop() < 3810) {
    $('.active').removeClass('active');
    $('#shirt_19').addClass('active');
    $('#shirt_19').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3810 && $(window).scrollTop() < 3840) {
    $('.active').removeClass('active');
    $('#shirt_20').addClass('active');
    $('#shirt_20').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3840 && $(window).scrollTop() < 3870) {
    $('.active').removeClass('active');
    $('#shirt_21').addClass('active');
    $('#shirt_21').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3870 && $(window).scrollTop() < 3900) {
    $('.active').removeClass('active');
    $('#shirt_22').addClass('active');
    $('#shirt_22').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3900 && $(window).scrollTop() < 3930) {
    $('.active').removeClass('active');
    $('#shirt_23').addClass('active');
    $('#shirt_23').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3930 && $(window).scrollTop() < 3960) {
    $('.active').removeClass('active');
    $('#shirt_24').addClass('active');
    $('#shirt_24').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3960 && $(window).scrollTop() < 3990) {
    $('.active').removeClass('active');
    $('#shirt_25').addClass('active');
    $('#shirt_25').css('left', '0%');
  }
  if ($(window).scrollTop() >= 3990 && $(window).scrollTop() < 4020) {
    $('.active').removeClass('active');
    $('#shirt_26').addClass('active');
    $('#shirt_26').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4020 && $(window).scrollTop() < 4050) {
    $('.active').removeClass('active');
    $('#shirt_27').addClass('active');
    $('#shirt_27').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4050 && $(window).scrollTop() < 4080) {
    $('.active').removeClass('active');
    $('#shirt_1').addClass('active');
    $('#shirt_1').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4080 && $(window).scrollTop() < 4110) {
    $('.active').removeClass('active');
    $('#shirt_2').addClass('active');
    $('#shirt_2').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4110 && $(window).scrollTop() < 4140) {
    $('.active').removeClass('active');
    $('#shirt_3').addClass('active');
    $('#shirt_3').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4140 && $(window).scrollTop() < 4170) {
    $('.active').removeClass('active');
    $('#shirt_4').addClass('active');
    $('#shirt_4').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4170 && $(window).scrollTop() < 4200) {
    $('.active').removeClass('active');
    $('#shirt_5').addClass('active');
    $('#shirt_5').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4200 && $(window).scrollTop() < 4230) {
    $('.active').removeClass('active');
    $('#shirt_6').addClass('active');
    $('#shirt_6').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4230 && $(window).scrollTop() < 4260) {
    $('.active').removeClass('active');
    $('#shirt_7').addClass('active');
    $('#shirt_7').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4260 && $(window).scrollTop() < 4290) {
    $('.active').removeClass('active');
    $('#shirt_8').addClass('active');
    $('#shirt_8').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4290 && $(window).scrollTop() < 4320) {
    $('.active').removeClass('active');
    $('#shirt_9').addClass('active');
    $('#shirt_9').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4320 && $(window).scrollTop() < 4350) {
    $('.active').removeClass('active');
    $('#shirt_10').addClass('active');
    $('#shirt_10').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4350 && $(window).scrollTop() < 4380) {
    $('.active').removeClass('active');
    $('#shirt_11').addClass('active');
    $('#shirt_11').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4380 && $(window).scrollTop() < 4410) {
    $('.active').removeClass('active');
    $('#shirt_12').addClass('active');
    $('#shirt_12').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4410 && $(window).scrollTop() < 4440) {
    $('.active').removeClass('active');
    $('#shirt_13').addClass('active');
    $('#shirt_13').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4440 && $(window).scrollTop() < 4470) {
    $('.active').removeClass('active');
    $('#shirt_14').addClass('active');
    $('#shirt_14').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4470 && $(window).scrollTop() < 4500) {
    $('.active').removeClass('active');
    $('#shirt_15').addClass('active');
    $('#shirt_15').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4500 && $(window).scrollTop() < 4530) {
    $('.active').removeClass('active');
    $('#shirt_16').addClass('active');
    $('#shirt_16').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4530 && $(window).scrollTop() < 4560) {
    $('.active').removeClass('active');
    $('#shirt_17').addClass('active');
    $('#shirt_17').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4560 && $(window).scrollTop() < 4590) {
    $('.active').removeClass('active');
    $('#shirt_18').addClass('active');
    $('#shirt_18').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4590 && $(window).scrollTop() < 4620) {
    $('.active').removeClass('active');
    $('#shirt_19').addClass('active');
    $('#shirt_19').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4620 && $(window).scrollTop() < 4650) {
    $('.active').removeClass('active');
    $('#shirt_20').addClass('active');
    $('#shirt_20').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4650 && $(window).scrollTop() < 4680) {
    $('.active').removeClass('active');
    $('#shirt_21').addClass('active');
    $('#shirt_21').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4680 && $(window).scrollTop() < 4710) {
    $('.active').removeClass('active');
    $('#shirt_22').addClass('active');
    $('#shirt_22').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4710 && $(window).scrollTop() < 4740) {
    $('.active').removeClass('active');
    $('#shirt_23').addClass('active');
    $('#shirt_23').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4740 && $(window).scrollTop() < 4770) {
    $('.active').removeClass('active');
    $('#shirt_24').addClass('active');
    $('#shirt_24').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4770 && $(window).scrollTop() < 4800) {
    $('.active').removeClass('active');
    $('#shirt_25').addClass('active');
    $('#shirt_25').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4800 && $(window).scrollTop() < 4830) {
    $('.active').removeClass('active');
    $('#shirt_26').addClass('active');
    $('#shirt_26').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4830 && $(window).scrollTop() < 4860) {
    $('.active').removeClass('active');
    $('#shirt_27').addClass('active');
    $('#shirt_27').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4860 && $(window).scrollTop() < 4890) {
    $('.active').removeClass('active');
    $('#shirt_1').addClass('active');
    $('#shirt_1').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4890 && $(window).scrollTop() < 4920) {
    $('.active').removeClass('active');
    $('#shirt_2').addClass('active');
    $('#shirt_2').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4920 && $(window).scrollTop() < 4950) {
    $('.active').removeClass('active');
    $('#shirt_3').addClass('active');
    $('#shirt_3').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4950 && $(window).scrollTop() < 4980) {
    $('.active').removeClass('active');
    $('#shirt_4').addClass('active');
    $('#shirt_4').css('left', '0%');
  }
  if ($(window).scrollTop() >= 4980 && $(window).scrollTop() < 5010) {
    $('.active').removeClass('active');
    $('#shirt_5').addClass('active');
    $('#shirt_5').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5010 && $(window).scrollTop() < 5040) {
    $('.active').removeClass('active');
    $('#shirt_6').addClass('active');
    $('#shirt_6').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5040 && $(window).scrollTop() < 5070) {
    $('.active').removeClass('active');
    $('#shirt_7').addClass('active');
    $('#shirt_7').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5070 && $(window).scrollTop() < 5100) {
    $('.active').removeClass('active');
    $('#shirt_8').addClass('active');
    $('#shirt_8').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5100 && $(window).scrollTop() < 5130) {
    $('.active').removeClass('active');
    $('#shirt_9').addClass('active');
    $('#shirt_9').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5130 && $(window).scrollTop() < 5160) {
    $('.active').removeClass('active');
    $('#shirt_10').addClass('active');
    $('#shirt_10').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5160 && $(window).scrollTop() < 5190) {
    $('.active').removeClass('active');
    $('#shirt_11').addClass('active');
    $('#shirt_11').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5190 && $(window).scrollTop() < 5220) {
    $('.active').removeClass('active');
    $('#shirt_12').addClass('active');
    $('#shirt_12').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5220 && $(window).scrollTop() < 5250) {
    $('.active').removeClass('active');
    $('#shirt_13').addClass('active');
    $('#shirt_13').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5250 && $(window).scrollTop() < 5280) {
    $('.active').removeClass('active');
    $('#shirt_14').addClass('active');
    $('#shirt_14').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5280 && $(window).scrollTop() < 5310) {
    $('.active').removeClass('active');
    $('#shirt_15').addClass('active');
    $('#shirt_15').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5310 && $(window).scrollTop() < 5340) {
    $('.active').removeClass('active');
    $('#shirt_16').addClass('active');
    $('#shirt_16').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5340 && $(window).scrollTop() < 5370) {
    $('.active').removeClass('active');
    $('#shirt_17').addClass('active');
    $('#shirt_17').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5370 && $(window).scrollTop() < 5400) {
    $('.active').removeClass('active');
    $('#shirt_18').addClass('active');
    $('#shirt_18').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5400 && $(window).scrollTop() < 5430) {
    $('.active').removeClass('active');
    $('#shirt_19').addClass('active');
    $('#shirt_19').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5430 && $(window).scrollTop() < 5460) {
    $('.active').removeClass('active');
    $('#shirt_20').addClass('active');
    $('#shirt_20').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5460 && $(window).scrollTop() < 5490) {
    $('.active').removeClass('active');
    $('#shirt_21').addClass('active');
    $('#shirt_21').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5490 && $(window).scrollTop() < 5520) {
    $('.active').removeClass('active');
    $('#shirt_22').addClass('active');
    $('#shirt_22').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5520 && $(window).scrollTop() < 5550) {
    $('.active').removeClass('active');
    $('#shirt_23').addClass('active');
    $('#shirt_23').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5550 && $(window).scrollTop() < 5580) {
    $('.active').removeClass('active');
    $('#shirt_24').addClass('active');
    $('#shirt_24').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5580 && $(window).scrollTop() < 5610) {
    $('.active').removeClass('active');
    $('#shirt_25').addClass('active');
    $('#shirt_25').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5610 && $(window).scrollTop() < 5640) {
    $('.active').removeClass('active');
    $('#shirt_26').addClass('active');
    $('#shirt_26').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5640 && $(window).scrollTop() < 5670) {
    $('.active').removeClass('active');
    $('#shirt_27').addClass('active');
    $('#shirt_27').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5670 && $(window).scrollTop() < 5700) {
    $('.active').removeClass('active');
    $('#shirt_1').addClass('active');
    $('#shirt_1').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5700 && $(window).scrollTop() < 5730) {
    $('.active').removeClass('active');
    $('#shirt_2').addClass('active');
    $('#shirt_2').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5730 && $(window).scrollTop() < 5760) {
    $('.active').removeClass('active');
    $('#shirt_3').addClass('active');
    $('#shirt_3').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5760 && $(window).scrollTop() < 5790) {
    $('.active').removeClass('active');
    $('#shirt_4').addClass('active');
    $('#shirt_4').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5790 && $(window).scrollTop() < 5820) {
    $('.active').removeClass('active');
    $('#shirt_5').addClass('active');
    $('#shirt_5').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5820 && $(window).scrollTop() < 5850) {
    $('.active').removeClass('active');
    $('#shirt_6').addClass('active');
    $('#shirt_6').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5850 && $(window).scrollTop() < 5880) {
    $('.active').removeClass('active');
    $('#shirt_7').addClass('active');
    $('#shirt_7').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5880 && $(window).scrollTop() < 5910) {
    $('.active').removeClass('active');
    $('#shirt_8').addClass('active');
    $('#shirt_8').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5910 && $(window).scrollTop() < 5940) {
    $('.active').removeClass('active');
    $('#shirt_9').addClass('active');
    $('#shirt_9').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5940 && $(window).scrollTop() < 5970) {
    $('.active').removeClass('active');
    $('#shirt_10').addClass('active');
    $('#shirt_10').css('left', '0%');
  }
  if ($(window).scrollTop() >= 5970 && $(window).scrollTop() < 6000) {
    $('.active').removeClass('active');
    $('#shirt_11').addClass('active');
    $('#shirt_11').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6000 && $(window).scrollTop() < 6030) {
    $('.active').removeClass('active');
    $('#shirt_12').addClass('active');
    $('#shirt_12').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6030 && $(window).scrollTop() < 6060) {
    $('.active').removeClass('active');
    $('#shirt_13').addClass('active');
    $('#shirt_13').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6060 && $(window).scrollTop() < 6090) {
    $('.active').removeClass('active');
    $('#shirt_14').addClass('active');
    $('#shirt_14').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6090 && $(window).scrollTop() < 6120) {
    $('.active').removeClass('active');
    $('#shirt_15').addClass('active');
    $('#shirt_15').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6120 && $(window).scrollTop() < 6150) {
    $('.active').removeClass('active');
    $('#shirt_16').addClass('active');
    $('#shirt_16').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6150 && $(window).scrollTop() < 6180) {
    $('.active').removeClass('active');
    $('#shirt_17').addClass('active');
    $('#shirt_17').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6180 && $(window).scrollTop() < 6210) {
    $('.active').removeClass('active');
    $('#shirt_18').addClass('active');
    $('#shirt_18').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6210 && $(window).scrollTop() < 6240) {
    $('.active').removeClass('active');
    $('#shirt_19').addClass('active');
    $('#shirt_19').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6240 && $(window).scrollTop() < 6270) {
    $('.active').removeClass('active');
    $('#shirt_20').addClass('active');
    $('#shirt_20').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6270 && $(window).scrollTop() < 6300) {
    $('.active').removeClass('active');
    $('#shirt_21').addClass('active');
    $('#shirt_21').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6300 && $(window).scrollTop() < 6330) {
    $('.active').removeClass('active');
    $('#shirt_22').addClass('active');
    $('#shirt_22').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6330 && $(window).scrollTop() < 6360) {
    $('.active').removeClass('active');
    $('#shirt_23').addClass('active');
    $('#shirt_23').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6360 && $(window).scrollTop() < 6390) {
    $('.active').removeClass('active');
    $('#shirt_24').addClass('active');
    $('#shirt_24').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6390 && $(window).scrollTop() < 6420) {
    $('.active').removeClass('active');
    $('#shirt_25').addClass('active');
    $('#shirt_25').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6420 && $(window).scrollTop() < 6450) {
    $('.active').removeClass('active');
    $('#shirt_26').addClass('active');
    $('#shirt_26').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6450 && $(window).scrollTop() < 6480) {
    $('.active').removeClass('active');
    $('#shirt_27').addClass('active');
    $('#shirt_27').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6480 && $(window).scrollTop() < 6510) {
    $('.active').removeClass('active');
    $('#shirt_1').addClass('active');
    $('#shirt_1').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6510 && $(window).scrollTop() < 6540) {
    $('.active').removeClass('active');
    $('#shirt_2').addClass('active');
    $('#shirt_2').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6540 && $(window).scrollTop() < 6570) {
    $('.active').removeClass('active');
    $('#shirt_3').addClass('active');
    $('#shirt_3').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6570 && $(window).scrollTop() < 6600) {
    $('.active').removeClass('active');
    $('#shirt_4').addClass('active');
    $('#shirt_4').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6600 && $(window).scrollTop() < 6630) {
    $('.active').removeClass('active');
    $('#shirt_5').addClass('active');
    $('#shirt_5').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6630 && $(window).scrollTop() < 6660) {
    $('.active').removeClass('active');
    $('#shirt_6').addClass('active');
    $('#shirt_6').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6660 && $(window).scrollTop() < 6690) {
    $('.active').removeClass('active');
    $('#shirt_7').addClass('active');
    $('#shirt_7').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6690 && $(window).scrollTop() < 6720) {
    $('.active').removeClass('active');
    $('#shirt_8').addClass('active');
    $('#shirt_8').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6720 && $(window).scrollTop() < 6750) {
    $('.active').removeClass('active');
    $('#shirt_9').addClass('active');
    $('#shirt_9').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6750 && $(window).scrollTop() < 6780) {
    $('.active').removeClass('active');
    $('#shirt_10').addClass('active');
    $('#shirt_10').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6780 && $(window).scrollTop() < 6810) {
    $('.active').removeClass('active');
    $('#shirt_11').addClass('active');
    $('#shirt_11').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6810 && $(window).scrollTop() < 6840) {
    $('.active').removeClass('active');
    $('#shirt_12').addClass('active');
    $('#shirt_12').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6840 && $(window).scrollTop() < 6870) {
    $('.active').removeClass('active');
    $('#shirt_13').addClass('active');
    $('#shirt_13').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6870 && $(window).scrollTop() < 6900) {
    $('.active').removeClass('active');
    $('#shirt_14').addClass('active');
    $('#shirt_14').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6900 && $(window).scrollTop() < 6930) {
    $('.active').removeClass('active');
    $('#shirt_15').addClass('active');
    $('#shirt_15').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6930 && $(window).scrollTop() < 6960) {
    $('.active').removeClass('active');
    $('#shirt_16').addClass('active');
    $('#shirt_16').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6960 && $(window).scrollTop() < 6990) {
    $('.active').removeClass('active');
    $('#shirt_17').addClass('active');
    $('#shirt_17').css('left', '0%');
  }
  if ($(window).scrollTop() >= 6990 && $(window).scrollTop() < 7020) {
    $('.active').removeClass('active');
    $('#shirt_18').addClass('active');
    $('#shirt_18').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7020 && $(window).scrollTop() < 7050) {
    $('.active').removeClass('active');
    $('#shirt_19').addClass('active');
    $('#shirt_19').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7050 && $(window).scrollTop() < 7080) {
    $('.active').removeClass('active');
    $('#shirt_20').addClass('active');
    $('#shirt_20').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7080 && $(window).scrollTop() < 7110) {
    $('.active').removeClass('active');
    $('#shirt_21').addClass('active');
    $('#shirt_21').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7110 && $(window).scrollTop() < 7140) {
    $('.active').removeClass('active');
    $('#shirt_22').addClass('active');
    $('#shirt_22').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7140 && $(window).scrollTop() < 7170) {
    $('.active').removeClass('active');
    $('#shirt_23').addClass('active');
    $('#shirt_23').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7170 && $(window).scrollTop() < 7200) {
    $('.active').removeClass('active');
    $('#shirt_24').addClass('active');
    $('#shirt_24').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7200 && $(window).scrollTop() < 7230) {
    $('.active').removeClass('active');
    $('#shirt_25').addClass('active');
    $('#shirt_25').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7230 && $(window).scrollTop() < 7260) {
    $('.active').removeClass('active');
    $('#shirt_26').addClass('active');
    $('#shirt_26').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7260 && $(window).scrollTop() < 7290) {
    $('.active').removeClass('active');
    $('#shirt_27').addClass('active');
    $('#shirt_27').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7290 && $(window).scrollTop() < 7320) {
    $('.active').removeClass('active');
    $('#shirt_1').addClass('active');
    $('#shirt_1').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7320 && $(window).scrollTop() < 7350) {
    $('.active').removeClass('active');
    $('#shirt_2').addClass('active');
    $('#shirt_2').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7350 && $(window).scrollTop() < 7380) {
    $('.active').removeClass('active');
    $('#shirt_3').addClass('active');
    $('#shirt_3').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7380 && $(window).scrollTop() < 7410) {
    $('.active').removeClass('active');
    $('#shirt_4').addClass('active');
    $('#shirt_4').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7410 && $(window).scrollTop() < 7440) {
    $('.active').removeClass('active');
    $('#shirt_5').addClass('active');
    $('#shirt_5').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7440 && $(window).scrollTop() < 7470) {
    $('.active').removeClass('active');
    $('#shirt_6').addClass('active');
    $('#shirt_6').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7470 && $(window).scrollTop() < 7500) {
    $('.active').removeClass('active');
    $('#shirt_7').addClass('active');
    $('#shirt_7').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7500 && $(window).scrollTop() < 7530) {
    $('.active').removeClass('active');
    $('#shirt_8').addClass('active');
    $('#shirt_8').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7530 && $(window).scrollTop() < 7560) {
    $('.active').removeClass('active');
    $('#shirt_9').addClass('active');
    $('#shirt_9').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7560 && $(window).scrollTop() < 7590) {
    $('.active').removeClass('active');
    $('#shirt_10').addClass('active');
    $('#shirt_10').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7590 && $(window).scrollTop() < 7620) {
    $('.active').removeClass('active');
    $('#shirt_11').addClass('active');
    $('#shirt_11').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7620 && $(window).scrollTop() < 7650) {
    $('.active').removeClass('active');
    $('#shirt_12').addClass('active');
    $('#shirt_12').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7650 && $(window).scrollTop() < 7680) {
    $('.active').removeClass('active');
    $('#shirt_13').addClass('active');
    $('#shirt_13').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7680 && $(window).scrollTop() < 7710) {
    $('.active').removeClass('active');
    $('#shirt_14').addClass('active');
    $('#shirt_14').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7710 && $(window).scrollTop() < 7740) {
    $('.active').removeClass('active');
    $('#shirt_15').addClass('active');
    $('#shirt_15').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7740 && $(window).scrollTop() < 7770) {
    $('.active').removeClass('active');
    $('#shirt_16').addClass('active');
    $('#shirt_16').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7770 && $(window).scrollTop() < 7800) {
    $('.active').removeClass('active');
    $('#shirt_17').addClass('active');
    $('#shirt_17').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7800 && $(window).scrollTop() < 7830) {
    $('.active').removeClass('active');
    $('#shirt_18').addClass('active');
    $('#shirt_18').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7830 && $(window).scrollTop() < 7860) {
    $('.active').removeClass('active');
    $('#shirt_19').addClass('active');
    $('#shirt_19').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7860 && $(window).scrollTop() < 7890) {
    $('.active').removeClass('active');
    $('#shirt_20').addClass('active');
    $('#shirt_20').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7890 && $(window).scrollTop() < 7920) {
    $('.active').removeClass('active');
    $('#shirt_21').addClass('active');
    $('#shirt_21').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7920 && $(window).scrollTop() < 7950) {
    $('.active').removeClass('active');
    $('#shirt_22').addClass('active');
    $('#shirt_22').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7950 && $(window).scrollTop() < 7980) {
    $('.active').removeClass('active');
    $('#shirt_23').addClass('active');
    $('#shirt_23').css('left', '0%');
  }
  if ($(window).scrollTop() >= 7980 && $(window).scrollTop() < 8010) {
    $('.active').removeClass('active');
    $('#shirt_24').addClass('active');
    $('#shirt_24').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8010 && $(window).scrollTop() < 8040) {
    $('.active').removeClass('active');
    $('#shirt_25').addClass('active');
    $('#shirt_25').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8040 && $(window).scrollTop() < 8070) {
    $('.active').removeClass('active');
    $('#shirt_26').addClass('active');
    $('#shirt_26').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8070 && $(window).scrollTop() < 8100) {
    $('.active').removeClass('active');
    $('#shirt_27').addClass('active');
    $('#shirt_27').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8100 && $(window).scrollTop() < 8130) {
    $('.active').removeClass('active');
    $('#shirt_1').addClass('active');
    $('#shirt_1').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8130 && $(window).scrollTop() < 8160) {
    $('.active').removeClass('active');
    $('#shirt_2').addClass('active');
    $('#shirt_2').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8160 && $(window).scrollTop() < 8190) {
    $('.active').removeClass('active');
    $('#shirt_3').addClass('active');
    $('#shirt_3').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8190 && $(window).scrollTop() < 8220) {
    $('.active').removeClass('active');
    $('#shirt_4').addClass('active');
    $('#shirt_4').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8220 && $(window).scrollTop() < 8250) {
    $('.active').removeClass('active');
    $('#shirt_5').addClass('active');
    $('#shirt_5').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8250 && $(window).scrollTop() < 8280) {
    $('.active').removeClass('active');
    $('#shirt_6').addClass('active');
    $('#shirt_6').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8280 && $(window).scrollTop() < 8310) {
    $('.active').removeClass('active');
    $('#shirt_7').addClass('active');
    $('#shirt_7').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8310 && $(window).scrollTop() < 8340) {
    $('.active').removeClass('active');
    $('#shirt_8').addClass('active');
    $('#shirt_8').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8340 && $(window).scrollTop() < 8370) {
    $('.active').removeClass('active');
    $('#shirt_9').addClass('active');
    $('#shirt_9').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8370 && $(window).scrollTop() < 8400) {
    $('.active').removeClass('active');
    $('#shirt_10').addClass('active');
    $('#shirt_10').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8400 && $(window).scrollTop() < 8430) {
    $('.active').removeClass('active');
    $('#shirt_11').addClass('active');
    $('#shirt_11').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8430 && $(window).scrollTop() < 8460) {
    $('.active').removeClass('active');
    $('#shirt_12').addClass('active');
    $('#shirt_12').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8460 && $(window).scrollTop() < 8490) {
    $('.active').removeClass('active');
    $('#shirt_13').addClass('active');
    $('#shirt_13').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8490 && $(window).scrollTop() < 8520) {
    $('.active').removeClass('active');
    $('#shirt_14').addClass('active');
    $('#shirt_14').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8520 && $(window).scrollTop() < 8550) {
    $('.active').removeClass('active');
    $('#shirt_15').addClass('active');
    $('#shirt_15').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8550 && $(window).scrollTop() < 8580) {
    $('.active').removeClass('active');
    $('#shirt_16').addClass('active');
    $('#shirt_16').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8580 && $(window).scrollTop() < 8610) {
    $('.active').removeClass('active');
    $('#shirt_17').addClass('active');
    $('#shirt_17').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8610 && $(window).scrollTop() < 8640) {
    $('.active').removeClass('active');
    $('#shirt_18').addClass('active');
    $('#shirt_18').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8640 && $(window).scrollTop() < 8670) {
    $('.active').removeClass('active');
    $('#shirt_19').addClass('active');
    $('#shirt_19').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8670 && $(window).scrollTop() < 8700) {
    $('.active').removeClass('active');
    $('#shirt_20').addClass('active');
    $('#shirt_20').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8700 && $(window).scrollTop() < 8730) {
    $('.active').removeClass('active');
    $('#shirt_21').addClass('active');
    $('#shirt_21').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8730 && $(window).scrollTop() < 8760) {
    $('.active').removeClass('active');
    $('#shirt_22').addClass('active');
    $('#shirt_22').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8760 && $(window).scrollTop() < 8790) {
    $('.active').removeClass('active');
    $('#shirt_23').addClass('active');
    $('#shirt_23').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8790 && $(window).scrollTop() < 8820) {
    $('.active').removeClass('active');
    $('#shirt_24').addClass('active');
    $('#shirt_24').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8820 && $(window).scrollTop() < 8850) {
    $('.active').removeClass('active');
    $('#shirt_25').addClass('active');
    $('#shirt_25').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8850 && $(window).scrollTop() < 8880) {
    $('.active').removeClass('active');
    $('#shirt_26').addClass('active');
    $('#shirt_26').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8880 && $(window).scrollTop() < 8910) {
    $('.active').removeClass('active');
    $('#shirt_27').addClass('active');
    $('#shirt_27').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8910 && $(window).scrollTop() < 8940) {
    $('.active').removeClass('active');
    $('#shirt_1').addClass('active');
    $('#shirt_1').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8940 && $(window).scrollTop() < 8970) {
    $('.active').removeClass('active');
    $('#shirt_2').addClass('active');
    $('#shirt_2').css('left', '0%');
  }
  if ($(window).scrollTop() >= 8970 && $(window).scrollTop() < 9000) {
    $('.active').removeClass('active');
    $('#shirt_3').addClass('active');
    $('#shirt_3').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9000 && $(window).scrollTop() < 9030) {
    $('.active').removeClass('active');
    $('#shirt_4').addClass('active');
    $('#shirt_4').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9030 && $(window).scrollTop() < 9060) {
    $('.active').removeClass('active');
    $('#shirt_5').addClass('active');
    $('#shirt_5').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9060 && $(window).scrollTop() < 9090) {
    $('.active').removeClass('active');
    $('#shirt_6').addClass('active');
    $('#shirt_6').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9090 && $(window).scrollTop() < 9120) {
    $('.active').removeClass('active');
    $('#shirt_7').addClass('active');
    $('#shirt_7').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9120 && $(window).scrollTop() < 9150) {
    $('.active').removeClass('active');
    $('#shirt_8').addClass('active');
    $('#shirt_8').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9150 && $(window).scrollTop() < 9180) {
    $('.active').removeClass('active');
    $('#shirt_9').addClass('active');
    $('#shirt_9').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9180 && $(window).scrollTop() < 9210) {
    $('.active').removeClass('active');
    $('#shirt_10').addClass('active');
    $('#shirt_10').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9210 && $(window).scrollTop() < 9240) {
    $('.active').removeClass('active');
    $('#shirt_11').addClass('active');
    $('#shirt_11').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9240 && $(window).scrollTop() < 9270) {
    $('.active').removeClass('active');
    $('#shirt_12').addClass('active');
    $('#shirt_12').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9270 && $(window).scrollTop() < 9300) {
    $('.active').removeClass('active');
    $('#shirt_13').addClass('active');
    $('#shirt_13').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9300 && $(window).scrollTop() < 9330) {
    $('.active').removeClass('active');
    $('#shirt_14').addClass('active');
    $('#shirt_14').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9330 && $(window).scrollTop() < 9360) {
    $('.active').removeClass('active');
    $('#shirt_15').addClass('active');
    $('#shirt_15').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9360 && $(window).scrollTop() < 9390) {
    $('.active').removeClass('active');
    $('#shirt_16').addClass('active');
    $('#shirt_16').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9390 && $(window).scrollTop() < 9420) {
    $('.active').removeClass('active');
    $('#shirt_17').addClass('active');
    $('#shirt_17').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9420 && $(window).scrollTop() < 9450) {
    $('.active').removeClass('active');
    $('#shirt_18').addClass('active');
    $('#shirt_18').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9450 && $(window).scrollTop() < 9480) {
    $('.active').removeClass('active');
    $('#shirt_19').addClass('active');
    $('#shirt_19').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9480 && $(window).scrollTop() < 9510) {
    $('.active').removeClass('active');
    $('#shirt_20').addClass('active');
    $('#shirt_20').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9510 && $(window).scrollTop() < 9540) {
    $('.active').removeClass('active');
    $('#shirt_21').addClass('active');
    $('#shirt_21').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9540 && $(window).scrollTop() < 9570) {
    $('.active').removeClass('active');
    $('#shirt_22').addClass('active');
    $('#shirt_22').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9570 && $(window).scrollTop() < 9600) {
    $('.active').removeClass('active');
    $('#shirt_23').addClass('active');
    $('#shirt_23').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9600 && $(window).scrollTop() < 9630) {
    $('.active').removeClass('active');
    $('#shirt_24').addClass('active');
    $('#shirt_24').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9630 && $(window).scrollTop() < 9660) {
    $('.active').removeClass('active');
    $('#shirt_25').addClass('active');
    $('#shirt_25').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9660 && $(window).scrollTop() < 9690) {
    $('.active').removeClass('active');
    $('#shirt_26').addClass('active');
    $('#shirt_26').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9690 && $(window).scrollTop() < 9720) {
    $('.active').removeClass('active');
    $('#shirt_27').addClass('active');
    $('#shirt_27').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9720 && $(window).scrollTop() < 9750) {
    $('.active').removeClass('active');
    $('#shirt_1').addClass('active');
    $('#shirt_1').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9750 && $(window).scrollTop() < 9780) {
    $('.active').removeClass('active');
    $('#shirt_2').addClass('active');
    $('#shirt_2').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9780 && $(window).scrollTop() < 9810) {
    $('.active').removeClass('active');
    $('#shirt_3').addClass('active');
    $('#shirt_3').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9810 && $(window).scrollTop() < 9840) {
    $('.active').removeClass('active');
    $('#shirt_4').addClass('active');
    $('#shirt_4').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9840 && $(window).scrollTop() < 9870) {
    $('.active').removeClass('active');
    $('#shirt_5').addClass('active');
    $('#shirt_5').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9870 && $(window).scrollTop() < 9900) {
    $('.active').removeClass('active');
    $('#shirt_6').addClass('active');
    $('#shirt_6').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9900 && $(window).scrollTop() < 9930) {
    $('.active').removeClass('active');
    $('#shirt_7').addClass('active');
    $('#shirt_7').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9930 && $(window).scrollTop() < 9960) {
    $('.active').removeClass('active');
    $('#shirt_8').addClass('active');
    $('#shirt_8').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9960 && $(window).scrollTop() < 9990) {
    $('.active').removeClass('active');
    $('#shirt_9').addClass('active');
    $('#shirt_9').css('left', '0%');
  }
  if ($(window).scrollTop() >= 9990 && $(window).scrollTop() < 10020) {
    $('.active').removeClass('active');
    $('#shirt_10').addClass('active');
    $('#shirt_10').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10020 && $(window).scrollTop() < 10050) {
    $('.active').removeClass('active');
    $('#shirt_11').addClass('active');
    $('#shirt_11').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10050 && $(window).scrollTop() < 10080) {
    $('.active').removeClass('active');
    $('#shirt_12').addClass('active');
    $('#shirt_12').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10080 && $(window).scrollTop() < 10110) {
    $('.active').removeClass('active');
    $('#shirt_13').addClass('active');
    $('#shirt_13').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10110 && $(window).scrollTop() < 10140) {
    $('.active').removeClass('active');
    $('#shirt_14').addClass('active');
    $('#shirt_14').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10140 && $(window).scrollTop() < 10170) {
    $('.active').removeClass('active');
    $('#shirt_15').addClass('active');
    $('#shirt_15').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10170 && $(window).scrollTop() < 10200) {
    $('.active').removeClass('active');
    $('#shirt_16').addClass('active');
    $('#shirt_16').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10200 && $(window).scrollTop() < 10230) {
    $('.active').removeClass('active');
    $('#shirt_17').addClass('active');
    $('#shirt_17').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10230 && $(window).scrollTop() < 10260) {
    $('.active').removeClass('active');
    $('#shirt_18').addClass('active');
    $('#shirt_18').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10260 && $(window).scrollTop() < 10290) {
    $('.active').removeClass('active');
    $('#shirt_19').addClass('active');
    $('#shirt_19').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10290 && $(window).scrollTop() < 10320) {
    $('.active').removeClass('active');
    $('#shirt_20').addClass('active');
    $('#shirt_20').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10320 && $(window).scrollTop() < 10350) {
    $('.active').removeClass('active');
    $('#shirt_21').addClass('active');
    $('#shirt_21').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10350 && $(window).scrollTop() < 10380) {
    $('.active').removeClass('active');
    $('#shirt_22').addClass('active');
    $('#shirt_22').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10380 && $(window).scrollTop() < 10410) {
    $('.active').removeClass('active');
    $('#shirt_23').addClass('active');
    $('#shirt_23').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10410 && $(window).scrollTop() < 10440) {
    $('.active').removeClass('active');
    $('#shirt_24').addClass('active');
    $('#shirt_24').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10440 && $(window).scrollTop() < 10470) {
    $('.active').removeClass('active');
    $('#shirt_25').addClass('active');
    $('#shirt_25').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10470 && $(window).scrollTop() < 10500) {
    $('.active').removeClass('active');
    $('#shirt_26').addClass('active');
    $('#shirt_26').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10500 && $(window).scrollTop() < 10530) {
    $('.active').removeClass('active');
    $('#shirt_27').addClass('active');
    $('#shirt_27').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10530 && $(window).scrollTop() < 10560) {
    $('.active').removeClass('active');
    $('#shirt_1').addClass('active');
    $('#shirt_1').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10560 && $(window).scrollTop() < 10590) {
    $('.active').removeClass('active');
    $('#shirt_2').addClass('active');
    $('#shirt_2').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10590 && $(window).scrollTop() < 10620) {
    $('.active').removeClass('active');
    $('#shirt_3').addClass('active');
    $('#shirt_3').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10620 && $(window).scrollTop() < 10650) {
    $('.active').removeClass('active');
    $('#shirt_4').addClass('active');
    $('#shirt_4').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10650 && $(window).scrollTop() < 10680) {
    $('.active').removeClass('active');
    $('#shirt_5').addClass('active');
    $('#shirt_5').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10680 && $(window).scrollTop() < 10710) {
    $('.active').removeClass('active');
    $('#shirt_6').addClass('active');
    $('#shirt_6').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10710 && $(window).scrollTop() < 10740) {
    $('.active').removeClass('active');
    $('#shirt_7').addClass('active');
    $('#shirt_7').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10740 && $(window).scrollTop() < 10770) {
    $('.active').removeClass('active');
    $('#shirt_8').addClass('active');
    $('#shirt_8').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10770 && $(window).scrollTop() < 10800) {
    $('.active').removeClass('active');
    $('#shirt_9').addClass('active');
    $('#shirt_9').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10800 && $(window).scrollTop() < 10830) {
    $('.active').removeClass('active');
    $('#shirt_10').addClass('active');
    $('#shirt_10').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10830 && $(window).scrollTop() < 10860) {
    $('.active').removeClass('active');
    $('#shirt_11').addClass('active');
    $('#shirt_11').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10860 && $(window).scrollTop() < 10890) {
    $('.active').removeClass('active');
    $('#shirt_12').addClass('active');
    $('#shirt_12').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10890 && $(window).scrollTop() < 10920) {
    $('.active').removeClass('active');
    $('#shirt_13').addClass('active');
    $('#shirt_13').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10920 && $(window).scrollTop() < 10950) {
    $('.active').removeClass('active');
    $('#shirt_14').addClass('active');
    $('#shirt_14').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10950 && $(window).scrollTop() < 10980) {
    $('.active').removeClass('active');
    $('#shirt_15').addClass('active');
    $('#shirt_15').css('left', '0%');
  }
  if ($(window).scrollTop() >= 10980 && $(window).scrollTop() < 11010) {
    $('.active').removeClass('active');
    $('#shirt_16').addClass('active');
    $('#shirt_16').css('left', '0%');
  }
  if ($(window).scrollTop() >= 11010 && $(window).scrollTop() < 11040) {
    $('.active').removeClass('active');
    $('#shirt_17').addClass('active');
    $('#shirt_17').css('left', '0%');
  }
  if ($(window).scrollTop() >= 11040 && $(window).scrollTop() < 11070) {
    $('.active').removeClass('active');
    $('#shirt_18').addClass('active');
    $('#shirt_18').css('left', '0%');
  }
  if ($(window).scrollTop() >= 11070 && $(window).scrollTop() < 11100) {
    $('.active').removeClass('active');
    $('#shirt_19').addClass('active');
    $('#shirt_19').css('left', '0%');
  }
  if ($(window).scrollTop() >= 11100 && $(window).scrollTop() < 11130) {
    $('.active').removeClass('active');
    $('#shirt_20').addClass('active');
    $('#shirt_20').css('left', '0%');
  }
  if ($(window).scrollTop() >= 11130 && $(window).scrollTop() < 11160) {
    $('.active').removeClass('active');
    $('#shirt_21').addClass('active');
    $('#shirt_21').css('left', '0%');
  }
  if ($(window).scrollTop() >= 11160 && $(window).scrollTop() < 11190) {
    $('.active').removeClass('active');
    $('#shirt_22').addClass('active');
    $('#shirt_22').css('left', '0%');
  }
  if ($(window).scrollTop() >= 11190 && $(window).scrollTop() < 11220) {
    $('.active').removeClass('active');
    $('#shirt_23').addClass('active');
    $('#shirt_23').css('left', '0%');
  }
  if ($(window).scrollTop() >= 11220 && $(window).scrollTop() < 11250) {
    $('.active').removeClass('active');
    $('#shirt_24').addClass('active');
    $('#shirt_24').css('left', '0%');
  }
  if ($(window).scrollTop() >= 11250 && $(window).scrollTop() < 11280) {
    $('.active').removeClass('active');
    $('#shirt_25').addClass('active');
    $('#shirt_25').css('left', '0%');
  }
  if ($(window).scrollTop() >= 11280 && $(window).scrollTop() < 11310) {
    $('.active').removeClass('active');
    $('#shirt_26').addClass('active');
    $('#shirt_26').css('left', '0%');
  }
  if ($(window).scrollTop() >= 11310 && $(window).scrollTop() < 11340) {
    $('.active').removeClass('active');
    $('#shirt_27').addClass('active');
    $('#shirt_27').css('left', '0%');
  }
});

// Hide Logo when it reaches the footer

document.addEventListener("DOMContentLoaded", function () {
  const image = document.getElementById("shirt_images");
  const specificDiv = document.getElementById("hide_shirt");

  function handleScroll() {
    const rect = specificDiv.getBoundingClientRect();
    const shouldHideImage = rect.top <= 0; // Hide the image when the specific div is at or above the top of the viewport

    if (shouldHideImage) {
      image.style.display = "none";
    } else {
      image.style.display = "flex";
    }
  }

  window.addEventListener("scroll", handleScroll);
});






