function calculator(a, op, b) {
    if (typeof a !== 'number') return;
    if (typeof b !== 'number') return;
    if (typeof sym !== 'string') return;
    const ops = ['+', '-', '*', '/']
    if (!ops.includes(op)) return;

    let result;
    if (op === '+') result = a + b;
    if (op === '-') result = a - b;
    if (op === '*') result = a * b;
    if (op === '/') result = a / b;

    console.log(`The result of ${a} ${op} ${b} is: ${result}.`)
}

calculator(4, '*', 5);