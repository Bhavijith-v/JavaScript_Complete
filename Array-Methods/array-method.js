let arr  =[1, 2, 3, 4, 5];
console.log(arr.push(6)); // Output: 6



console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

console.log(arr.pop()); // Output: 6

console.log(arr.shift()); // Output: 1);

console.log(arr); // Output: [2, 3, 4, 5]

console.log(arr.unshift(1)); // Output: 5

console.log(arr); // Output: [1, 2, 3, 4, 5]


let arr1 = [1, 2];
let arr2 = [3, 4];
console.log(arr1.concat(arr2)); // Output: [1, 2, 3, 4]


console.log(arr.slice(1, 3)); // Output: [2, 3]


console.log(arr.splice(2,1,5)); 


arr.forEach(element => {
    console.log(element);
}); // Output: 1, 2, 5, 4, 5

console.log(arr);


console.log(arr.map(element => element * 2)); // Output: [2, 4, 10, 8, 10]

let arrNew =[1,2,3,4,5,6]
console.log(arrNew.filter(element => element % 2 === 0)); // Output: [2, 4, 6]

console.log(arrNew.reduce((accumulator, currentValue) => accumulator + currentValue, 0)); // Output: 21

console.log(arrNew.some(element => element % 2 === 0)); // Output: true



console.log(arrNew.every(element => element % 2 === 0)); // Output: false



console.log(arrNew.find(element => element >5));

console.log(arr.sort());


console.log(arrNew.reverse()); // Output: [6, 5, 4, 3, 2, 1]



let strarr = ['a','b','c','d','e'];
console.log(strarr.join('-')); // Output: a-b-c-d-e