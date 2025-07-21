document.addEventListener('DOMContentLoaded', function() {
    const imageInput = document.getElementById('image-input');
    const imageToCrop = document.getElementById('image-to-crop');
    const cropBtn = document.getElementById('crop-btn');
    const resultDiv = document.getElementById('result');
    let cropper;

    imageInput.addEventListener('change', function(e) {
        if (e.target.files.length) {
            const reader = new FileReader();
            reader.onload = function(e) {
                if(cropper) {
                    cropper.destroy();
                }
                imageToCrop.src = e.target.result;
                cropper = new Cropper(imageToCrop, {
                    aspectRatio: 16 / 9,
                    viewMode: 1,
                });
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    });

    cropBtn.addEventListener('click', function() {
        if (cropper) {
            const canvas = cropper.getCroppedCanvas();
            const croppedUrl = canvas.toDataURL();
            resultDiv.innerHTML = `
                <p>Your cropped image:</p>
                <img src="${croppedUrl}" class="img-fluid mb-2">
                <a href="${croppedUrl}" class="btn btn-success" download="cropped_image.png">Download Image</a>
            `;
        }
    });
}); 