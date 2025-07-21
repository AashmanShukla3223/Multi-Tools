document.addEventListener('DOMContentLoaded', function() {
    const colorPicker = document.getElementById('color-picker');
    const colorCodes = document.getElementById('color-codes');

    const updateColorCodes = (hex) => {
        const rgb = hexToRgb(hex);
        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
        
        colorCodes.innerHTML = `
            <p><strong>HEX:</strong> ${hex}</p>
            <p><strong>RGB:</strong> rgb(${rgb.r}, ${rgb.g}, ${rgb.b})</p>
            <p><strong>HSL:</strong> hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)</p>
        `;
    };

    colorPicker.addEventListener('input', (e) => {
        updateColorCodes(e.target.value);
    });

    // Helper functions
    function hexToRgb(hex) {
        let r = 0, g = 0, b = 0;
        if (hex.length == 4) {
            r = "0x" + hex[1] + hex[1];
            g = "0x" + hex[2] + hex[2];
            b = "0x" + hex[3] + hex[3];
        } else if (hex.length == 7) {
            r = "0x" + hex[1] + hex[2];
            g = "0x" + hex[3] + hex[4];
            b = "0x" + hex[5] + hex[6];
        }
        return {r: +r, g: +g, b: +b};
    }

    function rgbToHsl(r, g, b) {
        r /= 255, g /= 255, b /= 255;
        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max == min) {
            h = s = 0; // achromatic
        } else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return {h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100)};
    }

    updateColorCodes(colorPicker.value);
}); 