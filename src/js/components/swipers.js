import Swiper, { Scrollbar } from 'swiper';
Swiper.use([Scrollbar]);

const classSwipers = document.querySelectorAll('.js-swiper-card')

classSwipers?.forEach((el) => {
	const swiperEl = el.querySelector('.swiper')
	const scrollbarEl = el.querySelector('.swiper-scrollbar')

	new Swiper(swiperEl, {
		slidesPerView: 2.85,
		spaceBetween: 14,
		grabCursor: true,

		scrollbar: {
			el: scrollbarEl,
			draggable: true,
		},

		breakpoints: {
			0: {
				slidesPerView: 1.0625,
				spaceBetween: 14,
			},
			576: {
				slidesPerView: 1.5,
				spaceBetween: 14,
			},
			768: {
				slidesPerView: 2.125,
				spaceBetween: 14,
			},
			1200: {
				slidesPerView: 2.25,
				spaceBetween: 14,
			},
			1400: {
				slidesPerView: 2.85,
				spaceBetween: 14,
			},
		},
	})
})
