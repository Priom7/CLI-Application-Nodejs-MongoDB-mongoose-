

const program = require('commander');
const { prompt } = require('inquirer');

const { addCustomer, findCustomer, updateCustomer, removeCustomer, allCustomer } = require('./index');
const { command } = require('commander');

//Questions

const questions = [
	{
		type: 'input',
		name: 'firstName',
		message: 'Customer First Name'
	},
	{
		type: 'input',
		name: 'lastName',
		message: 'Customer Last Name'
	},
	{
		type: 'input',
		name: 'phone',
		message: 'Customer Phone no:'
	},
	{
		type: 'input',
		name: 'email',
		message: 'Customer Email'
	}
];

program.version('0.0.1').description('Shopping CLI');

// program
// 	.command('add <firstName> <lastName> <phone> <email>')
// 	.alias('a')
// 	.description('Add a Customer')
// 	.action((firstName, lastName, phone, email) => {
// 		addCustomer({ firstName, lastName, phone, email });
// 	});

// Add
program.command('add').alias('a').description('Add a Customer').action(() => {
	prompt(questions).then((answers) => addCustomer(answers));
});

program.command('find <name>').alias('f').description('Find a Customer').action((name) => {
	findCustomer(name);
});

// Update
program.command('update <_id>').alias('u').description('Update a Customer').action((_id) => {
	prompt(questions).then((answers) => updateCustomer(_id, answers));
});

// Remove
program.command('remove <_id>').alias('r').description('Remove a Customer').action((_id) => removeCustomer(_id));

// All
program.command('list').alias('l').description('List of all Customer').action(() => allCustomer());

program.parse(process.argv);
