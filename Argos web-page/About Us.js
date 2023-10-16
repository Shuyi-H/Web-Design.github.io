$(document).ready(function() {
  // 图片延迟显示
  $('.left').fadeIn(1000);

  // 文字延迟显示
  setTimeout(function() {
    $('.right').removeClass('hidden').fadeIn(1000);
  }, 2000); // 2000 毫秒表示延迟 2 秒显示文字
});
