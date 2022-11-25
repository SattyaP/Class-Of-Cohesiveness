export function dismissedButton() {
    document.querySelectorAll(".close").forEach((e,x) => {
        e.addEventListener("click", function () {
            $("#socialmedia").addClass("dissmised");
        });
    });
}