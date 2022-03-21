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
			slidesPerView: 4,
			spaceBetween: 10,
			//slidesPerGroup: 1,
			//centerInsufficientSlides: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: "#ImagesSliderPrev",
				prevEl: "#ImagesSliderNext",
			},
		});

		if(galery.slides.length <= galery.params.slidesPerView){
			document.getElementById('ImagesSliderPrev').style.display = 'none';
			document.getElementById('ImagesSliderNext').style.display = 'none';
			//document.getElementById('ImagesSlider').style.width = '100%';
		}

		let mainImg = document.getElementById('mainImg');

		let prevLinks = document.querySelectorAll('.product_prev_link').forEach(function(elem){
			elem.addEventListener('click', function(item){
				item.preventDefault();
				let pathImg = item.target.parentNode.getAttribute('href');
				mainImg.setAttribute('src', pathImg);

				let parent = item.target.parentNode.parentNode;
				document.querySelectorAll('.product_prev').forEach(function(e){
					if(e.classList.contains("active")) e.classList.remove("active");
				});
				if(!parent.classList.contains("active")) parent.classList.add("active");
			});
		});

		mainImg.addEventListener('click', function(){
			event.preventDefault();
			let mainImgPath = mainImg.getAttribute('src');
			let arrPath = document.querySelectorAll('.product_prev_link');
			let namber = 0;
			for (let i = 0; i < arrPath.length; i++) {
				if (arrPath[i].getAttribute('href') == mainImgPath) {
					namber = i;
				}
			}
			$.fancybox.open($('.product_prev_link'), {
				touch: true,
				loop: true
			}, namber);
		});
	}

	//offers
	if(document.getElementById('offerList')){
		document.querySelectorAll('.product_offer').forEach(function(elem){
			elem.addEventListener('click', function(item){
				item.preventDefault();
				let li = item.target.parentNode;
				if(li.classList.contains('active')) return false
				document.querySelectorAll('.product_offer').forEach(function(e){
					if(e.classList.contains("active")) e.classList.remove("active");
				});
				li.classList.add("active");
				let priceBlock = document.getElementById('priceBlock');
				let offerInfo = document.getElementById('offerInfo');

				let name = li.dataset.name;
				let number = li.dataset.number;
				let parent = li.dataset.parent;
				let price = li.dataset.price;
				let old = li.dataset.old;
				let domPrice = document.createElement('span');
				let domOld = document.createElement('span');

				domPrice.className = 'product_price_real';
				if(price) domPrice.innerText = price;
				priceBlock.innerHTML = '';
				priceBlock.prepend(domPrice);
				if(old){
					domOld.className = 'product_price_old';
					domOld.innerText = old;
					priceBlock.append(domOld);
				}

				offerInfo.innerHTML = '';
				if(number) offerInfo.insertAdjacentHTML('afterbegin', '<span><b>Артикул</b> '+number+'</span>');
				if(name) offerInfo.insertAdjacentHTML('beforeend', '<span><b>Цвет</b> '+name+'</span>');

			});
		})
	}


	/*--tabs--*/
	document.querySelectorAll('.product_tab_li').forEach(function (elem) {
		elem.addEventListener('click', function (item) {
			//let elemSelected = item.target.parentElement;
			let elemSelected = item.target;
			let nameAttr = elemSelected.dataset.name;
			let nameList = document.querySelectorAll('.product_tab_li');

			if (!elemSelected.classList.contains('active')) {
				nameList.forEach(function (name) {
					if (name.classList.contains('active')) name.classList.remove('active');
				});
				elemSelected.classList.add('active');
				document.querySelectorAll('.product_tab').forEach(item => {
					item.dataset.tab == nameAttr ? item.classList.add('behold') : item.classList.remove('behold');
				})
			}
		});
	});

	/* -- табы одинаковой высоты -- */
	funcItemsHeight()
	function funcItemsHeight() {
		tabsList = document.querySelectorAll('.product_tab');
		if(tabsList.length >1){
			let height = 0;
			for( var i = 0; i < tabsList.length; i++ ){
				let current_height = tabsList[i].offsetHeight;
				if(current_height > height) {
					height = current_height;
				}
			}
			document.getElementById('tabWrapper').style.height = height + 'px';
		}
	}
	window.onresize = funcItemsHeight;


	$('.faq_title').click(function () {
		let element = $(this).parent('.faq_item');
		let elemContent = $(this).next();

		if (element.hasClass('open')){
			element.removeClass('open');
			} else {
			element.addClass('open');
		}
		elemContent.slideToggle(300);

	});






});