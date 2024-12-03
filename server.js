const express=require("express");
const request=require("request");
const bodyParser= require("body-parser");
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/kitterDB');

// Define user schema directly in server.js
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create User model
const User = mongoose.models.User || mongoose.model('User', userSchema);

// Define contact schema directly in server.js
const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true
    },
    dateSubmitted: {
        type: Date,
        default: Date.now
    }
});

// Create Contact model
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

const app=express();

app.use(express.static("assets"));
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.get("/about",(req,res)=>{
    res.sendFile(__dirname+"/about.html");
  
})

app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+"/contact.html");
})


app.get("/blogs",(req,res)=>{
    res.sendFile(__dirname+"/blogs.html");
})

app.post("/contact", async (req, res) => {
    try {
        const newContact = new Contact({
            firstName: req.body.FirstName,
            lastName: req.body.LastName,
            email: req.body.Email,
            phoneNumber: req.body.PhoneNumber,
            message: req.body.Message
        });

        await newContact.save();
        res.redirect("/");
    } catch (error) {
        console.error('Contact submission error:', error);
        res.status(500).send('Error submitting contact form');
    }
});

app.get("/collections",(req,res)=>{ // Added new route
    res.sendFile(__dirname+"/collections.html");
})

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/login.html");
});

app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email: username });

        if (!user) {
            return res.status(400).send('Invalid email or password');
        }

        // Compare the password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send('Invalid email or password');
        }

        // Successful login
        res.redirect('/');
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send('Error logging in');
    }
});

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/register.html");
});

app.listen(3000,function(req,res){
    console.log ("started  server");
})

// Add this new route
app.get("/wishlist", (req, res) => {
    res.sendFile(__dirname + "/wishlist.html");
});

// Registration route
app.post('/register', async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create new user
        const newUser = new User({
            fullname,
            email,
            password: hashedPassword
        });
        
        // Save user to database
        await newUser.save();
        
        res.redirect('/login');
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).send('Error registering user');
    }
});
