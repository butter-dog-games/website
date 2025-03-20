const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// List of available proxies
const proxies = [
    { ip: '47.251.122.81', port: '8888', country: 'US' },
    { ip: '85.215.64.49', port: '80', country: 'DE' },
    { ip: '72.10.160.92', port: '24283', country: 'CA' },
    { ip: '23.247.137.142', port: '80', country: 'US' },
    { ip: '185.64.208.33', port: '53281', country: 'RU' },
    { ip: '50.223.246.237', port: '80', country: 'US' }
];

// Use a random proxy for now (or you can set this up to rotate proxies)
function getRandomProxy() {
    const proxy = proxies[Math.floor(Math.random() * proxies.length)];
    return `http://${proxy.ip}:${proxy.port}`;
}

// Set up a route to proxy the content fetching
app.get('/fetch', async (req, res) => {
    const { url } = req.query;
    const proxy = getRandomProxy();

    if (!url) {
        return res.status(400).send('Please provide a URL to fetch.');
    }

    try {
        const response = await axios.get(url, {
            proxy: {
                host: proxy.split(':')[0],
                port: parseInt(proxy.split(':')[1])
            }
        });

        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error fetching the content: ' + error.message);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Proxy server running on http://localhost:${port}`);
});
