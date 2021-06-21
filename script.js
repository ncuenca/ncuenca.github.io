$(document).ready(function () {
    var typed = new Typed(".typing", {
        strings : ["Developer"],
        typeSpeed : 100,
        backSpeed : 60,
        loop : true
    });
    var typed = new Typed(".typing-2", {
        strings : ["Developer"],
        typeSpeed : 100,
        backSpeed : 60,
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


