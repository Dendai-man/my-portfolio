const changeText1 = new TimelineMax();
changeText1.to(".bgSectionTitles", {text: "Profile"});
const changeText2 = new TimelineMax();
changeText2.to(".bgSectionTitles", {text: "About"});
const changeText3 = new TimelineMax();
changeText3.to(".bgSectionTitles", {text: "Skills"});
const changeText4 = new TimelineMax();
changeText4.to(".bgSectionTitles", {text: "Works"});
const changeText5 = new TimelineMax();
changeText5.to(".bgSectionTitles", {text: "Contact"});


const gateMoveLeft = new TimelineMax();
gateMoveLeft.to(".gateLeft", {delay:1, duration:.6, scaleX:0, ease:"power1.inOut", stagger:".2", transformOrigin:"left"});
const gateMoveRight = new TimelineMax();
gateMoveRight.to(".gateRight", {delay:1, duration:.6, scaleX:0,  ease:"power1.inOut", stagger:".2", transformOrigin:"right"});


const fadeIn1 = new TimelineMax();
fadeIn1.from(".about-header", {duration:.5, opacity:0, scaleX:0, transformOrigin:"right"});

// const fadeInAbout1 = new TimelineMax();
// fadeInAbout1.from("#about1", {duration:.5, opacity:0, transformOrigin:"bottom"});

// const fadeOutAbout1 = new TimelineMax();
// fadeOutAbout1.to("#about1", {duration:.5, opacity:0, transformOrigin:"bottom"});