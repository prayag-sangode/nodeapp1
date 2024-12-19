const express = require('express');
const app = express();

// Define the port where your application will run
const PORT = 8080;

// API Route to get the status of the application
app.get('/llmhub/nodeapp-api/v1', (req, res) => {
    res.json({
        status: "API is working",
        version: "v1"
    });
});

// API Route to get the list of items
app.get('/llmhub/nodeapp-api/v1/items', (req, res) => {
    res.json([
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" }
    ]);
});

// Handle 404 for undefined routes
app.use((req, res) => {
    res.status(404).json({
        error: "Not Found",
        message: "The requested resource does not exist"
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`App running at: http://localhost:${PORT}/llmhub/nodeapp-api/v1`);
});
