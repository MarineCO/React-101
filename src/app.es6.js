let formatName = (user) => {
	return user.firstName + ' ' + user.lastName;
};

const user = {
	firstName: 'Marine',
	lastName: 'Colonge'
};

let tick = () => {
	const element = 
	<div>
		<h1>Hello, {formatName(user)}!</h1>
		<h2>Il est {new Date().toLocaleTimeString()}</h2>
	</div>


	ReactDOM.render(
		element,
		document.getElementById('test')
	);
}

setInterval(tick, 1000);