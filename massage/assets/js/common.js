const swiperGallery = new Swiper('.gallery-slider', {
	slidesPerView:'auto',

	loop: false,
	spaceBetween: 20,

	// Navigation arrows
	navigation: {
		nextEl: '.gallery-section .swiper-button-next',
		prevEl: '.gallery-section .swiper-button-prev',
	},
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

	loop: true,
	spaceBetween: 20,
	// Navigation arrows
	navigation: {
		nextEl: '.representative-section-slider .swiper-button-next',
		prevEl: '.representative-section-slider .swiper-button-prev',
	},
});