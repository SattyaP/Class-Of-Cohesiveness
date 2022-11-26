import { animateNavbar } from "./utils/animateNavbar.js";
import { dismissedButton } from "./utils/dismissedButton.js";
import { slickInitialize } from "./utils/slickInitialize.js";

export function barbaInitialize() {
    let duration = 0.8;
    barba.init({
        prefetchIgnore: true,
        timeout:4000,
        transitions: [
            {
                name: "right-transition",
                custom(data) {
                    return data.trigger.dataset.barbaTransition == "right";
                },
                leave(data) {
                    gsap.to(data.current.container, {
                        opacity: 0,
                    });
                    gsap.to(".barba-transition", { x: "-100%", y: "0", duration: 0 });
                    return gsap.to(".barba-transition", {
                        ease: "expo.out",
                        duration: duration,
                        x: "0",
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
                            slickInitialize();;
                        },
                    });
                },
            },
            {
                name: "left-transition",
                custom(data) {
                    return data.trigger.dataset.barbaTransition == "left";
                },
                leave(data) {
                    gsap.to(data.current.container, {
                        opacity: 0,
                    });
                    gsap.to(".barba-transition", { x: "100%", y: 0, duration: 0 });
                    return gsap.to(".barba-transition", {
                        ease: "expo.out",
                        duration: duration,
                        x: "0",
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
                            slickInitialize();;
                        },
                    });
                },
            },
            {
                name: "top-transition",
                custom(data) {
                    return data.trigger.dataset.barbaTransition == "top";
                },
                leave(data) {
                    gsap.to(data.current.container, {
                        opacity: 0,
                    });
                    gsap.to(".barba-transition", { x: "0", y: "-100%", duration: 0 });
                    return gsap.to(".barba-transition", {
                        ease: "expo.out",
                        duration: duration,
                        y: "0",
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
                            slickInitialize();;
                        },
                    });
                },
            },
            {
                name: "bottom-transition",
                custom(data) {
                    return data.trigger.dataset.barbaTransition == "bottom";
                },
                leave(data) {
                    gsap.to(data.current.container, {
                        opacity: 0,
                    });
                    gsap.to(".barba-transition", { x: "0", y: "100%", duration: 0 });
                    return gsap.to(".barba-transition", {
                        ease: "expo.out",
                        duration: duration,
                        y: "0",
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
                            slickInitialize();;
                        },
                    });
                },
            },
        ],
    });
}
