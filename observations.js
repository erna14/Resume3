
/*	Name: Erna Berbić
	Course: CS412.1
	Assignment: Project 3 - HTML + CSS + JS
	Due Date: 09/12/2021
	Purpose: Create a resume of oneself using HTML, CSS and JavaScript
*/

//MAKING THE SCROLL TO TOP BUTTON
const buttonScrollToTop = document.querySelector("#buttonScrollToTop");

buttonScrollToTop.addEventListener("click",function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:"smooth"
    });

});

/* FADE */
const faders = document.querySelectorAll('.faders');
const appearOptions = {
};
const appearOnScroll = new IntersectionObserver
(function(
    entries, 
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, 
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

/* REVEAL */
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i=0; i<reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

/*DROP DOWN ANIMATION IF THE VIEWER WANTS TO SEE MORE INFORMATION ON HOW TO CONTACT ME*/
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});

/*INFORM THE VIEWER IF THEY CAN CONTACT ME TODAY BASED ON IF IT'S A WORKING DAY OR NOT*/
let element = document.getElementById('workingDay');

switch (new Date().getDay()) {
    default:
        element.innerHTML = 'Can you contact me today: Yes you can contact me today';
        break;
    case 6:
        element.innerHTML = 'Can you contact me today: Unfortunately, today is Saturday';
        break;
    case 0:
        element.innerHTML = 'Can you contact me today: Unfortunately, today is Sunday';
        break;
}

/* CONTENT PANEL */
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

/* ARRAY */
const skills = ["Team-Work", "Problem Solving", "Leadership"];
let n = skills.length;
/* after creating an array i have decided to make a for loop which will print the elements of the array as an unsorted list */
let text = "<ul>";
for (let i = 0; i < n; i++) {
  text += "<li>" + skills[i] + "</li>";
}
text += "</ul>";

document.getElementById("arr").innerHTML = text;