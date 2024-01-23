const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/Cluster0");


connect.then(() => {
    console.log("Database Started Successfully");
}).catch(() => {
    console.log("Database cannot be connected");
})

//Create a schema
const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});

//collection part
const collection = new mongoose.model("users", LoginSchema);

module.exports = collection;