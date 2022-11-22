export function animateNavbar() {
    setTimeout(() => {
        $("nav.navbar").toggleClass("hide");
    }, 100);
    setTimeout(() => {
        $("#socialmedia").toggleClass("dissmised");
    }, 600);
};

