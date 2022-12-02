export function slickInitialize() {
    $(".slider-before").click(async (e) => {
        let el = $(e.currentTarget),
        images = [
            "img/gallery/a-1.webp",
            "img/gallery/a-2.webp",
            "img/gallery/a-3.webp",
            "img/gallery/a-4.webp",
            "img/gallery/a-5.webp",
            "img/gallery/a-6.webp",
            "img/gallery/a-7.webp",
            "img/gallery/a-8.webp"
        ], i = 0,slider = document.createElement("div");
        slider.classList.add(..."row homeslider".split(' '))
        $(el.children().children()[0]).removeClass("d-none");
        for(i;i<images.length;i++) {
            await $.ajax({
                type: "get",
                url: images[i],
                cache: true,
                processData : false,
            }).always(e=> {
                slider.innerHTML += `<img class="img-fluid img-slider" src="${images[i]}" alt="">`
            });
        }
        $(el).parent().append(slider);
        $(el).hide()
        $(slider).slick({
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            adaptiveHeight: true,
        });
    });
    return $(document).ready(function () {
        $(".homeslider").slick({
            autoplay: true,
            // lagi benerin anjir gerak mulu
            // hooh ae dah 🗿
            // idupin ah 🗿
            autoplaySpeed: 5000,
            infinite: true,
            adaptiveHeight: true,
        });
    });
}
