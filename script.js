// Добавление автоматической прокрутки для карусели
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel-container");
    let scrollAmount = 0;

    setInterval(() => {
        scrollAmount += 300;
        if (scrollAmount >= carousel.scrollWidth) {
            scrollAmount = 0;
        }
        carousel.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    }, 3000);
});