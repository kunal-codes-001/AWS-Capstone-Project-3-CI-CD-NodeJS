const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        message: "CI/CD Node.js application is running"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});