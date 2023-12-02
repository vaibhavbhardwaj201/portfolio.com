gsap.from('.about-content .about-me-text span', {
    duration: .5,
    y: "110%",
    opacity: 1,
    stagger: .04,
    delay: 0,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '.about-content .about-me-text span',
        scroller: '#scroller',
        start: "top 90%",
        end: "top 50%",
        // scrub: 1,
    }
})