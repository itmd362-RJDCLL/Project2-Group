$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
    
  
   $('#class-form').on('submit', function(e) {
    $('html').toggleClass('itmd-selected');
    $('#class-form').append('hello');
    var ele = document.getElementById('#classes');
    var selectedValue = ele.options[ele.selectedIndex].value;
    if(selectedValue=='itmd'){
      $('#list-classes').apend('visible');
      $('html').toggleClass('itmd-selected');
      }   
    });
    
  $(document).ready(
  function() {
    //empty fields
    $('#user').val('');
    $('pswd').val('');
    $('input#log').removeClass('hide')
    
    $('#submit').on('submit', function(e) {
      //captures fields and turns to variables
      var user = $('#user').val();
      var pswd = $('#pswd').val();
      
      if (user === '') {
        alert('This field cannot be left blank!');
        return false;
      }
      if (pswd === '') {
        alert('This field cannot be left blank!');
        return false;
      }
      
      if(user !== 'user') {
        alert('You have entered the incorrect credentials!');
        return false;
      }
      if(pswd !== 'password') {
        alert('You have entered the incorrect credentials!');
        return false;
      }
      
      $('#login').append('Thank you for signing in! You are being redirected.');
      $('input#log').addClass('hide');
      
      e.preventDefault();
      
    });  
  })
  
  $('#menuToggle').on('click', function(e) {
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
  

}); 
