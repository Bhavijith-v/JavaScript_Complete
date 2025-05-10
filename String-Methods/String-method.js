let String = "Bhavijith"


console.log(String.charAt(0)); // Output: B

console.log(String.charCodeAt(0)); // Output: 66

console.log(String.concat(" Rajput")); // Output: Bhavijith Rajput

console.log(String.endsWith("ith")); // Output: true

console.log(String.includes("avi")); // Output: true

console.log(String.indexOf("avi")); // Output: 2

console.log(String.lastIndexOf("avi")); // Output: 2

console.log(String.localeCompare("Bhavijith")); // Output: 0

console.log(String.match(/[a-z]/gi)); // Output: ["b", "h", "a", "v", "i", "j", "i", "t", "h"]

console.log(String.repeat(3)); // Output: BhavijithBhavijithBhavijith

console.log(String.replace("avi", "ajay")); // Output: Bhajijith

console.log(String.search(/[a-z]/gi)); // Output: 0


//pad at start
let str1 = "42"
let paddedStart = str1.padStart(5, "0")
console.log(paddedStart) // Output: 00042;

//pad at end
let str2 = "42"
let paddedEnd = str2.padEnd(5, "0")
console.log(paddedEnd) // Output: 42000;

// pad with default space
let str3 = "42"
let paddedSpace = str3.padStart(5)
console.log(paddedSpace) // Output:   42;


let str = "    hello world   ";
console.log(str.trim()); // Output: hello world

console.log("   Hello   ".trimStart()); // Output: Hello  
console.log("   Hello   ".trimEnd()); // Output:   Hello







