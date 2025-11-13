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
    setupScrollState(nav);
    setupMobileMenu(nav);
    setupMegaMenu(nav.querySelector('[data-dropdown]'), megaBackdrop);
    setupAnchorScroll();

    document.dispatchEvent(new CustomEvent('chipxy:nav-ready', { detail: { nav } }));
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
} else {
    initNavigation();
}
