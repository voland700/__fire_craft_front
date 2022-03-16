//Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
//import '~/app/js/jquery.min.js'
document.addEventListener('DOMContentLoaded', () => {

	document.getElementById('navBtn').addEventListener('click', (e)=>{
		e.preventDefault();
		let navBtn = document.getElementById('navBtn');
		let headerMenu = document.getElementById('headerMenu');
		if(navBtn.classList.contains('btn-close')){
			$('#headerMenu').slideDown();
		}
		if(navBtn.classList.contains('btn-open')){
			$('#headerMenu').slideUp();
		}
		navBtn.classList.toggle('btn-close');
		navBtn.classList.toggle('btn-open');
	});


	let swiper = new Swiper('#slider', {
		speed: 1000,
		loop: true,
		parallax: true,
		effect: "fade",
		fadeEffect: {
			crossFade: true
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	let bottomSlider = new Swiper('#bottomSlider', {
		speed: 1000,
		loop: true,
		//parallax: true,
		effect: "fade",
		fadeEffect: {
			crossFade: true
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.button-next',
			prevEl: '.button-prev',
		},
	});



	if(document.querySelector('.why_txt'))	{
		funcItemsHeight()
		function funcItemsHeight() {
			var menuItems = document.querySelectorAll('.why_txt');
			var top = menuItems[0].offsetTop;
			var arrHeight = [];
			var arrItems = [];
			for (var i = 0; i < menuItems.length; i++) {
				menuItems[i].style.height = 'auto';
			}
			for (var i = 0; i < menuItems.length; i++) {
				if (top != menuItems[i].offsetTop) {
					arrHeight.sort(function (a, b) { return b - a });
					for (var j = 0; j < arrItems.length; j++) {

						arrItems[j].style.height = arrHeight[0] + 'px';
					}
					top = menuItems[i].offsetTop;
					arrHeight.length = arrItems.length = 0;
					i = i - 1;
					continue;
				}
				arrHeight[arrHeight.length] = menuItems[i].offsetHeight;
				arrItems[arrItems.length] = menuItems[i];
			}
			arrHeight.sort(function (a, b) { return b - a });
			for (var j = 0; j < arrItems.length; j++) {
				arrItems[j].style.height = arrHeight[0] + 'px';
			}
		}
		window.onresize = funcItemsHeight
	}

	// Button UP
	$(window).scroll(function(){
		let Hwindow = ($('body').height())*0.7;
		if ($(this).scrollTop() > Hwindow ) {
		$('.scrollup').css('visibility', 'visible');
		} else {
		$('.scrollup').css('visibility', 'hidden');
		}
		});
		$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

	//Prodact gallery
	if(document.getElementById('ImagesSlider')){

		let galery = new Swiper("#ImagesSlider", {
			slidesPerView: 5,
			spaceBetween: 10,
			slidesPerGroup: 1,
			centerInsufficientSlides: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: "#ImagesSliderPrev",
				prevEl: "#ImagesSliderNext",
			},

		});







	}













});