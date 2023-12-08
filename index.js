// Import required modules
const express = require('express');
const axios = require('axios');

// Twitter API credentials
const apiKey = 'jXkY0IowHAq7tuBrxCL3udWd5';
const apiSecretKey = 'AiGz3TBzkjieXAKrlvhGclKwMhXjMRRic26U60mbBAgHPxtZou';
const accessToken = '1413589492125114372-JYiH9iq3VTx28IA7EBD4k9b96WHFdv';
const accessTokenSecret = 'RHEXqn4O2dNPuaRwMvlYJ0Ql7nWWZ98jgTY6QkPFqEOou';
const bearerToken = 'AAAAAAAAAAAAAAAAAAAAAG%2BYrQEAAAAAWTr5ElkDfRvRNUrg%2FAQO49xVW%2FE%3Du7ktMYSRIxfRHeFAsij4upcjiTbpPG7FYuCby9RbHRYtZZmCkq';

// Initialize express
const app = express();
const port = 3000;

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