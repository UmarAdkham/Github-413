const sendBtn = document.getElementById('sendBtn');
const fileInput = document.getElementById('fileInput');
const img =  document.getElementById('preview-img');


fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        img.src = e.target.result;
    }

    reader.readAsDataURL(file);
});

sendBtn.addEventListener('click', () => {
    const file = fileInput.files[0];

    const formData = new FormData();
    formData.append('file', file);

    fetch('https://api.escuelajs.co/api/v1/files/upload', {
        method: 'POST',
        body: formData
    }).then(response => response.json()).then(data => console.log(data));
})