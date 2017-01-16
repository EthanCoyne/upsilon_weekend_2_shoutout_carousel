# Running the Server

This challenge will require you to setup and run the application in this repository.
See the assignment directions if you need a refresher on how to run this.

#Synopsis

This project makes a GET request from a local server, and returns an array of 17 objects, each object representing one student in the Upsilon cohort, their github username, and a shoutout about them.

It will display one student at a time, with a next and previous button that will move to the corresponding student in the list.
There will be a visual index of each student along the bottom, and each index is clickable, so you can jump to any student at will.

A fade effect will occur when the displayed student info is changed.

A 10 second timer will be running to move to the next student if no user action is taken. This timer will reset if an action is taken.

#Code Example

First an AJAX call is made on document ready, and the first student in the list is displayed. The entire app is run inside one AJAX call.
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

###On next click
When the next button is clicked, the highlighted point on the carousel is changed, and the nextButton function is called.

$('#next').on('click', function(){
  nextButton();
  $('.highlighted').removeClass('highlighted');
  $(this).closest('body').find('#' + i).addClass('highlighted');

###nextButton()

  function nextButton() {
    $('#person').fadeOut('fast');
    if(i < 16 ){  //if/else checks if you are at the end of the carousel, and if so jumps to the other end.
      i = next;
      var person = data.people[i];
      stagePerson(person); // this updates the DOM with the next student on the carousel
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

###timer
the timer looks to a global variable var time which starts at 10. Every second, time is decremented by 1. if time reaches 0, nextButton() is called, and time is reset to 10. Time is reset to 10 any time a button is clicked (next, prev, carousel click)

var timer = setInterval(function(){
  time--;
  if (time == 0) {
  nextButton();
  $('.highlighted').removeClass('highlighted');
  $('#person').closest('body').find('#' + i).addClass('highlighted');
  time = 10;
}
}, 1000);


#Motivation

This project was made to learn about AJAX calls to a server, and solidifying knowledge of DOM manipulation using Jquery.


#Installation
Using the terminal, navigate to the project root folder, and execute the command "npm install". When it is finished installing, execute the command "npm start". If successful, the command line will return "listening on port 5000". You can now navigate to the URL "localhost:5000" in your web browser.

#API Reference
This project was made using the Jquery library, and NPM to install Node.

#Contributors
This project was designed by Ethan Coyne, and completed on 1/16/2017.
