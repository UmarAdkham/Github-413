// const btn = document.getElementById('send')
// const input = document.getElementById('input')

// btn.addEventListener('click', () => {
// 	const files = input.files[0]
// 	const formData = new FormData()
// 	formData.append('file', files)

// 	fetch('https://api.escuelajs.co/api/v1/files/upload', {
// 		method: 'POST',
// 		body: formData
// 	})
// 	.then(response => response.json())
// 	.then(data => {
// 		console.log(data)
// 	})
// 	.catch(error => {
// 		console.error('Error:', error)
// 	})
// })	


function uploadFile(A) {
	A.forEach(element => {
		if (element % 2 == 0) {
			console.log(element);
			
		}
	});
}

uploadFile([160, 3, 1719, 19, 11, 13, -21])