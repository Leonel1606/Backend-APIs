const jwt= require('jsonwebtoken');

const authenticate_user = (req, res, next)=>{
    try{
         const token= req.headers.authorization.split(' ')[1];
         const verified  = jwt.verify(token, '123abc');

         req.user=verified
         next()
    }
    catch(error){
        res.json({
            message: 'No access right!'
        })
    }
}
module.exports = authenticate_user