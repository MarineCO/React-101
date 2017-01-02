let formatName = user => {
	return user.firstName + ' ' + user.lastName;
};

const user = {
	firstName: 'Marine',
	lastName: 'Colonge'
};

let tick = () => {
	const element = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Hello, ',
			formatName(user),
			'!'
		),
		React.createElement(
			'h2',
			null,
			'Il est ',
			new Date().toLocaleTimeString()
		)
	);

	ReactDOM.render(element, document.getElementById('test'));
};

setInterval(tick, 1000);
