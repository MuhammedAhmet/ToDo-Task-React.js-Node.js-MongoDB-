const express = require("express");
const crypt = require("crypto");
const jwt = require("jsonwebtoken");


var router = express.Router();

var ObjectID = require("mongoose").Types.ObjectId;

var {User} = require("../model/UserModel");
const {checkToken} = require("./TokenChecker/CheckToken");


router.get("/", (req,res) => {
    User.find((error,docs)=>{
        if(!error){
            res.send(docs);
        }
        else
        {
            console.log("Error while retrieving data : " + JSON.stringify(error));
            alert("Error")
        }
    })
})

router.post("/register", (req,res) => {

    const {username,password:plainTextPassword} = req.body   /// req body den bu variable ları çek

    if(!username || typeof(username) !== 'string'){
        return res.json({status:'error', error:'Invalid username'})
    }

    if(!plainTextPassword || typeof(plainTextPassword) !== 'string'){
        return res.json({status:'error', error:'Invalid password'})
    }

    const password = crypt.createHash('md5').update(plainTextPassword).digest('hex');

    User.findOne({
        username : req.body.username
    }, (err,doc)=>{
        if(doc == null){
            try{
                var Res =  User.create({
                    username,
                    password
                })
                return res.send("Successfully Registered");
            }
            catch (error){
                console.log(error);
                return res.send("Error while registering");
            }

        }
        else{
            res.send("Username Already Taken")

        }
    })
});

//#region Register old
/*
router.post("/register", async(req,res)=>{
    const {username,password:plainTextPassword} = req.body   /// req body den bu variable ları çek

    if(!username || typeof(username) !== 'string'){
        return res.json({status:'error', error:'Invalid username'})
    }

    if(!plainTextPassword || typeof(plainTextPassword) !== 'string'){
        return res.json({status:'error', error:'Invalid password'})
    }

    var usr = User.findOne({username:req.body.username})
    if(usr){
        console.log(usr)
        return res.json({status:'error', error:'Username already taken!'})
    }

    const password = await crypt.createHash('md5').update(plainTextPassword).digest('hex');

    try 
    {
        var Res = await User.create({
            username,
            password
        })
        return res.send("Successfully Registered");
    } 
    catch (error) 
    {
        console.log(error);
        return res.send("Error while registering");
    }


})
*/
//#endregion

router.post("/login", async(req,res) => {

    const {username,password:plainText} = req.body

    const pass = await crypt.createHash('md5').update(plainText).digest('hex');

    const user = await User.findOne({username:username,password:pass}).lean();
    if(user){
        jwt.sign({user},'privateKey',{expiresIn:'1h'},(err,token)=>{
            if(err) {
                res.send(err)
            }
            else{
                //arr = [token,user];
                res.send({token:token,user:user})
                //res.send({message:"Success", user:user})
            }
        })
    }
    else{
        res.send("Error while Login")
    }

})

router.get('/data', checkToken, (req, res) => {
    //verify the JWT token generated for the user
    jwt.verify(req.token, 'privatekey', (err, authorizedData) => {
        if(err){
            //If error send Forbidden (403)
            console.log('ERROR: Could not connect to the protected route');
            res.sendStatus(403);
        } else {
            //If token is successfully verified, we can send the autorized data 
            res.json({
                message: 'Successful log in',
                authorizedData
            });
            console.log('SUCCESS: Connected to protected route');
        }
    })
});



module.exports = router;

