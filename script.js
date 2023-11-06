var tl = gsap.timeline();

tl.from("#logo", {
    y: -100,
    duration: .5,
    opacity: 0
});

tl.from("#nav-part1 a, #nav-part2 a, #nav-part2 button", {
    y: -100,
    duration: .3,
    delay: .2,
    stagger: .2,
    opacity: 0

});

tl.from("#content h1", {
    y: 50,
    opacity: 0,
    duration: .3,
    stagger: .3
});

tl.from("#images",  {
    opacity: 0,
})
tl.from("#firstImg, #secondImg, #thirdImg", {
    scale: 0,
    stagger: true,
    opacity: 0
});

tl.from("#scroll", {
    y: 30,
    opacity: 0
});

tl.to("#scroll", {
    y: 10,
    repeat: -1,
    yoyo: true,
    duration: .2
});