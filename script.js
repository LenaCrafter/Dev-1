document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".float-image");

    images.forEach(image => {
        image.addEventListener("mouseover", () => {
            image.classList.add("float");
        });

        image.addEventListener("mouseout", () => {
            image.classList.remove("float");
        });
    });
});
