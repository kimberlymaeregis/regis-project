document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sticky Navigation Header Shadow on Scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });

    // 2. Shopping Bag Counter & Cart Button Logic
    let cartCount = 0;
    const cartCountElement = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.btn-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            
            // Update the header counter
            if (cartCountElement) {
                cartCountElement.textContent = `(${cartCount})`;
            }

            // Button Feedback Animation
            const originalText = button.textContent;
            button.textContent = 'Added to Cart!';
            button.style.backgroundColor = '#486a3f'; // Accent green color
            button.disabled = true;

            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = ''; // Reverts to primary CSS color
                button.disabled = false;
            }, 1200);
        });
    });

    // 3. Corporate Newsletter Form Logic
    const newsletterBtn = document.querySelector('.newsletter-input button');
    const newsletterInput = document.querySelector('.newsletter-input input');

    if (newsletterBtn && newsletterInput) {
        newsletterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = newsletterInput.value.trim();

            if (email !== '' && email.includes('@')) {
                alert(`Thank you for connecting with EcoNest! We have sent a confirmation email to ${email}.`);
                newsletterInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    // 4. Smooth Anchor Scrolling (For Header Navigation Links)
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});
