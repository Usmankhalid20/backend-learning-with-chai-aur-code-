const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

// MongoDB Connection
const MONGO_URI = "mongodb+srv://Usman_2205:Usmankhalid_2205@cluster0.9vhfo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Change this to your DB URL

mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});