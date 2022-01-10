const mongoose = require("mongoose");

var Task = mongoose.model("Tasks",{
    task : {type:String, default:"Null"},
    creatorId : {type:String, default:"Unknown"}
},"Tasks")

module.exports = {Task}