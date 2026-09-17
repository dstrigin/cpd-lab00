const f = (x) => x * x * x + Math.sin(x);

let a = parseFloat(prompt('enter left end of interval (a):', '0'));
let b = parseFloat(prompt('enter right end of interval (b):', '3.14'));

if (isNaN(a) || isNaN(b)) {
    alert('a and b should be numbers');
    throw new Error('invalid input');
}

const n = 1000;

const result = integral(f, a, b, n, 'midpoint');

console.log('integration result:', result);
