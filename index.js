// Import required modules
const express = require('express');
const cors = require('cors');

// Twitter API credentials
const apiKey = process.env.X_API_KEY; // Use the names you set in Vercel
const apiSecretKey = process.env.X_API_SECRET_KEY;
const accessToken = process.env.X_ACCESS_TOKEN;
const accessTokenSecret = process.env.X_ACCESS_TOKEN_SECRET;
const bearerToken = process.env.X_BEARER_TOKEN;

// Initialize express
const app = express();
const port = 3000;

// CORS options
const corsOptions = {
  origin: 'https://floki.com', // replace with your front-end domain
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Enable CORS with options
app.use(cors(corsOptions));

// Endpoint to get follower count
app.get('/getFollowerCount', async (req, res) => {
    try {
        // Make request to Twitter API
        const response = await axios.get('https://api.twitter.com/1.1/users/show.json?screen_name=RealFlokiInu', {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        });

        // Extract follower count
        const followerCount = response.data.followers_count;

        // Send response
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