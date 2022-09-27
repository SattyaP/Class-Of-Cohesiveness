// utilities
import { smoothScroll as smScroll } from "./utils/smoothScroll.js";
import { scrollFunction, jqScroll } from "./utils/backToTop.js";
import { refreshScroll as rfScroll } from "./utils/refreshScroll.js";
import { customElementEs5Adapter as particleAdapter } from "./utils/particles/custom-elements-es5-adapter.js";
import { webComponentsLoader } from "./utils/particles/webcomponents-loader.js";
import { transisi } from "./utils/transisiEffect.js";
import { animateNavbar } from "./utils/animateNavbar.js";
import { dismissedButton } from "./utils/dismissedButton.js";

//services
import { HeroText } from "./heroText.js";
import { barbaInitialize } from "./barbaInitialize.js";

//back to top
jqScroll();

//go to top when socialmedia dissmised
rfScroll();

//particle js
particleAdapter();
webComponentsLoader();

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
dismissedButton()

//navbar and socialmedia animation
$(document).ready(animateNavbar);

// barba transitions
barbaInitialize()