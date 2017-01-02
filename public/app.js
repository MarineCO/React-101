let formatName = user => {
	return user.firstName + ' ' + user.lastName;
};

const user = {
	firstName: 'Marine',
	lastName: 'Colonge'
};

const element = React.createElement(
	'h1',
	null,
	'Hello, ',
	formatName(user),
	'!'
);

ReactDOM.render(element, document.getElementById('test'));
