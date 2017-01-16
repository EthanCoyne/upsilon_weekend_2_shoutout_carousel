var i = 0;
var next = i + 1;
var prev = i - 1;
var time = 10;

$(document).ready(function(){
  $.ajax({  // the whole app is inside one ajax call.
    type: "GET",
    url: "/data",
    success: function(data){
      console.log(data);
      var person = data.people[i];
      $('#name').text(person.name);
      $('#githubUserName').text(person.githubUserName);
      $('#shoutout').text(person.shoutout);
      $('#' + i).addClass('highlighted')



      // clicking anywhere on the carousel displays the corresponding person in the list
      $('.carousel').on('click', function(){
        $('.highlighted').removeClass('highlighted');
        i = Number($(this).attr('id'));
        next = i+1;
        prev = i-1;
        var person = data.people[i];
        stagePerson(person)
        $(this).addClass('highlighted');
        time = 10;
      });

      //clicking the next button highlights the next spot on the carousel and calls the nextButton function
      $('#next').on('click', function(){
        nextButton();
        $('.highlighted').removeClass('highlighted');
        $(this).closest('body').find('#' + i).addClass('highlighted');
        time = 10;
      });

      //clicking previous highlights the previous spot on the carousel and calls the previousButton function
      $('#prev').on('click', function(){
        prevButton();
        $('.highlighted').removeClass('highlighted');
        $(this).closest('body').find('#' + i).addClass('highlighted');
        time = 10;
      });

      // This timer moves to the next person if no action is taken every 10 seconds.
      var timer = setInterval(function(){
        time--;
        if (time == 0) {
        nextButton();
        $('.highlighted').removeClass('highlighted');
        $('#person').closest('body').find('#' + i).addClass('highlighted');
        time = 10;
      }
      }, 1000);

      //this changes the currently displayed person on the DOM.
      function stagePerson(person){
        var fade = setTimeout (function(){
          $('#name').text(person.name);
          $('#githubUserName').text(person.githubUserName);
          $('#shoutout').text(person.shoutout);
        }, 200);
        $('#person').fadeIn('fast');

      };


      //nextButton highlights the next point on the carousel, and displays the next person in the list.

      function nextButton() {
        $('#person').fadeOut('fast');
        if(i < 16 ){  //if/else checks if you are at the end of the carousel, and if so jumps to the other end.
          i = next;
          var person = data.people[i];
          stagePerson(person);
          console.log(i);
          next = i + 1;
          prev = i - 1;
        } else {
          i = 0;
          var person = data.people[i];
          stagePerson(person);
          next = i + 1;
          prev = i - 1;
        }
      };

      // Previous button highlights the previous person in the carousel

      function prevButton() {
        $('#person').fadeOut('fast');
        if(i > 0) {
          i = prev;  //if/else checks if you are at the end of the carousel, and if so jumps to the other end.
          var person = data.people[i];
          stagePerson(person);
          console.log(i);
          next = i + 1;
          prev = i - 1;
        } else {
          i = 16;
          var person = data.people[i];
          stagePerson(person);
          console.log(i);
          next = i + 1;
          prev = i - 1;
        }
      };
    }
  });
});
