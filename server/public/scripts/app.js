var i =0;
var next = i+1;
var prev = i-1;
var time = 10;

$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      console.log(data);
      var person = data.people[i];
      $('#name').text(person.name);
      $('#githubUserName').text(person.githubUserName);
      $('#shoutout').text(person.shoutout);
      $('#' + i).addClass('highlighted')




      $('.carousel').on('click', function(){
        $('.highlighted').removeClass('highlighted');
        i = Number($(this).attr('id'));
        next = i+1;
        prev = i-1;
        var person = data.people[i];
        appendDom(person)
        $(this).addClass('highlighted');
        time = 10;
      });

      $('#next').on('click', function(){
        nextButton();
        $('.highlighted').removeClass('highlighted');
        $(this).closest('body').find('#' + i).addClass('highlighted');
        time = 10;
      });

      $('#prev').on('click', function(){
        prevButton();
        $('.highlighted').removeClass('highlighted');
        $(this).closest('body').find('#' + i).addClass('highlighted');
        time = 10;
      });

      var timer = setInterval(function(){
        time--;
        if (time == 0) {
        nextButton();
        $('.highlighted').removeClass('highlighted');
        $('#person').closest('body').find('#' + i).addClass('highlighted');
        time = 10;
      }
      }, 1000);













      function appendDom(person){
        var fade = setTimeout (function(){
          $('#name').text(person.name);
          $('#githubUserName').text(person.githubUserName);
          $('#shoutout').text(person.shoutout);
        }, 500);
        $('#person').fadeIn('slow');

      };


      function nextButton() {
        $('#person').fadeOut('slow');
        if(i < 16 ){
          i = next;
          var person = data.people[i];
          appendDom(person);
          console.log(i);
          next = i + 1;
          prev = i - 1;
        } else {
          i = 0;
          var person = data.people[i];
          appendDom(person);
          next = i + 1;
          prev = i - 1;
        }
      };

      function prevButton() {
        $('#person').fadeOut('slow');
        if(i > 0) {
          i = prev;
          var person = data.people[i];
          appendDom(person);
          console.log(i);
          next = i + 1;
          prev = i - 1;
        } else {
          i = 16;
          var person = data.people[i];
          appendDom(person);
          console.log(i);
          next = i + 1;
          prev = i - 1;
        }
      };
    }
  });
});
