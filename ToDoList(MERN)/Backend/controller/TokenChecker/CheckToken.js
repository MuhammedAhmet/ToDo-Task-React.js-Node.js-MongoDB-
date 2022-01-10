const checkToken = (req,res,next) =>{
    const Header = req.headers['Authorization'];

    if(typeof Header !== 'undefined')
    {
        const bearer = Header.split(' ');
        const token = bearer[1];

        req.token = token;
        next();
    }
    else{
        res.sendStatus(403);
    }
}

module.exports = {checkToken};