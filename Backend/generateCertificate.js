const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');
const opentype = require('opentype.js');

async function generateCertificate(name) {
 const canvas = await createCanvas(1414, 2000);
 const ctx = await canvas.getContext('2d');

 const img = await loadImage('Insurance Template.png');
 ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

 // Load the font file
 let font = opentype.loadSync('./arial/arial.ttf');

 ctx.font = `80px ${font}`;
 ctx.fillStyle = 'rgb(62, 108, 118)';

 // Measure the width of the text
 const textWidth = ctx.measureText(name).width;

 // Calculate the x coordinate for centering the text
 const x = (canvas.width - textWidth) / 2;

 // Draw the text at the calculated x coordinate
 ctx.fillText(name, x, 760);
 ctx.font = `22px ${font}`;
 ctx.fillStyle = 'rgb(65, 75, 59)';
 ctx.fillText(name, 100, 282);
 ctx.fillText(name, 471, 366);

 const buffer = canvas.toBuffer('image/png');
 await fs.writeFileSync('./Certificates/' + name + '.png', buffer);
}

module.exports = generateCertificate;
