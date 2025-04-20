const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request body

// ✅ Route to handle POST /contact (for form submission)
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required." });
    }

    console.log("Received message:", { name, email, message });
    res.json({ message: "Message sent successfully!" });
});

// ✅ Route to handle GET / (homepage)
app.get("/", (req, res) => {
    res.send("Welcome to the Contact API!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
