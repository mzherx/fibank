// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

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

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'error.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});