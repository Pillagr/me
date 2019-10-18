function adjustHeights(){
  if ($(window).width()>=751)
  {
    var x = $(window).height();
    $(".image").css("height",x);
    $(".name").css("height",x);
  }
  else {
    $(".image").css("height","auto");
    $(".name").css("height","auto");
  }
}

adjustHeights();

$(window).resize(function(){
  adjustHeights();
});
