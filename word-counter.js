document.getElementById('text-input').addEventListener('input', function() {
    const text = this.value;
    const resultDiv = document.getElementById('result');
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    resultDiv.innerHTML = `<div class="alert alert-info">Word count: ${wordCount}</div>`;
}); 