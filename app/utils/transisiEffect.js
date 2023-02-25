export function transisi() {

    let transisipoint = 150;
    document.querySelectorAll(".transisi").forEach((e) => {
        if (e.getBoundingClientRect().top < window.innerHeight - transisipoint) {
            e.classList.add("active");
        } else {
            e.classList.remove("active");
        }
    });
}
