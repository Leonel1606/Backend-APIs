const joi = require("joi");
const errorFunction = require("../utils/errorFunction");

const validation = joi.object({
     name: joi.string().alphanum().min(3).max(25).trim(true).required(),
     email: joi.string().email().trim(true).required(),
     phone: joi.string().length(10).pattern(/[0-9]{1}[0-9]{9}/).required(),
     message: joi.string().min(3).max(25).trim(true).required()
     
});

const contactsValidation = async (req, res, next) => {
	const payload = {
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone,
		message: req.body.message,
	};

	const { error } = validation.validate(payload);
	if (error) {
		res.status(406);
		return res.json(
			errorFunction(true, `Error in Message Data : ${error.message}`)
		);
	} else {
		next();
	}
};


module.exports = contactsValidation;