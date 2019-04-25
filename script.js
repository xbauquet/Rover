var chatMessages = [{
  name: "ms1",
  msg: "Talk to The Rover station",
  delay: 1000,
  align: "right",
  withImage: false
},
{
  name: "ms2",
  msg: "Here is the last repport of Rover. On sol 2171, corresponding to Sep 13 on earth.It was Sunny, the temperature went from -65 to -12 celsius with a pressure of 879 hectopascal.",
  delay: 1000,
  align: "left",
  withImage: true
}
    ];

var chatDelay = 0;

function onRowAdded() {
  $('.chat-container').animate({
    scrollTop: $('.chat-container').prop('scrollHeight')
  });
};

$('document').ready(function() {
  $.each(chatMessages, function(index, obj) {
    chatDelay = chatDelay;
    chatDelay2 = chatDelay + obj.delay;
    chatDelay3 = chatDelay2 + 10;
    scrollDelay = chatDelay;

    msgname = "." + obj.name;
    msginner = ".messageinner-" + obj.name;
    spinner = ".sp-" + obj.name;



    $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><img class='w3-round-xxlarge' style='width:50px' src='resources/station.png'/><span class='message-text'>" + obj.msg + "</span></div></li>");
    $(msgname).delay(chatDelay).fadeIn();
    $(spinner).delay(chatDelay2).hide(1);
    $(msginner).delay(chatDelay3).fadeIn();
    setTimeout(onRowAdded, chatDelay);
    setTimeout(onRowAdded, chatDelay3);
    chatDelay = chatDelay3;
  })
});
