document.addEventListener('DOMContentLoaded', function () {
	var rellax = new Rellax('.rellax');
});

// window.addEventListener('load', function () {


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// インターセクションオブザーバー　でスクロール監視、　トグルクラス
////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.addEventListener('load', function () {
	// const so = new ScrollObserver('.main-visual__arrow', {root: null});
	const so2 = new ScrollObserver('.main-visual__title-logo-inner-left', false, {rootMargin: "900% 0px -55% 0px"});
	const so3 = new ScrollObserver('.main-visual__title-logo-inner-right', false, {rootMargin: "900% 0px -80% 0px"});
	const so4 = new ScrollObserver('.h-fade-in__body', true, {rootMargin: "0px 0px -30% 0px"});
	const so5 = new ScrollObserver('.h-fade-in', true, {rootMargin: "0px 0px -30% 0px"});
	const so6 = new ScrollObserver('.jsFadeIn', true, {rootMargin: "0px 0px -55% 0px"});
	const so7 = new ScrollObserver('.profile__profile-3', true, {rootMargin: "0px 0px -15% 0px"});
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
const readMoreTexts = document.querySelectorAll('.more-text');
readMoreTexts.forEach(readMoreText => {
	const a = document.createElement('a');
	const br = document.createElement('br');
	readMoreText.parentNode.insertBefore(a, readMoreText.previousSibling);
	readMoreText.insertBefore(br, readMoreText.firstChild);
	a.classList.add('read-more-area')
});

// ボタンにクリックイベントを追加
const readMoreAreas = document.querySelectorAll('.read-more-area');
readMoreAreas.forEach(readMoreArea => {
	readMoreArea.addEventListener('click', function() {
		const localReadMoreText = this.nextElementSibling;
		localReadMoreText.classList.toggle('show');
	})
});


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
		this.eventType = window.ontouchstart ? 'touchstart' : 'click';
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

// //ここからロード時・リサイズ時の処理
// window.addEventListener('load', () => {
// 	// bodyを親とするノード内で、新しくcanvasとdivを作る
// 	const container = document.querySelector('.profile__profile-2');
// 	const profileSkills = document.querySelectorAll('.profile-skills');
// 	profileSkills.forEach(profileSkill => {
// 		const newCanvas = document.createElement('canvas');
// 		const newDiv = document.createElement('div');
// 		newDiv.classList.add('canvasWrapper');
// 		// 新しく作ったdivの中にcanvasを入れる
// 		newDiv.appendChild(newCanvas);
// 		// 新しく作ったdivを#containerの前に挿入する
// 		profileSkill.insertBefore(newDiv, profileSkill.firstChild);
// 		// canvasのサイズを新しいdivからもらう
// 		newCanvas.style.width = '100%';
// 		newCanvas.style.height = '100%';
// 		// 新しく作ったdivのidの指定
		
// 		// canvasへの描画
// 		const ctx = newCanvas.getContext('2d');
// 		const cW = newCanvas.width, //canvasの幅
// 		cH = newCanvas.height; //canvasの高さ
// 		// canvasの背景を黒に
// 		ctx.fillStyle = 'transparent';
// 		ctx.fillRect(0,0,cW,cH);
// 		// ランダムな始点・終点、カラーのラインを複数描く
// 		ctx.globalCompositeOperation = "lighter";
// 		ctx.lineWidth = 150;
// 		for (i=0; i<25; i++){/*線の本数がこの状態のとき*/
// 			const lsX = Math.round(Math.random( )* cW * 5),
// 			leX = Math.round(Math.random( )* cW -1),
// 			lsY = Math.round(Math.random( )* cH * 5),
// 			leY = Math.round(Math.random( )* cH -800),
// 			r = Math.round(Math.random( )* (250 - 200) + 200),
// 			g = Math.round(Math.random( )* (250 - 200) + 200),
// 			b = Math.round(Math.random( )* (250 - 200) + 200);
// 			ctx.beginPath();
// 			ctx.strokeStyle = "rgba("+r+","+g+","+b+",0.05)";
// 			ctx.moveTo(lsX,lsY);
// 			ctx.lineTo(leX,leY);
// 			ctx.stroke();
// 		} 
// 	});
//   });






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