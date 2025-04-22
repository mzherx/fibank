// router.js

const contentDiv = document.getElementById('content');

// Define your routes and the corresponding content/functions
const routes = {
  '/': loadHomePage,
  '/about': loadAboutPage,
  '/contact': loadContactPage,
  
};

function loadHomePage() {
  contentDiv.innerHTML = '<h1>Welcome to the Home Page!</h1><p>This is the main content.</p>';
  document.title = 'Home - My Website'; // Update page title
}

function loadAboutPage() {
  contentDiv.innerHTML = '<h1>About Us</h1><p>Learn more about our company.</p>';
  document.title = 'About Us - My Website';
}

function loadContactPage() {
  contentDiv.innerHTML = '<h1>Contact Us</h1><p>Get in touch with us!</p>';
  document.title = 'Contact - My Website';
}

function handleRoute(pathname) {
  const routeHandler = routes[pathname] || loadNotFoundPage;
  routeHandler();
}

function loadNotFoundPage() {
  contentDiv.innerHTML = '<h1>404 Not Found</h1><p>Sorry, the page you requested could not be found.</p>';
  document.title = '404 Not Found';
}

// Intercept link clicks
document.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    event.preventDefault(); // Prevent the default browser navigation
    const url = event.target.getAttribute('href');
    history.pushState(null, '', url); // Update the URL without reloading
    handleRoute(url); // Load the corresponding content
  }
});

// Handle initial page load and browser history navigation (back/forward buttons)
window.addEventListener('popstate', () => {
  handleRoute(window.location.pathname);
});

// Initial route on page load
handleRoute(window.location.pathname);