document.getElementById('convert-btn').addEventListener('click', function() {
    const markdownInput = document.getElementById('markdown-input').value;
    const htmlOutput = document.getElementById('html-output');
    const converter = new showdown.Converter();
    
    htmlOutput.value = converter.makeHtml(markdownInput);
}); 