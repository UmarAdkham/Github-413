const sendBtn = document.getElementById('sendBtn');
const fileInput = document.getElementById('uploadFile');
const img = document.getElementById('preview-img')


fileInput.addEventListener('change', () => {
	const file = fileInput.files[0];
	
	const imgUrl = URL.createObjectURL(file);
	console.log(imgUrl);
	
	img.src = imgUrl
})

sendBtn.addEventListener('click', () => {
	const file = fileInput.files[0];

	const formData = new FormData();
	formData.append('file', file);
	
	fetch(`https://api.escuelajs.co/api/v1/files/upload`, 
		{
			method: 'POST',
			body: formData
		}
	)
	.then(res => res.json())
	.then(data => {
		console.log(data);
	})
	
})