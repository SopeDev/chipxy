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

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

    function openMobileMenu() {
        mobileMenuToggle.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeMobileMenu() {
        mobileMenuToggle.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    function toggleMobileMenu() {
        if (mobileMenuOverlay.classList.contains('active')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }

    // Event listeners for mobile menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function(e) {
            if (e.target === mobileMenuOverlay) {
                closeMobileMenu();
            }
        });
    }

    // Close mobile menu when clicking on menu links
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
            closeMobileMenu();
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

// Hero Carousel Functionality with GSAP Animations
document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    
    // Global ScrollTrigger defaults to avoid premature triggers around pinned areas
    ScrollTrigger.defaults({
        anticipatePin: 1
    });
    
    const carousel = document.querySelector('.hero-carousel');
    if (!carousel) return;

    const slides = document.querySelectorAll('.carousel-slide');
    const thumbnails = document.querySelectorAll('.carousel-thumbnail-item');
    let currentIndex = 0;
    let carouselInterval;

    // Initialize slides: set all slides to hidden state except first
    slides.forEach((slide, i) => {
        const slideImage = slide.querySelector('.hero-image');
        const slideText = slide.querySelector('.hero-text');
        const textChildren = slideText ? slideText.children : [];

        if (i === 0) {
            // First slide: visible
            gsap.set(slide, { opacity: 1 });
            gsap.set(slideImage, { opacity: 1, x: 0 });
            gsap.set(textChildren, { opacity: 1, y: 0 });
            // slide.classList.add('active');
        } else {
            // Other slides: hidden
            gsap.set(slide, { opacity: 0 });
            gsap.set(slideImage, { opacity: 0, x: -50 });
            gsap.set(textChildren, { opacity: 0, y: 50 });
            // slide.classList.remove('active');
        }
    });

    // Helper function to update thumbnail states
    function updateThumbnails(activeIndex) {
        thumbnails.forEach((thumb, i) => {
            if (i === activeIndex) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
    }

    // Initialize thumbnails
    updateThumbnails(0);

    // Change slide function with GSAP animations
    function changeSlide(direction) {
        const oldIndex = currentIndex;
        
        // Update current index using gsap.utils.wrap() for infinite loop
        if (direction === 'next') {
            currentIndex = gsap.utils.wrap(0, slides.length, currentIndex + 1);
        } else if (direction === 'prev') {
            currentIndex = gsap.utils.wrap(0, slides.length, currentIndex - 1);
        } else {
            // Direct index set (for thumbnail clicks)
            currentIndex = direction;
        }

        const oldSlide = slides[oldIndex];
        const newSlide = slides[currentIndex];

        const oldImage = oldSlide.querySelector('.hero-image');
        const newImage = newSlide.querySelector('.hero-image');
        const oldTextChildren = oldSlide.querySelector('.hero-text') ? oldSlide.querySelector('.hero-text').children : [];
        const newTextChildren = newSlide.querySelector('.hero-text') ? newSlide.querySelector('.hero-text').children : [];

        // Kill any existing animations on these elements
        gsap.killTweensOf([oldSlide, newSlide, oldImage, newImage, oldTextChildren, newTextChildren]);

        // Create timeline for smooth transition
        const tl = gsap.timeline({
            defaults: { ease: "power2.inOut" },
            onComplete: () => {}
        });

        // Update thumbnail states
        updateThumbnails(currentIndex);

        // Update slide classes
        oldSlide.classList.remove('active');
        newSlide.classList.add('active');

        tl.to(oldSlide, {
            opacity: 0,
            duration: 0.6,
            ease: "power2.in"
        }, 0)
        .to(oldTextChildren, {
            opacity: 0,
            y: 30,
            duration: 0.3,
            stagger: -0.1,
            ease: "power2.in"
        }, 0)
        .to(oldImage, {
            opacity: 0,
            x: -50,
            duration: 0.4,
            ease: "power2.in"
        }, 0.2);
        tl.set(newSlide, { opacity: 1 })
        .fromTo(newImage, {
            opacity: 0,
            x: -50
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out"
        }, 0.6)
        .fromTo(newTextChildren, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        }, 0.8);
    }

    function nextSlide() {
        changeSlide('next');
    }

    function prevSlide() {
        changeSlide('prev');
    }

    function startCarousel() {
        // Clear any existing timer first
        if (carouselInterval) {
            clearInterval(carouselInterval);
        }
        carouselInterval = setInterval(nextSlide, 6000); // 5 seconds
    }

    function stopCarousel() {
        if (carouselInterval) {
            clearInterval(carouselInterval);
            carouselInterval = null;
        }
    }

    // Initialize carousel - animate first slide in
    const firstSlide = slides[0];
    const firstImage = firstSlide.querySelector('.hero-image');
    const firstTextChildren = firstSlide.querySelector('.hero-text') ? firstSlide.querySelector('.hero-text').children : [];

    // Animate first slide on page load
    gsap.set(firstSlide, { opacity: 1 });
    gsap.fromTo(firstImage, {
        opacity: 0,
        x: -50
    }, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.3
    });
    gsap.fromTo(firstTextChildren, {
        opacity: 0,
        y: 50
    }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.5
    });

    // Start auto-advance
    startCarousel();

    // Thumbnail click handlers
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            if (index !== currentIndex) {
                changeSlide(index);
                stopCarousel();
                startCarousel();
            }
        });
    });

    // Pause when page is not visible (browser tab switching)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopCarousel();
        } else {
            startCarousel();
        }
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     gsap.registerPlugin(ScrollTrigger, SplitText);
    
//     const titleSplit = new SplitText('.featured-title', {
//         type: 'chars'
//     });
    
//     gsap.from(titleSplit.chars, {
//         opacity: 0,
//         x: 50,
//         duration: 1,
//         stagger: 0.03,
//         ease: "expo.out",
//         scrollTrigger: {
//             trigger: '.featured-title',
//             start: 'top center',
//             end: 'bottom 20%',
//             scrub: true
//         }
//     });
// });

// ScrollTrigger Animations - ORDER MATTERS: Pin sections first, then others
document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    
    // 1. PERSONALIZED SECTION - Pin FIRST (affects layout for subsequent sections)
    const personalizedSection = document.querySelector('.personalized-section');
    const personalizedTitle = document.querySelector('.personalized-title');
    const personalizedDescription = document.querySelector('.personalized-description');
    const personalizedCTA = document.querySelector('.personalized-cta');
    
    if (personalizedSection && personalizedTitle) {
        // Set initial state - all elements hidden
        gsap.set([personalizedTitle, personalizedDescription, personalizedCTA], {
            opacity: 0,
            y: 50
        });
        
        // Create timeline that animates based on scroll progress
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: personalizedSection,
                start: 'top top',
                end: '+=150%',  // Explicit distance (tweak 100–200% to taste)
                scrub: 1,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1
            }
        });
        
        // Animate elements in sequence based on scroll progress
        tl.to(personalizedTitle, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "expo.out"
        })
        .to(personalizedDescription, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "expo.out"
        }, "-=0.2") // Start slightly before title finishes
        .to(personalizedCTA, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "expo.out"
        }, "-=0.2"); // Start slightly before description finishes
    }
    
    // 2. QUOTE SECTION - After pin (calculates positions knowing about pin)
    const quoteText = document.querySelector('.quote-text');
    if (quoteText) {
        const quoteSplit = new SplitText(quoteText, {
            type: 'lines'
        });

        gsap.from(quoteSplit.lines, {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2,
            ease: "expo.out",
            scrollTrigger: {
                trigger: '.quote-text',
                start: 'top 80%-=100vh',  // Wait until it truly comes in
                end: 'bottom 20%-=100vh',
                scrub: true
            }
        });
    }
    
    // 3. ABOUT IMAGE - After pin (calculates positions knowing about pin)
    const aboutImage = document.querySelector('.about-image img');
    if (aboutImage) {
        gsap.fromTo(aboutImage, {
            y: -150
        }, {
            y: -50,
            duration: 1,
            ease: "none",
            scrollTrigger: {
                trigger: '.about-image img',
                start: 'top bottom-=100vh',  // Avoid kicking in behind the pin
                end: 'bottom top-=100vh',
                scrub: true
            }
        });
    }
    
    // Refresh ScrollTrigger after all content is loaded to fix positioning
    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });
});