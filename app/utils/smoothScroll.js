export function smoothScroll(target) {
    $('html, body').animate({
      scrollTop: $(target).offset().top - ($("nav.navbar").outerHeight() | 0)
      }, 500);
    // window.scrollTo(0, $(target).offset().top)
  }