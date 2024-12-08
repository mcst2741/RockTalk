/*
* Mckenna Steenbock
*/


var quizAnswer = document.querySelector("#quiz-answer p");
var answerHeader = document.querySelector("#quiz-answer h3");

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

//Functions that shows the user the answers to the quiz.
function answer1() {
    answerHeader.style.display = "block";
    quizAnswer.textContent = "true. Geologic maps can help us discover all sorts of resources we depend on.";
}

function answer2() {
    answerHeader.style.display = "block";
    quizAnswer.textContent = "false. Geologists still need to conduct fieldwork, it is just made more efficient with these tools.";
}

function answer3() {
    answerHeader.style.display = "block";
    quizAnswer.textContent = "false. Geologic maps can be used for so much more than identifying rock ages and types.";
}

function answer4() {
    answerHeader.style.display = "block";
    quizAnswer.textContent = "true. Without data driven technology geologists would struggle to make quick and efficient decisions.";
}