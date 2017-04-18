$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  
  var courses = [];

  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  $('html').addClass('inactiveLink');
  
/*  //action for when search button is clicked
  $('#class-form').on('submit', function(e) {
    $('html').toggleClass('itmd-selected');
    $('#class-form').append('hello');
    var ele = document.getElementById('#classes');
    var selectedValue = ele.options[ele.selectedIndex].value;
    if(selectedValue=='itmd'){
      $('#list-classes').append('visible');
      $('html').toggleClass('itmd-selected');
    }   
  });*/

  function clearOld() {
    //JS won't complain if we try remove a class that
    //doesn't exist on the object
    $('#bus-classes').removeClass('bus-select');
    $('#itmd-classes').removeClass('itmd-select');
    $('#itmo-classes').removeClass('itmo-select');
    $('#itms-classes').removeClass('itms-select');
    $('#psy-classes').removeClass('psy-select');
    $('#socio-classes').removeClass('socio-select');
  }

  $('#class-form').on('submit', function(e) {
    e.preventDefault();
    var choice = $('#classes').val();
    $('html').removeClass('no-select');
    clearOld();

    if (choice == 'business') {
      $('#bus-classes').addClass('bus-select');
    }
    else if (choice == 'itmd') {
      $('#itmd-classes').addClass('itmd-select');
    }
    else if (choice == 'itmo') {
      $('#itmo-classes').addClass('itmo-select');
    }
    else if (choice == 'itms') {
      $('#itms-classes').addClass('itms-select');
    }
    else if (choice == 'psychology') {
      $('#psy-classes').addClass('psy-select');
    }
    else if (choice == 'sociology') {
      $('#socio-classes').addClass('socio-select');
    }
    else {
      alert("This message should not appear. If it does, contact us through github.");
    }
  })
    
    //end of search function

  $('#36101-form').on('submit', function(e) {
    e.preventDefault();
    alert("something");
  })
  $('#36102-form').on('submit', function(e) {
    e.preventDefault();
    alert("something");
  })
  $('#3610102-form').on('submit', function(e) {
    e.preventDefault();
    if($('#36101-select').is(':checked')) {
      courses.push('36101');
    }
    if($('#36102-select').is(':checked')) {
      courses.push('36102');
    }
    window.location.replace('../../worksheet');
    
  })
  
  //----------WORKSHEET-----------------
  
  for (var i = 0; i <= courses.length; i++) {
    if (courses[i] === '36101') {
      $('#worksheet-table').append('<tr>' +
              '<td><input id="36101-select"type="checkbox" /></td>' +
              '<td>ITMD 361</td>' +
              '<td>Fundamentals of Web Design</td>' +
              '<th>01</th>' +
              '<td>WF</td>' +
              '<td>11:25am-12:40pm</td>' +
              '<td>Karl Stolley</td>' +
            '</tr>');
    }
    
  }
  
  //----------END WORKSHEET-------------
    
    //Toggle option "on/off" switch
    function toggleLabel(oldLabel, newLabel, label) {
      if(oldLabel === label) {
        return newLabel;
      }
      else {
        return oldLabel;
      }
           
    } 
    //end of toggleLabel
    
    //adds a show/hide password
    $('#pswd-input').append('<a href="#null" id="show-toggle">Show Password</a>');
    $('#show-toggle').on('click', function(e){
      $('#pswd').attr('type', toggleLabel('password', 'text', $('#pswd').attr('type')));
      $('#show-toggle').html(toggleLabel('Show Password', 'Hide Password', $('#show-toggle').html()));
    });
    //end of show/hide password
    
    //action for when login is clicked
    $('#login').on('submit', function(e) {
      if ($('#user').val() === 'user' && $('#pswd').val() === 'password') {
        window.location.replace('welcome\\index.html');
      }
      else if ($('#user').val() === '' || $('#pswd').val() === '')
      {
        console.log('This field cannot be left blank');
        $('#login').prepend('<div class="error">This field cannont be left blank</div>');
      }
      else {
        console.log('Incorrect username or password');
        $('#login').prepend('<div class="error">Incorrect username or password</div>');
      }
      
      e.preventDefault();
    });
    //end of login action
  
    //pull out menu for navigation
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
    //end of navigation menu

}); 
