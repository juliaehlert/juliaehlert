$(document).ready(function() {

  var intro = $(".intro");

  intro.next().hide();

  intro.click(function () {
    $(this).next().show();
    $(this).hide();
  });








  // var vid = document.getElementById("myVideo");
  //
  // function playVid() {
  //   vid.play();
  // }
  //
  // function pauseVid() {
  //   vid.pause();
  // }

  //
  //
  // $("#p1").click(function() {
  //   $("#p2").show();
  //   $("#p1").hide();
  // });
  //
  // $("#p2").click(function() {
  //   $("#p3").show();
  //   $("#p2").hide();
  //
  // });
  //
  // $("#p3").click(function() {
  //   $("#p4").show();
  // });
  //
  // $('#p4').click(function() {
  //   $('p').hide();
  // })

});
