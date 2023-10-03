
function scrollToAboutMe() {
    var aboutmeSection = document.getElementById('Aboutme');
    aboutmeSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSkills() {
    var aboutmeSection = document.getElementById('Skills');
    aboutmeSection.scrollIntoView({ behavior: 'smooth' });
}

function goToPreviousJobs() {
window.location.href = 'PreviousJobs.html';
}

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

