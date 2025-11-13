const SEARCH_MODAL_TEMPLATE = `
<div class="search-modal" id="search-modal" aria-hidden="true">
    <div class="search-modal-backdrop"></div>
    <div class="search-modal-content">
        <div class="search-modal-header">
            <h2 class="search-modal-title">buscar</h2>
            <button class="search-modal-close" aria-label="Cerrar búsqueda">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
        <div class="search-modal-body">
            <form class="search-form" role="search">
                <input 
                    type="search" 
                    class="search-input" 
                    placeholder="buscar productos, colecciones..." 
                    autocomplete="off"
                    aria-label="Campo de búsqueda"
                >
                <button type="submit" class="search-submit" aria-label="Buscar">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                </button>
            </form>
            <div class="search-suggestions">
                <p class="search-suggestions-label">sugerencias</p>
                <div class="search-suggestions-list">
                    <a href="category.html" class="search-suggestion">collares</a>
                    <a href="category.html" class="search-suggestion">aretes</a>
                    <a href="category.html" class="search-suggestion">pulseras</a>
                    <a href="category.html" class="search-suggestion">anillos</a>
                    <a href="category.html" class="search-suggestion">oro</a>
                    <a href="category.html" class="search-suggestion">plata</a>
                </div>
            </div>
            <div class="search-results" id="search-results" style="display: none;">
                <!-- Results will be populated here -->
            </div>
        </div>
    </div>
</div>
`;

const CART_DRAWER_TEMPLATE = `
<div class="cart-drawer" id="cart-drawer" aria-hidden="true">
    <div class="cart-drawer-backdrop"></div>
    <div class="cart-drawer-content">
        <div class="cart-drawer-header">
            <h2 class="cart-drawer-title">carrito</h2>
            <button class="cart-drawer-close" aria-label="Cerrar carrito">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
        <div class="cart-drawer-body">
            <div class="cart-empty" id="cart-empty" style="display: none;">
                <p class="cart-empty-message">tu carrito está vacío</p>
                <a href="category.html" class="btn-primary cart-empty-cta">explorar colección</a>
            </div>
            <div class="cart-items" id="cart-items">
                <div class="cart-item" data-price="285">
                    <img src="photos/resized/webp_output/product/_DSC0375_1920.webp" alt="Collar aurum" class="cart-item-image">
                    <div class="cart-item-details">
                        <h4 class="cart-item-name">collar aurum</h4>
                        <p class="cart-item-variant">45 cm · acabado oro</p>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn quantity-minus" aria-label="Disminuir cantidad">−</button>
                            <span class="quantity-value">1</span>
                            <button class="quantity-btn quantity-plus" aria-label="Aumentar cantidad">+</button>
                        </div>
                        <p class="cart-item-price">$285</p>
                    </div>
                    <button class="cart-item-remove" aria-label="Eliminar producto">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="cart-drawer-footer" id="cart-footer">
            <div class="cart-shipping-progress">
                <div class="shipping-progress-bar">
                    <div class="shipping-progress-fill" id="shipping-progress-fill"></div>
                </div>
                <p class="shipping-progress-text" id="shipping-progress-text">
                    te faltan $714 para envío gratis
                </p>
            </div>
            <div class="cart-totals">
                <div class="cart-total-row">
                    <span class="cart-total-label">subtotal</span>
                    <span class="cart-total-value" id="cart-subtotal">$285</span>
                </div>
                <div class="cart-total-row cart-total-final">
                    <span class="cart-total-label">total</span>
                    <span class="cart-total-value" id="cart-total">$285</span>
                </div>
            </div>
            <a href="#" class="btn-primary cart-checkout">proceder al pago</a>
            <p class="cart-shipping-note">envío nacional sin costo a partir de $999</p>
        </div>
    </div>
</div>
`;

const NAV_TEMPLATE = `
<nav class="nav nav-light">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="index.html">
                <h1>Chipxy</h1>
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item nav-dropdown" data-dropdown>
                <button class="dropdown-trigger" type="button" aria-expanded="false" aria-controls="tienda-mega">tienda</button>
                <div class="mega-menu" id="tienda-mega">
                    <div class="mega-menu-inner">
                        <div class="mega-menu-categories" role="menu">
                            <a href="#collections" class="mega-menu-link is-active" role="menuitem"
                               data-image="photos/resized/webp_output/lifestyle/DSC08916_1920.webp">
                                <span class="mega-menu-label">aretes</span>
                                <span class="mega-menu-subtext">detalles que iluminan</span>
                            </a>
                            <a href="#collections" class="mega-menu-link" role="menuitem"
                               data-image="photos/resized/webp_output/lifestyle/DSC08777_1920.webp">
                                <span class="mega-menu-label">pulseras</span>
                                <span class="mega-menu-subtext">capas versátiles</span>
                            </a>
                            <a href="#collections" class="mega-menu-link" role="menuitem"
                               data-image="photos/resized/webp_output/lifestyle/DSC09030_1920.webp">
                                <span class="mega-menu-label">collares</span>
                                <span class="mega-menu-subtext">líneas que estilizan</span>
                            </a>
                            <a href="#collections" class="mega-menu-link" role="menuitem"
                               data-image="photos/resized/webp_output/lifestyle/DSC08878_1920.webp">
                                <span class="mega-menu-label">anillos</span>
                                <span class="mega-menu-subtext">acentos cotidianos</span>
                            </a>
                            <a href="#personalizados" class="mega-menu-link" role="menuitem"
                               data-image="photos/resized/webp_output/lifestyle/DSC09057_1920.webp">
                                <span class="mega-menu-label">personalizados</span>
                                <span class="mega-menu-subtext">crea tu narrativa</span>
                            </a>
                            <div class="mega-menu-ticker" aria-hidden="true">
                                <div class="mega-menu-ticker-track">
                                    <span class="mega-menu-ticker-item">envío nacional sin costo desde $999</span>
                                    <span class="mega-menu-ticker-item">personaliza tu joya en 7 días hábiles</span>
                                    <span class="mega-menu-ticker-item">colección mindaro · piezas limitadas 2025</span>
                                    <span class="mega-menu-ticker-item">envío nacional sin costo desde $999</span>
                                    <span class="mega-menu-ticker-item">personaliza tu joya en 7 días hábiles</span>
                                    <span class="mega-menu-ticker-item">colección mindaro · piezas limitadas 2025</span>
                                </div>
                            </div>
                        </div>
                        <div class="mega-menu-visual">
                            <div class="mega-menu-visual-inner">
                                <img src="photos/resized/webp_output/lifestyle/DSC08916_1920.webp" alt="Vista previa de colección Chipxy" class="mega-menu-image" loading="lazy">
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li><a href="#about">about</a></li>
            <li><a href="#contact">contacto</a></li>
        </ul>
        <div class="nav-icons">
            <a href="#" class="nav-icon" title="Buscar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                </svg>
            </a>
            <a href="#" class="nav-icon" title="Mi cuenta">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </a>
            <a href="#" class="nav-icon" title="Carrito">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="m1 1 4 4 13 0 2 8-13 0"></path>
                </svg>
            </a>
        </div>
        <button class="mobile-menu-toggle" aria-label="Abrir menú">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        </button>
    </div>
    <div class="mobile-menu-overlay">
        <div class="mobile-menu-content">
            <div class="mobile-menu-header">
                <h2>Chipxy</h2>
            </div>
            <ul class="mobile-menu">
                <li><a href="#collections">aretes</a></li>
                <li><a href="#collections">pulseras</a></li>
                <li><a href="#collections">collares</a></li>
                <li><a href="#collections">anillos</a></li>
                <li><a href="#collections">personalizados</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#contact">contacto</a></li>
            </ul>
            <div class="mobile-menu-icons">
                <a href="#" class="mobile-nav-icon" title="Buscar">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    <span>buscar</span>
                </a>
                <a href="#" class="mobile-nav-icon" title="Mi cuenta">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>mi cuenta</span>
                </a>
                <a href="#" class="mobile-nav-icon" title="Carrito">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="m1 1 4 4 13 0 2 8-13 0"></path>
                    </svg>
                    <span>carrito</span>
                </a>
            </div>
        </div>
    </div>
</nav>
`;

const hasGSAP = typeof window !== 'undefined' && typeof window.gsap !== 'undefined';

function ensureNav() {
    let nav = document.querySelector('.nav');
    if (!nav) {
        document.body.insertAdjacentHTML('afterbegin', NAV_TEMPLATE);
        nav = document.querySelector('.nav');
    }
    return nav;
}

function ensureModals() {
    let searchModal = document.getElementById('search-modal');
    if (!searchModal) {
        document.body.insertAdjacentHTML('beforeend', SEARCH_MODAL_TEMPLATE);
        searchModal = document.getElementById('search-modal');
    }
    
    let cartDrawer = document.getElementById('cart-drawer');
    if (!cartDrawer) {
        document.body.insertAdjacentHTML('beforeend', CART_DRAWER_TEMPLATE);
        cartDrawer = document.getElementById('cart-drawer');
    }
    
    return { searchModal, cartDrawer };
}

function ensureMegaBackdrop() {
    let backdrop = document.querySelector('.nav-backdrop');
    if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.className = 'nav-backdrop';
        document.body.appendChild(backdrop);
    }
    return backdrop;
}

function setupScrollState(nav) {
    const toggleScrolled = () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    };

    toggleScrolled();
    window.addEventListener('scroll', toggleScrolled);
}

function setupMobileMenu(nav) {
    const mobileMenuToggle = nav.querySelector('.mobile-menu-toggle');
    const mobileMenuOverlay = nav.querySelector('.mobile-menu-overlay');
    if (!mobileMenuToggle || !mobileMenuOverlay) return;

    const openMobileMenu = () => {
        mobileMenuToggle.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeMobileMenu = () => {
        mobileMenuToggle.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    mobileMenuToggle.addEventListener('click', () => {
        if (mobileMenuOverlay.classList.contains('active')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    mobileMenuOverlay.addEventListener('click', event => {
        if (event.target === mobileMenuOverlay) {
            closeMobileMenu();
        }
    });

    mobileMenuOverlay.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

function setupMegaMenu(dropdown, backdrop) {
    if (!dropdown) return;

    const trigger = dropdown.querySelector('.dropdown-trigger');
    const megaMenu = dropdown.querySelector('.mega-menu');
    const megaMenuInner = dropdown.querySelector('.mega-menu-inner');
    const megaMenuTicker = megaMenu ? megaMenu.querySelector('.mega-menu-ticker') : null;
    const categoryLinks = dropdown.querySelectorAll('.mega-menu-link');
    const megaImage = dropdown.querySelector('.mega-menu-image');
    let activeLink = dropdown.querySelector('.mega-menu-link.is-active');
    let isOpen = false;
    let closeTimeout = null;

    if (!activeLink && categoryLinks.length) {
        activeLink = categoryLinks[0];
        activeLink.classList.add('is-active');
    }

    const swapImage = (newSrc) => {
        if (!megaImage || !newSrc) return;
        if (megaImage.dataset.currentImage === newSrc) return;

        if (hasGSAP) {
            window.gsap.to(megaImage, {
                autoAlpha: 0,
                duration: 0.25,
                ease: 'power2.inOut',
                onComplete: () => {
                    megaImage.src = newSrc;
                    megaImage.dataset.currentImage = newSrc;
                    window.gsap.to(megaImage, {
                        autoAlpha: 1,
                        duration: 0.45,
                        ease: 'power2.out'
                    });
                }
            });
        } else {
            megaImage.style.opacity = '0';
            megaImage.src = newSrc;
            megaImage.dataset.currentImage = newSrc;
            requestAnimationFrame(() => {
                megaImage.style.opacity = '1';
            });
        }
    };

    const updateVisual = (link) => {
        if (!link) return;

        if (activeLink !== link) {
            activeLink?.classList.remove('is-active');
            activeLink = link;
            activeLink.classList.add('is-active');
        }

        const newImage = link.dataset.image;

        swapImage(newImage);
    };

    if (megaImage) {
        megaImage.dataset.currentImage = megaImage.getAttribute('src') || '';
    }

    const openMenu = () => {
        if (isOpen || !megaMenu) return;
        isOpen = true;
        dropdown.classList.add('is-open');
        trigger?.setAttribute('aria-expanded', 'true');
        backdrop?.classList.add('is-visible');

        if (hasGSAP) {
            window.gsap.killTweensOf(megaMenu);
            window.gsap.killTweensOf(megaMenuInner);
            window.gsap.killTweensOf(megaMenuTicker);
            window.gsap.fromTo(megaMenu, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power2.out' });
            if (megaMenuInner) {
                window.gsap.fromTo(megaMenuInner, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', delay: 0.05 });
            }
            if (megaMenuTicker) {
                window.gsap.fromTo(megaMenuTicker, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', delay: 0.15 });
            }
        } else {
            megaMenu.style.opacity = '1';
            megaMenu.style.visibility = 'visible';
            megaMenu.style.transform = 'translateY(0)';
            if (megaMenuInner) {
                megaMenuInner.style.opacity = '1';
                megaMenuInner.style.transform = 'translateY(0)';
            }
            if (megaMenuTicker) {
                megaMenuTicker.style.opacity = '1';
                megaMenuTicker.style.transform = 'translateY(0)';
            }
        }
    };

    const closeMenu = () => {
        if (!isOpen || !megaMenu) return;
        isOpen = false;
        trigger?.setAttribute('aria-expanded', 'false');
        backdrop?.classList.remove('is-visible');

        if (hasGSAP) {
            window.gsap.killTweensOf(megaMenu);
            window.gsap.killTweensOf(megaMenuTicker);
            window.gsap.to(megaMenu, {
                autoAlpha: 0,
                y: 16,
                duration: 0.25,
                ease: 'power2.in',
                onComplete: () => {
                    dropdown.classList.remove('is-open');
                }
            });
        } else {
            megaMenu.style.opacity = '0';
            megaMenu.style.visibility = 'hidden';
            megaMenu.style.transform = 'translateY(20px)';
            dropdown.classList.remove('is-open');
            if (megaMenuInner) {
                megaMenuInner.style.opacity = '0';
                megaMenuInner.style.transform = 'translateY(10px)';
            }
            if (megaMenuTicker) {
                megaMenuTicker.style.opacity = '0';
                megaMenuTicker.style.transform = 'translateY(10px)';
            }
        }
    };

    const cancelClose = () => {
        if (closeTimeout) {
            clearTimeout(closeTimeout);
            closeTimeout = null;
        }
    };

    const scheduleClose = () => {
        cancelClose();
        closeTimeout = setTimeout(() => {
            if (!dropdown.contains(document.activeElement)) {
                closeMenu();
            }
        }, 140);
    };

    dropdown.addEventListener('mouseenter', () => {
        cancelClose();
        openMenu();
    });

    dropdown.addEventListener('mouseleave', scheduleClose);
    dropdown.addEventListener('focusin', () => {
        cancelClose();
        openMenu();
    });
    dropdown.addEventListener('focusout', scheduleClose);

    trigger?.addEventListener('click', event => {
        const isDesktop = window.matchMedia('(min-width: 769px)').matches;
        if (!isDesktop) return;
        event.preventDefault();
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && isOpen) {
            closeMenu();
            trigger?.focus();
        }
    });

    categoryLinks.forEach(link => {
        link.addEventListener('mouseenter', () => updateVisual(link));
        link.addEventListener('focus', () => updateVisual(link));
        link.addEventListener('click', () => {
            updateVisual(link);
            closeMenu();
        });
    });

    if (backdrop && !backdrop.dataset.megaBound) {
        backdrop.addEventListener('click', () => {
            if (isOpen) {
                closeMenu();
            }
        });
        backdrop.dataset.megaBound = 'true';
    }
}

function setupSearchModal(searchModal) {
    if (!searchModal) return;
    
    const searchTriggers = document.querySelectorAll('.nav-icon[title="Buscar"], .mobile-nav-icon[title="Buscar"]');
    const searchClose = searchModal.querySelector('.search-modal-close');
    const searchBackdrop = searchModal.querySelector('.search-modal-backdrop');
    const searchInput = searchModal.querySelector('.search-input');
    const searchForm = searchModal.querySelector('.search-form');
    
    const openSearch = () => {
        searchModal.classList.add('is-open');
        searchModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            searchInput?.focus();
        }, 100);
    };
    
    const closeSearch = () => {
        searchModal.classList.remove('is-open');
        searchModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        searchInput.value = '';
    };
    
    searchTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            openSearch();
        });
    });
    
    searchClose?.addEventListener('click', closeSearch);
    searchBackdrop?.addEventListener('click', closeSearch);
    
    searchForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            // In real implementation, this would trigger search
            console.log('Search query:', query);
            // For now, just close and navigate to category page
            closeSearch();
            window.location.href = `category.html?search=${encodeURIComponent(query)}`;
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchModal.classList.contains('is-open')) {
            closeSearch();
        }
    });
}

function setupCartDrawer(cartDrawer) {
    if (!cartDrawer) return;
    
    const FREE_SHIPPING_THRESHOLD = 999;
    const cartTriggers = document.querySelectorAll('.nav-icon[title="Carrito"], .mobile-nav-icon[title="Carrito"]');
    const cartClose = cartDrawer.querySelector('.cart-drawer-close');
    const cartBackdrop = cartDrawer.querySelector('.cart-drawer-backdrop');
    const cartEmpty = cartDrawer.querySelector('#cart-empty');
    const cartItems = cartDrawer.querySelector('#cart-items');
    const cartFooter = cartDrawer.querySelector('#cart-footer');
    const cartSubtotal = cartDrawer.querySelector('#cart-subtotal');
    const cartTotal = cartDrawer.querySelector('#cart-total');
    const shippingProgressFill = cartDrawer.querySelector('#shipping-progress-fill');
    const shippingProgressText = cartDrawer.querySelector('#shipping-progress-text');
    
    const calculateCartTotal = () => {
        let total = 0;
        const items = cartItems.querySelectorAll('.cart-item');
        items.forEach(item => {
            const price = parseFloat(item.dataset.price) || 0;
            const quantity = parseInt(item.querySelector('.quantity-value').textContent) || 1;
            total += price * quantity;
        });
        return total;
    };
    
    const updateCartTotals = () => {
        const total = calculateCartTotal();
        const formattedTotal = `$${total.toLocaleString('es-MX')}`;
        
        if (cartSubtotal) cartSubtotal.textContent = formattedTotal;
        if (cartTotal) cartTotal.textContent = formattedTotal;
        
        // Update shipping progress
        const progress = Math.min((total / FREE_SHIPPING_THRESHOLD) * 100, 100);
        const remaining = Math.max(FREE_SHIPPING_THRESHOLD - total, 0);
        
        if (shippingProgressFill) {
            shippingProgressFill.style.width = `${progress}%`;
        }
        
        if (shippingProgressText) {
            if (remaining === 0) {
                shippingProgressText.textContent = '¡tienes envío gratis!';
            } else {
                shippingProgressText.textContent = `te faltan $${remaining.toLocaleString('es-MX')} para envío gratis`;
            }
        }
    };
    
    const updateItemPrice = (item) => {
        const price = parseFloat(item.dataset.price) || 0;
        const quantity = parseInt(item.querySelector('.quantity-value').textContent) || 1;
        const itemPrice = item.querySelector('.cart-item-price');
        if (itemPrice) {
            itemPrice.textContent = `$${(price * quantity).toLocaleString('es-MX')}`;
        }
    };
    
    const updateCartDisplay = () => {
        const hasItems = cartItems && cartItems.children.length > 0;
        if (cartEmpty) cartEmpty.style.display = hasItems ? 'none' : 'block';
        if (cartItems) cartItems.style.display = hasItems ? 'flex' : 'none';
        if (cartFooter) cartFooter.style.display = hasItems ? 'block' : 'none';
        if (hasItems) {
            updateCartTotals();
        }
    };
    
    // Quantity buttons
    cartDrawer.querySelectorAll('.quantity-plus').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.closest('.cart-item');
            const quantityValue = item.querySelector('.quantity-value');
            const currentQty = parseInt(quantityValue.textContent) || 1;
            quantityValue.textContent = currentQty + 1;
            updateItemPrice(item);
            updateCartTotals();
        });
    });
    
    cartDrawer.querySelectorAll('.quantity-minus').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.closest('.cart-item');
            const quantityValue = item.querySelector('.quantity-value');
            const currentQty = parseInt(quantityValue.textContent) || 1;
            if (currentQty > 1) {
                quantityValue.textContent = currentQty - 1;
                updateItemPrice(item);
                updateCartTotals();
            }
        });
    });
    
    // Remove buttons
    const handleRemoveButtons = () => {
        cartDrawer.querySelectorAll('.cart-item-remove').forEach(button => {
            if (button.dataset.bound) return;
            button.dataset.bound = 'true';
            button.addEventListener('click', () => {
                const cartItem = button.closest('.cart-item');
                if (cartItem) {
                    cartItem.remove();
                    updateCartDisplay();
                }
            });
        });
    };
    
    handleRemoveButtons();
    
    // Initialize display state
    updateCartDisplay();
    
    const openCart = () => {
        cartDrawer.classList.add('is-open');
        cartDrawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };
    
    const closeCart = () => {
        cartDrawer.classList.remove('is-open');
        cartDrawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };
    
    cartTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            openCart();
        });
    });
    
    cartClose?.addEventListener('click', closeCart);
    cartBackdrop?.addEventListener('click', closeCart);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cartDrawer.classList.contains('is-open')) {
            closeCart();
        }
    });
}

function setupAnchorScroll() {
    if (window.__chipxyAnchorScrollBound) return;
    window.__chipxyAnchorScrollBound = true;

    document.addEventListener('click', event => {
        const anchor = event.target.closest('a[href^="#"]');
        if (!anchor) return;

        const href = anchor.getAttribute('href');
        if (!href || href === '#') return;

        // Allow native behaviour for hash links that explicitly opt out
        if (anchor.dataset.navRedirect === 'false') return;

        const target = document.querySelector(href);
        if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
        }

        const isNavLink = !!anchor.closest('.nav') || !!anchor.closest('.mobile-menu');
        if (isNavLink) {
            event.preventDefault();
            window.location.href = `index.html${href}`;
        }
    });
}

function initNavigation() {
    const nav = ensureNav();
    if (!nav) return;

    const megaBackdrop = ensureMegaBackdrop();
    const { searchModal, cartDrawer } = ensureModals();
    
    setupScrollState(nav);
    setupMobileMenu(nav);
    setupMegaMenu(nav.querySelector('[data-dropdown]'), megaBackdrop);
    setupSearchModal(searchModal);
    setupCartDrawer(cartDrawer);
    setupAnchorScroll();

    document.dispatchEvent(new CustomEvent('chipxy:nav-ready', { detail: { nav } }));
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
} else {
    initNavigation();
}
