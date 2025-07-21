document.getElementById('minify-btn').addEventListener('click', function() {
    let css = document.getElementById('css-input').value;
    
    css = css.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, ''); // remove comments
    css = css.replace(/\s+/g, ' '); // collapse whitespace
    css = css.replace(/\s*([;:{},])\s*/g, '$1'); // remove space around separators

    document.getElementById('minified-css').value = css.trim();
}); 