function common(arr1,arr2) {
    return arr1.filter(item => arr2.includes(item));
}

console.log(common([1, 2, 3, 4], [4, 5, 6, 7])); // Output: [4, 5]