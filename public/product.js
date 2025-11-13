// Product Page Interactions for Chipxy

document.addEventListener('DOMContentLoaded', () => {

    // Gallery thumbnails
    const galleryMainImage = document.querySelector('.gallery-main-image');
    const galleryThumbs = document.querySelectorAll('.gallery-thumb');
    galleryThumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const newImage = thumb.getAttribute('data-image');
            if (!newImage || !galleryMainImage) return;

            galleryThumbs.forEach(btn => {
                btn.classList.remove('is-selected');
                btn.setAttribute('aria-pressed', 'false');
            });

            thumb.classList.add('is-selected');
            thumb.setAttribute('aria-pressed', 'true');

            galleryMainImage.classList.add('is-transitioning');
            galleryMainImage.addEventListener('transitionend', () => {
                galleryMainImage.classList.remove('is-transitioning');
            }, { once: true });

            galleryMainImage.setAttribute('src', newImage);
        });
    });

    // Option selection chips
    const toggleOptionGroup = (selector, activeClass = 'is-active') => {
        const options = document.querySelectorAll(selector);
        options.forEach(option => {
            option.addEventListener('click', () => {
                const group = option.closest('[role="radiogroup"]');
                if (!group) return;
                const siblings = group.querySelectorAll(selector);
                siblings.forEach(btn => {
                    btn.classList.remove(activeClass);
                    btn.setAttribute('aria-pressed', 'false');
                });
                option.classList.add(activeClass);
                option.setAttribute('aria-pressed', 'true');
            });
        });
    };

    toggleOptionGroup('.option-chip');
    toggleOptionGroup('.swatch');

    // Wishlist toggle
    const wishlistButton = document.querySelector('.add-to-wishlist');
    wishlistButton?.addEventListener('click', () => {
        const isActive = wishlistButton.getAttribute('aria-pressed') === 'true';
        wishlistButton.setAttribute('aria-pressed', String(!isActive));
    });

    // Add to cart micro interaction
    const productForm = document.querySelector('.product-form');
    productForm?.addEventListener('submit', event => {
        event.preventDefault();
        const button = productForm.querySelector('.add-to-cart');
        if (!button) return;

        const originalText = button.textContent;
        button.textContent = 'añadido ✓';
        button.classList.add('is-success');

        setTimeout(() => {
            button.textContent = originalText || 'agregar al carrito';
            button.classList.remove('is-success');
        }, 2200);
    });

    // Newsletter form response
    function bindFooterNewsletter() {
        const footerForm = document.querySelector('.footer-newsletter .newsletter-form');
        if (!footerForm || footerForm.dataset.bound === 'true') return;

        footerForm.dataset.bound = 'true';
        footerForm.addEventListener('submit', event => {
            event.preventDefault();
            const emailInput = footerForm.querySelector('.newsletter-input');
            const btn = footerForm.querySelector('.newsletter-btn');
            if (!emailInput || !btn) return;

            btn.textContent = '✓';
            btn.style.backgroundColor = 'var(--color-mindaro)';
            btn.style.color = 'var(--color-eerie-black)';

            setTimeout(() => {
                btn.textContent = '→';
                btn.style.backgroundColor = '';
                btn.style.color = '';
                emailInput.value = '';
            }, 2000);
        });
    }

    bindFooterNewsletter();
    document.addEventListener('chipxy:footer-ready', bindFooterNewsletter);

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        const givingImage = document.querySelector('.giving-image');
        if (givingImage) {
            gsap.fromTo(givingImage, {
                y: -100
            }, {
                y: 100,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.giving-image',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }
    }

    const quantityInput = document.querySelector('.quantity-input');
    const quantityButtons = document.querySelectorAll('.quantity-btn');

    function clampQuantity(value) {
        const parsed = parseInt(value, 10);
        return isNaN(parsed) || parsed < 1 ? 1 : parsed;
    }

    quantityInput?.addEventListener('input', () => {
        quantityInput.value = clampQuantity(quantityInput.value);
    });

    quantityButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (!quantityInput) return;
            const current = clampQuantity(quantityInput.value);
            const action = btn.dataset.action;
            const next = action === 'decrement' ? Math.max(1, current - 1) : current + 1;
            quantityInput.value = next;
        });
    });
});




