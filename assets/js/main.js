
const dropdown = document.querySelector(".header-right > a");

const hamburger_menu = document.querySelector(".hamburger-menu")

//aprire il menu
dropdown.addEventListener("click", function () {
    if (hamburger_menu.style.display === "block") {
        hamburger_menu.style.display = "none";
    } else {
        hamburger_menu.style.display = "block";
    }
});


const dropdown_close = document.querySelector(".hamburger-menu > .close");

//chiudere il menu
dropdown_close.addEventListener("click", function () {
    if (hamburger_menu.style.display === "block") {
        hamburger_menu.style.display = "none";
    } else {
        hamburger_menu.style.display = "block";
    }
});



/*
dropdown.addEventListener("click", myFunction);


 //aprire il menu
function myFunction() {
    var x = document.querySelector(".hamburger-menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

//chiudere il menu

const dropdown_close = document.querySelector(".hamburger-menu > a");

dropdown_close.addEventListener("click", myFunction);
 */
