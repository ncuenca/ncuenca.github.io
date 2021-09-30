// const togBtn = document.getElementById('toggle-btn');
// const shape = document.getElementById('shape');

// togBtn.addEventListener('click', () => {
//     // for detecting the class of shape element 

//     var attr = shape.getAttributeNode("class").value;

//     if(attr == 'cube'){
//         shape.classList.replace('cube','ring');
//     }
//     else if(attr == 'ring'){
//         shape.classList.replace('ring','cube');
//     }

//     togBtn.classList.toggle('active');
// });

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

    $("#frontend-icon").hover(
        function() {
            changeFendorbend("(frontend)");
        },
        function() {
            changeFendorbend("---");
        }
    );
    $("#backend-icon").hover(
        function() {
            changeFendorbend("(backend)");
        },
        function() {
            changeFendorbend("---");
        }
    );

    $("#toggle-btn").click(
        function () {
            if ($("#shape").attr("class") === "cube") {
                $("#shape").addClass("ring")
                $("#shape").removeClass("cube");
            } else {
                $("#shape").addClass("cube")
                $("#shape").removeClass("ring");
            }
            $("#toggle-btn").toggleClass("active");
        }
    )
});

function scrollFunction() {
    if (window.scrollY > 20) {
        document.getElementsByClassName("navbar")[0].classList.add("scrolled");
    }
    else {
        document.getElementsByClassName("navbar")[0].classList.remove("scrolled");
    }
}

function changeFendorbend(text) {
    if (text==="---") {
        $("#fendorbend").css({'color':'black'})
    } else {
        $("#fendorbend").css({'color':'crimson'})
    }
    $("#fendorbend").text(text);
}

window.onscroll = scrollFunction;



