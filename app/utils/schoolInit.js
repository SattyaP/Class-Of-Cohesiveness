import { sleep } from "./sleep.js";
export function schoolInit() {
    if (location.pathname == "/school.html") {
        document.body.classList.remove("trans-school")
        document.body.classList.add("opac-0")
        // document.body.classList.add("trans-school")
        let img = [
            "/img/sekolah/depan.webp",
            "/img/sekolah/lorong.jpg",
            "/img/sekolah/bis.jpg",
        ]
        Array.from($(".parallax-container")).forEach((e, x) => {
            $(e).parallax({
                speed: .3,
                imageSrc: img[x]
            })
        })
        Array.from($("img.parallax-slider")).forEach((e,x) => {
            $(e).attr("alt","Parallax Image")
        })
        sleep(10).then(e => {
            jQuery(window).trigger('resize').trigger('scroll');
            document.body.classList.add("trans-school")
            document.body.classList.remove("opac-0")
        });
    }
}