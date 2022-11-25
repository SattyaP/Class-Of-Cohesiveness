import {
    sleep
} from "./sleep.js";
export function parallaxInit() {
    window.scrollPos = 0;
    $(".parallax-container").each((idx, val) => {
        if (!val.dataset.parallax) return
        $(val).addClass("parallax");
        $(val).css("background-image", `url(${val.dataset.parallax})`)
        $(document).scroll(function (e) {
            let backgroundPos = $(val).css("background-position-y").replace("px", "").replace("0%", "0"),
                speed = 20,
                up = (document.body.getBoundingClientRect()).top > window.scrollPos
            if (up && parseFloat(backgroundPos) < 10) { // UP
                $(val).animate({
                    "background-position-y": `+=${speed}px`
                }, 10)
            }
            if (!up && parseFloat(backgroundPos) > -100) { //down
                $(val).animate({
                    "background-position-y": `-=${speed}px`
                }, 10)
                // $(val).css("background-position-y",(parseFloat(backgroundPos) + speed) + "px")
            }
            window.scrollPos = (document.body.getBoundingClientRect()).top;
        });
    })
}