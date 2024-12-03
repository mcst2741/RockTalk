/*
* Mckenna Steenbock
*/



//Hamburger menu function, toggles the mobile viewport's navigation bar.
function hamburgerMenu() {
    var navlinks = document.getElementById("nav-links-mobile");
    var menuicon = document.getElementById("hamburger-icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
    } else {
        navlinks.style.display = "block";
    }
}