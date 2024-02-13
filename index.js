const express = require('express');
// const path = require('path');

const app = express();
// const PORT = process.env.PORT || 3000;

// Set up a static directory to serve HTML, CSS, and JS files
app.use(express.static('public'));

// Start the server
app.listen(3000, () => {
    console.log("App running on port 3000");
});
