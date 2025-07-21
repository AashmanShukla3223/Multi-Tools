document.getElementById('format-btn').addEventListener('click', function() {
    const sqlInput = document.getElementById('sql-input').value;
    const formattedSql = document.getElementById('formatted-sql');

    try {
        formattedSql.value = sqlFormatter.format(sqlInput);
    } catch (e) {
        formattedSql.value = 'Invalid SQL: ' + e.message;
    }
}); 