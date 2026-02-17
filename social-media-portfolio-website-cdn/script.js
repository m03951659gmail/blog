// ========== script.js ==========
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // ----- DARK / LIGHT MODE with localStorage -----
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  
  // Check localStorage for saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
  }

  // Toggle theme function
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    // Save preference
    if (body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // ----- FILTER BUTTONS (show/hide categories with smooth animation) -----
  const filterBtns = document.querySelectorAll('.filter-btn');
  const categoryCards = document.querySelectorAll('.category-card');

  // Initial: ensure 'collapsed' class is not applied (all visible)
  categoryCards.forEach(card => card.classList.remove('collapsed'));

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // remove active class from all filter buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // apply 'collapsed' class to hide non-matching categories
      categoryCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (filterValue === 'all' || cardCategory === filterValue) {
          // show this card (remove collapsed)
          card.classList.remove('collapsed');
        } else {
          // hide this card (add collapsed)
          card.classList.add('collapsed');
        }
      });
    });
  });

  // (optional) small safety: if any category gets stuck, force reflow after filter
  // but collapsed class handles transition via CSS.

  // ----- SMOOTH SCROLL (already in css) & additional fade-in are present.
  // Profile fade-in is handled by CSS class 'fade-in'.

  // ----- FOOTER EMAIL & COPYRIGHT are static, no extra logic needed.
});