var page1h5 = document.querySelector("#page1Div h5");
var page1h5text = page1h5.textContent
var splittedh5 = page1h5text.split(" ")
var clutter = ""
splittedh5.forEach((elem)=>{
    clutter += `<span id="firstTxt">${elem} ${""}</span>`
})
// console.log(clutter)
page1h5.innerHTML = clutter




// =================================GSAP==============================================

var t1 = gsap.timeline()
t1.from("#page1Div h5 span",{
    y: -70,
    duration: 0.8,
    stagger:0.1
})

t1.from("#page1Div h1 span",{
    y: 200,
    duration: 0.5,
    // opacity:0,
    stagger:0.1
}, "anim")
t1.from("#page1Div p",{
    scale:  0,
    duration: 0.4,
    // opacity:0,
    stagger:0.1
})

t1.from("#page1Div .btn",{
    rotateX:-180,
    opacity:0,
    transformOrigin: "50% 50% 40px",
    perspective:1000,
    duration: 0.5,
    // opacity:0,
    stagger:0.1
})
t1.to("#page1Overlay",{
    y:600,
    duration:2,
    // opacity:0,
    stagger:0.1
},"anim")
t1.from("#page1Div .pricetag",{
    scale:5,
    opacity:0,
    duration: 0.3,
    // opacity:0,
    stagger:0.1
})

gsap.from(".page2InnerDivLeft",{
    y:200,
    duration:0.6,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:".page2InnerDivRight",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 95%",
        scrub:1
    }
})
gsap.from(".page2InnerDivRight",{
    y:200,
    duration:0.6,
    opacity:0,
    stagger:-0.3,
    scrollTrigger:{
        trigger:".page2InnerDivRight",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 95%",
        scrub:1
    }
})
gsap.to("#aboutImg",{
    x:800,
    duration:2,
    // opacity:0,
    scrollTrigger:{
        trigger:"#aboutImg",
        scroller:"body",
        // markers:true,
        start:"top 20%",
        end:"top 0%",
        scrub:1
    }
})
gsap.from("#page3Div2 p",{
    scale:0,
    duration:0.6,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page3Div2 p",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:1
    }
})
gsap.from("#heart",{
    scale:0,
    duration:0.6,
    opacity:0,
    scrollTrigger:{
        trigger:"#heart",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:1
    }
})
gsap.from("#blackSeed",{
    // scale:0,
    duration:0.6,
    opacity:0,
    scrollTrigger:{
        trigger:"#blackSeed",
        scroller:"body",
        // markers:true,
        start:"top 65%",
        end:"top 50%",
        scrub:1
    }
})
gsap.from("#page3Div2 .btn",{
    rotateX:-180,
    opacity:0,
    transformOrigin: "50% 50% 40px",
    perspective:1000,
    duration: 0.5,
    // opacity:0,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page3Div2 .btn",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:1
    }
})
gsap.from("#page4Div p",{
    scale:0,
    duration:0.6,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page4Div p",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:1
    }
})
gsap.from("#page4Div .btn",{
    rotateX:-180,
    opacity:0,
    transformOrigin: "50% 50% 40px",
    perspective:1000,
    duration: 0.5,
    // opacity:0,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page4Div .btn",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:1
    }
})
gsap.from("#banner",{
    scale:2,
    opacity:0,
    scrollTrigger:{
        trigger:"#banner",
        scroller:"body",
        // markers:true,
        start:"top 20%",
        end:"top 15%",
        scrub:1
    }
})
gsap.from("#leaf1",{
    x:-200,
    rotateY:90,
    transformOrigin: "50% 50% 40px",
    perspective:1000,
    scrollTrigger:{
        trigger:"#leaf1",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 50%",
        scrub:1
    }
})
gsap.from("#page5List",{
    rotateY:90,
    transformOrigin: "50% 50% 40px",
    perspective:1000,
    scrollTrigger:{
        trigger:"#page5List",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:1
    }
})
gsap.from(".packets",{
    scale:0,
    duration:0.6,
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
        trigger:".packets",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:1
    }
})
gsap.from("#range img",{
    y:-550,
    duration: 0.5,
    // opacity:0,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#range img",
        scroller:"body",
        // markers:true,
        start:"top -30%",
        end:"top -35%",
        scrub:1
    }
})
gsap.from(".carousel-inner",{
    scale:0,
    duration:0.6,
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
        trigger:".carousel-inner",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})