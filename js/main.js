document.addEventListener('DOMContentLoaded', function () {
	const rellax = new Rellax('.rellax', {
		// center: true

});
	// const rellaxin = document.querySelectorAll(".rellax");

	// rellaxin.forEach(el => {
		
	// 	const rellax = new Rellax(el, {
	// 		// relativeToWrapper: true,
	// 		// wrapper: el.parentElement
	// 	});
	// 	// console.log(el.parentElement);
	// 	window.addEventListener("scroll", () => { // fix to init
	// 		rellax.refresh();
	// 	});
	// });
});

// window.addEventListener('load', function () {


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// インターセクションオブザーバーでスクロール監視、　トグルクラスでcssアニメーション
////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.addEventListener('load', function () {
	// const so = new ScrollObserver('.main-visual__arrow', {root: null});
	const so1 = new ScrollObserver('.jsFadeIn', true, {rootMargin: "0px 0px -25% 0px"});
	const so2 = new ScrollObserver('.jsFadeInUp', true, {rootMargin: "0px 0px -65% 0px"});
	const so3 = new ScrollObserver('.jsFadeInOutUp', false, {rootMargin: "0px 0px -65% 0px"});
	const so4 = new ScrollObserver('.jsFadeInDelay', true, {rootMargin: "0px 0px -75% 0px"});
	const so5 = new ScrollObserver('.jsFadeInOut', false, {rootMargin: "-25% 0px -25% 0px"});
	const so6 = new ScrollObserver('.jsFadeInOutDelay', false, {rootMargin: "-50% 0px -50% 0px"});
	const so7 = new ScrollObserver('.main-visual__title-logo-inner-left', false, {rootMargin: "900% 0px -55% 0px"});
	const so8 = new ScrollObserver('.main-visual__title-logo-inner-right', false, {rootMargin: "900% 0px -80% 0px"});
	const so9 = new ScrollObserver('.h-fade-in__body', false, {rootMargin: "0px 0px -70% 0px"});
	const so10 = new ScrollObserver('.h-fade-in', false, {rootMargin: "0px 0px -70% 0px"});
	const so11 = new ScrollObserver('.skills__skill-2', false, {rootMargin: "0px 0px -65% 0px"});
	const so12 = new ScrollObserver('.skills__skill-3', false, {rootMargin: "0px 0px -65% 0px"});
	const so13 = new ScrollObserver('.sections-container', false, {root: document.querySelector('.about__about-1'), rootMargin: "0px 0px 0px 0px"});
});

class ScrollObserver {
	constructor(els, once, options) {
		this.els = document.querySelectorAll(els); //classに渡ってきた引数をセレクタに設定
		const defaultOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0,
			once: true
		};
		this.options = Object.assign(defaultOptions, options); //defaultOptionsとoptionsをマージ（後に設定された引数に渡された値で上書きできる）
		this.once = once;
		this._init();
	}
	_init() {
		const callback = function(entries, observer) {
			entries.forEach(entry => {
				if(entry.isIntersecting) {
					// entriesのisIntersectingがtrueの場合の処理
					entry.target.classList.add('scrolled');
					//　onceがtrueの場合スクロール監視を停止
					if(this.once) {
						observer.unobserve(entry.target);
					}
				} else{
					entry.target.classList.remove('scrolled');
				}
			});
		}
		const io = new IntersectionObserver(callback.bind(this), this.options);
		this.els.forEach(el => io.observe(el)); 
		//entriesの1つ
	}
}

// const child = document.querySelector('.main-visual__arrow');
// const cb = function(entries, observer) {
// 	entries.forEach(entry => {
// 		if(entry.isIntersecting) {
// 			entry.target.classList.add('.show');
// 			// 
// 			// observer.unobserve(entry.target);
// 		} else{
// 			entry.target.classList.remove('.show');
// 			// 
// 		}
// 	});
// }
// const io = new IntersectionObserver(cb);
// io.observe(child);
// io.observe(child2);
// 
// オプション
// const options = {
// 	root: null,
// 	rootMargin: "-100px 0px 0px 0px",
// 	threshold: 1 
//  };




////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// スクロール禁止クラス
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// document.addEventListener('DOMContentLoaded', prevent_scroll() );

// function prevent_scroll() {
//     // PCでのスクロール禁止
//     document.addEventListener("mousewheel", scroll_control, { passive: false });
//     // スマホでのタッチ操作でのスクロール禁止
//     document.addEventListener("touchmove", scroll_control, { passive: false });
// }
// // スクロール禁止解除
// function return_scroll() {
//     // PCでのスクロール禁止解除
//     document.removeEventListener("mousewheel", scroll_control, { passive: false });
//     // スマホでのタッチ操作でのスクロール禁止解除
//     document.removeEventListener('touchmove', scroll_control, { passive: false });
// }

// // スクロール関連メソッド
// function scroll_control(event) {
//     event.preventDefault();
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// readMore機能
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// more-textクラスのspanを取得しそれぞれの後ろにボタンを設置、クラスとスタイルを指定
// const readMoreTexts = document.querySelectorAll('.more-text');
// readMoreTexts.forEach(readMoreText => {
// 	const a = document.createElement('a');
// 	const br = document.createElement('br');
// 	readMoreText.parentNode.insertBefore(a, readMoreText.previousSibling);
// 	readMoreText.insertBefore(br, readMoreText.firstChild);
// 	a.classList.add('read-more-area')
// });

// // ボタンにクリックイベントを追加
// const readMoreAreas = document.querySelectorAll('.read-more-area');
// readMoreAreas.forEach(readMoreArea => {
// 	readMoreArea.addEventListener('click', function() {
// 		const localReadMoreText = this.nextElementSibling;
// 		localReadMoreText.classList.toggle('show');
// 	})
// });


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// メニューアイコン クリック時の処理
////////////////////////////////////////////////////////////////////////////////////////////////////////////
class MenuIcon {
	constructor() {
		this.DOM = {};
		this.DOM.btn = document.querySelector('.nav__menu-icon');
		this.DOM.navWrapper = document.querySelector('.nav');
		this.DOM.closingTarget = document.querySelector('.nav__closing-target');
		this.DOM.links = document.querySelectorAll('.nav a');

		this.eventType = this._getEventType();
		// this.eventType = window.ontouchstart ? 'touchstart' : 'click';
		// //スマホのブラウザにはwindow.ontouchstartというプロパティが存在するのでeventTypeにtouchstartが登録される
		// //特定の処理をクラス内で行う場合は基本的にはプライベートメソッドに切り出してあげルのがベター↓

		this._addEvent();
	}
	
	_getEventType() {
		return window.ontouchstart ? 'touchstart' : 'click';
	}
	
	_addEvent() {
		this.DOM.closingTarget.addEventListener('click', this._toggle.bind(this));
		this.DOM.btn.addEventListener('click', this._toggle.bind(this));
		this.DOM.links.forEach(link => {
			link.addEventListener('click', this._toggle.bind(this))
		});
	}
	
	_toggle() {
		this.DOM.btn.classList.toggle('show');
		this.DOM.navWrapper.classList.toggle('show');
		this.DOM.closingTarget.classList.toggle('show');
	}
}

new MenuIcon();

// 	// クラス化前の記述
// document.querySelector('.menu-icon').onclick = function() {
// 	const tc = new toggleClassShow('.menu-icon');
// 	const tc2 = new toggleClassShow('.nav-container');
// 	tc.toggleClass();
// 	tc2.toggleClass();

//  //   //さらに前の記述
// 	//   let el = document.querySelector('.menu-icon');
// 	//   el.classList.toggle('show');
// 	//   let el2 = document.querySelector('.nav-wrapper');
// 	//   el2.classList.toggle('show');
// };

// class toggleClassShow {
// 	constructor(el) {
// 		this.el = document.querySelector(el);
// 	}
// 	toggleClass() {
// 		this.el.classList.toggle('show');
// 	}
// }


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// sections-container要素の背景に＠ランダムなspanを生成（rellax導入）
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// window.addEventListener('DOMcontentloaded' , () => {

	// 各sectionノードを取得
	// const sections = document.querySelectorAll('section');
	const section = document.querySelector('.sections-container');
		// divを作成・スタイルを指定、各ノードのlastChilsに挿入
		const newDiv = document.createElement('div');
		newDiv.classList.add('spanWrapper');
		newDiv.style.position = "absolute";
		newDiv.style.top ="0";
		newDiv.style.width = "100%";
		newDiv.style.height = "100%";
		newDiv.style.zIndex = '0';
		newDiv.style.overflow = 'hidden';
		section.insertBefore(newDiv, section.firstChild);
	
		// ランダムな大きさ・カラーのspanを生成
		for (i=0; i<25; i++){
			const newSpan = document.createElement('span');
			const spanSize = (Math.round(Math.random() * (20 - 10) + 10) + "vw");
			// クラス・属性を適用
			newSpan.classList.add('rellax');
			newSpan.classList.add('bgSpan');
			newSpan.setAttribute('data-rellax-speed', Math.round((Math.random() * (6 - 1) + 1)));
			newSpan.setAttribute('data-rellax-percentage', '.5');
			// スタイルを適用
			newSpan.style.position = "absolute";
			newSpan.style.top = Math.round((Math.random() * (100 - 0) + 0)) + "%";
			newSpan.style.left = Math.round((Math.random() * (100 - 0) + 0)) + "%";
			newSpan.style.width = spanSize;
			newSpan.style.height = spanSize;
			r = Math.round( (Math.random( ) * (20 - 15) + 15) ) * 7;
			g = Math.round( (Math.random( ) * (20 - 15) + 15) ) * 6;
			b = Math.round( (Math.random( ) * (25 - 15) + 15) ) * 4;
			newSpan.style.backgroundColor= "rgba("+r+","+g+","+b+",.7)";
			newSpan.style.borderRadius = '3%';
			newSpan.style.transform = 'rotate(45deg)';
			newSpan.style.transition = '.5s';
			newSpan.style.transitionTimingFunction = 'ease-out';
			newSpan.style.backfaceVisibility = 'hidden';
			newDiv.appendChild(newSpan);
		}
	// });
// });
	// const ctx = newCanvas.getContext('2d');
			// const cW = newCanvas.width, //canvasの幅
			// cH = newCanvas.height; //canvasの高さ
			// // canvasの背景を黒に
			// ctx.fillStyle = 'transparent';
			// ctx.fillRect(0,0,cW,cH);
			// // ランダムな始点・終点、カラーのラインを複数描く
			// ctx.globalCompositeOperation = "lighter";
			// ctx.lineWidth = 150;
		// // canvasへの描画
		// for (i=0; i<10; i++){/*線の本数がこの状態のとき*/
		// 	const lsX = Math.round(Math.random( )* random),
		// 	leX = Math.round(Math.random( )* random),
		// 	lsY = Math.round(Math.random( )* random),
		// // 	leY = Math.round(Math.random( )* random),
		// 	r = Math.round(Math.random( )* (250 - 0) + 0),
		// 	g = Math.round(Math.random( )* (250 - 0) + 0),
		// 	b = Math.round(Math.random( )* (250 - 0) + 0);
		// 	ctx.beginPath();
		// 	ctx.strokeStyle = "rgba("+r+","+g+","+b+",0.5)";
		// 	ctx.moveTo(lsX,lsY);
		// 	ctx.lineTo(leX,leY);
		// 	ctx.stroke();
		// } 


////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////                      //////////////////////////////////////////////////////////////////
///////////////////  以　下　廃　止　済　み  ///////////////////////////////////////////////////////////////////
//////////////////                       ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// aboutセクション / スライドショー
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// window.addEventListener('DOMcontentloaded', () => {
	// const images01 = ['/images/bg-front01.jpg', '/images/bg-front02.jpg', '/images/bg-front03.jpg'];
	// const images02 = ['/images/bg-front02.jpg', '/images/bg-front01.jpg', '/images/bg-front02.jpg'];
	// // const ss1 = new slideShow(images01);

	// class slideShow {
	// 	constructor(target, images) {
	// 		this.target = document.querySelector(target);
	// 		this.images = images;
	// 		this.count = 0;
	// 		this.slideid = 0;
	// 		this._addEvent();
	// 		// console.log(this.images);
	// 	};
	// 	_addEvent() {
	// 			// if (this.slideid <= this.images.length) {
	// 			// console.log(this.slideTarget);
	// 			console.log('a');
	// 			this.slideid = setInterval(this._slideImage.bind(this), 2000);
	// 			console.log(this.slideid);
	// 			// }
	// 			// else {
	// 				// clearInterval(this.slideid);
	// 				// console.log('b');
	// 				// this.slideid = 0;
	// 			// }
	// 	}
	// 	_slideImage() {
	// 		if (this.count >= this.images.length) {
	// 			console.log('c');
	// 		// 	console.log(this.count);
	// 		// 	console.log(images.length);
	// 			this.count = 0;
	// 			this.target.style.backgroundImage = "url('" + this.images[this.count] + "')";
	// 			this.count++;
	// 			console.log(this.target.style.backgroundImage);
	// 		}
	// 		else {
	// 			console.log('d');
	// 			this.target.style.backgroundImage = "url('" + this.images[this.count] + "')";
	// 			this.count++;
	// 			// console.log(images[this.count]);
	// 			console.log(this.target.style.backgroundImage);
	// 		}
	// 	}
	// }	
	// const ss1 = new slideShow('.slideTarget01', images01);
	// const ss2 = new slideShow(images02);
// });


////////////////////////////////////////////////////////////////////////////////////////////////////////////
//　スクロール検知でDOMに対してscrolledをトグルクラス（IntersectionObserver導入によって廃止）
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', () => {
// 	const tcScroll = new toggleClassScrolled('.main-visual__title-logo-inner-left', 280);
// 	const tcScroll2 = new toggleClassScrolled('.main-visual__title-logo-inner-right', 120);
// 	const tcScroll3 = new toggleClassScrolled('.h-fade-in__h-fade-in-body', 300);
// 	const tcScroll4 = new toggleClassScrolled('.h-fade-in__h-fade-in-cover', 300);
// 	const tcScroll5 = new toggleClassScrolled('.main-visual__arrow', 300);
// 	tcScroll.toggleClass();
// 	tcScroll2.toggleClass();
// 	tcScroll3.toggleClass();
// 	tcScroll4.toggleClass();
// 	tcScroll5.toggleClass();
// });

// class toggleClassScrolled {
// 	constructor(els, height) {
// 		this.els = document.querySelectorAll(els);
// 		this.height = height;
// 	}
// 	toggleClass() {
// 		setInterval( () => {
// 			this.els.forEach((el) => {
// 				let clientRect = el.getBoundingClientRect();
// 				let y = clientRect.top;
// 				if (y <= this.height) {
// 					el.classList.add('scrolled');
// 				} else {
// 					el.classList.remove('scrolled');
// 				}
// 			});
// 		},100);
// 	}
// }

// let targetElement1 = document.getElementById( 'title_logo_scroll_target1' );
// let targetElement2 = document.getElementById( 'title_logo_scroll_target2' );

// setInterval( function(){
//   let clientRect1 = targetElement1.getBoundingClientRect();
//   let clientRect2 = targetElement2.getBoundingClientRect();
//   let y1 = clientRect1.top ;
//   let y2 = clientRect2.top ;
  
//   if (y1 <= 300) {
//     targetElement1.classList.add('scrolled');
//   } else {
//     targetElement1.classList.remove('scrolled');
//   }

//   if (y2 <= 100) {
//     targetElement2.classList.add('scrolled');
//   } else {
//     targetElement2.classList.remove('scrolled');
//   }
// },100);






////////////////////////////////////////////////////////////////////////////////////////////////////////////
////　ただのメモ達
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// for(let i = 0; i < todos.length; i++){
//  console.log()
// }

// for(let key in todos) {
//   log(key, todos[key]); //順に独自？の添え字が与えられる
// }

// for(let todo of todos){

// }

// todos.forEach(function(todo){
//   // forEachは戻り値を取らない
// });

// const newTodos = todos.map(function(todo){
//   todo.id = todo.id + 10;
//   return todo;
// }).filter(function (todo){
//   return todo.completed === true;
// });
// // mapは戻り値を取る
// // filterはメソッドチェーンとして使ってるtrueのもののみ返す

// const arry = [1,2,3,4,5,6];

// arry.reduce(function (acc, curr, index) {

// })

// if(0 == '0' && 0 ==='0') {
//     console.log();
//  } else {
//     console.log();
// }
// // and条件

// if(0 == '0' && 0 ==='0') {
//   console.log();
// } else {
//   console.log();
// }
// // or条件

// if(変数) {
//   console.log();
// } else {
//   console.log();
// }
// // 変数に値が設定されてるかどうかで分岐
// // なぜ？ => 0やundefinedやnullはfalseなので。