////////////////////////////////////////////////////////////////////////////////////////////////////////////
// onloadまでスクロール禁止
////////////////////////////////////////////////////////////////////////////////////////////////////////////
const preventScroll = function() {
	// PCでのスクロール禁止
	document.addEventListener("mousewheel", scroll_control, { passive: false });
	// スマホでのタッチ操作でのスクロール禁止
	document.addEventListener("touchmove", scroll_control, { passive: false });	
}
const returnScroll = function() {
	document.removeEventListener("mousewheel", scroll_control, { passive: false });
	// スマホでのタッチ操作でのスクロール禁止解除
	document.removeEventListener('touchmove', scroll_control, { passive: false });
}
// // スクロール関連メソッド
function scroll_control(event) {
	event.preventDefault();
}

preventScroll();
// スクロール禁止解除
window.onload = () => {
	setTimeout(returnScroll, 1500);
	setTimeout(setGIF, 1500);
	// PCでのスクロール禁止解除
};


// document.addEventListener('DOMContentloaded', () => {
	const checkPaceDone = setInterval(addClass, 500);
	
	function addClass() {
		const topCover = document.querySelector('.topCoverAnimate');
		const body = document.querySelector('body');
		if (body.classList.contains('pace-done')) {
			topCover.classList.add('show');
			clearInterval(checkPaceDone);
		}
	}
// });



////////////////////////////////////////////////////////////////////////////////////////////////////////////
// rellaxライブラリ用 / インスタンス生成
////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
	const rellax = new Rellax('.rellax');
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// インターセクションオブザーバーでスクロール監視、　トグルクラスでcssアニメーション
////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.addEventListener('load', function () {
	const so1 = new ScrollObserver('.jsFadeIn', true, {rootMargin: "0px 0px -25% 0px"});
	const so2 = new ScrollObserver('.jsFadeInUp', true, {rootMargin: "0px 0px -30% 0px"});
	const so3 = new ScrollObserver('.jsFadeInUpDelay', true, {rootMargin: "0px 0px -65% 0px"});
	const so5 = new ScrollObserver('.jsFadeInDelay', true, {rootMargin: "0px 0px -75% 0px"});
	const so6 = new ScrollObserver('.jsFadeInOut', false, {rootMargin: "-25% 0px -25% 0px"});
	const so7 = new ScrollObserver('.jsFadeInOutDelay', false, {rootMargin: "-50% 0px -50% 0px"});
	const so8 = new ScrollObserver('.main-visual__title-logo-inner-left', false, {rootMargin: "900% 0px -55% 0px"});
	const so9 = new ScrollObserver('.main-visual__title-logo-inner-right', false, {rootMargin: "900% 0px -85% 0px"});
	const so10 = new ScrollObserver('.h-fade-in__body', false, {rootMargin: "0px 0px -70% 0px"});
	const so11 = new ScrollObserver('.h-fade-in', false, {rootMargin: "0px 0px -70% 0px"});
	const so12 = new ScrollObserver('.skills__skill-2', false, {rootMargin: "0px 0px -65% 0px"});
	const so13 = new ScrollObserver('.skills__skill-3', false, {rootMargin: "0px 0px -65% 0px"});
	const so14 = new ScrollObserver('.sections-container', false, {root: document.querySelector('.about__about-1'), rootMargin: "0px 0px 0px 0px"});
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
// sections-container要素の背景に＠ランダムなspanを生成（rellaxを同時に導入）
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ノードを取得
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
		newSpan.setAttribute('data-rellax-speed', Math.round((Math.random() * (5 - 1) + 1)));
		newSpan.setAttribute('data-rellax-percentage', '.5');
		// スタイルを適用
		newSpan.style.position = "absolute";
		newSpan.style.width = spanSize;
		newSpan.style.height = spanSize;
		newSpan.style.top = Math.round((Math.random() * (100 - 15) + 15)) + "%";
		newSpan.style.left = Math.round((Math.random() * (100 - 0) + 0)) + "%";
		r = Math.round( (Math.random( ) * (20 - 15) + 15) * 7);
		g = Math.round( (Math.random( ) * (20 - 15) + 15) * 4);
		b = Math.round( (Math.random( ) * (25 - 15) + 15) * 3);
		newSpan.style.backgroundColor= "rgba("+r+","+g+","+b+",.3)";
		newSpan.style.borderRadius = '3%';
		newSpan.style.transform = 'rotate(45deg)';
		// newSpan.style.filter = 'blur(5px)'
		// newSpan.style.transitionTimingFunction = 'ease-out';
		newSpan.style.backfaceVisibility = 'hidden';
		newDiv.appendChild(newSpan);
	}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// about sectionのイメージプレビュー機能
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// window.onloadでgifを読み込み
function setGIF() {
	document.querySelector('#aboutImg1').src = './images/robot.gif';
	document.querySelector('#aboutImg2').src = './images/logic.gif';
	document.querySelector('#aboutImg3').src = './images/tennis.gif';
}

aboutImgPreview();
		
function aboutImgPreview () {
	const aboutSectionImages = document.querySelectorAll('.about-img');

	const previewImg = document.querySelector('.previewImg');
	const previewImgWrapper = document.querySelector('.previewImgWrapper');
	const closeTarget = document.querySelector('.aboutCloseTarget');
	// let previewImgDetail = document.querySelector('.previewImgDetail').innerText;
	const detailTexts = 
	["レゴクリエイターシリーズというジョイントなどの特殊なパーツが多く含まれているセット。完成形が定まっている他の商品を退屈と感じ、これを買い漁り自分だけのオリジナル作品をひたすら作っていました。",
	"高校時代にゲーム内で作ったロボット。横スクロールアクション型のステージを作る為に制作。伝わりにくいかとは思いますが、このロボットの原型はただジャンプと移動が出来るだけのマリオのようなものです。そこに様々な回路を組み、3段攻撃や2段ジャンプなどの機能を持たせています。上の青いゲージはオーバーヒートゲージで、攻撃などを頻発すると一定時間操作が効かなくなるというリスクがあります。攻撃エフェクトなどのビジュアル面に関しても、細かなオブジェクトをひたすら切り貼りして作っています。",
	"ロボットの論理回路。OR／NOR／XORゲートなど実際の論理ゲートに加えタイマーなどのスイッチャー、cssでいうtranslateのような機能をオブジェクトに与えるムーバー等があり、組み合わせ次第で多様な条件分岐をする回路が組めます。それをコントローラの入力と繋ぎ対応させることで実際に操作できます。回路上で光っている導線が実際に入力が走っている箇所です。高校生ぶりに起動して驚いたのは機能ごとに回路がしっかりと分けられており、いわゆるリファクタリングが徹底されていました（笑）",
	"自分で作れそうなものはなんでも作ります。この画像はスターウォーズのコスプレで、ローブとボトムス以外は1から自作したものです。（流石にプログラミング関係ない）",
	"高校時代の定期テストの成績表。こんな感じでした。家庭科は嫌いだったみたいです。","サーブ練の様子です。上手くなりたい一心で、帰宅後も近所の壁打ち場で練習を続けました。ただ努力の仕方が悪かったのか、人一倍の努力でも成果は人並みだったのを覚えています（笑）。",
	"タイトル決め会議の様子です。ライブのタイトル/コンセプト/曲/曲順/MCなどの構成/予算/衣装などなど、ライブを作る前に必要な話し合いが沢山あります。年に2度のライブ＝半年間で、学生生活と並行してライブを作るにはとにかく時間が沢山必要でした。ライブの大枠が決まった後は、それぞれの役職で考案した内容を後輩に指導します。指導がある程度終わる頃には、大体本番当日まで1ヶ月を切っており、練習時間を増やし通し練習を繰り返します。この詰めの段階にたどり着くまでも十分大変なのですが、この最後の1ヶ月が最も問題が起こりやすく（各役職での決定事項が上手く噛み合わないなど）、難しい時期です。他にもソロオーディションやその為の練習なども時間を見つけて行わなければなりません。わずか1時間半のライブの為に、何百倍もの時間をかけライブを完成させます。",
	"後輩たちへフィードバックを行っている様子です。私は主に「演出」「パートリーダー」という2つの役職についていました。「演出」は振り付け/並び/照明/MCなど、衣装を除いた舞台の見た目に関わる部分全てを担い、「パートリーダー」は一部の音割り（コーラスを作る）に加えて歌の練習指導を行います。指導の仕方がチーム全体のモチベーションに良い意味でも悪い意味でも影響するため、「どのように伝えるか」を常に意識して指導していました。"]

	closeTarget.addEventListener('click', () => {
		previewImgWrapper.style.opacity = '0';
		closeTarget.classList.remove('active');
		// スクロール禁止解除
		returnScroll();
	});

	aboutSectionImages.forEach(aboutSectionImage => {
		aboutSectionImage.addEventListener('click', (el) => {
			const pickURL = aboutSectionImage.src;
			const aboutSectionImagesArray = Array.from(aboutSectionImages);
			const currentIndex = aboutSectionImagesArray.indexOf.call(aboutSectionImages, el.currentTarget);
			// スクロール禁止
			preventScroll();
			// 拡大解除DOMを表示
			closeTarget.classList.add('active');
			// previewImgにURLとテキストを変更
			previewImgWrapper.style.opacity = '1';
			previewImg.style.backgroundImage = "url(" + pickURL;
			changeInnerText(currentIndex);

			function changeInnerText(index) {
				document.querySelector('.previewImgDetail').innerText = detailTexts[index];
			}
		});
	});
};

// 関連して、誤作動防止の為aタグクリック時にはスクロール禁止を解除
const aTags = document.querySelectorAll('a');
aTags.forEach(aTag => {
	aTag.addEventListener('click', returnScroll);
})


	// aboutSectionImages.forEach(aboutSectionImage => {
		// const pickURL = aboutSectionImage.src;
		// aboutSectionImage.addEventListener('click', () => {
		// 	console.log(pickURL);
		// 	previewImg.style.backgroundImage = "url(" + pickURL;
		// 	previewImgWrapper.style.opacity = '1';
		// 	closeTarget.classList.add('active');
		// });
	// });
// aboutSectionImages.forEach(aboutSectionImage => {
// 	aboutSectionImage.classList.add('rellax');
// 	aboutSectionImage.setAttribute('data-rellax-speed', Math.round((Math.random() * (-3 - -1) + -1)));
// 	aboutSectionImage.setAttribute('data-rellax-percentage', '.5');
// 	const RandomSize = Math.round((Math.random() * (100 - 80) + 80)) + "%";
// 	aboutSectionImage.style.width = RandomSize;
// 	aboutSectionImage.style.height = RandomSize;
// })
// DOM取得後indexに奇数をもつか偶数をもつかで分ける
// const aboutImgDOMs = document.querySelectorAll('.about-body-bottom__about-img-inner');
// const aboutImgDOMsEven = Array.from(aboutImgDOMs).filter((element, index) => {
// 	return index % 2 == 0;
// });
// const aboutImgDOMsOdd = Array.from(aboutImgDOMs).filter((element, index) => {
// 	return index % 2 == 1;
// });
// aboutImgDOMsEven.forEach(aboutImgDOMEven => {
// 	aboutImgDOMEven.style.top = Math.round((Math.random() * (50 - 0) + 0)) + "%";
// 	aboutImgDOMEven.style.right = Math.round((Math.random() * (40 - 14) + 14)) + "%";
// })
// aboutImgDOMsOdd.forEach(aboutImgDOMOdd => {
// 	aboutImgDOMOdd.style.top = Math.round((Math.random() * (-10 - -30) + -30)) + "%";
// 	aboutImgDOMOdd.style.left = Math.round((Math.random() * (80 - 14) + 14)) + "%";
// })


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// worksセクション、詳細プレビュー機能
////////////////////////////////////////////////////////////////////////////////////////////////////////////

worksSectionPreview();

function worksSectionPreview() {
	const worksDOM = document.querySelectorAll('.work');
	const workMoreDOMs = document.querySelectorAll('.workMore');

	worksDOM.forEach(workDOM => {
		const worksDOMArray = Array.from(worksDOM);
		workDOM.addEventListener('click', (el) => {
			const currentIndex = worksDOMArray.indexOf.call(worksDOM, el.currentTarget);
			const currentWorkDom = worksDOMArray[currentIndex];
			const currentPrevSibling = worksDOMArray[currentIndex].previousElementSibling;

			// 全てのノードから一旦removeする　if文は下のif文true処理の為
			if (!currentWorkDom.classList.contains('active')) {
				worksDOMArray.forEach(el => {
					el.classList.remove('active');
				});
				workMoreDOMs.forEach(el2 => {
					el2.classList.remove('active');
				});
			}
			
			if (currentWorkDom.classList.contains('active')) {
				currentWorkDom.classList.remove('active');
				currentPrevSibling.classList.remove('active');
			} else {
				currentWorkDom.classList.add('active');
				currentPrevSibling.classList.add('active');
			}
		});
	});
};






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