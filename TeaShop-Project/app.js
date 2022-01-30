//setup date
const date = document.getElementById("date").innerHTML = new Date().getFullYear();


// setup nav
const navBtn = document.getElementById("nav-btn");
const backTopBtn = document.getElementById("back-top-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

// show nav
navBtn.addEventListener("click", () => {
    console.log('oh');
    navbar.classList.add("showNav");
})

// close nav
navClose.addEventListener("click", () => {
    navbar.classList.remove("showNav");
});

// nav btn && back to top btn: hide on scroll

window.addEventListener('scroll', (e)=>{
    if(window.scrollY > 500){
        navBtn.style.opacity = 0
        backTopBtn.style.opacity = 1
    }
    else {
        backTopBtn.style.opacity = 0
        navBtn.style.opacity = 1
    }
})

// back to top btn

