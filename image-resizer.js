document.getElementById('resize-btn').addEventListener('click', function() {
    const imageInput = document.getElementById('image-input');
    const widthInput = document.getElementById('width-input');
    const heightInput = document.getElementById('height-input');
    const resultDiv = document.getElementById('result');

    if (imageInput.files.length > 0) {
        const file = imageInput.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement('canvas');
                const newWidth = widthInput.value || img.width;
                const newHeight = heightInput.value || img.height;

                canvas.width = newWidth;
                canvas.height = newHeight;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, newWidth, newHeight);

                const resizedUrl = canvas.toDataURL(file.type);
                resultDiv.innerHTML = `
                    <p>Your resized image:</p>
                    <img src="${resizedUrl}" class="img-fluid mb-2">
                    <a href="${resizedUrl}" class="btn btn-success" download="resized_image.png">Download Image</a>
                `;
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        resultDiv.innerHTML = '<div class="alert alert-warning">Please select an image file.</div>';
    }
}); 