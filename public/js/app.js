console.log('Hello world');

if('serviceWorker' in navigator) {
	console.log('Service worker present');

	navigator.serviceWorker.register('/js/sw.js').then((reg) => {
		console.log('Registration succeeded: ' + reg.scope);
	}).catch((error) => {
		console.log('Registration failed: ' + error);
	});
}
