export function slickInitialize() {
    $(".slider-before").click(async (e) => {
        let el = $(e.currentTarget),
            images = $(e.currentTarget).data("image").split(";"),
            i = 0,
            slider = document.createElement("div");
        slider.classList.add(..."row homeslider".split(" "));
        $(el.children().children()[0]).removeClass("d-none");
        for (i; i < images.length; i++) {
            await $.ajax({
                type: "get",
                url: images[i],
                cache: true,
                processData: false,
            }).always((e) => {
                slider.innerHTML += `<img class="img-fluid img-slider" src="${images[i]}" alt="">`;
            });
        }
        await $(el).parent().append(slider);
        await $(slider).slick({
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            adaptiveHeight: true,
        });
        await $(el).remove();
    });
}
