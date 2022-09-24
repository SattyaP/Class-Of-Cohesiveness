import { HeroText } from "./heroText.js";
import { scrollFunction , jqScroll } from "./utils/backToTop.js";
import { smoothScroll as smScroll } from "./utils/smoothScroll.js";
import { refreshScroll as rfScroll } from "./utils/refreshScroll.js";
import { customElementEs5Adapter as particleAdapter } from "./utils/particles/custom-elements-es5-adapter.js";
import { webComponentsLoader } from "./utils/particles/webcomponents-loader.js";
import * as locomotive from "./utils/LocomotiveScroll.js";

//back to top
jqScroll();

//go to top when socialmedia dissmised
rfScroll();

//particle js
particleAdapter();
webComponentsLoader();

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
document.querySelectorAll('.close').forEach(e => {
    e.addEventListener("click", function () {
        this.parentElement.classList.add('dissmised')
      });
})

//navbar and socialmedia animation
$(document).ready(function () {
    setTimeout(() => {
        $("nav.navbar").toggleClass("hide")
    }, 100);
    setTimeout(() => {
        $("#socialmedia").toggleClass("dissmised")
    }, 600);
})
