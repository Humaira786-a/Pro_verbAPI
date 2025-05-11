const express = require('express');
const proverbs = require('./proverbs'); // Import data
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('🌟 Afghan Proverbs API - Use /proverbs endpoint');
});

// Get all proverbs
app.get('/proverbs', (req, res) => {
  res.json(proverbs);
});

// Get single proverb
app.get('/proverbs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const proverb = proverbs.find(p => p.id === id);
  res.json(proverb || { error: 'Proverb not found' });
});

// Add new proverb
app.post('/proverbs', (req, res) => {
  const requiredFields = ['textDari', 'textPashto', 'translationEn', 'meaning', 'category'];
  const missingField = requiredFields.find(field => !req.body[field]);
  
  if (missingField) {
    return res.status(400).json({ error: `${missingField} is required` });
  }

  const newProverb = {
    id: proverbs.length + 1,
    ...req.body
  };

  proverbs.push(newProverb);
  res.status(201).json(newProverb);
});

// Start server
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});