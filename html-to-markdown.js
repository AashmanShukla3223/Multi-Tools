document.getElementById('convert-btn').addEventListener('click', function() {
    const htmlInput = document.getElementById('html-input').value;
    const markdownOutput = document.getElementById('markdown-output');
    const turndownService = new TurndownService();
    
    markdownOutput.value = turndownService.turndown(htmlInput);
}); 