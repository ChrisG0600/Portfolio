// Hamburger Menu
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
    
}

// Close the nav menu on scroll
window.addEventListener('scroll', function() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
});

// Optionally, also detect mouse wheel events for compatibility
window.addEventListener('wheel', function() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
});

// Change navbar style on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Adjust scroll distance as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



// Open & Close Modal
const modal = document.querySelector('#modal');
const openModal = document.querySelector('.btn-open');
const closeModal = document.querySelector('.btn-close');

// Show Modal
openModal.addEventListener('click', () => {
    modal.showModal();
})
// Close Modal
closeModal.addEventListener('click', () => {
    modal.close();
})

// ---------------------------------------------
const modal2 = document.querySelector('#modal2');
const openModal2 = document.querySelector('.btn-open2');
const closeModal2 = document.querySelector('.btn-close2');

openModal2.addEventListener('click', () => {
    modal2.showModal();
})
// Close Modal
closeModal2.addEventListener('click', () => {
    modal2.close();
})

// ---------------------------------------------
const modal3 = document.querySelector('#modal3');
const openModal3 = document.querySelector('.btn-open3');
const closeModal3 = document.querySelector('.btn-close3');

openModal3.addEventListener('click', () => {
    modal3.showModal();
})
// Close Modal
closeModal3.addEventListener('click', () => {
    modal3.close();
})

// ---------------------------------------------
const modal4 = document.querySelector('#modal4');
const openModal4 = document.querySelector('.btn-open4');
const closeModal4 = document.querySelector('.btn-close4');

openModal4.addEventListener('click', () => {
    modal4.showModal();
})
// Close Modal
closeModal4.addEventListener('click', () => {
    modal4.close();
})

// LightBox Project Img
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const projectImgs = document.querySelectorAll('.project-img');
    const certificateImgs = document.querySelectorAll('.certificate-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    projectImgs.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
        });
    });

    certificateImgs.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
        });
    });

    lightboxClose.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });
});
