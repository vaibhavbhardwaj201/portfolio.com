var tl = gsap.timeline();



tl
.from(".splash-main-text span:nth-child(1),.splash-main-text span:nth-child(2)", {
    duration: 0.3,
    delay: 0.5,
    ease: "sine.out",
    x: "5%",
})
.from(".splash-main-text span:nth-child(3)", {
    duration: 0.3,
    delay: 0.1,
    ease: "power1.out",
    opacity: 0, 
    x: "300%",
})
.from(".splash-main-text span:nth-child(4)", {
    duration: 0.3,
    delay: -0.1,
    ease: "power4.out",
    opacity: 0,
    x: "100%",
})
.to("#splash-loader .line-parent .line-child", {
    duration: 1.2,
    y: "-110%",
    ease: "expo.out",
})
.to(".splash-loader-bg:nth-child(2)", {
    duration: 1.4,
    delay: -0.6,
    y: "-100%",
    ease: "Expo.inOut"
})
.to(".splash-loader-bg:nth-child(3)", {
    duration: 1,
    delay: -0.9,
    y: "-100%",
    ease: "sine.inOut"
})
.to("#splash-loader", {
    display: "none",
})