$(document).ready(function() {
	// 定义一个获取浏览器宽高的方法
  function rect (){
    var width = $(window).width();
    var height = $(window).height();
    $('.one').css('width', width-100)
                 .css('height', height-100);
  };

  rect();

  // 添加一个监听
  window.addEventListener('resize', rect);
});