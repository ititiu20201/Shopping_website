const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");
const { error } = require("console");

app.use(express.json());
app.use(cors());

//database connection with mongoDB
mongoose.connect("mongodb://localhost:27017/Shopping_website", {
useNewUrlParser: true,
useUnifiedTopology: true,
});

//API Creation

app.get("/", (req, res) => {
res.send("Express App is Running");
});

// image storage engine
const storage = multer.diskStorage({
destination: "./upload/images",
filename: (req, file, cb) => {
return cb(
null,
${file.fieldname}_${Date.now()}${path.extname(file.originalname)}
);
},
});

const upload = multer({ storage: storage });
// creating upload Endpoint for image

app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
res.json({
success: 1,
image_url: http://localhost:${port}/images/${req.file.filename},
});
});

// schema creating Product

const Product = mongoose.model("Product", {
id: {
type: Number,
require: true,
},
name: {
type: String,
require: true,
},
image: {
type: String,
require: true,
},
category: {
type: String,
require: true,
},
new_price: {
type: Number,
require: true,
},
old_price: {
type: Number,
require: true,
},
date: {
type: Date,
default: Date.now,
},
available: {
type: Boolean,
default: true,
},
});

app.post("/addproduct", async (req, res) => {
let products = await Product.find({});
let id;
if (products.length > 0) {
let last_product_array = products.slice(-1);
let last_product = last_product_array[0];
id = last_product.id + 1; //automacally generate id
} else {
id = 1;
}
const product = new Product({
id: id,
name: req.body.name,
image: req.body.image,
category: req.body.category,
new_price: req.body.new_price,
old_price: req.body.old_price,
});
console.log(product);
await product.save();
console.log("Saved"); //notice in terminal
res.json({
success: true,
name: req.body.name, //generate one response with the key success and name success true we will get the product name
});
});

// Creating API for deleting products

app.post("/removeproduct", async (req, res) => {
await Product.findOneAndDelete({ id: req.body.id });
console.log("Removed");
res.json({
success: true,
name: req.body.name,
});
});

//Creating API for getiing all products

app.get("/allproducts", async (req, res) => {
let products = await Product.find({});
console.log("All products Fetched");
res.send(products);
});

//schema creating for User model

const Users = mongoose.model("Users", {
name: {
type: String,
},
email: {
type: String,
unique: true,
},
password: {
type: String,
},
cartData: {
type: Object,
},
date: {
type: Date,
default: Date.now,
},
});

//Creating endpoint for registering the user
app.post("/signup", async (req, res) => {
let check = await Users.findOne({ email: req.body.email });
if (check) {
return res.status(400).json({
success: false,
error: "existing user found with same email address",
});
}
let cart = {};
for (let i = 0; i < 300; i++) {
cart[i] = 0;
}
const user = new Users({
name: req.body.username,
email: req.body.email,
password: req.body.password,
cartData: cart,
});
await user.save();
const data = {
user: {
id: user.id,
},
};

const token = jwt.sign(data, "secret e-com");
res.json({ success: true, token });
});

//creating enpoint for user login
app.post("/login", async (req, res) => {
let user = await Users.findOne({ email: req.body.email });
if (user) {
const passCompare = req.body.password === user.password;
if (passCompare) {
const data = {
user: {
id: user.id,
},
};
const token = jwt.sign(data, "secret-ecom");
res.json({ success: true, token });
} else {
res.json({ success: false, errors: "Wrong Password" });
}
} else {
res.json({ success: false, errors: "Wrong email id" });
}
});

//creating endpoint for new collection data
app.get("/newcollections", async (req, res) => {
let products = await Product.find({});
let newcollection = products.slice(1).slice(-8);
console.log("NewCollection Fetched");
res.send(newcollection);
});

//creating endpoint for popular in women section
app.get("/popularinwomen", async (req, res) => {
let products = await Product.find({ category: "women" });
let popular_in_women = products.slice(0, 4);
console.log("Popular in women fetched");
res.send(popular_in_women);
});

//creating endpoint for adding product in cartdata
app.post("/addtocart", fetchUser, async (req, res) => {
console.log(req.body,req.user);
});

//creating middleware to fetch user
const fetchUser = async (req, res, next) => {
const token = req.header("auth-token");
if (!token) {
res.status(401).send({ errors: "Please authenticate using valid token" });
} else {
try {
const data = jwt.verify(token, "secret_ecom");
req.user = data.user;
next();
} catch (error) {
res.status(401).send({ errors: "Please authenticate using valid token" });
}
}
};

app.listen(port, (error) => {
if (!error) {
console.log("Server Running on Port " + port);
} else {
console.log("Error :" + error);
}
});