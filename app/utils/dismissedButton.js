export function dismissedButton() {
    document.querySelectorAll(".close").forEach((e) => {
        e.addEventListener("click", function () {
            this.parentElement.classList.add("dissmised");
        });
    });
}