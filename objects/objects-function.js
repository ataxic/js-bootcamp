let GetConversion = function(fahrenheit) {
    return {
        fah: fahrenheit, 
        kel: (fahrenheit + 459.67) * 5 / 9,
        cel: (fahrenheit - 32) * 5 / 9
    }
}

let obj = GetConversion(32);

console.log(obj.fah);
console.log(obj.kel);
console.log(obj.cel);



