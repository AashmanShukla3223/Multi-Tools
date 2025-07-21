document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('text-input');
    const upperCaseBtn = document.getElementById('upper-case-btn');
    const lowerCaseBtn = document.getElementById('lower-case-btn');
    const titleCaseBtn = document.getElementById('title-case-btn');

    upperCaseBtn.addEventListener('click', () => {
        textInput.value = textInput.value.toUpperCase();
    });

    lowerCaseBtn.addEventListener('click', () => {
        textInput.value = textInput.value.toLowerCase();
    });

    titleCaseBtn.addEventListener('click', () => {
        textInput.value = textInput.value.toLowerCase().split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    });
}); 