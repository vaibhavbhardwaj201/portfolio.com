let homeTitleAnimation = gsap.timeline({
    delay: 3,
})

homeTitleAnimation
.from(".hero-title .line-child", {
    duration: .6,
    rotateX: "-90deg",
    stagger: .2,
    y: "40%",
})
.from(".right-info .line-child", {
    duration: .6,
    // rotateX: "-90deg",
    stagger: .2,
    y: "100%",
})