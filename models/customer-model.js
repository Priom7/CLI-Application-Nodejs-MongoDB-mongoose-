const mongoose = require('mongoose');

const customer = mongoose.Schema({
	firstName: { type: String },
	lastName: { type: String },
	phone: { type: String },
	email: { type: String }
});

module.exports = mongoose.model('Customer', customer);
