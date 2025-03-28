/**
 * Main JavaScript File
 * Handles all dynamic content and interactions for the Hidden Gems website.
 * 
 * @author [Rimjhim Singh]
 * @version 1.0.0
 */

// Wait for the DOM to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the destination cards
    renderDestinationCards();
    
    // Smooth scrolling for anchor links
    setupSmoothScrolling();
});

/**
 * Renders destination cards using the data from destinations.js
 */
function renderDestinationCards() {
    const container = document.getElementById('destination-cards');
    
    // Make sure the container exists
    if (!container) {
        console.error('Destination cards container not found');
        return;
    }
    
    // Create HTML for each destination card
    destinations.forEach(dest => {
        const cardHTML = `
            <div class="col-lg-3 col-md-6 mb-4">
                <div class="card">
                    <img src="${dest.image}" class="card-img-top" alt="${dest.alt}">
                    <div class="card-body">
                        <h5 class="card-title">${dest.title}</h5>
                        <p class="card-text">${dest.desc}</p>
                    </div>
                </div>
            </div>
        `;
        
        // Add the card to the container
        container.innerHTML += cardHTML;
    });
}

/**
 * Sets up smooth scrolling for anchor links
 */
function setupSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}