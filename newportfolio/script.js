/* ==========================================
LOADER
========================================== */

window.addEventListener("load", () => {


const loader = document.getElementById("loader");

setTimeout(() => {

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

}, 1000);


});

/* ==========================================
MOBILE MENU
========================================== */

const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {


navLinks.classList.toggle("show");


});

document
.querySelectorAll(".nav-links a")
.forEach(link => {


link.addEventListener("click", () => {

    navLinks.classList.remove("show");

});


});

/* ==========================================
DARK MODE
========================================== */

const themeBtn =
document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="dark"){


document.body.classList.add("dark");

themeBtn.textContent = "☀️";


}

themeBtn.addEventListener("click", () => {


document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

    localStorage.setItem("theme","dark");

    themeBtn.textContent = "☀️";

}else{

    localStorage.setItem("theme","light");

    themeBtn.textContent = "🌙";

}


});

/* ==========================================
ACTIVE NAVBAR LINK
========================================== */

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {


let current = "";

sections.forEach(section => {

    const sectionTop =
    section.offsetTop - 150;

    if(window.scrollY >= sectionTop){

        current =
        section.getAttribute("id");

    }

});

navItems.forEach(link => {

    link.classList.remove("active");

    if(
    link.getAttribute("href")
    === "#" + current
    ){
        link.classList.add("active");
    }

});


});

/* ==========================================
TYPEWRITER EFFECT
========================================== */

const roles = [


"Frontend Developer",

"Python Developer",

"Database Developer",

"Problem Solver",

"Web Designer"


];

let roleIndex = 0;

let charIndex = 0;

const typing =
document.getElementById("typing");

function typeWriter(){


let currentRole =
roles[roleIndex];

typing.textContent =
currentRole.substring(0,charIndex);

charIndex++;

if(charIndex > currentRole.length){

    roleIndex++;

    charIndex = 0;

    if(roleIndex >= roles.length){

        roleIndex = 0;

    }

}

setTimeout(typeWriter,150);


}

typeWriter();

/* ==========================================
COUNTER ANIMATION
========================================== */

const counters =
document.querySelectorAll("[data-target]");

function runCounter(){


counters.forEach(counter => {

    const target =
    +counter.dataset.target;

    const update = () => {

        const current =
        +counter.innerText;

        const increment =
        target / 100;

        if(current < target){

            counter.innerText =
            Math.ceil(
            current + increment
            );

            setTimeout(update,20);

        }else{

            counter.innerText =
            target;

        }

    };

    update();

});


}

const observer =
new IntersectionObserver(entries => {


entries.forEach(entry => {

    if(entry.isIntersecting){

        runCounter();

    }

});


});

document
.querySelectorAll(".stats")
.forEach(stat => {


observer.observe(stat);


});

/* ==========================================
CUSTOM CURSOR
========================================== */

const cursor =
document.querySelector(".cursor");

document.addEventListener(
"mousemove",
(e)=>{


cursor.style.left =
e.clientX + "px";

cursor.style.top =
e.clientY + "px";


});

/* ==========================================
BACK TO TOP
========================================== */

const backBtn =
document.getElementById("backToTop");

window.addEventListener("scroll",()=>{


if(window.scrollY > 400){

    backBtn.style.display="block";

}else{

    backBtn.style.display="none";

}


});

backBtn.addEventListener("click",()=>{


window.scrollTo({

    top:0,

    behavior:"smooth"

});


});

/* ==========================================
PROJECT SEARCH
========================================== */

const searchInput =
document.getElementById("projectSearch");

if(searchInput){

searchInput.addEventListener(
"keyup",
function(){


const value =
this.value.toLowerCase();

const cards =
document.querySelectorAll(
".project-card"
);

cards.forEach(card => {

    const text =
    card.innerText.toLowerCase();

    if(text.includes(value)){

        card.style.display="block";

    }else{

        card.style.display="none";

    }

});


});

}

/* ==========================================
PROJECT FILTER
========================================== */

const filterButtons =
document.querySelectorAll(
".project-filters button"
);

filterButtons.forEach(btn => {


btn.addEventListener("click",()=>{

    filterButtons.forEach(b=>{

        b.classList.remove("active");

    });

    btn.classList.add("active");

});


});

/* ==========================================
CONTACT FORM
========================================== */

const form =
document.getElementById("contactForm");

if(form){

form.addEventListener(
"submit",
function(e){


e.preventDefault();

const inputs =
form.querySelectorAll(
"input, textarea"
);

let valid = true;

inputs.forEach(input => {

    if(input.value.trim()===""){

        valid = false;

        input.style.border =
        "2px solid red";

    }else{

        input.style.border =
        "none";

    }

});

if(valid){

    alert(
    "Message Sent Successfully!"
    );

    form.reset();

}


});

}

/* ==========================================
SWIPER
========================================== */

if(typeof Swiper !== "undefined"){

new Swiper(".swiper",{


loop:true,

autoplay:{

    delay:3000

},

spaceBetween:30,


});

}

/* ==========================================
AOS
========================================== */

if(typeof AOS !== "undefined"){

AOS.init({


duration:1000,

once:true


});

}

/* ==========================================
GITHUB API
========================================== */

const githubUser =
"YOUR_GITHUB_USERNAME";

fetch(
`https://api.github.com/users/${githubUser}`
)

.then(response => response.json())

.then(data => {


const repos =
document.getElementById("repos");

const followers =
document.getElementById("followers");

if(repos){

    repos.textContent =
    data.public_repos;

}

if(followers){

    followers.textContent =
    data.followers;

}


})

.catch(error => {


console.log(
"GitHub API Error",
error
);


});

/* ==========================================
CERTIFICATE SEARCH
========================================== */

const certSearch =
document.querySelector(
"#certifications input"
);

if(certSearch){

certSearch.addEventListener(
"keyup",
function(){


const value =
this.value.toLowerCase();

const cards =
document.querySelectorAll(
".certificate-card"
);

cards.forEach(card => {

    const text =
    card.innerText.toLowerCase();

    card.style.display =
    text.includes(value)
    ? "block"
    : "none";

});


});

}

/* ==========================================
BLOG SEARCH
========================================== */

const blogSearch =
document.querySelector(
"#blog input"
);

if(blogSearch){

blogSearch.addEventListener(
"keyup",
function(){


const value =
this.value.toLowerCase();

const cards =
document.querySelectorAll(
".blog-card"
);

cards.forEach(card => {

    const text =
    card.innerText.toLowerCase();

    card.style.display =
    text.includes(value)
    ? "block"
    : "none";

});

});

}

/* ==========================================
SMOOTH FADE-IN
========================================== */

const fadeElements = document.querySelectorAll(
  ".project-card, .skill-card, .service-card, .blog-card, .profile-card, .achievement-card"
);

const fadeObserver =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{

    if(entry.isIntersecting){

        entry.target.style.opacity="1";

        entry.target.style.transform=
        "translateY(0)";

    }

});


},

{
threshold:0.1
}

);

fadeElements.forEach(el=>{


el.style.opacity="0";

el.style.transform=
"translateY(50px)";

el.style.transition=
".8s ease";

fadeObserver.observe(el);


});

/* ==========================================
CONSOLE MESSAGE
========================================== */

console.log(
"Portfolio Loaded Successfully"
);
