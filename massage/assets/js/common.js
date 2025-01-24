const swiperGallery = new Swiper('.gallery-slider', {
	slidesPerView:'auto',

	loop: false,
	spaceBetween: 20,

	// Navigation arrows
	navigation: {
		nextEl: '.gallery-section .swiper-button-next',
		prevEl: '.gallery-section .swiper-button-prev',
	},
	breakpoints: {



		319: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		992: {
			slidesPerView:'auto',
			spaceBetween: 20
		}
	}
});

const swiperReview = new Swiper('.review-list .swiper', {
	slidesPerView:1,

	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.review-section .swiper-button-next',
		prevEl: '.review-section .swiper-button-prev',
	},
});

const swiperRepresentatives = new Swiper('.representative-section-slider .swiper', {
	slidesPerView:3,


	spaceBetween: 20,
	// Navigation arrows
	navigation: {
		nextEl: '.representative-section-slider .swiper-button-next',
		prevEl: '.representative-section-slider .swiper-button-prev',
	},
	breakpoints: {
		319: {
			slidesPerView: 1,
			spaceBetween: 10,

			grid:{
				rows:3,
			},
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		}
	}

});

const swiperThreeSlide = new Swiper('.three-slider.swiper', {
	slidesPerView: 3,
	spaceBetween: 20,
	// Navigation arrows
	navigation: {
		nextEl: '.icons-info-section .swiper-button-next',
		prevEl: '.icons-info-section .swiper-button-prev',
	},
	breakpoints: {



		319: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20
		}
	}
});


const swiperCoursersMobile = new Swiper('.courses-list .swiper', {
	slidesPerView:1,

	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.courses-list .swiper-button-next',
		prevEl: '.courses-list .swiper-button-prev',
	},
});

if(document.querySelector('.representative-section-slider .person-cards-list .item')){
	const item = document.querySelector('.person-cards-list .item');
	const height = item.offsetHeight;
	const blockHeight = item.offsetHeight*3 + 45;
	if(window.innerWidth < 992){
		document.querySelector('.representative-section-slider .person-cards-list').style.height=blockHeight+"px";
	}
}


if(document.querySelector('.col-mobile-menu')){
	document.querySelector('.col-mobile-menu').addEventListener('click',function(){
		if(document.querySelector('body').classList.contains('open-menu')){
			document.querySelector('body').classList.remove('open-menu', 'overflow')
		}else{
			document.querySelector('body').classList.add('open-menu', 'overflow')
		}
	})
}
