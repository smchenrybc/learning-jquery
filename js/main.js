/**
 * main.js
 */

jQuery(function($) {
  // get the height of the first paragraph
  var height = $('.main :first-child').height();

  // append a div with the height contained in it
  $(".main > div:first-of-type").append('<div class="block-inner p2 mtp bg-teal"></div>');
  $("#block-1 .block-inner").append('<span class="bold">The paragraph above is <h1 class="inline mt0 mx1">' + height + '</h1> pixels tall</span>');


  // set up animation for each box
  function animateBox() {
    box = $(this);

    if ( box.hasClass("clicked") ) {
      // animate it
      box.animate({
        "bottom": 0
      });

      // remove clicked class
      box.removeClass("clicked");
    } else {
      // animate it
      box.animate({
        "bottom": 100
      });

      // add clicked class
      box.addClass('clicked');
    }
  }
  // animation for all boxes to
  // move at the same time
  function animateBoxes(e) {
    e.preventDefault();

    var boxes = $('.boxes .box');

    boxes.each(animateBox);
  }

  // animate a box if it's clicked
  $('.boxes .box').on("click", animateBox);

  // animate all boxes if the button
  // below them is clicked
  $('#box-area .btn').on("click", animateBoxes);
});
