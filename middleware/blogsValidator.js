const joi = require("joi");
const errorFunction = require("../utils/errorFunction");

const validation = joi.object({
     title: joi.string().min(3).max(25).trim(true).required(),
     image: joi.required(),
     description: joi.string().min(3).max(25).trim(true).required()
     
});

const blogValidation = async (req, res, next) => {
	const payload = {
		title: req.body.title,
		image: req.body.image,
		description: req.body.description,
	};

	const { error } = validation.validate(payload);
	if (error) {
		res.status(406);
		return res.json(
			errorFunction(true, `Error in blog Data : ${error.message}`)
		);
	} else {
		next();
	}
};


module.exports = blogValidation;