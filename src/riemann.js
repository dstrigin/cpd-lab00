function leftRiemann(f, a, b, n) {
    const h = (b - a) / n;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        const x = a + i * h;
        sum += f(x);
    }
    return sum * h;
}

function rightRiemann(f, a, b, n) {
    const h = (b - a) / n;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        const x = a + (i + 1) * h; 
        sum += f(x);
    }
    return sum * h;
}

function midpoint(f, a, b, n) {
    const h = (b - a) / n;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        const x = a + (i + 0.5) * h; 
        sum += f(x);
    }
    return sum * h;
}

function trapezoidal(f, a, b, n) {
    return (leftRiemann(f, a, b, n) + rightRiemann(f, a, b, n)) / 2;
}
