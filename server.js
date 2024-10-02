const express=require("express");
const request=require("request");
const bodyParser= require("body-parser");



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

app.post("/contact",(req,res)=>{
    var fname=req.body.FirstName;
    var lname=req.body.LastName;
    var email=req.body.Email;
    var pnumber=req.body.PhoneNumber;
    var text=req.body.Message;
    
    console.log(fname, lname,email,pnumber,text)

    res.redirect("/")
})

app.get("/collections",(req,res)=>{ // Added new route
    res.sendFile(__dirname+"/collections.html");
})

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/login.html");
});

app.post("/login", (req, res) => {

    var username = req.body.username;
    var password = req.body.password;
    console.log(username,password);
    // Here you would typically handle the login logic
    // For now, we'll just redirect to the home page
    res.redirect("/");
});

app.listen(3000,function(req,res){
    console.log ("started  server");
})

// Add this new route
app.get("/wishlist", (req, res) => {
    res.sendFile(__dirname + "/wishlist.html");
});
