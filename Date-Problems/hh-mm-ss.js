let t  = new Date();
let time = t.getHours().toString().padEnd(1, '0') + ':' + t.getMinutes().toString().padEnd(2, '0') + ':' + t.getSeconds().toString().padEnd(2, '0');
console.log(time);
