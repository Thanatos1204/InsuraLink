const fs = require('fs');
const { registerFont, createCanvas, loadImage } = require('canvas');

// Register the font
registerFont('./arial/arial.ttf', { family: 'Arial' });

async function generateCertificate(name) {
    // Create the canvas
    const canvas = createCanvas(1414, 2000);
    const ctx = canvas.getContext('2d');

    // Load the background image
    const img = await loadImage('Insurance Template.png');
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Set the font for the large text
    ctx.font = '80px Arial';
    ctx.fillStyle = 'rgb(62, 108, 118)';

    // Measure the width of the text and calculate the x coordinate for centering
    const textWidth = ctx.measureText(name).width;
    const x = (canvas.width - textWidth) / 2;

    // Draw the name at the calculated position
    ctx.fillText(name, x, 760);

    // Set the font for the smaller text and draw it
    ctx.font = '22px Arial';
    ctx.fillStyle = 'rgb(65, 75, 59)';
    ctx.fillText(name, 100, 282);
    ctx.fillText(name, 471, 366);

    // Save the canvas to a file
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync('./Certificates/' + name + '.png', buffer);
}

module.exports = generateCertificate;

// Example usage
generateCertificate('Siddhant');