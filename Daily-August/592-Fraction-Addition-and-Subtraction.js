/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
    let num = 0, den = 1;
    let n = expression.length, i = 0;

    while (i < n) {
        let sign = 1;
        if (expression[i] === '+' || expression[i] === '-') {
            if (expression[i] === '-') sign = -1;
            i++;
        }

        let x = 0;
        while (i < n && !isNaN(expression[i]) && expression[i] !== '/') {
            x = x * 10 + (expression[i] - '0');
            i++;
        }

        i++;

        let y = 0;
        while (i < n && !isNaN(expression[i])) {
            y = y * 10 + (expression[i] - '0');
            i++;
        }

        x *= sign;
        num = num * y + x * den;
        den *= y;
    }

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    let g = gcd(Math.abs(num), den);
    return `${num / g}/${den / g}`;
};