
function loader(){
    var tl3 = gsap.timeline();
    
    tl3.from(".loader",{
        top:0,
        duration:2,
        delay:0.4
    })
    tl3.from(".cricle", {
       opacity:2
    })
    tl3.to(".loader", {
        opacity:0,
        duration:1
    })
}
   
loader();


function pageOneAnimation(){
    var tl = gsap.timeline({
   scrollTrigger :{
       trigger: "#page1",
       start:"top top",
       scrub:1,
       pin: true,
    //    markers: true,
   }
})

tl.
from("#nav",{
    top:"-10%",
    duration: 0.5,
    ease: Power1
},"same")


tl.
to("#secondpart video", {
    top:"7%",
    duration:5,
    scale:1.2,
    ease:Power1
},"same2")
}



let swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
        	},
    loop: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
   });

function pageTwoAnimation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger: "#page3",
            pin: true,
            // markers: true,
            scrub: 1,
            start: "top top"
        }
    })
    tl2
    
    .from(".pu", {
        top:"150%",
        duration: 5,
        ease: Power1
    })
    .from(".pi", {
        top:"160%",
        duration: 6,
        ease: Power1
    })
    .to(".circle", {
        top: "50%",
        stagger: .5,
        duration: 5,
        ease: Power1
    })
    .to(".circle", {
        left: "50%",
        duration: 5,
        ease: Power1
    })
    .to(".circle", {
        scale: 0.6,
        duration: 5,
        ease: Power1
    })
    .to(".circle", {
        scale: 1.2,
        duration: 8,
        ease: Power1
    })
    .to(".circle", {
        scale: 10,
        duration: 10,
        ease: Power1
    })
    .to("#buttom h1", {
       opacity:0,
       delay:1,
       duration: 20,
        ease: Power1
    },"a")
    .to("#buttom h3", {
        opacity:0,
        delay:1,
        duration: 20,
         ease: Power1
     },"a")
    .to("#stop h1", {
        left:"-310%",
        delay:5,
        duration: 60,
        ease: Power1
    },"a")
    .to(".pu", {
        background: `linear-gradient(to right, #D7D7CC, #3E3E3E, #F5E2EA)`,
        delay:5,
        duration: 5,
        ease: Power1
    }, "a")
     .to(".fi",{
         top: "0",
         duration:20,
         delay:1,
        ease : Power1
     }, "a3")
     .to(".se",{
        top: "0",
        duration:21,
        delay:2,
       ease : Power1
    }, "a3")
    .to(".th",{
        top: "0",
        duration:22,
        delay:3,
       ease : Power1
    }, "a3")
    .to(".fo",{
        top: "0",
        duration:23,
        delay:4,
       ease : Power1
    }, "a3")
    .to(".fv",{
        top: "0",
        duration:24,
        delay:5,
       ease : Power1
    }, "a3")
    .to("#buttom h2", {
        opacity:1,
        delay:5,
        duration: 20,
         ease: Power1
     },"a3")
     .to("#buttom h4", {
        opacity:1,
        delay:5,
        duration: 20,
         ease: Power1
     },"a3")

    .to("#smblock",{
       opacity:1,
        duration:0.5,
        ease: Power1

    },"a4")

   .to(".fi1",{
      left: "-10vw",
      duration:10,
      ease: Power1
   }, "a4")
   .to(".se1",{
    left: "10vw",
    duration:10,
    ease: Power1
 }, "a4")
 .to(".th1",{
    left: "30vw",
    duration:10,
    ease: Power1
 }, "a4")
 .to(".fo1",{
    left: "50vw",
    duration:10,
    ease: Power1
 }, "a4")
     .to(".fv1",{
        left:"70vw",
        duration:10,
        ease : Power1
     }, "a4")

     .to("#smblock2",{
        opacity:1,
         duration:0.5,
         ease: Power1
 
     },"a5")

 .to(".se2",{
  left: "5vw",
  duration:10,
  ease: Power1
}, "a5")
.to(".th2",{
  left: "25vw",
  duration:10,
  ease: Power1
}, "a5")
.to(".fo2",{
  left: "45vw",
  duration:10,
  ease: Power1
}, "a5")
   .to(".fv2",{
      left:"65vw",
      duration:10,
      ease : Power1
   }, "a5")
}


pageOneAnimation()
pageTwoAnimation()


document.querySelectorAll("#ellipse").forEach((elm)=>{

    VanillaTilt.init(elm, {
      max: 15,
      speed: 1000,
      perspective: 700
    });
  })
  
