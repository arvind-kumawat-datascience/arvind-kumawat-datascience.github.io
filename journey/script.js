// Add interactivity for the Seed Information section

document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initCollapsibles();
    initProductIngredients();
    initCOALinks();
    initCarousels();
});

function initNavigation() {
    const links = [
        { id: 'google-maps-link', url: 'https://maps.app.goo.gl/8tBKi8SmEF65Hdj39' },
        { id: 'soil-test-link', url: 'https://cdn.shopify.com/s/files/1/0892/8352/6978/files/Soil_report.jpg?v=1753336823' },
        { id: 'land-doc-link', url: 'https://cdn.shopify.com/s/files/1/0892/8352/6978/files/Extent_of_land_parcel_Srikakulam_field.jpg?v=1753336884' },
        { id: 'seed-proc-link', url: 'https://cdn.shopify.com/s/files/1/0892/8352/6978/files/Seeds_for_sowing.jpg?v=1753337520' }
    ];

    links.forEach(link => {
        const element = document.getElementById(link.id);
        if (element) {
            element.addEventListener('click', () => window.open(link.url, '_blank'));
        }
    });

    const procLink = document.querySelector('.proc-link');
    if (procLink) {
        procLink.addEventListener('click', () => {
            window.open('https://cdn.shopify.com/s/files/1/0892/8352/6978/files/Seeds_for_sowing.jpg?v=1753337520', '_blank');
        });
    }
}

function initCollapsibles() {
    const sections = document.querySelectorAll('.collapsible-section');
    sections.forEach((section, idx) => {
        const header = section.querySelector('.collapsible-header');
        if (!header) return;

        // Set initial state
        if (idx === 0) {
            section.classList.add('active');
            header.setAttribute('aria-expanded', 'true');
        } else {
            section.classList.remove('active');
            header.setAttribute('aria-expanded', 'false');
        }

        header.addEventListener('click', () => {
            const wasActive = section.classList.contains('active');

            // Close all sections
            sections.forEach(s => {
                s.classList.remove('active');
                const h = s.querySelector('.collapsible-header');
                if (h) h.setAttribute('aria-expanded', 'false');
            });

            // Toggle current
            if (!wasActive) {
                section.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
                smoothScrollTo(section);
            }
        });
    });
}

function smoothScrollTo(element) {
    setTimeout(() => {
        const stickyHeader = document.getElementById('sticky-header');
        const headerOffset = stickyHeader ? stickyHeader.offsetHeight + 20 : 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }, 300);
}

function initProductIngredients() {
    const productSections = document.querySelectorAll('.product-collapsible-section');
    productSections.forEach(section => {
        const header = section.querySelector('.product-collapsible-header');
        if (header) {
            header.addEventListener('click', () => {
                productSections.forEach(s => s.classList.remove('active'));
                section.classList.add('active');
            });
        }
    });

    const ingredientLinks = document.querySelectorAll('.product-link[data-target]');
    ingredientLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetSelector = link.getAttribute('data-target');
            if (!targetSelector) return;
            const targetSection = document.querySelector(targetSelector);
            if (!targetSection) return;

            event.preventDefault();
            productSections.forEach(section => section.classList.remove('active'));
            targetSection.classList.add('active');
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function initCOALinks() {
    const coaLinks = document.querySelectorAll('.coa-link');
    const coaUrls = {
        'MilletCo, Hyderabad': '#',
        'Oats Co., Indore': '#',
        'Dairy Best, Kolhapur': '#',
        'Sweet Mills, Nashik': '#',
        'Nut House, Goa': '#',
        'Additive Labs, Mumbai': '#',
        'Spice World, Kerala': '#',
        'Salt Co., Gujarat': '#',
        'For Health You, Hyderabad': '#',
        'Nakoda Dairy, Bengaluru': '#',
        'Rajendram Beekeeping India Private Limited, Barabanki': '#',
        'Muffin Man, Hyderabad': '#',
        'Srikakulam, Hyderabad': '#',
        'Srikakulam Collective, Andhra Pradesh': '#',
        'Farm Fresh, Pune': '#',
        'SeedPro, Surat': '#'
    };

    coaLinks.forEach(coaLink => {
        coaLink.addEventListener('click', (e) => {
            e.preventDefault();
            const company = coaLink.getAttribute('data-company');
            const coaUrl = coaUrls[company] || '#';

            if (coaUrl !== '#') {
                window.open(coaUrl, '_blank');
            } else {
                openModal('coaModal');
            }
        });
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";

        const closeBtn = modal.querySelector('.coa-close');
        if (closeBtn) {
            closeBtn.onclick = () => modal.style.display = "none";
        }

        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    } else {
        alert('NA');
    }
}

function initCarousels() {
    setupCarousel('.seed-track', '.nav-dot');
    setupCarousel('.ingredients-track', '.ing-nav-dot');
}

function setupCarousel(trackSelector, dotSelector) {
    const track = document.querySelector(trackSelector);
    const dots = document.querySelectorAll(dotSelector);

    if (track && dots.length > 0) {
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                const slideWidth = track.offsetWidth;
                track.scrollTo({
                    left: slideWidth * index,
                    behavior: 'smooth'
                });
            });
        });

        track.addEventListener('scroll', () => {
            const slideWidth = track.offsetWidth;
            const scrollPosition = track.scrollLeft;
            const activeIndex = Math.round(scrollPosition / slideWidth);

            dots.forEach((dot, index) => {
                if (index === activeIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        });
    }
}

// Action button functions
function scrollToFarmer() {
    const farmerSection = document.querySelector('.collapsible-section');
    if (farmerSection) {
        farmerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    const textarea = document.getElementById('shareContent');
    return textarea ? textarea.value : '';
}

function shareToFacebook() {
    const content = getShareContent();
    const websiteUrl = 'https://purfermeproject.com';
    const url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(websiteUrl) + "&quote=" + encodeURIComponent(content) + "&hashtag=%23Thankyourfarmer";
    window.open(url, '_blank');
    hideShareOptions();
}

function shareToInstagram() {
    shareToPlatform('Instagram');
}

function shareToFacebookStory() {
    shareToPlatform('Facebook Story');
}

function shareToInstagramStory() {
    shareToPlatform('Instagram Story');
}

function shareToWhatsApp() {
    const content = getShareContent();
    const url = `https://wa.me/?text=${encodeURIComponent(content)}`;
    window.open(url, '_blank');
    hideShareOptions();
}

function shareToWhatsAppStory() {
    shareToPlatform('WhatsApp Story');
}

function shareToPlatform(platform) {
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
            showStoryMessage(platform);
        });
    } else {
        showStoryMessage(platform);
    }
}

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

    setTimeout(() => {
        if (notification.parentNode) {
            document.body.removeChild(notification);
            hideShareOptions();
        }
    }, 6000);
}

// Close modal when clicking outside
document.addEventListener('click', function (event) {
    const modal = document.getElementById('shareModal');
    if (event.target === modal) {
        hideShareOptions();
    }
}); 