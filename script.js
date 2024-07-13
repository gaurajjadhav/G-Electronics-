const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from('.navbar', {
        y: -10,
        opacity: 0,
        delay:-.5,
        duration: 3.5,
        ease: Expo.easeInOut,
        stagger: .2
    })
    .to(".boundingelem",{
        y: 0,
        ease: Expo.easeInOut,
        delay: -3.3,
        duration: 3.5,
        stagger: .2
    })
}
firstPageAnim();


function slideAnimation(){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay:{
        delay:2500,
        disableOnInteraction: true,
      },
    });
  }
  slideAnimation()

//  var tl = gsap.timeline()
//  tl.from("#loader h3",{
//     x:50,
//     opacity:0,
//     duration:1.3,
//     stagger:0.1
 
//  } )
//  tl.to("#loader h3",{
//   opacity:0,
//   x:-40,
//   duration:1,
//   stagger:0.1
//  })
//  tl.to("#loader",{
//   opacity:0
//  })
//  tl.to("#loader",{

// display: "none"
//  })


