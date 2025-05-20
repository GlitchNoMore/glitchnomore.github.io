document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.getElementById('mainNav');
    const navLinks = mainNav.querySelectorAll('.nav-link'); // Selecciona todos los enlaces del menú

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mainNav.classList.toggle('open');
    });

    // Añade un event listener a cada enlace del menú
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open'); // Remueve la clase 'open' del botón
            mainNav.classList.remove('open'); // Remueve la clase 'open' del menú
        });
    });
});