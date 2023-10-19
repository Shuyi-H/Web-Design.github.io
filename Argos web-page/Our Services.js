

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

 $(document).ready(function() {
    if ($(window).width() <= 768) {
        // 当屏幕宽度小于等于768px时，将导航项横向排列
        $('#navbar').css('flex-direction', 'row');
        $('#navbar li').css('padding', '0 10px');
        $('#navbar li a').css('font-size', '20px');
    }
});
