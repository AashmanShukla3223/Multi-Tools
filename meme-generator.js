document.addEventListener('DOMContentLoaded', function() {
    const imageInput = document.getElementById('image-input');
    const topText = document.getElementById('top-text');
    const bottomText = document.getElementById('bottom-text');
    const canvas = document.getElementById('meme-canvas');
    const downloadBtn = document.getElementById('download-btn');
    const ctx = canvas.getContext('2d');
    let img = new Image();

    const generateMeme = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);

        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.font = '40px Impact';
        ctx.textAlign = 'center';

        ctx.fillText(topText.value, canvas.width / 2, 50);
        ctx.strokeText(topText.value, canvas.width / 2, 50);

        ctx.fillText(bottomText.value, canvas.width / 2, canvas.height - 20);
        ctx.strokeText(bottomText.value, canvas.width / 2, canvas.height - 20);
        
        downloadBtn.href = canvas.toDataURL();
    };

    imageInput.addEventListener('change', (e) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            img.onload = generateMeme;
            img.src = event.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
    });

    topText.addEventListener('input', generateMeme);
    bottomText.addEventListener('input', generateMeme);
}); 