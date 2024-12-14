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