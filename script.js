const lenis = new Lenis({
  smooth: true,
  smoothTouch: true,
  touchMultiplier: 0.5,
  duration: 1.2
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

let rotation = { angle: 0 };

ScrollTrigger.create({
  start: 0,
  end: "max",
  onUpdate: self => {
    rotation.angle = self.scroll() * 0.2;
    gsap.to(".circle-text", {
      rotate: rotation.angle,
      duration: 0.3,
      ease: "power2.out"
    });
  }
});

gsap.to("#video-container", {
  top: "60%",
  duration: 2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    start: "top top",
    end: "bottom -150%",
    scrub: 0.7,
  }
});

gsap.to("#heading1", {
  left: "20%",
  duration: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 70%",
    end: "bottom bottom",
    scrub: .5,
  }
});
gsap.to("#heading2", {
  right: "-80%",
  duration: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 70%",
    end: "bottom bottom",
    scrub: .5,
  }
});

if (window.innerWidth > 1024) {
  Shery.mouseFollower({
    skew: false,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}

const tl = gsap.timeline();

let counter = { value: 0 };

tl.to(counter, {
  value: 100,
  duration: 2.5,
  ease: "scale.inOut",
  onUpdate: () => {
    document.getElementById("loader-counter").innerText = `${Math.floor(counter.value)}%`;
  }
});

tl.to(".loader", {
  opacity: 0,
  duration: 0.5,
  pointerEvents: "none"
});

tl.from("nav", {
  opacity: 0,
  skewX: -20,
  duration: 0.7,
  ease: "slow.out"
}, "anim");

tl.from("#main-heading", {
  opacity: 0,
  y: 90,
  skewX: -30,
  duration: 0.7,
  ease: "slow.out"
}, "anim");
tl.from("#video-container", {
  opacity: 0,
  duration: 0.7,
  ease: "slow.out"
}, "anim");

  gsap.from("#page3-heading-a, #page3-heading-b", {
    y: 60,
    opacity: 0,
    stagger: 0.28,
    ease: "power2.out",
    duration: 1.5,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      start: "top 70%",
      end: "top 20%",
      scrub: 2,
      once: true
    }
  });

  gsap.from("#page4-heading-a, #page4-heading-b", {
    y: 120,
    opacity: 0,
    stagger: 0.28,
    ease: "power4.out",
    duration: 1.5,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "body",
      start: "top 70%",
      end: "top 10%",
      scrub: 2,
      once: false
    }
  });

  gsap.from("#page5-heading-1, #page5-heading-2", {
    y: 80,
    opacity: 0,
    stagger: 0.28,
    ease: "slow.out",
    duration: 1.5,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "body",
      start: "top 20%",
      end: "top 40%",
      scrub: 2.5,
      once: false
    }
  });

let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {              // GSAP Desktop Code
  const img1 = document.querySelector("#Image-1");
  const img2 = document.querySelector("#Image-2");
  const img3 = document.querySelector("#Image-3");
  const img4 = document.querySelector("#Image-4");
  const img5 = document.querySelector("#Image-5");

  img1.addEventListener("mouseenter", () => {
    gsap.to(img1, {
      rotate: "2.5deg",
      duration: 0.75,
      ease: "back.out"
    })
  });
  img1.addEventListener("mouseleave", () => {
    gsap.to(img1, {
      rotate: "0deg",
      duration: 0.75,
      ease: "back.out"
    })
  });
  img2.addEventListener("mouseenter", () => {
    gsap.to(img2, {
      rotate: "-2.5deg",
      duration: 0.75,
      ease: "back.out"
    })
  });
  img2.addEventListener("mouseleave", () => {
    gsap.to(img2, {
      rotate: "0deg",
      duration: 0.75,
      ease: "back.out"
    })
  });
  img3.addEventListener("mouseenter", () => {
    gsap.to(img3, {
      rotate: "2.5deg",
      duration: 0.75,
      ease: "back.out"
    })
  });
  img3.addEventListener("mouseleave", () => {
    gsap.to(img3, {
      rotate: "0deg",
      duration: 0.75,
      ease: "back.out"
    })
  });
  img4.addEventListener("mouseenter", () => {
    gsap.to(img4, {
      rotate: "-2.5deg",
      duration: 0.75,
      ease: "back.out"
    })
  });
  img4.addEventListener("mouseleave", () => {
    gsap.to(img4, {
      rotate: "0deg",
      duration: 0.75,
      ease: "back.out"
    })
  });
  img5.addEventListener("mouseenter", () => {
    gsap.to(img5, {
      rotate: "2.5deg",
      duration: 0.75,
      ease: "back.out"
    })
  });
  img5.addEventListener("mouseleave", () => {
    gsap.to(img5, {
      rotate: "0deg",
      duration: 0.75,
      ease: "back.out"
    })
  });
  Shery.hoverWithMediaCircle("#page3-heading-a, #page3-heading-b", {
    images: ["Smiley.svg"]
  });
  Shery.hoverWithMediaCircle("#page4-heading-a, #page4-heading-b", {
    images: ["Smiley-2.svg"]
  });
  Shery.makeMagnet("#left-nav a, #right-nav a", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
  });
});  

mm.add("(max-width: 768px)", () => {             // GSAP Mobile Code
});