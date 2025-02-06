const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputs = [];

rl.on('line', (line) => {
    inputs.push(parseInt(line));

    if (inputs.length === 4) {
        const [A, B, C, D] = inputs;
        const DIFERENCA = A * B - C * D;

        console.log(`DIFERENCA = ${DIFERENCA}`);
        rl.close();
    }
});

