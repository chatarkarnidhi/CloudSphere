// ================================
// CloudSphere JavaScript
// ================================

// Smooth scroll from hero button
function scrollToServices() {
    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });
}

// Welcome message
window.onload = function () {
    console.log("CloudSphere Loaded Successfully!");

    setTimeout(() => {
        alert("☁️ Welcome to CloudSphere!\n\nExplore our cloud computing platform.");
    }, 800);
};

// Pricing button functionality
const buttons = document.querySelectorAll(".price-card button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        alert("Thank you for choosing this hosting plan!");
    });
});

// Contact Form
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you!\nYour message has been submitted successfully.");

    form.reset();

});

// Navbar shadow on scroll
window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if(window.scrollY > 40){

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";

    }

    else{

        header.style.boxShadow = "none";

    }

});

// Fade animation for cards
const cards = document.querySelectorAll(".card, .price-card, .model, .stat-card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(50px)";

    card.style.transition = "0.8s";

    observer.observe(card);

});