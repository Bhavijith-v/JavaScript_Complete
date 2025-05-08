function pallindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(pallindrome('racecar')); // Output: true