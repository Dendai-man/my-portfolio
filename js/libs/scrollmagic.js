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
.addTo(controller);

// ゲートアニメーションのwrapper
const pin2 = new ScrollMagic.Scene({triggerElement: '.bgSectionTitles', triggerHook: 0})
.setPin('.gateAnimation', {pushFollowers: false})
.addTo(controller);

const pin3 = new ScrollMagic.Scene({triggerElement: '.about', triggerHook:.5})
.setTween(fadeIn1)
.addTo(controller);

const pin4 = new ScrollMagic.Scene({triggerElement: '#about', triggerHook: 0,})
.setPin('.previewImgWrapper', {pushFollowers: false})
.addTo(controller);

const pin5 = new ScrollMagic.Scene({triggerElement: '#skills', triggerHook: .5})
.addTo(controller);
pin5.on("enter leave", hidePreviewImg);

// const aboutDOM = document.querySelector('.about');
// const aboutDOMHeight = aboutDOM.clientHeight;
const pin6 = new ScrollMagic.Scene({triggerElement: '.about', triggerHook: .5})
.addTo(controller);
pin6.on("enter leave", hidePreviewImg);

function hidePreviewImg() {
    const el = document.querySelector('.previewImgWrapper');
    const el2 = document.querySelector('.aboutCloseTarget')
    el.style.opacity = '0';
    el.classList.toggle('no-pointer-events');
    el2.classList.toggle('no-pointer-events');
    // el2.classList.toggle('inview')
    el2.classList.remove('active');
}

// const pinAboutBodyTop = new ScrollMagic.Scene({triggerElement: '.about', triggerHook:0})
// .setPin('.about__about-body-top', {pushFollowers: false})
// .addTo(controller);

// const tweenAboutBodyTop1 = new ScrollMagic.Scene({triggerElement: '.about', triggerHook:0})
// .setTween(fadeInAbout1)
// .addTo(controller);

// const tweenAboutBodyTop2 = new ScrollMagic.Scene({triggerElement: '#about2', triggerHook:.5})
// .setTween(fadeOutAbout1)
// .addTo(controller);;


/////////////////////////////////////////////////////////////////////////////////////
// 各セクション_シーン(背景セクションテキスト変更/bgSpan等各背景色変更/アニメーション)
/////////////////////////////////////////////////////////////////////////////////////
const section0 = new ScrollMagic.Scene({triggerElement: '#top', triggerHook: .3, reverse:true})
.setTween(changeClr)
.addTo(controller);


const section1A = new ScrollMagic.Scene({triggerElement: '#profile', triggerHook: .3, reverse:true})
.setTween(changeText1)
.addTo(controller);
section1A.on("enter leave", toggleBgClr);

const section1B = new ScrollMagic.Scene({triggerElement: '#profile', triggerHook: .3})
.setTween(changeClr2)
.addTo(controller);


const section2A = new ScrollMagic.Scene({triggerElement: '#about', triggerHook: .3, reverse:true})
.setTween(changeText2)
.addTo(controller);
section2A.on("enter leave", toggleBgClr);

const section2B = new ScrollMagic.Scene({triggerElement: '#about', triggerHook: .3})
.setTween(changeClr3)
.addTo(controller);


const section3A = new ScrollMagic.Scene({triggerElement: '#skills', triggerHook: .3, reverse:true})
.setTween(changeText3)
.addTo(controller);
section3A.on("enter leave", toggleBgClr);

const section3B = new ScrollMagic.Scene({triggerElement: '#skills', triggerHook: .3})
.setTween(changeClr4)
.addTo(controller);


const section4A = new ScrollMagic.Scene({triggerElement: '#works', triggerHook: .3, reverse:true})
.setTween(changeText4)
.addTo(controller);

const section4B = new ScrollMagic.Scene({triggerElement: '#works', triggerHook: .3})
.setTween(changeClr5)
.addTo(controller);


const section5A = new ScrollMagic.Scene({triggerElement: '#contact', triggerHook: .3, reverse:true})
.setTween(changeText5)
.addTo(controller);
section5A.on("enter leave", toggleBgClr);

const section5B = new ScrollMagic.Scene({triggerElement: '#contact', triggerHook: .3})
.setTween(changeClr6)
.addTo(controller);

const section5C = new ScrollMagic.Scene({triggerElement: '.contact', triggerHook: .4})
.setTween(coverSlide)
.addTo(controller);

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
        hFades.forEach(hFade     => {  hFade.classList.add('cChanged');   })
        bgSpans.forEach(bgSpan   => {  bgSpan.classList.add('cChanged');  })
        navIcons.forEach(navIcon => {  navIcon.classList.add('cChanged'); })
    } else {
        bgTitles.classList.remove('cChanged');
        bgSectionTitle.classList.remove('cChanged');
        hFades.forEach(hFade     => {  hFade.classList.remove('cChanged');   })
        bgSpans.forEach(bgSpan   => {  bgSpan.classList.remove('cChanged');  })
        navIcons.forEach(navIcon => {  navIcon.classList.remove('cChanged'); })
    }
}