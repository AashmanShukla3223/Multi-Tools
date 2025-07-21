document.getElementById('convert-btn').addEventListener('click', function() {
    const imageInput = document.getElementById('image-input');
    const base64Output = document.getElementById('base64-output');

    if (imageInput.files.length > 0) {
        const file = imageInput.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            base64Output.value = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        base64Output.value = 'Please select an image file.';
    }
}); 