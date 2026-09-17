const f = (x) => x * x * x + Math.sin(x);

let a = parseFloat(prompt('enter left end of interval (a):', '0'));
let b = parseFloat(prompt('enter right end of interval (b):', '3.14'));

if (isNaN(a) || isNaN(b)) {
    alert('a and b should be numbers');
    throw new Error('invalid input');
}

if (a > b) {
    alert('point a should be less than or equal to point b')
} else {
    const n = 100000;

    let method = prompt('enter integration method', 'midpoint')
    const result = integral(f, a, b, n, method);

    console.log('integration result:', result);
    alert(`integration result: ${result}`)
}
