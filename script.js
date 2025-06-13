import vanillaTilt from 'vanilla-tilt';

document.addEventListener('DOMContentLoaded', () => {

    // --- Vanilla Tilt Effect on Product Cards ---
    vanillaTilt.init(document.querySelectorAll(".product-card"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3
    });

    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navUl = document.querySelector('#main-nav ul');

    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('#main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (navUl.classList.contains('show')) {
                navUl.classList.remove('show');
            }
        });
    });

    // --- Active Nav Link on Scroll ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#main-nav a');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4 // Adjust this value to change when the link becomes active
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // --- Form Submission Simulation ---
    const handleFormSubmit = (formId, successMessage) => {
        const form = document.getElementById(formId);
        if(form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert(successMessage);
                form.reset();
            });
        }
    };

    handleFormSubmit('lead-form', 'Obrigado! Seu e-book gratuito está a caminho.');
    handleFormSubmit('contact-form', 'Mensagem enviada com sucesso! Entrarei em contato em breve.');

});

