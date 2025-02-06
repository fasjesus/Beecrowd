const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputs = [];

rl.on('line', (line) => {
    inputs.push(parseFloat(line));
    if (inputs.length === 3) {
        const A = inputs[0] * 2;
        const B = inputs[1] * 3;
        const C = inputs[2] * 5;
        const MEDIA = (A + B + C) / 10;
        
        console.log(`MEDIA = ${MEDIA.toFixed(1)}`);
        rl.close();
    }
});
