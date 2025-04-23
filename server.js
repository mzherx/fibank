const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// ✅ Serve static files from the 'assets' folder
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// ✅ Optional: also serve HTML files from root (if needed)
app.use(express.static(__dirname));

// Routes for HTML pages
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'services.html'));
});

app.get('/services-details', (req, res) => {
  res.sendFile(path.join(__dirname, 'services-details.html'));
});

app.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname, 'faq.html'));
});

app.get('/pricing', (req, res) => {
  res.sendFile(path.join(__dirname, 'price.html'));
});

app.get('/testimonial', (req, res) => {
  res.sendFile(path.join(__dirname, 'testimonial.html'));
});

app.get('/error', (req, res) => {
  res.sendFile(path.join(__dirname, 'error.html'));
});

app.get('/blog-grid', (req, res) => {
  res.sendFile(path.join(__dirname, 'blog-grid.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle 404 - page not found
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'error.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});