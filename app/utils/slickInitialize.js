export function slickInitialize() {
    return $(document).ready(function () {
        $('.homeslider').slick({
            autoplay: false, 
            // lagi benerin anjir gerak mulu
            // hooh ae dah 🗿
            autoplaySpeed: 1000,
            infinite: true,
            lazyLoad: 'progressive',
        });
    });
}