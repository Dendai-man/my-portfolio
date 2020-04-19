const controller = new ScrollMagic.Controller();



/////////////////////////////////////////////////////////////////////////////////////
// ゲートアニメーション
/////////////////////////////////////////////////////////////////////////////////////
const gateLeft = new ScrollMagic.Scene({triggerElement: ".gateAnimation", triggerHook: .1,})
.setTween(gateMoveLeft)
.addTo(controller);

const gateRight = new ScrollMagic.Scene({triggerElement: ".gateAnimation", triggerHook: .1,})
.setTween(gateMoveRight)
.addTo(controller);


/////////////////////////////////////////////////////////////////////////////////////
// ピン止めシーン
/////////////////////////////////////////////////////////////////////////////////////
// 背景セクションタイトルのwrapper
const pin1 = new ScrollMagic.Scene({triggerElement: '.bgSectionTitles', triggerHook: 0})
.setPin('.bgSectionTitles', {pushFollowers: false})
.addTo(controller)

// ゲートアニメーションのwrapper
const pin2 = new ScrollMagic.Scene({triggerElement: '.bgSectionTitles', triggerHook: 0})
.setPin('.gateAnimation', {pushFollowers: false})
.addTo(controller)

const pin3 = new ScrollMagic.Scene({triggerElement: '.about', triggerHook: .3})
.setPin('.about__about-header', {pushFollowers: false})
.setTween(fadeInOut)
.addTo(controller)
// .addIndicators({
//     name: "Box Timeline",
//     colorTrigger: "blue",
//     colorStart: "blue",
//     colorEnd: "blue"
// })

/////////////////////////////////////////////////////////////////////////////////////
// 各セクション_シーン(背景セクションテキスト変更/bgSpan等各背景色変更/アニメーション)
/////////////////////////////////////////////////////////////////////////////////////
const sc1 = new ScrollMagic.Scene({triggerElement: '#profile', triggerHook: .3})
.setTween(changeText1)
.addTo(controller);

sc1.on("enter", toggleBgClr)
.on("leave", toggleBgClr);


const sc2 = new ScrollMagic.Scene({triggerElement: '#about', triggerHook: .3})
.setTween(changeText2)
.addTo(controller);

sc2.on("enter", toggleBgClr)
.on("leave", toggleBgClr);


const sc3 = new ScrollMagic.Scene({triggerElement: '#skills', triggerHook: .3})
.setTween(changeText3)
.addTo(controller);

sc3.on("enter", toggleBgClr)
.on("leave", toggleBgClr);

// 各要素の背景色をトグル(要クラス化)
function toggleBgClr (event) {
    const bgTitles = document.querySelector('.bgSectionTitlesOverlay');
    const bgSectionTitle = document.querySelector('.bgSectionTitles')
    const bgSpans = document.querySelectorAll('.bgSpan');
    const hFades = document.querySelectorAll('.h-fade-in');
    const navIcons = document.querySelectorAll('.nav__menu-icon__line');

    if (!bgTitles.classList.contains('cChanged')) {
        bgTitles.classList.add('cChanged');
        bgSectionTitle.classList.add('cChanged');
        bgSpans.forEach(bgSpan   => {  bgSpan.classList.add('cChanged');  })
        hFades.forEach(hFade     => {  hFade.classList.add('cChanged');   })
        navIcons.forEach(navIcon => {  navIcon.classList.add('cChanged'); })
    } else {
        bgTitles.classList.remove('cChanged');
        bgSectionTitle.classList.remove('cChanged');
        bgSpans.forEach(bgSpan   => {  bgSpan.classList.remove('cChanged');  })
        hFades.forEach(hFade     => {  hFade.classList.remove('cChanged');   })
        navIcons.forEach(navIcon => {  navIcon.classList.remove('cChanged'); })
    }
}