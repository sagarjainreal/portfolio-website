// Loader

window.addEventListener("load", () => {

    document.getElementById("loader").style.display = "none";

});

// Typed Animation

var typed = new Typed(".typing", {

    strings: [
        "Backend Developer",
        "Java Developer",
        "Spring Boot Developer",
        "Microservices Engineer"
    ],

    typeSpeed: 80,
    backSpeed: 50,
    loop: true

});

// AOS

AOS.init({

    duration: 1000,

});

// Scroll Reveal

ScrollReveal().reveal('.skill-card', {

    delay: 200,
    distance: '50px',
    origin: 'bottom'

});

ScrollReveal().reveal('.project-card', {

    delay: 200,
    distance: '50px',
    origin: 'bottom'

});

// Navbar Active Link

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 200) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(a => {

        a.classList.remove("active");

        if (a.getAttribute("href").includes(current)) {

            a.classList.add("active");

        }

    });

});