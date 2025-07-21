document.addEventListener('DOMContentLoaded', function() {
    const rulesContainer = document.getElementById('rules-container');
    const addRuleBtn = document.getElementById('add-rule-btn');
    const generateBtn = document.getElementById('generate-btn');
    let ruleCount = 0;

    const addRule = () => {
        ruleCount++;
        const ruleDiv = document.createElement('div');
        ruleDiv.className = 'form-row mb-2';
        ruleDiv.innerHTML = `
            <div class="col">
                <select class="form-control">
                    <option value="Allow">Allow</option>
                    <option value="Disallow" selected>Disallow</option>
                </select>
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="/directory/">
            </div>
            <div class="col-auto">
                <button class="btn btn-danger remove-rule-btn">Remove</button>
            </div>
        `;
        rulesContainer.appendChild(ruleDiv);
    };

    rulesContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-rule-btn')) {
            e.target.closest('.form-row').remove();
        }
    });

    addRuleBtn.addEventListener('click', addRule);

    generateBtn.addEventListener('click', function() {
        const userAgent = document.getElementById('user-agent').value;
        let robotsTxt = `User-agent: ${userAgent}\n`;

        const rules = rulesContainer.querySelectorAll('.form-row');
        rules.forEach(rule => {
            const type = rule.querySelector('select').value;
            const path = rule.querySelector('input').value;
            robotsTxt += `${type}: ${path}\n`;
        });

        document.getElementById('generated-robots').value = robotsTxt;
    });

    // Add a default rule
    addRule();
}); 