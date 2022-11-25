import { animateNavbar } from "./utils/animateNavbar.js";
import { dismissedButton } from "./utils/dismissedButton.js";
import { parallaxInit } from "./utils/parallaxInit.js";
export function barbaInitialize() {
    let duration = 0.8;
    barba.init({
        transitions: [
            {
                name: "right-transition",
                custom(data) {
                    return data.trigger.dataset.barbaTransition == "right"
                },
                leave(data) {
                    gsap.to(data.current.container, {
                        opacity: 0,
                    });
                    gsap.to(".barba-transition", { x: "-100%", y: "0", duration: 0 })
                    return gsap.to(".barba-transition", {
                        ease: "expo.out",
                        duration: duration,
                        x: "0",
                        onComplete: () => {
                            if ($(".parallax-mirror").length > 0 && data.next.url.path != "/school.html") {
                                $(".parallax-mirror").remove()
                            }
                        }
                    });
                },
                enter(data) {
                    gsap.to(data.next.container, {
                        opacity: 0,
                    });

                    return gsap.to(".barba-transition", {
                        duration: duration,
                        ease: "expo.in",
                        x: "100%",
                        onComplete: () => {
                            gsap.to(data.next.container, {
                                opacity: 1,
                                duration: 0.5,
                            });
                            animateNavbar();
                            dismissedButton();
                            parallaxInit()
                        },
                    });
                },
            },
            {
                name: "left-transition",
                custom(data) {
                    return data.trigger.dataset.barbaTransition == "left"
                },
                leave(data) {
                    gsap.to(data.current.container, {
                        opacity: 0,
                    });
                    gsap.to(".barba-transition", { x: "100%", y: 0, duration: 0 })
                    return gsap.to(".barba-transition", {
                        ease: "expo.out",
                        duration: duration,
                        x: "0",
                        onComplete: () => {
                            if ($(".parallax-mirror").length > 0 && data.next.url.path != "/school.html") {
                                $(".parallax-mirror").remove()
                                console.log(1);
                            }
                        }
                    });
                },
                enter(data) {
                    gsap.to(data.next.container, {
                        opacity: 0,
                    });

                    return gsap.to(".barba-transition", {
                        duration: duration,
                        ease: "expo.in",
                        x: "-100%",
                        onComplete: () => {
                            gsap.to(data.next.container, {
                                opacity: 1,
                                duration: 0.5,
                            });
                            animateNavbar();
                            dismissedButton();
                            parallaxInit()
                        },
                    });
                },
            },
            {
                name: "top-transition",
                custom(data) {
                    return data.trigger.dataset.barbaTransition == "top"
                },
                leave(data) {
                    gsap.to(data.current.container, {
                        opacity: 0,
                    });
                    gsap.to(".barba-transition", { x: "0", y: "-100%", duration: 0 })
                    return gsap.to(".barba-transition", {
                        ease: "expo.out",
                        duration: duration,
                        y: "0",
                        onComplete: () => {
                            if ($(".parallax-mirror").length > 0 && data.next.url.path != "/school.html") {
                                $(".parallax-mirror").remove()
                                console.log(1);
                            }
                        }
                    });
                },
                enter(data) {
                    gsap.to(data.next.container, {
                        opacity: 0,
                    });

                    return gsap.to(".barba-transition", {
                        duration: duration,
                        ease: "expo.in",
                        y: "100%",
                        onComplete: () => {
                            gsap.to(data.next.container, {
                                opacity: 1,
                                duration: 0.5,
                            });
                            animateNavbar();
                            dismissedButton();
                            parallaxInit()
                        },
                    });
                },
            },
            {
                name: "bottom-transition",
                custom(data) {
                    return data.trigger.dataset.barbaTransition == "bottom"
                },
                leave(data) {
                    gsap.to(data.current.container, {
                        opacity: 0,
                    });
                    gsap.to(".barba-transition", { x: "0", y: "100%", duration: 0 })
                    return gsap.to(".barba-transition", {
                        ease: "expo.out",
                        duration: duration,
                        y: "0",
                        onComplete: () => {
                            if ($(".parallax-mirror").length > 0 && data.next.url.path != "/school.html") {
                                $(".parallax-mirror").remove()
                                console.log(1);
                            }
                        }
                    });
                },
                enter(data) {
                    gsap.to(data.next.container, {
                        opacity: 0,
                    });

                    return gsap.to(".barba-transition", {
                        duration: duration,
                        ease: "expo.in",
                        y: "-100%",
                        onComplete: () => {
                            gsap.to(data.next.container, {
                                opacity: 1,
                                duration: 0.5,
                            });
                            animateNavbar();
                            dismissedButton();
                            parallaxInit()
                        },
                    });
                },
            },
        ],
    });
}