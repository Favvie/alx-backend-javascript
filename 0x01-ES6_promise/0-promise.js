export default function getResponseFromAPI() {
	return new Promise((resolve) => {
		resolve("this works");
	});

	const response = getResponseFromAPI();
	console.log(response instanceof Promise);
}
