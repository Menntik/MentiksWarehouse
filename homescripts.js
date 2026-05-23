/* ========================= */
/* Mobile menu toggle logic  */
/* ========================= */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const body = document.body;

// Toggle menu function
function toggleMenu() {
  const isMenuOpen = navLinks.classList.toggle("active"); // Toggles the 'active' class
  hamburger.classList.toggle("active"); // Toggles the hamburger's 'active' class for its animation
  
  // Set the aria-expanded attribute for accessibility
  hamburger.setAttribute("aria-expanded", isMenuOpen);
  
  // Prevent body scrolling when menu is open
  body.style.overflow = isMenuOpen ? "hidden" : "";
}

// Event listeners
hamburger.addEventListener("click", toggleMenu);

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains("active")) {
      toggleMenu();
    }
  });
});