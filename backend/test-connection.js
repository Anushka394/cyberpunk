require('dotenv').config();
const mongoose = require('mongoose');

console.log('Testing MongoDB Connection...');
console.log('MONGO_URI:', process.env.MONGO_URI ? 'Found' : 'Missing');

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB Connected Successfully!');
        
        // Test Schema
        const scoreSchema = new mongoose.Schema({
            name: String,
            score: Number
        });
        const Score = mongoose.model('Score', scoreSchema);
        
        // Test Insert
        const testScore = new Score({ name: 'TEST_USER', score: 999 });
        return testScore.save();
    })
    .then(() => {
        console.log('Test score saved!');
        process.exit(0);
    })
    .catch(err => {
        console.error('Error:', err.message);
        process.exit(1);
    });
