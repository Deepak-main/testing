const express = require('express');
const app = express();
const path = require('path');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // optional but good practice

// Routes
app.get('/', (req, res) => {
  res.render('index'); // make sure views/index.ejs exists
});

app.get('/profile/:username', (req, res) => {
  res.send(`Welcome ${req.params.username}`);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started! 🚀`);
  console.log(`Visit: http://localhost:${PORT}`);
});
