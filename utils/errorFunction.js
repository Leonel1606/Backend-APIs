//Method used to send messages that are predefined
const errorFunction = (errorBit, msg, data) => {
    if (errorBit) return { is_error: errorBit, message: msg };
    else return { is_error: errorBit, message: msg, data };
};

module.exports = errorFunction;