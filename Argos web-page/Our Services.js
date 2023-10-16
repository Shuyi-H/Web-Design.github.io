

/*  add id name to each h1 of .service */
$(function(){
    $(".service").each(function(){
        $(this).find("h1").attr("id", "head");
    });
});

/*  add id name to each p of .service */

$(function(){
    $(".service").each(function(){
        $(this).find("p").attr("id", "text");
    });
});

/* slideToggle for each service */
$(document).ready(function() {
    $('.service h1').click(function() {
      var textElement = $(this).siblings('p');
      textElement.slideToggle();
    });
  });
  