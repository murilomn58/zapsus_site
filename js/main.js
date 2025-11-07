/**
 * ZAPSUS Website - Main JavaScript
 * Handles navigation, smooth scrolling, and interactive elements
 */

(function() {
    'use strict';

    // ============================================
    // CONSTANTS
    // ============================================
    const MOBILE_BREAKPOINT = 1024;
    const SCROLL_THRESHOLD = 100;

    // ============================================
    // DOM ELEMENTS
    // ============================================
    const header = document.getElementById('header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');
    const backToTop = document.getElementById('back-to-top');
    const contactForm = document.getElementById('contact-form');

    // ============================================
    // MOBILE NAVIGATION
    // ============================================
    function initMobileNav() {
        if (!navToggle || !navMenu) return;

        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Update aria-expanded for accessibility
            const isExpanded = navMenu.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when clicking nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < MOBILE_BREAKPOINT) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ============================================
    // SCROLL EFFECTS
    // ============================================
    function handleScroll() {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        // Header shadow on scroll
        if (header) {
            if (scrollY > SCROLL_THRESHOLD) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        // Back to top button visibility
        if (backToTop) {
            if (scrollY > SCROLL_THRESHOLD * 3) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    }

    // Throttle scroll event for better performance
    let scrollTimeout;
    function throttledScroll() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                handleScroll();
                scrollTimeout = null;
            }, 100);
        }
    }

    // ============================================
    // SMOOTH SCROLLING
    // ============================================
    function initSmoothScrolling() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Ignore if it's just "#"
                if (href === '#') {
                    e.preventDefault();
                    return;
                }

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerHeight = header ? header.offsetHeight : 0;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ============================================
    // BACK TO TOP BUTTON
    // ============================================
    function initBackToTop() {
        if (!backToTop) return;

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ============================================
    // ACTIVE NAVIGATION LINK
    // ============================================
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset + (header ? header.offsetHeight + 50 : 50);

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }

    // ============================================
    // CONTACT FORM HANDLING
    // ============================================
    function initContactForm() {
        if (!contactForm) return;

        const formEndpoint = contactForm.dataset.endpoint;
        if (!formEndpoint) {
            console.warn('Nenhum endpoint configurado para o formulário de contato.');
            return;
        }

        const successMessage = contactForm.dataset.successMessage || 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
        const errorMessage = contactForm.dataset.errorMessage || 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.';

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Basic validation
            if (!data.name || !data.email || !data.message) {
                showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showNotification('Por favor, insira um email válido.', 'error');
                return;
            }

            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;

            try {
                await submitContactForm(formEndpoint, data);

                // Show success message
                showNotification(successMessage, 'success');
                contactForm.reset();
            } catch (error) {
                showNotification(errorMessage, 'error');
                console.error('Erro no envio do formulário:', error);
            } finally {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });
    }

    // Submit contact form data to configured endpoint
    async function submitContactForm(endpoint, formData) {
        const payload = {
            ...formData,
            _subject: formData._subject || 'Nova mensagem via site ZAPSUS',
            _template: formData._template || 'table',
            page: window.location.href,
            submittedAt: new Date().toISOString()
        };

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            let errorMessage = 'Erro ao enviar formulário';
            try {
                const errorData = await response.json();
                if (errorData && errorData.message) {
                    errorMessage = errorData.message;
                }
            } catch (err) {
                // Ignora erros de parsing e mantém mensagem padrão
            }
            throw new Error(errorMessage);
        }

        return response.json().catch(() => ({}));
    }

    // Show notification
    function showNotification(message, type = 'info') {
        // Remove existing notification if any
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div class="notification__content">
                <p>${message}</p>
                <button class="notification__close" aria-label="Fechar notificação">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
        `;

        // Add styles
        const styles = `
            .notification {
                position: fixed;
                top: calc(var(--header-height) + 1rem);
                right: 1rem;
                max-width: 24rem;
                padding: 1rem 1.5rem;
                background-color: white;
                border-radius: 0.75rem;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                z-index: 9999;
                animation: slideIn 0.3s ease-out;
            }

            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }

            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }

            .notification--success {
                border-left: 4px solid #10b981;
            }

            .notification--error {
                border-left: 4px solid #ef4444;
            }

            .notification--info {
                border-left: 4px solid #3b82f6;
            }

            .notification__content {
                display: flex;
                align-items: flex-start;
                gap: 1rem;
            }

            .notification__content p {
                flex: 1;
                margin: 0;
                font-size: 0.875rem;
                line-height: 1.5;
                color: #1e293b;
            }

            .notification__close {
                flex-shrink: 0;
                padding: 0.25rem;
                background: none;
                border: none;
                cursor: pointer;
                color: #64748b;
                transition: color 0.15s;
            }

            .notification__close:hover {
                color: #0f172a;
            }
        `;

        // Add styles to document if not already present
        if (!document.querySelector('#notification-styles')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'notification-styles';
            styleSheet.textContent = styles;
            document.head.appendChild(styleSheet);
        }

        // Add to document
        document.body.appendChild(notification);

        // Close button handler
        const closeButton = notification.querySelector('.notification__close');
        closeButton.addEventListener('click', () => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        });

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'slideOut 0.3s ease-out';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // ============================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ============================================
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);

        // Observe elements with animation class
        const animatedElements = document.querySelectorAll('.feature-card, .benefit-card, .team-card, .context__card');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(el);
        });

        // Add CSS for visible state
        const style = document.createElement('style');
        style.textContent = `
            .is-visible {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(style);
    }

    // ============================================
    // LAZY LOADING IMAGES
    // ============================================
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // ============================================
    // INITIALIZE ON DOM READY
    // ============================================
    function init() {
        initMobileNav();
        initSmoothScrolling();
        initBackToTop();
        initContactForm();
        initScrollAnimations();
        initLazyLoading();

        // Set up scroll event listener
        window.addEventListener('scroll', throttledScroll);
        window.addEventListener('scroll', updateActiveNavLink);

        // Initial calls
        handleScroll();
        updateActiveNavLink();

        // Handle window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                // Close mobile menu if window is resized to desktop size
                if (window.innerWidth >= MOBILE_BREAKPOINT && navMenu) {
                    navMenu.classList.remove('active');
                    if (navToggle) {
                        navToggle.classList.remove('active');
                        navToggle.setAttribute('aria-expanded', 'false');
                    }
                }
            }, 250);
        });

        // Add loaded class to body for CSS transitions
        document.body.classList.add('loaded');
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
