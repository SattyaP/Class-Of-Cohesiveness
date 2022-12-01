// utilities
import { smoothScroll as smScroll } from "./utils/smoothScroll.js";
import { scrollFunction, jqScroll } from "./utils/backToTop.js";
import { refreshScroll as rfScroll } from "./utils/refreshScroll.js";
import { customElementEs5Adapter as particleAdapter } from "./utils/particles/custom-elements-es5-adapter.js";
import { webComponentsLoader } from "./utils/particles/webcomponents-loader.js";
import { transisi } from "./utils/transisiEffect.js";
import { animateNavbar } from "./utils/animateNavbar.js";
import { dismissedButton } from "./utils/dismissedButton.js";
import { slickInitialize } from "./utils/slickInitialize.js";
import { sleep } from "./utils/sleep.js";

$(document).ready(async function () {
    console.log(document.readyState);
    animateNavbar()
    $(".loading-load").animate(
        {
            opacity: 0,
        },
        200
    );
    await sleep(200);
    $(".loading-load").hide();
});

//particle js
particleAdapter();
webComponentsLoader();

//services
import { HeroText } from "./heroText.js";
import { barbaInitialize } from "./barbaInitialize.js";

//back to top
jqScroll();

//go to top when socialmedia dissmised
rfScroll();

//transitions
window.addEventListener("scroll", transisi);

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

// dismiss button
dismissedButton();


// barba transitions
barbaInitialize();

// gallery-slide
slickInitialize();
