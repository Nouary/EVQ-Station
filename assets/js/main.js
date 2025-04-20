// Shared functionality across all pages
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (for smaller screens)
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');
    
    // Only add mobile toggle if on small screen
    if (window.innerWidth < 600) {
        navContainer.appendChild(mobileMenuToggle);
        navLinks.style.display = 'none';
        
        mobileMenuToggle.addEventListener('click', function() {
            if (navLinks.style.display === 'none' || !navLinks.style.display) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '60px';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'rgba(25, 100, 160, 0.9)';
                navLinks.style.padding = '15px';
                navLinks.style.borderRadius = '0 0 15px 15px';
            } else {
                navLinks.style.display = 'none';
            }
        });
    }
    
    // Update year in footer if exists
    const yearElement = document.querySelector('.current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Handle active navigation links
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (currentPage === href) {
            item.parentElement.classList.add('active');
        } else {
            item.parentElement.classList.remove('active');
        }
    });
    
    // Initialize tooltips
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', showTooltip);
        tooltip.addEventListener('mouseleave', hideTooltip);
    });
    
    function showTooltip(e) {
        const tooltipText = this.getAttribute('data-tooltip');
        const tooltipElement = document.createElement('div');
        tooltipElement.className = 'tooltip';
        tooltipElement.textContent = tooltipText;
        document.body.appendChild(tooltipElement);
        
        const rect = this.getBoundingClientRect();
        tooltipElement.style.left = `${rect.left + rect.width / 2 - tooltipElement.offsetWidth / 2}px`;
        tooltipElement.style.top = `${rect.top - tooltipElement.offsetHeight - 5}px`;
        
        this.tooltipElement = tooltipElement;
    }
    
    function hideTooltip() {
        if (this.tooltipElement) {
            this.tooltipElement.remove();
        }
    }
});

// Utility functions
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
}

function formatTime(timeString) {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
}
