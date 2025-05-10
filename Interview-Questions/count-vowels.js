function countVowels(str) {
    const match = str.match(/[aeiou]/gi);
    return match ? match.length : 0;
}

console.log(countVowels('Hello World')); // Output: 3
console.log(countVowels('cccc') );
