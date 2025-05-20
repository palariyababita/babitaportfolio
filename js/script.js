/*==============================toggle icon navbar===============================================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*===============================PopUp============================================================*/ 
// Select all Read More buttons
const readMoreBtns = document.querySelectorAll(".read-more");

// Select all modals
const modals = document.querySelectorAll(".modal");

// Select all close buttons
const closeBtns = document.querySelectorAll(".close");

// Ensure Modals are Hidden on Page Load
document.addEventListener("DOMContentLoaded", () => {
    modals.forEach((modal) => {
        modal.style.display = "none"; // Make sure all modals are hidden on load
    });
});

// Open Modal Function (ONLY on Button Click)
readMoreBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link action
        let modalId = btn.getAttribute("data-modal"); // Get modal ID
        let modal = document.getElementById(modalId);

        if (modal) {
            modal.style.display = "flex"; // Show modal
            document.body.style.overflow = "hidden"; // Prevent background scroll
        }
    });
});

// Close Modal Function
closeBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        event.preventDefault();
        let modal = btn.closest(".modal");
        modal.style.display = "none"; // Hide modal
        document.body.style.overflow = "auto"; // Enable background scroll
    });
});

// Close Modal when clicking outside
window.addEventListener("click", (event) => {
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});



/*==============================scroll sections avtive link===============================================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    /*==============================sticky navbar===============================================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==============================remove toggle icon and navbar when click navbar link (scroll)===============================================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

  /*==============================scroll reveal===============================================*/
  ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form' , { origin: 
    'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img' , { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content' , { origin: 'right' });

/*==============================typed js===============================================*/
const typed = new Typed('.multiple-text', {
    strings: ['UI/UX Designer', 'Frontend Developer', 'Web Designer', 'Graphic Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
