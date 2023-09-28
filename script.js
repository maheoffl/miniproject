const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});



function videoconanimation() {
    let videocon = document.querySelector(".videocontainer");
    let play= document.querySelector(".play");

videocon.addEventListener("mouseenter", function () {
  
    
    gsap.to(".play", {
        scale: 1,
        opacity:1
})

})

videocon.addEventListener("mouseleave", function () {
    gsap.to(".play", {
        scale: 0,
        opacity:0
    })
})

videocon.addEventListener("mousemove", function (a) {
    gsap.to(".play", {
        top: a.y-50,
        left: a.x-50
        
    })
})
}
videoconanimation();

function loadinganimation() {
    gsap.from(".page1 h1", {
    y: 30,
    opacity: 0,
    delay: 0.9,
    stagger:0.3
})
    gsap.from(".page1 .videocontainer video", {
    scale:0.9,
    opacity: 0,
    delay: 1.2,
    stagger:0.5
})
}
loadinganimation();

