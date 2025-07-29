document.addEventListener("DOMContentLoaded", function() {
    // Select all <> elements inside .nav-links
    const navLinks = document.querySelectorAll('nav-links a');
    // Iterate over each link
    navLinks.forEach(function(link) {
        // Add a click event listener to each link 
        link.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = link.getAttribute('href');
        });
    });
});