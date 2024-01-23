const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");

const app = express();

app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static(path.join('public')));

app.get('/', (req, res) => {
    res.render("login");
});

app.get('/signup', (req, res) => {
    res.render("signup");
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server Started on port ${port}`);
});
