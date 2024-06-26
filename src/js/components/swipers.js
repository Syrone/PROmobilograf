import Swiper, { Scrollbar } from 'swiper';
Swiper.use([Scrollbar]);

const classCardSwipers = document.querySelectorAll('.js-swiper-card'),
			classPortfolioSwipers = document.querySelectorAll('.js-swiper-portfolio')

classCardSwipers?.forEach((el) => {
	const swiperEl = el.querySelector('.swiper')
	const scrollbarEl = el.querySelector('.swiper-scrollbar')

	new Swiper(swiperEl, {
		slidesPerView: 'auto',
		spaceBetween: 14,
		grabCursor: true,

		scrollbar: {
			el: scrollbarEl,
			draggable: true,
		},
	})
})

classPortfolioSwipers?.forEach((el) => {
	const swiperEl = el.querySelector('.swiper')
	const scrollbarEl = el.querySelector('.swiper-scrollbar')

	new Swiper(swiperEl, {
		slidesPerView: 'auto',
		spaceBetween: 14,
		grabCursor: true,

		scrollbar: {
			el: scrollbarEl,
			draggable: true,
		},
	})
})
