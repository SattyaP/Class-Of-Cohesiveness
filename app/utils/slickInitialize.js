export function slickInitialize() {
    return $(document).ready(function () {
        $('.homeslider').slick({
            autoplay: true, 
            // lagi benerin anjir gerak mulu
            // hooh ae dah 🗿
            // idupin ah 🗿
            autoplaySpeed: 5000,
            infinite: true,
            lazyLoad: 'progressive',
            adaptiveHeight: true
        });
    });
}