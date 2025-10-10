require('dotenv').config(); // Have to install dotenv in order to use variables inside .env file
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express()
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'dist')));

app.get('', (req, res) => {
    console.log('Server connected to the port');
    res.sendFile(path.join(__dirname, './src/pages/Home.jsx'));
});

app.get('/shop', (req, res) => {
    res.sendFile(path.join(__dirname, './src/pages/Shop.jsx'));
});

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, './src/pages/Form.jsx'));
});

app.listen(PORT, () => {
    // console.log(`Server running at ${PORT}`);
    console.log(`Server is running on http://localhost:${PORT}`);
});