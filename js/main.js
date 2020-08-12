$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Ваша заявка получена");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
    $("#phone").inputmask("+7(999)999-99-99");
    $('.free_call').on('click', function(){
		$('.popup').addClass('popup_active');
	});
	$('.popup_close').on('click', function(){
		$('.popup').removeClass('popup_active');
    });
    $('.header-play_link').on('click', function(){
		$('.popup-video').addClass('popup-video_active');
	});
	$('.popup-video_close').on('click', function(){
		$('.popup-video').removeClass('popup-video_active');
    });
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav');
    const burgerClosed = document.querySelector('.burger_close');
    const menuLinks = document.querySelector('.nav-menu_link');
    burgerItem.addEventListener('click', function () {
        menu.classList.add('nav-active');        
    });
    burgerClosed.addEventListener('click', function () {
        menu.classList.remove('nav-active');
    });
    menuLinks.addEventListener('click', function () {
        menu.classList.remove('nav-active');
    });
});