export function sliderImage() {
    return $(document).ready(function () {
        $('.homeslider').slick({
            autoplay: false, 
            // lagi benerin anjir gerak mulu
            autoplaySpeed: 1000,
            infinite: true,
            lazyLoad: 'progressive',
        });
    });
}