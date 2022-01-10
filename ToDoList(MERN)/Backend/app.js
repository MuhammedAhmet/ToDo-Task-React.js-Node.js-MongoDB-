require("./mongoDB");

const cors = require("cors");
const express = require("express");
const app = express();

//const bodyParser = require("body-parser");
app.use(express.json());
app.use(cors());

//////////////////////////////
var userRoutes = require("./controller/UserController")
var taskRoutes = require("./controller/TaskController")
//////////////////////////////

app.listen(4000, () => {
    console.log("Sunucu Çalışıyor...");
});

//////////////////////////////
app.use("/api/usr",userRoutes);
app.use("/api/task",taskRoutes);
//////////////////////////////


app.get('/', function(req,res){
    //res.send("Selamlar...");
    res.send('<h1>Merhaba Express</h1>');
});