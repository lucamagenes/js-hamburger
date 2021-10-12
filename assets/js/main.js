
const dropdown = document.querySelector(".header-right > a");
console.log(dropdown);

dropdown.addEventListener("click", myFunction);

function myFunction() {
    var x = document.getElementsByClassName("hamburger-menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

