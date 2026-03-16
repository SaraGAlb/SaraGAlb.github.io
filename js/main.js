// Código JavaScript principal para interacciones básicas

document.addEventListener('DOMContentLoaded', function() {
    // ejemplo: alternar menú móvil si existe
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('open');
        });
    }

    // ejemplo de animación suave al desplazarse a anclas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // otras utilidades globales pueden agregarse aquí
});
