
// our init / main function
$(document).ready(function documentIsReadyCallback(){

  // listen for 'keyup' events on input with id="searchBox"
  $('input#searchBox').on('keyup', function keyupCallback(){

    // create nice var for input#searchBox
    var $el = $(this),                                                          // $(this) represnets the element the event happend to, in this case input#searchBox
      val = $(this).val();                                                      // get the inputs val

    console.log(val);
  });

  // samples of other events we can listen to
  $('#searchBox').on('keydown', function keydownCallback(){});
  $('#searchBox').on('keypress', function keypressCallback(){});
  $('#searchBox').on('focus', function focusCallback(){});
})
