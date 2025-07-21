document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const experienceInput = document.getElementById('experience');

    const previewName = document.getElementById('preview-name');
    const previewEmail = document.getElementById('preview-email');
    const previewExperience = document.getElementById('preview-experience');

    nameInput.addEventListener('input', () => {
        previewName.textContent = nameInput.value;
    });

    emailInput.addEventListener('input', () => {
        previewEmail.textContent = emailInput.value;
    });

    experienceInput.addEventListener('input', () => {
        previewExperience.textContent = experienceInput.value;
    });
}); 