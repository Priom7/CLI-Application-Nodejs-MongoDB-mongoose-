const mongoose = require('mongoose');

//Map global promise for getting rid of warnings

// mongoose.Promise = global.Promise;

// connect to DB

const db = mongoose.connect('mongodb://localhost:27017/customerCLI', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const Customer = require('./models/customer-model');

//add customers

const addCustomer = (customer) => {
	Customer.create(customer).then((customer) => {
		console.info('New Customer Added');
		mongoose.connection.close();
	});
};

//find customers

const findCustomer = (name) => {
	const search = new RegExp(name, 'i');
	Customer.find({ $or: [ { firstName: search }, { lastName: search } ] }).then((customer) => {
		console.info(customer);
		console.info(`${customer.length} matches`);
		mongoose.connection.close();
	});
};

//Update

const updateCustomer = (_id, customer) => {
	Customer.update({ _id }, customer).then((customer) => {
		console.info('Customer Update');
		mongoose.connection.close();
	});
};

//Delete

const removeCustomer = (_id) => {
	Customer.remove({ _id }).then((customer) => {
		console.info('Customer Deleted');
		mongoose.connection.close();
	});
};

//Show All
const allCustomer = () => {
	Customer.find().then((customers) => {
		console.info(customers);
		console.info(`${customers.length} customers`);
		mongoose.connection.close();
	});
};

//

module.exports = {
	addCustomer,
	findCustomer,
	updateCustomer,
	removeCustomer,
	allCustomer
};
