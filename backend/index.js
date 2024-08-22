const express = require("express");
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.static('public'));
const port = 5000;
app.use(cors());
app.use(session({
    secret: 'secret', // Replace with a strong secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

mongoose.connect('mongodb://localhost:27017/projectdata', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userdata = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    gender: String,
    hobby: String,
    country: String,
    phonenumber: String,
    birthday: String
});
const signindata = mongoose.model('userdata', userdata);

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/signin.html");
});

app.post('/register', async (req, res) => {
    const { email, username, password } = req.body;

    try {
        const existingUser = await signindata.findOne({ $or: { email } });
        const existingUsername = await signindata.findOne({ $or: { username } });

        if (existingUser) {
            return res.status(400).json({ message: 'Email is already taken' });
        }

        if (existingUsername) {
            return res.status(400).json({ message: 'Username is already taken' });
        }

        await signindata.create({ email, username, password });
        res.status(200).send("User successfully created!!");
    } catch (error) {
        console.error(error);
    }
});

app.get('/health', (req, res) => {
    res.status(200).send('Server is up');
});

app.post('/login', async (req, res) => {
    const { email, username, password } = req.body;

    try {
        const existingUser = await signindata.findOne({ $or: { email } });

        if (!existingUser) {
            return res.status(400).json({ message: "Email does not exist" });
        }

        if (existingUser.username !== username) {
            return res.status(400).json({ message: "Username is incorrect" });
        }

        if (existingUser.password !== password) {
            return res.status(400).json({ message: "Password is incorrect" });
        }

        // Store email in session
        if (email) {
            req.session.email = email;
        } else {
            console.log("email are not get");
        }

        res.status(200).send("User successfully logged in!");
    } catch (error) {
        console.log(error);
    }
});

app.get('/showprofile', async (req, res) => {
    try {
        const email = req.session.email;
        // const email = "deep@gmail.com"
        try {
            const userProfile = await signindata.findOne({ email: email });
            res.json(userProfile);
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log(error);
    }
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});