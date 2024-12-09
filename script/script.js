/*
* Author: Mckenna Steenbock
*/


const quizAnswer = document.querySelector("#quiz-answer p");
const answerHeader = document.querySelector("#quiz-answer h3");
const audioClip = document.getElementById("audio-clip");

//Hamburger menu function, toggles the mobile viewport's navigation bar.
function hamburgerMenu() {
    const navLinks = document.getElementById("nav-links-mobile");
    const menuIcon = document.getElementById("hamburger-icon");
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }
}

//Function to play pebble audio clip when quiz answers are clicked of the form buttons have been clicked.
function playAudioClip (){
    audioClip.currentTime = 0;
    audioClip.play();
}

//Functions that shows the user the answers to the quiz.
function answer1() {
    answerHeader.style.display = "block";
    playAudioClip();
    quizAnswer.textContent = "true. Geologic maps can help us discover all sorts of resources we depend on.";
}

function answer2() {
    answerHeader.style.display = "block";
    playAudioClip();
    quizAnswer.textContent = "false. Geologists still need to conduct fieldwork, it is just made more efficient with these tools.";
}

function answer3() {
    answerHeader.style.display = "block";
    playAudioClip();
    quizAnswer.textContent = "false. Geologic maps can be used for so much more than identifying rock ages and types.";
}

function answer4() {
    answerHeader.style.display = "block";
    playAudioClip();
    quizAnswer.textContent = "true. Without data driven technology geologists would struggle to make quick and efficient decisions.";
}