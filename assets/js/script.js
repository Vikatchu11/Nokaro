document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true
    });

    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Animate hamburger menu
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && 
            !e.target.closest('.nav-links') && 
            !e.target.closest('.nav-toggle')) {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu after clicking a link
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            }
        });
    });

    // Parallax effect for background grid
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const grid = document.querySelector('.grid');
        if (grid) {
            grid.style.transform = `perspective(500px) rotateX(60deg) translateY(${scrolled * 0.1}px)`;
        }
    });

    // Add active class to current navigation link
    const currentLocation = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation || 
            item.getAttribute('href') === currentLocation.substr(currentLocation.lastIndexOf('/'))) {
            item.classList.add('active');
        }
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            // Here you would typically send the form data to your backend
            // For now, we'll just show a success message
            alert('Merci pour votre message ! Nous vous contacterons bientôt.');
            contactForm.reset();
        });
    }

    // Floating cards animation
    const cards = document.querySelectorAll('.floating-cards .card');
    cards.forEach((card, index) => {
        card.style.animation = `float 6s ease-in-out infinite ${index * 0.5}s`;
    });
});
