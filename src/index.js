const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const collection = require("./config");

const app = express();

// Convert data into JSON format
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render("login");
});

app.get('/signup', (req, res) => {
    res.render("signup");
});

// Register user
app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.username,
        password: req.body.password
    }

    // Check if user already exists in the database
    const existingUser = await collection.findOne({ name: data.name });

    if (existingUser) {
        res.send("User already exists, Please choose another username");
    } else {
        // Hash the password using bcrypt
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        data.password = hashedPassword; // Replace the hashed password with the original password

        const userdata = await collection.insertMany(data);
        console.log(userdata);
        res.send("User registered successfully!");
    }
});

// Login user
app.post('/login', async (req, res) => {
    try {
        const user = await collection.findOne({ name: req.body.username });

        if (!user) {
            res.send("Username not found");
        } else {
            // Compare the hashed password from the database with the plain text
            const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);

            if (isPasswordMatch) {
                res.render("home");
            } else {
                res.send("Wrong password");
            }
        }
    } catch (error) {
        res.send("Wrong details");
    }
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server Started on port ${port}`);
});
