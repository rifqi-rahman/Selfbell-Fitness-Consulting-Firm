// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Animasi Scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach((element) => {
    observer.observe(element);
});

// Clone testimonial cards for infinite scroll
function setupTestimonialSlider() {
    const track = document.querySelector('.testimonial-track');
    const cards = track.querySelectorAll('.testimonial-card');
    
    // Clone cards and append to track
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });
}

// Call after DOM is loaded
document.addEventListener('DOMContentLoaded', setupTestimonialSlider);

// Fungsi untuk menambahkan animasi fade-in
function setupFadeAnimations() {
    // Set delay untuk testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.style.setProperty('--card-index', index + 1);
    });

    // Set delay untuk footer sections
    const footerSections = document.querySelectorAll('.footer-section');
    footerSections.forEach((section, index) => {
        section.style.setProperty('--section-index', index + 1);
    });

    // Tambahkan class fade-in ke semua elemen yang perlu dianimasi
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    element.style.animation = 'fadeIn 0.8s ease-out forwards';
                }
            });
        });
        observer.observe(element);
    });
}

// Panggil fungsi setelah DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    setupFadeAnimations();
}); 