#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Create dist directory if it doesn't exist
if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}

// Copy all HTML files to dist
const files = fs.readdirSync('.').filter(file => file.endsWith('.html'));
files.forEach(file => {
    fs.copyFileSync(file, path.join('dist', file));
    console.log(`Copied ${file} to dist/`);
});

// Create assets folder in dist if it doesn't exist
if (!fs.existsSync('dist/assets')) {
    fs.mkdirSync('dist/assets');
}

// Copy assets folder if it exists
if (fs.existsSync('assets')) {
    const copyRecursiveSync = (src, dest) => {
        const exists = fs.existsSync(src);
        const stats = exists && fs.statSync(src);
        const isDirectory = exists && stats.isDirectory();
        if (isDirectory) {
            if (!fs.existsSync(dest)) {
                fs.mkdirSync(dest);
            }
            fs.readdirSync(src).forEach(childItemName => {
                copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
            });
        } else {
            fs.copyFileSync(src, dest);
        }
    };
    
    copyRecursiveSync('assets', 'dist/assets');
    console.log('Copied assets to dist/assets/');
}

console.log('Build completed successfully!');