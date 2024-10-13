// Get elements
const menuIcon = document.querySelector('.icon-menu');
const closeIcon = document.querySelector('.icon-menu-close');
const navbarContainer = document.querySelector('.navbar-container');
const overlay = document.createElement('div');

overlay.classList.add('overlay');
document.body.appendChild(overlay);

// Function to show the navbar and overlay
menuIcon.addEventListener('click', () => {
  navbarContainer.classList.add('active');
  overlay.classList.add('active');
  menuIcon.style.display = 'none';
  closeIcon.style.display = 'block';
});

// Function to hide the navbar and overlay
closeIcon.addEventListener('click', () => {
  navbarContainer.classList.remove('active');
  overlay.classList.remove('active');
  menuIcon.style.display = 'block';
  closeIcon.style.display = 'none';
});

// Hide navbar if overlay is clicked
overlay.addEventListener('click', () => {
  navbarContainer.classList.remove('active');
  overlay.classList.remove('active');
  menuIcon.style.display = 'block';
  closeIcon.style.display = 'none';
});
