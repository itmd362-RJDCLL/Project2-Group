$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  
  
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  $('html').addClass('inactiveLink');
  

  
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
    
    function toggleLabel(oldLabel, newLabel, label) {
      if(oldLabel === label) {
        return newLabel;
      }
      else {
        return oldLabel;
      }
           
    }    
    $('#pswd-input').append('<a href="#null" id="show-toggle">Show Password</a>');
    $('#show-toggle').on('click', function(e){
      $('#pswd').attr('type', toggleLabel('password', 'text', $('#pswd').attr('type')));
      $('#show-toggle').html(toggleLabel('Show Password', 'Hide Password', $('#show-toggle').html()));
    });
    
    $('#login').on('submit', function(e) {
      if ($('#user').val() === 'user' && $('#pswd').val() === 'password') {
        window.location.replace('welcome\\index.html');
      }
      else {
        console.log('Incorrect username or password');
        $('#login').prepend('<div class="error">Incorrect username or password</div>');
      }
      
      e.preventDefault();
    });
    
  /*  
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
      
      if (user === '' || pswd=== '') {
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
      
      if(user === 'user' && pswd === 'password')
      {
        window.open(welcome\index.html);
      }
      
      e.preventDefault();
      
    });  
  })
  */
  
  $('#menuToggle').on('click', function(e) {
    // Don't follow the #tools-jump link:
    e.preventDefault();
    // prevent event bubbling; without this
    // line, inner click event, on #content,
    // will fire immediately:
    e.stopPropagation();
    $('html').toggleClass('inactiveLink');
    $('html').toggleClass('has-toolbar');
    $('#page').on('click', function(e) {
      $('html').removeClass('has-toolbar');
    });
  });
  

}); 
