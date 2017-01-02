let formatName = (user) => {
	return user.firstName + ' ' + user.lastName;
};

const user = {
	firstName: 'Marine',
	lastName: 'Colonge'
};

const element = 
	<h1>
		Hello, {formatName(user)}!
	</h1>;


ReactDOM.render(
	element,
	document.getElementById('test')
);