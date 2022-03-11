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












});