// ===========================
// Form Handling
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const demoForm = document.getElementById('demoForm');
    
    if (demoForm) {
        demoForm.addEventListener('submit', handleDemoSubmit);
    }

    // Smooth scrolling for anchor links
    initSmoothScroll();
    
    // Track page views (placeholder for analytics)
    trackPageView();
});

async function handleDemoSubmit(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value || '',
        school: document.getElementById('school').value,
        role: document.getElementById('role').value,
        students: document.getElementById('students').value || '',
        message: document.getElementById('message').value || '',
        hear: document.getElementById('hear').value || '',
        timestamp: new Date().toISOString(),
        page: window.location.href
    };
    
    // Log form submission (for development)
    console.log('Demo request submitted:', formData);
    
    // Track the event
    trackEvent('demo_request_submitted', formData);
    
    // TODO: In production, send to your backend API
    // Example:
    // try {
    //     const response = await fetch('YOUR_API_ENDPOINT', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(formData)
    //     });
    //     
    //     if (!response.ok) {
    //         throw new Error('Submission failed');
    //     }
    // } catch (error) {
    //     console.error('Error submitting form:', error);
    //     alert('There was an error submitting your request. Please try again or email us directly.');
    //     return;
    // }
    
    // Show success message
    document.getElementById('demoForm').style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
    
    // Scroll to success message
    document.getElementById('formSuccess').scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
    });
}

// ===========================
// Smooth Scrolling
// ===========================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===========================
// Analytics Tracking
// ===========================

function trackPageView() {
    const pageData = {
        url: window.location.href,
        title: document.title,
        referrer: document.referrer,
        timestamp: new Date().toISOString()
    };
    
    console.log('Page view:', pageData);
    
    // TODO: Integrate with your analytics service
    // Examples:
    //
    // Google Analytics 4:
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', 'page_view', {
    //         page_title: document.title,
    //         page_location: window.location.href,
    //         page_path: window.location.pathname
    //     });
    // }
    //
    // Mixpanel:
    // if (typeof mixpanel !== 'undefined') {
    //     mixpanel.track('Page View', pageData);
    // }
    //
    // Plausible:
    // if (typeof plausible !== 'undefined') {
    //     plausible('pageview');
    // }
}

function trackEvent(eventName, properties = {}) {
    const eventData = {
        event: eventName,
        properties: properties,
        timestamp: new Date().toISOString()
    };
    
    console.log('Event tracked:', eventData);
    
    // TODO: Integrate with your analytics service
    // Examples:
    //
    // Google Analytics 4:
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', eventName, properties);
    // }
    //
    // Mixpanel:
    // if (typeof mixpanel !== 'undefined') {
    //     mixpanel.track(eventName, properties);
    // }
}

// ===========================
// Utility Functions
// ===========================

// Track CTA button clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-primary') || 
        e.target.classList.contains('btn-secondary')) {
        trackEvent('cta_clicked', {
            button_text: e.target.textContent,
            button_href: e.target.href || '',
            page: window.location.href
        });
    }
});

// Track outbound links
document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (link && link.href && !link.href.includes(window.location.hostname)) {
        trackEvent('outbound_link_clicked', {
            url: link.href,
            text: link.textContent
        });
    }
});
