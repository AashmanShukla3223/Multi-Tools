document.getElementById('convert-btn').addEventListener('click', function() {
    const imageInput = document.getElementById('image-input');
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

                const jpgUrl = canvas.toDataURL('image/jpeg', 0.9); // 0.9 is the quality
                resultDiv.innerHTML = `
                    <p>Your image has been converted to JPG:</p>
                    <img src="${jpgUrl}" class="img-fluid mb-2">
                    <a href="${jpgUrl}" class="btn btn-success" download="converted.jpg">Download JPG</a>
                `;
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        resultDiv.innerHTML = '<div class="alert alert-warning">Please select an image file.</div>';
    }
}); 