document.getElementById('calculate-btn').addEventListener('click', function() {
    const text = document.getElementById('text-input').value.toLowerCase();
    const words = text.match(/\b\w+\b/g);
    const totalWords = words.length;

    const stopWords = ["the", "a", "an", "in", "is", "it", "of", "and", "to", "for", "on", "with", "that", "this"];

    const wordCounts = {};
    words.forEach(word => {
        if (stopWords.indexOf(word) === -1) {
            wordCounts[word] = (wordCounts[word] || 0) + 1;
        }
    });

    const sortedWords = Object.keys(wordCounts).sort((a, b) => wordCounts[b] - wordCounts[a]);

    const resultsBody = document.getElementById('results-body');
    resultsBody.innerHTML = '';

    sortedWords.slice(0, 10).forEach(word => {
        const density = ((wordCounts[word] / totalWords) * 100).toFixed(2);
        const row = `<tr>
            <td>${word}</td>
            <td>${wordCounts[word]}</td>
            <td>${density}%</td>
        </tr>`;
        resultsBody.innerHTML += row;
    });
}); 