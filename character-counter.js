document.getElementById('text-input').addEventListener('input', function() {
    const text = this.value;
    const resultDiv = document.getElementById('result');
    const charCount = text.length;

    resultDiv.innerHTML = `<div class="alert alert-info">Character count: ${charCount}</div>`;
}); 