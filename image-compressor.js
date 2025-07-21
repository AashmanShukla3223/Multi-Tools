document.getElementById('compress-btn').addEventListener('click', function() {
    const imageInput = document.getElementById('image-input');
    const qualityInput = document.getElementById('quality-input');
    const resultDiv = document.getElementById('result');

    if (imageInput.files.length > 0) {
        const file = imageInput.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);

                const compressedUrl = canvas.toDataURL('image/jpeg', parseFloat(qualityInput.value));
                resultDiv.innerHTML = `
                    <p>Your compressed image:</p>
                    <img src="${compressedUrl}" class="img-fluid mb-2">
                    <a href="${compressedUrl}" class="btn btn-success" download="compressed_image.jpg">Download Image</a>
                `;
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        resultDiv.innerHTML = '<div class="alert alert-warning">Please select an image file.</div>';
    }
}); 