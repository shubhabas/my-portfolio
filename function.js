document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Navigation Toggle Logic ---
    const header = document.querySelector('.header');
    const mobileMenuOpenBtn = document.querySelector('.menu-open-icon');
    const mobileMenuCloseBtn = document.querySelector('.menu-close-icon');
    const navbarLinks = document.querySelectorAll('.navbar-link'); // Get all navbar links

    const toggleNavbar = () => {
        header.classList.toggle('active'); // Toggles 'active' class on header
    };

    if (mobileMenuOpenBtn) {
        mobileMenuOpenBtn.addEventListener('click', toggleNavbar);
    }
    if (mobileMenuCloseBtn) {
        mobileMenuCloseBtn.addEventListener('click', toggleNavbar);
    }

    // Close mobile nav when a link is clicked (for smooth scrolling)
    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (header.classList.contains('active')) {
                toggleNavbar(); // Close the menu if it's open
            }
        });
    });
});