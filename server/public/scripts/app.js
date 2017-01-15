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
      });

      $('#prev').on('click', function(){
        prevButton();
      });













      function appendDom(person){
        $('#name').text(person.name);
        $('#githubUserName').text(person.githubUserName);
        $('#shoutout').text(person.shoutout);
      };


      function nextButton() {
        if(i < 16 ){
          $('.highlighted').removeClass('highlighted');
          i = next;
          var person = data.people[i];
          appendDom(person);
          console.log(i);
          next = i + 1;
          prev = i - 1;
          $(this).closest('body').find('#' + i).addClass('highlighted');
        } else {
          $('.highlighted').removeClass('highlighted');
          i = 0;
          var person = data.people[i];
          appendDom(person);
          next = i + 1;
          prev = i - 1;
          $(this).closest('body').find('#' + i).addClass('highlighted');
        }
      };

      function prevButton() {
        if(i > 0) {
          $('.highlighted').removeClass('highlighted');
          i = prev;
          var person = data.people[i];
          appendDom(person);
          console.log(i);
          next = i + 1;
          prev = i - 1;
          $(this).closest('body').find('#' + i).addClass('highlighted');
        } else {
          $('.highlighted').removeClass('highlighted');
          i = 16;
          var person = data.people[i];
          appendDom(person);
          console.log(i);
          next = i + 1;
          prev = i - 1;
          $(this).closest('body').find('#' + i).addClass('highlighted');
        }
      };
    }
  });
});
