// Chipxy Website JavaScript

// Navigation scroll behavior

// Newsletter form handling
function bindNewsletter() {
    const form = document.querySelector('.footer-newsletter .newsletter-form');
    if (!form || form.dataset.bound === 'true') return;

    form.dataset.bound = 'true';
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('.newsletter-input').value;

        if (email) {
            console.log('Newsletter signup:', email);

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

document.addEventListener('DOMContentLoaded', bindNewsletter);
document.addEventListener('chipxy:footer-ready', bindNewsletter);

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
    
    // 1. PERSONALIZED SECTION
    const personalizedSection = document.querySelector('.personalized-section');
    const personalizedTitle = document.querySelector('.personalized-title');
    const personalizedDescriptions = document.querySelectorAll('.personalized-description');
    const personalizedCTA = document.querySelector('.personalized-cta');
    const personalizedVisual = document.querySelector('.personalized-visual');
    const personalizedCards = document.querySelectorAll('.personalized-product-card');
    
    if (personalizedSection && personalizedTitle) {
        const personalizedTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: personalizedSection,
                start: 'top 60%',
                toggleActions: 'play none none reverse'
            }
        });

        // if (personalizedTitle) {
        //     personalizedTimeline.from(personalizedTitle, {
        //         opacity: 0,
        //         y: 40,
        //         duration: 0.8,
        //         ease: "power2.out"
        //     });
        // }

        // if (personalizedDescriptions.length) {
        //     personalizedTimeline.from(personalizedDescriptions, {
        //         opacity: 0,
        //         y: 35,
        //         duration: 0.7,
        //         stagger: 0.15,
        //         ease: "power2.out"
        //     }, "-=0.3");
        // }

        // if (personalizedCards.length) {
        //     personalizedTimeline.from(personalizedCards, {
        //         opacity: 0,
        //         duration: 0.6,
        //         stagger: 0.12,
        //         ease: "power2.out"
        //     }, "-=0.2");
        // }

        // if (personalizedCTA) {
        //     personalizedTimeline.from(personalizedCTA, {
        //         opacity: 0,
        //         y: 30,
        //         duration: 0.6,
        //         ease: "power2.out"
        //     }, "-=0.1");
        // }

        if (personalizedVisual) {
            // Check if screen is mobile (max-width: 768px)
            const isMobile = window.matchMedia('(max-width: 768px)').matches;
            
            // Set y values based on screen size
            // Desktop values
            let yFrom = -100;
            let yTo = 100;
            let xValue = 0;
            
            // Mobile values (adjust these as needed)
            if (isMobile) {
                yFrom = 0; // TODO: Set mobile yFrom value
                yTo = 250; // TODO: Set mobile yTo value
                xValue = 20;
            }
            
            gsap.fromTo(personalizedVisual, {
                y: yFrom,
                x: xValue
            }, {
                y: yTo,
                x: xValue,
                ease: "none",
                scrollTrigger: {
                    trigger: personalizedSection,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }
    }
    
    // 2. QUOTE SECTION - Wait for fonts to load before initializing SplitText
    const quoteText = document.querySelector('.quote-text');
    if (quoteText) {
        // Wait for fonts to load before initializing SplitText
        document.fonts.ready.then(() => {
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
                    start: 'top 85%',
                    end: 'bottom 30%',
                    scrub: true
                }
            });
            
            // Refresh ScrollTrigger after SplitText initializes to ensure correct positioning
            ScrollTrigger.refresh();
        });
    }
    
    // 3. ABOUT IMAGE - After pin (calculates positions knowing about pin)
    const aboutImage = document.querySelector('.about-image img');
    if (aboutImage) {
        gsap.fromTo(aboutImage, {
            y: -200
        }, {
            y: 0,
            duration: 1,
            ease: "none",
            scrollTrigger: {
                trigger: '.about-image img',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    }

    const givingImage = document.querySelector('.giving-image');
    if (givingImage) {
        gsap.fromTo(givingImage, {
            y: -200
        }, {
            y: 0,
            duration: 1,
            ease: "none",
            scrollTrigger: {
                trigger: '.giving-image',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    }
 
    // Refresh ScrollTrigger after all content is loaded to fix positioning
    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });
});