$(document).ready(function() {
	// 定义一个获取浏览器宽高的方法
  function rect (){
    var width = $(window).width();
    var height = $(window).height();
    $('.page').css('width', width)
                 .css('height', height);
  };

  rect();

  // 添加一个监听
  window.addEventListener('resize', rect);
});