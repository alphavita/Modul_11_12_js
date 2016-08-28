(function($){
	$.fn.carousel = function(){
	var leftUIEL = $('.carousel-arrow-left');
  var rightUIEL = $('.carousel-arrow-right');
  var elemensList = $('.carousel-list');

  var pixelOffset = 275;
  var  currentLeftValue = 0;
  var elemensCount = elemensList.find('li').length;
  var minimumOffset = -((elemensCount - 5) * pixelOffset);
  var maximumOfset = 0;

  leftUIEL.click(function(){
    if(currentLeftValue != maximumOfset){
         currentLeftValue += 275;
    elemensList.animate({
      left: currentLeftValue + "px"
    }, 500);
    }


  });

  rightUIEL.click(function(){
    if(currentLeftValue != minimumOffset){
      currentLeftValue -= 275;
       elemensList.animate({
      left: currentLeftValue + "px"
    }, 500);
    }
  });
  	return this;
	}

})(jQuery);