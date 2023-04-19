document.addEventListener('DOMContentLoaded', function () {
	const hero = new HeroSlider('.swiper-container');
});

class HeroSlider {
	constructor(el) {
		this.el = el;
		this.swiper = this._initSwiper();
	}

	_initSwiper() {
		return new Swiper (this.el, {
			// Optional parameters
			// loop: true,
			centeredSlides: true, //スライダーの中央揃え
			slidesPerView: 1,
			spaceBetween: 10,
			resizeReInit: true,
			speed: 0, //スピード
			preventClicks: true,
			// grabCursor: false,
			noSwiping: true,
			noSwipingClass: "swiper-wrapper",
			pagination: {
				el: ".swiper-my-pagination",
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + '<img src="./images/bg-front0' + (index + 1) + '-thumbnail.jpg" alt="">' + '</span>';
				},
			},

			// autoplay: {
			// 	delay: 0,
			// 	disableOnInteraction: false,
			// },
			breakpoints: { //レスポンシブでスライドの表示数変更
				960: {
					direction: 'vertical',
					autoplay: true
				}
			},
			
			// navigation: {
			// 	nextEl: '.swiper-button-next',
			// 	prevEl: '.swiper-button-prev',
			// }
		});
	}
}