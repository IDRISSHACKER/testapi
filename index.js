const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 80

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    console.log("Welcome to Guihon api!. v1.0.0 ");
    res.send('Welcome to Guihon api!. v1.0.0 ');
    }
);

app.listen((port), () => {
    console.log(`Server is running on port ${port}`);
})


