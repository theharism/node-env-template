const express = require('express');
const config = require('./config');

const app = express();

app.get('/', (req, res) => {
    res.send(`Hello World! Running on port ${config.port}`);
});

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});
