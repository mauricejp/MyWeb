
window.onscroll = function() {myFunction()};

var navbar = document.querySelector('.navbar');
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function scrollToAboutMe() {
    document.getElementById('Aboutme').scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function goToPreviousJobs() {
    window.open('PreviousJobs.html'); // Reemplaza con tu enlace
}

