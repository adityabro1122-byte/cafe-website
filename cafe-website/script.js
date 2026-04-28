// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(20, 12, 8, 0.98)';
    } else {
        navbar.style.background = 'rgba(20, 12, 8, 0.95)';
    }
});

// Menu Tabs Functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tab = button.dataset.tab;

        // Update active button
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Update active content
        tabContents.forEach(content => content.classList.remove('active'));
        document.getElementById(tab).classList.add('active');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate form submission
    const button = this.querySelector('button');
    const originalText = button.textContent;
    
    button.textContent = 'Sending...';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = 'Message Sent!';
        button.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
            button.disabled = false;
            this.reset();
        }, 2000);
    }, 1500);
});

// Add floating animation to menu items on hover
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.animation = 'none';
        setTimeout(() => {
            item.style.animation = 'float 2s ease-in-out infinite';
        }, 10);
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.animation = 'none';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const speed = scrolled * 0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${speed}px)`;
    }
});