function Amstrong(num) {
    const digits = num.toString().split('');
    const len = digits.length;
    const sum  = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), len), 0);
    return sum === num;
}

console.log(Amstrong(153)); // Output: true