$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  $('##menuToggle').on('click', function(e) {
    // Don't follow the #tools-jump link:
    e.preventDefault();
    // prevent event bubbling; without this
    // line, inner click event, on #content,
    // will fire immediately:
    e.stopPropagation();
    $('html').toggleClass('has-toolbar');
    $('#page').on('click', function(e) {
      $('html').removeClass('has-toolbar');
    });
  });
  
  $('#class-form-submit').on('submit', function() {
      $('#information').apend('visible');
  
      }) 
});