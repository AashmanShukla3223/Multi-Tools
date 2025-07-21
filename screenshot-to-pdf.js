document.getElementById('convert-btn').addEventListener('click', function() {
    const imageInput = document.getElementById('image-input');

    if (imageInput.files.length > 0) {
        const file = imageInput.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF();
                
                const imgWidth = doc.internal.pageSize.getWidth();
                const imgHeight = (img.height * imgWidth) / img.width;

                doc.addImage(img, 'PNG', 0, 0, imgWidth, imgHeight);
                doc.save('screenshot.pdf');
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please select an image file.');
    }
}); 