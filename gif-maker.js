document.getElementById('create-gif-btn').addEventListener('click', function() {
    const imageInput = document.getElementById('image-input');
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>';

    if (imageInput.files.length > 1) {
        const gif = new GIF({
            workers: 2,
            quality: 10
        });

        Array.from(imageInput.files).forEach(file => {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = new Image();
                img.onload = function() {
                    gif.addFrame(img, { delay: 200 });
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        });

        gif.on('finished', function(blob) {
            const url = URL.createObjectURL(blob);
            resultDiv.innerHTML = `
                <p>Your GIF has been created:</p>
                <img src="${url}" class="img-fluid mb-2">
                <a href="${url}" class="btn btn-success" download="created.gif">Download GIF</a>
            `;
        });

        gif.render();

    } else {
        resultDiv.innerHTML = '<div class="alert alert-warning">Please select at least 2 images.</div>';
    }
}); 