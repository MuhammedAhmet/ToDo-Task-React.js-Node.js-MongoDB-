const mongoose = require("mongoose");

//mongoose.set('useFindAndModify', false);  /// edit ve delete warning i almamak için bu kodu yazın

mongoose.connect("mongodb+srv://dbUser:Apocalypsei1@clusterfirst.xo5ug.mongodb.net/ToDoDb?retryWrites=true&w=majority",
{useUnifiedTopology: true,useNewUrlParser: true},
err => {
    if(!err){
        console.log("Database Successfully Connected....");
    }
    else
    console.log("Error While Connecting To The Database..." + JSON.stringify(err,undefined,2));

});