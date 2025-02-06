const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputs = [];

rl.on('line', (line) => {
    inputs.push(inputs.length < 2 ? parseInt(line) : parseFloat(line));

    if (inputs.length === 3) {
        const [NUMBER, B, C] = inputs;
        const SALARY = B * C;

        console.log(`NUMBER = ${NUMBER}\nSALARY = U$ ${SALARY.toFixed(2)}`);
        rl.close();
    }
});
