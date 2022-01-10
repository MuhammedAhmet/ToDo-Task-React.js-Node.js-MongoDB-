const mongoose = require("mongoose");

var User = mongoose.model("Users",{
    username : {type:String, required:true, unique: true}, 
    password : {type:String, required:true}
},"Users")

module.exports = { User }