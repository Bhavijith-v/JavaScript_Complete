const d = new Date();
const formatted = d.getFullYear() + '-' +
String(d.getMonth() + 1).padStart(2, '0') +
'-' + String(d.getDate()).padStart(2, '0') ;
console.log(formatted); // Output: 2023-12-25)