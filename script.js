// 1. Cursor Follower Logic
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    // Moves the cursor glow to follow the mouse
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.style.opacity = '0.5';
});

document.addEventListener('mouseleave', () => {
    // Hides the cursor glow when mouse leaves window
    cursor.style.opacity = '0';
});

// 2. Active Link Switching on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';

    // Determine which section is currently in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });

    // Update the active class in the sidebar navigation
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});