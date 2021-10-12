
const dropdown = document.querySelector(".header-right > a");
console.log(dropdown);

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

