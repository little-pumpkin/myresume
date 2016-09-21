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

  // window.addEventListener('focus', function() {
  //     document.title = '吴楠的个人简历';
  // });

  // window.addEventListener('blur', function() {
  //     document.title = '看这里，看这里！';
  // });
   
  document.addEventListener('visibilitychange', function(){
    if(document.hidden){
      document.title = '看这里，看这里！';
    }else{
      document.title = '吴楠的简历！';
    }
  });
});