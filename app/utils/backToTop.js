export function scrollFunction() {
  if (
    document.body.scrollTop > 260 ||
    document.documentElement.scrollTop > 260
  ) {
    $("#myBtn").addClass("myBtn-active")
    document.querySelector("#myBtn").classList.add("myBtn-active");
  } else {
    document.querySelector("#myBtn").classList.remove("myBtn-active");
  }
}
export function jqScroll() {
  return $(document).ready(function () {
    $("a").on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {
          window.location.hash = hash;
        });
      }
    });
  });
}
