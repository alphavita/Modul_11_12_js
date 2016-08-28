$(function(){
  $('.carousel').carousel();
});
$(document).ready(function() {
var site = {
			name: "Долежелова Виктория Владимировна",
			imgSrc: "img/Hydrangeas.jpg",
			aboutMe: "Студентка программа подготовки Frontend-специалистов",
			reason: [
			"хочу получить новую профессию",
			"хочу  в дальнейшем использовать полученные знания в своей работе",
			"быть всегда в курсе новинок и разработок в сфере Frontend"
			],
			phone: "+3805012345678",
			fbLink: "https://www.facebook.com/profile.php?id=100012543996558",
			fbName: "Vita Alpha",
			feedBack: "Lorem ipsum dolor srit amet, consectetur adipisicing elit, sed do eiusmod"
		}

	var tmpl=$("#template").html()
	var html = _.template(tmpl)(site);

	$("body").append (html)
});

$(function () {

$('.help').on('click keyup', function (){
  var $helpText = $('.help')[0].innerHTML;
  if ($helpText.indexOf('Show') >= 0) {
            $('.wraper').fadeIn(100);
            $('.help')[0].innerHTML = $helpText.replace('Show', 'Hide');
        }
        else {
            $('.wraper').fadeOut(600);
            $('.help')[0].innerHTML = $helpText.replace('Hide', 'Show');

}
});

});