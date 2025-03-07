document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("hambtn");
    const menu = document.getElementById("menu");

    button.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});
