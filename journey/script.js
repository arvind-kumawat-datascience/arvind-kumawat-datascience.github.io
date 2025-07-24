// Add interactivity for the Seed Information section

document.addEventListener('DOMContentLoaded', function() {
    const procLink = document.querySelector('.proc-link');
    if (procLink) {
        procLink.addEventListener('click', function() {
            alert('Procurement certificate will be shown here.');
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