/**
 * main.js
 */

jQuery(function($) {
  // click event
  $(".main a").on("click", function(event) {
    console.log('The main div link was clicked!');
  });

  // get the height of the first paragraph
  var height = $('.main :first-child').height();

  // append a div with the height contained in it
  $(".main > div:first-of-type").append('<div class="block-inner p2 mtp bg-teal"></div>');
  $("#block-1 .block-inner").append('<span class="bold">The paragraph above is <h1 class="inline mt0 mx1">' + height + '</h1> pixels tall</span>');


  // animate one of the buttons
  $("#block-4 a").text('Click me!');
});
