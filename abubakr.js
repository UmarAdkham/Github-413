const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const file = document.getElementById('uploadFile').files[0]

    const formData = new FormData();
    formData.append('file', file)

    fetch(`https://api.escuelajs.co/api/v1/files/upload`, 
        {
            method: 'POST',
            body: formData
        }
    )
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
})