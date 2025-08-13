document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-links a');

    // Highlight current page link
    const currentPage = (window.location.pathname.split('/').pop() || 'homepage.html');
    navLinks.forEach(function(link) {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });

    // Mobile nav toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-links');
    if (navToggle && navList) {
        navToggle.addEventListener('click', function() {
            const isOpen = navList.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });
    }

    // Smooth scroll for down-arrow jump links
    document.querySelectorAll('.jump-link').forEach(function(link) {
        link.addEventListener('click', function(event) {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                event.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // Reveal on scroll (respects reduced motion)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
        const revealElements = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver(function(entries, obs) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(function(el) { observer.observe(el); });
    }

    // Sticky nav shadow toggle
    const navBar = document.querySelector('.nav-bar');
    if (navBar) {
        const onScroll = function() {
            if (window.scrollY > 4) {
                navBar.classList.add('scrolled');
            } else {
                navBar.classList.remove('scrolled');
            }
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    }
});