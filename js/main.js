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
  $(".main .first").after('<div class="info p2 mbp"></div>');
  $(".info").append('<span class="bold">The paragraph above is <h1 class="inline mt0 mx1">' + height + '</h1> pixels tall</span>');
});
