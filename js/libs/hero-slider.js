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
			// direction: 'vertical',
			loop: true,
			grabCursor: true, //カーソルをグラブに
			effect: 'coverflow',
			centeredSlides: true, //スライダーの中央揃え
			slidesPerview: 1, //スライドに表示する要素の数
            speed: 1000, //スピード
			breakpoints: { //レスポンシブでスライドの表示数変更
				640: {
					slidesPerView: 2,
				}
			},
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
		
			// navigation: {
			// 	nextEl: '.swiper-button-next',
			// 	prevEl: '.swiper-button-prev',
			// }
		});
	}
}