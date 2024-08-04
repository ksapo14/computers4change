let slideIndex = 1;
document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});

function addSlides (n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides (n) {
    let i;
    let slides = document.getElementsByClassName("pledge");
    let next = document.getElementsByClassName("next");
    let prev = document.getElementsByClassName("prev");


    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";    
    }

    slides[slideIndex - 1].style.display = "flex";
}