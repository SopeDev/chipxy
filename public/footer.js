const FOOTER_TEMPLATE = `
<footer class="footer">
    <div class="footer-container">
        <div class="footer-logo-column">
            <img src="c-logo.svg" alt="Chipxy Logo" class="footer-logo">
        </div>
        <div class="footer-newsletter">
            <h3 class="newsletter-title">únete al círculo chipxy</h3>
            <p class="newsletter-subtitle">sé la primera en descubrir nuevas colecciones y piezas exclusivas</p>
            <form class="newsletter-form">
                <input type="email" placeholder="ingresa tu dirección de correo" class="newsletter-input">
                <button type="submit" class="newsletter-btn">→</button>
            </form>
        </div>
        <div class="footer-links">
            <div class="footer-column">
                <h4>colecciones</h4>
                <ul>
                    <li><a href="#">aretes</a></li>
                    <li><a href="#">pulseras</a></li>
                    <li><a href="#">collares</a></li>
                    <li><a href="#">anillos</a></li>
                    <li><a href="#">personalizados</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>soporte</h4>
                <ul>
                    <li><a href="#">contacto</a></li>
                    <li><a href="#">envíos</a></li>
                    <li><a href="#">devoluciones</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>conectar</h4>
                <ul>
                    <li><a href="#">instagram</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-copyright">
            <p>&copy; 2025 Chipxy. todos los derechos reservados.</p>
        </div>
    </div>
</footer>
`;

function ensureFooter() {
    let footer = document.querySelector('footer.footer');
    if (!footer) {
        document.body.insertAdjacentHTML('beforeend', FOOTER_TEMPLATE);
        footer = document.querySelector('footer.footer');
    }
    return footer;
}

function initFooter() {
    ensureFooter();
    document.dispatchEvent(new CustomEvent('chipxy:footer-ready'));
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooter);
} else {
    initFooter();
}
