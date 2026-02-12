// Unified Navigation Script for AI4CO
(function() {
    'use strict';

    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = 100; // Start hiding after scrolling 100px
    const scrollDelta = 5; // Minimum scroll distance to trigger hide/show

    // Navbar scroll behavior - hide on scroll down, show on scroll up
    function handleNavbarScroll() {
        const currentScroll = window.pageYOffset;

        // Don't hide navbar if we're at the top of the page
        if (currentScroll <= scrollThreshold) {
            navbar.classList.remove('navbar-hidden');
            navbar.classList.remove('navbar-scrolled');
            lastScroll = currentScroll;
            return;
        }

        // Add shadow when scrolled
        if (currentScroll > scrollThreshold) {
            navbar.classList.add('navbar-scrolled');
        }

        // Check if scroll distance is significant enough
        if (Math.abs(lastScroll - currentScroll) <= scrollDelta) {
            return;
        }

        // Scrolling down - hide navbar
        if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
            navbar.classList.add('navbar-hidden');
        }
        // Scrolling up - show navbar
        else if (currentScroll < lastScroll) {
            navbar.classList.remove('navbar-hidden');
        }

        lastScroll = currentScroll;
    }

    // Throttle scroll events for better performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(handleNavbarScroll);
    });

    // Mobile menu toggle
    const menuIcon = document.querySelector('.navbar-icon');
    const menuContainer = document.querySelector('.navbar-menu');

    if (menuIcon && menuContainer) {
        menuIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            menuContainer.classList.toggle('active');
            menuIcon.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbar.contains(e.target)) {
                menuContainer.classList.remove('active');
                menuIcon.classList.remove('active');
            }
        });

        // Close menu when clicking a link
        const menuLinks = menuContainer.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuContainer.classList.remove('active');
                menuIcon.classList.remove('active');
            });
        });
    }

    // Copy to clipboard function (for code snippets)
    window.copyToClipboard = function(element) {
        const text = document.querySelector(element).innerText;

        // Modern clipboard API
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function() {
                showCopyFeedback();
            }).catch(function(err) {
                console.error('Could not copy text: ', err);
            });
        } else {
            // Fallback for older browsers
            const elem = document.createElement('textarea');
            document.body.appendChild(elem);
            elem.value = text;
            elem.select();
            document.execCommand('copy');
            document.body.removeChild(elem);
            showCopyFeedback();
        }
    };

    function showCopyFeedback() {
        // Create a temporary notification
        const notification = document.createElement('div');
        notification.textContent = '✓ Copied to clipboard';
        notification.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: #333;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 14px;
            z-index: 10000;
            animation: slideInUp 0.3s ease-out;
        `;
        document.body.appendChild(notification);

        setTimeout(function() {
            notification.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(function() {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    }

})();
