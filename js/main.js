/**
 * main.js
 */

jQuery(function($) {

  /*
  Web Fonts
   */
  WebFont.load({
    google: {
      families: ['Source Sans Pro:300,400,400i,600,700']
    }
  });

  /*
  Block #1
   */
  // get the height of the first paragraph
  var height = $('#block-1 p').height();

  // append a div with the height contained in it
  $(".main > div:first-of-type").append('<div class="block-inner p2 mtp bg-teal"></div>');
  $("#block-1 .block-inner").append('<span class="bold">The paragraph above is <h1 class="inline mt0 mx1">' + height + '</h1> pixels tall</span>');

  /*
  Block #3
   */
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

  /*
  Block #5
   */
  var theBox = $('#block-5 .box');

  theBox.on("click", function() {
    // set height to zero
    $(this).animate({
      "height": 0
    }, 1000, function() {
      // remove margin class
      $(this).removeClass('mt2');

      // remove border, move left
      $(this).animate({
        "border-width": 0
      }, 100, function() {
        // set clicker
        var clicker = $('p.clicker');

        // append span
        clicker.append(' <span class="block purple mt2 line-height-1">Show again?</span>');

        // set span var
        var theSpan = $('#block-5 span');

        // and click to span
        theSpan.on("click", function() {
          // add margin class
          theBox.addClass('mt2');

          // animate border width and height
          theBox.animate({
            "border-width": "1px",
            "height": "100px"
          });

          // remove span on click
          theSpan.remove();
        });
      });
    });
  });

  /*
  Block #6
   */
  // on 2nd button, fade-out then
  // hide the button
  $('#b6-btn-2').one("click", function() {
    $(this).css({
      "transition": "opacity .5s ease",
      "opacity": 0
    }).delay(500).hide(0);
  });

  // use event delegation: buttons with "event"
  // class log event data when clicked
  $(document).on("click", "a.event", function(event) {
    console.log(event);
  });

  /*
  Block #7
   */
  $('#email-form').on("submit", function(e) {
    // prevent button from submitting
    e.preventDefault();

    // set var for entered URL
    var inputURL = $('#email-form input[name="link"]').val();

    // check if field is empty
    if (inputURL === '') {
      vex.dialog.alert('Please enter a URL!');
      return false;
    }

    // get title of the URL
    $.ajax({
      url: inputURL,
      async: true,
      success: function(responseHTML) {
        var articleTitle = $(responseHTML).filter('title').text();

        // set form data params
        // user key is: MGFxawXIDdVRrYR8ZzylOvk3SjXeWzTW
        var formData = {
          devkey: '9OCzLcbxTR4SuTjlT71LLlb7uv3c7V5s',
          key: 'MGFxawXIDdVRrYR8ZzylOvk3SjXeWzTW',
          url: inputURL,
          title: articleTitle
        }

        // AJAX request to Saved.io
        $.ajax({
          type: 'POST',
          url: 'http://devapi.saved.io/bookmarks/',
          data: formData,
          success: function(data) {
            vex.dialog.alert("Your URL was submitted!");

            $('#email-form input[name="link"]').val("");
          },

          // if key is invalid
          error: function(data) {
            vex.dialog.alert("It looks like there was a problem with the URL you entered.");
          }
        });
      },
      error: function(data) {
        vex.dialog.alert("We're sorry, but Saved.io can't save the URL you entered.");
      }
    });
  });

  /*
  Block #8
   */
  var nav = $('nav[role="navigation"]');

  nav.find("a").addClass("fuchsia").css("font-weight", "600").on("click", function(e) {
    e.preventDefault();
  });

  $('#block-8 button').on("click", function() {
    // prevent adding more than one block
    $('#block-8 #json').remove();

    // add div to contain JSON data
    $(this).after('<div id="json" class="mtp"></div>');

    // get JSON data
    $.getJSON('https://feeds.citibikenyc.com/stations/stations.json', {}, function(data) {
      var theData = JSON.stringify(data);
      $('#block-8 #json').html(theData);
    });
  });

  /*
  Block #9
   */
  var subhead = $('#block-9 .subhead');
  subhead
    .css({
      "display": "inline-block",
      "cursor": "pointer",
      "border-bottom": "1px dashed white"
    })
    .on("click", function() {
      var title = $(this).text();
      vex.dialog.alert(title);
    });

  /*
  Block #11
   */
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
