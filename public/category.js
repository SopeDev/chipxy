// Category Page Interactions for Chipxy

document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP plugins
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && typeof SplitText !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger, SplitText);
        
        // Editorial Quote Animation (same as homepage)
        // Wait for fonts to load before initializing SplitText
        const quoteText = document.querySelector('.quote-text');
        if (quoteText) {
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
        
        // Refresh ScrollTrigger after all content is loaded
        window.addEventListener('load', () => {
            ScrollTrigger.refresh();
        });
    }
    
    // Filter chips functionality
    const filterChips = document.querySelectorAll('.filter-chip');
    const filterCount = document.querySelector('.filter-count');
    const totalProducts = 22; // Total number of products
    
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const filterValue = chip.getAttribute('data-filter');
            
            // Toggle active state
            if (filterValue === 'all') {
                // If "all" is clicked, deactivate all other chips
                filterChips.forEach(c => c.classList.remove('is-active'));
                chip.classList.add('is-active');
                if (filterCount) {
                    filterCount.textContent = `${totalProducts} de ${totalProducts} piezas`;
                }
            } else {
                // Toggle individual filter
                chip.classList.toggle('is-active');
                
                // If "all" is active, deactivate it when another filter is selected
                const allChip = document.querySelector('[data-filter="all"]');
                if (allChip && chip !== allChip) {
                    allChip.classList.remove('is-active');
                }
                
                // Count active filters
                const activeFilters = document.querySelectorAll('.filter-chip.is-active');
                const activeCount = activeFilters.length;
                
                // Update product count (simplified - in real implementation would filter products)
                if (filterCount) {
                    if (activeCount === 0 || (activeCount === 1 && allChip && allChip.classList.contains('is-active'))) {
                        filterCount.textContent = `${totalProducts} de ${totalProducts} piezas`;
                    } else {
                        // Simulate filtered results (in real implementation, this would be dynamic)
                        const filteredCount = Math.floor(totalProducts * 0.6); // Example: 60% match
                        filterCount.textContent = `${filteredCount} de ${totalProducts} piezas`;
                    }
                }
            }
            
            // In a real implementation, this would trigger product filtering
            console.log('Filter applied:', filterValue);
            // Future: Implement actual filtering logic or API call
        });
    });
    
    // Set "all" as active by default
    const allChip = document.querySelector('[data-filter="all"]');
    if (allChip) {
        allChip.classList.add('is-active');
    }
    
    // Sort functionality (basic implementation)
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            const sortValue = e.target.value;
            // In a real implementation, this would trigger a re-sort of products
            // For now, we'll just log it
            console.log('Sort by:', sortValue);
            // Future: Implement actual sorting logic or API call
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Product card hover animations (already handled by CSS, but can add GSAP enhancements)
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Optional: Add GSAP animations here if needed
        });
    });
});

