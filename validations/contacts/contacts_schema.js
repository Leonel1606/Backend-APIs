const joi= require('@hapi/joi')

const schema = {
    contacts: joi.object({
        name: joi.string().min(4).max(100).required(),
        email: joi.string().email().required(),
        phone: joi.number().integer().min(1000000000).message('invalid phone number').max(9999999999).required(),
        message: joi.string().max(500).required()
    })
}

module.exports = {
    schema,
}