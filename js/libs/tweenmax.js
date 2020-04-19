const changeText1 = new TimelineMax();
changeText1.to(".bgSectionTitles", {text: "Profile"});
const changeText2 = new TimelineMax();
changeText2.to(".bgSectionTitles", {text: "About"});
const changeText3 = new TimelineMax();
changeText3.to(".bgSectionTitles", {text: "Skills"});
const changeText4 = new TimelineMax();
changeText3.to(".bgSectionTitles", {text: "Works"});
const changeText5 = new TimelineMax();
changeText3.to(".bgSectionTitles", {text: "Contact"});


const gateMoveLeft = new TimelineMax();
gateMoveLeft.to(".gateLeft", {duration:.6, scaleX:0, ease:"power1.inOut", stagger:".2", transformOrigin:"left"});
const gateMoveRight = new TimelineMax();
gateMoveRight.to(".gateRight", {duration:.6, scaleX:0,  ease:"power1.inOut", stagger:".2", transformOrigin:"right"});


const fadeInOut = new TimelineMax();
fadeInOut.from(".about__about-header", {delay:.5 ,duration:.5, opacity:0, y:-50, transformOrigin:"bottom"})