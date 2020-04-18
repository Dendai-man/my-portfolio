let controller = new ScrollMagic.Controller();

// const pinning = new TimelineMax();
// pinning.

const changeText1 = new TimelineMax();
changeText1.to(".bgSectionTitles", {text: "profile", ease: "none"});
const changeText2 = new TimelineMax();
changeText2.to(".bgSectionTitles", {text: "about", ease: "none"});
const changeText3 = new TimelineMax();
changeText3.to(".bgSectionTitles", {text: "skills", ease: "none"});

// const moveX1 = new TimelineMax();
// moveX1.from(".bgSectionTitles", {duration: 1, opacity:.5, scale:.5, x:50, ease:"none"});


// アニメーションしか使わないシーンは関数から生成
const sceneCreate = (trigger,hook,tween) => {
    new ScrollMagic.Scene({
     triggerElement: trigger,
     triggerHook: hook,
             })
     .setTween(tween)
     .addTo(controller);
 }


// 背景セクションタイトル_ピン止めシーン
const pin1 = new ScrollMagic.Scene({
    triggerElement: '.bgSectionTitles',
    triggerHook: 0
})
.setPin('.bgSectionTitles', {
    pushFollowers: false
})
.addTo(controller)

// 各セクション_シーン
const sc1 = new ScrollMagic.Scene({
    triggerElement: '#profile',
    triggerHook: .3
})
// .setTween(moveX1)
.setTween(changeText1)
.addTo(controller);

 const sc2 = new ScrollMagic.Scene({
    triggerElement: '#about',
     triggerHook: .5
})
.setTween(changeText2)
.addTo(controller);

const sc3 = new ScrollMagic.Scene({
    triggerElement: '#skills',
     triggerHook: .5
})
.setTween(changeText3)
.addTo(controller);


 function toggleBgClrBlack (event) {
     const bgTitles = document.querySelector('.bgSectionTitlesOverlay');
     const bgSectionTitle = document.querySelector('.bgSectionTitles')
     const bgSpans = document.querySelectorAll('.bgSpan');
     const hFades = document.querySelectorAll('.h-fade-in');

     if (!bgTitles.classList.contains('cChanged')) {
        bgTitles.classList.add('cChanged');
        bgSectionTitle.classList.add('cChanged');
        bgSpans.forEach(bgSpan => {
            bgSpan.classList.add('cChanged');
        })
        hFades.forEach(hFade => {
            hFade.classList.add('cChanged');
        })
     } else {
        bgTitles.classList.remove('cChanged');
        bgSectionTitle.classList.remove('cChanged');
        bgSpans.forEach(bgSpan => {
            bgSpan.classList.remove('cChanged');
        })
        hFades.forEach(hFade => {
            hFade.classList.remove('cChanged');
        })
     }
}

function counting () {
    let count = 0;
    count --;
    console.log(count);
}

function callback (event) {
    console.log("Event fired! (" + event.type + ")");
}
// add listeners
// sc1.on("change update progress start end enter leave", callback);
sc1.on("enter", toggleBgClrBlack)
.on("leave", toggleBgClrBlack);

sc2.on("enter", toggleBgClrBlack)
.on("leave", toggleBgClrBlack);

sc3.on("enter", toggleBgClrBlack)
.on("leave", toggleBgClrBlack);