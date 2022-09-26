import { HeroText } from "./heroText.js";
import { scrollFunction, jqScroll } from "./utils/backToTop.js";
import { smoothScroll as smScroll } from "./utils/smoothScroll.js";
import { refreshScroll as rfScroll } from "./utils/refreshScroll.js";
import { customElementEs5Adapter as particleAdapter } from "./utils/particles/custom-elements-es5-adapter.js";
import { webComponentsLoader } from "./utils/particles/webcomponents-loader.js";
import { transisi } from "./utils/transisiEffect.js";

//back to top
jqScroll();

//go to top when socialmedia dissmised
rfScroll();

//particle js
particleAdapter();
webComponentsLoader();

//transitions
window.addEventListener('scroll', transisi);

const heroText = new HeroText();

//global variable
window.onscroll = scrollFunction;
window.smoothScroll = smScroll;

//hero text animations
let animGaris = heroText.animateLine();
let animText = heroText.animateText();

const animationToggleOff = () => {
    window.clearInterval(animGaris);
    window.clearInterval(animText);
};
document.querySelectorAll(".close").forEach((e) => {
    console.log("click")
    e.addEventListener("click", function () {
        this.parentElement.classList.add("dissmised");
    });
});

//navbar and socialmedia animation
let animateNavbar = () => {
    setTimeout(() => {
        $("nav.navbar").toggleClass("hide");
    }, 100);
    setTimeout(() => {
        $("#socialmedia").toggleClass("dissmised");
    }, 600);
};
$(document).ready(animateNavbar);


barba.init({
    transitions: [
        {
            name: "slide-transition",
            leave(data) {
                gsap.to(data.current.container,{
                    opacity:0
                })
                console.log(data.current.url);
                if(data.current.url.path == "/nama.html") {
                    gsap.to(".barba-transition", {
                        duration:0,
                        x: "100%",
                    });
                }
                
                return gsap.to(".barba-transition", {
                    ease: "expo.out",
                    duration:1,
                    x: "0",
                });
            },
            enter(data) {
                gsap.to(data.next.container,{
                    opacity:0
                })
                
                return gsap.to(".barba-transition", {
                    duration:1,
                    ease: "expo.in",
                    x: (data.current.url.path == "/nama.html"?"-100%":"100%"),
                    onComplete: () => {
                        gsap.to(".barba-transition", {
                            x:"-100%",
                            duration:0
                        })
                        gsap.to(data.next.container,{
                            opacity:1,
                            duration:0.5
                        })
                        animateNavbar();
                    },
                });
            },
        },
    ],
});