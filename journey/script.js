// Add interactivity for the Seed Information section

document.addEventListener('DOMContentLoaded', function() {
    const procLink = document.querySelector('.proc-link');
    if (procLink) {
        procLink.addEventListener('click', function() {
            window.open('https://cdn.shopify.com/s/files/1/0892/8352/6978/files/Seeds_for_sowing.jpg?v=1753337520', '_blank');
        });
    }

    // Add navigation for documentation links
    const googleMapsLink = document.getElementById('google-maps-link');
    if (googleMapsLink) {
        googleMapsLink.addEventListener('click', function() {
            window.open('https://maps.app.goo.gl/8tBKi8SmEF65Hdj39', '_blank');
        });
    }
    const soilTestLink = document.getElementById('soil-test-link');
    if (soilTestLink) {
        soilTestLink.addEventListener('click', function() {
            window.open('https://cdn.shopify.com/s/files/1/0892/8352/6978/files/Soil_report.jpg?v=1753336823', '_blank');
        });
    }
    const landDocLink = document.getElementById('land-doc-link');
    if (landDocLink) {
        landDocLink.addEventListener('click', function() {
            window.open('https://cdn.shopify.com/s/files/1/0892/8352/6978/files/Extent_of_land_parcel_Srikakulam_field.jpg?v=1753336884', '_blank');
        });
    }
    const seedProcLink = document.getElementById('seed-proc-link');
    if (seedProcLink) {
        seedProcLink.addEventListener('click', function() {
            window.open('https://cdn.shopify.com/s/files/1/0892/8352/6978/files/Seeds_for_sowing.jpg?v=1753337520', '_blank');
        });
    }

    // Collapsible sections for mobile
    function setupMobileCollapsibles() {
        if (window.innerWidth > 700) return;
        const sections = document.querySelectorAll('.collapsible-section');
        sections.forEach((section, idx) => {
            const header = section.querySelector('.collapsible-header');
            const content = section.querySelector('.collapsible-content');
            if (idx === 0) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
            header.addEventListener('click', function() {
                sections.forEach(s => s.classList.remove('active'));
                section.classList.add('active');
            });
        });
    }
    setupMobileCollapsibles();
    window.addEventListener('resize', setupMobileCollapsibles);

    // Product ingredients accordion (desktop & mobile)
    const productSections = document.querySelectorAll('.product-collapsible-section');
    productSections.forEach((section, idx) => {
      const header = section.querySelector('.product-collapsible-header');
      header.addEventListener('click', function() {
        productSections.forEach(s => s.classList.remove('active'));
        section.classList.add('active');
      });
    });
});

// Action button functions
function scrollToFarmer() {
    const farmerSection = document.querySelector('.collapsible-section');
    if (farmerSection) {
        farmerSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        // Auto-expand the farmer section on mobile
        if (window.innerWidth <= 700) {
            const sections = document.querySelectorAll('.collapsible-section');
            sections.forEach(s => s.classList.remove('active'));
            farmerSection.classList.add('active');
        }
    }
}

function showShareOptions() {
    const modal = document.getElementById('shareModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function hideShareOptions() {
    const modal = document.getElementById('shareModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function getShareContent() {
    // Get the content from textarea (URL is already included in the text)
    const textarea = document.getElementById('shareContent');
    let content = textarea ? textarea.value : '';
    return content;
}

function shareToFacebook() {
    const content = getShareContent();
    const websiteUrl = 'https://purfermeproject.com';
    // Use hashtag parameter to ensure content appears
    const url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(websiteUrl) + "&quote=" + encodeURIComponent(content) + "&hashtag=%23Thankyourfarmer";
    window.open(url, '_blank');
    hideShareOptions();
}

function shareToInstagram() {
    // Instagram does not support direct web sharing, fallback to native share if available
    if (navigator.share) {
        navigator.share({
            title: 'Foxtail Millet Product',
            text: getShareContent(),
            url: 'https://purfermeproject.com'
        }).then(() => {
            hideShareOptions();
        }).catch(() => {
            showStoryMessage('Instagram');
        });
    } else {
        showStoryMessage('Instagram');
    }
}

function shareToFacebookStory() {
    const content = getShareContent();
    const websiteUrl = 'https://purfermeproject.com';
    if (navigator.share) {
        navigator.share({
            title: 'Foxtail Millet Product',
            text: content,
            url: websiteUrl
        }).then(() => {
            hideShareOptions();
        }).catch(() => {
            showStoryMessage('Facebook Story');
        });
    } else {
        showStoryMessage('Facebook Story');
    }
}

function shareToInstagramStory() {
    const content = getShareContent();
    const websiteUrl = 'https://purfermeproject.com';
    if (navigator.share) {
        navigator.share({
            title: 'Foxtail Millet Product',
            text: content,
            url: websiteUrl
        }).then(() => {
            hideShareOptions();
        }).catch(() => {
            showStoryMessage('Instagram Story');
        });
    } else {
        showStoryMessage('Instagram Story');
    }
}

function shareToWhatsApp() {
    const content = getShareContent();
    const url = `https://wa.me/?text=${encodeURIComponent(content)}`;
    window.open(url, '_blank');
    hideShareOptions();
}

function shareToWhatsAppStory() {
    const content = getShareContent();
    const websiteUrl = 'https://purfermeproject.com';
    if (navigator.share) {
        navigator.share({
            title: 'Foxtail Millet Product',
            text: content,
            url: websiteUrl
        }).then(() => {
            hideShareOptions();
        }).catch(() => {
            showStoryMessage('WhatsApp Story');
        });
    } else {
        showStoryMessage('WhatsApp Story');
    }
}

// Show helpful message for story sharing
function showStoryMessage(platform) {
    const notification = document.createElement('div');
    notification.className = 'story-message';
    notification.innerHTML = `
        <div style="text-align: center;">
            <h4 style="margin: 0 0 8px 0; color: #000000;">Share to ${platform}</h4>
            <p style="margin: 0; color: #666666; font-size: 14px;">
                Please open this page in the ${platform} app and use the share feature to add to your story.
            </p>
        </div>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #ffffff;
        color: #000000;
        padding: 24px;
        border-radius: 8px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        z-index: 1001;
        max-width: 300px;
        font-size: 14px;
        border: 1px solid #000000;
    `;
    
    document.body.appendChild(notification);
    
    // Add close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '×';
    closeBtn.style.cssText = `
        position: absolute;
        top: 8px;
        right: 8px;
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: #666666;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    closeBtn.onclick = () => {
        document.body.removeChild(notification);
        hideShareOptions();
    };
    notification.appendChild(closeBtn);
    
    // Auto close after 6 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            document.body.removeChild(notification);
            hideShareOptions();
        }
    }, 6000);
}



// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('shareModal');
    if (event.target === modal) {
        hideShareOptions();
    }
}); 