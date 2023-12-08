// Import required modules
const express = require('express');
const cors = require('cors');
const axios = require('axios');

// Twitter API credentials from environment variables
const apiKey = process.env.X_API_KEY;
const apiSecretKey = process.env.X_API_SECRET_KEY;
const accessToken = process.env.X_ACCESS_TOKEN;
const accessTokenSecret = process.env.X_ACCESS_TOKEN_SECRET;
const bearerToken = process.env.X_BEARER_TOKEN;

// Initialize express and cors
const app = express();
app.use(cors({ origin: 'https://floki.com' })); // Simplified CORS setup
const port = process.env.PORT || 3000; // Use environment variable for port, with a fallback

// Endpoint to get follower count
app.get('/getFollowerCount', async (req, res) => {
    try {
        const response = await axios.get('https://api.twitter.com/1.1/users/show.json?screen_name=RealFlokiInu', {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        });

        const followerCount = response.data.followers_count;
        res.json({ followerCount });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching follower count');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});