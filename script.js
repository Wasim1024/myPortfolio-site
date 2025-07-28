// 1. Make navigation links clickable
const navLinks = document.querySelectorAll('.nav-link li');

// Add a click event listener to each link
navLinks.forEach(link =>  {
    link.addEventListener('click', () => {
        alert(`You clicked on ${link.textContent}`);
    });
});

// 2. Make "See case study→" links clickable
const  caseStudyLinks = document.querySelectorAll('.case-study');
caseStudyLinks.forEach(link => {
    link.addEventListener('click', () => {
        alert(`Redirecting to case study: ${link.textContent}`);
    });
});


// 3. Add functionality to the "Back to Top" button

// Select the button
const backToTopButton = document.getElementById('back-to-top');

// Show the button when the user scrolls down
window.addEventListener('scroll', () => {
    if (window.scrollY >500) {
        backToTopButton.classList.add('show'); // Add the 'show' class
    } else {
        backToTopButton.classList.remove('show'); // Remove the 'show' class
    }
});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top:0, behavior: 'smooth' });
});
