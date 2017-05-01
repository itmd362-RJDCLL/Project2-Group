$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
 //var courses = [];

  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  $('html').addClass('inactiveLink');
  

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

  //361 submit forms for data
  $('#36101-form').on('submit', function(e) {
    e.preventDefault();
    setCookie('class36101','36101',1);
    window.location.replace('../../worksheet');
  })
  $('#36102-form').on('submit', function(e) {
    e.preventDefault();
    setCookie('class36102','36102',1);
    window.location.replace('../../worksheet');
  })
  $('#3610102-form').on('submit', function(e) {
    e.preventDefault();
    if($('#36101-select').is(':checked')) {
      setCookie('class36101','36101',1);
      console.log("cookie set is "+getCookie('class'));
    }
    if($('#36102-select').is(':checked')) {
      setCookie('class36102','36102',1);
    }
    window.location.replace('../../worksheet');
    
  })
  
  //411 submit forms for data
  $('#41101-form').on('submit', function(e) {
    e.preventDefault();
    setCookie('class41101','41101',1);
    window.location.replace('../../worksheet');
  })
  $('#41102-form').on('submit', function(e) {
    e.preventDefault();
    setCookie('class41102','41102',1);
    window.location.replace('../../worksheet');
  })
  $('#4110102-form').on('submit', function(e) {
    e.preventDefault();
    if($('#41101-select').is(':checked')) {
      setCookie('class41101','41101',1);
      console.log("cookie set is "+getCookie('class'));
    }
    if($('#41102-select').is(':checked')) {
      setCookie('class41102','41102',1);
    }
    window.location.replace('../../worksheet');
    
  })
  
  //----------WORKSHEET-----------------
  
  if(getCookie('class36101')==='36101')
  {
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
  
  if(getCookie('class36102')==='36102')
    {
    $('#worksheet-table').append('<tr>' +
              '<td><input id="36101-select"type="checkbox" /></td>' +
              '<td>ITMD 361</td>' +
              '<td>Fundamentals of Web Design</td>' +
              '<th>02</th>' +
              '<td>WF</td>' +
              '<td>11:25am-12:40pm</td>' +
              '<td>Karl Stolley</td>' +
            '</tr>');
  }
  
  if(getCookie('class41101')==='41101')
    {
    $('#worksheet-table').append('<tr>' +
              '<td><input id="36101-select"type="checkbox" /></td>' +
              '<td>ITMD 411</td>' +
              '<td>Intermediate Software Development</td>' +
              '<th>01</th>' +
              '<td>TR</td>' +
              '<td>11:25am-12:40pm</td>' +
              '<td>James Papademas</td>' +
            '</tr>');
  }
  
  if(getCookie('class41102')==='41102')
    {
    $('#worksheet-table').append('<tr>' +
              '<td><input id="36101-select"type="checkbox" /></td>' +
              '<td>ITMD 411</td>' +
              '<td>Intermediate Software Development</td>' +
              '<th>02</th>' +
              '<td>TR</td>' +
              '<td>1:50pm-3:05pm</td>' +
              '<td>Devin Roeder</td>' +
            '</tr>');
  }

  
 /* for (var i = 0; i <= courses3.length; i++) {
    if (courses3[i] === getCookie('36101')) {
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
    
  }*/
  
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

//sets the cookie name, value, and days until it expires    
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//returns the value of the stored cookie  
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//for testiing purposes if you need to check if a cookie was stored
//don't need it for our project
function checkCookie() {
    var username = getCookie("testing2");
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}

  
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
