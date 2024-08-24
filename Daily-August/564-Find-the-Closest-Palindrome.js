/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function (n) {
    const c1 = String(10 ** (n.length - 1) - 1);

    const c2 = String(10 ** n.length + 1);

    let c3 = n.split('');
    for (let i = 0; i < Math.floor(n.length / 2); i++) {
        c3[n.length - 1 - i] = c3[i];
    }
    c3 = c3.join('');

    const c4 = helper(n, 1);
    const c5 = helper(n, -1);

    let ans = '';
    let minDiff = Infinity;
    const palindromes = [c1, c2, c3, c4, c5].filter((val) => val !== n);
    for (const palindrome of palindromes) {
        const diff = Math.abs(+palindrome - +n);
        if (diff < minDiff) {
            ans = palindrome;
            minDiff = diff;
        } else if (diff === minDiff && +palindrome < +ans) {
            ans = palindrome;
            minDiff = diff;
        }
    }

    return ans;
};

function helper(n, value) {
    const substring = n.slice(0, Math.ceil(n.length / 2));
    const first = +substring + value;
    let second = String(first); // if even
    if (n.length % 2 === 1) second = second.slice(0, second.length - 1);
    second = second.split('').reverse().join('');

    return `${first}${second}`;
};