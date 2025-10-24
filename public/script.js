// Chipxy Website JavaScript

// Navigation scroll behavior
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
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
        }
    });
});

// Newsletter form handling
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('.newsletter-input').value;
        
        if (email) {
            // Here you would typically send the email to your backend
            console.log('Newsletter signup:', email);
            
            // Show success message (you can customize this)
            const btn = this.querySelector('.newsletter-btn');
            const originalText = btn.textContent;
            btn.textContent = '✓';
            btn.style.backgroundColor = '#ECFFB0';
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '#1E1E1E';
                this.querySelector('.newsletter-input').value = '';
            }, 2000);
        }
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe section titles for fade-in slide-up effect
document.querySelectorAll('.section-title').forEach(title => {
    observer.observe(title);
});

// Smart parallax - viewport-relative positioning for both elements
window.addEventListener('scroll', () => {
    const aboutImage = document.querySelector('.about-image img');
    const quoteText = document.querySelector('.quote-text');
    
    // About image parallax - CENTERED APPROACH
    if (aboutImage) {
        const aboutSection = document.querySelector('.about');
        if (aboutSection) {
            const scrolled = window.pageYOffset;
            const viewportHeight = window.innerHeight;
            const viewportCenter = viewportHeight / 2;
            
            // Get about section's position relative to viewport
            const sectionRect = aboutSection.getBoundingClientRect();
            const sectionCenter = sectionRect.top + (sectionRect.height / 2);
            
            // Calculate distance from viewport center
            const distanceFromCenter = sectionCenter - viewportCenter;
            
            // Apply parallax: when about section is centered, translateY = 0
            // When above center: positive translateY
            // When below center: negative translateY
            const parallaxOffset = distanceFromCenter * -0.1 - 100; // Inverted parallax effect
            
            aboutImage.style.transform = `translateY(${parallaxOffset}px)`;
        }
    }
    
    // Quote text parallax - CENTERED APPROACH
    if (quoteText) {
        const quoteSection = document.querySelector('.editorial-quote');
        if (quoteSection) {
            const scrolled = window.pageYOffset;
            const viewportHeight = window.innerHeight;
            const viewportCenter = viewportHeight / 2;
            
            // Get quote section's position relative to viewport
            const sectionRect = quoteSection.getBoundingClientRect();
            const sectionCenter = sectionRect.top + (sectionRect.height / 2);
            
            // Calculate distance from viewport center
            const distanceFromCenter = sectionCenter - viewportCenter;
            
            // Apply parallax: when quote is centered, translateY = 0
            // When above center: negative translateY
            // When below center: positive translateY
            const parallaxOffset = distanceFromCenter * -0.05; // Subtle parallax effect
            
            quoteText.style.transform = `translateY(${parallaxOffset}px)`;
        }
    }
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Add mobile menu button if screen is small
function checkMobileMenu() {
    if (window.innerWidth <= 768) {
        const navContainer = document.querySelector('.nav-container');
        const existingToggle = document.querySelector('.mobile-menu-toggle');
        
        if (!existingToggle) {
            const toggle = document.createElement('button');
            toggle.className = 'mobile-menu-toggle';
            toggle.innerHTML = '☰';
            toggle.style.cssText = `
                background: none;
                border: none;
                font-size: 1.5rem;
                color: var(--color-eerie-black);
                cursor: pointer;
                display: block;
            `;
            toggle.addEventListener('click', toggleMobileMenu);
            navContainer.appendChild(toggle);
        }
    }
}

// Check on load and resize
window.addEventListener('load', checkMobileMenu);
window.addEventListener('resize', checkMobileMenu);

// Hero Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.hero-carousel');
    if (!carousel) return;

    const slides = document.querySelectorAll('.carousel-slide');
    const thumbnails = document.querySelectorAll('.carousel-thumbnail-item');
    let currentSlide = 0;
    let carouselInterval;

    function showSlide(slideIndex) {
        // Remove active class from all slides and thumbnails
        slides.forEach(slide => slide.classList.remove('active'));
        thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));

        // Add active class to current slide and thumbnail
        slides[slideIndex].classList.add('active');
        thumbnails[slideIndex].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function startCarousel() {
        // Clear any existing timer first
        if (carouselInterval) {
            clearInterval(carouselInterval);
        }
        carouselInterval = setInterval(nextSlide, 5000); // 5 seconds
    }

    function stopCarousel() {
        if (carouselInterval) {
            clearInterval(carouselInterval);
            carouselInterval = null;
        }
    }

    // Initialize carousel
    showSlide(0);
    startCarousel(); // DISABLED for responsive testing

    // Thumbnail click handlers
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            stopCarousel();
            startCarousel(); // This now safely clears any existing timer first
        });
    });

    // Removed hover pause functionality

    // Pause when page is not visible (browser tab switching)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopCarousel();
        } else {
            startCarousel();
        }
    });
});

