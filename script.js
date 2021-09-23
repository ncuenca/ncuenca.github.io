$(document).ready(function () {
    var typed = new Typed(".typing", {
        strings : ["Full Stack Engineer", "React Developer", "Frontend Developer", "Backend Developer"],
        typeSpeed : 50,
        backSpeed : 20,
        loop : true
    });
    var typed = new Typed(".typing-2", {
        strings : ["Full Stack Engineer", "React Developer", "Frontend Developer", "Backend Developer"],
        typeSpeed : 50,
        backSpeed : 20,
        loop : true
    });
});

function scrollFunction() {
    if (window.scrollY > 20) {
        document.getElementsByClassName("navbar")[0].classList.add("scrolled");
    }
    else {
        document.getElementsByClassName("navbar")[0].classList.remove("scrolled");
    }
}

window.onscroll = scrollFunction;


