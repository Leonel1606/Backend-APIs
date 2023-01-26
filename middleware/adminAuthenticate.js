const jwt= require('jsonwebtoken');

const authenticate = (req, res, next)=>{
    try{
         const token= req.headers.authorization.split(' ')[1];
         const verified  = jwt.verify(token, 'leon');

         req.user=verified
         next()
    }
    catch(error){
        res.json({
            message: 'No access right!'
        })
    }
}
module.exports = authenticate