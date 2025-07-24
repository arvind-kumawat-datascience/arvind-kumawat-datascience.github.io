// Add interactivity for the Seed Information section

document.addEventListener('DOMContentLoaded', function() {
    const procLink = document.querySelector('.proc-link');
    if (procLink) {
        procLink.addEventListener('click', function() {
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