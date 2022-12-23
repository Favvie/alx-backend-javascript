// export default function uploadPhoto(fileName) {
// 	return Promise.reject(new Error(`${fileName} cannot be processed`));
// }

export default function uploadPhoto(filename) {
	return new Promise((resolve, reject) => {
		reject(Error(`${filename} cannot be processed`));
	});
}
