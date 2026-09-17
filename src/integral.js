function integral(f, a, b, n, method = 'left') {
    switch (method) {
        case 'left': return leftRiemann(f, a, b, n);
        case 'right': return rightRiemann(f, a, b, n);
        case 'midpoint': return midpoint(f, a, b, n);
        case 'trapezoidal': return trapezoidal(f, a, b, n);
        default: throw new Error('incorrect integration method selected! should be one of: left, right, midpoint, trapezoidal');
    }
}
