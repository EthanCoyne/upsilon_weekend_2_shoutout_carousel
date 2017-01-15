var i =0;
var next = i+1;
var prev = i-1;

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
      });

      $('#next').on('click', function(){
        nextButton();
        $('.highlighted').removeClass('highlighted');
        $(this).closest('body').find('#' + i).addClass('highlighted');
      });

      $('#prev').on('click', function(){
        prevButton();
        $('.highlighted').removeClass('highlighted');
        $(this).closest('body').find('#' + i).addClass('highlighted');
      });

      window.setInterval(function(){
        nextButton();
        $('.highlighted').removeClass('highlighted');
        $('#person').closest('body').find('#' + i).addClass('highlighted');
      }, 10000);













      function appendDom(person){
        $('#name').text(person.name);
        $('#githubUserName').text(person.githubUserName);
        $('#shoutout').text(person.shoutout);
      };


      function nextButton() {
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
