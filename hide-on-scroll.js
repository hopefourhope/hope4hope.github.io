// Hide navigation on scroll down, show on scroll up
(function() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;
    
    let lastScrollY = 0;
    let isHidden = false;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Hide on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down
            if (!isHidden) {
                navLinks.classList.add('hidden');
                isHidden = true;
            }
        } else {
            // Scrolling up
            if (isHidden) {
                navLinks.classList.remove('hidden');
                isHidden = false;
            }
        }
        
        lastScrollY = currentScrollY;
    }, false);
})();
