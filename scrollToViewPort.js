jQuery.fn.scrollToViewPort = function(animTimeInterval) {
  animTimeInterval = (typeof animTimeInterval == "undefined")?"slow":animTimeInterval;
  return this.each(function(){
    $('html,body').animate({scrollTop: $(this).offset().top},animTimeInterval);
  });
}
