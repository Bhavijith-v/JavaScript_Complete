function longestword(str) {
    return str.split(' ').reduce((longest, current) =>
        current.length > longest.length ? current : longest, '');
}

console.log(longestword('Hello World This is a Test')); 