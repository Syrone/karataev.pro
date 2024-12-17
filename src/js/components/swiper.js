import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

Swiper.use([Navigation, Pagination])

document.querySelectorAll('.benefits-swiper')?.forEach((element) => {
	const swiperElement = element.querySelector('.swiper')
	const swiperPagination = element.querySelector('.swiper-pagination')
	const swiperNext = element.querySelector('.swiper-button-next')
	const swiperPrev = element.querySelector('.swiper-button-prev')

	new Swiper(swiperElement, {
		slidesPerView: 1,
		spaceBetween: 40,
		autoHeight: true,

		pagination: {
			el: swiperPagination,
			clickable: true,
		},
		navigation: {
			nextEl: swiperNext,
			prevEl: swiperPrev,
		},
	})
})

document.querySelectorAll('.case-swiper')?.forEach((element) => {
	const swiperElement = element.querySelector('.swiper')
	const swiperPagination = element.querySelector('.swiper-pagination')
	const swiperNext = element.querySelector('.swiper-button-next')
	const swiperPrev = element.querySelector('.swiper-button-prev')

	new Swiper(swiperElement, {
		slidesPerView: 3,
		spaceBetween: 24,
		autoHeight: true,

		pagination: {
			el: swiperPagination,
			clickable: true,
		},
		navigation: {
			nextEl: swiperNext,
			prevEl: swiperPrev,
		},

		breakpoints: {
			0: {
				slidesPerView: 1.25,
				spaceBetween: 24,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 24,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 64,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 100,
			},
			1400: {
				slidesPerView: 3,
				spaceBetween: 132,
			},
		}
	})
})

document.querySelectorAll('.partners-swiper')?.forEach((element) => {
	const swiperElement = element.querySelector('.swiper')
	const swiperPagination = element.querySelector('.swiper-pagination')
	const swiperNext = element.querySelector('.swiper-button-next')
	const swiperPrev = element.querySelector('.swiper-button-prev')

	new Swiper(swiperElement, {
		slidesPerView: 4,
		spaceBetween: 48,
		autoHeight: true,

		pagination: {
			el: swiperPagination,
			clickable: true,
		},
		navigation: {
			nextEl: swiperNext,
			prevEl: swiperPrev,
		},

		breakpoints: {
			0: {
				slidesPerView: 1.5,
				spaceBetween: 24,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 24,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 32,
			},
			1400: {
				slidesPerView: 4,
				spaceBetween: 48,
			},
		}
	})
})