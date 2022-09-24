export function smoothScroll(target) {
    $('html, body').animate({
      scrollTop: $(target).offset().top - $("nav.navbar").outerHeight()
      }, 1000);
  }