require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Ye naya hai

const app = express();

// Middleware (Browser ko allow karne ke liye)
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected!"))
    .catch(err => console.log(err));

// Schema (Data kaisa dikhega)
const scoreSchema = new mongoose.Schema({
    name: String,
    score: Number
});

const Score = mongoose.model('Score', scoreSchema);

// --- ROUTES (API Endpoints) ---

// 1. Save Score (Jab game over hoga)
app.post('/api/scores', async (req, res) => {
    try {
        const newScore = new Score({
            name: req.body.name,
            score: req.body.score
        });
        await newScore.save();
        res.json({ message: "Score Saved!" });
        console.log("New Score Added:", req.body.name);
    } catch (error) {
        res.status(500).json({ error: "Failed to save score" });
    }
});

// 2. Get Top Scores (Leaderboard ke liye)
app.get('/api/scores', async (req, res) => {
    try {
        // Top 5 scores dhundo, bade se chota (descending)
        const topScores = await Score.find().sort({ score: -1 }).limit(5);
        res.json(topScores);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch scores" });
    }
});

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));