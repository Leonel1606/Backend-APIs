const {contacts} = require('./contacts_schema');

module.exports = {
    addcontactsValidation: async(req, res, next) =>{
        const value = await contacts.validate(req.body);
        if(value.error){
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        }
        else{
            next();
        }
    }
}