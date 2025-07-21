document.addEventListener("DOMContentLoaded", function() {
    // Load header
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });

    // Load footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });

    const tools = [
        { name: "Image to PNG Converter", category: "Image Tools", url: "tools/image-to-png.html" },
        { name: "Image to JPG Converter", category: "Image Tools", url: "tools/image-to-jpg.html" },
        { name: "Image Resizer", category: "Image Tools", url: "tools/image-resizer.html" },
        { name: "Image Compressor", category: "Image Tools", url: "tools/image-compressor.html" },
        { name: "Image Cropper", category: "Image Tools", url: "tools/image-cropper.html" },
        { name: "Convert Image to Base64", category: "Image Tools", url: "tools/image-to-base64.html" },
        { name: "Convert WebP to PNG", category: "Image Tools", url: "tools/webp-to-png.html" },
        { name: "GIF Maker", category: "Image Tools", url: "tools/gif-maker.html" },
        { name: "QR Code Generator", category: "Image Tools", url: "tools/qr-code-generator.html" },
        { name: "Screenshot to PDF Converter", category: "Image Tools", url: "tools/screenshot-to-pdf.html" },

        // SEO Tools
        { name: "Meta Tag Generator", category: "SEO Tools", url: "tools/meta-tag-generator.html" },
        { name: "Keyword Density Checker", category: "SEO Tools", url: "tools/keyword-density-checker.html" },
        { name: "Sitemap Generator", category: "SEO Tools", url: "tools/sitemap-generator.html" },
        { name: "Robots.txt Generator", category: "SEO Tools", url: "tools/robots-txt-generator.html" },
        { name: "XML Sitemap Validator", category: "SEO Tools", url: "tools/xml-sitemap-validator.html" },

        // Math & Calculators
        { name: "Percentage Calculator", category: "Math & Calculators", url: "tools/percentage-calculator.html" },
        { name: "Age Calculator", category: "Math & Calculators", url: "tools/age-calculator.html" },
        { name: "BMI Calculator", category: "Math & Calculators", url: "tools/bmi-calculator.html" },
        { name: "Loan EMI Calculator", category: "Math & Calculators", url: "tools/loan-emi-calculator.html" },
        { name: "Scientific Calculator", category: "Math & Calculators", url: "tools/scientific-calculator.html" },
        { name: "Discount Calculator", category: "Math & Calculators", url: "tools/discount-calculator.html" },
        { name: "Time Zone Converter", category: "Math & Calculators", url: "tools/time-zone-converter.html" },
        { name: "Binary to Decimal Converter", category: "Math & Calculators", url: "tools/binary-to-decimal-converter.html" },
        { name: "Tip Calculator", category: "Math & Calculators", url: "tools/tip-calculator.html" },

        // Unit Converters
        { name: "Length Converter", category: "Unit Converters", url: "tools/length-converter.html" },
        { name: "Weight Converter", category: "Unit Converters", url: "tools/weight-converter.html" },
        { name: "Speed Converter", category: "Unit Converters", url: "tools/speed-converter.html" },
        { name: "Temperature Converter", category: "Unit Converters", url: "tools/temperature-converter.html" },
        { name: "Volume Converter", category: "Unit Converters", url: "tools/volume-converter.html" },
        { name: "Data Storage Converter", category: "Unit Converters", url: "tools/data-storage-converter.html" },
        { name: "Energy Converter", category: "Unit Converters", url: "tools/energy-converter.html" },
        { name: "Pressure Converter", category: "Unit Converters", url: "tools/pressure-converter.html" },
        { name: "Fuel Efficiency Converter", category: "Unit Converters", url: "tools/fuel-efficiency-converter.html" },
        { name: "Angle Converter", category: "Unit Converters", url: "tools/angle-converter.html" },

        // Text Tools
        { name: "Word Counter", category: "Text Tools", url: "tools/word-counter.html" },
        { name: "Character Counter", category: "Text Tools", url: "tools/character-counter.html" },
        { name: "Case Converter", category: "Text Tools", url: "tools/case-converter.html" },
        { name: "URL Encoder & Decoder", category: "Text Tools", url: "tools/url-encoder-decoder.html" },
        { name: "Fancy Text Generator", category: "Text Tools", url: "tools/fancy-text-generator.html" },
        { name: "Random Text Generator", category: "Text Tools", url: "tools/random-text-generator.html" },

        // Developer Tools
        { name: "JSON Formatter", category: "Developer Tools", url: "tools/json-formatter.html" },
        { name: "HTML to Markdown Converter", category: "Developer Tools", url: "tools/html-to-markdown.html" },
        { name: "CSS Minifier", category: "Developer Tools", url: "tools/css-minifier.html" },
        { name: "JavaScript Minifier", category: "Developer Tools", url: "tools/javascript-minifier.html" },
        { name: "SQL Formatter", category: "Developer Tools", url: "tools/sql-formatter.html" },
        { name: "HTACCESS Redirect Generator", category: "Developer Tools", url: "tools/htaccess-redirect-generator.html" },
        { name: "Markdown to HTML Converter", category: "Developer Tools", url: "tools/markdown-to-html.html" },
        { name: "Color Code Picker", category: "Developer Tools", url: "tools/color-code-picker.html" },
        { name: "Base64 Encoder & Decoder", category: "Developer Tools", url: "tools/base64-encoder-decoder.html" },
        { name: "IP Address Lookup", category: "Developer Tools", url: "tools/ip-address-lookup.html" },

        // Security & Encryption Tools
        { name: "MD5 Hash Generator", category: "Security & Encryption Tools", url: "tools/md5-hash-generator.html" },
        { name: "SHA256 Hash Generator", category: "Security & Encryption Tools", url: "tools/sha256-hash-generator.html" },
        { name: "Password Generator", category: "Security & Encryption Tools", url: "tools/password-generator.html" },
        { name: "Random String Generator", category: "Security & Encryption Tools", url: "tools/random-string-generator.html" },
        { name: "URL Shortener", category: "Security & Encryption Tools", url: "tools/url-shortener.html" },
        { name: "IP Geolocation Finder", category: "Security & Encryption Tools", url: "tools/ip-geolocation-finder.html" },
        { name: "SSL Certificate Checker", category: "Security & Encryption Tools", url: "tools/ssl-certificate-checker.html" },
        { name: "Whois Lookup", category: "Security & Encryption Tools", url: "tools/whois-lookup.html" },
        { name: "HTTP Headers Checker", category: "Security & Encryption Tools", url: "tools/http-headers-checker.html" },
        { name: "Privacy Policy Generator", category: "Security & Encryption Tools", url: "tools/privacy-policy-generator.html" },

        // Miscellaneous Tools
        { name: "Barcode Generator", category: "Miscellaneous Tools", url: "tools/barcode-generator.html" },
        { name: "Meme Generator", category: "Miscellaneous Tools", url: "tools/meme-generator.html" },
        { name: "Resume Builder", category: "Miscellaneous Tools", url: "tools/resume-builder.html" },
        { name: "Invoice Generator", category: "Miscellaneous Tools", url: "tools/invoice-generator.html" },
        { name: "Business Name Generator", category: "Miscellaneous Tools", url: "tools/business-name-generator.html" },
        { name: "Lottery Number Generator", category: "Miscellaneous Tools", url: "tools/lottery-number-generator.html" },
        { name: "Flip a Coin Simulator", category: "Miscellaneous Tools", url: "tools/flip-a-coin-simulator.html" },
        { name: "Random Number Generator", category: "Miscellaneous Tools", url: "tools/random-number-generator.html" },
        { name: "Dice Roller Simulator", category: "Miscellaneous Tools", url: "tools/dice-roller-simulator.html" },
        { name: "Internet Speed Test", category: "Miscellaneous Tools", url: "tools/internet-speed-test.html" }
    ];

    const toolsContainer = document.getElementById('tools-container');
    const searchBar = document.getElementById('search-bar');

    const renderTools = (toolsToRender) => {
        toolsContainer.innerHTML = '';
        const categories = {};

        toolsToRender.forEach(tool => {
            if (!categories[tool.category]) {
                categories[tool.category] = [];
            }
            categories[tool.category].push(tool);
        });

        for (const category in categories) {
            const categoryContainer = document.createElement('div');
            categoryContainer.className = 'col-12 mt-4';
            let categoryHtml = `<h3>${category}</h3><div class="row">`;

            categories[category].forEach(tool => {
                categoryHtml += `
                    <div class="col-md-4 mb-4">
                        <div class="card tool-card" onclick="window.location.href='${tool.url}'">
                            <div class="card-body">
                                <h5 class="card-title">${tool.name}</h5>
                            </div>
                        </div>
                    </div>
                `;
            });

            categoryHtml += `</div>`;
            categoryContainer.innerHTML = categoryHtml;
            toolsContainer.appendChild(categoryContainer);
        }
    };

    renderTools(tools);

    searchBar.addEventListener('keyup', (e) => {
        const searchQuery = e.target.value.toLowerCase();
        const filteredTools = tools.filter(tool => {
            return tool.name.toLowerCase().includes(searchQuery);
        });
        renderTools(filteredTools);
    });
}); 