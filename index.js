const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 2020

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to my api!');
    }
);

app.listen((port), () => {
    console.log(`Server is running on port ${port}`);
})


