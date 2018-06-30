/**
 * main.js
 */

jQuery(function($) {
  /* Block #1 */
  // get the height of the first paragraph
  var height = $('#block-1 p').height();

  // append a div with the height contained in it
  $(".main > div:first-of-type").append('<div class="block-inner p2 mtp bg-teal"></div>');
  $("#block-1 .block-inner").append('<span class="bold">The paragraph above is <h1 class="inline mt0 mx1">' + height + '</h1> pixels tall</span>');


  /* Box Area */
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


  /* Block #5 */
  var theBox = $('#block-5 .box');

  theBox.on("click", function() {
    // set height to zero
    $(this).animate({
      "height": 0
    }, 1000, function() {
      // remove margin class
      $(this).removeClass('mtp');

      // remove border, move left
      $(this).animate({
        "border-width": 0
      }, 100, function() {
        // set clicker
        var clicker = $('p.clicker');

        // append span
        clicker.append(' <span class="block purple">Show again?</span>');

        // and click to span
        clicker.find("span").on("click", function() {
          // add margin class
          theBox.addClass('mtp');

          // animate border width and height
          theBox.animate({
            "border-width": "1px",
            "height": "100px"
          });

          // remove span on click
          $(this).remove();
        });
      });
    });
  });

  /* Block #3 */
  $('#block-3 textarea').on("focus", function() {
    // insert counting text
    $(this).after('<p class="mb0">There are <code><span>0</span></code> characters.</p>' );

    // count length of text in text area and
    // insert it into the <p> from above
    $(this).on("keyup", function() {
      var taLength = $(this).val().length;
      $('#block-3 p span').html(taLength);
    });
  });
  $('#block-3 textarea').on("focusout", function() {
    $('#block-3 p.mb0').remove();
  });
});
