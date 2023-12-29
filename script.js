let email = document.getElementById("email")
let button = document.getElementById("button")
let seuemail = document.getElementById("seuemail")

let currentSlide = 1;


function clique() {
    alert("Seu email foi guardado")
    seuemail.innerHTML = email.value
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
        currentSlide = 1;
    } else if (n < 1) {
        currentSlide = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[currentSlide - 1].style.display = "block";
}

function changeSlide(n) {
    showSlide(currentSlide += n);
}

// Inicializa o slide
showSlide(currentSlide);