console.log('Hello world');

if('serviceWorker' in navigator) {
	console.log('Service worker present');

	navigator.serviceWorker.register('/sw.js', {scope: '/'}).then((reg) => {
		console.log('Registration succeeded: ' + reg.scope);
	}).catch((error) => {
		console.log('Registration failed: ' + error);
	});
}

console.log(navigator.serviceWorker.controller);