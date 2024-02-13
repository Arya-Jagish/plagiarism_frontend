const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

// Serving static files (your HTML, CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
