const joi = require("joi");
const errorFunction = require("../utils/errorFunction");

const validation = joi.object({
     email: joi.string().email().trim(true).required(),
     
});

const subValidation = async (req, res, next) => {
	const payload = {
		email: req.body.email
	};

	const { error } = validation.validate(payload);
	if (error) {
		res.status(406);
		return res.json(
			errorFunction(true, `Error in email, please check ! : ${error.message}`)
		);
	} else {
		next();
	}
};


module.exports = subValidation;